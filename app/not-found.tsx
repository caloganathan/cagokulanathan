import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20">
      <h1 className="font-serif text-3xl md:text-4xl">That page is not here</h1>
      <p className="mt-4 text-[var(--muted)]">Try the services list, the answers, or the contact form.</p>
      <div className="mt-6 flex gap-4">
        <Link className="text-[var(--link)]" href="/services">
          Services
        </Link>
        <Link className="text-[var(--link)]" href="/answers">
          Answers
        </Link>
        <Link className="text-[var(--link)]" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
