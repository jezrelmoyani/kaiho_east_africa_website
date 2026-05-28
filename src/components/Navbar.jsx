import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationTabs = [
    { id: 'home', label: 'About Us' },
    { id: 'kenya', label: 'Nairobi Warehouse' },
    { id: 'japan', label: 'Japan Sourcing' },
    { id: 'returns', label: 'Return Policy' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleTabClick = (tabId) => {
    setCurrentPage(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-white border-b border-slate-100 fixed top-0 left-0 right-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LEFT SIDE: REAL IMAGE LOGO CONTAINER */}
          <div 
            onClick={() => handleTabClick('home')} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <img 
              src="/logo.png" 
              alt="Kaiho East Africa Logo" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
              onError={(e) => {
                // Fallback elegant typography in case image name or path breaks temporarily
                e.target.style.display = 'none';
                document.getElementById('brand-text-fallback').style.display = 'block';
              }}
            />
            <div id="brand-text-fallback" className="hidden">
              <span className="text-lg font-black text-slate-950 tracking-tight">KAIHO</span>
              <span className="text-xs font-bold text-brand-orange block uppercase tracking-widest">East Africa</span>
            </div>
          </div>

          {/* CENTER/RIGHT SIDE: DESKTOP TABS */}
          <div className="hidden md:flex items-center gap-1">
            {navigationTabs.map((tab) => {
              const isActive = currentPage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 relative ${
                    isActive 
                      ? 'text-brand-orange bg-orange-50/60' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-orange rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROP-DOWN INTERACTIVE DRAWER */}
      <div 
        className={`md:hidden bg-white border-b border-slate-100 transition-all duration-200 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-72 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navigationTabs.map((tab) => {
            const isActive = currentPage === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                  isActive 
                    ? 'text-brand-orange bg-orange-50 text-orange-600' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}