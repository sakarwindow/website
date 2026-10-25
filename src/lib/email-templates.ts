import { company } from "./data";

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  product: string;
  projectType: string;
  message: string;
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Email clients need table layouts and inline styles.
function layout(title: string, body: string) {
  return `<!doctype html>
<html><body style="margin:0;background:#f5f3ee;font-family:Helvetica,Arial,sans-serif;color:#0a0e17">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 12px"><tr><td align="center">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:20px;overflow:hidden">
  <tr><td style="background:#0a0e17;padding:28px 32px">
    <img src="${company.url}/brand/sakar-wordmark-light.png" alt="SAKAR Window System" height="34" style="display:block;height:34px;width:auto;border:0;color:#ffffff;font-size:20px;font-weight:700">
  </td></tr>
  <tr><td style="padding:32px">
    <h1 style="margin:0 0 20px;font-size:24px;letter-spacing:-0.5px">${title}</h1>
    ${body}
  </td></tr>
  <tr><td style="padding:20px 32px;background:#f5f3ee;font-size:12px;color:#6b7280">
    ${esc(company.name)} · ${esc(company.phone)} · ${esc(company.email)}<br>${esc(company.address)}
  </td></tr>
</table></td></tr></table></body></html>`;
}

function rows(e: Enquiry) {
  const fields: [string, string][] = [
    ["Name", e.name],
    ["Phone", e.phone],
    ["Email", e.email || "—"],
    ["Interested in", e.product || "Not sure yet"],
    ["Project type", e.projectType],
  ];
  return fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 0;border-bottom:1px solid #eee;color:#6b7280;width:140px;font-size:14px">${k}</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:600;font-size:14px">${esc(v)}</td></tr>`,
    )
    .join("");
}

/** Sent to the company inbox. */
export function enquiryNotification(e: Enquiry) {
  const html = layout(
    "New website enquiry",
    `<table width="100%" cellpadding="0" cellspacing="0">${rows(e)}</table>
     ${e.message ? `<p style="margin:24px 0 8px;color:#6b7280;font-size:14px">Message</p><p style="margin:0;padding:16px;background:#f5f3ee;border-radius:12px;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(e.message)}</p>` : ""}
     <p style="margin:28px 0 0"><a href="tel:${esc(e.phone.replace(/[^\d+]/g, ""))}" style="display:inline-block;background:#c9a36a;color:#0a0e17;padding:12px 22px;border-radius:999px;font-weight:700;text-decoration:none">Call ${esc(e.name.split(" ")[0])}</a></p>`,
  );
  const text = [
    "New website enquiry",
    `Name: ${e.name}`,
    `Phone: ${e.phone}`,
    `Email: ${e.email || "-"}`,
    `Interested in: ${e.product || "Not sure yet"}`,
    `Project type: ${e.projectType}`,
    "",
    e.message,
  ].join("\n");
  return { subject: `New enquiry — ${e.name}${e.product ? ` (${e.product})` : ""}`, html, text };
}

/** Confirmation sent to the customer. */
export function enquiryConfirmation(e: Enquiry) {
  const first = e.name.split(" ")[0];
  const html = layout(
    `Thank you, ${esc(first)}!`,
    `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151">We've received your enquiry and our team will get back to you within one working day with recommendations and a free, no-obligation quote.</p>
     <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#374151">Here's a copy of what you sent:</p>
     <table width="100%" cellpadding="0" cellspacing="0">${rows(e)}</table>
     <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:#374151">Need to talk sooner? Call us on <a href="tel:${esc(company.phone.replace(/\s/g, ""))}" style="color:#b08343;font-weight:700">${esc(company.phone)}</a>.</p>`,
  );
  const text = `Thank you, ${first}!\n\nWe've received your enquiry and will get back to you within one working day.\n\nNeed to talk sooner? Call ${company.phone}.\n\n— ${company.name}`;
  return { subject: `We've received your enquiry — ${company.name}`, html, text };
}
