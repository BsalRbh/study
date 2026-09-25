import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { QuizRunnerLoader } from "@/components/QuizRunnerLoader";

export default async function QuizPage(props: PageProps<"/quiz">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return <QuizRunnerLoader subjectId={subjectId} content={content} />;
}
