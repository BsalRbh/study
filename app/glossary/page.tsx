import { getSubjectContent } from "@/content";
import { getSubject } from "@/content/subjects";
import { SearchableGlossary } from "@/components/SearchableGlossary";

export default async function GlossaryPage(props: PageProps<"/glossary">) {
  const searchParams = await props.searchParams;
  const subjectId = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  ).id;
  const content = getSubjectContent(subjectId);

  const q = typeof searchParams.q === "string" ? searchParams.q : "";

  return <SearchableGlossary subjectId={subjectId} content={content} initialQuery={q} />;
}
