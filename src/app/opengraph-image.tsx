import { ImageResponse } from "next/og";
import { brandLogo, OgCard } from "@/lib/brand-image";
import { company } from "@/lib/data";

export const alt = `${company.name} — Premium Aluminium Windows & Doors`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <OgCard logo={brandLogo} eyebrow="Aluminium Window & Door Systems" title={company.tagline} subtitle={company.description} />,
    size,
  );
}
