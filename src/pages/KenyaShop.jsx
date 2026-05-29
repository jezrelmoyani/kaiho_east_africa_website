import React from 'react';

export default function KenyaShop() {
  return (
    <div className="space-y-16 bg-white text-slate-700 animate-fadeIn text-left pb-12">
      
      {/* 1. INTRO HEADER AREA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-12">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange block">
            Atlantis Business Park • Warehouse No. D31
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            Nairobi Warehouse Stock
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl font-normal leading-relaxed">
            Want to see exactly what is on our floor in Nairobi today? We maintain a live, up-to-date catalog on our Kenyan Online Shop so Autoshops, Insurers, and Buyers can instantly confirm local stock availability before driving down to our warehouse.
          </p>
          
          {/* LINK UPDATED TO YOUR LIVE KAIHO INDUSTRY SHOPIFY STORE */}
          <div className="pt-2">
            <a
              href="https://kaihoindustry.myshopify.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#F97316] hover:bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Check Live Kenyan Stock Online
            </a>
          </div>
        </div>
        
        {/* Right Side: Showcase of your local inventory structure using your real image1 asset */}
        <div className="lg:col-span-5 aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-50">
          <img 
            src="/image1.jpg" 
            alt="Kaiho East Africa Nairobi Warehouse Spares" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* 2. OPERATIONAL COMPOUND DIRECTIVES CARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="border border-slate-200 p-6 rounded-2xl space-y-3 bg-slate-50/50">
          <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-brand-orange font-black text-sm">
            D31
          </div>
          <h3 className="font-black text-slate-950 text-base uppercase tracking-tight">Immediate Warehouse Pickup</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Once you locate your engine assembly or body panels on our online shop, you can head straight to **Warehouse No. D31 at Atlantis Business Park (Off ICD Road / Maasai Road, Nairobi)** to buy, load, and pick up your items immediately.
          </p>
        </div>

        <div className="border border-slate-200 p-6 rounded-2xl space-y-3 bg-slate-50/50">
          <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center text-white font-black text-sm">
            ✓
          </div>
          <h3 className="font-black text-slate-950 text-base uppercase tracking-tight">Bring Your Technician</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Total transparency is our standard. Whether you represent a commercial garage, an auto parts store, or an insurance claim, you are always welcome to run live physical diagnostics on our warehouse floor before making payments.
          </p>
        </div>

      </div>

      {/* 3. QUICK ASSURANCE MATRIX */}
      <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-lg border border-slate-800">
        <div className="md:col-span-8 space-y-2">
          <span className="text-xs uppercase tracking-widest font-black text-brand-orange block">Not found in local stock?</span>
          <h3 className="text-xl font-bold tracking-tight uppercase">Tap our Direct Japan Pipeline</h3>
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-xl">
            If your exact component model or rare chassis configuration isn't currently listed on the Kenyan Online Shop, don't worry. We can source it directly from Japan and ship it down via our Less-than-Container Load (LCL) service.
          </p>
        </div>
        <div className="md:col-span-4 md:text-right w-full">
          <a
            href="mailto:sales@kaihoeastafrica.co.ke?subject=Inquiry%20Regarding%20Out-of-Stock%20Nairobi%20Item"
            className="inline-block text-center w-full bg-white hover:bg-slate-100 text-slate-950 font-black text-xs uppercase tracking-widest py-4 px-4 rounded-xl transition-all shadow-md"
          >
            Contact Spares Desk
          </a>
        </div>
      </div>

    </div>
  );
}