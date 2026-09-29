import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// react-markdown passes its AST `node`; keep it off the DOM element.
function omitNode<T extends { node?: unknown }>(props: T) {
  const { node, ...rest } = props;
  void node;
  return rest;
}

const BLOCK_COMPONENTS: Components = {
  p: (props) => <p className="mt-3 first:mt-0" {...omitNode(props)} />,
  ol: (props) => (
    <ol className="mt-3 list-decimal space-y-1.5 pl-6 marker:font-medium marker:text-accent" {...omitNode(props)} />
  ),
  ul: (props) => (
    <ul className="mt-3 list-disc space-y-1.5 pl-6 marker:text-accent" {...omitNode(props)} />
  ),
  li: (props) => <li className="pl-1" {...omitNode(props)} />,
  strong: (props) => (
    <strong
      className="font-semibold text-foreground underline decoration-accent/40 decoration-2 underline-offset-[3px]"
      {...omitNode(props)}
    />
  ),
  h3: (props) => <h3 className="mt-5 font-semibold text-foreground" {...omitNode(props)} />,
  h4: (props) => <h4 className="mt-4 font-medium text-foreground" {...omitNode(props)} />,
  blockquote: (props) => (
    <blockquote className="mt-3 border-l-2 border-accent/50 pl-3 text-muted" {...omitNode(props)} />
  ),
  code: (props) => (
    <code className="rounded bg-surface-secondary px-1 py-0.5 font-mono text-[0.9em]" {...omitNode(props)} />
  ),
  table: (props) => (
    <div className="mt-2 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...omitNode(props)} />
    </div>
  ),
  th: (props) => (
    <th className="border border-border bg-surface-secondary px-2 py-1 text-left font-medium" {...omitNode(props)} />
  ),
  td: (props) => <td className="border border-border px-2 py-1" {...omitNode(props)} />,
};

// Inline mode drops the <p> wrapper so text can sit inside buttons, <li>, headings.
const INLINE_COMPONENTS: Components = {
  ...BLOCK_COMPONENTS,
  p: ({ children }) => <>{children}</>,
  strong: (props) => <strong className="font-semibold" {...omitNode(props)} />,
};

export function MathText({ text, inline = false }: { text: string; inline?: boolean }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={inline ? INLINE_COMPONENTS : BLOCK_COMPONENTS}
    >
      {text}
    </ReactMarkdown>
  );
}
