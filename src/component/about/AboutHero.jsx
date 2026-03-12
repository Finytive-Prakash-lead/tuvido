import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/about.png"
const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#ece0f5] overflow-hidden  items-center pt-20">
      {/* Background Decorative Element - Soft Gradient fade like the screenshot */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-100/50 via-transparent to-transparent pointer-events-none" />

      <div className="    px-6  lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* RIGHT SIDE: ILLUSTRATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* The Main Illustration */}
            <div className="relative w-full max-w-[550px] group">
              {/* Background Glow similar to the screenshot's soft vibe */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-purple-400/30 to-indigo-400/10 blur-[80px] rounded-full opacity-50 -z-10 group-hover:opacity-80 transition-opacity duration-700" />
              
              <img 
                src={logo} 
                alt="Tuvido Management Dashboard Illustration" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(95,51,185,0.2)]"
              />
            </div>
          </motion.div>

          {/* LEFT SIDE: CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col  items-start text-left"
          >
          

            {/* Main Brand Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black ">
              Grow Your Academy 
              <span className="text-purple-600  font-black"> Faster</span>
            </h1>

            {/* Descriptive Subtext */}
            <p className="mt-8 text-lg md:text-xl lg:text-[20px] text-gray-800 max-w-lg leading-relaxed font-medium">
              Tuvido is the all-in-one management platform designed for modern tuition centers. 
              Automate attendance, simplify fee collection, and engage parents—all from a single, 
              powerful dashboard.
            </p>


                      <div className="hidden md:flex items-center mt-5">
           <a
  // href="/login"
  className="relative group px-10 py-3 text-sm font-bold text-white 
bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left             rounded-lg 
             overflow-hidden transition-all duration-300 cursor-pointer"
>
  {/* Layer 1: The Base Gradient & Static Glint */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-150 rotate-45 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
  
  {/* Layer 2: Iridescent "Glitter" (Conic-Gradient Overlay) */}
  <div className="absolute inset-0 bg-[conic-gradient(at_top_right,rgba(243,232,255,0.4)_0%,rgba(139,92,246,0.1)_25%,rgba(243,232,255,0.1)_50%,rgba(139,92,246,0.1)_75%,rgba(243,232,255,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />

  {/* Layer 3: Moving Light Shine (Animated Element) */}
  <div className="absolute inset-0 animate-lightShine -translate-x-[150%] scale-150">
    <div className="w-[15%] h-full bg-white opacity-40 blur-lg rotate-12" />
  </div>

  {/* The Text - Needs to be relative/z-10 to sit above the effects */}
  <span className="relative z-10  tracking-widest ">
   7days Free Trial
  </span>

  {/* Custom CSS for the Light Shine Animation */}
  <style>{`
    @keyframes lightShine {
      0% { transform: translateX(-150%) scale(1.5); }
      50% { transform: translateX(150%) scale(1.5); }
      100% { transform: translateX(-150%) scale(1.5); }
    }
    .animate-lightShine {
      animation: lightShine 6s ease-in-out infinite;
    }
  `}</style>
</a>
          </div>

            

          </motion.div>


        </div>
      </div>

    </section>
  );
};

export default HeroBanner;