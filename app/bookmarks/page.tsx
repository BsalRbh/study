import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { BookmarksView } from "@/components/BookmarksView";

export default async function BookmarksPage(props: PageProps<"/bookmarks">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  return <BookmarksView subjectId={subjectId} content={content} />;
}
