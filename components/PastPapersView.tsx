"use client";

import { useMemo, useState } from "react";
import type { SubjectContent } from "@/content/types";
import { AnswerCard } from "./AnswerCard";
import { FilterSelect } from "./FilterSelect";

export function PastPapersView({
  subjectId,
  content,
}: {
  subjectId: string;
  content: SubjectContent;
}) {
  const { pastPapers } = content;
  const topics = useMemo(
    () => Array.from(new Set(pastPapers.questions.map((q) => q.topic))),
    [pastPapers.questions]
  );
  const [topicFilter, setTopicFilter] = useState<string | "all">("all");

  const filtered = useMemo(
    () =>
      topicFilter === "all"
        ? pastPapers.questions
        : pastPapers.questions.filter((q) => q.topic === topicFilter),
    [pastPapers.questions, topicFilter]
  );

  const grouped = useMemo(() => {
    const byGroup: Record<string, typeof filtered> = {};
    for (const q of filtered) {
      (byGroup[q.group] ??= []).push(q);
    }
    return byGroup;
  }, [filtered]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Past Papers</h1>
        <FilterSelect
          label="Topic"
          allLabel="All topics"
          options={topics}
          value={topicFilter}
          onChange={setTopicFilter}
        />
      </div>
      <p className="mb-6 text-sm text-muted">
        Years covered: {pastPapers.years.join(", ")}
      </p>
      {Object.entries(grouped).map(([group, questions]) => (
        <div key={group} className="mb-8">
          <h2 className="mb-3 font-medium">Group {group}</h2>
          <div className="space-y-4">
            {questions.map((question) => (
              <AnswerCard
                key={question.id}
                question={question}
                subjectId={subjectId}
                content={content}
                topic={question.topic}
              />
            ))}
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <p className="text-sm text-muted">No questions match.</p>
      )}
    </div>
  );
}
