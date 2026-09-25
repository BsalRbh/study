"use client";

import { createContext, useContext } from "react";
import { progressStore, type ProgressStore } from "./store";

const ProgressStoreContext = createContext<ProgressStore>(progressStore);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <ProgressStoreContext.Provider value={progressStore}>
      {children}
    </ProgressStoreContext.Provider>
  );
}

export function useProgressStore(): ProgressStore {
  return useContext(ProgressStoreContext);
}
