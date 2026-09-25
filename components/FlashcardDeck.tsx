"use client";

import { useMemo, useState } from "react";
import { Button, Card } from "@heroui/react";
import type { Flashcard, SubjectContent } from "@/content/types";
import { dueCards } from "@/lib/progress/leitner";
import { useProgress } from "@/lib/progress/useProgress";
import { BookmarkButton } from "./BookmarkButton";
import { FilterSelect } from "./FilterSelect";

export function FlashcardDeck({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { progress, recordFlashcardResult, toggleBookmark } = useProgress(
    subjectId,
    content
  );
  const units = useMemo(
    () => Array.from(new Set(content.flashcards.map((c) => c.unit))),
    [content.flashcards]
  );
  const [unitFilter, setUnitFilter] = useState<string | "all">("all");
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(
    () =>
      unitFilter === "all"
        ? content.flashcards
        : content.flashcards.filter((c) => c.unit === unitFilter),
    [content.flashcards, unitFilter]
  );
  const queue = useMemo(() => dueCards(filtered, progress), [filtered, progress]);
  const [index, setIndex] = useState(0);
  const card: Flashcard | undefined = queue[index];

  function handleResult(result: "knew" | "missed") {
    if (!card) return;
    recordFlashcardResult(card.id, result);
    setFlipped(false);
    setIndex((i) => (i + 1 < queue.length ? i + 1 : 0));
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <FilterSelect
          label="Unit"
          allLabel="All units"
          options={units}
          value={unitFilter}
          onChange={(v) => {
            setUnitFilter(v);
            setIndex(0);
            setFlipped(false);
          }}
        />
        <span className="ml-auto text-sm text-muted">{queue.length} due today</span>
      </div>

      {!card ? (
        <Card className="p-8 text-center text-muted">
          Nothing due right now — nice work. Check back later or switch units.
        </Card>
      ) : (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wide text-muted">
              {card.tier === "core" ? "Core" : "Hedge"} · {card.unit}
            </span>
            <BookmarkButton
              bookmarked={progress.bookmarks.includes(`flashcard:${card.id}`)}
              onToggle={() => toggleBookmark(`flashcard:${card.id}`)}
            />
          </div>
          <Card className="p-0">
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              className="flex min-h-48 w-full items-center justify-center p-6 text-center text-lg"
            >
              {flipped ? card.back : card.front}
            </button>
          </Card>
          <p className="mt-2 text-center text-xs text-muted">Tap card to flip</p>

          {flipped && (
            <div className="mt-4 flex justify-center gap-3">
              <Button variant="danger-soft" onPress={() => handleResult("missed")}>
                Missed it
              </Button>
              <Button variant="primary" onPress={() => handleResult("knew")}>
                Knew it
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
