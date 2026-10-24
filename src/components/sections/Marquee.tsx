import { products } from "@/lib/data";

export default function Marquee() {
  const items = [...products, ...products];
  return (
    <div className="relative -rotate-1 overflow-hidden border-y border-ink/10 bg-brass py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <span key={i} className="flex items-center text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            <span className="px-8">{p.name}</span>
            <span className="font-serif text-3xl italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
