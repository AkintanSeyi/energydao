import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/index.js";

const Pinlogin = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlePinChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && e.target.nextSibling) e.target.nextSibling.focus();
  };

  const handleLogin = async () => {
  const pinStr = pin.join("");
  const email = localStorage.getItem("userEmail"); // Or pass via location.state

  if (pinStr.length < 4) return setError("Please enter 4-digit PIN");

  setLoading(true);
  try {
    // Pass both email and pin
    await api.verifyPin({ Email: email, pin: pinStr });
    navigate("/home");
  } catch (err) {
    setError("Incorrect PIN. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl text-center">
        <h1 className="text-2xl font-black text-[#0A3161] mb-2">Enter PIN</h1>
        <p className="text-[10px] font-bold text-gray-400 mb-8 uppercase">Login to your account</p>

        <div className="flex justify-center gap-3 mb-6">
          {pin.map((digit, i) => (
            <input 
              key={i} 
              type="password" 
              maxLength="1" 
              value={digit} 
              onChange={(e) => handlePinChange(e, i)} 
              className="w-14 h-16 text-center text-2xl font-black bg-gray-50 rounded-2xl border-2 border-gray-100 focus:border-[#0A3161] outline-none"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-[10px] font-black mb-4">{error}</p>}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-5 bg-[#0A3161] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#08264d] transition-all"
        >
          {loading ? "Verifying..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Pinlogin;