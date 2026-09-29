"use client";

import { useMemo, useState } from "react";
import { Button, Input, TextField } from "@heroui/react";
import type { SubjectContent } from "@/content/types";
import { isCloseEnough } from "@/lib/progress/fuzzyMatch";
import { XP_REWARDS } from "@/lib/progress/rules";
import { seededShuffle } from "@/lib/progress/seededShuffle";
import { useProgress } from "@/lib/progress/useProgress";
import { MathText } from "@/components/MathText";
import { StudyLayout } from "@/components/StudyLayout";

export function RecallRunner({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { recordQuizAttempt } = useProgress(subjectId, content);
  // Randomized once per mount. This component is only ever rendered via
  // next/dynamic with ssr:false (see app/recall/page.tsx), so there is no
  // server-rendered markup for this to mismatch against.
  const [seed] = useState(() => Math.floor(Math.random() * 1_000_000));

  const terms = useMemo(
    () => seededShuffle(content.glossary, seed).slice(0, 10),
    [content.glossary, seed]
  );

  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [revealed, setRevealed] = useState<"correct" | "incorrect" | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const term = terms[index];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (revealed) return;
    const correct = isCloseEnough(input, term.term);
    setRevealed(correct ? "correct" : "incorrect");
    const nextScore = correct ? score + 1 : score;
    if (correct) setScore(nextScore);

    setTimeout(() => {
      if (index + 1 < terms.length) {
        setIndex(index + 1);
        setInput("");
        setRevealed(null);
      } else {
        recordQuizAttempt("recall", nextScore, terms.length, XP_REWARDS.recallCorrect);
        setFinished(true);
      }
    }, 1200);
  }

  if (terms.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center text-muted">
        Add some glossary terms first — recall mode is generated from them.
      </div>
    );
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center">
        <h1 className="text-xl font-semibold">Recall complete</h1>
        <p className="mt-2 text-muted">
          You scored {score} / {terms.length}
        </p>
      </div>
    );
  }

  // Showing the upcoming definitions would give away the answers, so "up
  // next" just lists placeholders here rather than spoiling the term.
  const upNext = terms.slice(index + 1).map((t, i) => ({
    id: t.term,
    label: `Term ${index + 2 + i}`,
  }));

  return (
    <StudyLayout doneCount={index} totalCount={terms.length} upNext={upNext}>
      <div className="mb-4 flex justify-between text-sm text-muted">
        <span>
          Term {index + 1} / {terms.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <p className="mb-4 text-lg">
        <MathText text={term.definition} inline />
      </p>
      <p className="mb-2 text-xs uppercase tracking-wide text-muted">
        What term does this define?
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <TextField
          value={input}
          onChange={setInput}
          isDisabled={revealed !== null}
          className="flex-1"
          aria-label="Type the term"
        >
          <Input autoFocus placeholder="Type the term..." />
        </TextField>
        <Button
          type="submit"
          size="lg"
          className="min-h-11"
          variant="primary"
          isDisabled={revealed !== null}
        >
          Check
        </Button>
      </form>
      {revealed && (
        <p
          className={`mt-3 text-sm ${revealed === "correct" ? "text-success" : "text-danger"}`}
        >
          {revealed === "correct" ? "Correct!" : `Not quite — it was "${term.term}"`}
        </p>
      )}
    </StudyLayout>
  );
}
