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
      size="sm"
      isIconOnly
      onPress={onToggle}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
      className={bookmarked ? "text-warning" : "text-muted"}
    >
      {bookmarked ? "★" : "☆"}
    </Button>
  );
}
