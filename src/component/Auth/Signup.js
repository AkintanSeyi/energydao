import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api/index";
import { FiMail, FiLock, FiEye, FiEyeOff, FiChevronRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const emailLower = formData.Email.toLowerCase().trim();
      const formPayload = { ...formData, Email: emailLower };
      
      await api.signup(formPayload);
      
      // PASS THE EMAIL TO THE NEXT PAGE HERE
      navigate("/encryption", { state: { email: emailLower } });
      
    } catch (error) {
      setErrorMessage(error?.response?.data?.error || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100" data-aos="fade-up">
        
        <div className="flex justify-center mb-8">
          <img 
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210149/Gemini_Generated_Image_hp36h8hp36h8hp36_rfreh1.png" 
            alt="Energy DAO Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black tracking-tighter text-[#0A3161] mb-2">Join EnergyDAO</h1>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A3161]" />
              <input
                type="email"
                name="Email"
                placeholder="name@example.com"
                value={formData.Email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-[#0A3161] focus:ring-0 transition-all text-sm font-bold"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase ml-1">Password</label>
            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A3161]" />
              <input
                type={showPassword ? "text" : "password"}
                name="Password"
                placeholder="••••••••"
                value={formData.Password}
                onChange={handleChange}
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border-transparent rounded-2xl focus:bg-white focus:border-[#0A3161] focus:ring-0 transition-all text-sm font-bold"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0A3161]">
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#0A3161] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#08264d] transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {loading ? "Registering..." : <>Create Account <FiChevronRight size={18} /></>}
          </button>

          {errorMessage && (
            <div className="p-4 bg-[#B31942]/10 rounded-xl border border-[#B31942]/20 text-[#B31942] text-[10px] font-black uppercase text-center">
              {errorMessage}
            </div>
          )}
        </form>
        <p className="mt-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          Already have an account?{" "}
          <span 
            onClick={() => navigate("/signin")} 
            className="text-[#0A3161] cursor-pointer hover:underline font-black"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;