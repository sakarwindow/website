"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { finishes } from "@/lib/data";
import WindowArt from "../WindowArt";
import { Eyebrow, Reveal, SplitText } from "../ui/motion";

export default function Finishes() {
  const [active, setActive] = useState(0);
  const finish = finishes[active];

  return (
    <section className="overflow-hidden bg-paper px-6 py-20 md:py-36">
      <div className="mx-auto grid grid-cols-1 max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>Colours &amp; Finishes</Eyebrow>
          <SplitText
            text="Match your frames to your style."
            italicWords={["style."]}
            className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
          />
          <Reveal>
            <p className="mt-6 max-w-md text-lg text-ink/55">
              Laminated woodgrains and solid colours with UV-resistant foils that hold their colour for years. Pick a
              finish to preview it.
            </p>
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
            {finishes.map((f, i) => (
              <button
                key={f.name}
                onClick={() => setActive(i)}
                className="group flex flex-col items-center gap-2"
                aria-pressed={active === i}
              >
                <span
                  className={clsx(
                    "relative size-14 rounded-full border border-ink/15 transition-transform duration-300 group-hover:scale-110",
                    active === i && "scale-110",
                  )}
                  style={{ background: f.color }}
                >
                  {active === i && (
                    <motion.span
                      layoutId="finish-ring"
                      className="absolute -inset-1.5 rounded-full border-2 border-brass"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </span>
                <span className="text-center text-xs text-ink/60">{f.name}</span>
              </button>
            ))}
          </Reveal>
        </div>

        <Reveal className="relative">
          <div className="relative mx-auto aspect-square max-w-lg rounded-[2.5rem] bg-gradient-to-br from-paper-2 to-white p-10 shadow-inner">
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] opacity-30 blur-3xl"
              animate={{ backgroundColor: finish.color }}
              transition={{ duration: 0.6 }}
            />
            <motion.div initial="rest" whileHover="hover" animate="rest" className="relative grid h-full place-items-center">
              <WindowArt kind="casement" frame={finish.color} className="h-full w-auto drop-shadow-2xl" />
            </motion.div>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={finish.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 text-center font-serif text-3xl italic"
            >
              {finish.name}
            </motion.p>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
