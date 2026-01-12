import React from 'react';
import { useNavigate } from 'react-router-dom';

const Partners = () => {
  const navigate = useNavigate();

  const partners = [
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210880/images__3_-removebg-preview_fimfqi.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211252/Intel_logo__2006-2020_.svg-removebg-preview_leqvzu.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768218398/images__5_-removebg-preview_1_wryvot.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211010/images__4_-removebg-preview_g3nogw.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211432/images__8_-removebg-preview_cuymkb.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211590/4b91b2e99dfb21926c4ebb0755c56091-removebg-preview_kkcjmz.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211110/images__7_-removebg-preview_gcsedm.png"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* NAVIGATION */}
     

      {/* 1. HERO SECTION */}
{/* UPDATED CINEMATIC PARTNERS HERO */}
<section className="relative h-[60vh] w-full overflow-hidden bg-[#0A3161]">
  {/* The Gradient Overlay - Matches the Impact style (Left to Right) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0A3161] to-transparent z-10"></div>
  
  {/* The Background Image */}
  <img 
    src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000&auto=format&fit=crop" 
    alt="Modern American Energy Complex" 
    className="absolute inset-0 h-full w-full object-cover opacity-50"
    loading="eager"
  />

  {/* The Content Container - Centered horizontally and vertically */}
  <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24">
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          {/* Placeholder for small badge or icon */}
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
          Our Partners in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            Industrial Growth
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 font-medium leading-relaxed tracking-wide">
          We collaborate with the world's leading technology and energy firms to restructure infrastructure and scale production.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* 2. PARTNERS GRID */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex items-center gap-4">
             <div className="h-px flex-1 bg-slate-100"></div>
             <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">Approved Entities</span>
             <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center">
            {partners.map((logo, index) => (
              <div key={index} className="flex justify-center group">
                <img 
                  src={logo} 
                  alt={`Partner ${index + 1}`} 
                  className="h-16 md:h-20 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain transform group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INFO SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-[#0A3161] uppercase tracking-tight">Coordinated Scaling</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our partnerships aren't just for show. We work directly with these organizations to integrate modern technology into older plants, ensuring that every asset we rescue is built to last for the next fifty years.
              </p>
              <div className="flex gap-4">
                 <div className="h-1 w-12 bg-[#B31942] mt-3"></div>
                 <p className="font-bold text-[#0A3161]">Providing the capital, technology, and oversight required to dominate the global energy market.</p>
              </div>
            </div>
           <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 relative overflow-hidden">
  {/* Subtle background accent */}
  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-10 -mt-10"></div>
  
  <h3 className="font-black text-[#0A3161] text-2xl mb-4 tracking-tight uppercase">
    Strategic Intake
  </h3>
  
  <p className="text-slate-500 mb-8 text-sm leading-relaxed">
    For energy firms, technology providers, and infrastructure developers seeking to scale within our framework.
  </p>
  
  <div className="space-y-4">
    <button onClick={() => navigate("/contact-us")} className="w-full bg-[#0A3161] py-4 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-[#B31942] transition-all duration-300 shadow-lg shadow-blue-900/20">
      Contact Operations
    </button>
    
  
  </div>
</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Partners;