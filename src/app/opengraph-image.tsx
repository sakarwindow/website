import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/brand-image";
import { company } from "@/lib/data";

export const alt = `${company.name} — Premium uPVC & Aluminium Windows`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <OgCard eyebrow="uPVC & Aluminium Window Systems" title={company.tagline} subtitle={company.description} />,
    size,
  );
}
