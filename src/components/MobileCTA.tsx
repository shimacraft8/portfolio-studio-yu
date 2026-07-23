"use client";

import { site } from "@/src/data/site";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-40 flex w-full md:hidden">
      <a
        href={`tel:${site.telLink}`}
        className="flex-1 border-t border-white/20 bg-accent py-4 text-center text-[11px] uppercase tracking-[0.2em] text-white"
      >
        Tel
      </a>
      <a
        href={site.line}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[2] bg-white py-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-text ring-1 ring-inset ring-accent"
      >
        公式LINEで予約
      </a>
    </div>
  );
}
