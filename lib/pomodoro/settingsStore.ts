import { DEFAULT_POMODORO_SETTINGS, type PomodoroSettings } from "./types";

const STORAGE_KEY = "exam-prep:pomodoro-settings";

// Cached so useSyncExternalStore's getSnapshot returns a referentially
// stable value between calls (required to avoid an infinite render loop) —
// same pattern as lib/progress/store.ts.
let cached: PomodoroSettings | null = null;

function readFromStorage(): PomodoroSettings {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_POMODORO_SETTINGS;
    return { ...DEFAULT_POMODORO_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_POMODORO_SETTINGS;
  }
}

export function getPomodoroSettingsSnapshot(): PomodoroSettings {
  if (!cached) cached = readFromStorage();
  return cached;
}

export function getPomodoroSettingsServerSnapshot(): PomodoroSettings {
  return DEFAULT_POMODORO_SETTINGS;
}

export function savePomodoroSettings(settings: PomodoroSettings): void {
  cached = settings;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // in-memory cache above already holds the latest value
  }
  listeners.forEach((l) => l());
}

const listeners = new Set<() => void>();

export function subscribePomodoroSettings(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
