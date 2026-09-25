import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { RecallRunnerLoader } from "@/components/RecallRunnerLoader";

export default async function RecallPage(props: PageProps<"/recall">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return <RecallRunnerLoader subjectId={subjectId} content={content} />;
}
