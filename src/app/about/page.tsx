import type { Metadata } from "next";
import { Award, Factory, Target, Users } from "lucide-react";
import { company } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import Intro from "@/components/sections/Intro";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import WindowArt from "@/components/WindowArt";
import { Eyebrow, Reveal, SplitText } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story, values and manufacturing capability behind ${company.name}.`,
};

const values = [
  { icon: Target, title: "Precision", text: "Every unit is CNC-cut and welded to sub-millimetre tolerances." },
  { icon: Award, title: "Quality", text: "Lead-free, UV-stable profiles and branded European hardware." },
  { icon: Users, title: "Service", text: "A single team from survey to installation and after-sales." },
  { icon: Factory, title: "In-house", text: "Our own fabrication facility controls quality and timelines." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Crafting clearer, quieter spaces since 2010."
        italic={["quieter"]}
        text={`${company.name} designs, fabricates and installs premium window and door systems for homes, offices and developers across India.`}
      />

      <section className="bg-paper px-6 py-16 md:py-32">
        <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-16 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {(["tilt-turn", "slide-fold", "bay", "french"] as const).map((k, i) => (
                <div
                  key={k}
                  className={`grid place-items-center rounded-3xl bg-white p-6 shadow-sm ${i % 2 ? "translate-y-10" : ""}`}
                >
                  <WindowArt kind={k} state="rest" className="h-40 w-auto" />
                </div>
              ))}
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Eyebrow>Our Story</Eyebrow>
            <SplitText
              text="Built on precision, driven by trust."
              italicWords={["trust."]}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl"
            />
            <Reveal>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/60">
                <p>
                  What started as a small fabrication workshop has grown into a full-service window systems company
                  trusted by homeowners, architects and builders.
                </p>
                <p>
                  We combine high-grade uPVC and aluminium profiles with toughened and double-glazed units and
                  European hardware — then back it with meticulous installation and responsive after-sales support.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-ink px-6 py-24 text-white md:py-32">
        <div className="relative mx-auto max-w-7xl">
          <Eyebrow>Our Values</Eyebrow>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="group bg-ink-2 p-10 transition-colors duration-500 hover:bg-ink-3">
                <v.icon className="size-8 text-brass transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-12 text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-white/55">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Intro />
      <Process />
      <CTA />
    </>
  );
}
