import Image from "next/image";
import clsx from "clsx";
import { company } from "@/lib/data";
import mark from "../../public/brand/sakar-mark.png";
import wordmarkLight from "../../public/brand/sakar-wordmark-light.png";
import wordmarkDark from "../../public/brand/sakar-wordmark-dark.png";

/** Brand lockup: S window mark + SAKAR wordmark. Use `dark` on light backgrounds. */
export default function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={clsx("flex items-center gap-2.5", className)}>
      {/* On dark backgrounds the mark's black curve needs a white tile to stay legible */}
      <span className={clsx("grid shrink-0 place-items-center", !dark && "size-11 rounded-xl bg-white shadow-sm")}>
        <Image src={mark} alt="" preload className={dark ? "h-10 w-auto" : "h-8 w-auto"} />
      </span>
      <Image src={dark ? wordmarkDark : wordmarkLight} alt={company.name} preload className="h-7 w-auto" />
    </span>
  );
}
