import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

function KeyTakeaways({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-2xl border border-[var(--line)] bg-[var(--mist)] p-5">
      <p className="font-serif text-xl text-[var(--ink)]">Key takeaways</p>
      <div className="mt-3 space-y-2 text-[0.98rem] leading-relaxed">{children}</div>
    </aside>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    KeyTakeaways,
    h2: (props) => (
      <h2 className="mt-10 font-serif text-3xl leading-tight text-[var(--ink)]" {...props} />
    ),
    h3: (props) => (
      <h3 className="mt-8 font-serif text-2xl leading-tight text-[var(--ink)]" {...props} />
    ),
    p: (props) => <p className="mt-4 leading-[1.7] text-[var(--muted)]" {...props} />,
    ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]" {...props} />,
    ol: (props) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-[var(--muted)]" {...props} />
    ),
    li: (props) => <li className="leading-[1.6]" {...props} />,
    a: (props) => (
      <a className="text-[var(--link)] underline decoration-[var(--bio-teal)] underline-offset-4" {...props} />
    ),
    table: (props) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="border-b border-[var(--line)] bg-[var(--mist)] px-3 py-2 font-semibold text-[var(--ink)]" {...props} />
    ),
    td: (props) => (
      <td className="border-b border-[var(--line)] px-3 py-2 align-top text-[var(--muted)]" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="my-6 border-l-4 border-[var(--amber)] pl-4 text-[var(--ink)]" {...props} />
    ),
  };
}
