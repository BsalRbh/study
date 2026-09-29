"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useMemo, useState } from "react";
import { Button, Card } from "@heroui/react";
import type { Flashcard, SubjectContent } from "@/content/types";
import { todayIso } from "@/lib/progress/date";
import { dueCards, weakCards } from "@/lib/progress/leitner";
import { seededShuffle, seedFromString } from "@/lib/progress/seededShuffle";
import { useProgress } from "@/lib/progress/useProgress";
import { BookmarkButton } from "./BookmarkButton";
import { FilterSelect } from "./FilterSelect";
import { MathText } from "@/components/MathText";
import { StudyLayout } from "@/components/StudyLayout";

export type DeckMode = "due" | "mixed" | "weak";

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-border bg-surface-secondary px-1.5 py-0.5 font-mono text-[11px] text-foreground">
      {children}
    </kbd>
  );
}

const MODE_INFO: Record<Exclude<DeckMode, "due">, { title: string; hint: string }> = {
  mixed: {
    title: "Mixed review",
    hint: "Due cards from every unit, shuffled. Mixing topics trains you to spot which idea a question needs.",
  },
  weak: {
    title: "Weak cards",
    hint: "Cards you missed last time or keep getting wrong. They leave this list once you get them right.",
  },
};

export function FlashcardDeck({
  subjectId,
  content,
  initialUnit,
  mode = "due",
}: {
  subjectId: string;
  content: SubjectContent;
  initialUnit?: string;
  mode?: DeckMode;
}) {
  const { progress, recordFlashcardResult, toggleBookmark } = useProgress(
    subjectId,
    content
  );
  const units = useMemo(
    () => Array.from(new Set(content.flashcards.map((c) => c.unit))),
    [content.flashcards]
  );
  const [unitFilter, setUnitFilter] = useState<string | "all">(
    initialUnit && units.includes(initialUnit) ? initialUnit : "all"
  );
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(
    () =>
      unitFilter === "all"
        ? content.flashcards
        : content.flashcards.filter((c) => c.unit === unitFilter),
    [content.flashcards, unitFilter]
  );
  const queue = useMemo(() => {
    if (mode === "weak") return weakCards(filtered, progress);
    const due = dueCards(filtered, progress);
    if (mode === "mixed") return seededShuffle(due, seedFromString(subjectId + todayIso()));
    return due;
  }, [filtered, progress, mode, subjectId]);
  const [index, setIndex] = useState(0);
  const [sessionDone, setSessionDone] = useState(0);
  // The session's starting size, recomputed only when the unit/mode changes
  // (not on every answer), so "done" is a fraction of what the session
  // started with rather than the ever-shrinking live queue.
  const sessionTotal = useMemo(
    () => queue.length,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentionally excludes `progress`/`queue`, which shrink as cards are answered; only recompute when the filter itself changes.
    [unitFilter, mode]
  );
  const card: Flashcard | undefined = queue.length ? queue[index % queue.length] : undefined;

  function handleResult(result: "knew" | "missed") {
    if (!card) return;
    recordFlashcardResult(card.id, result);
    setFlipped(false);
    setSessionDone((n) => n + 1);
    // A "knew" card leaves the queue, so the next card slides into the same index.
    if (result === "missed") setIndex((i) => i + 1);
  }

  const onKey = useEffectEvent((e: KeyboardEvent) => {
    if (!card || e.metaKey || e.ctrlKey || e.altKey) return;
    const target = e.target as HTMLElement | null;
    if (target?.closest("input, textarea, select, [contenteditable], [role='dialog'], [role='menu']")) return;
    const isActivate = e.key === " " || e.key === "Enter";
    // Space/Enter on a focused button/link already activates it; don't double-handle.
    if (isActivate && target?.closest("button, a, [role='button']")) return;
    if (isActivate) {
      e.preventDefault();
      setFlipped((f) => !f);
    } else if (flipped && (e.key === "ArrowLeft" || e.key === "1")) {
      e.preventDefault();
      handleResult("missed");
    } else if (flipped && (e.key === "ArrowRight" || e.key === "2")) {
      e.preventDefault();
      handleResult("knew");
    }
  });

  useEffect(() => {
    const listener = (e: KeyboardEvent) => onKey(e);
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  const info = mode === "due" ? null : MODE_INFO[mode];
  const countLabel = mode === "weak" ? `${queue.length} weak` : `${queue.length} due today`;
  const upNext = queue
    .slice(1)
    .map((c) => ({ id: c.id, label: c.front }));

  return (
    <StudyLayout doneCount={sessionDone} totalCount={sessionTotal} upNext={card ? upNext : []}>
      {info && (
        <div className="mb-4 rounded-xl bg-accent/10 p-3 text-sm text-foreground">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium">{info.title}</span>
            <Link
              href={`/flashcards?subject=${subjectId}`}
              className="text-xs text-muted underline underline-offset-2"
            >
              Back to normal review
            </Link>
          </div>
          <p className="mt-1 text-muted">{info.hint}</p>
        </div>
      )}
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
            setSessionDone(0);
          }}
        />
        <span className="ml-auto text-sm text-muted">{countLabel}</span>
      </div>

      {!card ? (
        <Card className="p-8 text-center text-muted">
          {mode === "weak"
            ? "No weak cards — everything you've reviewed, you got right last time."
            : "Nothing due right now — nice work. Check back later or switch units."}
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
          <div className="flip-card" data-flipped={flipped}>
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              aria-label={flipped ? "Showing answer, tap to show question" : "Tap to reveal answer"}
              className="flip-card__inner block min-h-48 w-full text-left"
            >
              <Card className="flip-card__face flip-card__face--front flex min-h-48 items-center justify-center p-6 text-center text-lg">
                <span className="block">
                  <MathText text={card.front} inline />
                </span>
              </Card>
              <Card className="flip-card__face flip-card__face--back flex min-h-48 items-center justify-center p-6 text-center text-lg">
                <span className="block">
                  <MathText text={card.back} inline />
                </span>
              </Card>
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-muted sm:hidden">Tap card to flip</p>
          <p className="mt-2 hidden items-center justify-center gap-3 text-xs text-muted sm:flex">
            <span><Kbd>Space</Kbd> flip</span>
            <span><Kbd>←</Kbd> missed</span>
            <span><Kbd>→</Kbd> knew</span>
          </p>

          {flipped && (
            <div className="mt-4 flex justify-center gap-3">
              <Button
                size="lg"
                className="min-h-11 min-w-28"
                variant="danger-soft"
                onPress={() => handleResult("missed")}
              >
                Missed it
              </Button>
              <Button
                size="lg"
                className="min-h-11 min-w-28"
                variant="primary"
                onPress={() => handleResult("knew")}
              >
                Knew it
              </Button>
            </div>
          )}
        </div>
      )}
    </StudyLayout>
  );
}
