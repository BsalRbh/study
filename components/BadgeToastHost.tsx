"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getSubjectContent } from "@/content";
import { subjects } from "@/content/subjects";
import { BADGES } from "@/lib/progress/rules";
import { useProgress } from "@/lib/progress/useProgress";

function BadgeToastHostInner() {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("subject") ?? subjects[0]?.id;
  const content = subjectId ? getSubjectContent(subjectId) : null;

  if (!subjectId || !content) return null;
  return <BadgeWatcher subjectId={subjectId} content={content} />;
}

function BadgeWatcher({
  subjectId,
  content,
}: {
  subjectId: string;
  content: ReturnType<typeof getSubjectContent>;
}) {
  const { progress } = useProgress(subjectId, content);
  const seen = useRef<Set<string> | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // First render: baseline "already unlocked" badges as seen without
  // toasting, so only badges earned *during this session* trigger a toast.
  if (seen.current === null) {
    seen.current = new Set(progress.badges);
  }

  useEffect(() => {
    const newlyUnlocked = progress.badges.filter((id) => !seen.current!.has(id));
    if (newlyUnlocked.length === 0) return;
    seen.current = new Set(progress.badges);

    const badge = BADGES.find((b) => b.id === newlyUnlocked[0]);
    if (!badge) return;
    setToast(`🏆 Badge unlocked: ${badge.label}`);
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [progress.badges]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-foreground px-4 py-2 text-sm text-background shadow-lg">
      {toast}
    </div>
  );
}

export function BadgeToastHost() {
  return (
    <Suspense fallback={null}>
      <BadgeToastHostInner />
    </Suspense>
  );
}
