export type PublicPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  content_type: string;
  cover_image_url: string | null;
  published_at: string | null;
  scheduled_at?: string | null;
  campaign?: {
    gallery?: string[];
    endsAt?: string | null;
    featured?: boolean;
    theme?: "brand" | "pink";
  };
};
const endpoint =
  process.env.CONTENT_API_URL ||
  "https://app.royalhorizonmw.com/api/public/posts";
export async function getPublicPosts(): Promise<PublicPost[]> {
  try {
    const response = await fetch(endpoint, { next: { revalidate: 300 } });
    if (!response.ok) return [];
    const payload = (await response.json()) as { data?: PublicPost[] };
    return payload.data ?? [];
  } catch {
    return [];
  }
}
export async function getPublicPost(slug: string): Promise<PublicPost | null> {
  try {
    const response = await fetch(
      `${endpoint}?slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } },
    );
    if (!response.ok) return null;
    const payload = (await response.json()) as { data?: PublicPost[] };
    return payload.data?.[0] ?? null;
  } catch {
    return null;
  }
}
