"use client";

import { Card, Chip } from "@heroui/react";
import type { Question } from "@/content/types";
import { useProgress } from "@/lib/progress/useProgress";
import type { SubjectContent } from "@/content/types";
import { BookmarkButton } from "./BookmarkButton";

function chipColorForMarks(marks: number): "accent" | "success" | "default" {
  if (marks >= 12) return "accent";
  if (marks >= 8) return "success";
  return "default";
}

export function AnswerCard({
  question,
  subjectId,
  content,
  topic,
}: {
  question: Question;
  subjectId: string;
  content: SubjectContent;
  topic?: string;
}) {
  const { progress, toggleBookmark } = useProgress(subjectId, content);
  const bookmarkKey = `question:${question.id}`;

  return (
    <Card className="p-4">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <Chip size="sm" color={chipColorForMarks(question.marks)} variant="soft">
            <Chip.Label>
              Group {question.group} · {question.marks} marks
            </Chip.Label>
          </Chip>
          {topic && <span>{topic}</span>}
          {question.years?.length ? <span>{question.years.join(", ")}</span> : null}
        </div>
        <BookmarkButton
          bookmarked={progress.bookmarks.includes(bookmarkKey)}
          onToggle={() => toggleBookmark(bookmarkKey)}
        />
      </div>
      <p className="mb-3 font-medium">{question.prompt}</p>
      <p className="whitespace-pre-line text-sm text-surface-foreground">{question.answer}</p>
    </Card>
  );
}
