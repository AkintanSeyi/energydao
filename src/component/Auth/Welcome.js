import React from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 1. Add this

// 2. Get the email from the previous source
const email = location.state?.email || localStorage.getItem("userEmail");

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 text-center">
        
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210149/Gemini_Generated_Image_hp36h8hp36h8hp36_rfreh1.png" 
            alt="Energy DAO Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
      
        <h1 className="text-3xl font-black text-[#0A3161] mb-4">Welcome to EnergyDAO</h1>
        
        <p className="text-sm font-bold text-gray-500 mb-8 leading-relaxed">
          The future of decentralized energy management. At <span className="text-[#0A3161]">EnergyDAO</span>, we empower individuals to trade, manage, and optimize renewable energy assets globally.
        </p>

        

     <button 
    // 3. Pass the email in the state object
    onClick={() => navigate("/set-pin", { state: { email: email } })}
    className="w-full py-4 bg-[#0A3161] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#08264d]"
  >
    Set Security PIN
  </button>
    
      </div>
    </div>
  );
};

export default Welcome;