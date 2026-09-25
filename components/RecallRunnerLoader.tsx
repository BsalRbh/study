"use client";

import dynamic from "next/dynamic";

export const RecallRunnerLoader = dynamic(
  () => import("./RecallRunner").then((mod) => mod.RecallRunner),
  { ssr: false }
);
