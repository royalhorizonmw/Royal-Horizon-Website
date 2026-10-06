import { CampaignLink } from "../tracked-link";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogShell } from "../../blog/blog-shell";
import { getCampaigns, isActive } from "../data";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = (await getCampaigns()).find((c) => c.slug === slug);
  return c
    ? {
        title: c.title,
        description: c.summary,
        alternates: { canonical: "/campaigns/" + slug },
        openGraph: {
          title: c.title,
          description: c.summary,
          images: c.images.slice(0, 1),
        },
      }
    : { title: "Campaign not found" };
}
export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = (await getCampaigns()).find((c) => c.slug === slug);
  if (!c) notFound();
  const url = "https://www.royalhorizonmw.com/campaigns/" + c.slug;
  return (
    <BlogShell>
      <article className="mx-auto max-w-5xl px-5 py-12">
        <Link href="/campaigns" className="text-sm underline">
          ← Campaigns & updates
        </Link>
        <p className="mt-8 text-sm font-semibold text-orange-700">
          {isActive(c) ? c.category : "Past campaign"}
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">{c.title}</h1>
        <p className="mt-6 text-xl leading-relaxed">{c.summary}</p>
        {c.body.split(/\n\s*\n/).map((p, i) => (
          <p key={i} className="mt-5 leading-relaxed">
            {p}
          </p>
        ))}
        <div className="my-8 flex flex-wrap gap-3">
          <CampaignLink
            slug={c.slug}
            event="share_whatsapp"
            href={
              "https://wa.me/?text=" + encodeURIComponent(c.title + " " + url)
            }
            target="_blank"
            className="rounded-full border px-5 py-3"
          >
            Share on WhatsApp
          </CampaignLink>
          <CampaignLink
            slug={c.slug}
            event="share_facebook"
            href={
              "https://www.facebook.com/sharer/sharer.php?u=" +
              encodeURIComponent(url)
            }
            target="_blank"
            className="rounded-full border px-5 py-3"
          >
            Share on Facebook
          </CampaignLink>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {c.images.map((src, i) => (
            <figure key={src}>
              <CampaignLink
                slug={c.slug}
                event="flyer"
                href={src}
                target="_blank"
              >
                <Image
                  src={src}
                  alt={c.title + " — flyer " + (i + 1)}
                  width={1280}
                  height={1280}
                  sizes="(max-width:640px) 100vw, 50vw"
                  className="h-auto w-full rounded-2xl"
                />
              </CampaignLink>
              <figcaption className="mt-2 text-sm text-slate-600">
                Flyer {i + 1} · Select to view full size
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </BlogShell>
  );
}
