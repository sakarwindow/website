import { Eyebrow, Reveal, SplitText } from "./ui/motion";

/** Dark intro band used at the top of inner pages. */
export default function PageHeader({
  eyebrow,
  title,
  italic,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string[];
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink px-6 pb-20 pt-40 text-white md:pb-28 md:pt-48">
      <div className="grid-lines absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -right-40 -top-20 size-[32rem] rounded-full bg-brass/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SplitText
          as="h1"
          text={title}
          italicWords={italic}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        />
        {text && (
          <Reveal delay={0.3}>
            <p className="mt-8 max-w-2xl text-lg text-white/55">{text}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
