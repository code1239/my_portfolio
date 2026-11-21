"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";
import { ContactForm } from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal } from "./ui/Reveal";
import { BentoCard, Section } from "./ui/Section";
import { WhatsAppButton } from "./WhatsAppButton";

function Row({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const inner = (
    <>
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">{icon}</span>
      <span className="min-w-0 break-words text-sm">{label}</span>
    </>
  );
  const cls = "flex items-center gap-3";
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${cls} transition hover:text-accent`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export function Contact() {
  const { t, r } = useT();
  return (
    <Section id="contact" title={t.sections.contact}>
      <div className="grid gap-4 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <BentoCard className="h-full space-y-4">
            <h3 className="text-xl font-semibold">{t.contact.heading}</h3>
            <p className="text-sm text-muted">{t.contact.sub}</p>
            <div className="space-y-3 pt-2">
              <Row icon={<Mail className="size-4" />} label={profile.email} href={`mailto:${profile.email}`} />
              <Row icon={<Phone className="size-4" />} label={profile.phone} href={`tel:+${profile.phoneIntl}`} />
              <Row icon={<MapPin className="size-4" />} label={r.location} />
              <Row icon={<LinkedInIcon className="size-4" />} label="LinkedIn" href={profile.linkedin} />
              <Row icon={<GitHubIcon className="size-4" />} label="GitHub" href={profile.github} />
            </div>
            <div className="pt-2">
              <WhatsAppButton className="w-full" />
            </div>
          </BentoCard>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-3">
          <BentoCard className="h-full">
            <ContactForm />
          </BentoCard>
        </Reveal>
      </div>
    </Section>
  );
}
