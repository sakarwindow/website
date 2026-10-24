import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { company, products } from "@/lib/data";
import ProductViewer from "@/components/ProductViewer";
import ProductCard from "@/components/ProductCard";
import CTA from "@/components/sections/CTA";
import { Eyebrow, Reveal, SplitText } from "@/components/ui/motion";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);
  const more = related.length ? related : products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="grain relative overflow-hidden bg-ink px-6 pb-24 pt-36 text-white md:pt-44">
        <div className="grid-lines absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="absolute -left-40 top-40 size-[30rem] rounded-full bg-brass/15 blur-[140px]" />

        <div className="relative mx-auto grid grid-cols-1 max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal y={10}>
              <Link href="/products" className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> All products
              </Link>
            </Reveal>
            <div className="mt-10">
              <Eyebrow>
                {product.category} · {product.material}
              </Eyebrow>
            </div>
            <SplitText
              as="h1"
              text={product.name}
              className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
            />
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">{product.description}</p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/75">
                  {a}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.5}>
              <Link
                href={`/contact?product=${product.slug}`}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brass px-7 py-4 font-semibold text-ink transition hover:bg-brass-2"
              >
                Enquire about this system
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Reveal>
          </div>

          <ProductViewer kind={product.kind} />
        </div>
      </section>

      <section className="bg-paper px-6 py-16 md:py-32">
        <div className="mx-auto grid grid-cols-1 max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Key Features</Eyebrow>
            <div className="mt-10 space-y-4">
              {product.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 text-lg">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brass/20 text-brass">
                      <Check className="size-5" />
                    </span>
                    {h}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>Technical Specifications</Eyebrow>
            <Reveal className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-white">
              <dl>
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-2 gap-4 border-b border-ink/10 px-6 py-5 transition-colors last:border-0 hover:bg-paper"
                  >
                    <dt className="text-ink/55">{s.label}</dt>
                    <dd className="font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <p className="mt-4 text-sm text-ink/45">
              Specifications vary by profile series and opening size. Contact {company.short} for project-specific data.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2/60 px-6 py-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SplitText text="You may also like" className="text-4xl font-semibold tracking-tight md:text-5xl" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <ProductCard key={p.slug} product={p} index={products.indexOf(p)} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
