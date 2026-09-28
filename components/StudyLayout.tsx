import type { ReactNode } from "react";
import { Card } from "@heroui/react";

export interface StudyUpNextItem {
  id: string;
  label: string;
}

/**
 * Shared shell for single-item study screens (flashcards, quiz, recall, daily
 * challenge). On desktop, the main card sits in a fixed-width column with a
 * side panel showing session progress and what's coming up next — filling
 * the space that would otherwise sit empty next to a narrow, top-anchored
 * card. On mobile the side panel is simply hidden.
 */
export function StudyLayout({
  children,
  doneCount,
  totalCount,
  upNext,
}: {
  children: ReactNode;
  doneCount: number;
  totalCount: number;
  upNext: StudyUpNextItem[];
}) {
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="lg:flex lg:items-start lg:gap-8">
        <div className="mx-auto w-full max-w-xl">{children}</div>

        {upNext.length > 0 && (
          <aside className="mt-8 hidden w-64 shrink-0 lg:mt-0 lg:block">
            <Card className="sticky top-8 p-4">
              <div className="mb-1 flex justify-between text-sm font-medium">
                <span>This session</span>
                <span className="text-muted">
                  {doneCount}/{totalCount}
                </span>
              </div>
              <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-default">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-300"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-muted">
                Up next
              </div>
              <ul className="mt-2 space-y-2 text-sm text-muted">
                {upNext.slice(0, 6).map((item) => (
                  <li key={item.id} className="truncate">
                    {item.label}
                  </li>
                ))}
                {upNext.length > 6 && <li>and {upNext.length - 6} more…</li>}
              </ul>
            </Card>
          </aside>
        )}
      </div>
    </div>
  );
}
