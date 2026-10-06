import { getPublicPosts } from "../blog/posts";
export type Campaign = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  images: string[];
  starts: string;
  ends: string | null;
  featured: boolean;
  theme: "brand" | "pink";
  category: string;
};
export { isActive } from "./timing";
export async function getCampaigns(): Promise<Campaign[]> {
  const posts = await getPublicPosts();
  const remote: Campaign[] = posts
    .filter(
      (p) => p.content_type === "campaign" || p.content_type === "announcement",
    )
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      summary: p.excerpt ?? "",
      body: p.body,
      images: [p.cover_image_url, ...(p.campaign?.gallery ?? [])].filter(
        (x): x is string => !!x,
      ),
      starts: p.scheduled_at ?? p.published_at ?? "1970-01-01",
      ends: p.campaign?.endsAt ?? null,
      featured: p.campaign?.featured ?? false,
      theme: p.campaign?.theme ?? "brand",
      category: p.content_type === "campaign" ? "Campaign" : "Company update",
    }));
  return remote.sort((a, b) => Date.parse(b.starts) - Date.parse(a.starts));
}
