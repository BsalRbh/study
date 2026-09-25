import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { DailyChallengeRunner } from "@/components/DailyChallengeRunner";

export default async function DailyChallengePage(props: PageProps<"/daily-challenge">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return <DailyChallengeRunner subjectId={subjectId} content={content} />;
}
