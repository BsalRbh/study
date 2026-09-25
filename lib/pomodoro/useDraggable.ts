"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";

interface Position {
  x: number;
  y: number;
}

const STORAGE_KEY = "exam-prep:pomodoro-position";
const DRAG_THRESHOLD_PX = 4;

let cachedPosition: Position | null | undefined;
const listeners = new Set<() => void>();

function readStoredPosition(): Position | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getStoredPositionSnapshot(): Position | null {
  if (cachedPosition === undefined) cachedPosition = readStoredPosition();
  return cachedPosition;
}

function getStoredPositionServerSnapshot(): Position | null {
  return null;
}

function subscribeStoredPosition(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function savePosition(pos: Position) {
  cachedPosition = pos;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pos));
  } catch {
    // in-memory cache above already holds the latest value
  }
  listeners.forEach((l) => l());
}

function clampToViewport(pos: Position, width: number, height: number): Position {
  const maxX = Math.max(0, window.innerWidth - width);
  const maxY = Math.max(0, window.innerHeight - height);
  return { x: Math.min(Math.max(pos.x, 0), maxX), y: Math.min(Math.max(pos.y, 0), maxY) };
}

// Drag a fixed-position element by its handle. Returns the current
// top-left position (or null to mean "use the CSS default corner
// position") plus pointer handlers to spread onto the drag handle, and
// whether a drag is actively in progress (so callers can suppress an
// unrelated click, e.g. the expand/collapse toggle, mid-drag).
export function useDraggable(elementRef: React.RefObject<HTMLElement | null>) {
  const storedPosition = useSyncExternalStore(
    subscribeStoredPosition,
    getStoredPositionSnapshot,
    getStoredPositionServerSnapshot
  );
  const [dragPosition, setDragPosition] = useState<Position | null>(null);
  const position = dragPosition ?? storedPosition;

  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(
    null
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      const el = elementRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      dragState.current = {
        startX: e.clientX,
        startY: e.clientY,
        originX: position?.x ?? rect.left,
        originY: position?.y ?? rect.top,
      };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [elementRef, position]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragState.current) return;
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
      if (!isDragging && Math.hypot(dx, dy) < DRAG_THRESHOLD_PX) return;
      setIsDragging(true);

      const el = elementRef.current;
      const width = el?.offsetWidth ?? 0;
      const height = el?.offsetHeight ?? 0;
      const next = clampToViewport(
        { x: dragState.current.originX + dx, y: dragState.current.originY + dy },
        width,
        height
      );
      setDragPosition(next);
    },
    [elementRef, isDragging]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (dragState.current && dragPosition) {
        savePosition(dragPosition);
      }
      dragState.current = null;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      // Deferred so a click handler firing right after pointerup can still
      // see isDragging as true and ignore the click that ended the drag.
      queueMicrotask(() => setIsDragging(false));
    },
    [dragPosition]
  );

  return {
    position,
    isDragging,
    handleProps: { onPointerDown, onPointerMove, onPointerUp },
  };
}
