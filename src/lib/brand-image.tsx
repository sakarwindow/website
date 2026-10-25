// Shared JSX for generated Open Graph images.
// ImageResponse only supports inline styles and flexbox.
import { readFile } from "node:fs/promises";
import path from "node:path";

export const brand = {
  ink: "#0a0e17",
  brass: "#c9a36a",
};

const dataUrl = async (file: string) =>
  `data:image/png;base64,${await readFile(path.join(process.cwd(), "public/brand", file), "base64")}`;

/** Logo files as data URLs for ImageResponse — read once at module scope so the images stay static */
export const brandLogo = {
  mark: await dataUrl("sakar-mark.png"),
  wordmark: await dataUrl("sakar-wordmark-light.png"),
};

export function OgCard({
  logo,
  eyebrow,
  title,
  subtitle,
}: {
  logo: { mark: string; wordmark: string };
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: `radial-gradient(circle at 85% 20%, rgba(201,163,106,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(140,202,247,0.2), transparent 40%), ${brand.ink}`,
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", padding: 8, background: "white", borderRadius: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.mark} height={64} width={52} alt="" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.wordmark} height={54} width={246} alt="" />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 22, letterSpacing: 6, color: brand.brass, textTransform: "uppercase" }}>{eyebrow}</span>
        <span style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, marginTop: 20, maxWidth: 900 }}>
          {title}
        </span>
        <span style={{ fontSize: 28, opacity: 0.6, marginTop: 24, maxWidth: 860 }}>{subtitle}</span>
      </div>

      <div style={{ display: "flex", height: 8, width: 160, background: brand.brass, borderRadius: 8 }} />
    </div>
  );
}
