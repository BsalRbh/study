import type { Subject } from "./types";

export const subjects: Subject[] = [
  {
    id: "dsa",
    shortName: "DSA",
    name: "Data Structure and Algorithm",
    code: "PCA154",
    semester: "PGDCA 1st Year, 2nd Semester",
  },
  {
    id: "digital-system",
    shortName: "DS",
    name: "Digital System",
    code: "PCA105",
    semester: "PGDCA 1st Year, 1st Semester",
  },
  {
    id: "dcn",
    shortName: "DCN",
    name: "Data Communication and Networks",
    code: "PCA102",
    semester: "PGDCA 1st Year, 1st Semester",
  },
  {
    id: "math",
    shortName: "MATH",
    name: "Mathematics",
    code: "PCA104",
    semester: "PGDCA 1st Year, 1st Semester",
  },
];

export const defaultSubjectId = subjects[0].id;

export function getSubject(id: string | undefined): Subject {
  return subjects.find((s) => s.id === id) ?? subjects[0];
}
