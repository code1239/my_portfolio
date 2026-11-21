"use client";

import { Bot, Handshake, Server, Terminal } from "lucide-react";
import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { BentoCard, Chip, Section } from "./ui/Section";

const icons = [Bot, Server, Terminal, Handshake];

export function Skills() {
  const { t, r } = useT();
  return (
    <Section id="skills" title={t.sections.skills}>
      <div className="grid gap-4 sm:grid-cols-2">
        {r.skills.map((s, i) => {
          const Icon = icons[i] ?? Bot;
          return (
            <Reveal key={s.group} delay={0.06 * i}>
              <BentoCard className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </BentoCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
