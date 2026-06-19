'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;   // e.g. "15+", "10,000+", "3"
  label: string;
}

function parseTarget(value: string): { num: number; suffix: string } {
  // Strip everything except digits and commas, then parse
  const cleaned = value.replace(/,/g, '');
  const match = cleaned.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function formatNum(n: number, original: string): string {
  // Preserve comma formatting for large numbers like 10,000
  if (original.includes(',')) {
    return n.toLocaleString('en-IN');
  }
  return String(n);
}

function AnimatedStat({ value, label }: Stat) {
  const { num: target, suffix } = parseTarget(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600; // ms
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      <div className="font-playfair text-4xl font-black text-teal mb-1">
        {formatNum(display, value)}{suffix}
      </div>
      <div className="text-sm text-txt-light font-medium">{label}</div>
    </div>
  );
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
