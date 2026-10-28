"use client";

import { useSyncExternalStore } from "react";

const variants = {
  v1: "Every batch you ship carries a farmer’s season. We help you get it right.",
  v2: "Biologicals that scale. Dossiers that clear. Science that sells.",
};

export function HeroHeading() {
  const variant = useSyncExternalStore(
    () => () => {},
    () => (new URLSearchParams(window.location.search).get("h") === "2" ? "v2" : "v1"),
    () => "v1" as const,
  );
  return (
    <h1 className="mt-3 font-serif text-[clamp(1.9rem,1.2rem+2.2vw,3rem)] leading-[1.1]">
      {variants[variant]}
    </h1>
  );
}
