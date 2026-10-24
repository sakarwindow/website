"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import clsx from "clsx";
import { products } from "@/lib/data";
import { sendEnquiry, type EnquiryState } from "@/app/contact/actions";

const field =
  "peer w-full rounded-2xl border border-ink/15 bg-paper/60 px-5 pb-3 pt-7 outline-none transition focus:border-brass focus:bg-white aria-invalid:border-red-400";
const label =
  "pointer-events-none absolute left-5 top-5 origin-left text-ink/50 transition-all peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-brass peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-xs";

export default function ContactForm() {
  // Bumping the key remounts the form with fresh state for "send another"
  const [round, setRound] = useState(0);
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8 md:p-12">
      <EnquiryForm key={round} onReset={() => setRound((r) => r + 1)} />
    </div>
  );
}

function EnquiryForm({ onReset }: { onReset: () => void }) {
  const params = useSearchParams();
  const preselected = products.find((p) => p.slug === params.get("product"))?.name ?? "";
  const [state, formAction, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, { status: "idle" });
  const [startedAt] = useState(() => Date.now());
  const err = state.errors ?? {};
  const v = state.values;

  return (
    <AnimatePresence mode="wait">
      {state.status === "success" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid min-h-[28rem] place-items-center text-center"
        >
          <div>
            <motion.span
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
              className="inline-block"
            >
              <CheckCircle2 className="mx-auto size-16 text-brass" />
            </motion.span>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight">Thank you!</h3>
            <p className="mx-auto mt-3 max-w-sm text-ink/55">
              Your enquiry has been sent. Our team will get back to you within one working day.
            </p>
            <button onClick={onReset} className="mt-8 font-semibold underline underline-offset-4">
              Send another enquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.form key="form" exit={{ opacity: 0 }} action={formAction} className="grid gap-5 sm:grid-cols-2" noValidate>
          <h3 className="text-3xl font-semibold tracking-tight sm:col-span-2">Request a quote</h3>

          {/* Spam guards: hidden from people, filled in by bots */}
          <input type="hidden" name="startedAt" value={startedAt} />
          <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <Field id="name" label="Full name" error={err.name}>
            <input id="name" name="name" defaultValue={v?.name} required autoComplete="name" placeholder=" " aria-invalid={!!err.name} className={field} />
          </Field>
          <Field id="phone" label="Phone" error={err.phone}>
            <input id="phone" name="phone" type="tel" defaultValue={v?.phone} required autoComplete="tel" inputMode="tel" placeholder=" " aria-invalid={!!err.phone} className={field} />
          </Field>
          <Field id="email" label="Email (for a confirmation copy)" error={err.email} wide>
            <input id="email" name="email" type="email" defaultValue={v?.email} autoComplete="email" placeholder=" " aria-invalid={!!err.email} className={field} />
          </Field>

          <div className="relative">
            <select key={v?.product} id="product" name="product" defaultValue={v?.product ?? preselected} className={`${field} appearance-none`}>
              <option value="">Not sure yet</option>
              {products.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
            </select>
            <label htmlFor="product" className="pointer-events-none absolute left-5 top-2.5 text-xs text-ink/50">
              Interested in
            </label>
          </div>
          <div className="relative">
            <select key={v?.projectType} id="projectType" name="projectType" defaultValue={v?.projectType ?? "Residential"} className={`${field} appearance-none`}>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Builder / Developer</option>
              <option>Architect / Consultant</option>
            </select>
            <label htmlFor="projectType" className="pointer-events-none absolute left-5 top-2.5 text-xs text-ink/50">
              Project type
            </label>
          </div>
          <div className="relative sm:col-span-2">
            <textarea id="message" name="message" defaultValue={v?.message} rows={5} maxLength={3000} placeholder=" " className={`${field} resize-none`} />
            <label htmlFor="message" className={label}>Tell us about your project</label>
          </div>

          <AnimatePresence>
            {state.status === "error" && state.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                role="alert"
                className="rounded-2xl bg-red-50 px-5 py-3 text-sm text-red-700 sm:col-span-2"
              >
                {state.message}
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={pending}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:bg-brass hover:text-ink disabled:cursor-wait disabled:opacity-70 sm:col-span-2 sm:justify-self-start"
          >
            {pending ? (
              <>
                Sending <Loader2 className="size-5 animate-spin" />
              </>
            ) : (
              <>
                Send enquiry
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  label: text,
  error,
  wide,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("relative", wide && "sm:col-span-2")}>
      {children}
      <label htmlFor={id} className={label}>
        {text}
      </label>
      {error && <p className="mt-1.5 pl-5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
