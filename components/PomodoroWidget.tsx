"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button, NumberField } from "@heroui/react";
import { usePomodoro } from "@/lib/pomodoro/context";
import { useDraggable } from "@/lib/pomodoro/useDraggable";
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

const MINIMIZE_AFTER_MS = 4000;

export function PomodoroWidget() {
  const pomodoro = usePomodoro();
  const [expanded, setExpanded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const { position, isDragging, handleProps } = useDraggable(widgetRef);

  // idleSince tracks nothing directly visible — it just changes every time
  // the pointer re-enters the widget or something forces it awake, so the
  // effect below can restart its timeout. The actual "should the pill be
  // minimized right now" boolean lives in `minimized`.
  const [minimized, setMinimized] = useState(false);
  const [wakeToken, setWakeToken] = useState(0);
  const wake = useCallback(() => {
    setMinimized(false);
    setWakeToken((t) => t + 1);
  }, []);

  // Never minimize while the controls/settings panel is open or a drag is
  // in progress — only the idle collapsed pill shrinks. This effect only
  // ever starts/restarts a timeout in response to a real state change
  // (expanded/isDragging/wakeToken); it never calls setState directly in
  // its own body, only inside the timeout callback.
  useEffect(() => {
    if (expanded || isDragging) return;
    const timer = setTimeout(() => setMinimized(true), MINIMIZE_AFTER_MS);
    return () => clearTimeout(timer);
  }, [expanded, isDragging, wakeToken]);

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

  const isMinimized = minimized && !expanded && !isDragging;

  return (
    <div
      ref={widgetRef}
      onMouseEnter={wake}
      onFocus={wake}
      className={`fixed z-40 rounded-2xl border border-border bg-surface shadow-lg transition-[width] duration-150 ${
        isMinimized ? "w-auto" : "w-64"
      } ${position ? "" : "right-4 bottom-4"}`}
      style={position ? { left: position.x, top: position.y } : undefined}
    >
      <div className="flex items-center gap-1 px-2 pt-2">
        {!isMinimized && (
          <div
            {...handleProps}
            role="button"
            aria-label="Drag to move timer"
            title="Drag to move"
            className="flex-none cursor-grab touch-none rounded-md px-1.5 py-1 text-muted hover:text-foreground active:cursor-grabbing"
          >
            ⠿
          </div>
        )}
        <button
          type="button"
          onClick={() => !isDragging && setExpanded((e) => !e)}
          className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left"
        >
          {!isMinimized && (
            <span className="text-xs font-medium tracking-wide text-muted uppercase">
              {PHASE_LABEL[phase]}
            </span>
          )}
          <span className="font-mono text-lg font-semibold">{formatTime(secondsLeft)}</span>
        </button>
      </div>

      {expanded && (
        <div className="border-t border-border p-4">
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
                className="mt-3 w-full text-center text-xs text-muted hover:text-foreground"
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
                className="w-full text-center text-xs text-muted hover:text-foreground"
              >
                Back
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
