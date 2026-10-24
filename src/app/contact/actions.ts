"use server";

import { Resend } from "resend";
import { enquiryConfirmation, enquiryNotification, type Enquiry } from "@/lib/email-templates";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "email", string>>;
  /** Echoed back on error so the form can refill what the visitor typed. */
  values?: Enquiry;
};

const MIN_FILL_MS = 3000; // bots submit instantly

export async function sendEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const get = (k: string, max = 200) => String(formData.get(k) ?? "").trim().slice(0, max);

  // Spam guards: hidden honeypot field must stay empty, and the form can't be submitted instantly.
  // Pretend success so bots don't learn to adapt.
  const startedAt = Number(formData.get("startedAt"));
  if (get("company") || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return { status: "success" };
  }

  const enquiry: Enquiry = {
    name: get("name", 100),
    phone: get("phone", 30),
    email: get("email", 200),
    product: get("product", 100),
    projectType: get("projectType", 50) || "Residential",
    message: get("message", 3000),
  };

  const errors: EnquiryState["errors"] = {};
  if (enquiry.name.length < 2) errors.name = "Please enter your name.";
  if (enquiry.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) errors.email = "Please enter a valid email.";
  if (Object.keys(errors).length) return { status: "error", errors, values: enquiry, message: "Please check the highlighted fields." };

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must be set.");
    return {
      status: "error",
      values: enquiry,
      message: "Sorry, the form isn't available right now. Please call or email us directly.",
    };
  }

  const resend = new Resend(RESEND_API_KEY);
  const notification = enquiryNotification(enquiry);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL.split(",").map((s) => s.trim()),
    replyTo: enquiry.email || undefined,
    ...notification,
  });

  if (error) {
    console.error("Contact form: Resend failed", error);
    return { status: "error", values: enquiry, message: "Sorry, we couldn't send your enquiry. Please try again or call us." };
  }

  // The enquiry is already delivered, so a failed confirmation shouldn't fail the submission.
  if (enquiry.email) {
    const confirmation = enquiryConfirmation(enquiry);
    const { error: confirmError } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: enquiry.email,
      ...confirmation,
    });
    if (confirmError) console.error("Contact form: confirmation email failed", confirmError);
  }

  return { status: "success" };
}
