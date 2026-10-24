import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, telHref } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Reveal } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get a free quote or book a site visit with ${company.name}.`,
};

type Line = { text: string; href?: string; external?: boolean };
const details: { icon: typeof Phone; label: string; lines: Line[] }[] = [
  { icon: Phone, label: "Call us", lines: company.phones.map((p) => ({ text: p, href: telHref(p) })) },
  { icon: MessageCircle, label: "WhatsApp", lines: [{ text: "Chat with us on WhatsApp", href: company.whatsapp, external: true }] },
  { icon: Mail, label: "Email", lines: [{ text: company.email, href: `mailto:${company.email}` }] },
  {
    icon: MapPin,
    label: "Visit us",
    lines: [
      ...company.addressLines.map((l) => ({ text: l })),
      { text: "Get directions →", href: company.maps, external: true },
    ],
  },
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
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="group flex items-start gap-4 rounded-3xl border border-ink/10 bg-white p-5 transition-shadow duration-500 hover:shadow-xl sm:gap-5 sm:p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-brass transition-colors duration-500 group-hover:bg-brass group-hover:text-ink">
                    <d.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">{d.label}</span>
                    {d.lines.map((l) =>
                      l.href ? (
                        <a
                          key={l.text}
                          href={l.href}
                          {...(l.external && { target: "_blank", rel: "noopener noreferrer" })}
                          className="mt-1 block text-base font-medium [overflow-wrap:anywhere] transition-colors hover:text-brass sm:text-lg"
                        >
                          {l.text}
                        </a>
                      ) : (
                        <span key={l.text} className="mt-1 block text-base font-medium sm:text-lg">
                          {l.text}
                        </span>
                      ),
                    )}
                  </span>
                </div>
              </Reveal>
            ))}
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
