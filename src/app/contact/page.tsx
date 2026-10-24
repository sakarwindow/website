import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free quote or book a site visit with ${company.name}.`,
};

const details = [
  { icon: Phone, label: "Call us", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Visit", value: company.address },
  { icon: Clock, label: "Hours", value: company.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's frame your next project."
        italic={["frame"]}
        text="Tell us about your space. We'll get back within one working day with recommendations and a free, no-obligation quote."
      />

      <section className="bg-paper px-6 py-16 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {details.map((d, i) => {
              const body = (
                <>
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brass transition-colors duration-500 group-hover:bg-brass group-hover:text-ink">
                    <d.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">{d.label}</span>
                    <span className="mt-1 block text-base [overflow-wrap:anywhere] font-medium sm:text-lg">{d.value}</span>
                  </span>
                </>
              );
              const cls =
                "group flex items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5 sm:gap-5 sm:p-6 transition-shadow duration-500 hover:shadow-xl";
              return (
                <Reveal key={d.label} delay={i * 0.08}>
                  {d.href ? (
                    <a href={d.href} className={cls}>
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <Suspense>
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
