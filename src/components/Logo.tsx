import { company } from "@/lib/data";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden>
        <rect x="2" y="2" width="28" height="28" rx="4" fill="none" stroke="#c9a36a" strokeWidth="2.5" />
        <path d="M16 3v26M3 16h26" stroke="#c9a36a" strokeWidth="2" />
        <rect x="5.5" y="5.5" width="8.5" height="8.5" fill="#c9a36a" opacity="0.9" />
      </svg>
      <span className={`leading-none ${dark ? "text-ink" : "text-white"}`}>
        <span className="block text-lg font-bold tracking-tight">{company.short.toUpperCase()}</span>
        <span className="block text-[9px] font-medium uppercase tracking-[0.3em] opacity-60">Window System</span>
      </span>
    </span>
  );
}
