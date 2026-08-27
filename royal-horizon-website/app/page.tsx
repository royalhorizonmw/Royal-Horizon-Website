"use client";

import React, { type FormEvent, useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Stethoscope,
  Laptop,
  Sun,
  Package,
  HardHat,
  Wrench,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowUpRight,
  Building2,
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsQuoteModalOpen(false);
    }, 2500);
  };

  const divisions = [
    {
      number: "01",
      icon: Stethoscope,
      title: "Medical & Laboratory",
      text: "Medical equipment, laboratory systems, diagnostics, consumables, and healthcare solutions.",
    },
    {
      number: "02",
      icon: Laptop,
      title: "ICT & Hardware",
      text: "Computers, networking infrastructure, enterprise peripherals, and institutional ICT solutions.",
    },
    {
      number: "03",
      icon: Sun,
      title: "Solar & Renewable",
      text: "Solar systems, commercial backup power, renewable energy equipment, and installation support.",
    },
    {
      number: "04",
      icon: Package,
      title: "General Supply",
      text: "Office supplies, operational consumables, institutional goods, and project procurement.",
    },
    {
      number: "05",
      icon: HardHat,
      title: "Industrial Gear",
      text: "Safety PPE, technical equipment, heavy tools, machinery, and industrial supply solutions.",
    },
    {
      number: "06",
      icon: Wrench,
      title: "Facilities Support",
      text: "Facility equipment, structural maintenance support, and technical service solutions.",
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

  const insights = [
    {
      category: "Healthcare Supply",
      title: "A practical guide to planning institutional medical supply orders",
      summary: "How better specifications, lead-time planning, and delivery checks reduce procurement risk.",
      image: "/insight-medical-supply.png",
      alt: "A Malawian healthcare and procurement team checking delivered medical supplies",
    },
    {
      category: "ICT Infrastructure",
      title: "Building dependable ICT environments for growing organisations",
      summary: "The essentials behind resilient networks, compatible equipment, and long-term support.",
      image: "/insight-ict-deployment.png",
      alt: "Malawian technology professionals deploying institutional ICT equipment",
    },
    {
      category: "Renewable Energy",
      title: "What institutions should assess before investing in solar power",
      summary: "A clear starting point for sizing, installation planning, maintenance, and continuity.",
      image: "/insight-solar-project.png",
      alt: "Engineers inspecting solar panels at an institutional facility in Malawi",
    },
  ];

  return (
    <main className="rh-site min-h-screen bg-white font-sans text-slate-800 selection:bg-stone-500 selection:text-white">
      {/* Top Bar Contacts */}
      <div className="hidden border-b border-slate-100 bg-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-8 py-2.5 text-xs font-medium text-slate-500">
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
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 text-slate-700 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#home" className="group block" aria-label="Royal Horizon Limited home">
            <Image
              src="/rh-logo-orange-cropped.png"
              alt="Royal Horizon Limited"
              width={2440}
              height={991}
              priority
              sizes="112px"
              className="h-auto w-28"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              About Us
            </a>
            <a
              href="#solutions"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              Divisions & Services
            </a>
            <a
              href="#rates"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              Rates
            </a>
            <a
              href="#insights"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              Insights
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              Contact & RFQ
            </a>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="rounded-full border border-orange-200 bg-white px-6 py-2.5 text-sm font-bold text-orange-600 shadow-sm transition hover:bg-orange-50"
            >
              Request Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <nav className="border-b border-slate-100 bg-white px-6 py-6 md:hidden shadow-xl">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600"
              >
                About Us
              </a>
              <a
                href="#solutions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600"
              >
                Divisions & Services
              </a>
              <a
                href="#rates"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600"
              >
                Rates
              </a>
              <a
                href="#insights"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-orange-600"
              >
                Contact & RFQ
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-orange-500/20"
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
        <div className="rh-hero-panel relative mx-auto max-w-[1500px] overflow-hidden rounded-b-[2.5rem] border border-stone-200/80 bg-white/90 py-16 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            
            {/* Left Content */}
            <div className="rh-reveal relative z-10 lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-stone-500 backdrop-blur">
                Malawi&apos;s Premier Integrated Partner
              </div>

              <h1 className="text-5xl font-extrabold tracking-[-0.045em] text-slate-800 sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]">
                Excellence in{" "}
                <span className="text-orange-500">
                  Supply
                </span>{" "}
                & Advanced{" "}
                <span className="text-slate-500">Solutions</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Powering hospitals, NGOs, government institutions, and corporate
                leaders across Malawi with uncompromising quality, cutting-edge ICT,
                solar power, and trusted procurement heritage.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solutions"
                  className="rounded-full bg-[#74787e] px-8 py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-[#64686e]"
                >
                  Explore Divisions
                </a>

                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-center text-sm font-bold text-slate-600 shadow-sm backdrop-blur transition hover:border-slate-300 hover:bg-white"
                >
                  Submit Tender / RFQ
                </button>
              </div>
            </div>

            {/* Right Card / Interactive 3D Mockup Box */}
            <div className="rh-reveal rh-delay relative lg:col-span-5">
              <div className="rh-float-card absolute -left-4 top-10 z-20 rounded-2xl bg-[#777b80] p-4 text-white shadow-2xl sm:-left-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-200">Service reach</p>
                <p className="mt-1 text-2xl font-black">Nationwide</p>
              </div>
              <div className="rh-visual relative rounded-[2.25rem] border border-slate-200/80 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">Royal Horizon</p>
                    <p className="mt-1 text-lg font-black text-slate-950">Integrated Operations</p>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                    Live capability
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 py-5">
                  <div className="col-span-2 rounded-3xl bg-[#767a80] p-6 text-white">
                    <div className="flex items-center justify-between">
                      <Image
                        src="/rh-logo-white-cropped.png"
                        alt="Royal Horizon Limited"
                        width={2440}
                        height={991}
                        sizes="128px"
                        className="h-auto w-32"
                      />
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-slate-300">6 divisions</span>
                    </div>
                    <p className="mt-8 text-sm text-slate-400">One dependable procurement partner</p>
                    <p className="mt-1 text-2xl font-black">Supply. Install. Support.</p>
                  </div>
                  <div className="rounded-3xl bg-stone-100 p-5">
                    <p className="text-3xl font-black text-stone-600">6</p>
                    <p className="mt-1 text-xs font-semibold text-slate-600">Specialist divisions</p>
                  </div>
                  <div className="rounded-3xl bg-emerald-50 p-5">
                    <CheckCircle className="h-7 w-7 text-emerald-600" />
                    <p className="mt-3 text-xs font-semibold text-slate-600">Compliant delivery</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-xs font-semibold text-slate-600">
                  <span>Medical · ICT · Solar · Industrial</span>
                  <span className="text-stone-600">Explore →</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* Institutional Client Base */}
      <section aria-labelledby="client-base-title" className="rh-scroll border-y border-slate-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Who we serve</span>
          <h2 id="client-base-title" className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
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
      </section>

      {/* About Section */}
      <section id="about" className="rh-scroll py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 rounded-[2.5rem] border border-stone-200 bg-[#ecebe7]/95 p-8 text-slate-800 shadow-sm sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                About Us
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
                A dependable partner for institutional procurement.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Royal Horizon Limited provides procurement, supply, and
                technical solutions to organisations across Malawi. We work
                across healthcare, laboratories, ICT, renewable energy,
                industrial equipment, facilities support, and general supply with certified precision.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Company Registration
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">COY-WGWU7L6</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  TPIN Number
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">71284360</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Divisions Section */}
      <section id="solutions" className="rh-scroll bg-white/95 py-24 sm:rounded-t-[3rem]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Our Divisions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Integrated supply and technical solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Royal Horizon operates across six core divisions serving
              institutional, commercial, and development-sector clients throughout Malawi.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => {
              const IconComponent = division.icon;
              return (
                <article
                  key={division.number}
                  className="rh-service-card group rounded-[2rem] border border-slate-200/80 bg-[#f7f7f3] p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-orange-600">
                      {division.number}
                    </span>
                    <div className="rounded-2xl bg-orange-50 p-3.5 text-orange-600 transition group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/20">
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {division.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {division.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section id="rates" className="rh-scroll bg-[#ecebe7]/95 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Rates & quotations</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Clear pricing, shaped around the requirement.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
                Institutional supply costs vary by specification, quantity, delivery location, lead time, and installation needs. We provide a documented quotation after reviewing your brief.
              </p>
              <button onClick={() => setIsQuoteModalOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#74787e] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#64686e]">
                Request tailored rates <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Standard supply", "Quoted by item, quantity, specification, and delivery point."],
                ["02", "Projects & tenders", "Structured pricing for multi-line requirements and phased delivery."],
                ["03", "Support agreements", "Custom service rates based on scope, response time, and coverage."],
              ].map(([number, title, text]) => (
                <article key={number} className="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-sm">
                  <span className="text-xs font-black text-orange-500">{number}</span>
                  <h3 className="mt-8 text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="rh-scroll bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">Insights</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Practical thinking for better procurement.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">Guidance for teams planning supply, technology, and infrastructure investments across Malawi.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map((insight) => (
              <article key={insight.title} className="rh-insight-card group overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f7f3]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={insight.image} alt={insight.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                </div>
                <div className="p-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-600">{insight.category}</span>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">{insight.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{insight.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-700">Read insight <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & RFQ Section */}
      <section id="contact" className="rh-scroll border-t border-slate-100 bg-slate-50/85 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                Contact & RFQ
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Get in touch with our commercial team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Have questions or need assistance with standard procurement orders? Reach out to us directly through our office channels or WhatsApp.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-100/70 p-3.5 text-orange-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Office Location</h4>
                    <p className="mt-1 text-sm text-slate-600">Area 12, Lilongwe, Malawi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-100/70 p-3.5 text-orange-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                    <a href="mailto:royalhorizonmw@gmail.com" className="mt-1 block text-sm font-semibold text-orange-600 hover:underline">
                      royalhorizonmw@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-orange-100/70 p-3.5 text-orange-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Phone Contact</h4>
                    <a href="tel:+265880273292" className="mt-1 block text-sm font-semibold text-slate-600 hover:text-orange-600">
                      +265 880 273 292
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Box */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/30">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  <MessageSquare className="h-3.5 w-3.5" /> Direct WhatsApp Support
                </span>
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  Prefer instant messaging?
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Chat with our commercial team directly on WhatsApp for fast response times, order updates, and immediate service inquiries.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/265880273292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  <MessageSquare className="h-5 w-5" /> Chat on WhatsApp Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
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
            <p className="mt-1 text-sm text-slate-500">
              Area 12, Lilongwe, Malawi
            </p>
          </div>

          <p className="text-xs text-slate-400">
            © 2026 Royal Horizon Limited. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Request a Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute right-6 top-6 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-emerald-500" />
                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  Request Sent!
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you for reaching out. Our procurement team will review your specifications and get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-950">
                  Request a Quotation
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Fill in your details and requirements to receive an official quote.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ministry of Health / John Doe"
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+265..."
                        className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Primary Division
                    </label>
                    <select className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                      <option>Medical & Laboratory</option>
                      <option>ICT & Hardware</option>
                      <option>Solar & Renewable</option>
                      <option>General Supply</option>
                      <option>Industrial Gear</option>
                      <option>Facilities Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Specifications & Quantities
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the items, quantities, and delivery timeframe needed..."
                      className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white shadow-md transition hover:from-orange-600 hover:to-orange-700"
                  >
                    <Send className="h-4 w-4" /> Submit Quote Request
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
