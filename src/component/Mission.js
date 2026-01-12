import React from 'react';
import { useNavigate } from 'react-router-dom';

const MissionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* NAVIGATION HEADER */}
  <section className="relative h-[60vh] w-full overflow-hidden bg-[#0A3161]">
  {/* The Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0A3161] to-transparent z-10"></div>
  
  {/* The Background Image */}
  <img 
    src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=2000&auto=format&fit=crop" 
    alt="Energy Assets Background" 
    className="absolute inset-0 h-full w-full object-cover opacity-50"
  />

  {/* The Content Container */}
  <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-24">
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-4">
        {/* Placeholder for small badge or icon if needed */}
      </div>
      <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
        Revitalizing American <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
          Power Assets
        </span>
      </h1>
      
      {/* ADDED TEXT UNDER HEADING */}
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 font-medium leading-relaxed tracking-wide">
        Strategic deployment of institutional capital to modernize infrastructure 
         and secure national energy independence through industrial scaling.
      </p>
    </div>
  </div>
</section>
     

      {/* 2. THE CORE STATEMENT SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A3161]">
            Our Mission
          </h2>
          <div className="mt-10 space-y-8 text-xl leading-relaxed text-slate-600">
            <p className="font-medium text-slate-800">
              Energy DAO is a national program dedicated to helping American energy companies grow and scale. 
            </p>
            <p>
              From traditional oil and gas to nuclear, solar, and advanced battery manufacturing, our mission is to strengthen the full spectrum of domestic power production. We believe that energy security is national security.
            </p>
            <div className="h-px w-24 bg-[#B31942] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 3. ASSET RECOVERY & PROGRAM GROWTH - MARCO RUBIO */}
      <section className="bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="w-full md:w-1/2 p-8 md:p-16 space-y-6 flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B31942]">Our Approach</span>
                <h2 className="mt-2 text-3xl font-black text-[#0A3161] tracking-tight uppercase">Building and Restructuring</h2>
              </div>
              
              <div className="text-slate-700 text-base leading-relaxed space-y-5">
                <p>
                  In coordination with the <strong>U.S. State Department</strong>, this initiative drives capital into the core of our energy sector. Under the direction of <strong>Secretary Marco Rubio</strong>, we are funding high-growth energy programs and providing the critical rescue capital needed to revitalize dying plants and underperforming oil fields.
                </p>
                <div className="text-[#0A3161] font-bold bg-white p-5 border-l-4 border-[#0A3161] shadow-sm rounded-r-lg">
                  Our strategy is twofold: we scale the energy programs of tomorrow while restructuring the essential plants of today.
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <img 
                src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768223721/Gemini_Generated_Image_52m0ri52m0ri52m0_1_mdj7ru.png" 
                alt="Secretary Marco Rubio" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-full shadow-2xl">
                <div className="w-16 h-16 rounded-full border-2 border-white/60 flex flex-col items-center justify-center text-center">
                  <span className="text-[7px] text-white font-black uppercase leading-[1]">Department<br/>of State</span>
                  <div className="w-6 h-[1px] bg-white/40 my-1"></div>
                  <span className="text-[6px] text-white font-bold uppercase">USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL ALIGNMENT & DOE PARTNERSHIP */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1473876637954-4b493d59fd97?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="American Energy Infrastructure" 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-[500px] object-cover" 
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight text-[#0A3161]">Strategic Partnerships</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Our mission is amplified through a deep technical partnership with the Department of Energy (DOE). Together, we identify high-yield oil, gas, and nuclear projects that require the speed of private capital combined with federal oversight.
            </p>
            <div className="grid gap-6">
              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#0A3161] flex items-center justify-center text-white font-bold text-xs">DOE</div>
                <div>
                  <h4 className="font-bold text-[#0A3161]">Technical Oversight</h4>
                  <p className="text-sm text-slate-500">Utilizing DOE research and data to ensure every investment targets the most productive reserves.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 shrink-0 rounded-full bg-[#B31942] flex items-center justify-center text-white font-bold text-xs">USA</div>
                <div>
                  <h4 className="font-bold text-[#0A3161]">Fossil Fuel Revitalization</h4>
                  <p className="text-sm text-slate-500">Dedicated capital for modernizing oil and gas infrastructure to maximize output.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PLEDGE */}
      <section className="bg-[#0A3161] py-24 text-center text-white px-6">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-[#B31942] block mb-6">Our Commitment</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Revitalizing American Power Assets.</h2>
          <div className="h-px w-32 bg-white/20 mx-auto mb-8"></div>
          <p className="text-xl opacity-80 leading-relaxed max-w-3xl mx-auto italic text-pretty">
            "By coordinating the efforts of the State Department, the Department of Energy, and individual American investors, We are putting capital directly into our energy companies to help them grow and to rescue the ones that are struggling to survive. By restructuring these assets, we give individuals the opportunity to own a piece of the oil fields, plants, and infrastructure that keep this country running."
          </p>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;