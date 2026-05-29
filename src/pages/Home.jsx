import React, { useState, useEffect, useRef } from 'react';

function SmoothRunningNumber({ targetValue, suffix = '', type = 'up', isVisible }) {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (!isVisible) {
      if (targetValue === 'D31') setDisplayValue('D1');
      else if (type === 'down') setDisplayValue('100');
      else setDisplayValue(targetValue);
      return;
    }

    if (targetValue === 'D31') {
      let currentNum = 1;
      const duration = 2000;
      const stepTime = Math.floor(duration / 31);
      const timer = setInterval(() => {
        currentNum += 1;
        if (currentNum >= 31) {
          setDisplayValue('D31');
          clearInterval(timer);
        } else {
          setDisplayValue(`D${currentNum}`);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }

    if (targetValue === 'Live') {
      setDisplayValue('Live');
      return;
    }

    const numericTarget = parseFloat(targetValue);
    const duration = 2000;

    if (type === 'down' && numericTarget === 0) {
      let currentNum = 100;
      const stepTime = Math.floor(duration / 100);
      const timer = setInterval(() => {
        currentNum -= 1;
        setDisplayValue(String(currentNum));
        if (currentNum <= 0) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }

    if (type === 'up') {
      let currentNum = 0;
      const stepTime = Math.max(Math.floor(duration / numericTarget), 15);
      const timer = setInterval(() => {
        currentNum += 1;
        setDisplayValue(String(currentNum));
        if (currentNum >= numericTarget) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [targetValue, type, isVisible]);

  return (
    <span className="text-3xl font-black text-slate-900 tracking-tight font-mono">
      {displayValue}{suffix}
    </span>
  );
}

export default function Home({ setCurrentPage }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedInventoryTab, setSelectedInventoryTab] = useState('all');
  const [sectionIsVisible, setSectionIsVisible] = useState(false);
  const metricsSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSectionIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.15 }
    );
    if (metricsSectionRef.current) observer.observe(metricsSectionRef.current);
    return () => {
      if (metricsSectionRef.current) observer.unobserve(metricsSectionRef.current);
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const ribbonImages = [
    { url: "/image1.jpg", alt: "100% Authentic Ex-Japan Stock" },
    { url: "/image2.jpg", alt: "Direct From Bidding to Warehouse" },
    { url: "/image3.jpg", alt: "Strict Quality Control & Testing" },
    { url: "/image4.jpg", alt: "No Middlemen, Best Wholesale Rates" },
    { url: "/image5.jpg", alt: "Trusted by Local Auto Garages" },
    { url: "/image6.jpg", alt: "Premium Grade Body Panels & Cuts" }
  ];

  const inventoryTabs = [
    { id: 'all', label: 'View All Systems' },
    { id: 'powertrain', label: 'Engines & Gearboxes' },
    { id: 'bodywork', label: 'Body Parts & Lighting' },
    { id: 'under carriage', label: 'Suspensions & Axles' }
  ];

  const sparePartsCategories = [
    { 
      title: "Engines & Gearboxes", 
      type: "powertrain", 
      parts: [
        "Complete Powertrain Assemblies", 
        "Intact Blocks with All Auxiliaries", 
        "Tested Automatic & Manual Gearboxes", 
        "Ex-Japan Low-Mileage Assemblies"
      ],
      note: "Sold as a complete, intact system with everything attached."
    },
    { 
      title: "Body Parts", 
      type: "bodywork", 
      parts: [
        "Complete Nose Cuts", 
        "Pristine Side Door Shells", 
        "Rear Boot Assemblies", 
        "Bonnets & Quarter Panels"
      ] 
    },
    { 
      title: "Lighting Configurations", 
      type: "bodywork", 
      parts: [
        "Original Xenon/LED Headlights", 
        "Rear Tail Lamp Units", 
        "Fog Light Assemblies", 
        "Blinker & Indicator Tracks"
      ] 
    },
    { 
      title: "Suspension Configurations", 
      type: "under carriage", 
      parts: [
        "Complete Intact Axles", 
        "Hub & Drum Assemblies", 
        "Original Brake Pad Configurations", 
        "Drive Shafts & Control Arms"
      ],
      note: "Sold as complete axles with all companion components intact."
    }
  ];

  const filteredCategories = selectedInventoryTab === 'all' 
    ? sparePartsCategories 
    : sparePartsCategories.filter(cat => cat.type === selectedInventoryTab);

  // UPDATED WITH REAL DATA DETAILS
  const teamMembers = [
    { name: "Mika Yamaguchi", role: "Inventory and Warehouse Manager", location: "Nairobi Facility Operations" },
    { name: "Lucy Koyama", role: "Sales and Marketing Manager", location: "Nairobi Commercial Desk" },
    { name: "Francis Karanja", role: "Accounts Head", location: "Nairobi Finance Office" }
  ];

  const testimonials = [
    { text: "Drove straight to Atlantis Business Park and picked up a clean 1NZ engine block the same afternoon. No waiting for shipping.", customer: "Garissa Road Auto Mechanics", location: "Thika" },
    { text: "Unbelievable local stock. Found exact replacement doors for a Mazda Axela on the warehouse floor. Spotless condition.", customer: "Bodyworks Specialist Team", location: "Nairobi" },
    { text: "Best part is you inspect it live with your mechanic in Nairobi before paying. Total transparency.", customer: "Wholesale Parts Importer", location: "Mombasa" },
    { text: "When a specialized Subaru block wasn't in their Nairobi bay, they ordered it straight from their Japan branch and cleared it fast.", customer: "Fleet Maintenance Manager", location: "Eldoret" }
  ];

  const faqs = [
    { q: "What kind of parts do you sell?", a: "We supply premium, genuine used automotive components specializing in Japanese vehicle brands such as Toyota, Nissan, Subaru, Mitsubishi, Honda, and Isuzu. Our stock ranges from complete engine assemblies and gearboxes to structural panels and suspension configurations." },
    { q: "Are the parts tested before sale?", a: "Absolutely. Every powertrain component—engines and gearboxes alike—undergoes rigorous inspection and compression diagnostics at our industrial processing yard in Kanazawa, Japan, prior to container distribution loading." },
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
      
      {/* HERO SECTION */}
      <section className="text-center max-w-5xl mx-auto space-y-8 pt-6 bg-white animate-fadeIn">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange block">Official Kenyan Branch</span>
          <h1 className="text-5xl sm:text-8xl font-black tracking-tighter text-slate-950 uppercase select-none">Kaiho East Africa</h1>
          <div className="h-1 w-32 bg-brand-orange mx-auto rounded-full mt-4" />
        </div>

        <div className="w-full relative group/ribbon pt-4">
          <div className="text-left max-w-5xl mx-auto px-2 mb-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#F97316]">Market Choice</span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 uppercase">Why Our Parts Are Preferred</h3>
          </div>

          <div id="imageRibbonContainer" className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-xs bg-slate-50 py-4 px-2 flex gap-4 overflow-x-auto scroll-smooth scrollbar-none snap-x">
            {ribbonImages.map((img, index) => (
              <div key={index} className="min-w-[240px] sm:min-w-[300px] h-40 rounded-xl overflow-hidden shrink-0 snap-center border border-slate-100 relative group/img transition-all duration-300 hover:scale-[1.02] hover:shadow-md cursor-pointer">
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110 filter brightness-90 bg-slate-100" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=400"; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-4">
                  <p className="text-xs sm:text-sm text-white font-black uppercase tracking-wider leading-snug">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <button type="button" onClick={() => scrollRibbon('left')} className="absolute left-3 top-1/2 translate-y-2 w-10 h-10 bg-white/90 hover:bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center font-bold text-slate-800 opacity-0 group-hover/ribbon:opacity-100 transition-opacity duration-300 active:scale-95 z-10">&larr;</button>
          <button type="button" onClick={() => scrollRibbon('right')} className="absolute right-3 top-1/2 translate-y-2 w-10 h-10 bg-white/90 hover:bg-white border border-slate-200 shadow-md rounded-full flex items-center justify-center font-bold text-slate-800 opacity-0 group-hover/ribbon:opacity-100 transition-opacity duration-300 active:scale-95 z-10">&rarr;</button>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-black tracking-widest uppercase">Immediate Pickup: Atlantis Business Park, Nairobi</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight uppercase">Ready Stock: <span className="text-brand-orange bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">Premium Used Engines</span> & Genuine Spares</h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">Skip the sea freight waiting time. Buy high-grade, compression-tested Japanese automotive assemblies straight from our warehouse floor in Nairobi today.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button type="button" onClick={() => setCurrentPage('kenya')} className="px-7 py-4 bg-[#F97316] hover:bg-black text-white transition-all duration-200 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">Browse Nairobi Warehouse Stock</button>
            <button type="button" onClick={() => setCurrentPage('japan')} className="px-7 py-4 bg-slate-900 hover:bg-black text-white transition-all duration-200 rounded-xl font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 border border-slate-800">Order Missing Item from Japan</button>
          </div>
        </div>
      </section>

      {/* METRICS COUNTER BLOCK */}
      <section ref={metricsSectionRef} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50/60 border border-slate-200 p-6 rounded-2xl text-center shadow-2xs">
        <div className="space-y-1 flex flex-col justify-center items-center h-16">
          <SmoothRunningNumber targetValue="100" suffix="%" type="up" isVisible={sectionIsVisible} />
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide pt-1">Japanese Sourced</p>
        </div>
        <div className="space-y-1 border-l border-slate-200 flex flex-col justify-center items-center h-16">
          <SmoothRunningNumber targetValue="D31" isVisible={sectionIsVisible} />
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide pt-1">Nairobi Warehouse Bay</p>
        </div>
        <div className="space-y-1 border-l border-slate-200 flex flex-col justify-center items-center h-16">
          <SmoothRunningNumber targetValue="0" suffix="%" type="down" isVisible={sectionIsVisible} />
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide pt-1">Middlemen Fees</p>
        </div>
        <div className="space-y-1 border-l border-slate-200 flex flex-col justify-center items-center h-16">
          <SmoothRunningNumber targetValue="Live" isVisible={sectionIsVisible} />
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wide pt-1">Compression Testing</p>
        </div>
      </section>

      {/* ABOUT OPERATIONS BLOCK */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white">
        <div className="space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Kenyan Operations</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Direct From Our Nairobi Distribution Warehouse</h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">Kaiho East Africa is the official, direct Kenyan branch of <strong>Kaiho Industry Co., Ltd.</strong> in Kanazawa, Japan. We do not operate like typical third-party brokers—we own our stock from vehicle purchase in Japan down to our warehouse layout in Nairobi.</p>
          <p className="text-base text-slate-600 font-normal leading-relaxed">Our priority is keeping high-demand components completely available on-site at <strong>Atlantis Business Park, Warehouse Number D31 (ICD Road / Maasai Road)</strong>. You can drive in, inspect the units live with your mechanic, and load your items immediately.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4 border-l-4 border-l-brand-orange transition-all duration-300 hover:shadow-md hover:border-slate-300">
          <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Warehouse Information Profile</div>
          <div className="text-2xl font-black text-slate-900 tracking-tight">Atlantis Business Park</div>
          <div className="text-xl font-bold text-brand-orange">Warehouse No. D31</div>
          <p className="text-base text-slate-600 font-normal leading-relaxed pt-1">ICD Road, off Maasai Road,<br />Nairobi, Kenya.<br /><span className="font-bold text-slate-800 block pt-2">Verified ready for mechanical technical testing.</span></p>
        </div>
      </section>

      {/* INVENTORY TRACK OVERVIEW */}
      <section className="space-y-12 bg-white max-w-6xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Warehouse Categories</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Available In-Stock Automotive Components</h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">Genuine, high-turnover spares optimized for local models: Toyota, Nissan, Subaru, Mitsubishi, Isuzu, and Honda.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto border-b border-slate-100 pb-4">
          {inventoryTabs.map((tab) => (
            <button key={tab.id} type="button" onClick={() => setSelectedInventoryTab(tab.id)} className="px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 border border-slate-200" style={{ backgroundColor: selectedInventoryTab === tab.id ? '#F97316' : '#F8FAFC', color: selectedInventoryTab === tab.id ? '#FFFFFF' : '#475569' }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-brand-orange/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 uppercase tracking-tight">{cat.title}</h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {cat.parts.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 font-normal">
                      <span className="w-1.5 h-1.5 bg-brand-orange rounded-full shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              {cat.note && (
                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-[11px] font-bold text-brand-orange italic">💡 {cat.note}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RE-ENGINEERED OPERATIONAL CREW MATRIX USING REAL ROLES */}
      <section className="space-y-12 bg-white">
        <div className="text-center space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Operational Crew</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Meet the Kaiho East Africa Team</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">The internal on-site specialists driving your local parts procurement line at Atlantis Business Park.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl text-center space-y-2 border border-slate-200 shadow-2xs relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xs">
              {/* Dynamic Circular Letter Avatars mapping the actual staff names */}
              <div className="w-16 h-16 bg-orange-50 border border-orange-100 rounded-full flex items-center justify-center text-brand-orange font-black mx-auto text-lg">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-base font-black text-slate-950 pt-2 uppercase tracking-tight">{member.name}</h3>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{member.role}</p>
              <div className="text-[10px] uppercase font-bold text-brand-orange tracking-widest pt-2">{member.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC ADVANTAGES */}
      <section className="max-w-4xl mx-auto bg-slate-50/60 p-8 sm:p-12 rounded-2xl space-y-8 border border-slate-200 shadow-2xs">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">The Kaiho Advantage</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Customers Choose Our Nairobi Warehouse</h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto pt-1 font-normal">Providing reliable procurement solutions optimized for **Autoshops, Garages, Insurance Claims Adjusters, and individual End-Users**.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Instant Nairobi Pickup</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">No shipping timelines or ocean clearance delays. Walk in, inspect the components, and collect your spares immediately.</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Compression-Tested Units</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">Every individual powertrain block is thoroughly diagnosed at our processing yard in Japan before loading.</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Transparent Live Inspection</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">Whether you are an insurer, auto retailer, or end-user, you can evaluate items live at bay D31 before making payments.</p>
            </div>
          </div>
          <div className="flex gap-4 group">
            <div className="text-brand-orange font-bold text-xl">✓</div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Direct Japan Sourcing Backup</h4>
              <p className="text-xs text-slate-500 pt-1 leading-relaxed">If a specialized component profile is out of stock locally, we source and clear it rapidly via our parent networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="space-y-8 overflow-hidden bg-white">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Customer Reviews</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Trusted Across the Automotive Market</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 pt-2 px-4 max-w-7xl mx-auto scroll-smooth snap-x">
          {testimonials.map((t, idx) => (
            <div key={idx} className="min-w-[300px] sm:min-w-[360px] max-w-[360px] bg-white p-6 rounded-xl space-y-4 snap-center shrink-0 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">"{t.text}"</p>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[11px]">
                <span className="font-bold text-slate-800">{t.customer}</span>
                <span className="text-brand-orange font-bold">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto space-y-8 bg-white pt-6">
        <div className="text-center space-y-1">
          <span className="text-sm uppercase tracking-widest font-black text-brand-orange block">KAIHO EAST AFRICA FAQ</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className={`bg-black rounded-sm overflow-hidden shadow-md transition-all duration-200 border-l-4 ${isOpen ? 'border-brand-orange' : 'border-transparent hover:border-brand-orange'}`}>
                <button type="button" onClick={() => toggleFaq(idx)} className="w-full text-left p-5 flex justify-between items-center focus:outline-none bg-black transition-colors group">
                  <span className="text-sm font-black text-white uppercase tracking-wider transition-colors group-hover:text-brand-orange pr-4">{idx + 1}. {faq.q}</span>
                  <span className="text-brand-orange text-xl font-light transition-transform duration-200 group-hover:scale-110 shrink-0">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t border-zinc-900 p-5 bg-zinc-950' : 'max-h-0'}`}>
                  <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}