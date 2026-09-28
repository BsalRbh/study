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
  p: (props) => <p className="mt-2 first:mt-0" {...omitNode(props)} />,
  ol: (props) => <ol className="mt-2 list-decimal space-y-1 pl-5" {...omitNode(props)} />,
  ul: (props) => <ul className="mt-2 list-disc space-y-1 pl-5" {...omitNode(props)} />,
  strong: (props) => <strong className="font-medium" {...omitNode(props)} />,
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
