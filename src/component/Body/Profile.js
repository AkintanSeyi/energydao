import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLogOut, FiHome, FiBriefcase, FiAlertCircle, FiShoppingCart } from "react-icons/fi";
import { getUserAssets } from "../api"; //
import { jwtDecode } from "jwt-decode";


const Profile = () => {
  const navigate = useNavigate();
  const [myAssets, setMyAssets] = useState([]);
  const token = localStorage.getItem("token");

let memberId = "";

if (token) {
  const decoded = jwtDecode(token);
  memberId = decoded.memberId;
}

useEffect(() => {
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);

      const { data } = await getUserAssets({
        email: decoded.email
      });

      setMyAssets(data);
    } catch (err) {
      console.error("Failed to fetch assets:", err);
    }
  };

  fetchData();
}, []);


  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 p-6">
      <h1 className="text-2xl font-black text-[#0A3161] mb-8">My Account</h1>

      {/* User Header with Logo */}
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 mb-8 flex items-center gap-4 shadow-sm">
        <img 
          src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210149/Gemini_Generated_Image_hp36h8hp36h8hp36_rfreh1.png" 
          alt="Energy DAO Logo" 
          className="h-12 w-12 object-contain rounded-2xl bg-gray-50 p-2"
        />
        <div>
          <h2 className="text-lg font-black text-[#0A3161]">EnergyDAO Member</h2>
       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
  ID: {memberId || 84972} 
</p>
        </div>
      </div>

      {/* Assets Section */}
      <div className="mb-8">
        <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">My Assets</h3>
        {myAssets.length > 0 ? (
          <div className="space-y-3">
           {myAssets.map((asset, i) => (
  <div 
    key={i} 
    
    className="bg-white cursor-pointer p-4 rounded-2xl border border-gray-100 flex justify-between items-center shadow-sm"
  >
    <div>
      <p className="text-xs font-black text-[#0A3161]">{asset.assetName}</p>
      <p className="text-[10px] font-bold text-gray-400">
        {asset.energyPurchased} kWh • 
        <span className="text-green-600"> +1.8% Daily</span>
      </p>
    </div>

    <button 
     
      className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-2xl text-[#0A3161] hover:bg-[#0A3161] hover:text-white transition-all"
    >
      <FiShoppingCart size={18} />
      <span className="text-[8px] font-black uppercase mt-1">Buy</span>
    </button>
  </div>
))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
            <FiAlertCircle size={32} className="mb-2 opacity-50" />
            <p className="text-xs font-bold uppercase">No assets yet</p>
            <button onClick={() => navigate("/assets")} className="mt-4 text-[#0A3161] font-black text-[10px] uppercase underline">Buy Assets</button>
          </div>
        )}
      </div>

      {/* Logout */}
      <button 
        onClick={() => { localStorage.clear(); navigate("/signin"); }} 
        className="w-full bg-red-50 p-5 rounded-2xl border border-red-100 flex items-center justify-between text-red-500 mb-8"
      >
        <div className="flex items-center gap-4"><FiLogOut size={18} /> <span className="text-xs font-bold">Logout</span></div>
      </button>

      {/* STICKY BOTTOM NAV */}
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

export default Profile;