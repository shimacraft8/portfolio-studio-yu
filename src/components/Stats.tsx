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
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 gap-12 divide-y divide-white/10 sm:grid-cols-3 sm:gap-6 sm:divide-x sm:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="pt-12 text-center first:pt-0 sm:pt-0">
            <div className="display-en text-6xl font-light text-white sm:text-7xl">
              <Counter
                value={s.value}
                suffix={s.suffix}
                decimals={(s as { decimals?: number }).decimals ?? 0}
                active={inView}
              />
            </div>
            <div className="mt-4 text-[11px] tracking-[0.3em] text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-12 text-center text-[10px] tracking-[0.2em] text-white/30">
        {statsNote}
      </p>
    </div>
  );
}
