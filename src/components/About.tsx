"use client";

import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { BentoCard, Section } from "./ui/Section";

export function About() {
  const { t, r } = useT();
  return (
    <Section id="about" title={t.sections.about}>
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2 md:row-span-2">
          <BentoCard className="h-full">
            <p className="text-lg leading-relaxed text-fg/90">{r.summary}</p>
          </BentoCard>
        </Reveal>
        {r.stats.map((s, i) => (
          <Reveal key={s.label} delay={0.08 * (i + 1)}>
            <BentoCard className="h-full">
              <div className="text-gradient font-mono text-4xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </BentoCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
