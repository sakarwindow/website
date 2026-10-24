"use client";

import { useRef } from "react";
import { AirVent, BugOff, Droplets, ShieldCheck, ShieldPlus, Volume2, Wind, Wrench, type LucideIcon } from "lucide-react";
import { features } from "@/lib/data";
import { Eyebrow, Reveal, SplitText } from "../ui/motion";

const icons: Record<string, LucideIcon> = { Volume2, ShieldCheck, Wind, Droplets, AirVent, BugOff, Wrench, ShieldPlus };

export default function Features() {
  return (
    <section className="grain relative overflow-hidden bg-ink px-6 py-28 text-white md:py-36">
      <div className="absolute right-0 top-0 size-[40rem] rounded-full bg-brass/10 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>Why Sakar</Eyebrow>
            <SplitText
              text="Benefits you can feel, every single day."
              italicWords={["feel,"]}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
            />
          </div>
          <Reveal>
            <p className="max-w-md text-lg text-white/55 md:ml-auto">
              Quieter, safer and weather-tight — every Sakar system is engineered to protect and comfort the spaces
              you live and work in.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={(i % 4) * 0.1}>
                <SpotlightCard>
                  {/* Icon beside text on phones, stacked above it from sm up */}
                  <div className="flex gap-5 sm:block">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brass transition-colors duration-500 group-hover:bg-brass group-hover:text-ink sm:size-14">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold sm:mt-8 sm:text-xl">{f.title}</h3>
                      <p className="mt-2 leading-relaxed text-white/55 sm:mt-3">{f.text}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Card with a radial highlight that follows the cursor. */
function SpotlightCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-6 sm:p-8 transition-colors duration-500 hover:border-brass/40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx)_var(--my),rgba(201,163,106,0.15),transparent_60%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
