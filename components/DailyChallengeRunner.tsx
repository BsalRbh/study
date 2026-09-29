"use client";

import { useMemo, useState } from "react";
import { Button } from "@heroui/react";
import type { SubjectContent } from "@/content/types";
import { buildDailyChallenge } from "@/lib/progress/dailyChallenge";
import { todayIso } from "@/lib/progress/date";
import { useProgress } from "@/lib/progress/useProgress";
import { MathText } from "@/components/MathText";
import { StudyLayout } from "@/components/StudyLayout";

export function DailyChallengeRunner({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { progress, recordFlashcardResult, markDailyChallengeDone } = useProgress(
    subjectId,
    content
  );
  const today = todayIso();
  const alreadyDone = progress.dailyChallengeCompletedDates.includes(today);

  const items = useMemo(
    () => buildDailyChallenge(content, progress, today),
    [content, progress, today]
  );

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const item = items[index];

  function advance() {
    setRevealed(false);
    if (index + 1 < items.length) {
      setIndex(index + 1);
    } else {
      markDailyChallengeDone();
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center text-muted">
        Nothing to challenge you with yet — add flashcards or past papers first.
      </div>
    );
  }

  if (alreadyDone) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center">
        <h1 className="text-xl font-semibold">Today&apos;s challenge complete</h1>
        <p className="mt-2 text-muted">
          Come back tomorrow for a new set. Current streak: {progress.streak.current} days.
        </p>
      </div>
    );
  }

  const upNext = items.slice(index + 1).map((it, i) => ({
    id: it.kind === "flashcard" ? it.card.id : it.question.id,
    label: it.kind === "flashcard" ? `Flashcard ${index + 2 + i}` : `Question ${index + 2 + i}`,
  }));

  return (
    <StudyLayout doneCount={index} totalCount={items.length} upNext={upNext}>
      <div className="mb-4 text-sm text-muted">
        Item {index + 1} / {items.length}
      </div>

      {item.kind === "flashcard" ? (
        <div>
          <p className="mb-4 text-lg">
            <MathText text={item.card.front} inline />
          </p>
          {revealed ? (
            <>
              <p className="mb-4 text-surface-foreground">
                <MathText text={item.card.back} inline />
              </p>
              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="min-h-11 min-w-28"
                  variant="danger-soft"
                  onPress={() => {
                    recordFlashcardResult(item.card.id, "missed");
                    advance();
                  }}
                >
                  Missed it
                </Button>
                <Button
                  size="lg"
                  className="min-h-11 min-w-28"
                  variant="primary"
                  onPress={() => {
                    recordFlashcardResult(item.card.id, "knew");
                    advance();
                  }}
                >
                  Knew it
                </Button>
              </div>
            </>
          ) : (
            <Button size="lg" className="min-h-11" variant="outline" onPress={() => setRevealed(true)}>
              Reveal answer
            </Button>
          )}
        </div>
      ) : (
        <div>
          <p className="mb-1 text-xs uppercase tracking-wide text-muted">
            {item.question.topic} · {item.question.marks} marks
          </p>
          <p className="mb-4 text-lg">{item.question.prompt}</p>
          {revealed ? (
            <>
              <p className="mb-4 whitespace-pre-line text-surface-foreground">
                {item.question.answer}
              </p>
              <Button size="lg" className="min-h-11" variant="primary" onPress={advance}>
                Next
              </Button>
            </>
          ) : (
            <Button size="lg" className="min-h-11" variant="outline" onPress={() => setRevealed(true)}>
              Reveal model answer
            </Button>
          )}
        </div>
      )}
    </StudyLayout>
  );
}
