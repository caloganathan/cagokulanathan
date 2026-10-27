import { site } from "@/content/site";

export function Reviewed({ sources }: { sources?: { label: string; href: string }[] }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--mist)] p-4 text-sm">
      <p className="font-semibold text-[var(--ink)]">Last reviewed: {site.lastReviewedRegulatory}</p>
      <p className="mt-1 text-[var(--muted)]">
        Registration and certification decisions rest with the competent authority. This page is technical guidance, not legal advice.
      </p>
      {sources && sources.length > 0 ? (
        <ul className="mt-3 space-y-1">
          {sources.map((source) => (
            <li key={source.href}>
              <a className="text-[var(--link)] underline-offset-4 hover:underline" href={source.href}>
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
