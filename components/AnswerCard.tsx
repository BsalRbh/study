"use client";

import { useState } from "react";
import { Card, Chip } from "@heroui/react";
import type { Question } from "@/content/types";
import { useProgress } from "@/lib/progress/useProgress";
import type { SubjectContent } from "@/content/types";
import { BookmarkButton } from "./BookmarkButton";
import { MathText } from "./MathText";

// Word targets follow how Purbanchal marks: longer answers for higher-mark questions.
function tierForMarks(marks: number) {
  if (marks >= 12)
    return { chip: "accent", stripe: "bg-accent", target: "Aim 250–400+ words" } as const;
  if (marks >= 8)
    return { chip: "success", stripe: "bg-success", target: "Aim 150–250 words" } as const;
  return { chip: "default", stripe: "bg-border-tertiary", target: "Aim 60–120 words" } as const;
}

function wordCount(markdown: string) {
  return markdown
    .replace(/\$\$?[^$]*\$\$?/g, " x ")
    .replace(/[*_#>|`-]+/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
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
  const tier = tierForMarks(question.marks);

  return (
    <Card id={`q-${question.id}`} className="relative scroll-mt-20 overflow-hidden p-4 pl-5 sm:p-5 sm:pl-6">
      <span aria-hidden className={`absolute inset-y-0 left-0 w-1 ${tier.stripe}`} />
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <Chip size="sm" color={tier.chip} variant="soft">
            <Chip.Label>
              Group {question.group} · {question.marks} marks
            </Chip.Label>
          </Chip>
          <span className="rounded-full border border-border px-2 py-0.5">{tier.target}</span>
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
        <span className="block font-medium leading-relaxed">
          <MathText text={question.prompt} inline />
        </span>
      </button>
      {expanded ? (
        <div className="mt-3 border-t border-separator pt-3">
          <div className="max-w-[68ch] text-[15px] leading-7 text-foreground/85 sm:text-base">
            <MathText text={question.answer} />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted">
            <span>Model answer: {wordCount(question.answer)} words</span>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="cursor-pointer underline underline-offset-2 hover:text-foreground"
            >
              Hide answer
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="cursor-pointer text-xs font-medium text-accent underline underline-offset-2"
        >
          Show answer
        </button>
      )}
    </Card>
  );
}
