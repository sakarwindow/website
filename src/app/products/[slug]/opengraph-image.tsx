import { ImageResponse } from "next/og";
import { brandLogo, OgCard } from "@/lib/brand-image";
import { company, products } from "@/lib/data";

export const alt = `${company.name} product`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) ?? products[0];
  return new ImageResponse(
    <OgCard
      logo={brandLogo}
      eyebrow={`${product.category} · ${product.material}`}
      title={product.name}
      subtitle={product.summary}
    />,
    size,
  );
}
