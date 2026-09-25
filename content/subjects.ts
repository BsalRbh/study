import type { Subject } from "./types";

export const subjects: Subject[] = [
  {
    id: "dsa",
    name: "Data Structure and Algorithm",
    code: "PCA154",
    semester: "PGDCA 1st Year, 2nd Semester",
  },
];

export const defaultSubjectId = subjects[0].id;

export function getSubject(id: string | undefined): Subject {
  return subjects.find((s) => s.id === id) ?? subjects[0];
}
