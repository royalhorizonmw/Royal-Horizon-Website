import Image from "next/image";
import Link from "next/link";
import type { Campaign } from "./data";
export function CampaignFeature({
  campaign,
  updates,
}: {
  campaign: Campaign | null;
  updates: Campaign[];
}) {
  return (
    <section
      aria-label="Campaigns and updates"
      className="mx-auto max-w-7xl px-5 py-8 sm:px-8"
    >
      {campaign && (
        <div
          className={
            "grid overflow-hidden rounded-3xl border md:grid-cols-2 " +
            (campaign.theme === "pink"
              ? "border-pink-200 bg-pink-50 text-slate-900"
              : "border-orange-200 bg-orange-50 text-slate-900")
          }
        >
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest">
              Royal Horizon • {campaign.category}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              {campaign.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed">{campaign.summary}</p>

          </div>
          {campaign.images[0] && (
            <Link
              href={"/campaigns/" + campaign.slug}
              className="relative block aspect-square"
            >
              <Image
                src={campaign.images[0]}
                alt={campaign.title + " — campaign flyer"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </Link>
          )}
        </div>
      )}
{updates.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {updates.map((c) => (
            <p key={c.slug} className="text-sm text-slate-600">{c.title}</p>
          ))}
        </div>
      )}
    </section>
  );
}
