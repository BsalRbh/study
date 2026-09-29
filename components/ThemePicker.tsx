"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Popover } from "@heroui/react";
import {
  DEFAULT_PALETTE,
  PALETTES,
  getPalette,
  setPalette,
  subscribePalette,
} from "@/lib/theme/palettes";

const MODES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
] as const;

function subscribeNever() {
  return () => {};
}

export function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const palette = useSyncExternalStore(subscribePalette, getPalette, () => DEFAULT_PALETTE);
  // next-themes only knows `theme` after mount; gate the mode highlight to avoid a hydration mismatch.
  const mounted = useSyncExternalStore(subscribeNever, () => true, () => false);
  const current = PALETTES.find((p) => p.id === palette) ?? PALETTES[0];

  return (
    <Popover>
      <Popover.Trigger
        aria-label="Appearance"
        className="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg px-2.5 text-sm text-muted outline-none hover:bg-surface-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span
          aria-hidden
          className="h-4 w-4 rounded-full ring-2 ring-surface outline outline-1 outline-border"
          style={{ background: current.swatch }}
        />
        <span className="hidden lg:inline">Theme</span>
      </Popover.Trigger>
      <Popover.Content placement="bottom end" className="w-64">
        <Popover.Dialog className="space-y-4 p-4">
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
              Color
            </div>
            <div className="grid grid-cols-2 gap-2">
              {PALETTES.map((p) => {
                const active = p.id === palette;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPalette(p.id)}
                    aria-pressed={active}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-2.5 py-2 text-sm transition-colors ${
                      active
                        ? "border-accent bg-accent/10 font-medium"
                        : "border-border hover:bg-surface-secondary"
                    }`}
                  >
                    <span
                      aria-hidden
                      className="h-4 w-4 shrink-0 rounded-full"
                      style={{ background: p.swatch }}
                    />
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
              Mode
            </div>
            <div className="grid grid-cols-3 gap-1 rounded-lg bg-surface-secondary p-1">
              {MODES.map((m) => {
                const active = mounted && theme === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setTheme(m.id)}
                    aria-pressed={active}
                    className={`cursor-pointer rounded-md py-1.5 text-xs transition-colors ${
                      active
                        ? "bg-surface font-medium text-foreground shadow-sm"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Popover.Dialog>
      </Popover.Content>
    </Popover>
  );
}
