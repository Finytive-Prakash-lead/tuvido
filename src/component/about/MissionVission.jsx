import React from 'react';

const InfoCard = ({ title, description, buttonText, iconSrc, isAudioVisual = false }) => (
  <div className="group flex flex-col items-center p-8 bg-[#2D1B54] rounded-3xl border border-purple-900/30 shadow-xl 
                  hover:bg-white hover:border-transparent transition-all duration-500 ease-in-out">
    
    {/* Icon Container - Adds a subtle float animation */}
    <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
      <img 
        src={iconSrc} 
        alt={title} 
        className={`${isAudioVisual ? 'w-[200px]' : 'w-[180px]'} h-[180px] object-contain`} 
      />
    </div>

    {/* Text Content */}
    <div className="text-center flex-1 flex flex-col justify-between w-full">
      <div>
        {/* Title: White on Dark, Dark on Hover */}
        <h3 className="text-2xl font-bold text-white group-hover:text-[#3D2C77] mb-3 transition-colors duration-300">
          {title}
        </h3>
        {/* Description: Light Gray on Dark, Slate on Hover */}
        <p className="text-white text-lg lg:text-[20px] leading-relaxed mb-8 px-4 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>

      
    </div>
  </div>
);

const PlayIcon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
    <path d="M11.5 7L0.25 13.4952L0.25 0.504809L11.5 7Z" />
  </svg>
);

const TuvidoMissionVision = () => {
  return (
    <section className="bg-[#1A0B2E] py-24 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our Purpose & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#AD46FF]">Promise</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-100 text-lg lg:text-[20px] leading-relaxed opacity-90">
              At Tuvido, we are redefining how educational institutes operate. We empower 
              educators with tools that bridge the gap between teaching and management.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          

          <InfoCard 
            title="Our Vision"
            description="To become the global standard for learning center management, fostering a future where every small academy has access to world-class digital infrastructure."
            iconSrc="https://www.phonepe.com/webstatic/226/static/8901084c476ba464413344c1a62c652e/f5e68/av-summary-icon.svg"
          />

          <InfoCard 
            title="Our Mission"
            description="To empower tuition centers with seamless technology that automates administrative hurdles, allowing teachers to focus 100% on student growth and quality education."
            iconSrc="https://www.phonepe.com/webstatic/226/static/a40b6a6c21bc6ea80c7569e3c19c1405/17c30/read-drhp-icon.png"
          />



        </div>
      </div>
    </section>
  );
};

export default TuvidoMissionVision;