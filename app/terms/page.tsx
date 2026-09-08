import type { Metadata } from "next";
import { BlogShell } from "../blog/blog-shell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for the Royal Horizon Limited website.",
};

export default function TermsPage() {
  return (
    <BlogShell>
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 8 September 2026</p>

        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-slate-700 [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-950 [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <p>
            These terms govern your use of this website
            (royalhorizonmw.com), operated by Royal Horizon Limited
            (&quot;Royal Horizon&quot;, &quot;we&quot;, &quot;us&quot;), a company registered in
            Malawi. By using this website, you agree to these terms.
          </p>

          <h2>About the information on this site</h2>
          <p>
            Content on this website — including descriptions of our
            products, services, and divisions — is provided for general
            information purposes. It does not constitute a binding offer.
            Formal quotations, pricing, and terms of supply are issued
            separately as official documents once we have reviewed your
            specific requirements.
          </p>

          <h2>Requesting a quotation</h2>
          <p>
            When you submit a quotation request through this site, you
            confirm that the information you provide is accurate and that
            you are authorised to make the request on behalf of yourself or
            your organisation. Submitting a request does not create a
            contract between you and Royal Horizon — a contract is formed
            only once a formal quotation or purchase order is accepted in
            writing by both parties.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The content, design, logos, and branding on this website belong
            to Royal Horizon Limited or its licensors and may not be
            reproduced, distributed, or used without our prior written
            permission, except for your own reference in evaluating our
            services.
          </p>

          <h2>Third-party links</h2>
          <p>
            This site may link to third-party websites. We are not
            responsible for the content, accuracy, or practices of any
            third-party site.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            While we take care to keep information on this site accurate and
            up to date, we make no warranties about its completeness or
            accuracy, and we are not liable for any loss arising from your
            use of this website. This does not limit any liability that
            cannot be excluded under Malawian law.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the Republic of Malawi.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:royalhorizonmw@gmail.com">royalhorizonmw@gmail.com</a>{" "}
            or +265 880 273 292.
          </p>
        </div>
      </div>
    </BlogShell>
  );
}
