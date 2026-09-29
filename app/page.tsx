import Link from "next/link";
import { Card } from "@heroui/react";
import { subjects } from "@/content/subjects";
import { ExamCountdown } from "@/components/ExamCountdown";

function monogram(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w) && !["and", "of", "&"].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <p className="text-sm font-medium text-accent">Exam Prep Hub</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Your subjects</h1>
      <p className="mt-3 max-w-xl text-muted">
        Pick a subject to study flashcards, take quizzes, and track your progress.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {subjects.map((subject) => (
          <li key={subject.id}>
            <Link
              href={`/dashboard?subject=${subject.id}`}
              className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Card className="h-full gap-4 p-5 transition duration-200 group-hover:-translate-y-0.5 group-hover:border-accent/60 group-hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <span
                    aria-hidden
                    className="grid h-11 min-w-11 shrink-0 place-items-center rounded-xl bg-accent/12 px-2 text-sm font-semibold tracking-wide text-accent"
                  >
                    {subject.shortName ?? monogram(subject.name)}
                  </span>
                  <ExamCountdown subjectId={subject.id} fallbackDate={subject.examDate} />
                </div>
                <div>
                  <div className="font-medium leading-snug">{subject.name}</div>
                  {subject.code && (
                    <div className="mt-0.5 text-sm text-muted">
                      {subject.code} {subject.semester ? `· ${subject.semester}` : ""}
                    </div>
                  )}
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
