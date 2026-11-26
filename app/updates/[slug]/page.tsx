import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedContent } from "@/lib/content";
import MarkdownContent from "@/components/markdown-content";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const items = await getPublishedContent();
  const item = items.find((entry) => entry.slug === params.slug);

  if (!item) return { title: "Update not found | Asili Tech" };

  return {
    title: `${item.title} | Asili Tech`,
    description: item.summary || "An update from Asili Tech.",
  };
}

export default async function UpdateDetailPage({ params }: Props) {
  const items = await getPublishedContent();
  const item = items.find((entry) => entry.slug === params.slug);

  if (!item) notFound();

  return (
    <article className="section-container max-w-3xl py-14 md:py-20">
      <Link href="/updates" className="mb-8 inline-block font-semibold text-asili-green hover:text-asili-gold">
        ← All updates
      </Link>
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-asili-green">
        {item.content_type.replace(/_/g, " ")}
        {item.published_at && (
          <> · {new Date(item.published_at).toLocaleDateString("en-ZA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}</>
        )}
      </p>
      <h1 className="mb-6">{item.title}</h1>
      {item.summary && <p className="mb-8 text-xl leading-relaxed text-gray-600">{item.summary}</p>}
      {item.body ? (
        <MarkdownContent content={item.body} />
      ) : (
        <p className="text-gray-600">This update does not have a full article body.</p>
      )}
    </article>
  );
}
