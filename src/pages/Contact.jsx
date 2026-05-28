import React, { useState } from 'react';

export default function Contact() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn pb-12 bg-white">
      
      {/* 1. HEADER */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-bold text-brand-orange px-3 py-1 rounded-full bg-orange-50 border border-orange-100 inline-block">
          Logistics Control Desk
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Contact Our Sourcing Specialists
        </h1>
        <p className="text-base text-slate-600 font-normal leading-relaxed">
          Connect directly with our team to check warehouse availability in Nairobi or coordinate custom container dispatches from our parent facility in Japan.
        </p>
      </div>

      {/* 2. CHANNELS BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <a 
          href="tel:+254795110000" 
          className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-orange/50 hover:bg-slate-50 transition-all shadow-xs group"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">📞</span>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Voice Hotline</p>
              <p className="text-sm font-bold text-slate-900">+254 795 110 000</p>
            </div>
          </div>
          <span className="text-slate-400 group-hover:text-brand-orange transition-colors text-sm">→</span>
        </a>

        <a 
          href="https://wa.me/254795110000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-500/50 hover:bg-slate-50 transition-all shadow-xs group"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">💬</span>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp Line</p>
              <p className="text-sm font-bold text-slate-900">Instant Chat Link</p>
            </div>
          </div>
          <span className="text-slate-400 group-hover:text-emerald-500 transition-colors text-sm">→</span>
        </a>

        <div 
          onClick={() => handleCopyToClipboard('export2@kaiho.co.jp', 'email')}
          className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-400 transition-all shadow-xs cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">✉️</span>
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Corporate Mail</p>
              <p className="text-sm font-bold text-slate-900">
                {copiedText === 'email' ? '✨ Copied!' : 'export2@kaiho.co.jp'}
              </p>
            </div>
          </div>
          <span className="text-slate-400 text-[10px] font-bold uppercase">{copiedText === 'email' ? '' : 'Copy'}</span>
        </div>
      </div>

      {/* 3. REGIONAL LOCATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-2">
        
        {/* NAIROBI CARD */}
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs flex flex-col justify-between border-t-4 border-t-brand-orange">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-brand-orange bg-orange-50 px-2 py-0.5 rounded">
                  Nairobi Direct Terminal
                </span>
                <h3 className="text-xl font-bold text-slate-900">Kaiho East Africa Hub</h3>
              </div>
              <span className="text-2xl">📍</span>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-3">
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                <strong className="text-slate-900 block font-semibold">Atlantis Business Park</strong>
                Warehouse Number D31, ICD Road,<br />
                Off Maasai Road, Nairobi, Kenya.
              </p>
              <p className="text-base text-slate-600 font-normal leading-relaxed bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-semibold text-slate-700">Hours:</span> Mon - Sat | 8:00am - 5:00pm
              </p>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                ℹ️ On-site loading equipment and forklifts ready.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block transition-colors shadow-xs"
            >
              Open Google Maps Route
            </a>
          </div>
        </div>

        {/* JAPAN CARD */}
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs flex flex-col justify-between border-t-4 border-t-slate-800">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Corporate Parent Headquarters
                </span>
                <h3 className="text-xl font-bold text-slate-900">Kaiho Industry Co., Ltd.</h3>
              </div>
              <span className="text-2xl">🇯🇵</span>
            </div>

            <hr className="border-slate-100" />

            <div className="space-y-3">
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                <strong className="text-slate-900 block font-semibold">Japan Sourcing Head Office</strong>
                1-25 Higashikagatsume-machi,<br />
                Kanazawa, Ishikawa,<br />
                Japan, 9200209.
              </p>
              <p className="text-base text-slate-600 font-normal leading-relaxed bg-slate-50 p-2 rounded border border-slate-100">
                <span className="font-semibold text-slate-700">Hours:</span> Mon - Fri | 8:00am - 5:00pm (JST)
              </p>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                ℹ️ Dedicated loose container container configurations.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <button 
              onClick={() => handleCopyToClipboard('1-25 Higashikagatsume-machi, Kanazawa, Ishikawa, Japan', 'jpAddress')}
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 text-center py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider block transition-colors border border-slate-200 shadow-2xs"
            >
              {copiedText === 'jpAddress' ? '✨ Address Copied!' : 'Copy Japanese Address'}
            </button>
          </div>
        </div>

      </div>

      {/* 4. MECHANIC CALLOUT */}
      <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-4 text-center max-w-4xl mx-auto">
        <p className="text-base text-slate-600 font-normal leading-relaxed">
          💡 <span className="font-semibold text-slate-900">Bringing your mechanic?</span> Our warehouse floor at <span className="font-semibold text-slate-900">Warehouse D31</span> has diagnostic space ready so you can fully inspect component blocks, checking seals or structural setups before loading.
        </p>
      </div>

    </div>
  );
}