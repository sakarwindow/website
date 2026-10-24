import Link from "next/link";
import WindowArt from "@/components/WindowArt";

export default function NotFound() {
  return (
    <section className="grain relative grid min-h-svh place-items-center overflow-hidden bg-ink px-6 text-center text-white">
      <div>
        <WindowArt kind="fixed" state="rest" className="mx-auto h-48 w-auto opacity-80" />
        <h1 className="mt-10 text-6xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 text-white/55">This view doesn&apos;t exist — let&apos;s take you somewhere brighter.</p>
        <Link href="/" className="mt-8 inline-block rounded-full bg-brass px-7 py-4 font-semibold text-ink">
          Back home
        </Link>
      </div>
    </section>
  );
}
