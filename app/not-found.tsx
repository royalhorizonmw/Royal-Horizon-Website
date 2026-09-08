import Link from "next/link";
import type { Metadata } from "next";
import { BlogShell } from "./blog/blog-shell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <BlogShell>
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-base text-slate-600">
          The page you&apos;re looking for may have moved or no longer
          exists. Head back home or get in touch and we&apos;ll point you in
          the right direction.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-orange-600 hover:to-orange-700"
          >
            Back to homepage
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-300"
          >
            Visit our insights
          </Link>
        </div>
      </div>
    </BlogShell>
  );
}
