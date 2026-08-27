'use client';
import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-royalDark selection:bg-royalOrange selection:text-white">
      
      {/* Top Professional Announcement Bar */}
      <div className="bg-royalDark text-white text-xs py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-royalOrange animate-pulse"></span>
            <span>Area 12, Lilongwe, Malawi | Co. No: COY-WGWU7L6 | TPIN: 71284360</span>
          </div>
          <div className="flex gap-6 text-slate-300">
            <span>📞 +265 880 273 292</span>
            <span>✉️ royalhorizonmw@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-royalOrange to-amber-500 text-white font-black text-xl px-3.5 py-1.5 rounded-xl shadow-lg shadow-orange-500/20">
              RH
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-royalDark block leading-none">Royal Horizon</span>
              <span className="text-[10px] text-royalOrange font-bold tracking-widest uppercase">Limited</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
            <a href="#home" className="text-royalOrange font-semibold transition">Home</a>
            <a href="#about" className="hover:text-royalOrange transition">About Us</a>
            <a href="#divisions" className="hover:text-royalOrange transition">Divisions & Services</a>
            <a href="#contact" className="hover:text-royalOrange transition">Contact & RFQ</a>
          </nav>
          <div>
            <a href="#contact" className="bg-royalOrange hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5">
              Request a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Clean White Canvas & 3D Artwork Integration Slot */}
      <section id="home" className="relative pt-20 pb-32 px-6 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-royalOrange"></span>
              <span className="text-xs font-bold text-royalOrange uppercase tracking-wider">Malawi's Premier Integrated Partner</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-royalDark leading-[1.1]">
              Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-royalOrange to-amber-500">Supply</span> & Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-royalDark to-slate-700">Solutions</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Powering hospitals, NGOs, government institutions, and corporate leaders across Malawi with uncompromising quality, cutting-edge ICT, solar power, and trusted procurement heritage.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#divisions" className="bg-royalOrange hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-orange-500/20 transition-all">
                Explore Divisions
              </a>
              <a href="#contact" className="bg-white hover:bg-slate-50 text-royalDark border border-slate-200 font-semibold px-7 py-3.5 rounded-xl transition-all shadow-sm">
                Submit Tender / RFQ
              </a>
            </div>
          </div>

          {/* Right 3D Artwork / Carton Canvas Placeholder */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-400/20 to-amber-300/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="w-full h-[400px] bg-white border border-slate-200/80 rounded-3xl shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-4 right-4 bg-amber-400/10 border border-amber-400/30 text-amber-700 text-xs font-bold px-3 py-1 rounded-lg">
                Interactive 3D Asset Space
              </div>
              <div className="my-auto text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-royalOrange to-solarYellow rounded-2xl shadow-lg flex items-center justify-center text-white text-3xl font-black rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  RH
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Royal Horizon 3D Emblem</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Ready for embedded Spline / Three.js interactive modular carton representing our dual supply & solutions infrastructure.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex justify-between items-center text-xs text-slate-600 font-medium">
                <span>Status: Configured for WebGL</span>
                <span className="text-royalOrange font-bold">Active Canvas</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}