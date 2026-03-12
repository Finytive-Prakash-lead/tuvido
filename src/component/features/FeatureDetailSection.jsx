import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TuvidoFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);

  const primaryGradient =
    "linear-gradient(108.64deg, #967edd 39.76%, #5f259f 105.69%)";

  const features = [
    {
      title: "Smart Attendance Tracking",
      tagline: "Mark attendance in seconds",
      description:
        "Record daily attendance with one click and generate reports instantly.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600",
    },
    {
      title: "Fee Collection Automation",
      tagline: "No more manual follow-ups",
      description:
        "Track payments, send reminders, and manage pending dues easily.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600",
    },
    {
      title: "Performance Analytics",
      tagline: "Track growth and results",
      description:
        "Analyze student performance and generate detailed reports.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
    },
    {
      title: "Batch Management",
      tagline: "Organize classes efficiently",
      description:
        "Create batches, assign teachers and manage schedules easily.",
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600",
    },
    {
      title: "Parent Communication",
      tagline: "Stay transparent",
      description:
        "Send announcements, homework updates and absence alerts.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",
    },
    {
      title: "Access Anywhere",
      tagline: "Mobile friendly system",
      description:
        "Use Tuvido across mobile, tablet and desktop seamlessly.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-100 rounded-full blur-[120px] -z-10 opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-100 rounded-full blur-[120px] -z-10 opacity-60" />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-14 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-800 mt-3 tracking-tight">
          Powerful{" "}
          <span className="text-transparent bg-clip-text bg-purple-500">
            Features
          </span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* LEFT FEATURES */}
        <div className=" pe-2 lg:col-span-4 space-y-4 order-2 lg:order-1">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              primaryGradient={primaryGradient}
            />
          ))}
        </div>

        {/* CENTER IMAGE */}
        <div className="lg:col-span-4 flex justify-center items-center order-1 lg:order-2 py-6 md:py-12 lg:py-0">
          <div className="relative group flex justify-center">

            {/* Progress Ring */}
            <svg className="absolute -inset-6 md:-inset-10 w-[calc(100%+40px)] md:w-[calc(100%+80px)] h-[calc(100%+40px)] md:h-[calc(100%+80px)] -rotate-90 hidden md:block">
              <circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <motion.circle
                key={activeTab}
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                stroke="#967edd"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </svg>

            {/* Image */}
            <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] z-10 rounded-full p-3 md:p-4 bg-white shadow-[0_0_50px_rgba(0,0,0,0.08)]">
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-slate-50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeTab}
                    src={features[activeTab].image}
                    alt={features[activeTab].title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className=" ps-2 lg:col-span-4 space-y-4 order-3">
          {features.slice(3, 6).map((feature, index) => {
            const i = index + 3;
            return (
              <FeatureCard
                key={i}
                feature={feature}
                isActive={activeTab === i}
                onClick={() => setActiveTab(i)}
                primaryGradient={primaryGradient}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`cursor-pointer p-4 md:p-5 rounded-[20px] md:rounded-[24px] transition-all duration-500 relative w-full ${
      isActive
        ? "bg-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-purple-100 scale-[1.02]"
        : "bg-transparent border border-transparent hover:bg-white/40"
    }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeGlow"
        className="absolute inset-0 rounded-[24px] border-2 opacity-30"
        style={{ borderColor: "#967edd" }}
      />
    )}

    <h3
      className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${
        isActive ? "text-slate-900" : "text-slate-600"
      }`}
    >
      {feature.title}
    </h3>

    <p
      className={`text-[10px] md:text-xs font-black uppercase tracking-[0.15em] mt-1 ${
        isActive ? "text-[#967edd]" : "text-indigo-300"
      }`}
    >
      {feature.tagline}
    </p>

    <AnimatePresence>
      {isActive && (
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="text-gray-700 mt-3 leading-relaxed text-sm md:text-[15px]"
        >
          {feature.description}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

export default TuvidoFeatures;