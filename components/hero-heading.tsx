"use client";

import { useSyncExternalStore } from "react";

const variants = {
  v1: "Biologicals that scale. Dossiers that clear. Science that sells.",
  v2: "From strain to shelf — faster, cleaner, regulation-ready.",
};

export function HeroHeading() {
  const variant = useSyncExternalStore(
    () => () => {},
    () => (new URLSearchParams(window.location.search).get("h") === "2" ? "v2" : "v1"),
    () => "v1" as const,
  );
  return (
    <h1 className="mt-3 font-serif text-[clamp(2.4rem,1.4rem+3vw,4.4rem)] leading-[1.05]">
      {variants[variant]}
    </h1>
  );
}
