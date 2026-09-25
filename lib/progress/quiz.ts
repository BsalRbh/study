import type { Flashcard, SubjectContent } from "@/content/types";
import { seededShuffle, seedFromString } from "./seededShuffle";

export interface MCQQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
}

const MIN_DISTRACTOR_POOL = 4;

export function buildQuizQuestions(
  content: SubjectContent,
  cards: Flashcard[],
  seed: number
): MCQQuestion[] {
  return cards.map((card) => {
    let pool = content.flashcards.filter(
      (c) => c.id !== card.id && c.unit === card.unit
    );
    if (pool.length < MIN_DISTRACTOR_POOL - 1) {
      pool = content.flashcards.filter((c) => c.id !== card.id);
    }

    let distractorTexts = seededShuffle(pool, seed + seedFromString(card.id))
      .slice(0, 3)
      .map((c) => c.back);

    if (distractorTexts.length < 3) {
      const glossaryFillers = seededShuffle(content.glossary, seed + seedFromString(card.id))
        .map((g) => g.definition)
        .filter((def) => def !== card.back);
      distractorTexts = [...distractorTexts, ...glossaryFillers].slice(0, 3);
    }

    const options = seededShuffle(
      [card.back, ...distractorTexts],
      seed + seedFromString(card.id) + 1
    );

    return {
      id: card.id,
      prompt: card.front,
      options,
      correctIndex: options.indexOf(card.back),
    };
  });
}
