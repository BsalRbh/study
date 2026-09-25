import { ProgressBar } from "@heroui/react";
import { levelForXp, xpIntoCurrentLevel } from "@/lib/progress/rules";

export function XPBar({ xp }: { xp: number }) {
  const level = levelForXp(xp);
  const { current, needed } = xpIntoCurrentLevel(xp);

  return (
    <ProgressBar
      aria-label="XP progress"
      value={current}
      minValue={0}
      maxValue={Math.max(needed, 1)}
      color="accent"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Level {level}</span>
        <span className="text-muted">{xp} XP</span>
      </div>
      <ProgressBar.Track>
        <ProgressBar.Fill />
      </ProgressBar.Track>
    </ProgressBar>
  );
}
