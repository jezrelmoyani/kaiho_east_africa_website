import React from 'react';

export default function KenyaShop() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-black text-brand-orange px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
          📍 Ready Stock In Nairobi
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Browse Available Nairobi Warehouse Inventory
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base">
          Skip the sea freight lines entirely. All parts featured below are fully cleared, compression-tested, and resting on our showroom floors at <strong>Atlantis Business Park, Warehouse No. D31</strong> ready for immediate loading.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
          <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=500" alt="Nairobi Inventory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex items-end">
            <span className="text-white text-xs font-bold uppercase tracking-wider">Ready Engine Assemblies</span>
          </div>
        </div>
        <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
          <img src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=500" alt="Warehouse D31 Spare Parts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex items-end">
            <span className="text-white text-xs font-bold uppercase tracking-wider">Body Panels & Half-Cuts</span>
          </div>
        </div>
        <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
          <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=500" alt="Japanese Quality Checks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex items-end">
            <span className="text-white text-xs font-bold uppercase tracking-wider">Suspension & Transmission Hubs</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Enter Our Live Kenyan E-Commerce Portal</h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Click below to open our live digital catalog. Filter by model number, see real-time warehouse stock balances, and lock in your purchase directly.
        </p>
        <div className="pt-2">
          <a href="https://kaihoindustry.myshopify.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5">
            🛒 Open Kenyan Online Shop
          </a>
        </div>
      </div>
    </div>
  );
}