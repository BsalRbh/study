"use client";

import { Card, ProgressBar } from "@heroui/react";
import type { Subject, SubjectContent } from "@/content/types";
import { daysBetween, todayIso } from "@/lib/progress/date";
import { unitMastery } from "@/lib/progress/leitner";
import { useProgress } from "@/lib/progress/useProgress";
import { XPBar } from "./XPBar";
import { StreakBadge } from "./StreakBadge";
import { BadgeShelf } from "./BadgeShelf";

export function SubjectDashboard({
  subject,
  content,
}: {
  subject: Subject;
  content: SubjectContent;
}) {
  const { progress } = useProgress(subject.id, content);
  const units = Array.from(new Set(content.flashcards.map((c) => c.unit)));
  const daysLeft = subject.examDate ? daysBetween(todayIso(), subject.examDate) : null;
  const mockAttempts = progress.attempts.filter((a) => a.mode === "mock-paper").length;

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-semibold">{subject.name}</h1>
        {daysLeft !== null && (
          <p className="text-muted">
            {daysLeft >= 0 ? `${daysLeft} days until the exam` : "Exam date has passed"}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-4">
          <XPBar xp={progress.xp} />
        </Card>
        <StreakBadge streak={progress.streak} />
      </div>

      <div>
        <h2 className="mb-2 font-medium">Unit mastery</h2>
        <div className="space-y-3">
          {units.map((unit) => {
            const pct = Math.round(unitMastery(content.flashcards, unit, progress) * 100);
            return (
              <ProgressBar key={unit} aria-label={unit} value={pct} color="accent">
                <div className="flex justify-between text-sm">
                  <span>{unit}</span>
                  <span className="text-muted">{pct}%</span>
                </div>
                <ProgressBar.Track>
                  <ProgressBar.Fill />
                </ProgressBar.Track>
              </ProgressBar>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="mb-2 font-medium">Badges</h2>
        <BadgeShelf unlockedIds={progress.badges} />
      </div>

      <div className="text-sm text-muted">
        Mock papers attempted: {mockAttempts} · Total quiz/recall attempts:{" "}
        {progress.attempts.filter((a) => a.mode === "quiz" || a.mode === "recall").length}
      </div>
    </div>
  );
}
