"use client";

import React, { type FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { jsPDF } from "jspdf";
import {
  Menu,
  X,
  Moon,
  Stethoscope,
  Laptop,
  Sun,
  Package,
  HardHat,
  Wrench,
  Printer,
  Cpu,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  ArrowUpRight,
  Building2,
  FileText,
  Download,
  LogIn,
} from "lucide-react";

type QuotePreview = {
  name: string;
  email: string;
  phone: string;
  division: string;
  requirements: string;
};

export type PublicPost = { id:string; title:string; slug:string; excerpt:string|null; body:string; content_type:string; cover_image_url:string|null; published_at:string|null };

export default function Home({ posts = [] }: { posts?: PublicPost[] }) {
  const portalUrl =
    process.env.NEXT_PUBLIC_BUSINESS_PORTAL_URL ??
    "https://app.royalhorizonmw.com/login";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreview, setQuotePreview] = useState<QuotePreview | null>(null);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setQuotePreview({
      name: String(data.name || ""),
      email: String(data.email || ""),
      phone: String(data.phone || ""),
      division: String(data.division || ""),
      requirements: String(data.requirements || ""),
    });
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuotePreview(null);
  };

  const downloadQuoteAndOpenWhatsApp = () => {
    if (!quotePreview) return;

    const document = new jsPDF();
    const orange = [255, 90, 31] as const;
    const ash = [71, 85, 105] as const;

    document.setFillColor(...orange);
    document.rect(0, 0, 210, 12, "F");
    document.setTextColor(...ash);
    document.setFont("helvetica", "bold");
    document.setFontSize(18);
    document.text("ROYAL HORIZON LIMITED", 18, 28);
    document.setFontSize(11);
    document.setFont("helvetica", "normal");
    document.text("Quotation Request Brief", 18, 36);
    document.setDrawColor(226, 232, 240);
    document.line(18, 43, 192, 43);

    const fields = [
      ["Name / organisation", quotePreview.name],
      ["Email", quotePreview.email],
      ["Phone", quotePreview.phone],
      ["Primary service line", quotePreview.division],
      ["Prepared", new Date().toLocaleDateString("en-MW")],
    ];
    let y = 55;
    for (const [label, value] of fields) {
      document.setFont("helvetica", "bold");
      document.setFontSize(9);
      document.setTextColor(...orange);
      document.text(label.toUpperCase(), 18, y);
      document.setFont("helvetica", "normal");
      document.setFontSize(11);
      document.setTextColor(...ash);
      document.text(value, 18, y + 6);
      y += 18;
    }

    document.setFont("helvetica", "bold");
    document.setFontSize(9);
    document.setTextColor(...orange);
    document.text("SPECIFICATIONS & QUANTITIES", 18, y + 2);
    document.setFont("helvetica", "normal");
    document.setFontSize(11);
    document.setTextColor(...ash);
    const requirementLines = document.splitTextToSize(quotePreview.requirements, 174) as string[];
    let requirementY = y + 10;
    for (const line of requirementLines) {
      if (requirementY > 272) {
        document.addPage();
        requirementY = 24;
      }
      document.text(line, 18, requirementY);
      requirementY += 6;
    }
    const pageCount = document.getNumberOfPages();
    for (let page = 1; page <= pageCount; page += 1) {
      document.setPage(page);
      document.setFontSize(8);
      document.setTextColor(100, 116, 139);
      document.text("This document is a customer request brief and not a priced quotation.", 18, 282);
      document.text(`Royal Horizon Limited · +265 880 273 292 · Page ${page} of ${pageCount}`, 18, 288);
    }

    const safeName = quotePreview.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "customer";
    document.save(`royal-horizon-rfq-${safeName}.pdf`);

    const message = [
      "Hello Royal Horizon Limited,",
      "",
      "I would like to request a quotation.",
      `Name / organisation: ${quotePreview.name}`,
      `Email: ${quotePreview.email}`,
      `Phone: ${quotePreview.phone}`,
      `Service line: ${quotePreview.division}`,
      `Requirements: ${quotePreview.requirements}`,
      "",
      "I have downloaded the Royal Horizon RFQ brief and will attach it to this chat.",
    ].join("\n");

    window.open(`https://wa.me/265880273292?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const divisions = [
    {
      number: "01",
      icon: Package,
      title: "Royal Horizon Supply",
      text: "Healthcare and industrial/general procurement for hospitals, institutions, and businesses across Malawi.",
      lines: [
        {
          icon: Stethoscope,
          title: "Healthcare",
          text: "Medical equipment, laboratory systems, diagnostics, consumables, and healthcare solutions.",
        },
        {
          icon: HardHat,
          title: "Industrial & General Supply",
          text: "Safety PPE, technical equipment, heavy tools, machinery, office supplies, and project procurement.",
        },
      ],
    },
    {
      number: "02",
      icon: Laptop,
      title: "Royal Horizon Solutions",
      text: "ICT, commercial printing, facilities, and energy solutions that keep institutions running.",
      lines: [
        {
          icon: Cpu,
          title: "ICT",
          text: "Computers, networking infrastructure, enterprise peripherals, and institutional ICT solutions.",
        },
        {
          icon: Printer,
          title: "Commercial Printing",
          text: "Branding, signage, stationery, and large-format print production for institutional clients.",
        },
        {
          icon: Wrench,
          title: "Facilities",
          text: "Facility equipment, structural maintenance support, and technical service solutions.",
        },
        {
          icon: Sun,
          title: "Energy",
          text: "Solar systems, commercial backup power, renewable energy equipment, and installation support.",
        },
      ],
    },
  ];

  const institutionTypes = [
    ["HC", "Hospitals & Clinics"],
    ["GI", "Government Institutions"],
    ["NP", "NGOs & Programmes"],
    ["RO", "Research Organisations"],
    ["BB", "Banks & Businesses"],
    ["IO", "International Organisations"],
  ];

  const defaultInsights = [
    {
      category: "Healthcare Supply",
      title: "A practical guide to planning institutional medical supply orders",
      summary: "How better specifications, lead-time planning, and delivery checks reduce procurement risk.",
      image: "/insight-medical-supply.png",
      alt: "A Malawian healthcare and procurement team checking delivered medical supplies",
      href: "/blog",
    },
    {
      category: "ICT Infrastructure",
      title: "Building dependable ICT environments for growing organisations",
      summary: "The essentials behind resilient networks, compatible equipment, and long-term support.",
      image: "/insight-ict-deployment.png",
      alt: "Malawian technology professionals deploying institutional ICT equipment",
      href: "/blog",
    },
    {
      category: "Renewable Energy",
      title: "What institutions should assess before investing in solar power",
      summary: "A clear starting point for sizing, installation planning, maintenance, and continuity.",
      image: "/insight-solar-project.png",
      alt: "Engineers inspecting solar panels at an institutional facility in Malawi",
      href: "/blog",
    },
  ];
  const insights = posts.length ? posts.map((post, index) => ({
    category: post.content_type.replaceAll("_", " "),
    title: post.title,
    summary: post.excerpt || post.body.slice(0, 150),
    image: post.cover_image_url || ["/insight-medical-supply.png","/insight-ict-deployment.png","/insight-solar-project.png"][index % 3],
    alt: post.title,
    href: `/blog/${post.slug}`,
  })) : defaultInsights;

  const showcaseColumns = [
    [
      { image: "/hero-team-office.png", label: "Client support", alt: "Royal Horizon team member supporting an institutional client" },
      { image: "/insight-medical-supply.png", label: "Healthcare supply", alt: "Medical supplies prepared for institutional delivery" },
      { image: "/hero-team-medical.png", label: "Medical expertise", alt: "Royal Horizon medical supply specialist" },
    ],
    [
      { image: "/insight-ict-deployment.png", label: "ICT environments", alt: "Technology equipment deployed for an organisation" },
      { image: "/hero-team-solar.png", label: "Field delivery", alt: "Royal Horizon solar field engineer" },
      { image: "/insight-solar-project.png", label: "Energy projects", alt: "Solar installation at an institutional environment" },
    ],
  ];

  return (
    <main className="rh-site min-h-screen bg-white font-sans text-stone-800 selection:bg-orange-500 selection:text-white dark:bg-slate-900 dark:text-slate-100">
      {/* Top Bar Contacts */}
      <div className="hidden border-b border-slate-100 bg-white lg:block dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-8 py-2.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          <a
            href="tel:+265880273292"
            className="flex items-center gap-2 transition hover:text-orange-600"
          >
            <Phone className="h-3.5 w-3.5 text-orange-600" /> +265 880 273 292
          </a>
          <a
            href="mailto:royalhorizonmw@gmail.com"
            className="flex items-center gap-2 transition hover:text-orange-600"
          >
            <Mail className="h-3.5 w-3.5 text-orange-600" /> royalhorizonmw@gmail.com
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-white/88 text-stone-700 shadow-[0_10px_35px_rgba(71,54,43,0.05)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#home" className="group block" aria-label="Royal Horizon Limited home">
            <span className="block h-7 w-7 overflow-hidden transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
              <Image
                src="/rh-logo-orange-cropped.png"
                alt=""
                width={2440}
                height={991}
                priority
                sizes="56px"
                className="h-7 w-auto max-w-none"
              />
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
            >
              About Us
            </a>
            <a
              href="#solutions"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Divisions & Services
            </a>
            <a
              href="#rates"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Rates
            </a>
            <a
              href="#insights"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Insights
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
            >
              Contact & RFQ
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-orange-600 active:scale-90 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-orange-400"
            >
              <Moon className="h-4 w-4 dark:hidden" />
              <Sun className="hidden h-4 w-4 dark:block" />
            </button>
            <a
              href={portalUrl}
              className="inline-flex items-center gap-2 rounded-full bg-stone-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-600 hover:shadow-md active:translate-y-0 active:scale-[0.97] active:bg-stone-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:active:bg-slate-800"
            >
              <LogIn className="h-4 w-4" /> Login
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="rounded-full border border-orange-200 bg-orange-50/70 px-5 py-2 text-sm font-bold text-orange-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-100 active:translate-y-0 active:scale-[0.97] active:bg-orange-200/70 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300 dark:hover:bg-orange-500/20 dark:active:bg-orange-500/25"
            >
              Request Quote
            </button>
          </nav>

          {/* Mobile theme toggle + menu button */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 active:scale-90 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700"
            >
              <Moon size={22} className="dark:hidden" />
              <Sun size={22} className="hidden dark:block" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 active:scale-90 active:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-800 dark:active:bg-slate-700"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="border-b border-slate-100 bg-white px-6 py-6 md:hidden shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                About Us
              </a>
              <a
                href="#solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                Divisions & Services
              </a>
              <a
                href="#rates"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                Rates
              </a>
              <a
                href="#insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                Contact & RFQ
              </a>
              <a
                href={portalUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
              >
                <LogIn className="h-4 w-4" /> Business Portal Login
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition active:scale-[0.97] active:shadow-sm"
              >
                Request Quote
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="rh-hero relative overflow-hidden px-3 pb-3 pt-0 sm:px-5 sm:pb-5">
        <div className="rh-orb rh-orb-one" aria-hidden="true" />
        <div className="rh-orb rh-orb-two" aria-hidden="true" />
        <div className="rh-hero-panel relative mx-auto max-w-[1500px] overflow-hidden rounded-b-[1.75rem] border border-stone-200/80 bg-white/90 py-12 sm:rounded-b-[2.5rem] sm:py-16 lg:py-28 dark:border-slate-700/70 dark:bg-slate-900/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            
            {/* Left Content */}
            <div className="rh-reveal relative z-20 lg:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-stone-500 backdrop-blur dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-slate-300">
                Malawi&apos;s Premier Integrated Partner
              </div>

              <h1 className="text-[clamp(2.65rem,12vw,5.25rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-slate-800 lg:leading-[0.98] dark:text-white">
                Excellence in{" "}
                <span className="text-orange-500">
                  Supply
                </span>{" "}
                & Advanced{" "}
                <span className="text-slate-500 dark:text-slate-400">Solutions</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Powering hospitals, NGOs, government institutions, and corporate
                leaders across Malawi with uncompromising quality, cutting-edge ICT,
                solar power, and trusted procurement heritage.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solutions"
                  className="rounded-full bg-[#74787e] px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-[#64686e] active:scale-[0.97] active:bg-[#5a5e63]"
                >
                  Explore Divisions
                </a>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-center text-sm font-bold text-slate-600 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white active:scale-[0.97] active:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:active:bg-slate-700"
                >
                  Submit Tender / RFQ
                </button>

                <a
                  href={portalUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-8 py-4 text-center text-sm font-bold text-orange-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-orange-100 active:translate-y-0 active:scale-[0.97] active:bg-orange-200/70 dark:border-orange-500/30 dark:bg-orange-500/10 dark:text-orange-300 dark:hover:bg-orange-500/20 dark:active:bg-orange-500/25"
                >
                  <LogIn className="h-4 w-4" /> Portal Login
                </a>
              </div>
            </div>

            {/* PayChangu-inspired layered Royal Horizon character stage */}
            <div className="rh-reveal rh-delay relative lg:col-span-6 lg:-mr-10">
              <div className="rh-float-card absolute left-1 top-10 z-30 rounded-2xl border border-white/30 bg-stone-700/95 p-3 text-white shadow-2xl backdrop-blur sm:-left-4 sm:top-16 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-200">Royal Horizon</p>
                <p className="mt-1 text-lg font-black">Ready to help</p>
              </div>
              <div className="rh-character-stage relative h-[25rem] min-[430px]:h-[30rem] sm:h-[38rem]">
                <div className="rh-character relative z-10 h-full w-full">
                  <Image src="/brand/royal-horizon-character.png" alt="Smiling Royal Horizon character wearing the branded orange shirt and pointing forward" fill priority sizes="(max-width: 1024px) 92vw, 620px" className="object-contain object-bottom drop-shadow-[0_28px_35px_rgba(71,54,43,0.22)]" />
                </div>
                <div className="rh-service-chip absolute right-2 top-10 z-20 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-bold text-stone-700 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-800/90 dark:text-slate-100">Medical supply</div>
                <div className="rh-service-chip rh-service-chip-delay absolute bottom-28 left-0 z-20 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-bold text-stone-700 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-800/90 dark:text-slate-100">ICT solutions</div>
                <div className="rh-service-chip rh-service-chip-late absolute bottom-12 right-4 z-20 rounded-full border border-orange-200 bg-orange-50/95 px-4 py-2 text-xs font-bold text-orange-700 shadow-lg backdrop-blur dark:border-orange-500/30 dark:bg-orange-500/15 dark:text-orange-300">Solar & energy</div>
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* Institutional Client Base */}
      <section aria-labelledby="client-base-title" className="rh-scroll border-y border-slate-100 bg-white py-14 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Who we serve</span>
          <h2 id="client-base-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Supporting institutions across Malawi.
          </h2>
        </div>
        <div className="rh-logo-marquee mt-9 space-y-3" aria-label="Institution types Royal Horizon serves">
          {[0, 1].map((row) => (
            <div key={row} className={`rh-logo-track ${row === 1 ? "rh-logo-track-slow" : ""}`}>
              {[...institutionTypes, ...institutionTypes].map(([initials, name], index) => (
                <div key={`${row}-${name}-${index}`} className="rh-institution-logo" aria-hidden={index >= institutionTypes.length}>
                  <span className="rh-institution-mark"><Building2 className="h-4 w-4" />{initials}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-5xl px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Trusted by</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {[
              { src: "/clients/cmst.png", alt: "Central Medical Stores Trust (CMST)", width: 90, height: 89 },
              { src: "/clients/agcom.png", alt: "Agricultural Commercialisation Project (AGCOM)", width: 90, height: 80 },
              { src: "/clients/sffrfm.png", alt: "Smallholder Farmers Fertilizer Revolving Fund of Malawi (SFFRFM)", width: 150, height: 29 },
              { src: "/clients/fobs-scientific.png", alt: "FOBs Scientific Limited", width: 90, height: 90 },
            ].map((client) => (
              <Image
                key={client.src}
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
                className="h-12 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Digital product showcase */}
      <section className="rh-scroll rh-textured-section py-16 sm:py-24" aria-labelledby="business-os-title">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:gap-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Royal Horizon Business OS</span>
            <h2 id="business-os-title" className="mt-3 text-3xl font-extrabold text-stone-900 sm:text-5xl dark:text-white">Your operations, connected on every screen.</h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-slate-300">Manage customers, quotations, orders, inventory, finance and projects from one secure workspace designed around how Royal Horizon works.</p>
            <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold text-stone-600 dark:text-slate-300">
              {['Sales & CRM', 'Inventory', 'Finance', 'Projects'].map((item) => <span key={item} className="rounded-full border border-stone-200 bg-white/85 px-3 py-2 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/60">{item}</span>)}
            </div>
            <a href={portalUrl} className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 active:translate-y-0 active:scale-[0.97] active:bg-orange-700">Open Business OS <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          <div className="rh-device-scene relative aspect-[3/2] w-full" aria-label="Business OS shown on a realistic laptop and mobile phone">
            <Image src="/brand/business-os-devices-transparent.png" alt="The real Royal Horizon Business OS Command Center displayed on a premium laptop and smartphone" fill sizes="(max-width: 640px) 94vw, (max-width: 1024px) 88vw, 720px" className="object-contain" />
          </div>
        </div>
      </section>

      {/* Moving people story */}
      <section className="rh-scroll overflow-hidden bg-white py-16 sm:py-24 dark:bg-slate-900" aria-labelledby="people-title">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="order-2 lg:order-1">
            <div className="rh-people-stage grid h-[25rem] grid-cols-2 gap-2 overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-100 p-2 shadow-xl sm:h-[32rem] sm:gap-3 sm:rounded-[2.25rem] sm:p-3 dark:border-slate-700 dark:bg-slate-800">
              {showcaseColumns.map((column, columnIndex) => (
                <div key={columnIndex} className={`rh-people-column ${columnIndex === 0 ? "rh-people-column-up" : "rh-people-column-down"} flex flex-col gap-3`}>
                  {column.map((item, index) => (
                    <div key={`${item.image}-${index}`} className="rh-people-card group relative min-h-[21rem] overflow-hidden rounded-[1.6rem]">
                      <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 50vw, 300px" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent px-4 pb-4 pt-16">
                        <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">People behind the solutions</span>
            <h2 id="people-title" className="mt-3 text-3xl font-extrabold text-stone-900 sm:text-5xl dark:text-white">Local expertise. Practical delivery.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 dark:text-slate-300">A moving view of our people, products and the institutional environments we support—from office planning and healthcare supply to ICT and solar deployment across Malawi.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="rh-scroll py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 rounded-[2.5rem] border border-stone-200 bg-[#ecebe7]/95 p-8 text-slate-800 shadow-sm sm:p-12 lg:grid-cols-2 lg:p-16 dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                About Us
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-5xl dark:text-white">
                A dependable partner for institutional procurement.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Royal Horizon Limited provides procurement, supply, and
                technical solutions to organisations across Malawi. We work
                across healthcare, laboratories, ICT, renewable energy,
                industrial equipment, facilities support, and general supply with certified precision.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/60">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Malawi based
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">Local insight, national reach</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/60">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Integrated support
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">Supply, installation and service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Divisions Section */}
      <section id="solutions" className="rh-scroll bg-white/95 py-24 sm:rounded-t-[3rem] dark:bg-slate-900/95">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Our Divisions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Integrated supply and technical solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Royal Horizon operates two integrated divisions, Supply and Solutions,
              each covering multiple service lines for institutional, commercial, and
              development-sector clients throughout Malawi.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {divisions.map((division) => {
              const IconComponent = division.icon;
              return (
                <article
                  key={division.number}
                  className="rh-service-card group rounded-[2rem] border border-slate-200/80 bg-[#f7f7f3] p-8 dark:border-slate-700/80 dark:bg-slate-800/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                      {division.number}
                    </span>
                    <div className="rounded-2xl bg-orange-50 p-3.5 text-orange-600 transition group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {division.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {division.text}
                  </p>

                  <div className="mt-6 grid gap-3 border-t border-slate-200/80 pt-6 sm:grid-cols-2 dark:border-slate-700/80">
                    {division.lines.map((line) => {
                      const LineIcon = line.icon;
                      return (
                        <div
                          key={line.title}
                          className="flex items-start gap-3 rounded-xl bg-white/70 p-3.5 dark:bg-slate-900/40"
                        >
                          <div className="rounded-lg bg-orange-50 p-2 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                            <LineIcon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                              {line.title}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                              {line.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="rh-scroll bg-[#ecebe7]/95 py-24 dark:bg-slate-800/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Rates & quotations</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Clear pricing, shaped around the requirement.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Institutional supply costs vary by specification, quantity, delivery location, lead time, and installation needs. We provide a documented quotation after reviewing your brief.
              </p>
              <button onClick={() => setIsQuoteModalOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#74787e] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#64686e] active:scale-[0.97] active:bg-[#5a5e63]">
                Request tailored rates <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Standard supply", "Quoted by item, quantity, specification, and delivery point."],
                ["02", "Projects & tenders", "Structured pricing for multi-line requirements and phased delivery."],
                ["03", "Support agreements", "Custom service rates based on scope, response time, and coverage."],
              ].map(([number, title, text]) => (
                <article key={number} className="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-sm dark:border-slate-700/80 dark:bg-slate-900/60">
                  <span className="text-xs font-black text-orange-500">{number}</span>
                  <h3 className="mt-8 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="rh-scroll bg-white py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Insights</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">Practical thinking for better procurement.</h2>
            </div>
            <div><p className="max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">Guidance for teams planning supply, technology, and infrastructure investments across Malawi.</p><Link href="/blog" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-orange-600">View all articles <ArrowUpRight className="h-4 w-4" /></Link></div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map((insight) => (
              <a href={insight.href} key={insight.title} className="rh-insight-card group block overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f7f3] dark:border-slate-700/80 dark:bg-slate-800/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={insight.image} alt={insight.alt} fill unoptimized={insight.image.startsWith("http")} sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-600">{insight.category}</span>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900 dark:text-white">{insight.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{insight.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">Read insight <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & RFQ Section */}
      <section id="contact" className="rh-scroll border-t border-slate-100 bg-slate-50/85 py-24 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Contact & RFQ
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Get in touch with our commercial team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Have questions or need assistance with standard procurement orders? Reach out to us directly through our office channels or WhatsApp.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-100/70 p-3.5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Office Location</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Synergy CoWorks, Plot 526 Songwe Street, New Area 12, Lilongwe</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-100/70 p-3.5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Email Address</h4>
                    <a href="mailto:royalhorizonmw@gmail.com" className="mt-1 block text-sm font-semibold text-orange-600 hover:underline dark:text-orange-400">
                      royalhorizonmw@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-100/70 p-3.5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Phone Contact</h4>
                    <a href="tel:+265880273292" className="mt-1 block text-sm font-semibold text-slate-600 hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400">
                      +265 880 273 292
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Box */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/70 p-8 shadow-lg shadow-slate-200/30 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-800/50 dark:shadow-black/20">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <MessageSquare className="h-3.5 w-3.5" /> Direct WhatsApp Support
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  Prefer instant messaging?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed dark:text-slate-300">
                  Chat with our commercial team directly on WhatsApp for fast response times, order updates, and immediate service inquiries.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/265880273292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.97] active:bg-emerald-800"
                >
                  <MessageSquare className="h-5 w-5" /> Chat on WhatsApp Now
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-slate-900/5 dark:border-slate-700/80 dark:bg-slate-800/60">
            <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-700/60">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">Visit our office</p>
                <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">Synergy CoWorks, Plot 526 Songwe Street</h3>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=-13.9551086711604%2C33.815891197177606"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-orange-200 hover:text-orange-600 active:scale-[0.97] active:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-orange-500/40 dark:hover:text-orange-400 dark:active:bg-slate-700"
              >
                <MapPin className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
            <iframe
              title="Map showing Royal Horizon Limited office at Synergy CoWorks on Songwe Street, Lilongwe"
              src="https://www.google.com/maps?q=-13.9551086711604%2C33.815891197177606&z=17&output=embed"
              width="100%"
              height="420"
              className="block w-full border-0 grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100 dark:bg-slate-900 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <Image
              src="/rh-logo-orange-cropped.png"
              alt="Royal Horizon Limited"
              width={2440}
              height={991}
              sizes="160px"
              className="h-auto w-40"
            />
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Area 12, Lilongwe, Malawi
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-xs text-slate-400 md:items-end dark:text-slate-500">
            <div className="flex flex-wrap justify-end gap-4">
              <a href="/privacy" className="hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-slate-600 dark:hover:text-slate-300">Terms &amp; Conditions</a>
              <a href="/cancellation-policy" className="hover:text-slate-600 dark:hover:text-slate-300">Cancellation &amp; Refunds</a>
            </div>
            <p>© 2026 Royal Horizon Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Request a Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8 dark:bg-slate-800 dark:ring-1 dark:ring-slate-700/60">
            <button
              onClick={closeQuoteModal}
              className="absolute right-6 top-6 text-slate-400 transition hover:text-slate-600 active:scale-90 dark:text-slate-500 dark:hover:text-slate-300"
              aria-label="Close quotation request"
            >
              <X className="h-6 w-6" />
            </button>

            {quotePreview ? (
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 dark:bg-orange-500/10 dark:text-orange-300"><FileText className="h-3.5 w-3.5" /> Preview RFQ brief</span>
                <h3 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">Check your request</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Confirm the details, then download the PDF and continue to WhatsApp.</p>
                <dl className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-slate-50 px-5 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-900/60">
                  {[
                    ["Name / organisation", quotePreview.name],
                    ["Email", quotePreview.email],
                    ["Phone", quotePreview.phone],
                    ["Service line", quotePreview.division],
                    ["Requirements", quotePreview.requirements],
                  ].map(([label, value]) => (
                    <div key={label} className="py-3">
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">{label}</dt>
                      <dd className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 dark:text-slate-200">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button onClick={() => setQuotePreview(null)} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition active:scale-[0.97] active:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:active:bg-slate-700">Edit details</button>
                  <button onClick={downloadQuoteAndOpenWhatsApp} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-[0.97] active:bg-emerald-800">
                    <Download className="h-4 w-4" /> Download PDF & Open WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  Request a Quotation
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Fill in your details and requirements to receive an official quote.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="company-website">Company website</label>
                    <input id="company-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Full Name / Organization
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      minLength={2}
                      maxLength={120}
                      autoComplete="name"
                      placeholder="e.g. Ministry of Health / John Doe"
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        maxLength={160}
                        autoComplete="email"
                        placeholder="name@company.com"
                        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        minLength={7}
                        maxLength={30}
                        autoComplete="tel"
                        placeholder="+265..."
                        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white dark:placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Primary Service Line
                    </label>
                    <select name="division" required className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white dark:placeholder:text-slate-500">
                      <optgroup label="Royal Horizon Supply">
                        <option>Healthcare</option>
                        <option>Industrial & General Supply</option>
                      </optgroup>
                      <optgroup label="Royal Horizon Solutions">
                        <option>ICT</option>
                        <option>Commercial Printing</option>
                        <option>Facilities</option>
                        <option>Energy</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Specifications & Quantities
                    </label>
                    <textarea
                      rows={4}
                      name="requirements"
                      required
                      minLength={10}
                      maxLength={4000}
                      placeholder="Describe the items, quantities, and delivery timeframe needed..."
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white dark:placeholder:text-slate-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-md transition hover:from-orange-600 hover:to-orange-700 active:scale-[0.97] active:shadow-sm"
                  >
                    <Send className="h-4 w-4" /> Preview Quote Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
