"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Card, ProgressBar } from "@heroui/react";
import type { Subject, SubjectContent } from "@/content/types";
import { daysBetween, todayIso } from "@/lib/progress/date";
import { dueCards, unitMastery, weakCards } from "@/lib/progress/leitner";
import { useProgress } from "@/lib/progress/useProgress";
import { XPBar } from "./XPBar";
import { StreakBadge } from "./StreakBadge";
import { BadgeShelf } from "./BadgeShelf";

type TodayAction = { href: string; title: string; detail: string };

export function SubjectDashboard({
  subject,
  content,
}: {
  subject: Subject;
  content: SubjectContent;
}) {
  const { progress, setExamDate } = useProgress(subject.id, content);
  const units = useMemo(
    () => Array.from(new Set(content.flashcards.map((c) => c.unit))),
    [content.flashcards]
  );
  const examDate = progress.examDate ?? subject.examDate;
  const daysLeft = examDate ? daysBetween(todayIso(), examDate) : null;
  const mockAttempts = progress.attempts.filter((a) => a.mode === "mock-paper").length;

  const due = useMemo(() => dueCards(content.flashcards, progress), [content.flashcards, progress]);
  const weak = useMemo(() => weakCards(content.flashcards, progress), [content.flashcards, progress]);
  const masteryByUnit = useMemo(
    () => units.map((unit) => ({ unit, mastery: unitMastery(content.flashcards, unit, progress) })),
    [units, content.flashcards, progress]
  );
  const weakByUnit = useMemo(() => {
    const groups = new Map<string, typeof weak>();
    for (const card of weak) groups.set(card.unit, [...(groups.get(card.unit) ?? []), card]);
    return Array.from(groups.entries());
  }, [weak]);

  const q = `subject=${subject.id}`;
  const actions: TodayAction[] = [];
  if (due.length > 0) {
    actions.push({
      href: `/flashcards?${q}`,
      title: `Review ${due.length} due card${due.length === 1 ? "" : "s"}`,
      detail: "Spaced review: the single most effective way to remember.",
    });
  }
  if (!progress.dailyChallengeCompletedDates.includes(todayIso())) {
    actions.push({
      href: `/daily-challenge?${q}`,
      title: "Today's daily challenge",
      detail: "A short mixed quiz. Keeps your streak alive.",
    });
  }
  if (weak.length > 0) {
    actions.push({
      href: `/flashcards?${q}&mode=weak`,
      title: `Revise ${weak.length} weak card${weak.length === 1 ? "" : "s"}`,
      detail: "Cards you've been getting wrong.",
    });
  }
  const weakestUnit = [...masteryByUnit].sort((a, b) => a.mastery - b.mastery)[0];
  if (weakestUnit && weakestUnit.mastery < 1) {
    actions.push({
      href: `/flashcards?${q}&unit=${encodeURIComponent(weakestUnit.unit)}`,
      title: `Focus: ${weakestUnit.unit}`,
      detail: `Your least-mastered unit (${Math.round(weakestUnit.mastery * 100)}%).`,
    });
  }
  const dueUnitCount = new Set(due.map((c) => c.unit)).size;
  if (dueUnitCount >= 2) {
    actions.push({
      href: `/flashcards?${q}&mode=mixed`,
      title: "Mixed review",
      detail: "Due cards from all units shuffled, like a real exam.",
    });
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{subject.name}</h1>
          <p className="text-muted">
            {daysLeft === null
              ? "Set your exam date to see a countdown."
              : daysLeft > 0
                ? `${daysLeft} day${daysLeft === 1 ? "" : "s"} until the exam`
                : daysLeft === 0
                  ? "Exam is today. Good luck!"
                  : "Exam date has passed"}
          </p>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted">
          Exam date
          <input
            type="date"
            value={examDate ?? ""}
            onChange={(e) => setExamDate(e.target.value || undefined)}
            className="rounded-lg border border-border bg-surface px-2 py-1 text-foreground"
          />
        </label>
      </div>

      <section>
        <h2 className="mb-2 font-medium">Today</h2>
        {actions.length === 0 ? (
          <Card className="p-4 text-sm text-muted">
            All caught up for today. Try a mock paper or read your syllabus notes.
          </Card>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {actions.slice(0, 4).map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Card className="h-full border-l-4 border-l-accent p-4 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                  <div className="flex items-center justify-between gap-2 font-medium">
                    {action.title}
                    <span
                      aria-hidden
                      className="text-accent transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-muted">{action.detail}</div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-4">
          <XPBar xp={progress.xp} />
        </Card>
        <StreakBadge streak={progress.streak} />
      </div>

      {weakByUnit.length > 0 && (
        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-medium">Weak topics</h2>
            <Link
              href={`/flashcards?${q}&mode=weak`}
              className="text-sm text-accent underline underline-offset-2"
            >
              Revise these
            </Link>
          </div>
          <Card className="space-y-3 p-4">
            {weakByUnit.map(([unit, cards]) => (
              <div key={unit}>
                <div className="text-sm font-medium">{unit}</div>
                <ul className="mt-1 list-inside list-disc text-sm text-muted">
                  {cards.slice(0, 3).map((c) => (
                    <li key={c.id}>{c.front}</li>
                  ))}
                  {cards.length > 3 && <li>and {cards.length - 3} more</li>}
                </ul>
              </div>
            ))}
          </Card>
        </section>
      )}

      <section>
        <h2 className="mb-2 font-medium">Unit mastery</h2>
        <div className="space-y-3">
          {masteryByUnit.map(({ unit, mastery }) => {
            const pct = Math.round(mastery * 100);
            const color = pct === 0 ? "default" : pct >= 80 ? "success" : "accent";
            return (
              <ProgressBar key={unit} aria-label={unit} value={pct} color={color}>
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
      </section>

      <section>
        <h2 className="mb-2 font-medium">Badges</h2>
        <BadgeShelf unlockedIds={progress.badges} />
      </section>

      <div className="text-sm text-muted">
        Mock papers attempted: {mockAttempts} · Total quiz/recall attempts:{" "}
        {progress.attempts.filter((a) => a.mode === "quiz" || a.mode === "recall").length}
      </div>
    </div>
  );
}
