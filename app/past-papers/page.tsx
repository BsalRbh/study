import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { PastPapersView } from "@/components/PastPapersView";

export default async function PastPapersPage(props: PageProps<"/past-papers">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return <PastPapersView subjectId={subjectId} content={content} />;
}
