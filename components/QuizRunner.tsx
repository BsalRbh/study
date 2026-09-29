"use client";

import { useMemo, useState } from "react";
import type { SubjectContent } from "@/content/types";
import { dueCards } from "@/lib/progress/leitner";
import { buildQuizQuestions } from "@/lib/progress/quiz";
import { XP_REWARDS } from "@/lib/progress/rules";
import { useProgress } from "@/lib/progress/useProgress";
import { MathText } from "@/components/MathText";
import { StudyLayout } from "@/components/StudyLayout";

export function QuizRunner({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { progress, recordQuizAttempt } = useProgress(subjectId, content);
  // Randomized once per mount. This component is only ever rendered via
  // next/dynamic with ssr:false (see app/quiz/page.tsx), so there is no
  // server-rendered markup for this to mismatch against.
  const [seed] = useState(() => Math.floor(Math.random() * 1_000_000));

  const cards = useMemo(() => {
    const due = dueCards(content.flashcards, progress);
    return (due.length > 0 ? due : content.flashcards).slice(0, 10);
  }, [content.flashcards, progress]);

  const questions = useMemo(
    () => buildQuizQuestions(content, cards, seed),
    [content, cards, seed]
  );

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[index];

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    const correct = optionIndex === question.correctIndex;
    const nextScore = correct ? score + 1 : score;
    if (correct) setScore(nextScore);

    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelected(null);
      } else {
        recordQuizAttempt("quiz", nextScore, questions.length, XP_REWARDS.quizCorrect);
        setFinished(true);
      }
    }, 600);
  }

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center text-muted">
        Add some flashcards first — quizzes are generated from them.
      </div>
    );
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center">
        <h1 className="text-xl font-semibold">Quiz complete</h1>
        <p className="mt-2 text-muted">
          You scored {score} / {questions.length}
        </p>
      </div>
    );
  }

  const upNext = questions.slice(index + 1).map((q, i) => ({
    id: `${index + 1 + i}`,
    label: q.prompt,
  }));

  return (
    <StudyLayout doneCount={index} totalCount={questions.length} upNext={upNext}>
      <div className="mb-4 flex justify-between text-sm text-muted">
        <span>
          Question {index + 1} / {questions.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <h2 className="mb-4 text-lg font-medium">
        <MathText text={question.prompt} inline />
      </h2>
      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = i === selected;
          let style = "border-default bg-surface hover:border-accent";
          if (selected !== null) {
            if (isCorrect) style = "border-success bg-success/20";
            else if (isSelected) style = "border-danger bg-danger/20";
          }
          return (
            <button
              key={i}
              type="button"
              disabled={selected !== null}
              onClick={() => handleSelect(i)}
              className={`flex min-h-11 w-full items-center gap-2 rounded-2xl border px-4 py-3 text-left text-sm leading-relaxed transition-colors disabled:cursor-default ${style}`}
            >
              <span className="flex-1">
                <MathText text={option} inline />
              </span>
              {selected !== null && isCorrect && (
                <span aria-hidden className="shrink-0 text-success">
                  ✓
                </span>
              )}
              {selected !== null && isSelected && !isCorrect && (
                <span aria-hidden className="shrink-0 text-danger">
                  ✕
                </span>
              )}
            </button>
          );
        })}
      </div>
    </StudyLayout>
  );
}
