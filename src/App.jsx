import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import JapanShop from './pages/JapanShop'
import KenyaShop from './pages/KenyaShop'
import Returns from './pages/Returns'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col justify-between font-sans selection:bg-orange-500/10 selection:text-brand-orange relative">
      
      {/* 1. PURE WHITE BRAND NAVBAR PANEL */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* 2. MAIN ACTIVE LAYOUT AREA SWITCHBOARD */}
      <main className="flex-grow pt-28 pb-16 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white">
        {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === 'japan' && <JapanShop />}
        {currentPage === 'kenya' && <KenyaShop />}
        {currentPage === 'returns' && <Returns />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* 3. PREMIUM THREE-COLUMN CORPORATE FOOTER */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 w-full">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-sm font-normal">
          
          {/* COLUMN 1: GET IN TOUCH */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 text-white font-bold tracking-wider uppercase text-base">
              <span className="text-xl text-brand-orange">📞</span> GET IN TOUCH
            </div>
            <div className="space-y-1.5 text-slate-400 font-normal leading-relaxed">
              <p className="text-white font-semibold">Atlantis Business Park D31, Off ICD Rd</p>
              <p>Nairobi - Kenya</p>
              <p className="pt-2"><span className="text-slate-500 font-medium">Phone:</span> +254 795 110 000</p>
              <p><span className="text-slate-500 font-medium">Email:</span> info@kaihoeastafrica.co.ke</p>
              <p className="pt-3 text-xs text-slate-500">&copy; 2026 All Rights Reserved - Kaiho East Africa</p>
              <p className="text-[11px] text-slate-600">Legal Notice | Privacy Policy</p>
            </div>
          </div>

          {/* COLUMN 2: CENTER REAL IMAGE LOGO PROFILER */}
          <div className="flex flex-col items-center justify-center space-y-3 pt-4 md:pt-0">
            {/* Real Corporate Logo Image pulled directly from your public root layout */}
            <img 
              src="/logo.png" 
              alt="Kaiho East Africa Centermark Logo" 
              className="h-14 w-auto object-contain"
              onError={(e) => {
                // Fallback geometry container if asset gets temporarily renamed
                e.target.style.display = 'none';
                document.getElementById('footer-logo-fallback').style.display = 'block';
              }}
            />
            
            {/* Fallback Icon Box */}
            <div id="footer-logo-fallback" className="hidden relative w-20 h-12">
              <div className="absolute w-6 h-6 rotate-45 border-4 border-brand-orange rounded-sm transform translate-x-2"></div>
              <div className="absolute w-6 h-6 rotate-45 border-4 border-orange-500 rounded-sm transform -translate-x-2"></div>
            </div>

            <p className="text-xs uppercase font-black text-brand-orange tracking-widest pt-1">We Are Here</p>
            <p className="text-[10px] text-slate-500 tracking-wider font-mono uppercase">www.kaihoeastafrica.co.ke</p>
          </div>

          {/* COLUMN 3: SYSTEM LINKS NAVIGATION */}
          <div className="space-y-4 text-left md:text-right flex flex-col md:items-end">
            <div className="flex items-center gap-2 text-white font-bold tracking-wider uppercase text-base">
              <span className="text-xl text-brand-orange">📋</span> NAVIGATION
            </div>
            <ul className="space-y-2 text-slate-400 font-normal">
              <li>
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-brand-orange transition-colors focus:outline-none">
                  About us
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({top: 600, behavior: 'smooth'}); }} className="hover:text-brand-orange transition-colors focus:outline-none">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('returns'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-brand-orange transition-colors focus:outline-none">
                  Purchase & Return Policy
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('home'); window.scrollTo({top: 2500, behavior: 'smooth'}); }} className="hover:text-brand-orange transition-colors focus:outline-none">
                  Our FAQ's
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-brand-orange transition-colors focus:outline-none">
                  Contact us
                </button>
              </li>
              <li>
                <button onClick={() => { setCurrentPage('japan'); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-brand-orange transition-colors font-semibold text-orange-400/90 focus:outline-none">
                  Buy Direct From Japan
                </button>
              </li>
            </ul>
          </div>

        </div>
      </footer>

      {/* 4. FLOATING OFFICIAL AUTHENTIC WHATSAPP WIDGET */}
      <a 
        href="https://wa.me/254795110000?text=Hello%20Kaiho%20East%20Africa%20team%2C%20I%20am%20browsing%20the%20website%20and%20would%20like%20to%20verify%20parts%20availability%20at%20the%20warehouse."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group z-50 animate-bounce"
        style={{ animationDuration: '3s' }}
        title="Chat on WhatsApp"
      >
        {/* Exact official brand handset path matrix geometry */}
        <svg className="w-9 h-9 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Floating Tooltip Label on Hover */}
        <span className="absolute right-16 bg-slate-950 text-white font-bold text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none whitespace-nowrap border border-slate-800">
          Chat Live with Us
        </span>
      </a>

    </div>
  )
}

export default App