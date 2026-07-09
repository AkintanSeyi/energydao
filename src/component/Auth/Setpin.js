import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiChevronRight, FiLock } from "react-icons/fi";
import * as api from "../api/index.js";

const Setpin = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [confirmPin, setConfirmPin] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to handle digit inputs
  const handlePinChange = (e, index, setter, currentPin) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newPin = [...currentPin];
    newPin[index] = value;
    setter(newPin);

    // Auto-focus next input
    if (value && e.target.nextSibling) e.target.nextSibling.focus();
  };

 const handleSavePin = async () => {
    const pinStr = pin.join("");
    const confirmStr = confirmPin.join("");
    // Retrieve email passed from previous page
    const email = location.state?.email;

    if (pinStr.length !== 4 || confirmStr.length !== 4) {
      return setError("PIN must be 4 digits");
    }
    if (pinStr !== confirmStr) {
      return setError("PINs do not match");
    }
    if (!email) {
      return setError("Session expired. Please sign up again.");
    }

    setLoading(true);
    try {
      // 1. Send to backend
      const { data } = await api.savePin({ Email: email, pin: pinStr });
      
      // 2. Save token to localStorage if backend returns one, 
      // or simply persist the email for future session context
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      localStorage.setItem("userEmail", email);

      // 3. Move to Home
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to save PIN.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 text-center">
        <h1 className="text-2xl font-black text-[#0A3161] mb-2">Set Security PIN</h1>
        <p className="text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-widest">Create PIN to secure account</p>

        {/* PIN Inputs */}
        <div className="mb-6">
          <label className="text-[10px] font-black text-gray-400 block mb-2 uppercase">New PIN</label>
          <div className="flex justify-center gap-3 mb-6">
            {pin.map((digit, i) => (
              <input key={i} type="text" maxLength="1" value={digit} onChange={(e) => handlePinChange(e, i, setPin, pin)} className="w-12 h-14 text-center text-xl font-black bg-gray-50 rounded-2xl border border-gray-200 focus:border-[#0A3161] outline-none" />
            ))}
          </div>

          <label className="text-[10px] font-black text-gray-400 block mb-2 uppercase">Confirm PIN</label>
          <div className="flex justify-center gap-3">
            {confirmPin.map((digit, i) => (
              <input key={i} type="text" maxLength="1" value={digit} onChange={(e) => handlePinChange(e, i, setConfirmPin, confirmPin)} className="w-12 h-14 text-center text-xl font-black bg-gray-50 rounded-2xl border border-gray-200 focus:border-[#0A3161] outline-none" />
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 text-[10px] font-black mb-4">{error}</p>}

        <button
          onClick={handleSavePin}
          disabled={loading}
          className="w-full py-5 bg-[#0A3161] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#08264d] transition-all flex items-center justify-center gap-2"
        >
          {loading ? "Saving..." : <>Home <FiChevronRight size={18} /></>}
        </button>
      </div>
    </div>
  );
};

export default Setpin;