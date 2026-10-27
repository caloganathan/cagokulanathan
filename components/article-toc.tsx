export function ArticleToc({ items }: { items: { id: string; text: string }[] }) {
  if (!items.length) return null;
  return (
    <nav aria-label="On this page" className="rounded-2xl bg-[var(--mist)] p-4 text-sm">
      <p className="font-semibold">On this page</p>
      <ol className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a className="text-[var(--link)]" href={`#${item.id}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}
