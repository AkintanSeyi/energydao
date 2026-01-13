import React from 'react';
import { useNavigate } from 'react-router-dom';


const EnergyLandingPage = () => {
    const navigate = useNavigate()
  const partners = [
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210880/images__3_-removebg-preview_fimfqi.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211252/Intel_logo__2006-2020_.svg-removebg-preview_leqvzu.png",
  "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768218398/images__5_-removebg-preview_1_wryvot.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211010/images__4_-removebg-preview_g3nogw.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211432/images__8_-removebg-preview_cuymkb.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211590/4b91b2e99dfb21926c4ebb0755c56091-removebg-preview_kkcjmz.png",
    "https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768211110/images__7_-removebg-preview_gcsedm.png"
  ];

  const newsData = [
  
       {
      id: 1,
      category: "Geopolitics",
      title: "Project Orinoco: $100B Capital Call for Venezuela Oil",
      date: "Jan 12, 2026",
      desc: "Secretary Marco Rubio confirms a $100 billion investment timeline to rebuild Venezuela's deteriorated oil infrastructure using US-led private capital.",
      link: "https://www.webpronews.com/exxon-ceo-deems-venezuela-uninvestable-amid-trumps-100b-oil-call/",
      img: "https://images.unsplash.com/photo-1678532685208-54acdd41187d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: 51,
      category: "Crypto Policy",
      title: "Trump Signals Full Support for Pro-Crypto Framework",
      date: "Jan 13, 2026",
      desc: "President Trump reiterates support for decentralized finance, Bitcoin, and blockchain innovation as pillars of US economic sovereignty.",
      link: "https://www.pillsburylaw.com/en/news-and-insights/cryptocurrency-digital-assets-trump.html",
      img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800"
    },
{
      id: 46,
      category: "Fossil Fuel",
      title: "Natural Gas Prices Double Long-Term Outlook",
      date: "Jan 12, 2026",
      desc: "Market analysts predict a decade-long bull run for US gas as coal plants are replaced by gas-fired generation.",
      link: "https://naturalgasintel.com/news/banks-lower-26-natural-gas-forecast-modestly-but-long-term-price-confidence-holds/",
      img: "https://plus.unsplash.com/premium_photo-1742496566836-b1e179c18465?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* NAVIGATION - Connect Wallet Removed */}
    {/* NAVIGATION - Fixed Mobile Right-Side Navigation */}
     

      {/* 1. HERO SECTION */}
     <header className="relative flex min-h-[80vh] items-center justify-center bg-[#0A3161] px-6 text-center text-white">
  <div className="relative z-10 max-w-5xl">
    <h1 className="mb-6 text-6xl font-black tracking-tight md:text-8xl">
      Powering America, Together
    </h1>
    <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90 md:text-xl font-light">
      Scaling national energy capacity and accelerating industrial output through Institutional capital and strategic sector expansion
    </p>
    {/* Fixed: removed flex-col and kept sm:flex-row behavior for all screen sizes */}
    <div className="flex justify-center gap-4">
      <button 
        onClick={() => navigate("/contact-us")} 
        className="rounded-full bg-white px-10 py-4 font-bold text-[#0A3161] shadow-xl hover:scale-105 transition-all whitespace-nowrap"
      >
        Contact Us
      </button>
    </div>
  </div>
</header>

{/* 2. MISSION SECTION - Integrated State Dept Support & Broad Power Scope */}
      <section  className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#B31942]">The Program</span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0A3161]">
              Infrastructure Recovery & Energy Capacity Expansion
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Energy DAO is a decentralized investment program established to strengthen the full spectrum of American energy infrastructure. Spanning traditional oil and gas, nuclear energy, solar generation, and advanced battery manufacturing, the program enables coordinated capital deployment into projects essential to U.S. national security, economic resilience, and long-term energy independence.   </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
        Authorized and supported by the U.S. Department of State, in partnership with the U.S. Department of Energy, Energy DAO advances domestic energy sovereignty and the reshoring of critical infrastructure. By connecting innovation with physical asset development, the program mobilizes institutional-scale investment to expand, secure, and modernize America’s energy system.
        </p>    
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#B31942] transition-colors">
                <div className="h-8 w-8 mb-3 flex items-center justify-center rounded-full bg-[#0A3161] text-white text-[10px] font-bold">GOV</div>
                <h4 className="font-bold text-[#0A3161] text-sm uppercase mb-1">Federal Alignment</h4>
                <p className="text-xs text-slate-500">Operated in coordination with national energy security and independence protocols.</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#B31942] transition-colors">
                <div className="h-8 w-8 mb-3 flex items-center justify-center rounded-full bg-[#B31942] text-white text-[10px] font-bold">DAO</div>
                <h4 className="font-bold text-[#0A3161] text-sm uppercase mb-1">Strategic Scale-Up</h4>
             <p className="text-xs text-slate-500">
   Scaling vetted energy companies to modernize infrastructure and accelerate production capacity</p></div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200" 
              alt="Diverse American Power Sources" 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-[550px] object-cover" 
            />
            {/* Government Seal & Program Badge */}
          
          </div>
        </div>
      </section>
{/* 2. MISSION SECTION - UPDATED MISSION & SCOPE */}
      <section  className="bg-white py-20 px-6 border-b border-slate-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#0A3161]">
            Our Mission
          </h2>
          
          <div className="mt-8 space-y-6 text-slate-600 leading-relaxed text-lg text-pretty">
            <p>
              Energy DAO is a national program dedicated to helping American energy companies grow and scale. From traditional oil and gas to nuclear, solar, and advanced battery manufacturing, our mission is to strengthen the full spectrum of domestic power production.
            </p>
            
            <p>
              By providing a platform for individuals to invest directly in the country’s energy infrastructure, we bridge the gap between private capital and national progress. Supported by the U.S. State Department, this initiative ensures domestic energy sovereignty and the reshoring of critical infrastructure.
            </p>


            <p className="font-semibold text-[#0A3161]">
              Advancing American industry.
            </p>
          </div>
        </div>
      </section>

      {/* 3. NEWS SECTION */}
      <section  className="bg-slate-50 py-24 px-8 border-y border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-[#0A3161]">News</h2>
            <p onClick={() => navigate("/news")} className="font-bold text-[#0A3161] hover:text-[#B31942] transition-colors">
              Read More →
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
           {newsData.map((news, idx) => (
  <a
    key={idx}
    href={news.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
  >
    <img src={news.img} alt={news.title} className="h-56 w-full object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#0A3161]">{news.title}</h3>
      <p className="mt-3 text-slate-500 text-sm leading-relaxed">{news.desc}</p>
    </div>
  </a>
))}

          </div>
        </div>
      </section>

      {/* 4. STATIC PARTNER SECTION (LARGE LOGOS) */}
      <section  className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
              Strategic Alliances
          </div>
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20">
            {partners.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Partner" 
                className="h-14 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain" 
              />
            ))}
          </div>
        </div>
      </section>

 <section className="bg-[#0A3161] py-24 px-8 text-white relative overflow-hidden">
  {/* Subtle background decoration */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B31942] to-transparent opacity-50"></div>
  
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-12 md:grid-cols-3 items-center">
      
      {/* Stat 1: Capital */}
      <div className="text-center md:border-r border-white/10 py-8">
        <h3 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
          $4.3B
        </h3>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200 opacity-80">
          Total Capital Deployed
        </p>
      </div>
      
      {/* Stat 2: Scaling */}
      <div className="text-center md:border-r border-white/10 py-8">
        <h3 className="text-6xl md:text-7xl font-black tracking-tighter text-[#B31942]">
          80
        </h3>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200 opacity-80">
          Energy Assets Scaled
        </p>
      </div>

      {/* Stat 3: Energy Output (New Replacement) */}
      <div className="text-center py-8">
        <h3 className="text-6xl md:text-7xl font-black tracking-tighter text-white">
          +18%
        </h3>
        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200 opacity-80">
          Increase in Site Efficiency
        </p>
      </div>

    </div>
  </div>
</section>
    {/* 6. FOOTER - UPDATED TO MATCH SCREENSHOT */}
      <footer className="bg-[#1a1a1a] py-16 px-8 md:px-16 text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE: CONTACT INFO */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white mb-8">Contact Info</h4>
              
              <div className="flex items-start gap-4 text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm leading-relaxed">
                  Washington, D.C.<br />
                  United States Energy Initiative
                </p>
              </div>

              <div className="flex items-center gap-4 text-slate-400 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@energydao.org" className="text-sm text-[#4ade80] hover:underline">
                  state@energydao.us
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: LOGO & TAGLINE */}
           <div className="flex flex-col items-start md:items-end justify-center h-full text-left md:text-right">
  <img 
    src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210149/Gemini_Generated_Image_hp36h8hp36h8hp36_rfreh1.png" 
    alt="Energy DAO Logo" 
    className="h-12 md:h-16 w-auto object-contain mb-4 flex-none"
  />
  <p className="text-slate-400 italic text-sm">
    "Powering America, Together."
  </p>
</div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              © 2026 Energy DAO. All rights reserved.
            </p>
        
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnergyLandingPage;