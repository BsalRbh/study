import type { SubjectContent } from "./types";
import { sampleContent } from "./sample";

const contentBySubject: Record<string, SubjectContent> = {
  sample: sampleContent,
};

export function getSubjectContent(subjectId: string): SubjectContent {
  return contentBySubject[subjectId] ?? sampleContent;
}

export { subjects, defaultSubjectId, getSubject } from "./subjects";
export * from "./types";
