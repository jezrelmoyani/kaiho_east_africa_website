import React from 'react';

export default function Careers() {
  // Your real internal operational job roles array
  const coreRoles = [
    { department: "Administration & Finance", title: "Accounts & Financial Controllers" },
    { department: "Customer Experience", title: "Front Desk & Reception Specialists" },
    { department: "Sales Operations", title: "Sales Support & Order Coordination" },
    { department: "Growth & Outreach", title: "Sales & Marketing Executives" },
    { department: "Logistics Floor", title: "Warehouse Crew & Forklift Operators" },
    { department: "Stock Management", title: "Inventory Keepers & Data Verifiers" },
    { department: "Leadership", title: "Operations & Branch Managers" },
    { department: "Technology", title: "Software & E-Commerce Developers" }
  ];

  return (
    <div className="space-y-16 bg-white text-slate-700 animate-fadeIn text-left pb-12 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* 1. HERO INTRO */}
      <div className="space-y-3 max-w-3xl border-b border-slate-100 pb-8">
        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#F97316] block">
          Build Your Future Locally
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
          Careers at Kaiho East Africa
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
          We are streamlining the automotive spare parts sector in Kenya directly from our primary distribution headquarters at Atlantis Business Park in Nairobi. As an independent local operation, we look for dedicated professionals ready to manage high-efficiency inventory matrices and deliver premium customer experiences.
        </p>
      </div>

      {/* 2. STICKER & RECRUITMENT STATUS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-2xs">
        
        {/* "No Vacancies" Sticker */}
        <div className="md:col-span-4 flex justify-center">
          <div className="bg-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest px-6 py-6 rounded-full border-4 border-dashed border-slate-950 shadow-md text-center w-40 h-40 flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform duration-300 select-none">
            No Vacancies<br />Available
          </div>
        </div>

        {/* Talent Pipeline Context */}
        <div className="md:col-span-8 space-y-3">
          <h3 className="font-black text-slate-950 text-lg uppercase tracking-tight">Talent Pipeline Notification</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Our Nairobi warehouse yard crew, administration desks, and digital support pipelines are currently fully staffed. 
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            However, because our local footprints expand rapidly, we are always eager to discover proactive professionals looking to join our future talent database. You are welcome to transmit your resume dossier directly to our local HR department email at <strong className="text-slate-900 font-mono">careers@kaihoeastafrica.co.ke</strong> so we can contact you the moment a matching desk opens up.
          </p>
        </div>
      </div>

      {/* 3. EXPLICIT CORE TEAM ROLES MATRIX */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-[#F97316] block">Our Internal Departments</span>
          <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight">How Our Team is Structured</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">These are the specialized functional career paths that drive Kaiho East Africa Limited forward:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreRoles.map((role, idx) => (
            <div key={idx} className="border border-slate-200 p-5 rounded-xl bg-gradient-to-br from-white to-slate-50/50 space-y-1 flex flex-col justify-between">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                {role.department}
              </span>
              <h4 className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-tight pt-1">
                {role.title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LOCAL BRAND IDENTITY PROFILE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-slate-100 pt-12">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#F97316] block">Nairobi Operations</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">About Kaiho East Africa</h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Operating from our primary commercial hub at **Atlantis Business Park, Warehouse No. D31** (Nairobi, Kenya), Kaiho East Africa delivers high-turnover, premium-grade automotive systems right to the local market. 
          </p>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            By keeping complete control over our distribution line, we completely eliminate brokers and middleman markups. We supply corporate auto centers, insurance companies, and commercial garages with fully verified, complete mechanical assemblies under total corporate transparency. 
          </p>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Our work culture values precision, technological integration, and accountability—giving our employees an excellent, modern environment to grow their automotive logistics and e-commerce careers right here in Nairobi.
          </p>
        </div>

        {/* Visual showcase using your image5 public asset */}
        <div className="lg:col-span-5 aspect-video sm:aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
          <img 
            src="/image5.jpg" 
            alt="Kaiho East Africa Nairobi Facility" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=500";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
        </div>
      </section>

    </div>
  );
}