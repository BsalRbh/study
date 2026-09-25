import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { DiagramFigure } from "@/components/DiagramFigure";

export default async function DiagramsPage(props: PageProps<"/diagrams">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-2xl font-semibold">Diagram Guide</h1>
      {content.diagrams.map((diagram) => (
        <DiagramFigure key={diagram.id} diagram={diagram} />
      ))}
    </div>
  );
}
