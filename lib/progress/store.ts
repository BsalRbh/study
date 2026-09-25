import { createEmptyProgress, type SubjectProgress } from "./types";

export interface ProgressStore {
  load(subjectId: string): SubjectProgress;
  save(subjectId: string, progress: SubjectProgress): void;
  subscribe(subjectId: string, callback: () => void): () => void;
}

function storageKey(subjectId: string): string {
  return `exam-prep:progress:${subjectId}`;
}

class LocalStorageProgressStore implements ProgressStore {
  // useSyncExternalStore requires getSnapshot() to return a referentially
  // stable value between calls unless the underlying data actually changed —
  // this cache is what makes that true, since JSON.parse would otherwise
  // allocate a new object every read.
  private cache = new Map<string, SubjectProgress>();
  private emitter = typeof EventTarget !== "undefined" ? new EventTarget() : null;

  private readFromStorage(subjectId: string): SubjectProgress {
    try {
      const raw = window.localStorage.getItem(storageKey(subjectId));
      if (!raw) return createEmptyProgress(subjectId);
      return { ...createEmptyProgress(subjectId), ...JSON.parse(raw) };
    } catch {
      return createEmptyProgress(subjectId);
    }
  }

  load(subjectId: string): SubjectProgress {
    const cached = this.cache.get(subjectId);
    if (cached) return cached;
    const loaded = this.readFromStorage(subjectId);
    this.cache.set(subjectId, loaded);
    return loaded;
  }

  save(subjectId: string, progress: SubjectProgress): void {
    this.cache.set(subjectId, progress);
    try {
      window.localStorage.setItem(storageKey(subjectId), JSON.stringify(progress));
    } catch {
      // in-memory cache above already holds the latest value
    }
    this.emitter?.dispatchEvent(new CustomEvent(subjectId));
  }

  subscribe(subjectId: string, callback: () => void): () => void {
    const onStorage = (e: StorageEvent) => {
      if (e.key === storageKey(subjectId)) {
        this.cache.delete(subjectId);
        callback();
      }
    };
    const onLocal = () => callback();

    window.addEventListener("storage", onStorage);
    this.emitter?.addEventListener(subjectId, onLocal);

    return () => {
      window.removeEventListener("storage", onStorage);
      this.emitter?.removeEventListener(subjectId, onLocal);
    };
  }
}

export const progressStore: ProgressStore = new LocalStorageProgressStore();
