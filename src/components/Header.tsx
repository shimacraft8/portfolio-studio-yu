"use client";

import { useEffect, useState } from "react";
import { site } from "@/src/data/site";

const nav = [
  { label: "Concept", href: "#concept" },
  { label: "Trainer", href: "#trainer" },
  { label: "Menu", href: "#menu" },
  { label: "Price", href: "#price" },
  { label: "Access", href: "#access" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#hero" className="font-display text-lg font-extrabold tracking-wide">
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-display text-sm text-text/80 transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
          >
            ご予約・お問い合わせ
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-text" />
            <span className="block h-0.5 w-6 bg-text" />
            <span className="block h-0.5 w-6 bg-text" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-bg/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="font-display text-base text-text/90"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
