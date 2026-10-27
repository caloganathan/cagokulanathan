import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { answers } from "@/content/answers";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata({
  title: "Answers on biologicals regulation",
  description:
    "Short, sourced answers on Schedule VI, CIB&RC, fermentation, CAA, RNAi and what a biologicals consultant costs in India.",
  path: "/answers",
});

export default function AnswersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Answers", path: "/answers" }]} />
      <h1 className="mt-4 font-serif text-5xl">Answers</h1>
      <p className="mt-4 text-[var(--muted)]">
        Twenty-five questions, each on its own URL, written so a reader can quote the first paragraph. Regulatory answers link to a primary source.
      </p>
      <ol className="mt-6 space-y-3">
        {answers.map((answer, index) => (
          <li key={answer.slug}>
            <Link className="text-[var(--link)]" href={`/answers/${answer.slug}`}>
              {index + 1}. {answer.question}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
