"use client";

import { useMemo, useState } from "react";
import { Button } from "@heroui/react";
import type { SubjectContent } from "@/content/types";
import { buildDailyChallenge } from "@/lib/progress/dailyChallenge";
import { todayIso } from "@/lib/progress/date";
import { useProgress } from "@/lib/progress/useProgress";

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

  return (
    <div className="mx-auto max-w-xl px-4 py-8">
      <div className="mb-4 text-sm text-muted">
        Item {index + 1} / {items.length}
      </div>

      {item.kind === "flashcard" ? (
        <div>
          <p className="mb-4 text-lg">{item.card.front}</p>
          {revealed ? (
            <>
              <p className="mb-4 text-surface-foreground">{item.card.back}</p>
              <div className="flex gap-3">
                <Button
                  variant="danger-soft"
                  onPress={() => {
                    recordFlashcardResult(item.card.id, "missed");
                    advance();
                  }}
                >
                  Missed it
                </Button>
                <Button
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
            <Button variant="outline" onPress={() => setRevealed(true)}>
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
              <Button variant="primary" onPress={advance}>
                Next
              </Button>
            </>
          ) : (
            <Button variant="outline" onPress={() => setRevealed(true)}>
              Reveal model answer
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
