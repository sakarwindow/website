"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import clsx from "clsx";
import { company, navLinks } from "@/lib/data";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 300);
    setScrolled(y > 40);
  });

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-110%" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      >
        <nav
          className={clsx(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled || open
              ? "border border-white/10 bg-ink/75 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "border border-transparent",
          )}
        >
          <Link href="/" className="relative z-10" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={clsx(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive(l.href) ? "text-ink" : "text-white/75 hover:text-white",
                  )}
                >
                  {isActive(l.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-brass"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-brass-2 md:inline-flex"
          >
            Get a Quote
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="relative z-10 grid size-10 place-items-center rounded-full bg-white/10 text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-8 pb-10 pt-32 md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block text-5xl font-semibold tracking-tight",
                      isActive(l.href) ? "text-brass" : "text-white",
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-1 text-white/60"
            >
              <p>{company.phone}</p>
              <p>{company.email}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
