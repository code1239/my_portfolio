import { Reveal } from "./Reveal";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 border border-fg bg-fg px-5 py-3 text-sm font-medium text-bg transition hover:border-accent hover:bg-accent";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 border border-fg px-5 py-3 text-sm font-medium transition hover:bg-fg hover:text-bg";

export function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[12rem_1fr] md:gap-12">
        <Reveal>
          <div className="md:sticky md:top-24">
            <span className="font-mono text-xs text-muted">{n}</span>
            <h2 className="mt-1 font-serif text-3xl leading-tight tracking-tight">{title}</h2>
          </div>
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
