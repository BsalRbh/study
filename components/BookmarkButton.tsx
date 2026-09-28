"use client";

import { Button } from "@heroui/react";

export function BookmarkButton({
  bookmarked,
  onToggle,
}: {
  bookmarked: boolean;
  onToggle: () => void;
}) {
  return (
    <Button
      variant="ghost"
      size="lg"
      isIconOnly
      onPress={onToggle}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      className={`min-h-11 min-w-11 ${bookmarked ? "text-warning" : "text-muted"}`}
    >
      {bookmarked ? "★" : "☆"}
    </Button>
  );
}
