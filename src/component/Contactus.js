import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '');
    const size = input.length;
    if (size <= 3) {
      setPhone(input);
    } else if (size <= 6) {
      setPhone(`(${input.slice(0, 3)}) ${input.slice(3)}`);
    } else {
      setPhone(`(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "service_q3o9kfi";
    const TEMPLATE_ID = "template_xjasolb";
    const PUBLIC_KEY = "f1t7cIqUi9wPyGJ3d";

    // emailjs.sendForm will pick up all inputs with a "name" attribute
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setLoading(false);
        setSubmitted(true);
      }, (error) => {
        alert("Submission failed. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
     

      <div className="mx-auto max-w-7xl px-8 py-24 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE: INFO */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#B31942]">Inquiry Portal</span>
            <h1 className="mt-4 text-6xl font-black text-[#0A3161] uppercase tracking-tighter leading-[0.9]">
              Strategic <br/> Outreach
            </h1>
            <p className="mt-8 text-lg text-slate-500 max-w-md leading-relaxed">
  Use this portal for all sector inquiries, industrial asset evaluations, and high-velocity production requests. We are currently reviewing applications for strategic capital injection and large-scale infrastructure expansion.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: FORM / SUCCESS UI */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(10,49,97,0.15)] border border-slate-100 relative min-h-[500px] flex items-center">
          {!submitted ? (
            <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">First Name</label>
                  <input required name="first_name" type="text" placeholder="first name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0A3161] focus:bg-white transition-all text-sm"/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Last Name</label>
                  <input required name="last_name" type="text" placeholder="last name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0A3161] focus:bg-white transition-all text-sm"/>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Email Address</label>
                {/* name="user_email" must match {{user_email}} in EmailJS template */}
                <input required name="user_email" type="email" placeholder="email" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0A3161] focus:bg-white transition-all text-sm"/>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Phone Number</label>
                {/* name="user_phone" must match {{user_phone}} in EmailJS template */}
                <input 
                  required 
                  name="user_phone" 
                  type="text" 
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="phone number" 
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0A3161] focus:bg-white transition-all text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Message / Inquiry</label>
                <textarea required name="message" rows="4" placeholder="message" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#0A3161] focus:bg-white transition-all text-sm resize-none"></textarea>
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-[#0A3161] py-5 text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#B31942] transition-all duration-300 shadow-xl shadow-blue-900/20 disabled:opacity-50 rounded-2xl"
              >
                {loading ? "Transmitting..." : "Submit Strategic Inquiry"}
              </button>
            </form>
          ) : (
            <div className="w-full text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="h-20 w-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-[#0A3161] uppercase tracking-tight">Transmission Confirmed</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[280px] mx-auto">
                  Your strategic inquiry has been successfully sent to Energy DAO operations.
                </p>
              </div>
              <button 
                onClick={() => navigate("/")}
                className="inline-block bg-[#0A3161] px-10 py-4 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-[#B31942] transition-all"
              >
                Return Home
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactUs;