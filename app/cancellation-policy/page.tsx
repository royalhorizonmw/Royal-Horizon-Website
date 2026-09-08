import type { Metadata } from "next";
import { BlogShell } from "../blog/blog-shell";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "How order cancellations and refunds are handled at Royal Horizon Limited.",
};

export default function CancellationPolicyPage() {
  return (
    <BlogShell>
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Legal</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Cancellation &amp; Refund Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 8 September 2026</p>

        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-slate-700 [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-950 [&_li]:mt-2 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <p>
            This policy explains how Royal Horizon Limited (&quot;Royal
            Horizon&quot;, &quot;we&quot;, &quot;us&quot;) handles order
            cancellations and refunds for goods and services supplied to
            customers, including orders paid for online.
          </p>

          <h2>Before an order is confirmed</h2>
          <p>
            A quotation request or draft order is not a binding commitment
            on either side. You may cancel or change a quotation request at
            any time before you accept a formal quotation or purchase order
            is issued, at no cost.
          </p>

          <h2>After an order is confirmed</h2>
          <p>Once a purchase order or invoice has been formally accepted:</p>
          <ul>
            <li>
              <strong>Before goods are dispatched or work has begun:</strong>{" "}
              you may request cancellation in writing. We will confirm
              whether any costs were already committed on your behalf (e.g.
              goods ordered specifically for you from a supplier) before
              agreeing a refund.
            </li>
            <li>
              <strong>After goods have been dispatched, delivered, or work
              has begun:</strong> the order can no longer be cancelled.
              Standard returns terms (see below) apply instead.
            </li>
            <li>
              <strong>Custom, special-order, or made-to-order items</strong>{" "}
              (including goods sourced specifically for your order) cannot
              be cancelled once we have committed to the supplier on your
              behalf.
            </li>
          </ul>

          <h2>Returns</h2>
          <p>
            Goods found to be defective, damaged in transit, or not
            matching what was ordered may be returned for repair,
            replacement, or credit — report this to us within 7 days of
            delivery with photos or details of the issue. Medical
            consumables, perishable items, and goods that have been used,
            installed, or had their packaging opened cannot be returned
            unless they are faulty.
          </p>

          <h2>Refunds for online payments</h2>
          <p>
            Where payment was made online through our payment gateway
            (PayChangu), an approved refund is issued back to the original
            payment method. Processing typically takes 5–10 business days
            once approved, depending on your bank or mobile money provider
            — this final step is outside our control.
          </p>

          <h2>How to request a cancellation or refund</h2>
          <p>
            Contact us as soon as possible with your invoice or order
            number at{" "}
            <a href="mailto:royalhorizonmw@gmail.com">royalhorizonmw@gmail.com</a>{" "}
            or +265 880 273 292. We will confirm in writing whether the
            request can be accommodated and any amount refundable.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &quot;last
            updated&quot; date above reflects the most recent revision.
          </p>
        </div>
      </div>
    </BlogShell>
  );
}
