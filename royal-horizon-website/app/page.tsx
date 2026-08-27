'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'Medical & Laboratory Systems',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-slate-800 selection:bg-orange-500 selection:text-white font-sans scroll-smooth">
      
      {/* Top Professional Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>Area 12, Lilongwe, Malawi | Co. No: COY-WGWU7L6 | TPIN: 71284360</span>
          </div>
          <div className="flex gap-6 text-slate-300">
            <span>📞 +265 880 273 292</span>
            <span>✉️ royalhorizonmw@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black text-xl px-3.5 py-1.5 rounded-xl shadow-lg shadow-orange-500/20">
              RH
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 block leading-none">Royal Horizon</span>
              <span className="text-[10px] text-orange-600 font-bold tracking-widest uppercase">Limited</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
            <a href="#home" className="hover:text-orange-600 transition">Home</a>
            <a href="#about" className="hover:text-orange-600 transition">About Us</a>
            <a href="#divisions" className="hover:text-orange-600 transition">Divisions & Services</a>
            <a href="#compliance" className="hover:text-orange-600 transition">Compliance</a>
            <a href="#contact" className="hover:text-orange-600 transition">Contact & RFQ</a>
          </nav>
          <div>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5">
              Request a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-24 px-6 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Malawi's Premier Integrated Partner</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Supply</span> & Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">Solutions</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              Powering hospitals, NGOs, government institutions, and corporate leaders across Malawi with uncompromising quality, cutting-edge ICT, solar power, and trusted procurement heritage.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#divisions" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-orange-500/20 transition-all">
                Explore Divisions
              </a>
              <a href="#contact" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold px-7 py-3.5 rounded-xl transition-all shadow-sm">
                Submit Tender / RFQ
              </a>
            </div>
          </div>

          {/* Brand Canvas Preview Card */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-400/20 to-amber-300/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="w-full h-[400px] bg-white border border-slate-200/80 rounded-3xl shadow-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-4 right-4 bg-amber-400/10 border border-amber-400/30 text-amber-700 text-xs font-bold px-3 py-1 rounded-lg">
                Corporate Showcase
              </div>
              <div className="my-auto text-center space-y-3">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl shadow-lg flex items-center justify-center text-white text-3xl font-black rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  RH
                </div>
                <h3 className="font-bold text-slate-800 text-lg">Royal Horizon Limited</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Registered Enterprise & Specialized Procurement Partner based in Area 12, Lilongwe.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex justify-between items-center text-xs text-slate-600 font-medium">
                <span>Compliance: Verified</span>
                <span className="text-orange-600 font-bold">Active Operations</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Deep-Dive Section */}
      <section id="about" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">About Royal Horizon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Rooted in Lilongwe, Built for National Impact
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Royal Horizon Limited is structured as a multi-sector enterprise dedicated to delivering excellence across Malawi's institutional, medical, and technical landscape. Operating from our headquarters in Area 12, Lilongwe, we bridge global manufacturing standards with rigorous local procurement frameworks.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Our leadership and operational teams bring profound technical expertise, ensuring every medical diagnostic tool, enterprise ICT deployment, solar installation, and industrial supply meets the highest compliance benchmarks demanded by government bodies and international NGOs.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                <span className="block text-3xl font-black text-orange-600">6+</span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1 block">Specialized Divisions</span>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                <span className="block text-3xl font-black text-slate-900">100%</span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1 block">Institutional Grade</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl"></div>
            <h3 className="text-xl font-bold border-b border-slate-700 pb-4">Corporate Credentials & Verification</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-400">Registered Entity:</span>
                <span className="font-semibold text-white">Royal Horizon Limited</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-400">Headquarters:</span>
                <span className="font-semibold text-white">Area 12, Lilongwe, Malawi</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-400">Company Registration:</span>
                <span className="font-mono text-orange-400 font-bold">COY-WGWU7L6</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-slate-400">TPIN Number:</span>
                <span className="font-mono text-orange-400 font-bold">71284360</span>
              </li>
            </ul>
            <div className="pt-2">
              <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold px-3.5 py-1.5 rounded-xl">
                ✓ Verified Malawi Revenue Authority & Registrar Compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Service Divisions Grid */}
      <section id="divisions" className="py-24 px-6 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest">Core Capabilities</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Specialized Service Divisions</p>
            <p className="text-slate-600">
              Tailored high-performance procurement and technical solutions engineered to meet the stringent compliance demands of government bodies, NGOs, and medical institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Division 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  🏥
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Medical & Laboratory Systems</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Advanced diagnostic equipment, laboratory consumables, reagents, centrifuges, and biomedical support adhering to rigorous healthcare quality frameworks.
                </p>
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                Government & NGO Grade →
              </span>
            </div>

            {/* Division 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  💻
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">ICT & Enterprise Hardware</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Enterprise computing hardware, networking gear, secure server architecture, laptops, and specialized technical diagnostics and micro-soldering repairs.
                </p>
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                High-Performance Tech →
              </span>
            </div>

            {/* Division 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  ☀️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Solar & Renewable Power</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Reliable off-grid solar energy systems, backup inverter arrays, lithium battery banks, and energy storage solutions ensuring uninterrupted institutional operations.
                </p>
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                Sustainable Energy →
              </span>
            </div>

            {/* Division 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  📦
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">General Institutional Supply</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Comprehensive bulk procurement, corporate office provisions, specialized tender fulfillment, and streamlined supply chain management across Malawi.
                </p>
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                Trusted Heritage →
              </span>
            </div>

            {/* Division 5 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Industrial & Specialized Gear</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Precision machinery, scientific instruments, heavy-duty hardware parts, automotive electrical wiring components, and custom tool sourcing.
                </p>
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                Precision Sourcing →
              </span>
            </div>

            {/* Division 6 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Facilities & Technical Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  End-to-end technical maintenance, hardware troubleshooting, asset servicing, laboratory quality management consulting, and infrastructure advisory.
                </p>
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-100">
                Expert Support →
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Compliance & Standards Section */}
      <section id="compliance" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest">Institutional Assurance</h2>
            <p className="text-3xl sm:text-4xl font-black text-slate-900">Commitment to Quality & Compliance</p>
            <p className="text-slate-600">
              Operating under strict quality management frameworks inspired by international standards to guarantee reliability across all public and private sector engagements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Regulatory Alignment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fully registered under Malawi corporate laws with active tax compliance and verified TPIN registration for transparent tender processing.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Rigorous Sourcing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct partnerships and vetted supply chains ensuring that all medical, ICT, and industrial goods meet exacting specification standards.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Local Expertise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lilongwe-based operational presence ensuring rapid response times, personalized technical support, and seamless delivery coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact & RFQ Section */}
      <section id="contact" className="py-24 px-6 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Tender & Quotation Desk</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Partner With <span className="text-orange-600">Royal Horizon</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you are releasing a government tender, procuring medical diagnostics, or ordering enterprise tech solutions, our Lilongwe team is ready to respond with competitive pricing and compliance documentation.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-slate-200 text-slate-600 text-sm">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 w-32">Headquarters:</span>
                <span>Area 12, Lilongwe, Malawi</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 w-32">Company No:</span>
                <span className="font-mono bg-white border border-slate-200 px-3 py-1 rounded-lg text-slate-800">COY-WGWU7L6</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 w-32">TPIN Number:</span>
                <span className="font-mono bg-white border border-slate-200 px-3 py-1 rounded-lg text-slate-800">71284360</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 w-32">Direct Phone:</span>
                <span className="text-slate-800 font-semibold">+265 880 273 292</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900 w-32">Email Inquiry:</span>
                <span className="text-orange-600 font-semibold">royalhorizonmw@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-slate-900">RFQ Received Successfully</h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. Our procurement team in Lilongwe will review your specifications and get back to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-orange-500 text-white font-semibold px-6 py-2.5 rounded-xl text-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request for Quotation (RFQ)</h3>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Full Name / Organization</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g., Ministry of Health / Corporate Buyer" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="buyer@institution.mw" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+265..." 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Select Service Division</label>
                  <select 
                    value={formData.division}
                    onChange={(e) => setFormData({...formData, division: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
                  >
                    <option>Medical & Laboratory Systems</option>
                    <option>ICT & Enterprise Hardware</option>
                    <option>Solar & Renewable Power</option>
                    <option>General Institutional Supply</option>
                    <option>Industrial & Specialized Gear</option>
                    <option>Facilities & Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Project Specifications / RFQ Details</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Provide details regarding quantities, delivery timeline, or tender requirements..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all text-sm uppercase tracking-wider"
                >
                  Submit Official RFQ
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white font-black text-lg px-3 py-1 rounded-lg">
              RH
            </div>
            <div>
              <span className="text-white font-bold block leading-tight">Royal Horizon Limited</span>
              <span className="text-xs text-slate-400">Area 12, Lilongwe, Malawi</span>
            </div>
          </div>
          <div className="text-center md:text-right text-xs space-y-1">
            <p>&copy; {new Date().getFullYear()} Royal Horizon Limited. All rights reserved.</p>
            <p className="text-slate-400">Co. Reg: COY-WGWU7L6 | TPIN: 71284360</p>
          </div>
        </div>
      </footer>

    </main>
  );
}