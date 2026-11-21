import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <h2 className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          <span className="h-6 w-1 rounded-full bg-gradient-to-b from-accent to-accent-2" />
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

export function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_40px_-12px_var(--glow)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
