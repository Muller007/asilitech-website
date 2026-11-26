export type PublishedContent = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  body: string | null;
  content_type: string;
  published_at: string | null;
  updated_at: string;
};

const selectFields =
  "id,slug,title,summary,body,content_type,published_at,updated_at";

/**
 * Reads only content that has explicitly been published for public viewing.
 * The anonymous key is safe for browser/public use because Supabase RLS
 * restricts anonymous SELECT access to published + public rows.
 */
export async function getPublishedContent(): Promise<PublishedContent[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !anonKey) return [];

  const endpoint = new URL(
    `${supabaseUrl.replace(/\\/$/, "")}/rest/v1/public_content`,
  );
  endpoint.searchParams.set("select", selectFields);
  endpoint.searchParams.set("status", "eq.published");
  endpoint.searchParams.set("visibility", "eq.public");
  endpoint.searchParams.set("order", "published_at.desc");

  try {
    const response = await fetch(endpoint.toString(), {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) return [];
    return (await response.json()) as PublishedContent[];
  } catch {
    // Keep the public website available if the CMS is temporarily unreachable.
    return [];
  }
}
