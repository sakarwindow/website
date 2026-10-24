"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { categories, products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const list = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="bg-paper px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="inline-flex flex-wrap gap-1 rounded-full border border-ink/10 bg-white p-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={clsx(
                  "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  filter === c ? "text-white" : "text-ink/60 hover:text-ink",
                )}
              >
                {filter === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
          <p className="text-sm text-ink/50">
            Showing <span className="font-semibold text-ink">{list.length}</span> systems
          </p>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <ProductCard key={p.slug} product={p} index={products.indexOf(p)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
