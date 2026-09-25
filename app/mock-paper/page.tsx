import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { AnswerCard } from "@/components/AnswerCard";

export default async function MockPaperPage(props: PageProps<"/mock-paper">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);
  const { mockPaper } = content;

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-semibold">{mockPaper.title}</h1>
        <p className="mt-1 text-sm text-muted">{mockPaper.instructions}</p>
      </div>
      {mockPaper.questions.map((question) => (
        <AnswerCard
          key={question.id}
          question={question}
          subjectId={subjectId}
          content={content}
        />
      ))}
    </div>
  );
}
