import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiShoppingCart } from "react-icons/fi";

const Descs = () => {
  const [days, setDays] = useState(30);
  const [amount, setAmount] = useState(10000);
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.asset) {
    navigate("/profile");
    return null;
  }

  const { asset } = state;
  const pricePerUnit = parseFloat(asset.price?.replace(/[^0-9.]/g, '') || 0.12);
  const dailyPercentage = parseFloat(asset.percentage?.replace('%', '')) / 100;

  // Real-time calculations
  const energyAllocated = (amount / pricePerUnit).toFixed(1);
  const totalReturn = (amount * (1 + (dailyPercentage * days))).toFixed(2);
  const isInvalid = amount < 10000;

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 pb-24">
      <button onClick={() => navigate(-1)} className="mb-6 text-[#0A3161] font-black uppercase text-xs flex items-center gap-2">
        <FiArrowLeft /> Back
      </button>

      <div className="bg-[#0A3161] text-white p-8 rounded-[2rem] mb-6">
        <h1 className="text-2xl font-black">{asset.name}</h1>
        <p className="opacity-70 text-xs font-bold mb-4">{asset.output}</p>
        <p className="text-3xl font-black">{asset.price}</p>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 mb-6 shadow-sm">
        {/* Buy Amount Input */}
        <label className="text-[10px] font-black text-gray-400 uppercase">Buy Amount ($)</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
          className={`w-full text-2xl font-black mb-6 outline-none border-b ${isInvalid ? 'text-red-500 border-red-200' : 'text-[#0A3161] border-gray-100'}`} 
        />

        {/* Dynamic Energy Input (Read Only) */}
        <label className="text-[10px] font-black text-gray-400 uppercase">Energy Allocated (kWh)</label>
        <input 
          type="text" 
          value={energyAllocated} 
          readOnly 
          className="w-full text-xl font-black mb-6 text-[#0A3161] bg-gray-50 p-4 rounded-xl border-none" 
        />
        
        <label className="text-[10px] font-black text-gray-400 uppercase block">Duration (Days)</label>
        <select 
          value={days} 
          onChange={(e) => setDays(Number(e.target.value))} 
          className="w-full p-4 bg-gray-50 cursor-pointer rounded-2xl font-bold text-[#0A3161] mb-6"
        >
          <option value={30}>30 Days</option>
          <option value={90}>90 Days</option>
          <option value={180}>180 Days</option>
          <option value={365}>365 Days</option>
        </select>

        {/* Total Return Display */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <p className="text-xs font-bold text-gray-400">Estimated Return After {days} Days</p>
            <p className="text-2xl font-black text-[#0A3161]">${totalReturn}</p>
          </div>
        </div>
      </div>

      <button 
        disabled={isInvalid}
        onClick={() => navigate('/payment', { 
    state: { 
      asset, 
      amount, 
      days, 
      totalReturn, 
      energyAllocated 
    } 
  })}
        className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${isInvalid ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#0A3161] hover:bg-[#08254a] text-white'}`}
      >
        <FiShoppingCart /> {isInvalid ? "Minimum $10,000" : "Confirm Purchase"}
      </button>
    </div>
  );
};

export default Descs;