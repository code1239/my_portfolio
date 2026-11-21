"use client";

import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { BentoCard, Chip, Section } from "./ui/Section";

export function Experience() {
  const { t, r } = useT();
  return (
    <Section id="experience" title={t.sections.experience}>
      <div className="relative space-y-5 border-l border-border pl-6 sm:pl-8">
        {r.experience.map((e, i) => (
          <Reveal key={e.company} delay={0.05 * i}>
            <div className="relative">
              <span className="absolute -left-[31px] top-7 size-3 rounded-full border-2 border-bg bg-accent sm:-left-[39px]" />
              <BentoCard>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold">
                    {e.company} <span className="font-normal text-muted">— {e.role}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                {e.clients && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      {t.experience.clients}
                    </span>
                    {e.clients.map((c) => (
                      <Chip key={c}>{c}</Chip>
                    ))}
                  </div>
                )}
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-fg/85">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
