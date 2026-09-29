"use client";

import { daysBetween, todayIso } from "@/lib/progress/date";
import { useProgressSnapshot } from "@/lib/progress/useProgress";

export function ExamCountdown({
  subjectId,
  fallbackDate,
}: {
  subjectId: string;
  fallbackDate?: string;
}) {
  const progress = useProgressSnapshot(subjectId);
  const examDate = progress.examDate ?? fallbackDate;
  if (!examDate) return null;
  const daysLeft = daysBetween(todayIso(), examDate);
  const tone =
    daysLeft < 0
      ? "bg-default text-muted"
      : daysLeft <= 3
        ? "bg-danger/12 text-danger"
        : daysLeft <= 10
          ? "bg-warning/15 text-warning-soft-foreground"
          : "bg-success/12 text-success-soft-foreground";
  return (
    <div className={`rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap ${tone}`}>
      {daysLeft > 1
        ? `${daysLeft} days to exam`
        : daysLeft === 1
          ? "Exam tomorrow"
          : daysLeft === 0
            ? "Exam today"
            : "Exam passed"}
    </div>
  );
}
