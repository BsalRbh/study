import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@heroui/react";
import { getSubjectContentWithNotes as getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { MathText } from "@/components/MathText";

export default async function NotePage(props: PageProps<"/notes">) {
  const searchParams = await props.searchParams;
  const subject = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  );
  const content = getSubjectContent(subject.id);
  const topic = typeof searchParams.topic === "string" ? searchParams.topic : "";

  const noted = content.syllabus.units.flatMap((unit) =>
    unit.topics.filter((t) => unit.notes?.[t]).map((t) => ({ unit, topic: t }))
  );
  const index = noted.findIndex((n) => n.topic === topic);
  if (index === -1) notFound();
  const { unit } = noted[index];
  const note = unit.notes![topic];
  const prev = noted[index - 1];
  const next = noted[index + 1];
  const q = `subject=${subject.id}`;
  const noteHref = (t: string) => `/notes?${q}&topic=${encodeURIComponent(t)}`;
  const hasCards = content.flashcards.some((c) => c.unit === unit.unit);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href={`/syllabus?${q}`} className="text-sm text-muted hover:text-foreground">
        ← {unit.unit}
      </Link>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{topic}</h1>

      <Card className="mt-5 bg-accent/10 p-4">
        <div className="text-xs font-medium uppercase tracking-wide text-muted">
          Test yourself first
        </div>
        <p className="mt-1 text-xs text-muted">
          Try answering each one in your head (or on paper) before you read. Recalling beats
          re-reading.
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-foreground">
          {note.selfTest.map((item) => (
            <li key={item}>
              <MathText text={item} inline />
            </li>
          ))}
        </ol>
      </Card>

      <details className="group mt-5">
        <summary className="cursor-pointer list-none rounded-xl border border-border bg-surface px-4 py-3 text-center font-medium text-accent hover:bg-surface-secondary">
          <span className="group-open:hidden">I&apos;ve tried. Show the notes</span>
          <span className="hidden group-open:inline">Hide notes</span>
        </summary>
        <article className="mt-5 text-[15px] leading-7 text-foreground/90 sm:text-base">
          <MathText text={note.body} />
        </article>
        {hasCards && (
          <Card className="mt-6 p-4 text-sm">
            <div className="font-medium">Lock it in</div>
            <p className="mt-1 text-muted">
              Close the notes and answer the questions above again. Then practise this unit
              with flashcards so it comes back on schedule.
            </p>
            <Link
              href={`/flashcards?${q}&unit=${encodeURIComponent(unit.unit)}`}
              className="mt-2 inline-block text-accent underline underline-offset-2"
            >
              Practise {unit.unit}
            </Link>
          </Card>
        )}
      </details>

      <nav className="mt-8 flex justify-between gap-3 text-sm">
        {prev ? (
          <Link href={noteHref(prev.topic)} className="max-w-[45%] text-muted hover:text-foreground">
            ← {prev.topic}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={noteHref(next.topic)}
            className="max-w-[45%] text-right text-muted hover:text-foreground"
          >
            {next.topic} →
          </Link>
        )}
      </nav>
    </div>
  );
}
