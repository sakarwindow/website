"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let lenis: Lenis | null = null;

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return (
    <>
      <Suspense>
        <ScrollReset />
      </Suspense>
      {children}
    </>
  );
}

/** Jump to top on route change (reads the URL, so it lives in its own Suspense boundary). */
function ScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
