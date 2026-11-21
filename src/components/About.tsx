"use client";

import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function About() {
  const { t, r } = useT();
  return (
    <Section id="about" n="01" title={t.sections.about}>
      <Reveal>
        <p className="font-serif text-2xl leading-snug sm:text-3xl">{r.summary}</p>
      </Reveal>
      <Reveal delay={0.1}>
        <dl className="mt-12 grid grid-cols-3 border-t border-border">
          {r.stats.map((s) => (
            <div key={s.label} className="flex flex-col border-l border-border pl-4 pt-5 first:border-l-0 first:pl-0">
              <dt className="order-2 mt-1 text-xs leading-snug text-muted sm:text-sm">{s.label}</dt>
              <dd className="font-serif text-5xl tracking-tight text-accent sm:text-6xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
