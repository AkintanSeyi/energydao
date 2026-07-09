import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCopy, FiCheckCircle } from 'react-icons/fi';

const Tdetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Redirect if no data is passed
  if (!state) {
    navigate("/profile");
    return null;
  }

  const { asset, amount, days, totalReturn } = state;
  const walletAddress = "0xYourUsdtWalletAddressHere"; // Replace with your actual address

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6">
      <button onClick={() => navigate(-1)} className="mb-6 text-[#0A3161] font-black uppercase text-xs flex items-center gap-2">
        <FiArrowLeft /> Back
      </button>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
        <h1 className="text-2xl font-black text-[#0A3161] mb-2">Payment Details</h1>
        <p className="text-sm text-gray-500 mb-6">Please send <span className="font-bold text-[#0A3161]">${amount}</span> to the wallet address below via the USDT (TRC20/ERC20) network.</p>

        {/* Order Summary */}
        <div className="bg-gray-50 p-4 rounded-2xl mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-bold text-gray-400">Asset</span>
            <span className="text-xs font-black">{asset.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-bold text-gray-400">Total Expected Return</span>
            <span className="text-xs font-black text-green-600">${totalReturn}</span>
          </div>
        </div>

        {/* Wallet Section */}
        <label className="text-[10px] font-black text-gray-400 uppercase">USDT Wallet Address</label>
        <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl mt-1 mb-8">
          <code className="text-[10px] font-bold text-[#0A3161] truncate">{walletAddress}</code>
          <button onClick={() => navigator.clipboard.writeText(walletAddress)} className="text-[#0A3161]">
            <FiCopy />
          </button>
        </div>

        <button 
          onClick={() => alert("Verification request sent! We will confirm your transaction shortly.")}
          className="w-full py-4 bg-[#0A3161] text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <FiCheckCircle /> I have sent the payment
        </button>
      </div>
    </div>
  );
};

export default Tdetails;