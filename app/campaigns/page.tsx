import Image from "next/image";
import Link from "next/link";
import { BlogShell } from "../blog/blog-shell";
import { getCampaigns, isActive } from "./data";
export const metadata = {
  title: "Campaigns & Updates",
  alternates: { canonical: "/campaigns" },
};
export default async function Campaigns() {
  const campaigns = await getCampaigns();
  return (
    <BlogShell>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-semibold text-orange-700">
          Our community. Our stories.
        </p>
        <h1 className="mt-3 text-4xl font-bold">Campaigns & updates</h1>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <Link
              href={"/campaigns/" + c.slug}
              key={c.slug}
              className="overflow-hidden rounded-2xl border bg-white"
            >
              {c.images[0] && (
                <div className="relative aspect-square">
                  <Image
                    src={c.images[0]}
                    alt={c.title}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="p-5">
                <p className="text-xs font-semibold text-orange-700">
                  {isActive(c) ? c.category : "Past campaign"}
                </p>
                <h2 className="mt-2 text-xl font-bold">{c.title}</h2>
                <p className="mt-3">{c.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </BlogShell>
  );
}
