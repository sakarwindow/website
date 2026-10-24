"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { finishes, type WindowKind } from "@/lib/data";
import WindowArt from "./WindowArt";

export default function ProductViewer({ kind }: { kind: WindowKind }) {
  const [open, setOpen] = useState(false);
  const [finish, setFinish] = useState(0);
  const canOpen = kind !== "fixed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-8"
    >
      <div className="absolute inset-16 rounded-full bg-sky/20 blur-3xl" />
      <div className="relative grid place-items-center py-4">
        <WindowArt
          kind={kind}
          frame={finishes[finish].color}
          state={open ? "hover" : "rest"}
          className="h-auto w-full max-w-[18rem] drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
        />
      </div>

      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {finishes.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setFinish(i)}
              title={f.name}
              aria-label={f.name}
              className={clsx(
                "size-7 rounded-full border-2 transition-transform hover:scale-110",
                finish === i ? "scale-110 border-brass" : "border-white/20",
              )}
              style={{ background: f.color }}
            />
          ))}
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-brass-2"
        >
          {canOpen ? (open ? "Close" : "Open") : "Reflect"} {kind.includes("door") || kind === "french" ? "door" : "window"}
        </button>
      </div>
    </motion.div>
  );
}
