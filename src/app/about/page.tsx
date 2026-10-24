import type { Metadata } from "next";
import { company } from "@/lib/data";
import PageHeader from "@/components/PageHeader";
import Intro from "@/components/sections/Intro";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import WindowArt from "@/components/WindowArt";
import { Eyebrow, Reveal, SplitText } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "About Us",
  description: `${company.name} designs and manufactures high-quality aluminium windows, doors and customised architectural solutions.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Style, strength and function in perfect balance."
        italic={["perfect"]}
        text="We believe every space deserves the perfect balance of style, strength, and functionality."
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
            <Eyebrow>Who We Are</Eyebrow>
            <SplitText
              text="Built on precision, driven by care."
              italicWords={["care."]}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl"
            />
            <Reveal>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/60">
                <p>
                  At {company.name}, we believe every space deserves the perfect balance of style, strength, and
                  functionality. We design and manufacture high-quality aluminium windows, doors, and customized
                  architectural solutions that enhance the look and performance of any building.
                </p>
                <p>
                  With a commitment to innovation, precision, and durability, our products are crafted to meet the
                  needs of modern homes, offices, commercial spaces, and industrial projects. We use premium materials
                  and expert workmanship to deliver solutions that are elegant, long-lasting, and easy to maintain.
                </p>
                <p>
                  From concept to installation, our team focuses on quality, timely service, and customer
                  satisfaction. Every project is handled with care to ensure a flawless finish and lasting value.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Features />

      <Intro />
      <Process />
      <CTA />
    </>
  );
}
