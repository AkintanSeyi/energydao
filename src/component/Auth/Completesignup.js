import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useNavigate, useLocation } from "react-router-dom";
import { FiCopy, FiCheck, FiChevronRight } from "react-icons/fi";
import * as api from "../api/index.js";

const Completesignup = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || localStorage.getItem("userEmail");

  // ADD THIS FUNCTION BACK
  const handleCopy = () => {
    navigator.clipboard.writeText(mnemonic);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (location.state?.email) {
      localStorage.setItem("userEmail", location.state.email);
    }
    
    if (!email) {
      navigate("/signup"); 
      return;
    }

    const wallet = ethers.Wallet.createRandom();
    const words = wallet.mnemonic.phrase.split(" ").slice(0, 6).join(" ");
    setMnemonic(words);
  }, [location.state?.email, email, navigate]);

  const handleContinue = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      await api.saveRecoveryPhrase({ 
        Email: email, 
        phrase: mnemonic 
      });
      navigate("/welcome", { state: { email } });
    } catch (err) {
      setErrorMessage(err?.response?.data?.error || "Could not save. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // ... your JSX remains exactly the same
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100">
        
        <h1 className="text-2xl font-black text-[#0A3161] mb-2">Secure Your Account</h1>
        <p className="text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-widest">
          Save these 6 words to login.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          {mnemonic.split(" ").map((word, index) => (
            <div key={index} className="flex items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-[9px] font-black text-gray-300 mr-2">{index + 1}.</span>
              <span className="text-sm font-bold text-[#0A3161]">{word}</span>
            </div>
          ))}
        </div>

        {/* This will now work because handleCopy is defined */}
        <button
          onClick={handleCopy}
          className="w-full py-3 mb-8 bg-gray-100 text-[#0A3161] rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
        >
          {copied ? <><FiCheck /> Copied!</> : <><FiCopy /> Copy to Clipboard</>}
        </button>

        {errorMessage && (
          <p className="text-red-500 text-[10px] font-black text-center mb-4">{errorMessage}</p>
        )}

        <button
          onClick={handleContinue}
          disabled={loading}
          className="w-full py-5 bg-[#0A3161] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-[#08264d] transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? "Saving..." : <>Save <FiChevronRight size={18} /></>}
        </button>
      </div>
    </div>
  );
};
export default Completesignup;