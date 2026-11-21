"use client";

import { FlaskConical, GraduationCap } from "lucide-react";
import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { BentoCard, Section } from "./ui/Section";

export function ResearchEducation() {
  const { t, r } = useT();
  return (
    <Section id="education" title={t.sections.education}>
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <BentoCard className="h-full">
            <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
              <GraduationCap className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{r.education.school}</h3>
            <p className="text-[15px] text-fg/85">{r.education.degree}</p>
            <p className="mt-1 font-mono text-xs text-muted">{r.education.period}</p>
          </BentoCard>
        </Reveal>

        <Reveal delay={0.08}>
          <BentoCard className="h-full">
            <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
              <FlaskConical className="size-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{t.sections.research}</h3>
            <div className="mt-3 space-y-5">
              {r.research.map((x) => (
                <div key={x.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-medium">
                      {x.org} <span className="font-normal text-muted">— {x.role}</span>
                    </p>
                    <span className="font-mono text-xs text-muted">{x.period}</span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-[15px] text-fg/85">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </BentoCard>
        </Reveal>
      </div>
    </Section>
  );
}
