import React, { useState } from "react";
// Assuming logo is your primary phone mockup or app screenshot
import logo from "../assets/hero.png";
import ComingSoonModal from "./ComingSoonModal";




const StudentMobileApp = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
    <section
      id="mobile-app-student"
      className="relative py-2  lg:py-4 w-full max-w-7xl mx-auto px-6 lg:px-12 overflow-hidden bg-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-100/50 blur-[100px]" />
      </div>

      <div className="container   relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LEFT CONTENT: Refined Alignment & Typography */}
          <div className="w-full lg:w-1/2 text-left space-y-8">


            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Your Academy, <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">
                In Your Pocket
              </span>
            </h2>

            <p className="text-[20px] text-gray-800 max-w-xl leading-relaxed">
              Experience the future of learning with the Tuvido Student App. 
              Seamlessly bridge the gap between home and the classroom with real-time updates.
            </p>

            {/* Feature Grid: Trendy "Card-less" look */}
            {/* <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                "Real-time Attendance",
                "Instant Exam Results",
                "Live Class Access",
                "Secure Fee Payments",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <svg className="w-4 h-4 text-purple-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div> */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
  {[
    {
      text: "Real-time Attendance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2"></rect>
          <path d="M16 2v4M8 2v4M3 10h18"></path>
        </svg>
      )
    },
    {
      text: "Instant Exam Results",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18"></path>
          <path d="M7 14l3-3 3 3 5-5"></path>
        </svg>
      )
    },

    {
      text: "Secure Fee Payments",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M2 10h20"></path>
        </svg>
      )
    },
  ].map((feature, index) => (
    <div key={index} className="flex items-center space-x-3 group">

      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 
      group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
        {feature.icon}
      </div>

      <span className="text-gray-800 font-medium">{feature.text}</span>

    </div>
  ))}
</div>

            {/* DOWNLOAD BUTTONS: Modern Glassmorphism/Flat style */}
            <div className="flex flex-wrap gap-4 pb-5">
                <a href="https://play.google.com/store/apps/details?id=com.tuvido.Tuvido&pcampaignid=web_share" target="_blank" rel="noreferrer" className="block active:scale-95 transition">
                  <img
                    src="https://www.jibble.io/wp-content/uploads/2024/10/English-9.png.webp"
                    alt="Google Play"
                    className="w-40 h-auto"
                  />
                </a>

                    
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  className="block active:scale-95 transition"
                >
                  <img
                    src="https://www.jibble.io/wp-content/uploads/2024/10/English-11.png.webp"
                    alt="App Store"
                    className="w-40 h-auto"
                  />
                </a>




              {/* <a href="#" className="group flex items-center gap-3 bg-white border-2 border-slate-900 text-slate-900 px-7 py-3.5 rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="text-2xl"></span>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Download on</p>
                  <p className="text-base font-bold">App Store</p>
                </div>
              </a> */}
            </div>
          </div>

          {/* RIGHT CONTENT: Floating Image Template */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            {/* Abstract background shapes */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            
            <div className="relative group">
              {/* Main Phone Mockup */}
              <div className="relative z-20 transform transition-transform duration-500 ">
                <img
                  src={logo}
                  alt="Tuvido App Preview"
                  className="w-74 md:w-80 lg:w-[540px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)]"
                />
              </div>

              {/* Floating UI Elements for 'Trendy' Look */}
              <div className="absolute top-10 left-2 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Attendance</p>
                    <p className="text-[10px] text-slate-500">Marked Present</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-2 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/50 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">🏆</div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Top Performer</p>
                    <p className="text-[10px] text-slate-500">Rank #1 in Physics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
      
<div className="bg-white h-[90px]">
  
</div>
    </section>

    {open && <ComingSoonModal onClose={() => setOpen(false)} />}

    </>
  );
};

export default StudentMobileApp;


