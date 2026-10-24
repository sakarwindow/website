import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import ProductCard from "../ProductCard";
import { Eyebrow, Reveal, SplitText } from "../ui/motion";

export default function ProductShowcase() {
  return (
    <section className="bg-paper-2/60 px-6 py-20 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our Range</Eyebrow>
            <SplitText
              text="Systems for every opening."
              italicWords={["every"]}
              className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl"
            />
          </div>
          <Reveal>
            <Link href="/products" className="group inline-flex items-center gap-2 font-semibold">
              View full catalog
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <p className="mt-4 hidden text-sm text-ink/45 [@media(hover:hover)]:block">Hover a product to see it open.</p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
