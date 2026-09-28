import Link from "next/link";
import { Card } from "@heroui/react";
import { subjects } from "@/content/subjects";
import { ExamCountdown } from "@/components/ExamCountdown";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-semibold">Your Subjects</h1>
      <p className="mt-2 text-muted">
        Pick a subject to study flashcards, take quizzes, and track your progress.
      </p>
      <ul className="mt-8 space-y-4">
        {subjects.map((subject) => {
          return (
            <li key={subject.id}>
              <Link href={`/dashboard?subject=${subject.id}`}>
                <Card className="p-4 transition-colors hover:border-accent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{subject.name}</div>
                      {subject.code && (
                        <div className="text-sm text-muted">
                          {subject.code} {subject.semester ? `· ${subject.semester}` : ""}
                        </div>
                      )}
                    </div>
                    <ExamCountdown subjectId={subject.id} fallbackDate={subject.examDate} />
                  </div>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
