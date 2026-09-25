import type { Flashcard, PastPaperQuestion, SubjectContent } from "@/content/types";
import { dueCards } from "./leitner";
import { seededShuffle, seedFromString } from "./seededShuffle";
import type { SubjectProgress } from "./types";

export type DailyChallengeItem =
  | { kind: "flashcard"; card: Flashcard }
  | { kind: "pastPaper"; question: PastPaperQuestion };

const DAILY_CHALLENGE_SIZE = 8;

export function buildDailyChallenge(
  content: SubjectContent,
  progress: SubjectProgress,
  dateIso: string
): DailyChallengeItem[] {
  const seed = seedFromString(`${progress.subjectId}:${dateIso}`);

  const flashcardItems: DailyChallengeItem[] = dueCards(content.flashcards, progress).map(
    (card) => ({ kind: "flashcard", card })
  );
  const pastPaperItems: DailyChallengeItem[] = content.pastPapers.questions.map(
    (question) => ({ kind: "pastPaper", question })
  );

  const combined = seededShuffle([...flashcardItems, ...pastPaperItems], seed);
  return combined.slice(0, DAILY_CHALLENGE_SIZE);
}
