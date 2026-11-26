import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_|\x60[^\x60]+\x60|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern).filter(Boolean);

  return parts.map((part, index) => {
    if ((part.startsWith("**") && part.endsWith("**")) || (part.startsWith("__") && part.endsWith("__"))) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if ((part.startsWith("*") && part.endsWith("*")) || (part.startsWith("_") && part.endsWith("_"))) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer" className="font-medium text-asili-green underline underline-offset-2 hover:text-asili-gold">{link[1]}</a>;
    }
    return part;
  });
}

/** Render the Markdown subset used by Asili Tech's published research and updates. Raw HTML is intentionally not interpreted. */
export default function MarkdownContent({ content }: { content: string }) {
  const lines = content.replace(/\r\n?/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++]);
      if (i < lines.length) i++;
      blocks.push(<pre key={blocks.length} className="overflow-x-auto rounded-xl bg-gray-900 p-4 text-sm text-gray-100"><code>{code.join("\n")}</code></pre>);
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const className = level === 1 ? "text-3xl font-bold text-asili-dark" : level === 2 ? "text-2xl font-bold text-asili-dark" : level === 3 ? "text-xl font-semibold text-asili-dark" : "text-lg font-semibold text-asili-dark";
      const children = inline(heading[2]);
      if (level === 1) blocks.push(<h1 key={blocks.length} className={className}>{children}</h1>);
      else if (level === 2) blocks.push(<h2 key={blocks.length} className={className}>{children}</h2>);
      else if (level === 3) blocks.push(<h3 key={blocks.length} className={className}>{children}</h3>);
      else blocks.push(<h4 key={blocks.length} className={className}>{children}</h4>);
      i++;
      continue;
    }

    if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) {
      blocks.push(<hr key={blocks.length} className="border-gray-200" />);
      i++;
      continue;
    }

    if (/^\s*>/.test(line)) {
      const quote: string[] = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) quote.push(lines[i++].replace(/^\s*>\s?/, ""));
      blocks.push(<blockquote key={blocks.length} className="border-l-4 border-asili-gold pl-5 italic text-gray-600">{quote.map((entry, n) => <p key={n}>{inline(entry)}</p>)}</blockquote>);
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const entries: string[] = [];
      while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) entries.push(lines[i++].replace(/^\s*[-*+]\s+/, ""));
      blocks.push(<ul key={blocks.length} className="list-disc space-y-2 pl-6">{entries.map((entry, n) => <li key={n}>{inline(entry)}</li>)}</ul>);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const entries: string[] = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) entries.push(lines[i++].replace(/^\s*\d+\.\s+/, ""));
      blocks.push(<ol key={blocks.length} className="list-decimal space-y-2 pl-6">{entries.map((entry, n) => <li key={n}>{inline(entry)}</li>)}</ol>);
      continue;
    }

    const paragraph = [line.trim()];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|\s*[-*+]\s+|\s*\d+\.\s+|\s*>|```|\s*(---|\*\*\*|___)\s*$)/.test(lines[i])) {
      paragraph.push(lines[i++].trim());
    }
    blocks.push(<p key={blocks.length}>{inline(paragraph.join(" "))}</p>);
  }

  return <div className="space-y-5 leading-8 text-gray-700">{blocks}</div>;
}
