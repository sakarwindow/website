"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import clsx from "clsx";

const ease = [0.22, 1, 0.36, 1] as const;

/** Fade + rise into view once. */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  ...rest
}: { delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Masked word-by-word headline reveal. */
export function SplitText({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
  italicWords = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  italicWords?: string[];
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={clsx(
              "inline-block",
              italicWords.includes(word.replace(/[.,]/g, "")) && "font-serif italic font-normal text-gradient pr-[0.05em]",
            )}
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : undefined}
            transition={{ duration: 0.9, ease, delay: delay + i * 0.06 }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

/** Number that counts up when scrolled into view. */
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/** Element that is gently pulled toward the cursor. */
export function Magnetic({ children, strength = 0.35 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      className="inline-block"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Reveal y={16}>
      <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brass">
        <span className="h-px w-8 bg-current" />
        {children}
      </span>
    </Reveal>
  );
}
