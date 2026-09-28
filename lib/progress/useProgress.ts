"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { SubjectContent } from "@/content/types";
import { daysBetween, todayIso } from "./date";
import { nextCardProgress } from "./leitner";
import { newlyUnlockedBadges, XP_REWARDS } from "./rules";
import { useProgressStore } from "./context";
import type { AttemptMode, SubjectProgress } from "./types";
import { createEmptyProgress } from "./types";

function applyStreak(progress: SubjectProgress): SubjectProgress {
  const today = todayIso();
  if (progress.streak.lastStudyDate === today) return progress;

  const wasYesterday =
    progress.streak.lastStudyDate !== null &&
    daysBetween(progress.streak.lastStudyDate, today) === 1;

  const current = wasYesterday ? progress.streak.current + 1 : 1;
  return {
    ...progress,
    streak: {
      current,
      longest: Math.max(current, progress.streak.longest),
      lastStudyDate: today,
    },
  };
}

export function useProgressSnapshot(subjectId: string): SubjectProgress {
  const store = useProgressStore();

  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(subjectId, callback),
    [store, subjectId]
  );
  const getSnapshot = useCallback(() => store.load(subjectId), [store, subjectId]);
  const emptyProgress = useMemo(() => createEmptyProgress(subjectId), [subjectId]);
  const getServerSnapshot = useCallback(() => emptyProgress, [emptyProgress]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useProgress(subjectId: string, content: SubjectContent) {
  const store = useProgressStore();
  const progress = useProgressSnapshot(subjectId);

  const commit = useCallback(
    (updater: (p: SubjectProgress) => SubjectProgress) => {
      const withStreak = applyStreak(updater(progress));
      const unlocked = newlyUnlockedBadges(withStreak, content);
      const final = unlocked.length
        ? { ...withStreak, badges: [...withStreak.badges, ...unlocked.map((b) => b.id)] }
        : withStreak;
      store.save(subjectId, final);
      return unlocked;
    },
    [progress, content, store, subjectId]
  );

  const recordFlashcardResult = useCallback(
    (cardId: string, result: "knew" | "missed") =>
      commit((p) => ({
        ...p,
        xp: p.xp + (result === "knew" ? XP_REWARDS.flashcardKnew : XP_REWARDS.flashcardMissed),
        cardProgress: {
          ...p.cardProgress,
          [cardId]: nextCardProgress(p.cardProgress[cardId], result),
        },
      })),
    [commit]
  );

  const recordQuizAttempt = useCallback(
    (mode: AttemptMode, score: number, total: number, xpPerCorrect: number) =>
      commit((p) => ({
        ...p,
        xp: p.xp + score * xpPerCorrect,
        attempts: [...p.attempts, { mode, date: todayIso(), score, total }],
      })),
    [commit]
  );

  const markDailyChallengeDone = useCallback(
    () =>
      commit((p) => {
        if (p.dailyChallengeCompletedDates.includes(todayIso())) return p;
        return {
          ...p,
          xp: p.xp + XP_REWARDS.dailyChallengeCompleted,
          dailyChallengeCompletedDates: [...p.dailyChallengeCompletedDates, todayIso()],
        };
      }),
    [commit]
  );

  const toggleBookmark = useCallback(
    (key: string) =>
      commit((p) => ({
        ...p,
        bookmarks: p.bookmarks.includes(key)
          ? p.bookmarks.filter((b) => b !== key)
          : [...p.bookmarks, key],
      })),
    [commit]
  );

  const recordPomodoroSession = useCallback(
    () =>
      commit((p) => ({
        ...p,
        xp: p.xp + XP_REWARDS.pomodoroCompleted,
        pomodorosCompleted: p.pomodorosCompleted + 1,
      })),
    [commit]
  );

  // Not a study action, so it bypasses commit() and doesn't touch the streak.
  const setExamDate = useCallback(
    (examDate: string | undefined) => store.save(subjectId, { ...progress, examDate }),
    [store, subjectId, progress]
  );

  return {
    progress,
    setExamDate,
    recordFlashcardResult,
    recordQuizAttempt,
    markDailyChallengeDone,
    toggleBookmark,
    recordPomodoroSession,
  };
}
