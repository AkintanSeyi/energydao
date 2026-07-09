import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMail, FiLoader } from "react-icons/fi";
import { checkEmailExists } from "../api"; // Ensure this API function exists

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // API call to check if email exists
      const response = await checkEmailExists({ email });
      
      if (response.data.exists) {
        // If email is found, navigate to contact page
        navigate("/contact-us");
      } else {
        setError("Email not found in our records.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-6 flex flex-col justify-center">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-[#0A3161] font-bold text-xs"
      >
        <FiArrowLeft /> Back
      </button>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-black text-[#0A3161] mb-2">Forgot Password</h1>
        <p className="text-xs font-bold text-gray-400 mb-8">
          Enter your registered email to verify your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FiMail className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@energydao.com"
              required
              className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border border-gray-100 outline-none text-sm font-bold text-[#0A3161] placeholder:text-gray-300"
            />
          </div>

          {error && <p className="text-[10px] font-black text-red-500">{error}</p>}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 bg-[#0A3161] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#113d75] transition-all flex items-center justify-center gap-2"
          >
            {loading ? <FiLoader className="animate-spin" /> : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;