import Link from "next/link";
import { Card, ProgressBar } from "@heroui/react";
import { getSubjectContentWithNotes as getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";

export default async function SyllabusPage(props: PageProps<"/syllabus">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);
  const { syllabus } = content;
  const flashcardUnits = new Set(content.flashcards.map((c) => c.unit));

  const maxWeightage = Math.max(1, ...syllabus.units.map((u) => u.weightageMarks ?? 0));
  const totalTopics = syllabus.units.reduce((n, u) => n + u.topics.length, 0);
  const notedTopics = syllabus.units.reduce(
    (n, u) => n + u.topics.filter((t) => u.notes?.[t]).length,
    0
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Syllabus & Notes</h1>
      <p className="mb-6 mt-1 text-sm text-muted">
        {notedTopics > 0
          ? `${notedTopics} of ${totalTopics} topics have study notes. Tap a topic to study it.`
          : "Study notes for this subject are coming soon."}
      </p>
      <div className="space-y-4">
        {syllabus.units.map((unit) => (
          <Card key={unit.unit} className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-medium">{unit.unit}</h2>
              {unit.weightageMarks !== undefined && (
                <span className="text-xs text-muted">
                  ~{unit.weightageMarks} marks historically
                </span>
              )}
            </div>
            {unit.weightageMarks !== undefined && (
              <ProgressBar
                aria-label={`${unit.unit} historical weightage`}
                value={unit.weightageMarks}
                minValue={0}
                maxValue={maxWeightage}
                size="sm"
                className="mb-3"
              >
                <ProgressBar.Track>
                  <ProgressBar.Fill />
                </ProgressBar.Track>
              </ProgressBar>
            )}
            <ul className="space-y-0.5 text-sm">
              {unit.topics.map((topic) =>
                unit.notes?.[topic] ? (
                  <li key={topic}>
                    <Link
                      href={`/notes?subject=${subjectId}&topic=${encodeURIComponent(topic)}`}
                      className="flex min-h-11 items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-foreground hover:bg-surface-secondary"
                    >
                      <span>{topic}</span>
                      <span aria-hidden className="shrink-0 text-accent">
                        ›
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li key={topic} className="px-2 py-1.5 text-surface-foreground">
                    {topic}
                  </li>
                )
              )}
            </ul>
            {flashcardUnits.has(unit.unit) && (
              <Link
                href={`/flashcards?subject=${subjectId}&unit=${encodeURIComponent(unit.unit)}`}
                className="mt-3 inline-block text-sm text-accent underline underline-offset-2"
              >
                Practise this unit with flashcards
              </Link>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
