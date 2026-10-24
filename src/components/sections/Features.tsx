"use client";

import { useRef } from "react";
import { CloudRain, Leaf, ShieldCheck, Sparkles, ThermometerSun, Volume2, type LucideIcon } from "lucide-react";
import { features } from "@/lib/data";
import { Eyebrow, Reveal, SplitText } from "../ui/motion";

const icons: Record<string, LucideIcon> = { ThermometerSun, Volume2, CloudRain, ShieldCheck, Sparkles, Leaf };

export default function Features() {
  return (
    <section className="grain relative overflow-hidden bg-ink px-6 py-28 text-white md:py-36">
      <div className="absolute right-0 top-0 size-[40rem] rounded-full bg-brass/10 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Eyebrow>Why Sakar</Eyebrow>
            <SplitText
              text="Performance you can feel, every single day."
              italicWords={["feel,"]}
              className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
            />
          </div>
          <Reveal>
            <p className="max-w-md text-lg text-white/55 md:ml-auto">
              Every profile, gasket and fitting is selected for Indian heat, dust and monsoons — and tested to
              international standards.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <SpotlightCard>
                  <span className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-brass transition-colors duration-500 group-hover:bg-brass group-hover:text-ink">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-10 text-xl font-semibold">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/55">{f.text}</p>
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
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-2 p-8 transition-colors duration-500 hover:border-brass/40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx)_var(--my),rgba(201,163,106,0.15),transparent_60%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}
