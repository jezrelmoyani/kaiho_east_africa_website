import React from 'react';

export default function JapanShop() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-black text-brand-orange px-3 py-1 rounded-full bg-orange-50 border border-orange-200">
          🚢 Direct Industrial Pipeline
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Custom Sourcing From Our Japan Yards
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base">
          Can't find a highly specialized engine block or rare structural panel inside our Nairobi bays? We pull directly from our parent dismantling facility in <strong>Toyama, Japan</strong> to custom build your container load.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
          <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=500" alt="Japan Cutting Yards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex items-end">
            <span className="text-white text-xs font-bold uppercase tracking-wider">Toyama corporate cutting facility</span>
          </div>
        </div>
        <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
          <img src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=500" alt="LCL Container Packing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex items-end">
            <span className="text-white text-xs font-bold uppercase tracking-wider">LCL Loose Share Container Loading</span>
          </div>
        </div>
        <div className="h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group">
          <img src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=500" alt="Rigorous Diagnostics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent p-4 flex items-end">
            <span className="text-white text-xs font-bold uppercase tracking-wider">Compression Testing Records</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Access ePartsWorld Japan Portal</h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
          Connect straight to our specialized Japanese ePartsWorld framework catalog to trigger overseas yard dispatches and loose container custom bookings.
        </p>
        <div className="pt-2">
          <a href="https://epartsworld-kenya.myshopify.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-black text-sm uppercase tracking-wider rounded-xl shadow-md transition-all transform hover:-translate-y-0.5">
            🌐 Connect Global Japan Portal
          </a>
        </div>
      </div>
    </div>
  );
}