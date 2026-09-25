import { Card, ProgressBar } from "@heroui/react";
import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";

export default async function SyllabusPage(props: PageProps<"/syllabus">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);
  const { syllabus } = content;

  const maxWeightage = Math.max(1, ...syllabus.units.map((u) => u.weightageMarks ?? 0));

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Syllabus</h1>
      <div className="space-y-4">
        {syllabus.units.map((unit) => (
          <Card key={unit.unit} className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-medium">{unit.unit}</h2>
              {unit.weightageMarks !== undefined && (
                <span className="text-xs text-muted">
                  ~{unit.weightageMarks} marks historically
                </span>
              )}
            </div>
            {unit.weightageMarks !== undefined && (
              <ProgressBar
                aria-label={`${unit.unit} historical weightage`}
                value={unit.weightageMarks}
                minValue={0}
                maxValue={maxWeightage}
                size="sm"
                className="mb-3"
              >
                <ProgressBar.Track>
                  <ProgressBar.Fill />
                </ProgressBar.Track>
              </ProgressBar>
            )}
            <ul className="list-inside list-disc space-y-1 text-sm text-surface-foreground">
              {unit.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
