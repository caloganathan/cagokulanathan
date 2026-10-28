"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/hero/life-begins.webp",
    alt: "A farmer's hands holding a young seedling with its roots in dark soil at sunrise. Caption: Life begins beneath the soil.",
  },
  {
    src: "/hero/strain-to-shelf.webp",
    alt: "A scientist in blue gloves holds up a flask of golden fermentation broth in front of stainless-steel fermenters. Caption: From strain to shelf.",
  },
  {
    src: "/hero/grown-by-nature.webp",
    alt: "An agronomist and a farmer inspect tomato plants in misty fields at sunrise. Caption: Grown by nature. Proven by science.",
  },
] as const;

const INTERVAL_MS = 5500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [reduced, setReduced] = useState(true);
  const n = slides.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const running = !reduced && !paused && !hovering;
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setIndex((value) => value + 1), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [running, index]);

  const current = ((index % n) + n) % n;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="JK Advisory in the field, the plant and the soil"
      className="relative overflow-hidden rounded-3xl bg-[#1a2a22]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative aspect-[3/2] w-full sm:aspect-[2/1] lg:aspect-[2.4/1]">
        {slides.map((slide, i) => {
          const position = (((i - index) % n) + n) % n; // 0 current, 1 waiting right, n-1 just left
          const x = position === 0 ? 0 : position === 1 ? 100 : -100;
          return (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${n}`}
              aria-hidden={position !== 0}
              className="absolute inset-0"
              style={{
                transform: `translateX(${x}%)`,
                transition: position === 1 || reduced ? "none" : "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 1152px) 1152px, 100vw"
                quality={80}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-8">
        <div className="flex items-center gap-1" role="group" aria-label="Choose slide">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show slide ${i + 1} of ${n}`}
              aria-current={current === i}
              onClick={() => setIndex(i)}
              className="grid size-11 place-items-center"
            >
              <span className={`block h-2 rounded-full transition-all ${current === i ? "w-8 bg-[#f7c948]" : "w-2 bg-white/70"}`} />
            </button>
          ))}
        </div>
        {!reduced ? (
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            className="min-h-11 rounded-full bg-black/45 px-4 text-sm font-semibold text-white ring-1 ring-white/40"
          >
            {paused ? "Play" : "Pause"}
          </button>
        ) : null}
      </div>
      <p className="sr-only" aria-live="polite">{`Slide ${current + 1} of ${n}`}</p>
    </section>
  );
}
