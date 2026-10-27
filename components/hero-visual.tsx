"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setOn(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={on ? "hero-visual is-on" : "hero-visual"} aria-hidden="true">
      <svg viewBox="0 0 360 420" className="h-auto w-full max-w-[420px]" role="img">
        <title>A helix, a fermenter and a product pack</title>
        <rect x="18" y="18" width="324" height="384" rx="28" fill="var(--mist)" />
        <g className="frame frame-a" fill="none" stroke="var(--forest)" strokeWidth="2.2">
          <path d="M120 70c40 30 80 30 120 0M120 110c40 30 80 30 120 0M120 150c40 30 80 30 120 0M120 190c40 30 80 30 120 0M120 230c40 30 80 30 120 0M120 270c40 30 80 30 120 0M120 310c40 30 80 30 120 0" />
          <path d="M140 70v240M220 70v240" stroke="var(--leaf)" />
        </g>
        <g className="frame frame-b" fill="none" stroke="var(--forest)" strokeWidth="2.2">
          <rect x="130" y="78" width="100" height="46" rx="8" />
          <path d="M146 124h68l18 176H128z" />
          <path d="M150 190h78M146 230h86" stroke="var(--bio-teal)" />
          <circle cx="180" cy="96" r="6" fill="var(--amber)" stroke="none" />
        </g>
        <g className="frame frame-c" fill="none" stroke="var(--forest)" strokeWidth="2.2">
          <rect x="118" y="90" width="124" height="210" rx="16" />
          <path d="M118 140h124" />
          <path d="M146 190c20 18 48 18 68 0" stroke="var(--leaf)" />
          <path d="M150 230h64M150 252h40" stroke="var(--bio-teal)" />
          <circle cx="180" cy="112" r="8" fill="var(--amber)" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
