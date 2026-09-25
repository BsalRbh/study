export type LeitnerBox = 1 | 2 | 3 | 4 | 5;

export interface CardProgress {
  box: LeitnerBox;
  dueAt: string;
  lastResult: "knew" | "missed" | null;
  timesSeen: number;
}

export type AttemptMode = "quiz" | "recall" | "mock-paper" | "daily-challenge";

export interface QuizAttempt {
  mode: AttemptMode;
  date: string;
  score: number;
  total: number;
}

export interface StreakState {
  current: number;
  longest: number;
  lastStudyDate: string | null;
}

export interface SubjectProgress {
  subjectId: string;
  xp: number;
  streak: StreakState;
  badges: string[];
  cardProgress: Record<string, CardProgress>;
  bookmarks: string[];
  attempts: QuizAttempt[];
  dailyChallengeCompletedDates: string[];
  pomodorosCompleted: number;
}

export function createEmptyProgress(subjectId: string): SubjectProgress {
  return {
    subjectId,
    xp: 0,
    streak: { current: 0, longest: 0, lastStudyDate: null },
    badges: [],
    cardProgress: {},
    bookmarks: [],
    attempts: [],
    dailyChallengeCompletedDates: [],
    pomodorosCompleted: 0,
  };
}
