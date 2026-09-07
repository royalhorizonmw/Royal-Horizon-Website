import type { MetadataRoute } from "next";

import { getPublicPosts } from "./blog/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublicPosts();
  return [
    {
      url: "https://www.royalhorizonmw.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: "https://www.royalhorizonmw.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({ url: `https://www.royalhorizonmw.com/blog/${post.slug}`, lastModified: post.published_at ? new Date(post.published_at) : new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
