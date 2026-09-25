import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { SubjectDashboard } from "@/components/SubjectDashboard";

export default async function DashboardPage(props: PageProps<"/dashboard">) {
  const searchParams = await props.searchParams;
  const subject = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  );
  const content = getSubjectContent(subject.id);

  return <SubjectDashboard subject={subject} content={content} />;
}
