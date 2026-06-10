"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats, statsNote } from "@/src/data/site";

function Counter({
  value,
  suffix,
  decimals = 0,
  active,
}: {
  value: number;
  suffix: string;
  decimals?: number;
  active: boolean;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return (
    <span>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-white/10 bg-card2 px-6 py-10 text-center"
        >
          <div className="font-display text-5xl font-extrabold text-accent">
            <Counter
              value={s.value}
              suffix={s.suffix}
              decimals={(s as { decimals?: number }).decimals ?? 0}
              active={inView}
            />
          </div>
          <div className="mt-3 text-sm tracking-wide text-text/70">{s.label}</div>
        </div>
      ))}
      <p className="col-span-full text-center text-xs text-text/40">{statsNote}</p>
    </div>
  );
}
