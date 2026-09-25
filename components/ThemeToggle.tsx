"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@heroui/react";

function subscribeNever() {
  return () => {};
}

// next-themes can't know resolvedTheme until mounted on the client, so this
// reads "has this component hydrated yet" without a setState-in-effect,
// avoiding the hydration mismatch that a naive `resolvedTheme === "dark"`
// check on first render would otherwise cause.
function useIsMounted() {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) return <div className="h-6 w-11" />;

  return (
    <Switch
      size="sm"
      isSelected={resolvedTheme === "dark"}
      onChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
      aria-label="Toggle dark mode"
    >
      <Switch.Content>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Content>
    </Switch>
  );
}
