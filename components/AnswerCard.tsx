"use client";

import { useState } from "react";
import { Card, Chip } from "@heroui/react";
import type { Question } from "@/content/types";
import { useProgress } from "@/lib/progress/useProgress";
import type { SubjectContent } from "@/content/types";
import { BookmarkButton } from "./BookmarkButton";
import { MathText } from "./MathText";

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
  const [expanded, setExpanded] = useState(false);

  return (
    <Card id={`q-${question.id}`} className="scroll-mt-20 p-4">
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
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="mb-1 w-full cursor-pointer text-left"
        aria-expanded={expanded}
      >
        <span className="block font-medium">
          <MathText text={question.prompt} inline />
        </span>
      </button>
      {expanded ? (
        <div className="mt-2 text-base leading-relaxed text-foreground/80">
          <MathText text={question.answer} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="cursor-pointer text-xs text-muted underline underline-offset-2"
        >
          Show answer
        </button>
      )}
    </Card>
  );
}
