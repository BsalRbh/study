import { Card, Chip } from "@heroui/react";
import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";

export default async function CheatSheetPage(props: PageProps<"/cheatsheet">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);
  const { cheatSheet } = content;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Cheat Sheet</h1>
      <Card className="mb-6 border-warning bg-warning/20 p-4 text-sm text-foreground">
        {cheatSheet.gradingNote}
      </Card>
      <div className="space-y-6">
        {cheatSheet.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="mb-2 flex items-center gap-2 font-medium">
              {section.heading}
              <Chip
                size="sm"
                color={section.tier === "core" ? "success" : "default"}
                variant="soft"
              >
                <Chip.Label>{section.tier === "core" ? "Core" : "Hedge"}</Chip.Label>
              </Chip>
            </h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-surface-foreground">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
