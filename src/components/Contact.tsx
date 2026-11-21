"use client";

import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { WhatsAppButton } from "./WhatsAppButton";

function Row({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="grid grid-cols-[6rem_1fr] gap-4 border-t border-border py-3 text-sm first:border-t-0 first:pt-0">
      <dt className="font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="min-w-0 break-words">
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition hover:text-accent"
        >
          {value}
        </a>
      </dd>
    </div>
  );
}

export function Contact() {
  const { t } = useT();
  return (
    <Section id="contact" n="06" title={t.sections.contact}>
      <Reveal>
        <p className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{t.contact.heading}</p>
        <p className="mt-4 text-muted">{t.contact.sub}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block break-all font-serif text-2xl italic text-accent underline underline-offset-8 sm:text-3xl"
        >
          {profile.email}
        </a>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <dl>
            <Row label="Tel" value={profile.phone} href={`tel:+${profile.phoneIntl}`} />
            <Row label="LinkedIn" value="yusuf-macit" href={profile.linkedin} />
            <Row label="GitHub" value="code1239" href={profile.github} />
          </dl>
          <div className="mt-6">
            <WhatsAppButton />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
