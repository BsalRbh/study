import { Card } from "@heroui/react";
import { BADGES } from "@/lib/progress/rules";

export function BadgeShelf({ unlockedIds }: { unlockedIds: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {BADGES.map((badge) => {
        const unlocked = unlockedIds.includes(badge.id);
        return (
          <Card
            key={badge.id}
            className={`items-center p-3 text-center ${
              unlocked ? "border-warning bg-warning/20" : "opacity-50"
            }`}
            title={badge.description}
          >
            <div className="text-2xl">{unlocked ? "🏆" : "🔒"}</div>
            <div className="mt-1 text-xs font-medium">{badge.label}</div>
          </Card>
        );
      })}
    </div>
  );
}
