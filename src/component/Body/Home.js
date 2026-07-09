import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiArrowUpRight, FiHome, FiUser, FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { data } from "../Body/data";
import { getDashboardData } from "../api"; // Ensure this import points to your API file
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();
  // State for the dynamic backend data
  const [stats, setStats] = useState({ energyBalance: 0, activeTrades: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch dynamic stats from backend
useEffect(() => {
  const loadStats = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);

      const { data } = await getDashboardData({
        email: decoded.email
      });

      setStats({
        energyBalance: data.energyBalance,
        activeTrades: data.activeTrades
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadStats();
}, []);

  // Keep your static producers logic
  const featuredAssets = [...data.top]
    .sort((a, b) => {
      const outputA = parseInt(a.output.replace(/,/g, ""));
      const outputB = parseInt(b.output.replace(/,/g, ""));
      return outputB - outputA;
    })
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Welcome Back</h2>
            <h1 className="text-xl font-black text-[#0A3161]">EnergyDAO</h1>
          </div>
        </div>

        {/* Dynamic Balance Card */}
        <div className="bg-[#0A3161] rounded-[2rem] p-8 text-white mb-6 shadow-xl relative overflow-hidden">
          <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1">Available Energy</p>
          <h2 className="text-4xl font-black mb-6">
            {loading ? "..." : stats.energyBalance} <span className="text-lg opacity-50">kWh</span>
          </h2>
          
          <div className="flex gap-3">
            <button  onClick={() => navigate("/withdraw")}  className="flex-1 py-3 bg-white/10 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-red-500 transition-all text-white">
              <FiArrowUpRight className="text-red-300" /> Withdraw
            </button>
            <button onClick={() => navigate("/assets")} className="flex-1 py-3 bg-white/10 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-green-500 transition-all text-white">
              <FiShoppingCart className="text-green-300" /> Buy
            </button>
          </div>
        </div>

        {/* Dynamic Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase">Active Trades</p>
            <h3 className="text-xl font-black text-[#0A3161]">{loading ? "..." : stats.activeTrades}</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase">Available Energy</p>
            <h3 className="text-xl font-black text-[#0A3161]">{loading ? "..." : stats.energyBalance} kWh</h3>
          </div>
        </div>

        {/* Static Data Producers */}
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Top Energy Producers</h3>
        <div className="space-y-3 mb-6">
          {featuredAssets.map((asset) => (
            <div  onClick={() => navigate("/descs", { state: { asset: asset } })}  key={asset.id} className="bg-white  cursor-pointer p-4 rounded-2xl border border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-black text-[#0A3161]">{asset.name}</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-400">{asset.output}</p>
                  <p className="text-[10px] text-green-600 font-black">{asset.percentage}</p>
                </div>
              </div>
              <button className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl text-[#0A3161] hover:bg-[#0A3161] hover:text-white transition-all">
                <FiShoppingCart size={18} />
                <span className="text-[8px] font-black uppercase mt-1">Buy</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex justify-around items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
         <button  
           onClick={() => navigate("/home")} 
           className="flex flex-col items-center gap-1 text-[#0A3161]"
         >   
           <FiHome size={20} />
           <span className="text-[9px] font-black uppercase">Home</span>
         </button>
         
         <button 
           onClick={() => navigate("/assets")} 
           className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#0A3161]"
         >
           <FiBriefcase size={20} />
           <span className="text-[9px] font-black uppercase">Assets</span>
         </button>
         
         <button 
           onClick={() => navigate("/profile")} 
           className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#0A3161]"
         >
           <FiUser size={20} />
           <span className="text-[9px] font-black uppercase">Profile</span>
         </button>
       </div>
    </div>
  );
};

export default Home;