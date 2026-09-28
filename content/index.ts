import type { SubjectContent } from "./types";
import { dsaContent } from "./dsa";
import { digitalSystemContent } from "./digital-system";
import { dcnContent } from "./dcn";
import { mathContent } from "./math";

const contentBySubject: Record<string, SubjectContent> = {
  dsa: dsaContent,
  "digital-system": digitalSystemContent,
  dcn: dcnContent,
  math: mathContent,
};

export function getSubjectContentWithNotes(subjectId: string): SubjectContent {
  return contentBySubject[subjectId] ?? dsaContent;
}

// Notes are large and only needed by /notes, /syllabus and /search. Everything else
// gets a copy without them so client components don't ship every note to the browser.
const withoutNotes = new Map<string, SubjectContent>();

export function getSubjectContent(subjectId: string): SubjectContent {
  const full = getSubjectContentWithNotes(subjectId);
  let light = withoutNotes.get(subjectId);
  if (!light) {
    light = {
      ...full,
      syllabus: {
        units: full.syllabus.units.map((unit) => {
          const { notes, ...rest } = unit;
          void notes;
          return rest;
        }),
      },
    };
    withoutNotes.set(subjectId, light);
  }
  return light;
}

export { subjects, defaultSubjectId, getSubject } from "./subjects";
export * from "./types";
