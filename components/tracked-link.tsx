"use client";

import { track, type AnalyticsEvent } from "@/lib/analytics";
import type { ComponentProps } from "react";

export function TrackedLink({
  event,
  params,
  onClick,
  ...props
}: ComponentProps<"a"> & { event: AnalyticsEvent; params?: Record<string, string> }) {
  return (
    <a
      {...props}
      onClick={(eventObject) => {
        track(event, params);
        onClick?.(eventObject);
      }}
    />
  );
}
