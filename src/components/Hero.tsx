"use client";

import Image from "next/image";
import { Download, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";

const social =
  "grid size-10 place-items-center rounded-full border border-border bg-card text-muted transition hover:border-accent/50 hover:text-accent";

export function Hero() {
  const { t, r } = useT();
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-2xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 md:grid-cols-[1.4fr_1fr] md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </span>

          <p className="mt-6 font-mono text-sm text-accent">{t.hero.greeting}</p>
          <h1 className="mt-1 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">{r.title}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-4" /> {r.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/Yusuf_Macit_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              <Download className="size-4" />
              {t.hero.downloadCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent"
            >
              <Mail className="size-4" />
              {t.hero.cta}
            </a>
            <WhatsAppButton />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a className={social} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="size-4" />
            </a>
            <a className={social} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon className="size-4" />
            </a>
            <a className={social} href={`mailto:${profile.email}`} aria-label="Email">
              <Mail className="size-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-56 sm:w-72 md:order-2 md:w-full md:max-w-sm"
        >
          <div className="rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 p-[3px] shadow-[0_20px_80px_-20px_var(--glow)]">
            <Image
              src="/yusuf-macit.jpg"
              alt="Yusuf Macit"
              width={400}
              height={400}
              priority
              className="aspect-square w-full rounded-[calc(2rem-3px)] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
