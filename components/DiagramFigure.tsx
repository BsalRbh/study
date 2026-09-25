import { Card } from "@heroui/react";
import type { Diagram } from "@/content/types";

export function DiagramFigure({ diagram }: { diagram: Diagram }) {
  return (
    <Card className="p-4">
      <h3 className="font-medium">{diagram.title}</h3>
      <p className="mt-1 text-sm text-muted">{diagram.scenario}</p>
      <div
        className="my-4 flex justify-center text-foreground"
        dangerouslySetInnerHTML={{ __html: diagram.svg }}
      />
      {diagram.mistakes.length > 0 && (
        <Card className="border-warning bg-warning/20 p-3 text-sm text-foreground">
          <p className="mb-1 font-medium">Common mistakes</p>
          <ul className="list-inside list-disc space-y-1">
            {diagram.mistakes.map((m, i) => (
              <li key={i}>{m.text}</li>
            ))}
          </ul>
        </Card>
      )}
    </Card>
  );
}
