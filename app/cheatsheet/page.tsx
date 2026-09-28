import { Card, Chip } from "@heroui/react";
import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { MathText } from "@/components/MathText";

export default async function CheatSheetPage(props: PageProps<"/cheatsheet">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);
  const { cheatSheet } = content;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-4 text-2xl font-semibold">Cheat Sheet</h1>
      <Card className="mb-6 border-warning bg-warning/20 p-4 text-sm text-foreground">
        {cheatSheet.gradingNote}
      </Card>
      <div className="columns-2 gap-3 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
        {cheatSheet.sections.map((section) => (
          <Card key={section.heading} className="mb-3 flex break-inside-avoid flex-col gap-2 p-3">
            <h2 className="flex items-center justify-between gap-1 text-sm font-medium">
              <span>{section.heading}</span>
              <Chip
                size="sm"
                color={section.tier === "core" ? "success" : "default"}
                variant="soft"
              >
                <Chip.Label>{section.tier === "core" ? "Core" : "Hedge"}</Chip.Label>
              </Chip>
            </h2>
            <ul className="list-inside list-disc space-y-1 text-xs text-surface-foreground">
              {section.items.map((item, i) => (
                <li key={i}>
                  <MathText text={item} inline />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
