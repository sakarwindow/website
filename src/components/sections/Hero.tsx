"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Droplets, Volume2 } from "lucide-react";
import { Magnetic, SplitText } from "../ui/motion";
import { company, heroSlides } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yArt = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Cross-fade through the featured photos
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((n) => (n + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const current = heroSlides[slide];

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
            Aluminium Window &amp; Door Systems
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

        <motion.div style={{ y: yArt, scale }} className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm lg:col-span-5 lg:max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 60, clipPath: "inset(18% 18% 18% 18% round 2.5rem)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 2.5rem)" }}
            transition={{ duration: 1.5, ease, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-brass/20 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0"
                >
                  {/* Slow Ken Burns zoom while each photo is shown */}
                  <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 7, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      preload={slide === 0}
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 18rem"
                      style={{ objectPosition: current.focus }}
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <Link
                href={`/products/${current.slug}`}
                className="group absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-ink/40 px-4 py-3 backdrop-blur-md transition hover:bg-ink/60"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="text-sm font-semibold"
                  >
                    {current.name}
                  </motion.span>
                </AnimatePresence>
                <ArrowUpRight className="size-4 text-brass transition-transform group-hover:rotate-45" />
              </Link>
            </div>
            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
              {heroSlides.map((h, i) => (
                <button
                  key={h.src}
                  onClick={() => setSlide(i)}
                  aria-label={`Show ${h.name}`}
                  className={`h-1 rounded-full transition-all duration-500 ${i === slide ? "w-8 bg-brass" : "w-3 bg-white/25 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </motion.div>

          <FloatCard className="-left-4 top-10 sm:-left-16 sm:top-20" delay={1.4} icon={<Volume2 className="size-5" />} title="Peaceful" text="Sound resistance" />
          <FloatCard className="-right-4 bottom-24 sm:-right-12 sm:bottom-28" delay={1.6} icon={<Droplets className="size-5" />} title="Zero leaks" text="Water resistance" />
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
