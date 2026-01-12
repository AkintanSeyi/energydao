import React from 'react';
import { useNavigate } from 'react-router-dom';

const Impact = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Capital Deployed", value: "$4.3B", detail: "" },
    { label: "Jobs Created", value: "12,400+", detail: "" },
    { label: "Energy Output", value: "+18%", detail: "" },
    { label: "Plants Rescued", value: "80", detail: "" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* NAVIGATION */}
    

      {/* 1. HERO SECTION - RESULTS ORIENTED */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-[#0A3161]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3161] to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000&auto=format&fit=crop" 
          alt="Impact Background" 
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24">
          <div className="max-w-7xl mx-auto w-full">
         
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              Measuring Our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">National Footprint</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="relative -mt-20 z-30 px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 bg-slate-100 p-1 shadow-2xl rounded-2xl overflow-hidden">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-10 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{stat.label}</p>
                <h3 className="text-4xl font-black text-[#0A3161] mb-2">{stat.value}</h3>
                <p className="text-sm text-slate-500 italic">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY / IMPACT STORY */}
      <section className="py-24 px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-[#0A3161] uppercase leading-tight">
               Accelerating  <br/> Industrial Scale
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
          Energy DAO serves as a high-velocity growth engine for the energy sector. By injecting modern intelligence and strategic funding into energy enterprises, we transform stable plants into high-growth assets that outperform their original design capacity.</p>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-[#B31942]/30 transition-colors bg-slate-50/50">
                  <div className="h-6 w-6 rounded-full bg-[#B31942] flex items-center justify-center text-white text-[10px] font-bold">01</div>
                  <p className="text-slate-700 font-medium">Restructuring of distressed oil and gas assets to maximize domestic supply.</p>
                </div>
                <div className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-[#B31942]/30 transition-colors bg-slate-50/50">
                  <div className="h-6 w-6 rounded-full bg-[#B31942] flex items-center justify-center text-white text-[10px] font-bold">02</div>
                  <p className="text-slate-700 font-medium">Workforce training programs to transition industrial workers into high-tech energy roles.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1630142896875-d71a6ee6db03?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Industrial Impact" 
                  className="w-full h-full object-cover"
                />
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="mx-auto max-w-4xl px-8">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Revitalizing American Power Assets.</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button  
              onClick={() => navigate("/contact-us")}
              className="bg-white text-slate-900 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#B31942] hover:text-white transition-all"
            >
              Contact Us
            </button>
           
          </div>
        </div>
      </section>

    </div>
  );
};

export default Impact;