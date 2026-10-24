"use client";

import { useId } from "react";
import { motion, type Variants } from "framer-motion";
import type { WindowKind } from "@/lib/data";

// Opening (inside the outer frame) in viewBox units
const O = { x: 22, y: 22, w: 156, h: 196 };
const spring = { type: "spring", stiffness: 90, damping: 16 } as const;

type Props = {
  kind: WindowKind;
  frame?: string;
  className?: string;
  /** Force a state; otherwise inherits "rest"/"hover" from a parent motion element. */
  state?: "rest" | "hover";
};

export default function WindowArt({ kind, frame = "#f4f4f2", className, state }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const ids = { sky: `sky${uid}`, clip: `clip${uid}`, glass: `glass${uid}`, shine: `shine${uid}` };
  const dark = isDark(frame);
  const edge = dark ? "#000000" : "#c9c6bd";

  return (
    <motion.svg
      viewBox="0 0 200 240"
      className={className}
      initial={state ? "rest" : undefined}
      animate={state}
      aria-hidden
    >
      <defs>
        <linearGradient id={ids.sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5d9fd6" />
          <stop offset="0.55" stopColor="#b9dcf4" />
          <stop offset="0.8" stopColor="#f3dcb4" />
          <stop offset="1" stopColor="#e9b98a" />
        </linearGradient>
        <linearGradient id={ids.glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#dff1ff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id={ids.shine} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={ids.clip}>
          <rect x={O.x} y={O.y} width={O.w} height={O.h} />
        </clipPath>
      </defs>

      {/* Outer frame */}
      <rect x="8" y="8" width="184" height="224" rx="3" fill={frame} stroke={edge} strokeWidth="1" />
      <rect x="18" y="18" width="164" height="204" fill="none" stroke={edge} strokeOpacity="0.6" />

      {/* The view outside */}
      <g clipPath={`url(#${ids.clip})`}>
        <rect x={O.x} y={O.y} width={O.w} height={O.h} fill={`url(#${ids.sky})`} />
        <circle cx="140" cy="150" r="16" fill="#fff4dc" opacity="0.8" />
        <path
          d="M22 190 L40 176 L52 182 L60 160 L72 160 L72 150 L86 150 L86 170 L100 170 L100 140 L116 140 L116 172 L130 166 L146 176 L160 168 L178 180 L178 218 L22 218 Z"
          fill="#3d5a7a"
          opacity="0.55"
        />
        <path d="M22 205 Q70 188 110 200 T178 196 L178 218 L22 218 Z" fill="#2c4560" opacity="0.7" />
      </g>

      <g clipPath={`url(#${ids.clip})`}>{renderKind(kind, frame, edge, ids.glass)}</g>

      {/* Glare sweep */}
      <g clipPath={`url(#${ids.clip})`} style={{ pointerEvents: "none" }}>
        <motion.rect
          y="0"
          width="60"
          height="260"
          fill={`url(#${ids.shine})`}
          transform="skewX(-20)"
          variants={{ rest: { x: -40 }, hover: { x: 330 } }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </g>
    </motion.svg>
  );
}

function isDark(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b < 110;
}

/** A framed sash with glass and an optional handle. */
function Sash({
  x,
  y,
  w,
  h,
  frame,
  edge,
  glass,
  handle,
  notation,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  frame: string;
  edge: string;
  glass: string;
  handle?: "left" | "right" | "bottom";
  notation?: "left" | "right" | "top" | "tilt-turn";
}) {
  const b = 6;
  const gx = x + b,
    gy = y + b,
    gw = w - b * 2,
    gh = h - b * 2;
  const dash = { stroke: edge, strokeWidth: 0.8, strokeDasharray: "3 3", fill: "none", opacity: 0.9 };
  return (
    <g>
      <rect x={gx} y={gy} width={gw} height={gh} fill={`url(#${glass})`} />
      {/* Sash profile drawn as a thick stroke so the view shows through the glass */}
      <rect x={x + b / 2} y={y + b / 2} width={w - b} height={h - b} fill="none" stroke={frame} strokeWidth={b} />
      <rect x={x} y={y} width={w} height={h} fill="none" stroke={edge} strokeWidth="0.8" />
      <rect x={gx} y={gy} width={gw} height={gh} fill="none" stroke={edge} strokeWidth="0.6" />
      {notation === "left" && <path d={`M${gx} ${gy} L${gx + gw} ${gy + gh / 2} L${gx} ${gy + gh}`} {...dash} />}
      {notation === "right" && <path d={`M${gx + gw} ${gy} L${gx} ${gy + gh / 2} L${gx + gw} ${gy + gh}`} {...dash} />}
      {notation === "tilt-turn" && (
        <>
          <path d={`M${gx} ${gy} L${gx + gw} ${gy + gh / 2} L${gx} ${gy + gh}`} {...dash} />
          <path d={`M${gx} ${gy + gh} L${gx + gw / 2} ${gy} L${gx + gw} ${gy + gh}`} {...dash} />
        </>
      )}
      {handle === "right" && <rect x={x + w - 4.5} y={y + h / 2 - 9} width="3" height="18" rx="1.5" fill="#8f939a" />}
      {handle === "left" && <rect x={x + 1.5} y={y + h / 2 - 9} width="3" height="18" rx="1.5" fill="#8f939a" />}
      {handle === "bottom" && <rect x={x + w / 2 - 9} y={y + h - 4.5} width="18" height="3" rx="1.5" fill="#8f939a" />}
    </g>
  );
}

function renderKind(kind: WindowKind, frame: string, edge: string, glass: string) {
  const s = { frame, edge, glass };
  const half = O.w / 2;

  switch (kind) {
    case "sliding":
    case "sliding-door": {
      const v: Variants = { rest: { x: 0 }, hover: { x: -half + 10 } };
      return (
        <>
          <Sash x={O.x} y={O.y} w={half + 4} h={O.h} {...s} handle="left" />
          <motion.g variants={v} transition={spring}>
            <Sash x={O.x + half - 4} y={O.y} w={half + 4} h={O.h} {...s} handle="left" />
          </motion.g>
          {kind === "sliding-door" && <rect x={O.x} y={O.y + O.h - 3} width={O.w} height="3" fill={edge} opacity="0.5" />}
        </>
      );
    }

    case "casement":
    case "french": {
      const handle = kind === "french";
      return (
        <>
          <motion.g
            variants={{ rest: { scaleX: 1, skewY: 0 }, hover: { scaleX: 0.55, skewY: -8 } }}
            style={{ originX: 0, originY: 0.5 }}
            transition={spring}
          >
            <Sash x={O.x} y={O.y} w={half} h={O.h} {...s} notation="left" handle={handle ? "right" : undefined} />
          </motion.g>
          <motion.g
            variants={{ rest: { scaleX: 1, skewY: 0 }, hover: { scaleX: 0.55, skewY: 8 } }}
            style={{ originX: 1, originY: 0.5 }}
            transition={spring}
          >
            <Sash x={O.x + half} y={O.y} w={half} h={O.h} {...s} notation="right" handle="left" />
          </motion.g>
        </>
      );
    }

    case "tilt-turn":
      return (
        <motion.g
          variants={{ rest: { scaleY: 1, skewX: 0 }, hover: { scaleY: 0.86, skewX: -4 } }}
          style={{ originX: 0.5, originY: 1 }}
          transition={spring}
        >
          <Sash x={O.x} y={O.y} w={O.w} h={O.h} {...s} notation="tilt-turn" handle="right" />
        </motion.g>
      );

    case "fixed":
      return <rect x={O.x} y={O.y} width={O.w} height={O.h} fill={`url(#${glass})`} stroke={edge} strokeWidth="0.6" />;

    case "slide-fold": {
      const n = 4;
      const pw = O.w / n;
      return (
        <>
          {Array.from({ length: n }).map((_, i) => (
            <motion.g
              key={i}
              variants={{ rest: { x: 0, scaleX: 1 }, hover: { x: -i * (pw - 9), scaleX: 0.25 } }}
              style={{ originX: 0, originY: 0.5 }}
              transition={{ ...spring, delay: i * 0.04 }}
            >
              <Sash x={O.x + i * pw} y={O.y} w={pw} h={O.h} {...s} handle={i % 2 ? "left" : undefined} />
            </motion.g>
          ))}
        </>
      );
    }

    case "bay": {
      const side = 40;
      return (
        <>
          <polygon
            points={`${O.x},${O.y + 14} ${O.x + side},${O.y} ${O.x + side},${O.y + O.h} ${O.x},${O.y + O.h - 14}`}
            fill={`url(#${glass})`}
            stroke={frame}
            strokeWidth="6"
          />
          <polygon
            points={`${O.x + O.w - side},${O.y} ${O.x + O.w},${O.y + 14} ${O.x + O.w},${O.y + O.h - 14} ${O.x + O.w - side},${O.y + O.h}`}
            fill={`url(#${glass})`}
            stroke={frame}
            strokeWidth="6"
          />
          <motion.g
            variants={{ rest: { scaleX: 1, skewY: 0 }, hover: { scaleX: 0.6, skewY: -6 } }}
            style={{ originX: 0, originY: 0.5 }}
            transition={spring}
          >
            <Sash x={O.x + side} y={O.y} w={O.w - side * 2} h={O.h} {...s} notation="left" handle="right" />
          </motion.g>
        </>
      );
    }

    case "louver": {
      const n = 8;
      const sh = (O.h - 12) / n;
      return (
        <>
          <rect x={O.x} y={O.y} width={O.w} height={O.h} fill="none" stroke={frame} strokeWidth="12" />
          {Array.from({ length: n }).map((_, i) => (
            <motion.rect
              key={i}
              x={O.x + 8}
              y={O.y + 6 + i * sh + 1}
              width={O.w - 16}
              height={sh - 2}
              fill={`url(#${glass})`}
              stroke={edge}
              strokeWidth="0.6"
              style={{ originY: 0.5 }}
              variants={{ rest: { scaleY: 1 }, hover: { scaleY: 0.25 } }}
              transition={{ ...spring, delay: i * 0.03 }}
            />
          ))}
        </>
      );
    }
  }
}
