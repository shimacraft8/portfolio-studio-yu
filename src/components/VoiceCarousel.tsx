"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { voices, voicesNote } from "@/src/data/site";

export function VoiceCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setI((v) => (v + 1) % voices.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[200px] rounded-2xl border border-white/10 bg-card2 p-8 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base leading-relaxed text-text/90 sm:text-lg">
              「{voices[i].text}」
            </p>
            <footer className="mt-5 text-sm text-accent">— {voices[i].name}</footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {voices.map((_, idx) => (
          <button
            key={idx}
            aria-label={`お客様の声 ${idx + 1} を表示`}
            onClick={() => setI(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === i ? "w-7 bg-accent" : "w-2.5 bg-white/25"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-text/40">{voicesNote}</p>
    </div>
  );
}
