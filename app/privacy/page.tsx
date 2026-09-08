import type { Metadata } from "next";
import { BlogShell } from "../blog/blog-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Royal Horizon Limited collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <BlogShell>
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 8 September 2026</p>

        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-slate-700 [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-950 [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <p>
            Royal Horizon Limited (&quot;Royal Horizon&quot;, &quot;we&quot;, &quot;us&quot;) respects your
            privacy. This policy explains what information we collect through this
            website, why we collect it, and how it is handled.
          </p>

          <h2>Information we collect</h2>
          <p>When you use this website, we may collect:</p>
          <ul>
            <li>
              <strong>Quotation requests:</strong> your name or organisation, email
              address, phone number, business division of interest, and the
              requirements you describe, submitted through our &quot;Request a
              Quotation&quot; form.
            </li>
            <li>
              <strong>Usage data:</strong> aggregate, anonymised analytics about how
              visitors use this site (pages viewed, general location by country,
              device type). We use privacy-friendly analytics that does not use
              tracking cookies or build individual visitor profiles.
            </li>
          </ul>

          <h2>How we use your information</h2>
          <ul>
            <li>To prepare and send you the quotation you requested.</li>
            <li>To contact you about your enquiry, by email, phone, or WhatsApp.</li>
            <li>To understand how our website is used, so we can improve it.</li>
            <li>To meet legal, regulatory, or contractual obligations.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2>How we store and protect your information</h2>
          <p>
            Quotation request details are stored securely in our business systems
            and are accessible only to authorised Royal Horizon staff who need
            them to process your request. We take reasonable technical and
            organisational measures to protect your information against
            unauthorised access, loss, or misuse.
          </p>

          <h2>Sharing your information</h2>
          <p>
            We do not share your personal information with third parties except:
          </p>
          <ul>
            <li>Service providers who help us operate our business systems and communications (e.g. email delivery), bound by confidentiality obligations.</li>
            <li>Where required by law or to protect our legal rights.</li>
          </ul>

          <h2>Your rights</h2>
          <p>
            You can ask us what information we hold about you, request a
            correction, or ask us to delete it, by contacting us using the
            details below.
          </p>

          <h2>Contact us</h2>
          <p>
            For any questions about this policy or your information, contact us
            at{" "}
            <a href="mailto:royalhorizonmw@gmail.com">royalhorizonmw@gmail.com</a>{" "}
            or +265 880 273 292.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;last updated&quot;
            date above reflects the most recent revision.
          </p>
        </div>
      </div>
    </BlogShell>
  );
}
