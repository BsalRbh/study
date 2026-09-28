"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { Card, SearchField } from "@heroui/react";
import { KIND_LABELS, type SearchResult } from "@/lib/search";

function Highlight({ text, words }: { text: string; words: string[] }) {
  if (words.length === 0) return <>{text}</>;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        words.includes(part.toLowerCase()) ? (
          <mark key={i} className="rounded bg-accent/20 px-0.5 text-foreground">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function SearchView({
  subjectId,
  subjectName,
  initialQuery,
  results,
}: {
  subjectId: string;
  subjectName: string;
  initialQuery: string;
  results: SearchResult[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Results come from the server for `initialQuery`; highlight against that, not the
  // in-flight text, so highlights always match what's shown.
  const words = initialQuery.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
  const typedWords = query.toLowerCase().split(/\s+/).filter((w) => w.length > 1);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchResult[]>();
    for (const r of results) map.set(r.kind, [...(map.get(r.kind) ?? []), r]);
    return Array.from(map.entries());
  }, [results]);

  function updateQuery(value: string) {
    setQuery(value);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const params = new URLSearchParams({ subject: subjectId });
      if (value.trim()) params.set("q", value.trim());
      startTransition(() => router.replace(`/search?${params.toString()}`, { scroll: false }));
    }, 250);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-2xl font-semibold">Search</h1>
      <p className="mb-4 mt-1 text-sm text-muted">
        Notes, exam questions, flashcards and glossary for {subjectName}.
      </p>
      <SearchField aria-label="Search" value={query} onChange={updateQuery} className="mb-6">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input autoFocus placeholder="e.g. flip-flop, TCP, binary search…" />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <div className={isPending ? "opacity-60 transition-opacity" : undefined}>
        {typedWords.length === 0 ? (
          <p className="text-sm text-muted">Type at least two letters to search.</p>
        ) : words.length === 0 ? null : results.length === 0 ? (
          <Card className="p-6 text-center text-sm text-muted">
            No matches for “{initialQuery}”. Try a shorter or different word.
          </Card>
        ) : (
          <div className="space-y-6">
            <p className="text-sm text-muted">
              {results.length} result{results.length === 1 ? "" : "s"}
            </p>
            {grouped.map(([kind, items]) => (
              <section key={kind}>
                <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted">
                  {KIND_LABELS[kind as SearchResult["kind"]]} ({items.length})
                </h2>
                <div className="space-y-2">
                  {items.slice(0, 20).map((r) => (
                    <Link key={r.href + r.title} href={r.href} className="block">
                      <Card className="p-3 transition-colors hover:border-accent">
                        <div className="text-xs text-muted">{r.context}</div>
                        <div className="font-medium">
                          <Highlight text={r.title} words={words} />
                        </div>
                        <div className="mt-1 text-sm text-muted">
                          <Highlight text={r.snippet} words={words} />
                        </div>
                      </Card>
                    </Link>
                  ))}
                  {items.length > 20 && (
                    <p className="text-xs text-muted">
                      Showing 20 of {items.length}. Add another word to narrow it down.
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
