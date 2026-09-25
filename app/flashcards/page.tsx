import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { FlashcardDeck } from "@/components/FlashcardDeck";

export default async function FlashcardsPage(props: PageProps<"/flashcards">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return <FlashcardDeck subjectId={subjectId} content={content} />;
}
