"use client";

import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Skills() {
  const { t, r } = useT();
  return (
    <Section id="skills" n="03" title={t.sections.skills}>
      <Reveal>
        <dl>
          {r.skills.map((s, i) => (
            <div
              key={s.group}
              className={`grid gap-2 py-6 md:grid-cols-[10rem_1fr] md:gap-8 ${i === 0 ? "pt-0" : "border-t border-border"}`}
            >
              <dt className="font-serif text-xl italic text-accent">{s.group}</dt>
              <dd className="text-[15px] leading-relaxed">{s.items.join("  ·  ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
