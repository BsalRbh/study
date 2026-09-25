"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { subjects } from "@/content/subjects";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/quiz", label: "Quiz" },
  { href: "/recall", label: "Recall" },
  { href: "/daily-challenge", label: "Daily Challenge" },
  { href: "/mock-paper", label: "Mock Paper" },
  { href: "/past-papers", label: "Past Papers" },
  { href: "/cheatsheet", label: "Cheat Sheet" },
  { href: "/diagrams", label: "Diagrams" },
  { href: "/glossary", label: "Glossary" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/bookmarks", label: "Bookmarks" },
];

function SubjectNavInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("subject") ?? subjects[0]?.id;

  const withSubject = (href: string) =>
    subjectId ? `${href}?subject=${subjectId}` : href;

  return (
    <nav className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 text-sm">
        <Link href="/" className="font-semibold">
          Exam Prep Hub
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={withSubject(link.href)}
            className={
              pathname === link.href
                ? "font-medium text-foreground"
                : "text-muted hover:text-foreground"
            }
          >
            {link.label}
          </Link>
        ))}
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export function SubjectNav() {
  return (
    <Suspense fallback={<nav className="h-12.25 border-b border-border bg-surface" />}>
      <SubjectNavInner />
    </Suspense>
  );
}
