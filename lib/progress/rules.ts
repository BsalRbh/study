import type { SubjectContent } from "@/content/types";
import { totalTimesSeen, unitMastery } from "./leitner";
import type { SubjectProgress } from "./types";

export const XP_REWARDS = {
  flashcardKnew: 2,
  flashcardMissed: 1,
  quizCorrect: 3,
  recallCorrect: 4,
  mockPaperQuestionAttempted: 5,
  dailyChallengeCompleted: 15,
  pomodoroCompleted: 10,
} as const;

export function levelForXp(xp: number): number {
  return Math.floor(Math.sqrt(xp / 50));
}

export function xpIntoCurrentLevel(xp: number): { current: number; needed: number } {
  const level = levelForXp(xp);
  const levelStartXp = 50 * level * level;
  const nextLevelXp = 50 * (level + 1) * (level + 1);
  return { current: xp - levelStartXp, needed: nextLevelXp - levelStartXp };
}

export interface Badge {
  id: string;
  label: string;
  description: string;
  check: (progress: SubjectProgress, content: SubjectContent) => boolean;
}

export const BADGES: Badge[] = [
  {
    id: "century",
    label: "Century",
    description: "Reviewed 100 flashcards",
    check: (progress) => totalTimesSeen(progress) >= 100,
  },
  {
    id: "full-mock",
    label: "Mock Paper Finished",
    description: "Completed a full mock paper",
    check: (progress, content) =>
      progress.attempts.some(
        (a) => a.mode === "mock-paper" && a.total >= content.mockPaper.questions.length
      ),
  },
  {
    id: "all-units",
    label: "Full Coverage",
    description: "Reached mastery in every unit",
    check: (progress, content) => {
      const units = Array.from(new Set(content.flashcards.map((c) => c.unit)));
      if (units.length === 0) return false;
      return units.every((unit) => unitMastery(content.flashcards, unit, progress) >= 1);
    },
  },
  {
    id: "streak-7",
    label: "One Week Strong",
    description: "Reached a 7-day study streak",
    check: (progress) => progress.streak.longest >= 7,
  },
  {
    id: "focused-10",
    label: "Focused",
    description: "Completed 10 Pomodoro sessions",
    check: (progress) => progress.pomodorosCompleted >= 10,
  },
];

export function newlyUnlockedBadges(
  progress: SubjectProgress,
  content: SubjectContent
): Badge[] {
  return BADGES.filter(
    (badge) => !progress.badges.includes(badge.id) && badge.check(progress, content)
  );
}
