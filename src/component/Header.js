import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to check which page we are on
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Mission', path: '/mission' },
    { name: 'News', path: '/news' },
    { name: 'Partners', path: '/pathners' },
    { name: 'Impact', path: '/impact' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
        
        {/* LEFT: Logo Section */}
        <div 
          className="flex items-center gap-2 md:gap-3 cursor-pointer group" 
          onClick={() => navigate("/")}
        >
          <img 
            src="https://res.cloudinary.com/dvuq6vmiy/image/upload/v1768210149/Gemini_Generated_Image_hp36h8hp36h8hp36_rfreh1.png" 
            alt="Energy DAO Logo" 
            className="h-8 md:h-10 w-auto object-contain flex-none transition-transform group-hover:scale-105"
          />
          <span className="text-lg md:text-xl font-black tracking-tighter text-[#0A3161] whitespace-nowrap uppercase">
            ENERGY DAO
          </span>
        </div>

        {/* CENTER/RIGHT: Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest text-[#0A3161]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <div key={link.name} className="relative flex flex-col items-center group">
                <p 
                  onClick={() => navigate(link.path)} 
                  className={`hover:text-[#B31942] transition-colors cursor-pointer ${isActive ? 'text-[#B31942]' : ''}`}
                >
                  {link.name}
                </p>
                {/* Active Page Indicator Arrow */}
                {isActive && (
                  <span className="absolute -bottom-4 text-[#B31942] text-[10px] animate-bounce">
                    &circ;
                  </span>
                )}
              </div>
            );
          })}
          
          {/* THE THREE ARROWS INDICATOR - Fixed Text Based */}
          {/* <div className="flex items-center gap-0.5 border-l pl-8 border-slate-100 text-[#B31942] text-sm font-black tracking-tighter">
            <span>&rsaquo;</span><span>&rsaquo;</span><span>&rsaquo;</span>
          </div> */}
        </div>

        {/* MOBILE: Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 text-[#0A3161] focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="text-2xl font-light">✕</span>
          ) : (
            <div className="flex flex-col gap-1 items-end">
              <div className="w-6 h-0.5 bg-[#0A3161]"></div>
              <div className="w-4 h-0.5 bg-[#B31942]"></div>
              <div className="w-6 h-0.5 bg-[#0A3161]"></div>
            </div>
          )}
        </button>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl p-8 flex flex-col gap-6 text-center md:hidden animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col items-center gap-1">
              <p 
                onClick={() => {
                  navigate(link.path);
                  setIsMenuOpen(false);
                }} 
                className={`text-xs font-bold uppercase tracking-widest cursor-pointer ${location.pathname === link.path ? 'text-[#B31942]' : 'text-[#0A3161]'}`}
              >
                {link.name}
              </p>
              {location.pathname === link.path && (
                <span className="text-[#B31942] text-xs">&circ;</span>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;