"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import clsx from "clsx";
import { testimonials } from "@/lib/data";
import { Eyebrow } from "../ui/motion";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % testimonials.length), 6000);
    return () => clearTimeout(t);
  }, [i]);

  const t = testimonials[i];

  return (
    <section className="grain relative overflow-hidden bg-ink px-6 py-28 text-white md:py-36">
      <div className="relative mx-auto max-w-5xl text-center">
        <Eyebrow>Testimonials</Eyebrow>
        <Quote className="mx-auto mt-10 size-12 text-brass" />

        <div className="relative mt-8 min-h-[16rem] md:min-h-[13rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="text-2xl font-medium leading-snug tracking-tight md:text-4xl">“{t.quote}”</blockquote>
              <figcaption className="mt-8">
                <span className="block font-semibold">{t.name}</span>
                <span className="text-sm text-white/50">{t.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {testimonials.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
              className="relative h-1 w-12 overflow-hidden rounded-full bg-white/15"
            >
              {n === i && (
                <motion.span
                  key={i}
                  className="absolute inset-y-0 left-0 bg-brass"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
              <span className={clsx("absolute inset-0", n < i && "bg-white/40")} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
