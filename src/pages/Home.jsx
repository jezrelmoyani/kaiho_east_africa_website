import React, { useState } from 'react';

export default function Home({ setCurrentPage }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedInventoryTab, setSelectedInventoryTab] = useState('all');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Image Ribbon Data
  const ribbonImages = [
    { url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=400", alt: "Ready Engine Blocks" },
    { url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400", alt: "Nairobi Warehouse Inventory" },
    { url: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=400", alt: "Atlantis Business Park Hub" },
    { url: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=400", alt: "Immediate Verification" },
    { url: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=400", alt: "Available Body Panels" },
    { url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400", alt: "Nairobi Yard Stock" }
  ];

  // Detailed Categorized Live Data Matrix
  const inventoryTabs = [
    { id: 'all', label: '📋 View All Spares' },
    { id: 'engines', label: '🔧 Engine Assemblies' },
    { id: 'gearbox', label: '⚙️ Transmissions' },
    { id: 'body', label: '🚗 Body & Panels' }
  ];

  const sparePartsCategories = [
    { title: "Complete Engines", type: "engines", parts: ["In-Stock Petrol Assemblies", "Ready Diesel Blocks", "Verified Low-Mileage Units", "JDM Core Sports Units"], icon: "🔧" },
    { title: "Transmissions & Gears", type: "gearbox", parts: ["Automatic Gearboxes", "Manual Sync Systems", "Differential Assemblies", "CVT Diagnostic Matrix"], icon: "⚙️" },
    { title: "Body & Panels", type: "body", parts: ["Headlamp Units", "Doors & Quarter Panels", "Bumper Trims & Grilles", "Nose Cut Frameworks"], icon: "🚗" },
    { title: "Suspension & Brakes", type: "body", parts: ["Shock Absorbers", "Brake Calipers & Rotors", "Control Arms & Hubs", "Steering Columns"], icon: "🚗" }
  ];

  const filteredCategories = selectedInventoryTab === 'all' 
    ? sparePartsCategories 
    : sparePartsCategories.filter(cat => cat.type === selectedInventoryTab);

  const teamMembers = [
    { name: "Executive Logistics Director", role: "Nairobi Yard Operations", location: "Nairobi Warehouse" },
    { name: "Sourcing Specialist", role: "Auction Clearance & Dismantling", location: "Toyama Yard, Japan" },
    { name: "Technical Inspector", role: "Quality Assurance & Multi-Point Testing", location: "Toyama Yard, Japan" }
  ];

  const testimonials = [
    { text: "Drove straight to Atlantis Business Park and picked up a clean 1NZ engine block the same afternoon. No waiting for shipping.", client: "Garissa Road Auto Mechanics", location: "Thika" },
    { text: "Unbelievable local stock. Found exact replacement doors for a Mazda Axela on the warehouse floor. Spotless condition.", client: "Bodyworks Specialist Hub", location: "Nairobi" },
    { text: "Best part is you inspect it live with your mechanic in Nairobi before paying. Total transparency.", client: "Wholesale Parts Importer", location: "Mombasa" },
    { text: "When a specialized Subaru block wasn't in their Nairobi bay, they ordered it straight from their Japan branch and cleared it fast.", client: "Fleet Maintenance Manager", location: "Eldoret" }
  ];

  const faqs = [
    { q: "What kind of parts do you sell?", a: "We supply premium, genuine used automotive components specializing in Japanese vehicle brands such as Toyota, Nissan, Subaru, Mitsubishi, Honda, and Isuzu. Our stock ranges from complete engine assemblies and gearboxes to structural panels and suspension configurations." },
    { q: "Are the parts tested before sale?", a: "Absolutely. Every powertrain component—engines and gearboxes alike—undergoes rigorous inspection and compression diagnostics at our industrial processing yard in Toyama, Japan, prior to container distribution loading." },
    { q: "Do you offer warranties or returns?", a: "Yes, we back our product quality. Functional powertrain assemblies carry a 3-business-day diagnostic coverage window upon release from our warehouse loading bays, provided they remain fully intact and unaltered for technical review." },
    { q: "Can I order direct from Japan?", a: "Yes. If a rare, specialized engine profile or body frame alignment component is out of stock in Nairobi, our procurement pipeline coordinates custom dismantling from our parent auction yards to fulfill your container load booking parameters." }
  ];

  const scrollRibbon = (direction) => {
    const el = document.getElementById('imageRibbonContainer');
    if (el) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 bg-white text-slate-700 pb-16">
      
      {/* 1. HERO AREA WITH FULL ANIMATION OVERLAYS */}
      <section className="text-center max-w-5xl mx-auto space-y-8 pt-4 bg-white animate-fadeIn">
        
        {/* INTERACTIVE RIBBON OF PICTURES WITH SCROLL CONTROLS */}
        <div className="w-full relative group/ribbon">
          <div 
            id="imageRibbonContainer"
            className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xs bg-slate-50 py-4 px-2 flex gap-4 overflow-x-auto scroll-smooth scrollbar-none snap-x"
          >
            {ribbonImages.map((img, index) => (
              <div 
                key={index} 
                className="min-w-[220px] sm:min-w-[280px] h-36 rounded-xl overflow-hidden shrink-0 snap-center border border-slate-100 relative group/img transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110 filter brightness-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover/img:opacity-90 flex items-end p-3">
                  <p className="text-xs text-white font-bold uppercase tracking-wider">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Floating UI Arrow Control Triggers */}
          <button 
            type="button"
            onClick={() => scrollRibbon('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center font-bold text-slate-800 opacity-0 group-hover/ribbon:opacity-100 transition-opacity duration-300 active:scale-95 z-10"
          >
            ←
          </button>
          <button 
            type="button"
            onClick={() => scrollRibbon('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center font-bold text-slate-800 opacity-0 group-hover/ribbon:opacity-100 transition-opacity duration-300 active:scale-95 z-10"
          >
            →
          </button>
        </div>

        {/* HEADLINE */}
        <div className="space-y-6 max-w-4xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-black tracking-widest uppercase">
            📍 Immediate Pickup: Atlantis Business Park, Nairobi
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Ready Stock: <span className="text-brand-orange bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Premium Used Engines</span> & Genuine Spares
          </h1>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
            Skip the sea freight waiting time. Buy high-grade, compression-tested Japanese automotive assemblies straight from our warehouse floor in Nairobi today.
          </p>
          
          {/* INTERACTIVE BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button 
              type="button"
              onClick={() => setCurrentPage('kenya')} 
              className="px-7 py-4 bg-brand-orange hover:bg-orange-600 transition-all duration-300 rounded-xl font-bold text-white text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Browse Nairobi Warehouse Stock
            </button>
            <button 
              type="button"
              onClick={() => setCurrentPage('japan')} 
              className="px-7 py-4 bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 rounded-xl font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-slate-800"
            >
              Order Missing Item from Japan
            </button>
          </div>
        </div>
      </section>

      {/* 2. METRICS COUNTER RIBBON */}
      <section className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50/60 border border-slate-200 p-6 rounded-2xl text-center shadow-2xs">
        <div className="space-y-1">
          <p className="text-3xl font-black text-slate-900 tracking-tight">100%</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Japanese Sourced</p>
        </div>
        <div className="space-y-1 border-l border-slate-200">
          <p className="text-3xl font-black text-brand-orange tracking-tight">D31</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Nairobi Warehouse Bay</p>
        </div>
        <div className="space-y-1 border-l border-slate-200">
          <p className="text-3xl font-black text-slate-900 tracking-tight">0%</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Middlemen Fees</p>
        </div>
        <div className="space-y-1 border-l border-slate-200">
          <p className="text-3xl font-black text-brand-orange tracking-tight">Real-time</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Compression Testing</p>
        </div>
      </section>

      {/* 3. ABOUT KAIHO HUB */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white">
        <div className="space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Kenyan Branch Hub</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Direct From Our Nairobi Distribution Warehouse</h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Kaiho East Africa is the official, direct Kenyan branch of <strong>Kaiho Industries Co., Ltd.</strong> in Toyama, Japan. We do not operate like typical third-party brokers—we own our stock from vehicle purchase in Japan down to our warehouse layout in Nairobi.
          </p>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Our priority is keeping high-demand components completely available on-site at <strong>Atlantis Business Park, Warehouse Number D31 (ICD Road / Maasai Road)</strong>. You can drive in, inspect the units live with your mechanic, and load your items immediately.
          </p>
        </div>
        
        {/* HOVER INFO BLOCK */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4 border-l-4 border-l-brand-orange transition-all duration-300 hover:shadow-md hover:border-slate-300">
          <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Warehouse Information Hub</div>
          <div className="text-2xl font-black text-slate-900 tracking-tight">Atlantis Business Park</div>
          <div className="text-xl font-bold text-brand-orange">Warehouse No. D31</div>
          <p className="text-base text-slate-600 font-normal leading-relaxed pt-1">
            ICD Road, off Maasai Road,<br />
            Nairobi, Kenya.<br />
            <span className="font-bold text-slate-800 block pt-2">✓ Ready for instant mechanic technical testing.</span>
          </p>
        </div>
      </section>

      {/* 4. COMPONENT TAB FILTER ENGINE */}
      <section className="space-y-12 bg-white max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Warehouse Categories</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Available In-Stock Automotive Components</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">Genuine, high-turnover spares optimized for local models: Toyota, Nissan, Subaru, Mitsubishi, Isuzu, and Honda.</p>
        </div>

        {/* TAB CONTROLLERS */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto border-b border-slate-100 pb-4">
          {inventoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedInventoryTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${
                selectedInventoryTab === tab.id 
                  ? 'bg-brand-orange text-white shadow-xs scale-105' 
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FILTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {filteredCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl space-y-4 border border-slate-200 shadow-2xs hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-2xs">{cat.icon}</div>
              <h3 className="text-lg font-bold text-slate-900">{cat.title}</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {cat.parts.map((p, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 font-normal">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM */}
      <section className="space-y-12 bg-white">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Operational Crew</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Cross-Continental Experts</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">Meet the specialists handling your logistical pipeline from initial auction bidding tabs down to warehouse forklift delivery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl text-center space-y-2 border border-slate-200 shadow-2xs relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xs">
              <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-full flex items-center justify-center text-brand-orange font-black mx-auto text-lg">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-2">{member.name}</h3>
              <p className="text-xs text-brand-orange font-bold uppercase tracking-wider">{member.role}</p>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest pt-2">{member.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ADVANTAGE */}
      <section className="max-w-4xl mx-auto bg-slate-50/60 p-8 sm:p-12 rounded-2xl space-y-8 border border-slate-200 shadow-2xs">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">The Kaiho Advantage</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Smart Garages Buy From Our Nairobi Hub</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl transition-transform duration-200 group-hover:scale-125">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Instant Nairobi Pickup</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">No shipping timelines or ocean clearance gridlocks. Walk in, buy your engine, and walk out.</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl transition-transform duration-200 group-hover:scale-125">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Compression-Tested Units</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">Every unit is tested and verified at our parent facility in Japan before dispatch to Kenya.</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl transition-transform duration-200 group-hover:scale-125">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Live Mechanic Inspection</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">Bring your personal technician straight to warehouse D31 to verify internal gears live.</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl transition-transform duration-200 group-hover:scale-125">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Direct Japan Sourcing Backup</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">If your block is highly rare, we tap our parent Toyama yards to dismantle and ship it quickly via loose cargo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="space-y-8 overflow-hidden bg-white">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Client Reviews</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Trusted and Approved by Local Garages</h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 pt-2 px-4 max-w-7xl mx-auto scroll-smooth snap-x">
          {testimonials.map((t, idx) => (
            <div key={idx} className="min-w-[300px] sm:min-w-[360px] max-w-[360px] bg-white p-6 rounded-xl space-y-4 snap-center shrink-0 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="text-yellow-500 flex gap-1 text-sm">⭐⭐⭐⭐⭐</div>
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">"{t.text}"</p>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[11px]">
                <span className="font-bold text-slate-800">{t.client}</span>
                <span className="text-brand-orange font-bold">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (HIGH-CONTRAST ACCORDION WITH HOVER EFFECT) */}
      <section className="max-w-4xl mx-auto space-y-8 bg-white pt-6">
        <div className="text-center space-y-1">
          <span className="text-sm uppercase tracking-widest font-black text-brand-orange block">
            KAIHO EAST AFRICA FAQ
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className={`bg-black rounded-sm overflow-hidden shadow-md transition-all duration-200 border-l-4 ${
                  isOpen ? 'border-brand-orange' : 'border-transparent hover:border-brand-orange'
                }`}
              >
                {/* Accordion Trigger Header Box */}
                <button 
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none bg-black transition-colors group"
                >
                  <span className="text-sm font-black text-white uppercase tracking-wider transition-colors group-hover:text-brand-orange">
                    {idx + 1}. {faq.q}
                  </span>
                  <span className="text-brand-orange text-xl font-light transition-transform duration-200 group-hover:scale-110">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Animated Expanded Sub-Panel */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'max-h-48 border-t border-zinc-900 p-5 bg-zinc-950' 
                      : 'max-h-0'
                  }`}
                >
                  <p className="text-base text-slate-300 font-normal leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}