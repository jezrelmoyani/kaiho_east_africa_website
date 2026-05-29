import React from 'react';

export default function JapanShop() {
  const serviceHighlights = [
    { title: "Zero Local Limits", desc: "Unlock exclusive access to an international JDM supply chain. Sourced straight from major auto auctions and vehicle dismantling matrices across Japan.", badge: "Global Supply" },
    { title: "Smart Automated Freight", desc: "No haggling, no calculation delays. The system instantly weighs your item parameters to generate specific, transparent sea freight rates.", badge: "Instant Rates" },
    { title: "Total Logistics Control", desc: "Relax while professionals move your cargo. Port clearance, container loading, and ocean freight logistics are fully managed by Topmarine.", badge: "Full Transit" },
    { title: "Unbeatable Cargo Savings", desc: "Pay only for the volume your spare parts occupy. Benefit from specialized LCL shared container rates with reliable 2 to 3-month delivery windows.", badge: "LCL Pricing" }
  ];

  return (
    <div className="space-y-24 bg-white text-slate-700 animate-fadeIn text-left pb-12">
      
      {/* 1. HERO DESCRIPTION BANNER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-16">
        
        {/* Left Side: Bold Messaging Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange block">
              Import On Demand • Limitless Inventory Access
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 uppercase tracking-tight leading-none">
              Direct Japan <br />Sourcing Portal
            </h1>
          </div>
          
          <blockquote className="border-l-4 border-brand-orange pl-4 italic text-base sm:text-lg text-slate-900 font-extrabold my-4 leading-relaxed uppercase tracking-wide">
            "Can’t find the part in Kenya? We source it directly from Japan and deliver it to you through our LCL shipping service."
          </blockquote>
          
          <p className="text-sm text-slate-500 leading-relaxed font-normal max-w-xl">
            Stop restricting your operations to components already sitting in the local market. Tap into authentic, low-mileage Ex-Japan powertrains, hard-to-find panels, and specialty assemblies directly on demand.
          </p>
          
          {/* UPDATED PORTAL REDIRECT TO YOUR LIVE SHOPIFY STORE */}
          <div className="pt-2">
            <a
              href="https://epartsworld-kenya.myshopify.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#F97316] hover:bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Launch LCL Online Shop
            </a>
          </div>
        </div>
        
        {/* Right Side: Tall Portrait Frame Custom-Built for Your Brand Ambassador */}
        <div className="lg:col-span-5 aspect-[3/4] max-w-sm mx-auto w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative bg-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
          <img 
            src="/image8.jpg" 
            alt="Kaiho East Africa Brand Ambassador" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = "/image4.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* 2. PREMIUM ACCENT ADVANTAGE BLOCKS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange block">Why Order Direct</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">The LCL Sourcing Advantage</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceHighlights.map((highlight, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-white to-slate-50 border-l-4 border-l-brand-orange border border-slate-200 p-6 rounded-r-xl rounded-l-sm space-y-3 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">
                  {highlight.badge}
                </span>
                <span className="text-xs font-black text-slate-300 font-mono group-hover:text-brand-orange/40 transition-colors">
                  [ADV-0{idx + 1}]
                </span>
              </div>
              <h3 className="font-black text-slate-900 text-base tracking-tight uppercase">{highlight.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{highlight.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRANSFORMED SLEEK TIMELINE ROADWAY */}
      <section className="space-y-12 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-brand-orange block">Our Workflow Matrix</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">The Import Journey</h2>
        </div>

        {/* Visual Line Connect Track */}
        <div className="relative pl-8 sm:pl-0 sm:pt-8 grid grid-cols-1 sm:grid-cols-5 gap-8 before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 sm:before:left-0 sm:before:right-0 sm:before:top-3.5 sm:before:h-0.5 sm:before:w-full">
          
          {/* STEP 1 */}
          <div className="relative space-y-2 group">
            <div className="absolute -left-[27px] top-1.5 sm:left-4 sm:-top-[34px] w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-black transition-colors z-10" />
            <div className="pt-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider font-mono">Step 01</span>
              <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight pt-0.5">Access Store</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal pt-1 sm:pr-2">
                Open our dedicated LCL Online Shop dashboard to scan live inventory components straight from Japan.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative space-y-2 group">
            <div className="absolute -left-[27px] top-1.5 sm:left-4 sm:-top-[34px] w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-black transition-colors z-10" />
            <div className="pt-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider font-mono">Step 02</span>
              <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight pt-0.5">Search Spares</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal pt-1 sm:pr-2">
                Filter down through unique chassis code references, custom engine stamps, or model indicators.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative space-y-2 group">
            <div className="absolute -left-[27px] top-1.5 sm:left-4 sm:-top-[34px] w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-black transition-colors z-10" />
            <div className="pt-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider font-mono">Step 03</span>
              <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight pt-0.5">Add to Cart</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal pt-1 sm:pr-2">
                Lock down your verified selections into your virtual basket, staging them safely for consolidation.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative space-y-2 group">
            <div className="absolute -left-[27px] top-1.5 sm:left-4 sm:-top-[34px] w-5 h-5 bg-white border-4 border-slate-300 rounded-full group-hover:border-black transition-colors z-10" />
            <div className="pt-1">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider font-mono">Step 04</span>
              <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight pt-0.5">Instant Rates</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal pt-1 sm:pr-2">
                The checkout algorithm prints dynamic shipping values tailored precisely to each specific part's weight.
              </p>
            </div>
          </div>

          {/* STEP 5 (ACTIVE HIGHLIGHT NODE) */}
          <div className="relative space-y-2 group">
            <div className="absolute -left-[27px] top-1.5 sm:left-4 sm:-top-[34px] w-5 h-5 bg-white border-4 border-brand-orange rounded-full z-10 animate-pulse" />
            <div className="pt-1">
              <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider font-mono">Step 05</span>
              <h4 className="font-black text-brand-orange text-sm uppercase tracking-tight pt-0.5">Topmarine Pickup</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                Collect your authentic ex-Japan parts package after 2–3 months direct from the Mombasa Road depot compound.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SOLID SECURITY NOTICE CARD FOR COLLECTION CLARITY */}
      <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xl border border-slate-800">
        <div className="md:col-span-8 space-y-2">
          <span className="text-xs uppercase tracking-widest font-black text-brand-orange block">Clear Logistics Directive</span>
          <h3 className="text-xl font-bold tracking-tight uppercase">Mombasa Road Warehouse Collection</h3>
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl">
            To keep your supply chain perfectly streamlined, please note that custom-ordered parts imported from Japan are **not** held at our Atlantis Business Park spares facility. Once cleared at the port, your items go directly to the secure **Topmarine Warehouse along Mombasa Road, Nairobi** for direct customer pickup.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right w-full">
          <a
            href="https://epartsworld-kenya.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center w-full bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-widest py-4 px-4 rounded-xl transition-all shadow-md"
          >
            Go To Online Store
          </a>
        </div>
      </div>

    </div>
  );
}