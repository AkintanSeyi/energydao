import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] p-6 text-center">
      <h1 className="text-6xl font-black text-[#0A3161] mb-4">404</h1>
      <p className="text-lg font-bold text-gray-500 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      
      <button 
        onClick={() => navigate(-1)} 
        className="px-8 py-3 bg-[#0A3161] text-white font-black uppercase tracking-widest rounded-full hover:bg-[#B31942] transition-all"
      >
        Go Back
      </button>
    </div>
  );
};

export default Notfound;