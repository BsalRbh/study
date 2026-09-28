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
  return (
    <div className="text-sm text-muted">
      {daysLeft > 0 ? `${daysLeft} days to exam` : daysLeft === 0 ? "Exam today" : "Exam passed"}
    </div>
  );
}
