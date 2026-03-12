import React, { useState, useEffect } from "react";

const StatItem = ({ endValue, label, suffix = "", isDecimal = false, gradientFrom = "from-purple-500", gradientTo = "to-indigo-600" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    
    const currentElement = document.querySelector(`[data-stat="${label}"]`);
    if (currentElement) observer.observe(currentElement);
    
    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2500;
    const increment = endValue / (duration / 16);
    let timer;

    timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue, isDecimal]);

  return (
    <div 
      data-stat={label}
      className="relative group  py-10 rounded-2xl bg-gradient-to-br from-white/80  to-transparent 
                 backdrop-blur-xl  
             transition-all duration-700 
                 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r 
                 before:from-purple-500/5 before:to-indigo-600/10 before:opacity-0 group-hover:before:opacity-100
                 before:transition-all before:duration-700 overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-40
                       animate-[float_6s_ease-in-out_infinite] group-hover:opacity-70"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
        <h3 className="text-xl lg:text-5xl font-black bg-gradient-to-r from-[#7C3AED] via-purple-600 to-indigo-600 
                       bg-clip-text text-transparent drop-shadow-lg mb-4 leading-none tracking-[-0.05em]
                       group-hover:scale-110 transition-transform duration-500">
          {count.toLocaleString()}{suffix}
        </h3>
        
        <p className="text-lg font-bold uppercase tracking-widest text-gray-700/90 group-hover:text-gray-900
                     bg-gradient-to-r from-gray-700/50 to-gray-900/50 bg-clip-text transition-all duration-300">
          {label}
        </p>

        {/* Animated underline with glow */}
        {/* <div className="mt-8 w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-indigo-600 rounded-full 
                       shadow-lg shadow-purple-500/50 scale-x-0 group-hover:scale-x-100 
                       transition-transform duration-700 origin-left opacity-0 group-hover:opacity-100
                       group-hover:shadow-[0_0_20px_rgba(124,58,237,0.6)]" /> */}
      </div>

      {/* Corner glow accent */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl blur-xl -z-10" />
      <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-2xl blur-xl -z-10" />
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className=" px-6 lg:px-12 overflow-hidden">
      <div className="">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/30" />
        
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          <StatItem 
            endValue={1200} 
            suffix="+" 
            label="Students Managed"
            gradientFrom="from-purple-500"
            gradientTo="to-pink-600"
          />
          
          <StatItem 
            endValue={285} 
            suffix="+"
            label="Events Hosted"
            gradientFrom="from-indigo-500"
            gradientTo="to-purple-600"
          />

          <StatItem 
            endValue={25}
            isDecimal={true}
            suffix="Years"
            label="Multi-Branch Support"
            gradientFrom="from-purple-600"
            gradientTo="to-indigo-700"
          />

        </div>

        {/* Custom animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(120deg); }
            66% { transform: translateY(5px) rotate(240deg); }
          }
        `}</style>
      </div>
    </section>
  );
}
