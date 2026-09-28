export interface Subject {
  id: string;
  name: string;
  code?: string;
  semester?: string;
  examDate?: string;
}

export type CardTier = "core" | "hedge";

export interface Flashcard {
  id: string;
  unit: string;
  tier: CardTier;
  front: string;
  back: string;
}

export interface CheatSheetSection {
  heading: string;
  tier: CardTier;
  items: string[];
}

export interface CheatSheet {
  gradingNote: string;
  sections: CheatSheetSection[];
}

export interface DiagramMistake {
  text: string;
}

export interface Diagram {
  id: string;
  title: string;
  scenario: string;
  svg: string;
  mistakes: DiagramMistake[];
}

export type QuestionGroup = "A" | "B" | "C";

export interface Question {
  id: string;
  group: QuestionGroup;
  marks: number;
  prompt: string;
  answer: string;
  years?: string[];
}

export interface MockPaper {
  title: string;
  instructions: string;
  questions: Question[];
}

export interface PastPaperQuestion extends Question {
  topic: string;
}

export interface PastPapers {
  years: string[];
  questions: PastPaperQuestion[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface TopicNote {
  // Shown before the notes so students attempt recall first.
  selfTest: string[];
  // Markdown (KaTeX supported via $...$).
  body: string;
}

export interface SyllabusUnit {
  unit: string;
  topics: string[];
  weightageMarks?: number;
  // Keyed by the exact topic string in `topics`.
  notes?: Record<string, TopicNote>;
}

export interface Syllabus {
  units: SyllabusUnit[];
}

export interface SubjectContent {
  flashcards: Flashcard[];
  cheatSheet: CheatSheet;
  diagrams: Diagram[];
  mockPaper: MockPaper;
  pastPapers: PastPapers;
  glossary: GlossaryTerm[];
  syllabus: Syllabus;
}
