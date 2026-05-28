import React from 'react';

export default function Returns() {
  const handlePdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/kaiho_return_policy.pdf'; 
    link.download = 'Kaiho_East_Africa_Return_Policy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn pb-12 bg-white">
      
      {/* 1. HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange px-3 py-1 rounded-full bg-orange-50 border border-orange-100 inline-block">
            🛡️ Framework Guidelines
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Return & Claim Policy</h1>
        </div>
        <button 
          onClick={handlePdfDownload} 
          className="flex items-center gap-2 text-xs font-bold bg-slate-950 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg transition-colors shadow-xs shrink-0"
        >
          📥 Download Official PDF
        </button>
      </div>

      {/* 2. PRE-PURCHASE GUIDELINES CARDS */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Important Pre-Purchase Guidelines</h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">Please review and confirm this operational data prior to completing your invoice.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Engines Card */}
          <div className="border border-slate-200 p-5 rounded-xl bg-white shadow-2xs space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold bg-orange-50 text-brand-orange px-2 py-0.5 rounded inline-block">
                Guideline 01
              </span>
              <h3 className="text-base font-bold text-slate-900 tracking-tight block">Engine Units</h3>
            </div>
            <ul className="text-base text-slate-600 font-normal list-disc pl-4 leading-relaxed space-y-2">
              <li>Review the testing video carefully to ensure there are no unusual sounds or mechanical knock patterns.</li>
              <li>Verify car model, unique variant code, and year configurations match your vehicle frame perfectly.</li>
              <li><strong className="text-slate-900 font-semibold">Post-Sale Noise:</strong> Do not unbolt or open the unit. Call us immediately so our technicians can inspect it on-site.</li>
            </ul>
          </div>
          
          {/* Body Parts Card */}
          <div className="border border-slate-200 p-5 rounded-xl bg-white shadow-2xs space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded inline-block">
                Guideline 02
              </span>
              <h3 className="text-base font-bold text-slate-900 tracking-tight block">Body Parts</h3>
            </div>
            <ul className="text-base text-slate-600 font-normal list-disc pl-4 leading-relaxed space-y-2">
              <li>Ensure your required model number, trim lines, and production years are completely correct.</li>
              <li>Compare your variant requirements directly against actual warehouse asset photos to verify the fit.</li>
              <li>Inspect closely for superficial scratches or missing small structural clips before exiting our loading gates.</li>
            </ul>
          </div>

          {/* Gearboxes Card */}
          <div className="border border-slate-200 p-5 rounded-xl bg-white shadow-2xs space-y-3">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-bold bg-orange-50 text-brand-orange px-2 py-0.5 rounded inline-block">
                Guideline 03
              </span>
              <h3 className="text-base font-bold text-slate-900 tracking-tight block">Gearboxes</h3>
            </div>
            <ul className="text-base text-slate-600 font-normal list-disc pl-4 leading-relaxed space-y-2">
              <li>Make sure car specifications, drivetrain layout configurations (2WD vs 4WD), and years are verified.</li>
              <li>For specialty CVT gearboxes, ensure you check the accompanying physical instruction logs.</li>
              <li>Consult our sourcing staff before final purchasing if you have any configuration compatibility concerns.</li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* 3. TIME WINDOWS AND ELIGIBILITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        {/* TIME PARAMETERS */}
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-2xs space-y-4">
          <h3 className="text-lg font-bold text-slate-900">1. Return & Claim Window Parameters</h3>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            In principle, all warehouse inventory sales are final. Active claims are exclusively entered into our review queue if filed within these delivery milestones:
          </p>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-150 space-y-2 text-base text-slate-600 font-normal">
            <p><span className="font-semibold text-slate-800">• Body Components & Panels:</span> Within 2 days following delivery clearance.</p>
            <p><span className="font-semibold text-slate-800">• Functional Powertrains (Engines / Gearbox):</span> Within 3 business days of purchase.</p>
          </div>
        </div>

        {/* ELIGIBILITY CONDITIONS */}
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-2xs space-y-3">
          <h3 className="text-lg font-bold text-slate-900">2. Conditions Eligible for Review</h3>
          <p className="text-base text-slate-600 font-normal leading-relaxed">Component items qualify for inventory exchange metrics under the following events:</p>
          <ul className="text-base text-slate-600 font-normal list-disc pl-4 leading-relaxed space-y-1">
            <li><span className="font-semibold text-slate-800">Incorrect Shipment:</span> Received a different part number via processing errors.</li>
            <li><span className="font-semibold text-slate-800">Latent Damage:</span> Clear defects entirely unnoticeable at layout packaging.</li>
            <li><span className="font-semibold text-slate-800">Operational Malfunction:</span> Core functional unit stays non-operational (abnormal noises, mirror assembly failure, or window regulator locks).</li>
          </ul>
        </div>

      </div>

      {/* 4. EXCLUSIONS */}
      <div className="border border-slate-200 rounded-xl p-6 bg-slate-50/50 space-y-4">
        <h3 className="text-lg font-bold text-slate-900">3. Circumstances Strictly Excluded from Coverage</h3>
        <p className="text-base text-slate-600 font-normal leading-relaxed">The following occurrences automatically invalidate eligibility:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-slate-600 font-normal leading-relaxed">
          <ul className="space-y-2 list-disc pl-4">
            <li>Damage sustained during flawed installation, mechanical tampering, or independent casing disassembly.</li>
            <li>Normal used aging degradation consistent with mileage vintage (minor superficial dust, light surface markings).</li>
            <li>Pre-disclosed asset details explicitly listed inside description channels or photo logs beforehand.</li>
          </ul>
          <ul className="space-y-2 list-disc pl-4">
            <li>Customer procurement ordering mistakes (e.g., buying automatic units by mistake for manual transmission vehicle bodies).</li>
            <li>Transportation damage occurring after components clear our warehouse bay properties safely.</li>
            <li>Partial structural separations (trying to return isolated pieces of unified kit items).</li>
          </ul>
        </div>
      </div>

      {/* 5. ACTION FOOTER */}
      <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-xl space-y-4">
        <h3 className="text-lg font-bold text-slate-900">4. Corporate Claim Filing Procedure</h3>
        <p className="text-base text-slate-600 font-normal leading-relaxed">
          Notify our help desk immediately with a clear description log detailing the mechanical symptoms, paired with unedited contextual confirmation photos or cell phone video clips.
        </p>
        <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-base font-normal text-red-800 leading-relaxed">
          ⚠️ <span className="font-bold">CRITICAL NOTICE:</span> Do not disassemble or open any internal shell components until formal instructions are issued by our yard staff. Any unapproved tool marks will permanently void your coverage metrics.
        </div>
      </div>

    </div>
  );
}