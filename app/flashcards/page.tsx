import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { FlashcardDeck, type DeckMode } from "@/components/FlashcardDeck";

export default async function FlashcardsPage(props: PageProps<"/flashcards">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);
  const unit = typeof searchParams.unit === "string" ? searchParams.unit : undefined;
  const mode: DeckMode =
    searchParams.mode === "mixed" || searchParams.mode === "weak" ? searchParams.mode : "due";

  return (
    <FlashcardDeck
      key={`${subjectId}-${mode}-${unit ?? "all"}`}
      subjectId={subjectId}
      content={content}
      initialUnit={unit}
      mode={mode}
    />
  );
}
