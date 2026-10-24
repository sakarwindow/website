"use client";

import Link from "next/link";
import { useRef, useSyncExternalStore } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import WindowArt from "./WindowArt";

const HOVER_NONE = "(hover: none)";
function subscribeHover(cb: () => void) {
  const mq = window.matchMedia(HOVER_NONE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

export default function ProductCard({
  product,
  index = 0,
  ref,
}: {
  product: Product;
  index?: number;
  ref?: React.Ref<HTMLDivElement>;
}) {
  // Touch screens can't hover, so open the window while the card is centred in view
  const articleRef = useRef<HTMLElement>(null);
  const inView = useInView(articleRef, { amount: 0.7 });
  const isTouch = useSyncExternalStore(subscribeHover, () => window.matchMedia(HOVER_NONE).matches, () => false);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
    >
      <Link href={`/products/${product.slug}`} className="block h-full">
        <motion.article
          ref={articleRef}
          initial="rest"
          whileHover="hover"
          animate={isTouch && inView ? "hover" : "rest"}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(10,14,23,0.25)]"
        >
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-ink/45">
            <span>{product.category}</span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div className="relative my-6 grid place-items-center overflow-hidden rounded-2xl bg-paper py-8">
            <div className="absolute inset-x-10 bottom-4 h-6 rounded-full bg-ink/10 blur-xl" />
            <WindowArt kind={product.kind} className="relative h-56 w-auto transition-transform duration-700 group-hover:scale-105" />
          </div>

          <div className="mt-auto flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{product.summary}</p>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-brass group-hover:bg-brass">
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
