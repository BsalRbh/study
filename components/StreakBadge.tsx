import { Card } from "@heroui/react";
import type { StreakState } from "@/lib/progress/types";

export function StreakBadge({ streak }: { streak: StreakState }) {
  return (
    <Card className="flex-row items-center gap-2 p-3">
      <span className="text-lg">🔥</span>
      <div>
        <div className="text-sm font-medium">{streak.current}-day streak</div>
        <div className="text-xs text-muted">Longest: {streak.longest} days</div>
      </div>
    </Card>
  );
}
