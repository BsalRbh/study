"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Key } from "@heroui/react";
import { Dropdown, Drawer } from "@heroui/react";
import { subjects } from "@/content/subjects";
import { PomodoroWidget } from "./PomodoroWidget";
import { ThemePicker } from "./ThemePicker";

const NAV_GROUPS = [
  {
    label: "Learn",
    links: [
      { href: "/syllabus", label: "Syllabus & Notes" },
      { href: "/cheatsheet", label: "Cheat Sheet" },
      { href: "/diagrams", label: "Diagrams" },
      { href: "/glossary", label: "Glossary" },
    ],
  },
  {
    label: "Practice",
    links: [
      { href: "/flashcards", label: "Flashcards" },
      { href: "/quiz", label: "Quiz" },
      { href: "/recall", label: "Recall" },
      { href: "/daily-challenge", label: "Daily Challenge" },
    ],
  },
  {
    label: "Exam",
    links: [
      { href: "/mock-paper", label: "Mock Paper" },
      { href: "/past-papers", label: "Past Papers" },
    ],
  },
  {
    label: "Me",
    links: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/bookmarks", label: "Bookmarks" },
    ],
  },
];

const TRIGGER_CLASS =
  "flex min-h-11 items-center gap-1 rounded-lg px-2.5 py-1.5 text-sm outline-none hover:bg-surface-secondary focus-visible:ring-2 focus-visible:ring-accent";

function Chevron() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="h-3 w-3 opacity-60">
      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SubjectNavInner() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("subject") ?? subjects[0]?.id;
  const current = subjects.find((s) => s.id === subjectId) ?? subjects[0];
  const onHome = pathname === "/";

  const withSubject = (href: string) =>
    subjectId ? `${href}?subject=${subjectId}` : href;

  const switchSubject = (key: Key) => {
    const target = onHome ? "/dashboard" : pathname;
    router.push(`${target}?subject=${String(key)}`);
  };

  const activeGroup = NAV_GROUPS.find((g) => g.links.some((l) => l.href === pathname));

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-surface/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2 text-sm">
        <Drawer>
          <Drawer.Trigger
            aria-label="Open menu"
            className={`${TRIGGER_CLASS} md:hidden`}
          >
            <svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </Drawer.Trigger>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                {({ close }) => (
                  <>
                    <Drawer.Header>
                      <Link href="/" onClick={close} className="text-xs text-muted">
                        Exam Prep Hub · all subjects
                      </Link>
                      <Drawer.Heading>{current.name}</Drawer.Heading>
                    </Drawer.Header>
                    <Drawer.Body className="space-y-5">
                      {NAV_GROUPS.map((group) => (
                        <div key={group.label}>
                          <div className="mb-1 text-xs font-medium uppercase tracking-wide text-muted">
                            {group.label}
                          </div>
                          <ul className="space-y-0.5">
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={withSubject(link.href)}
                                  onClick={close}
                                  className={`flex min-h-11 items-center rounded-lg px-2.5 py-2 ${
                                    pathname === link.href
                                      ? "bg-accent/15 font-medium text-foreground"
                                      : "text-foreground hover:bg-surface-secondary"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Drawer.Body>
                  </>
                )}
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>

        <Link
          href="/"
          className="mr-1 hidden min-h-11 items-center gap-2 font-semibold tracking-tight whitespace-nowrap sm:flex"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-lg bg-accent text-xs font-bold text-accent-foreground shadow-sm"
          >
            EP
          </span>
          Exam Prep Hub
        </Link>

        <Dropdown>
          <Dropdown.Trigger
            aria-label="Switch subject"
            className={`${TRIGGER_CLASS} min-w-0 max-w-40 font-medium sm:max-w-xs`}
          >
            <span className="truncate">{current.name}</span>
            <Chevron />
          </Dropdown.Trigger>
          <Dropdown.Popover placement="bottom start">
            <Dropdown.Menu
              aria-label="Subjects"
              selectionMode="single"
              selectedKeys={[current.id]}
              onAction={switchSubject}
            >
              {subjects.map((s) => (
                <Dropdown.Item key={s.id} id={s.id} textValue={s.name}>
                  <div className="flex flex-col">
                    <span>{s.name}</span>
                    {s.code && <span className="text-xs text-muted">{s.code}</span>}
                  </div>
                  <Dropdown.ItemIndicator />
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_GROUPS.map((group) => (
            <Dropdown key={group.label}>
              <Dropdown.Trigger
                className={`${TRIGGER_CLASS} ${
                  activeGroup?.label === group.label
                    ? "font-medium text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {group.label}
                <Chevron />
              </Dropdown.Trigger>
              <Dropdown.Popover placement="bottom start">
                <Dropdown.Menu
                  aria-label={group.label}
                  onAction={(key) => router.push(withSubject(String(key)))}
                >
                  {group.links.map((link) => (
                    <Dropdown.Item key={link.href} id={link.href} textValue={link.label}>
                      <span className={pathname === link.href ? "font-medium" : undefined}>
                        {link.label}
                      </span>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href={withSubject("/search")}
            aria-label="Search"
            className={`${TRIGGER_CLASS} ${pathname === "/search" ? "text-foreground" : "text-muted"}`}
          >
            <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4">
              <circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M13.2 13.2L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="hidden lg:inline">Search</span>
          </Link>
          <PomodoroWidget />
          <ThemePicker />
        </div>
      </div>
    </nav>
  );
}

export function SubjectNav() {
  return (
    <Suspense fallback={<nav className="sticky top-0 z-40 h-15.25 border-b border-border bg-surface/80" />}>
      <SubjectNavInner />
    </Suspense>
  );
}
