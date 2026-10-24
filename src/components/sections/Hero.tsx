"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ThermometerSun, Volume2 } from "lucide-react";
import WindowArt from "../WindowArt";
import { Magnetic, SplitText } from "../ui/motion";
import { company } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yArt = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Window slides open shortly after load, then breathes open/closed
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const first = setTimeout(() => setOpen(true), 1400);
    const loop = setInterval(() => setOpen((o) => !o), 4200);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
    };
  }, []);

  return (
    <section ref={ref} className="grain relative min-h-svh overflow-hidden bg-ink text-white">
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -left-40 top-20 size-[36rem] rounded-full bg-sky/20 blur-[140px]" />
      <div className="absolute -right-20 bottom-0 size-[30rem] rounded-full bg-brass/20 blur-[140px]" />

      <div className="relative mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-6 pb-16 pt-32 sm:pt-36 md:pb-20 lg:grid-cols-12">
        <motion.div style={{ y: yText, opacity }} className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-brass" />
            uPVC &amp; Aluminium Window Systems
          </motion.span>

          <SplitText
            as="h1"
            text="Frames that define the view."
            italicWords={["define"]}
            delay={0.2}
            className="mt-8 text-[2.75rem] font-semibold leading-[1.02] tracking-tight min-[400px]:text-5xl sm:text-7xl xl:text-8xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {company.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brass px-7 py-4 font-semibold text-ink"
              >
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Explore Products</span>
                <ArrowUpRight className="relative size-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Magnetic>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Book Free Site Visit
            </Link>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: yArt, scale }} className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm lg:col-span-5 lg:max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 80, rotateY: -20 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.3 }}
            className="relative [perspective:1200px]"
          >
            <div className="absolute inset-6 rounded-3xl bg-sky/30 blur-3xl" />
            <WindowArt kind="sliding" state={open ? "hover" : "rest"} className="relative w-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)]" />
          </motion.div>

          <FloatCard className="-left-4 top-6 sm:-left-16 sm:top-16" delay={1.4} icon={<Volume2 className="size-5" />} title="40 dB" text="Noise reduction" />
          <FloatCard className="-right-4 bottom-6 sm:-right-12 sm:bottom-20" delay={1.6} icon={<ThermometerSun className="size-5" />} title="5°C" text="Cooler interiors" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}

function FloatCard({
  className,
  delay,
  icon,
  title,
  text,
}: {
  className: string;
  delay: number;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease, delay }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 shadow-2xl backdrop-blur-xl sm:px-4 sm:py-3"
      >
        <span className="grid size-8 place-items-center rounded-xl bg-brass text-ink sm:size-10">{icon}</span>
        <span>
          <span className="block text-lg font-bold leading-none">{title}</span>
          <span className="text-xs text-white/60">{text}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
