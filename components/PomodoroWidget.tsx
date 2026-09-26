"use client";

import { Button, NumberField, Popover } from "@heroui/react";
import { useState } from "react";
import { usePomodoro } from "@/lib/pomodoro/context";
import type { PomodoroPhase } from "@/lib/pomodoro/types";

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

const PHASE_LABEL: Record<PomodoroPhase, string> = {
  work: "Focus",
  shortBreak: "Short break",
  longBreak: "Long break",
};

export function PomodoroWidget() {
  const pomodoro = usePomodoro();
  const [showSettings, setShowSettings] = useState(false);

  if (!pomodoro) return null;

  const {
    phase,
    secondsLeft,
    isRunning,
    settings,
    start,
    pause,
    reset,
    skip,
    updateSettings,
  } = pomodoro;

  return (
    <Popover>
      <Popover.Trigger
        className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm text-muted hover:text-foreground"
        onClick={() => setShowSettings(false)}
      >
        <span className="text-xs font-medium tracking-wide uppercase">
          {PHASE_LABEL[phase]}
        </span>
        <span className="font-mono font-semibold">{formatTime(secondsLeft)}</span>
      </Popover.Trigger>
      <Popover.Content className="w-64">
        <Popover.Dialog className="p-4">
          {!showSettings ? (
            <>
              <div className="flex justify-center gap-2">
                {isRunning ? (
                  <Button variant="secondary" onPress={pause}>
                    Pause
                  </Button>
                ) : (
                  <Button variant="primary" onPress={start}>
                    Start
                  </Button>
                )}
                <Button variant="outline" onPress={skip}>
                  Skip
                </Button>
                <Button variant="ghost" onPress={reset}>
                  Reset
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="mt-3 w-full cursor-pointer text-center text-xs text-muted hover:text-foreground"
              >
                Settings
              </button>
            </>
          ) : (
            <div className="space-y-3">
              <label className="block text-xs">
                <span className="mb-1 block text-muted">Focus (minutes)</span>
                <NumberField
                  value={settings.workMinutes}
                  onChange={(v) =>
                    v > 0 && updateSettings({ ...settings, workMinutes: v })
                  }
                  minValue={1}
                  maxValue={120}
                >
                  <NumberField.Group>
                    <NumberField.DecrementButton>−</NumberField.DecrementButton>
                    <NumberField.Input />
                    <NumberField.IncrementButton>+</NumberField.IncrementButton>
                  </NumberField.Group>
                </NumberField>
              </label>
              <label className="block text-xs">
                <span className="mb-1 block text-muted">Short break (minutes)</span>
                <NumberField
                  value={settings.shortBreakMinutes}
                  onChange={(v) =>
                    v > 0 && updateSettings({ ...settings, shortBreakMinutes: v })
                  }
                  minValue={1}
                  maxValue={60}
                >
                  <NumberField.Group>
                    <NumberField.DecrementButton>−</NumberField.DecrementButton>
                    <NumberField.Input />
                    <NumberField.IncrementButton>+</NumberField.IncrementButton>
                  </NumberField.Group>
                </NumberField>
              </label>
              <label className="block text-xs">
                <span className="mb-1 block text-muted">Long break (minutes)</span>
                <NumberField
                  value={settings.longBreakMinutes}
                  onChange={(v) =>
                    v > 0 && updateSettings({ ...settings, longBreakMinutes: v })
                  }
                  minValue={1}
                  maxValue={90}
                >
                  <NumberField.Group>
                    <NumberField.DecrementButton>−</NumberField.DecrementButton>
                    <NumberField.Input />
                    <NumberField.IncrementButton>+</NumberField.IncrementButton>
                  </NumberField.Group>
                </NumberField>
              </label>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="w-full cursor-pointer text-center text-xs text-muted hover:text-foreground"
              >
                Back
              </button>
            </div>
          )}
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
