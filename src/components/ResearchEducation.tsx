"use client";

import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function ResearchEducation() {
  const { t, r } = useT();
  return (
    <Section id="education" n="05" title={t.sections.education}>
      <Reveal>
        <div className="grid gap-2 md:grid-cols-[9rem_1fr] md:gap-8">
          <p className="font-mono text-xs text-muted md:pt-2">{r.education.period}</p>
          <div>
            <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{r.education.school}</h3>
            <p className="mt-1 italic text-muted">{r.education.degree}</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-14 border-b border-border pb-3 font-mono text-xs uppercase tracking-wider text-muted">
          {t.sections.research}
        </p>
        {r.research.map((x, i) => (
          <div
            key={x.org}
            className={`grid gap-2 py-6 md:grid-cols-[9rem_1fr] md:gap-8 ${i > 0 ? "border-t border-border" : ""}`}
          >
            <p className="font-mono text-xs text-muted md:pt-1">{x.period}</p>
            <div>
              <h3 className="font-serif text-xl leading-tight">
                {x.org}
                <span className="italic text-muted"> — {x.role}</span>
              </h3>
              <ul className="mt-2 space-y-1 text-[15px] leading-relaxed">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
