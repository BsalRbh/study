import type { SubjectContent } from "./types";
import { dsaContent } from "./dsa";

const contentBySubject: Record<string, SubjectContent> = {
  dsa: dsaContent,
};

export function getSubjectContent(subjectId: string): SubjectContent {
  return contentBySubject[subjectId] ?? dsaContent;
}

export { subjects, defaultSubjectId, getSubject } from "./subjects";
export * from "./types";
