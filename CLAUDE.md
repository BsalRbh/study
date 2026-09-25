@AGENTS.md

# Exam Prep Hub — Project Context

## What this is

A Next.js (App Router, TypeScript, Tailwind v4, yarn) rebuild of a study/exam-prep system, replacing a set of standalone HTML files that were previously hand-built and published as Claude Artifacts for a single subject ("System Analysis & Design" / SAD, Purbanchal University PGDCA 2nd semester). That original SAD kit is **staying exactly as-is** — it lives at `/home/thanatos/exam -2026 pdgca 2/*.html` and is already deployed as a private Claude Artifact (working link, exam-tested, do not touch). This new Next.js project is for **the next subject onward**, built as a reusable, multi-subject system instead of one-off HTML per subject.

## Why this exists (background from prior sessions)

The user is a PGDCA student preparing for university exams under real time pressure (the SAD exam was literally the next day when that kit was finished). For SAD, across several sessions we built:

1. **Flashcards** — flippable deck, tagged Core (proven from past papers) vs Hedge (in syllabus but untested), filterable by unit, with local self-check scoring (knew-it / missed-it).
2. **Cheat Sheet** — dense one-page reference, Core section + Hedge safety-net section, plus a prominent "how Purbanchal actually grades" banner (see below — this was an important correction).
3. **Diagram Guide** — hand-drawn-style inline SVG diagrams (ER, DFD, Use Case, Class, Sequence, State, Decision Table/Tree) for the recurring exam scenarios (Library, Hospital, ATM, etc.), with "common mistakes" callouts (DFD black-holes, ER cardinality-vs-participation confusion).
4. **Mock Paper** — a newly-composed paper matching the real exam's exact mark structure (Group A 2×12=24, Group B 7×8=56 answer-7-of-8, sometimes a Group C short-notes), with a fold-and-answer-key format for timed self-testing.
5. **Past Papers** — every real question transcribed from photographed past papers (2017/2018/2019/2021 for SAD), organized **by Group (A/B/C) then by topic**, not by year, so repetition patterns are visible at a glance, each tagged with which year(s) it appeared.
6. **Keywords glossary** — searchable glossary of vocabulary that recurs across almost every answer (entities, actors, components, notation terms), because exam markers specifically look for correct technical vocabulary.
7. **A day-by-day countdown Schedule** acting as the home/index page linking everything else.
8. **A same-day "actual exam paper" page** — when the user photographed the *live* exam paper on the exam day itself, we added a dedicated, visually distinct, top-of-nav page with full model answers for that exact paper, including noting which sub-questions were marked as skipped on the physical paper.

All of this was iterated live based on direct user feedback. **The single most important correction the user gave, and the reason this whole system exists in its current form:** the user told us (paraphrased) — *"you know how the Nepali exam system works — if a question carries 12 marks we need to write more elaborated answers. Pretend you are a student and solve all the past papers."* This means: **Nepali/Purbanchal University exams grade heavily on elaboration and structure, not just correct facts.** A bare bullet-point list that would be a perfectly good "study note" is NOT an exam-ready answer. The concrete word-count/structure targets we settled on and must keep applying to every subject:

- **12-mark question** → 250–400+ words: proper intro/definition paragraph, then each point turned into its own fully explained sentence with a real-world example, plus a short concluding sentence.
- **8-mark question** → 150–250 words: same structure, slightly shorter, still full sentences per point, never just naming a term.
- **4-mark / short note** → 60–120 words: one solid paragraph, not a single line.
- Diagram questions ("draw an ER diagram for X"): write the full elaborated conceptual/written explanation in prose (what entities/actors/cardinalities apply to *this specific* scenario), then point to the Diagram Guide for the actual drawing rather than duplicating ASCII-art diagrams inline.
- Numeric questions (Payback Period, NPV, decision tables): show the formula, substitute values line-by-line, and **always end with an explicit decision/interpretation sentence** — that's a scored step markers specifically check for, not optional flavor text.

This elaboration standard is **the core product requirement for every subject going forward**, not a one-time fix. Any "Mock Paper" or "Past Papers" content generated for a new subject must hit these lengths from the first draft.

## Other working decisions already made (apply to this new project)

- **Hosting**: deploy to Vercel. The user will connect/authenticate and deploy it themselves (I should not need Vercel credentials) — I get the project fully working locally, they run the actual `vercel` connect/deploy step.
- **Package manager: yarn**, not npm. The user explicitly corrected this once already — always use `yarn`, never `npm install`/`npx create-next-app` defaults, in this project.
- **Content format**: plain structured data files (TS/JSON), not a database or admin UI. The user (or I, on their behalf, pasting in new past-paper photos) edits these files directly per subject. No CMS, no auth, no backend needed for content editing.
- **Scope split**: the existing SAD HTML kit is frozen/done. This Next.js project starts fresh with subject #2 onward. Do not try to "migrate" SAD into this system unless explicitly asked later — treat it as a separate, already-shipped artifact.
- **Multi-subject from the start**: even though we're only adding one new subject right now, structure the project so adding subject #3, #4, etc. later is just "add a content folder + a syllabus/past-paper source," not a rebuild. Was mid-way through deciding the exact routing pattern (`/[subject]/flashcards` style nested routes vs flat routes) and whether the home page lists all subjects or redirects to the active one — **these two decisions were not yet finalized when this file was written; resolve them with the user before building the app-router structure.**

## Scaffold status (already done)

Project was scaffolded with:
```
npx create-next-app@latest exam-prep-hub --typescript --tailwind --app --no-src-dir --import-alias "@/*" --eslint --use-yarn
```
This produced a clean, standard App Router + Tailwind v4 + TypeScript project (Next.js 16.3.6, React 19.2.8), `yarn.lock` present, `node_modules` installed, git repo initialized. Nothing beyond the default scaffold exists yet — no custom routes, components, or content files have been written. The default `app/page.tsx`, `app/layout.tsx`, `app/globals.css` are all still the create-next-app boilerplate.

An `AGENTS.md` file was auto-generated by `next dev`/the Next.js CLI itself, warning that this Next.js version may have breaking changes vs. training data and pointing at `node_modules/next/dist/docs/` as the authoritative docs source for this exact installed version — **read the relevant doc there before relying on remembered Next.js API shape**, especially anything routing- or config-related that seems unfamiliar. That file is regenerated automatically by tooling; don't fight it, just keep it committed.

## Not yet started / next steps

1. Finalize routing pattern and home-page behavior (see open questions above) with the user.
2. Get the next subject's name + syllabus + past paper photos from the user.
3. Design the shared component set (Nav/subject-switcher, FlashcardDeck, AnswerCard w/ marks-based styling, DiagramFigure, SearchableGlossary) so each new subject is mostly just new data files plugged into existing components.
4. Build out subject #2's content following the elaboration standard above from the first draft — don't ship compressed "study note" answers and expand them later; write them at full exam length immediately, the same way the SAD Mock Paper and Past Papers were eventually corrected to be.
5. Get the user to `vercel` deploy it themselves once it's working locally (`yarn dev`).

## Working style notes for this user

- Time-pressured, real deadlines (exams the next day / same day have both already happened in this relationship) — prioritize shipping usable content fast over architectural perfection, but don't let that excuse skipping the elaboration standard above.
- Corrects package-manager and scope assumptions directly and expects them followed for the rest of the project (yarn, not npm; don't touch the old SAD kit).
- Wants to review/approve structural decisions (routing pattern, hosting) via quick questions rather than have them silently decided — keep using clarifying questions for architecture-level forks, not for routine implementation details.
