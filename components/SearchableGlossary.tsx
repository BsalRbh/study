"use client";

import { useMemo, useState } from "react";
import { Card, SearchField } from "@heroui/react";
import type { SubjectContent } from "@/content/types";
import { useProgress } from "@/lib/progress/useProgress";
import { BookmarkButton } from "./BookmarkButton";

export function SearchableGlossary({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { progress, toggleBookmark } = useProgress(subjectId, content);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return content.glossary;
    return content.glossary.filter(
      (g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
    );
  }, [content.glossary, query]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Glossary</h1>
      <SearchField
        aria-label="Search glossary terms"
        value={query}
        onChange={setQuery}
        className="mb-6"
      >
        <SearchField.Input placeholder="Search terms..." />
      </SearchField>
      <div className="space-y-3">
        {filtered.map((term) => {
          const key = `glossary:${term.term}`;
          return (
            <Card key={term.term} className="flex-row items-start justify-between gap-2 p-3">
              <div>
                <div className="font-medium">{term.term}</div>
                <div className="text-sm text-surface-foreground">{term.definition}</div>
              </div>
              <BookmarkButton
                bookmarked={progress.bookmarks.includes(key)}
                onToggle={() => toggleBookmark(key)}
              />
            </Card>
          );
        })}
        {filtered.length === 0 && <p className="text-sm text-muted">No terms match.</p>}
      </div>
    </div>
  );
}
