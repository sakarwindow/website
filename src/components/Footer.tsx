import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks, products } from "@/lib/data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-white/55">{company.description}</p>
            <div className="mt-8 flex gap-3">
              {Object.entries(company.socials).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-xs uppercase text-white/70 transition hover:border-brass hover:bg-brass hover:text-ink"
                  aria-label={name}
                >
                  {name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Explore</h4>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/65 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Products</h4>
            <ul className="mt-6 space-y-3">
              {products.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="text-white/65 transition hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Contact</h4>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="mt-6 flex gap-3 text-white/65 hover:text-white">
              <Phone className="mt-0.5 size-4 shrink-0 text-brass" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex gap-3 text-white/65 hover:text-white">
              <Mail className="mt-0.5 size-4 shrink-0 text-brass" /> {company.email}
            </a>
            <p className="flex gap-3 text-white/65">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass" /> {company.address}
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="group mt-24 flex items-end justify-between border-t border-white/10 pt-10"
        >
          <span className="text-[13vw] font-bold leading-[0.8] tracking-tighter text-white/[0.06] transition-colors duration-700 group-hover:text-brass/30 md:text-[10vw]">
            Let&apos;s talk.
          </span>
          <ArrowUpRight className="mb-2 size-10 text-white/30 transition-all duration-500 group-hover:rotate-45 group-hover:text-brass md:size-16" />
        </Link>

        <div className="mt-10 flex flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>© <Year /> {company.name}. All rights reserved.</p>
          <p>Crafted with precision in India.</p>
        </div>
      </div>
    </footer>
  );
}

async function Year() {
  "use cache";
  return new Date().getFullYear();
}
