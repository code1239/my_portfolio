"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { useT } from "@/i18n/useT";
import { profile } from "@/content/resume";
import { WhatsAppButton } from "./WhatsAppButton";
import { btnPrimary, btnSecondary } from "./ui/Section";

const textLink = "inline-flex items-center gap-1 underline underline-offset-4 transition hover:text-accent";

export function Hero() {
  const { t, r } = useT();
  const [first, ...rest] = profile.name.split(" ");
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1 md:col-span-7"
        >
          <p className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {t.hero.available}
          </p>

          <p className="mt-8 font-serif text-xl italic text-muted">{t.hero.greeting}</p>
          <h1 className="font-serif text-[clamp(3.5rem,13vw,8.5rem)] leading-[0.9] tracking-tight">
            {first}
            <br />
            <span className="italic text-accent">{rest.join(" ")}</span>
          </h1>

          <p className="mt-8 max-w-md border-t border-border pt-5 font-serif text-xl leading-snug">{r.title}</p>
          <p className="mt-2 font-mono text-xs text-muted">{r.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/Yusuf_Macit_Resume.pdf" download className={btnPrimary}>
              <Download className="size-4" />
              {t.hero.downloadCv}
            </a>
            <a href="#contact" className={btnSecondary}>
              {t.hero.cta}
            </a>
            <WhatsAppButton />
          </div>

          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a className={textLink} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <ArrowUpRight className="size-3.5" />
            </a>
            <a className={textLink} href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight className="size-3.5" />
            </a>
            <a className={textLink} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 mx-auto w-52 sm:w-64 md:order-2 md:col-span-5 md:w-full"
        >
          <Image
            src="/yusuf-macit.jpg"
            alt="Yusuf Macit"
            width={1024}
            height={1024}
            priority
            quality={95}
            sizes="(min-width: 768px) 800px, 512px"
            className="aspect-[4/5] w-full border border-fg object-cover object-top"
          />
          <figcaption className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-wider text-muted">
            <span>{profile.name}</span>
            <span>{r.location}</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
