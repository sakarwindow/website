"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { company, stats } from "@/lib/data";
import { Counter, Eyebrow, Reveal } from "../ui/motion";

const statement =
  "We engineer window and door systems that quietly transform how buildings feel — cooler, calmer, brighter and built to last for decades.";

export default function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = statement.split(" ");

  return (
    <section className="bg-paper px-6 py-20 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>{company.tagline}</Eyebrow>
        <p ref={ref} className="mt-8 max-w-5xl text-2xl font-medium leading-[1.25] tracking-tight sm:text-3xl md:text-5xl">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-16 grid grid-cols-2 gap-px md:mt-24 overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="bg-paper p-5 sm:p-8 md:p-10">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}
