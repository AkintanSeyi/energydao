import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiKey, FiShield, FiChevronRight } from "react-icons/fi";
import * as api from "../api/index.js";

const Verify = () => {
  const [method, setMethod] = useState(null); // 'pin' or 'words'
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 const handleVerify = async () => {
    setLoading(true);
    const email = localStorage.getItem("userEmail");
    
    try {
      // Call your API
      const { data } = await api.verifyIdentity({ 
        Email: email, 
        method, 
        value: input 
      });

      // Persist token and proceed
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 text-center">
        <h1 className="text-2xl font-black text-[#0A3161] mb-8">Verify Identity</h1>

        {!method ? (
          <div className="space-y-4">
            <button onClick={() => setMethod("pin")} className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#0A3161] flex items-center gap-4 transition-all">
              <FiShield className="text-[#0A3161]" size={24} />
              <div className="text-left"><p className="font-black text-[#0A3161]">Use PIN</p><p className="text-[10px] text-gray-400">4-digit security code</p></div>
            </button>
            <button onClick={() => setMethod("words")} className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-[#0A3161] flex items-center gap-4 transition-all">
              <FiKey className="text-[#0A3161]" size={24} />
              <div className="text-left"><p className="font-black text-[#0A3161]">Use Recovery Words</p><p className="text-[10px] text-gray-400">Your 6-word secret phrase</p></div>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <input 
              type="text" 
              placeholder={method === "pin" ? "Enter 4-digit PIN" : "Enter 6-word phrase"}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold outline-none border border-gray-200 focus:border-[#0A3161]"
            />
            <p className="text-[9px] text-gray-400 italic text-center">
    * Separate each word with a single space. No commas or extra symbols *
  </p> 
            <button 
              onClick={handleVerify}
              disabled={loading}
              className="w-full py-4 bg-[#0A3161] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#08264d]"
            >
              {loading ? "Verifying..." : "Confirm"}
            </button>
            <button onClick={() => setMethod(null)} className="text-[10px] font-black text-gray-400 underline">Back to options</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;