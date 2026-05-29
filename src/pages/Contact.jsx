import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    garage: '',
    interest: 'local',
    message: ''
  });

  const handleNativeEmailRedirect = (e) => {
    e.preventDefault();
    
    // 1. Structure a clear, professional email subject line based on their choice
    const subjectPrefix = formData.interest === 'local' 
      ? "Nairobi Warehouse Stock Inquiry (Unit D31)" 
      : "Japan LCL Order Status Request (Topmarine Track)";
    
    const subject = `${subjectPrefix} - ${formData.name}`;

    // 2. Build a beautifully formatted email body text string
    const emailBody = `Hello Kaiho East Africa Team,\n\n` +
      `I am submitting an inquiry through the portal. Here are my operational details:\n\n` +
      `• Full Name: ${formData.name}\n` +
      `• Phone / WhatsApp: ${formData.phone}\n` +
      `• Garage / Corporate Name: ${formData.garage || 'Not Specified'}\n` +
      `• Sourcing Stream: ${formData.interest === 'local' ? 'Nairobi Warehouse Inventory' : 'Direct Japan Import (LCL)'}\n\n` +
      `• Specified Requirements:\n"${formData.message}"\n\n` +
      `Please get back to me as soon as possible.`;

    // 3. Construct the clean mailto string protocol link
    const mailtoUrl = `mailto:sales@kaihoeastafrica.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // 4. Instantly redirect the user's browser to open their native mail client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-12 sm:space-y-16 bg-white text-slate-700 animate-fadeIn text-left pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* 1. INTRO BANNER (Fully Responsive Typography) */}
      <div className="space-y-3 max-w-3xl">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F97316] block">
          Connect With Our Logistics Team
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight">
          Get In Touch Today
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-500 font-normal leading-relaxed">
          Whether you are a fleet supervisor looking for wholesale engine rates, an insurance claim adjuster validating body cuts, or an individual owner looking for a specific gearbox—our cross-continental support channels are ready to assist.
        </p>
      </div>

      {/* 2. RESPONSIVE DISPATCH FORM */}
      <div className="bg-slate-950 text-white rounded-2xl p-5 sm:p-8 shadow-xl border border-zinc-800 space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316] block">Direct Mailbox Dispatch</span>
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">Send An Instant Message</h2>
        </div>

        <form onSubmit={handleNativeEmailRedirect} className="space-y-5 text-slate-300">
          
          {/* Row 1: Name & Phone (Stacks on mobile, side-by-side on tablet/desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">Your Full Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g., John Kamau" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">Phone / WhatsApp Number</label>
              <input 
                type="tel" 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="e.g., 0795555318" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Garage & Target Stream (Stacks on mobile, side-by-side on tablet/desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">Garage / Corporate Name (Optional)</label>
              <input 
                type="text" 
                value={formData.garage}
                onChange={(e) => setFormData({...formData, garage: e.target.value})}
                placeholder="e.g., Elite Auto Mechanics" 
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-brand-orange transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">Inquiry Stream Target</label>
              <select 
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value})}
                className="w-full bg-zinc-900 border border-zinc-800 text-brand-orange rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-brand-orange transition-colors font-bold"
              >
                <option value="local">Nairobi Warehouse Stock (Unit D31)</option>
                <option value="lcl">Direct Japan LCL Order Status (Topmarine Track)</option>
              </select>
            </div>
          </div>

          {/* Row 3: Text Message Area */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">Specify Engine Parts or Panel Requirements</label>
            <textarea 
              rows="4"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Provide precise details (e.g., looking for a clean 1NZ engine block or a right-side front door matching a Toyota Fielder)..." 
              className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-brand-orange transition-colors resize-none"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full py-4 bg-[#F97316] hover:bg-white hover:text-slate-950 text-white text-xs sm:text-sm font-black uppercase tracking-widest rounded-xl transition-all duration-200 shadow-md transform active:scale-[0.99]"
            >
              Open Email App & Send Request
            </button>
          </div>
        </form>
      </div>

      {/* 3. HORIZONTAL RUNNING LOGISTICS NARRATIVE PATH */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8 space-y-6 text-xs sm:text-sm leading-relaxed text-slate-600 shadow-2xs">
        <div className="space-y-2">
          <p className="font-normal">
            <strong className="text-slate-950 font-black uppercase tracking-wider text-xs border-b-2 border-[#F97316] pb-0.5 mr-2 block sm:inline mb-1 sm:mb-0 w-max">
              Local Storage Compound:
            </strong> 
            Our physical local operations are centralized inside <strong className="text-slate-900 font-bold">Atlantis Business Park, Warehouse No. D31</strong>, located directly along <span className="text-slate-900 font-medium">ICD Road, off Maasai Road, Nairobi, Kenya</span>. We are open Monday to Saturday for live drive-in technical inspections and instant forklift cargo loading. For real-time updates regarding on-site spares, dial our main office support desk line at <strong className="text-slate-950 font-mono font-bold">+254 795 555 318</strong> or transmit part specification requests directly to <span className="text-slate-900 font-mono font-bold">sales@kaihoeastafrica.co.ke</span>.
          </p>
        </div>
        
        <div className="pt-4 border-t border-slate-200">
          <p className="font-normal">
            <strong className="text-slate-950 font-black uppercase tracking-wider text-xs border-b-2 border-slate-950 pb-0.5 mr-2 block sm:inline mb-1 sm:mb-0 w-max">
              LCL Customs Clearance Hub:
            </strong> 
            All components processed on demand via our digital Japan Sourcing LCL web platform completely bypass the Atlantis Park compound. Imported cargo is transferred directly to the secure <strong className="text-slate-900 font-bold">Topmarine Terminal Mombasa Road Collection Depot</strong>. Customers will collect their cleared custom containers straight from the dedicated <span className="text-slate-900 font-medium">Topmarine Warehouse along Mombasa Road, Nairobi</span>. Your current import transit status can be cross-checked directly at any time utilizing your automated shop receipt keys.
          </p>
        </div>
      </section>

      {/* 4. BACKGROUND DISPLAY PANEL */}
      <div className="w-full h-36 sm:h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100 group">
        <img 
          src="/image2.jpg" 
          alt="Kaiho Compound Overview" 
          className="w-full h-full object-cover filter brightness-95 grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1524661135339-9140b00787e3?auto=format&fit=crop&q=80&w=1200";
          }}
        />
        <div className="absolute inset-0 bg-slate-950/10" />
      </div>

    </div>
  );
}