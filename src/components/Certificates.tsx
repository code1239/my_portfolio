"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Award, Download, X } from "lucide-react";
import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { BentoCard, Section } from "./ui/Section";

export function Certificates() {
  const { t, r } = useT();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const c = r.certificate;
  return (
    <Section id="certificates" title={t.sections.certificates}>
      <Reveal>
        <BentoCard className="grid items-center gap-6 md:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="grid size-11 place-items-center rounded-xl bg-accent-soft text-accent">
              <Award className="size-5" />
            </span>
            <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
            <p className="text-sm text-muted">
              {c.issuer} · <span className="font-mono">{c.date}</span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-fg/85">{c.detail}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
              >
                {t.certificate.view}
              </button>
              <a
                href="/certificates/hf-agents.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent"
              >
                <Download className="size-4" />
                {t.certificate.download}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.certificate.view}
            className="overflow-hidden rounded-xl border border-border bg-white transition hover:shadow-[0_8px_40px_-12px_var(--glow)]"
          >
            <Image
              src="/certificates/hf-agents.webp"
              alt={`${c.issuer} — ${c.title}`}
              width={2000}
              height={1414}
              sizes="(min-width: 768px) 520px, 90vw"
              className="h-auto w-full"
            />
          </button>
        </BentoCard>
      </Reveal>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={c.title}
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.certificate.close}
            className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
          >
            <X className="size-5" />
          </button>
          <Image
            src="/certificates/hf-agents.webp"
            alt={`${c.issuer} — ${c.title}`}
            width={2000}
            height={1414}
            sizes="95vw"
            className="h-auto max-h-[90vh] w-auto max-w-[95vw] rounded-lg bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}
