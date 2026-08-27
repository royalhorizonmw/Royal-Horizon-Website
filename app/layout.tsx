import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.royalhorizonmw.com"),
  title: {
    default: "Institutional Supply & Solutions Malawi | Royal Horizon",
    template: "%s | Royal Horizon Limited",
  },
  description:
    "Royal Horizon supplies medical, laboratory, ICT, solar, industrial and general procurement solutions to institutions across Malawi. Request a quotation.",
  keywords: [
    "institutional suppliers Malawi",
    "medical supplies Malawi",
    "laboratory equipment Malawi",
    "ICT suppliers Lilongwe",
    "solar solutions Malawi",
    "general procurement Malawi",
    "Royal Horizon Limited",
  ],
  authors: [{ name: "Royal Horizon Limited" }],
  creator: "Royal Horizon Limited",
  publisher: "Royal Horizon Limited",
  category: "Institutional supply and procurement",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_MW",
    url: "/",
    siteName: "Royal Horizon Limited",
    title: "Institutional Supply & Solutions Across Malawi",
    description:
      "Dependable medical, laboratory, ICT, solar, industrial and general supply solutions for organisations across Malawi.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Royal Horizon Limited — Supplying Solutions, Building Success.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Institutional Supply & Solutions Across Malawi",
    description:
      "Dependable procurement, technology and infrastructure solutions from Royal Horizon Limited.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.royalhorizonmw.com/#organization",
  name: "Royal Horizon Limited",
  url: "https://www.royalhorizonmw.com",
  logo: "https://www.royalhorizonmw.com/rh-logo-orange-cropped.png",
  description:
    "A Malawian integrated solutions company providing medical, laboratory, ICT, solar, industrial and general institutional supplies.",
  slogan: "Supplying Solutions, Building Success.",
  telephone: "+265880273292",
  email: "royalhorizonmw@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Synergy CoWorks, Plot 526 Songwe Street, New Area 12",
    addressLocality: "Lilongwe",
    addressCountry: "MW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -13.9551086711604,
    longitude: 33.815891197177606,
  },
  areaServed: {
    "@type": "Country",
    name: "Malawi",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+265880273292",
    contactType: "sales",
    areaServed: "MW",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
