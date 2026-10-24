"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import type { Product } from "@/lib/data";

export default function ProductGallery({ images }: { images: Product["images"] }) {
  const [active, setActive] = useState(0);
  const image = images[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, clipPath: "inset(12% 12% 12% 12% round 2rem)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 2rem)" }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 shadow-2xl shadow-black/40">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={image.src}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload={active === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ objectPosition: image.focus }}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-pressed={active === i}
              className={clsx(
                "relative aspect-[4/3] w-24 overflow-hidden rounded-xl border-2 transition sm:w-28",
                active === i ? "border-brass" : "border-white/10 opacity-60 hover:opacity-100",
              )}
            >
              <Image src={img.src} alt="" fill sizes="112px" style={{ objectPosition: img.focus }} className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
