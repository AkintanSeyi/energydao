import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiAlertCircle, FiZap } from "react-icons/fi";
import { getUserAssets } from "../api"; 

const Withdraw = () => {
  const navigate = useNavigate();
  const [myAssets, setMyAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUserAssets();
        setMyAssets(data);
      } catch (err) {
        console.error("Failed to fetch assets:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleWithdraw = (asset) => {
    // Implement your actual API call for withdrawal here
    console.log(`Processing withdrawal for: ${asset.energyPurchased} kWh from ${asset.assetName}`);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center gap-2 text-[#0A3161] font-bold text-xs"
      >
        <FiArrowLeft /> Back
      </button>

      <h1 className="text-2xl font-black text-[#0A3161] mb-8">Withdraw Energy</h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading assets...</p>
      ) : myAssets.length > 0 ? (
        <div className="space-y-4">
          {myAssets.map((asset, i) => {
            // Logic based on energyPurchased from your Schema
            const isBalanceZero = !asset.energyPurchased || asset.energyPurchased <= 0;

            return (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{asset.assetName}</p>
                    <p className="text-2xl font-black text-[#0A3161]">
                      {asset.energyPurchased || 0} <span className="text-xs font-bold text-gray-400">kWh</span>
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${isBalanceZero ? 'bg-gray-100' : 'bg-blue-50'}`}>
                    <FiZap size={20} className={isBalanceZero ? 'text-gray-400' : 'text-blue-600'} />
                  </div>
                </div>

                <button
                  disabled={isBalanceZero}
                  onClick={() => handleWithdraw(asset)}
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    isBalanceZero 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "bg-[#0A3161] text-white hover:bg-[#113d75]"
                  }`}
                >
                  {isBalanceZero ? "Insufficient Energy" : "Withdraw kWh"}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-200 text-center text-gray-400">
          <FiAlertCircle size={32} className="mx-auto mb-2 opacity-50" />
          <p className="text-xs font-bold uppercase">No energy assets found</p>
        </div>
      )}
    </div>
  );
};

export default Withdraw;