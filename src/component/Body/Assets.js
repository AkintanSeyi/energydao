import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiBriefcase, FiUser, FiZap, FiShoppingCart } from "react-icons/fi";
import { data } from "../Body/data";

const Assets = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("future");


const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};    

  const [topAssets] = useState(() => shuffleArray(data.top));
const [futureAssets] = useState(() => shuffleArray(data.future));

const currentList =
  activeTab === "top"
    ? topAssets
    : futureAssets;


  // This function generates a random percentage string
  const getRandomPercentage = () => {
    const val = (Math.random() * (2.0 - 0.1) + 0.1).toFixed(2);
    return `+${val}%`;
  };


  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 p-6">
      <h1 className="text-2xl font-black text-[#0A3161] mb-6">Asset Portfolio</h1>

      {/* Tab Switcher */}
      <div className="bg-white p-1 rounded-2xl flex gap-1 mb-6 border border-gray-100">
       <button 
          onClick={() => setActiveTab("future")}
          className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl ${activeTab === 'future' ? 'bg-[#0A3161] text-white' : 'text-gray-400'}`}
        >
          Emerging Markets
        </button>
      
        <button 
          onClick={() => setActiveTab("top")}
          className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl ${activeTab === 'top' ? 'bg-[#0A3161] text-white' : 'text-gray-400'}`}
        >
          Top Producers
        </button>
       
      </div>

      {/* Asset List */}
      <div className="space-y-3">
        {currentList.map((item) => (
          <div  onClick={() => navigate("/descs", { state: { asset: item } })} key={item.id} className="bg-white p-5 rounded-2xl  cursor-pointer border border-gray-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              
              <div>
                <p className="text-xs font-black text-[#0A3161]">{item.name}</p>
                <div className="flex items-center gap-2">
                    <p className="text-[10px] text-gray-400 font-bold">{item.output}</p>
                    {/* Display the Random Percentage */}
                  <p className="text-[10px] text-green-600 font-black">
  {item.percentage}
</p>
                </div>
                {/* <p className="text-[10px] text-[#B31942] font-black">{item.price}</p> */}
              </div>
            </div>
            
            <button className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl text-[#0A3161] hover:bg-[#0A3161] hover:text-white transition-all">
              <FiShoppingCart size={18} />
              <span className="text-[8px] font-black uppercase mt-1">Buy</span>
            </button>
          </div>
        ))}
      </div>
      {/* STICKY BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex justify-around items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
        <button onClick={() => navigate("/home")} className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#0A3161]"><FiHome size={20} /><span className="text-[9px] font-black uppercase">Home</span></button>
        <button onClick={() => navigate("/assets")} className="flex flex-col items-center gap-1 text-[#0A3161]"><FiBriefcase size={20} /><span className="text-[9px] font-black uppercase">Assets</span></button>
        <button onClick={() => navigate("/profile")} className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#0A3161]"><FiUser size={20} /><span className="text-[9px] font-black uppercase">Profile</span></button>
      </div>
    </div>
  );
};

export default Assets;