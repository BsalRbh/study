import { getSubjectContentWithNotes } from "@/content";
import { getSubject } from "@/content/subjects";
import { SearchView } from "@/components/SearchView";
import { buildSearchIndex, searchItems } from "@/lib/search";

export default async function SearchPage(props: PageProps<"/search">) {
  const searchParams = await props.searchParams;
  const subject = getSubject(
    typeof searchParams.subject === "string" ? searchParams.subject : undefined
  );
  const q = typeof searchParams.q === "string" ? searchParams.q : "";
  const results = q
    ? searchItems(buildSearchIndex(subject.id, getSubjectContentWithNotes(subject.id)), q)
    : [];

  return (
    <SearchView
      subjectId={subject.id}
      subjectName={subject.name}
      initialQuery={q}
      results={results}
    />
  );
}
