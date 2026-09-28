import type { SubjectContent } from "@/content/types";

export type SearchKind = "note" | "flashcard" | "glossary" | "question";

export interface SearchItem {
  kind: SearchKind;
  title: string;
  text: string;
  context: string;
  href: string;
}

export const KIND_LABELS: Record<SearchKind, string> = {
  note: "Study notes",
  question: "Exam questions",
  flashcard: "Flashcards",
  glossary: "Glossary",
};

const KIND_ORDER: SearchKind[] = ["note", "question", "flashcard", "glossary"];

export function buildSearchIndex(subjectId: string, content: SubjectContent): SearchItem[] {
  const q = `subject=${subjectId}`;
  const items: SearchItem[] = [];

  for (const unit of content.syllabus.units) {
    for (const topic of unit.topics) {
      const note = unit.notes?.[topic];
      if (!note) continue;
      items.push({
        kind: "note",
        title: topic,
        text: note.body,
        context: unit.unit,
        href: `/notes?${q}&topic=${encodeURIComponent(topic)}`,
      });
    }
  }

  const questions = [
    ...content.pastPapers.questions.map((qq) => ({
      question: qq,
      page: "past-papers",
      label: `Past paper${qq.years?.length ? ` ${qq.years.join(", ")}` : ""}`,
    })),
    ...content.mockPaper.questions.map((qq) => ({ question: qq, page: "mock-paper", label: "Mock paper" })),
  ];
  for (const { question, page, label } of questions) {
    items.push({
      kind: "question",
      title: question.prompt,
      text: question.answer,
      context: `${label} · ${question.marks} marks`,
      href: `/${page}?${q}#q-${question.id}`,
    });
  }

  for (const card of content.flashcards) {
    items.push({
      kind: "flashcard",
      title: card.front,
      text: card.back,
      context: card.unit,
      href: `/flashcards?${q}&unit=${encodeURIComponent(card.unit)}`,
    });
  }

  for (const term of content.glossary) {
    items.push({
      kind: "glossary",
      title: term.term,
      text: term.definition,
      context: "Glossary",
      href: `/glossary?${q}&q=${encodeURIComponent(term.term)}`,
    });
  }

  return items;
}

export function stripMarkdown(md: string): string {
  return md
    .replace(/\$\$?([^$]*)\$\$?/g, "$1")
    .replace(/[*_`#>|]/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export interface SearchResult extends SearchItem {
  snippet: string;
  score: number;
}

export function searchItems(items: SearchItem[], query: string): SearchResult[] {
  const words = query.toLowerCase().split(/\s+/).filter((w) => w.length > 1);
  if (words.length === 0) return [];

  const results: SearchResult[] = [];
  for (const item of items) {
    const title = item.title.toLowerCase();
    const plain = stripMarkdown(item.text);
    const body = plain.toLowerCase();
    if (!words.every((w) => title.includes(w) || body.includes(w))) continue;

    const titleHits = words.filter((w) => title.includes(w)).length;
    const score = titleHits * 10 + (title.includes(query.toLowerCase().trim()) ? 20 : 0);

    const at = Math.max(0, body.indexOf(words[0]));
    const start = Math.max(0, at - 60);
    const snippet =
      (start > 0 ? "…" : "") +
      plain.slice(start, start + 180) +
      (start + 180 < plain.length ? "…" : "");

    results.push({ ...item, snippet, score });
  }

  return results.sort(
    (a, b) =>
      KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind) || b.score - a.score
  );
}
