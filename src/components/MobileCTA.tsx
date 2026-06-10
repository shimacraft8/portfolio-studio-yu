"use client";

import { site } from "@/src/data/site";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full border-t border-white/10 bg-bg/90 p-3 backdrop-blur-xl md:hidden">
      <div className="flex gap-3">
        <a
          href={`tel:${site.telLink}`}
          className="flex-1 rounded-full border border-white/20 py-3 text-center text-sm font-bold text-text"
        >
          電話する
        </a>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] rounded-full bg-accent py-3 text-center text-sm font-bold text-bg"
        >
          Instagramで予約
        </a>
      </div>
    </div>
  );
}
