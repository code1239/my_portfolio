"use client";

import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Experience() {
  const { t, r } = useT();
  return (
    <Section id="experience" n="02" title={t.sections.experience}>
      <div>
        {r.experience.map((e, i) => (
          <Reveal key={e.company}>
            <article className={`grid gap-3 py-8 md:grid-cols-[9rem_1fr] md:gap-8 ${i === 0 ? "pt-0" : "border-t border-border"}`}>
              <p className="font-mono text-xs text-muted md:pt-2">{e.period}</p>
              <div>
                <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                  {e.company}
                  <span className="italic text-muted"> — {e.role}</span>
                </h3>
                {e.clients && (
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-mono text-xs uppercase tracking-wider">{t.experience.clients}: </span>
                    {e.clients.join(", ")}
                  </p>
                )}
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden="true" className="text-muted">
                        –
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
