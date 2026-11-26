import Link from "next/link";
import { getPublishedContent } from "@/lib/content";

export const metadata = {
  title: "Updates | Asili Tech",
  description: "Published news, research notes and progress from Asili Tech.",
};

export default async function UpdatesPage() {
  const items = await getPublishedContent();

  return (
    <div>
      <section className="bg-asili-dark py-16 text-white md:py-20">
        <div className="section-container max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-asili-gold">
            ASILI TECH · LATEST
          </p>
          <h1 className="mb-4 text-white">Updates and publications</h1>
          <p className="text-lg text-gray-100">
            Public notes, announcements, research updates and milestones shared by Asili Tech.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        {items.length === 0 ? (
          <div className="card">
            <h2 className="mb-3">No updates published yet</h2>
            <p className="text-gray-600">
              New public updates will appear here when they have been reviewed and published.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <article className="card" key={item.id}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-asili-green">
                  {item.content_type.replace(/_/g, " ")}
                  {item.published_at && (
                    <> · {new Date(item.published_at).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}</>
                  )}
                </p>
                <h2 className="mb-3 text-2xl">{item.title}</h2>
                {item.summary && <p className="mb-5 text-gray-600">{item.summary}</p>}
                <Link
                  href={`/updates/${encodeURIComponent(item.slug)}`}
                  className="font-semibold text-asili-green hover:text-asili-gold"
                >
                  Read update →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
