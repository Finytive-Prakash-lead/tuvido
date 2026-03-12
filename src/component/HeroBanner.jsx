import React from 'react';

// Using an inline SVG for the play icon to keep the component self-contained
const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-12 h-12 text-white fill-current"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12L5 21V3L19 12Z"
      stroke="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function HeroBanner() {
  return (
    <div className="  flex justify-center items-center min-h-screen ">
      <div className="relative w-full max-w-7xl mx-auto md:aspect-[16/9]  bg-purple-50  shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row text-white overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[150px] bg-purple-900/40"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-[150px] bg-violet-900/40"></div>

{/* Left Side Content Container */}
<div className="md:w-1/2 flex flex-col justify-center items-start text-left z-10 px-4 md:px-0">

  {/* Content Wrapper (controls width for readability) */}
  <div className="max-w-xl space-y-6">

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl 
                   font-extrabold leading-tight tracking-tight 
                   text-[var(--primary)]">
      Smart Management for Tuition & Activity Centers
    </h1>

    {/* Paragraph */}
    <p className="text-base sm:text-lg lg:text-xl 
                  text-gray-700 leading-relaxed">
      From enrollment to fee collection, attendance tracking, event
      management, and community engagement — Tuvido centralizes everything
      in one powerful platform.
    </p>

  </div>
</div>

        {/* Right Side: Circle Animation Area */}
<div className="md:w-1/2 flex items-center justify-center relative mt-16 md:mt-0 px-8 sm:px-16 md:px-4">
  <div className="relative aspect-square w-full max-w-sm lg:max-w-md flex items-center justify-center">
    
    {/* Animated Ring Container - Handles the continuous rotation */}
    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
      
      {/* Segment 1: Top Right - Drifts North-East */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED] to-[#AD46FF] animate-[divideJoin_2s_ease-in-out_infinite]"
        style={{ 
            clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)',
            '--drift-x': '15px',
            '--drift-y': '-15px'
        }}
      ></div>
      
      {/* Segment 2: Bottom Right - Drifts South-East */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#6D28D9] to-[#C084FC] animate-[divideJoin_2s_ease-in-out_infinite]"
        style={{ 
            clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
            '--drift-x': '15px',
            '--drift-y': '15px'
        }}
      ></div>

      {/* Segment 3: Left Half - Drifts West */}
      <div 
        className="absolute inset-0 bg-gradient-to-l from-[#4C1D95] to-[#7C3AED] animate-[divideJoin_2s_ease-in-out_infinite]"
        style={{ 
            clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 0%, 50% 0%)',
            '--drift-x': '-20px',
            '--drift-y': '0px'
        }}
      ></div>
    </div>

    {/* Central Static "Hole" */}
    <div className="relative w-[45%] aspect-square bg-[#1A103D] rounded-full z-10 shadow-[0_0_30px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(124,58,237,0.2)] flex items-center justify-center border border-white/5">
      <div className="w-2/3 h-2/3 rounded-full border border-dashed border-white/10 animate-[spin_5s_linear_infinite_reverse]"></div>
    </div>

    {/* Dynamic Background Glow */}
    <div className="absolute -inset-10 rounded-full blur-3xl opacity-30 bg-[#7C3AED] animate-pulse -z-10"></div>

    {/* CSS for Divide and Join Animation */}
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes divideJoin {
          0%, 100% { 
            transform: translate(0, 0); 
            filter: drop-shadow(0 0 0px transparent);
          }
          50% { 
            transform: translate(var(--drift-x), var(--drift-y)); 
            filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.4));
          }
        }
      `}
    </style>
  </div>
</div>
      </div>
    </div>
  );
}

export default HeroBanner;