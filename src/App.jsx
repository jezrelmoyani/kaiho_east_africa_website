import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import KenyaShop from './pages/KenyaShop';
import JapanShop from './pages/JapanShop';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Returns from './pages/Returns';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. LISTEN TO BROWSER BACK/FORWARD BUTTON CLICKS
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        // Change the React page to match the browser's history state
        setCurrentPage(event.state.page);
      } else {
        // Default fallback to home if no state exists
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 2. INTERCEPT PAGE CHANGES TO SAVE THEM IN THE BROWSER HISTORY
  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
    // Pushes a new state block into the browser's memory timeline
    window.history.pushState({ page: pageName }, '', `?page=${pageName}`);
  };

  // Smooth viewport reset and close mobile drawer on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentPage]);

  const handleLogoAction = () => {
    if (currentPage === 'home') {
      window.location.reload();
    } else {
      navigateToPage('home');
    }
  };

  const handleFloatingWhatsAppClick = () => {
    const targetNumber = "254795555318";
    const chatText = "Hello Kaiho East Africa Team, I am browsing your website inventory catalog and would like to quickly verify stock availability for some genuine ex-Japan parts.";
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(chatText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={navigateToPage} />;
      case 'kenya': return <KenyaShop />;
      case 'japan': return <JapanShop />;
      case 'contact': return <Contact />;
      case 'careers': return <Careers />;
      case 'returns': return <Returns />;
      default: return <Home setCurrentPage={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between text-slate-800 antialiased selection:bg-orange-500 selection:text-white relative">
      
      {/* 1. COLLAPSIBLE RESPONSIVE HEADER BAR */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 px-4 sm:px-8 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          
          <div 
            onClick={handleLogoAction}
            title="Click to return home or refresh active metrics"
            className="flex items-center gap-3 cursor-pointer select-none group active:scale-[0.98] transition-transform duration-100"
          >
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-md bg-slate-50 p-1 border border-slate-100 group-hover:border-orange-200 transition-colors">
              <img 
                src="/logo.png" 
                alt="Kaiho Logo" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black uppercase tracking-tight text-slate-950 group-hover:text-[#F97316] transition-colors leading-none">
                KAIHO
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-none mt-1 group-hover:text-slate-800 transition-colors">
                EAST AFRICA
              </span>
            </div>
          </div>
          
          {/* DESKTOP NAVIGATION BAR */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-widest text-slate-600">
            <button onClick={() => navigateToPage('home')} className={`hover:text-slate-950 transition-colors ${currentPage === 'home' ? 'text-[#F97316]' : ''}`}>Home</button>
            <button onClick={() => navigateToPage('kenya')} className={`hover:text-slate-950 transition-colors ${currentPage === 'kenya' ? 'text-[#F97316]' : ''}`}>Nairobi Stock</button>
            <button onClick={() => navigateToPage('japan')} className={`hover:text-slate-950 transition-colors ${currentPage === 'japan' ? 'text-[#F97316]' : ''}`}>Japan LCL Shop</button>
            <button onClick={() => navigateToPage('returns')} className={`hover:text-slate-950 transition-colors ${currentPage === 'returns' ? 'text-[#F97316]' : ''}`}>Return Policy</button>
            <button onClick={() => navigateToPage('contact')} className={`hover:text-slate-950 transition-colors ${currentPage === 'contact' ? 'text-[#F97316]' : ''}`}>Contact Desk</button>
          </nav>

          {/* MOBILE TOGGLE ICON BUTTON */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <span className="block text-xl font-bold font-mono text-[#F97316]">&times;</span>
            ) : (
              <>
                <span className="w-5 h-0.5 bg-slate-950 rounded-full transition-all" />
                <span className="w-5 h-0.5 bg-slate-950 rounded-full transition-all" />
                <span className="w-5 h-0.5 bg-slate-950 rounded-full transition-all" />
              </>
            )}
          </button>

          {/* MOBILE ACCESSIBILITY DROP DRAWER GRID */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-4 flex flex-col gap-3 text-xs font-black uppercase tracking-widest text-slate-700 shadow-md animate-fadeIn lg:hidden rounded-b-xl">
              <button onClick={() => navigateToPage('home')} className={`py-2 text-left border-b border-slate-50 ${currentPage === 'home' ? 'text-[#F97316]' : ''}`}>Home</button>
              <button onClick={() => navigateToPage('kenya')} className={`py-2 text-left border-b border-slate-50 ${currentPage === 'kenya' ? 'text-[#F97316]' : ''}`}>Nairobi Stock</button>
              <button onClick={() => navigateToPage('japan')} className={`py-2 text-left border-b border-slate-50 ${currentPage === 'japan' ? 'text-[#F97316]' : ''}`}>Japan LCL Shop</button>
              <button onClick={() => navigateToPage('returns')} className={`py-2 text-left border-b border-slate-50 ${currentPage === 'returns' ? 'text-[#F97316]' : ''}`}>Return Policy</button>
              <button onClick={() => navigateToPage('contact')} className={`py-2 text-left ${currentPage === 'contact' ? 'text-[#F97316]' : ''}`}>Contact Desk</button>
            </div>
          )}

        </div>
      </header>

      {/* 2. CORE ACTIVE RENDER MOUNT FRAME */}
      <main className="flex-grow py-8 sm:py-12 max-w-7xl mx-auto w-full px-4">
        {renderActivePage()}
      </main>

      {/* 3. FLUID & CRISP NATIVE FLOATING WHATSAPP INTERACTOR BADGE */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50">
        <button
          type="button"
          onClick={handleFloatingWhatsAppClick}
          title="Chat with our Nairobi Spares Desk on WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 relative group focus:outline-none"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping scale-105 group-hover:hidden" />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Chat Link" 
            className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-300 group-hover:scale-105 select-none pointer-events-none"
          />
        </button>
      </div>

      {/* 4. GLOBAL FOOTER COMPONENT */}
      <footer className="bg-slate-950 text-white border-t border-zinc-900 py-12 px-4 sm:px-8 mt-16 text-center sm:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center text-xs text-zinc-500">
          
          <div className="sm:col-span-6 space-y-1">
            <div className="font-black text-white uppercase tracking-wider">
              Kaiho East Africa Limited
            </div>
            <p className="font-normal text-zinc-500">
              Official Kenyan Subsidiary Branch &copy; 2026. All industrial rights reserved worldwide.
            </p>
          </div>

          <div className="sm:col-span-6 flex flex-wrap justify-center sm:justify-end gap-6 font-bold uppercase tracking-widest text-zinc-400">
            <button onClick={() => navigateToPage('contact')} className="hover:text-white transition-colors">Support Desk</button>
            <button onClick={() => navigateToPage('careers')} className={`hover:text-white transition-colors ${currentPage === 'careers' ? 'text-[#F97316]' : ''}`}>Careers</button>
          </div>

        </div>
      </footer>

    </div>
  );
}