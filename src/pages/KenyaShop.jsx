import React from 'react';

export default function KenyaShop() {
  const handleExternalRedirect = () => {
    window.open('https://kaihoindustry.myshopify.com/', '_blank');
  };

  const inventoryHighlights = [
    { type: "Powertrain Assemblies", details: "Complete, low-mileage engine blocks (1NZ, 2AZ, K24) and tested gearboxes sold intact with all accessories." },
    { type: "Premium Body Panels", details: "Pristine nose cuts, side door shells, bonnets, and boot configurations matching major Japanese models." },
    { type: "Lighting & Suspension", details: "Original Xenon/LED headlamps, tail lights, complete intact axles, and hub assemblies ready for garage loading." }
  ];

  return (
    <div className="space-y-12 bg-white text-slate-700 animate-fadeIn text-left pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. HERO TITLE BLOCK */}
      <div className="text-center max-w-3xl mx-auto space-y-3 py-4">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F97316] bg-orange-50 border border-orange-100 px-3 py-1 rounded-full inline-block">
          Official Shopify Portal
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
          Nairobi Ready-Stock Store
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
          Skip the ocean shipping timelines. Access our live, synchronized e-commerce catalog to view components currently sitting on our warehouse floor.
        </p>
      </div>

      {/* 2. RE-ARRANGED ASYMMETRIC GRID WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: INVENTORY PROFILE SHOWCASE */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316]">Atlantis Park Layout</span>
              <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight">Our Local Stock Pipeline</h2>
            </div>
            
            {/* INVENTORY TRACK MAPS */}
            <div className="space-y-4">
              {inventoryHighlights.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-1">
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full" /> {item.type}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed pl-3.5">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SPLASH IMAGE PREVIEW */}
          <div className="w-full h-36 rounded-2xl overflow-hidden border border-slate-200 shadow-2xs relative mt-4 lg:mt-0">
            <img 
              src="/image1.jpg" 
              alt="Kaiho Nairobi Warehouse Yard Inventory" 
              className="w-full h-full object-cover filter brightness-95"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600";
              }}
            />
            <div className="absolute inset-0 bg-slate-950/5" />
          </div>
        </div>

        {/* RIGHT COLUMN: ACTION PORTAL CARD WITH BUYER ADVANTAGES */}
        <div className="lg:col-span-6 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-zinc-800 flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <div className="space-y-1 border-b border-zinc-900 pb-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316] block">Verified Advantages</span>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">Why Buy Via Our Store?</h3>
            </div>

            {/* PURCHASING PERKS */}
            <div className="space-y-4 text-xs sm:text-sm font-normal text-zinc-400">
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <p><strong className="text-white font-bold block mb-0.5">Instant Local Pickup:</strong> Buy online and drive straight to Warehouse No. D31 for immediate forklift cargo loading.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <p><strong className="text-white font-bold block mb-0.5">Live Technical Testing:</strong> Bring your private mechanic to evaluate and check compression lines live on our floor before loading.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <p><strong className="text-white font-bold block mb-0.5">No Middlemen Markups:</strong> We own our container logistics completely from Japan to Kenya, passing the best wholesale rates to you.</p>
              </div>
            </div>
          </div>

          {/* SHOPIFY DISPATCH HUB */}
          <div className="space-y-3 pt-4 border-t border-zinc-900">
            <button
              type="button"
              onClick={handleExternalRedirect}
              className="w-full py-4 bg-[#F97316] hover:bg-white hover:text-slate-950 text-white text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 transform active:scale-[0.99]"
            >
              🛍️ Go to Nairobi Online Shop
            </button>
            <p className="text-center text-[10px] text-zinc-500 font-bold uppercase tracking-wider font-mono">
              Redirects safely to: kaihoindustry.myshopify.com
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}