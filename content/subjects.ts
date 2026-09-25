import type { Subject } from "./types";

export const subjects: Subject[] = [
  {
    id: "sample",
    name: "Sample Subject",
    code: "PGDCA-2XX",
    semester: "PGDCA 2nd Semester",
    examDate: "2026-12-01",
  },
];

export const defaultSubjectId = subjects[0].id;

export function getSubject(id: string | undefined): Subject {
  return subjects.find((s) => s.id === id) ?? subjects[0];
}
