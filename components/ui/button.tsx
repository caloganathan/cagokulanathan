import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const styles = {
  primary:
    "bg-[var(--forest)] text-white hover:bg-[#164d3b] dark:text-[#f7f5ef]",
  whatsapp: "bg-[var(--whatsapp)] text-[#0e1a14] hover:brightness-95",
  ghost:
    "border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--mist)]",
  text: "underline decoration-[var(--bio-teal)] underline-offset-4 text-[var(--link)]",
} as const;

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof styles }) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-center text-[0.95rem] font-semibold no-underline",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: keyof typeof styles }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2 text-[0.95rem] font-semibold",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
