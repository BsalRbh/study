import type { Flashcard } from "@/content/types";
import { addDaysIso, isBeforeOrEqualToday, todayIso } from "./date";
import type { CardProgress, LeitnerBox, SubjectProgress } from "./types";

const BOX_INTERVAL_DAYS: Record<LeitnerBox, number> = {
  1: 0,
  2: 1,
  3: 3,
  4: 7,
  5: 14,
};

export const MASTERED_BOX: LeitnerBox = 4;

export function nextCardProgress(
  previous: CardProgress | undefined,
  result: "knew" | "missed"
): CardProgress {
  const currentBox = previous?.box ?? 1;
  const nextBox: LeitnerBox =
    result === "knew"
      ? (Math.min(currentBox + 1, 5) as LeitnerBox)
      : 1;

  return {
    box: nextBox,
    dueAt: addDaysIso(todayIso(), BOX_INTERVAL_DAYS[nextBox]),
    lastResult: result,
    timesSeen: (previous?.timesSeen ?? 0) + 1,
  };
}

export function isCardDue(cardId: string, progress: SubjectProgress): boolean {
  const cardProgress = progress.cardProgress[cardId];
  if (!cardProgress) return true;
  return isBeforeOrEqualToday(cardProgress.dueAt);
}

export function dueCards(
  flashcards: Flashcard[],
  progress: SubjectProgress
): Flashcard[] {
  return flashcards
    .filter((card) => isCardDue(card.id, progress))
    .sort((a, b) => {
      if (a.tier !== b.tier) return a.tier === "core" ? -1 : 1;
      const dueA = progress.cardProgress[a.id]?.dueAt ?? todayIso();
      const dueB = progress.cardProgress[b.id]?.dueAt ?? todayIso();
      return dueA.localeCompare(dueB);
    });
}

export function isCardMastered(cardId: string, progress: SubjectProgress): boolean {
  const cardProgress = progress.cardProgress[cardId];
  return !!cardProgress && cardProgress.box >= MASTERED_BOX;
}

export function unitMastery(
  flashcards: Flashcard[],
  unit: string,
  progress: SubjectProgress
): number {
  const unitCards = flashcards.filter((c) => c.unit === unit);
  if (unitCards.length === 0) return 0;
  const masteredCount = unitCards.filter((c) => isCardMastered(c.id, progress)).length;
  return masteredCount / unitCards.length;
}

export function totalTimesSeen(progress: SubjectProgress): number {
  return Object.values(progress.cardProgress).reduce(
    (sum, c) => sum + c.timesSeen,
    0
  );
}
