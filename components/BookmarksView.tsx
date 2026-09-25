"use client";

import { Card } from "@heroui/react";
import type { SubjectContent } from "@/content/types";
import { useProgress } from "@/lib/progress/useProgress";
import { BookmarkButton } from "./BookmarkButton";

function resolveBookmark(key: string, content: SubjectContent) {
  const [type, ...rest] = key.split(":");
  const id = rest.join(":");

  if (type === "flashcard") {
    const card = content.flashcards.find((c) => c.id === id);
    if (card) return { label: card.front, detail: card.back };
  }
  if (type === "question") {
    const question =
      content.mockPaper.questions.find((q) => q.id === id) ??
      content.pastPapers.questions.find((q) => q.id === id);
    if (question) return { label: question.prompt, detail: question.answer };
  }
  if (type === "glossary") {
    const term = content.glossary.find((g) => g.term === id);
    if (term) return { label: term.term, detail: term.definition };
  }
  return { label: key, detail: "(content no longer available)" };
}

export function BookmarksView({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { progress, toggleBookmark } = useProgress(subjectId, content);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Bookmarks</h1>
      {progress.bookmarks.length === 0 ? (
        <p className="text-sm text-muted">
          Star flashcards, questions, or glossary terms to save them here as a
          &quot;weak spots&quot; list.
        </p>
      ) : (
        <div className="space-y-3">
          {progress.bookmarks.map((key) => {
            const { label, detail } = resolveBookmark(key, content);
            return (
              <Card key={key} className="flex-row items-start justify-between gap-2 p-3">
                <div>
                  <div className="font-medium">{label}</div>
                  <div className="text-sm text-surface-foreground">{detail}</div>
                </div>
                <BookmarkButton bookmarked onToggle={() => toggleBookmark(key)} />
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
