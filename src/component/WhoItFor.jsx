import React from 'react';
import { motion } from 'framer-motion';

const WhoItFor = () => {
  // Emojis-ku bathila modern premium SVG icons use pannirukkom
  const centers = [
    { 
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ), 
      title: "Tuition Centers", 
      delay: 0.1 
    },
    { 
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      title: "Coaching Institutes", 
      delay: 0.3 
    },
    { 
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ), 
      title: "Training Academies", 
      delay: 0.2 
    },
    { 
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ), 
      title: "Educational Organizations", 
      delay: 0.4 
    }
  ];

  return (
    <section id="whoisfor" className="relative py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      
      {/* Modern Tech Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#AD46FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-10 relative z-10">
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div 
          className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED]/10 to-[#AD46FF]/10 border border-[#7C3AED]/20 text-[#7C3AED] font-bold text-sm mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#AD46FF] animate-pulse" />
            Who It's For
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(40px,5vw,56px)] font-extrabold text-[#2A0047] leading-[1.15] tracking-tight mb-6">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AD46FF] to-[#7C3AED] relative inline-block">
              every
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#AD46FF]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span><br />
            learning center.
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#2A0047]/70 leading-relaxed mb-10 max-w-[480px]">
            Whether you run a small home tuition or a multi-branch coaching institute — Tuvido scales with you.
          </p>

          {/* CTA Button */}
          <button className="group relative flex items-center gap-3 text-white font-bold text-[16px] px-8 py-4 rounded-full leading-none shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(124,58,237,0.3)] bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left">
            Start Free Trial
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Premium Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            
            {/* Center abstract circle behind the grid */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-[#7C3AED]/20 to-[#AD46FF]/20 rounded-full blur-3xl pointer-events-none" />

            {centers.map((item, index) => (
              <motion.div
                key={index}
                className={`relative group ${index % 2 !== 0 ? 'sm:mt-12' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: item.delay }}
              >
                {/* Modern Floating Card */}
                <div className="h-full bg-white/60 backdrop-blur-xl border border-white hover:border-[#AD46FF]/30 rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(42,0,71,0.05)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                  
                  {/* Card Background Glow on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#AD46FF]/10 to-[#7C3AED]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  {/* Icon Wrapper (Gradient Background) */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2A0047] to-[#7C3AED] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#7C3AED]/30 group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500">
                    {item.icon}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[22px] font-bold text-[#2A0047] group-hover:text-[#7C3AED] transition-colors duration-300 leading-tight mb-2 relative z-10">
                    {item.title}
                  </h3>
                  
                  {/* Subtle Interactive Arrow at bottom right */}
                  <div className="absolute bottom-6 right-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#AD46FF]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhoItFor;