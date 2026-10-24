import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { company } from "@/lib/data";
import { Magnetic, Reveal, SplitText } from "../ui/motion";

export default function CTA() {
  return (
    <section className="bg-paper px-6 py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brass px-8 py-20 md:px-16 md:py-28">
        <div className="absolute -right-24 -top-24 size-96 rounded-full border-[40px] border-ink/5" />
        <div className="absolute -bottom-32 right-40 size-72 rounded-full border-[30px] border-ink/5" />
        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">
          <SplitText
            text="Ready to upgrade your windows?"
            italicWords={["upgrade"]}
            className="text-4xl font-semibold tracking-tight text-ink md:text-6xl"
          />
          <Reveal className="flex flex-wrap gap-4 lg:justify-end">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-semibold text-white"
              >
                Request a Free Quote
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </Link>
            </Magnetic>
            <a
              href={`tel:${company.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-4 font-semibold text-ink transition hover:bg-ink/5"
            >
              <Phone className="size-4" /> {company.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
