"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useT } from "@/i18n/useT";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

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
    <Section id="certificates" n="04" title={t.sections.certificates}>
      <Reveal>
        <div className="grid items-start gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-mono text-xs text-muted">
              {c.issuer} · {c.date}
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-tight">{c.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed">{c.detail}</p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="underline underline-offset-4 transition hover:text-accent"
              >
                {t.certificate.view}
              </button>
              <a
                href="/certificates/hf-agents.pdf"
                download
                className="underline underline-offset-4 transition hover:text-accent"
              >
                {t.certificate.download}
              </a>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.certificate.view}
            className="block border border-fg bg-white transition hover:opacity-90"
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
        </div>
      </Reveal>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={c.title}
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.certificate.close}
            className="absolute right-4 top-4 grid size-10 place-items-center border border-white/40 text-white transition hover:bg-white/15"
          >
            <X className="size-5" />
          </button>
          <Image
            src="/certificates/hf-agents.webp"
            alt={`${c.issuer} — ${c.title}`}
            width={2000}
            height={1414}
            sizes="95vw"
            className="h-auto max-h-[90vh] w-auto max-w-[95vw] bg-white object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}
