"use client";

import dynamic from "next/dynamic";

export const QuizRunnerLoader = dynamic(
  () => import("./QuizRunner").then((mod) => mod.QuizRunner),
  { ssr: false }
);
