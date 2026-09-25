"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useSearchParams } from "next/navigation";
import { getSubjectContent } from "@/content";
import { defaultSubjectId } from "@/content/subjects";
import { useProgress } from "@/lib/progress/useProgress";
import {
  getPomodoroSettingsServerSnapshot,
  getPomodoroSettingsSnapshot,
  savePomodoroSettings,
  subscribePomodoroSettings,
} from "./settingsStore";
import { durationForPhase, type PomodoroPhase, type PomodoroSettings } from "./types";
import { playChime } from "./sound";

interface PomodoroContextValue {
  phase: PomodoroPhase;
  secondsLeft: number;
  totalSeconds: number;
  isRunning: boolean;
  cycleCount: number;
  settings: PomodoroSettings;
  start: () => void;
  pause: () => void;
  reset: () => void;
  skip: () => void;
  updateSettings: (settings: PomodoroSettings) => void;
}

const PomodoroContext = createContext<PomodoroContextValue | null>(null);

function nextPhase(
  phase: PomodoroPhase,
  cycleCount: number,
  settings: PomodoroSettings
): PomodoroPhase {
  if (phase !== "work") return "work";
  const completedCycles = cycleCount + 1;
  return completedCycles % settings.cyclesBeforeLongBreak === 0 ? "longBreak" : "shortBreak";
}

function PomodoroProviderInner({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("subject") ?? defaultSubjectId;
  const content = useMemo(() => getSubjectContent(subjectId), [subjectId]);
  const { recordPomodoroSession } = useProgress(subjectId, content);

  const settings = useSyncExternalStore(
    subscribePomodoroSettings,
    getPomodoroSettingsSnapshot,
    getPomodoroSettingsServerSnapshot
  );

  const [phase, setPhase] = useState<PomodoroPhase>("work");
  const [cycleCount, setCycleCount] = useState(0);
  // null means "no session has been started/skipped/reset yet" — while
  // null, the displayed countdown is derived straight from `settings`
  // (itself already SSR-safe via useSyncExternalStore) instead of being
  // seeded once into its own state, which previously caused a hydration
  // mismatch whenever localStorage held a non-default duration.
  const [secondsLeftOverride, setSecondsLeftOverride] = useState<number | null>(null);
  const secondsLeft = secondsLeftOverride ?? durationForPhase(phase, settings);
  const [isRunning, setIsRunning] = useState(false);

  const handlePhaseComplete = useCallback(() => {
    setIsRunning(false);
    if (phase === "work") {
      recordPomodoroSession();
    }
    playChime(phase === "work" ? "workEnd" : "breakEnd");
    const completedCycles = phase === "work" ? cycleCount + 1 : cycleCount;
    const upcoming = nextPhase(phase, cycleCount, settings);
    setPhase(upcoming);
    setCycleCount(completedCycles);
    setSecondsLeftOverride(durationForPhase(upcoming, settings));
  }, [phase, cycleCount, settings, recordPomodoroSession]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSecondsLeftOverride((prev) => {
        const current = prev ?? durationForPhase(phase, settings);
        if (current <= 1) {
          // Deferred so the phase-transition setState calls above don't
          // run synchronously inside this tick's own state updater.
          queueMicrotask(handlePhaseComplete);
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, handlePhaseComplete, phase, settings]);

  const start = useCallback(() => {
    setSecondsLeftOverride((prev) => prev ?? durationForPhase(phase, settings));
    setIsRunning(true);
  }, [phase, settings]);
  const pause = useCallback(() => setIsRunning(false), []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setPhase("work");
    setCycleCount(0);
    setSecondsLeftOverride(null);
  }, []);

  const skip = useCallback(() => {
    setIsRunning(false);
    const completedCycles = phase === "work" ? cycleCount + 1 : cycleCount;
    const upcoming = nextPhase(phase, cycleCount, settings);
    setPhase(upcoming);
    setCycleCount(completedCycles);
    setSecondsLeftOverride(durationForPhase(upcoming, settings));
  }, [phase, cycleCount, settings]);

  const updateSettings = useCallback(
    (next: PomodoroSettings) => {
      savePomodoroSettings(next);
      if (!isRunning) {
        setSecondsLeftOverride(null);
      }
    },
    [isRunning]
  );

  const value: PomodoroContextValue = {
    phase,
    secondsLeft,
    totalSeconds: durationForPhase(phase, settings),
    isRunning,
    cycleCount,
    settings,
    start,
    pause,
    reset,
    skip,
    updateSettings,
  };

  return <PomodoroContext.Provider value={value}>{children}</PomodoroContext.Provider>;
}

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={children}>
      <PomodoroProviderInner>{children}</PomodoroProviderInner>
    </Suspense>
  );
}

// Returns null during the brief window where PomodoroProvider's Suspense
// fallback is showing (children rendered without the provider mounted
// yet, since useSearchParams() suspends) — callers like PomodoroWidget
// render nothing in that case rather than crashing.
export function usePomodoro(): PomodoroContextValue | null {
  return useContext(PomodoroContext);
}
