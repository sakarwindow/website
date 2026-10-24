// Shared JSX for generated images (apple icon, Open Graph cards).
// ImageResponse only supports inline styles and flexbox.

export const brand = {
  ink: "#0a0e17",
  ink2: "#121826",
  brass: "#c9a36a",
  brass2: "#e6c993",
  paper: "#f5f3ee",
};

export function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect x="6" y="6" width="52" height="52" rx="5" fill="none" stroke={brand.brass} strokeWidth="5" />
      <path d="M32 7v50M7 32h50" stroke={brand.brass} strokeWidth="4" />
      <rect x="11.5" y="11.5" width="18" height="18" fill={brand.brass} />
    </svg>
  );
}

export function OgCard({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
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
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <LogoMark size={64} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>SAKAR</span>
          <span style={{ fontSize: 14, letterSpacing: 6, opacity: 0.6 }}>WINDOW SYSTEM</span>
        </div>
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
