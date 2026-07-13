"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/src/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="flex items-baseline gap-3 text-[13px] tracking-wide text-text sm:text-sm">
                <span className="display-en text-[11px] text-text/40">
                  Q{i + 1}
                </span>
                {f.q}
              </span>
              <span
                className={`shrink-0 text-lg font-light text-text/50 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="pb-6 pl-8 pr-6 text-[13px] font-light leading-loose text-text/65">
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
