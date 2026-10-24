"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useSyncExternalStore } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import type { Product } from "@/lib/data";

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
  // Touch screens can't hover, so play the hover effect while the card is centred in view
  const articleRef = useRef<HTMLElement>(null);
  const inView = useInView(articleRef, { amount: 0.7 });
  const isTouch = useSyncExternalStore(subscribeHover, () => window.matchMedia(HOVER_NONE).matches, () => false);
  const active = isTouch && inView;
  const image = product.images[0];

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
        <article
          ref={articleRef}
          className={clsx(
            "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white p-3 transition-shadow duration-500 hover:shadow-[0_30px_80px_-20px_rgba(10,14,23,0.25)]",
            active && "shadow-[0_30px_80px_-20px_rgba(10,14,23,0.25)]",
          )}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper-2">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              style={{ objectPosition: image.focus }}
              className={clsx(
                "object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110",
                active && "scale-110",
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
            <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink backdrop-blur">
              {product.category}
            </span>
            <span className="absolute bottom-3 right-3 font-serif text-lg italic text-white/90">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-1 items-end justify-between gap-4 px-3 pb-3 pt-5">
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{product.summary}</p>
            </div>
            <span
              className={clsx(
                "grid size-11 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-brass group-hover:bg-brass",
                active && "rotate-45 border-brass bg-brass",
              )}
            >
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
