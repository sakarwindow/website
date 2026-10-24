"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { process } from "@/lib/data";
import { Eyebrow, Reveal, SplitText } from "../ui/motion";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="bg-paper-2/60 px-6 py-20 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>How We Work</Eyebrow>
            <SplitText
              text="From first measure to final seal."
              italicWords={["final"]}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
            />
            <Reveal>
              <p className="mt-6 max-w-md text-lg text-ink/55">
                One accountable team handles your project end to end — so every window fits, functions and finishes
                exactly as promised.
              </p>
            </Reveal>
          </div>
        </div>

        <div ref={ref} className="relative lg:col-span-7">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-ink/10" />
          <motion.div style={{ scaleY }} className="absolute bottom-0 left-[27px] top-0 w-px origin-top bg-brass" />
          <div className="space-y-16">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05} className="relative flex gap-8">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-ink/10 bg-paper font-serif text-xl italic">
                  {p.step}
                </span>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed text-ink/55">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
