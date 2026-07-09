import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCopy, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { confirmInvestment } from "../api/index";
import { jwtDecode } from "jwt-decode";

const Tdetails = () => {
  const [loading, setLoading] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
const email = token ? jwtDecode(token).email : "";

  if (!state) {
    navigate("/profile");
    return null;
  }

  const { asset, amount, days, totalReturn } = state;
  const walletAddress = "0x995382Fbd6bd688E58cc8f2234DaA68708B694dC"; 

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await confirmInvestment({
        assetName: state.asset.name,
        amount: state.amount,
        energyAllocated: state.energyAllocated,
        days: state.days,
        userEmail: email
      });
      alert("Verification request sent! We will confirm your transaction shortly.");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6">
      <button onClick={() => navigate(-1)} className="mb-6 text-[#0A3161] font-black uppercase text-xs flex items-center gap-2">
        <FiArrowLeft /> Back
      </button>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
        <h1 className="text-2xl font-black text-[#0A3161] mb-2">Payment Details</h1>
        <p className="text-sm text-gray-500 mb-6">Buy Energy of <span className="font-bold text-[#0A3161]">${amount} USDC</span> </p>

        {/* Novice Instructions */}
       {/* Updated Novice Instructions */}
{/* <div className="bg-blue-50 p-4 rounded-2xl mb-6 border border-blue-100">
  <div className="flex items-center gap-2 text-[#0A3161] mb-2">
    <FiInfo className="font-bold" />
    <span className="text-[10px] font-black uppercase">How to pay via Coinbase or other wallets</span>
  </div>
  <p className="text-[10px] text-[#0A3161] opacity-80 leading-relaxed">
    1. <b>Choose an app:</b> Use trusted apps like <b>Coinbase</b>, <b>Kraken</b>, or <b>Trust Wallet</b>.<br/>
    2. <b>Buy USDC:</b> Deposit your local currency (USD/EUR) to buy <b>USDC</b>.<br/>
    3. <b>Send:</b> Select 'Send' USDC. Paste the address below.<br/>
    4. <b>Network:</b> Select the <b>ERC20</b> network when prompted. Double-check the address.<br/>
    5. <b>Confirm:</b> Once the transaction is sent, tap the button below.
  </p>
</div> */}

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

        <label className="text-[10px] font-black text-gray-400 uppercase">USDC Wallet Address</label>
        <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl mt-1 ">
          <code className="text-[10px] font-bold text-[#0A3161] truncate">{walletAddress}</code>
          <button onClick={() => { navigator.clipboard.writeText(walletAddress); alert("Copied!"); }} className="text-[#0A3161]">
            <FiCopy />
          </button>
        </div>
 <label className="text-[10px] font-black text-gray-400 uppercase">Network</label>
        <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-xl mt-1 mb-8">
          <code className="text-[10px] font-bold text-[#0A3161] truncate">ERC-20</code>
         
        </div>


        <button 
          onClick={handleConfirm}
          disabled={loading}
          className="w-full py-4 bg-[#0A3161] text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2"
        >
          {loading ? "Sending..." : <> I have sent the payment</>}
        </button>
      </div>
    </div>
  );
};

export default Tdetails;