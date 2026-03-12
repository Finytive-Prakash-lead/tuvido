import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Set Up Your Institute",
    description:
      "Add students, create batches, and organize courses in minutes. Configure fee structures, assign staff, and customize settings to match your workflow.",
  },
  {
    number: "02",
    title: "Manage Daily Operations",
    description:
      "Track attendance, schedule classes, and collect fees effortlessly. Tuvido helps automate routine tasks so you can focus more on student success.",
  },
  {
    number: "03",
    title: "Monitor & Grow",
    description:
      "Analyze reports, track student progress, and monitor performance. Use insights to improve operations and scale your academy smoothly.",
  },
];

const GetStartedSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-purple-100/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-50/50 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-14 md:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#AD46FF]">
              Tuvido
            </span>{" "}
            Works
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32">

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight">
              Empowering your academy with
              <span className="text-purple-600"> Smart Management Tools</span>
            </h3>

            <div className="space-y-2 text-gray-800 text-base md:text-lg leading-[1.8] mb-8 md:mb-10 max-w-xl text-justify">
              <p>
                Ditch the chaos of fragmented spreadsheets and manual tracking for a single, powerful command center.
                Tuvido centralizes your entire institute’s workflow, from student inquiry to final graduation analytics.
                Automate repetitive administrative tasks, manage complex batch schedules, and trigger fee reminders.
                Our intuitive dashboard provides real-time insights into student performance and automated growth.
                By bridging the gap between complex management and operations, you can finally focus on teaching.
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-slate-200 pt-6 md:pt-8"></div>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 relative">

              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`relative flex items-start gap-4 md:gap-6 p-4 md:p-5 rounded-[2rem] md:rounded-[2.5rem] cursor-pointer transition-all duration-500 border-2 ${
                      isActive
                        ? "bg-white border-purple-100 shadow-[0_30px_60px_rgba(124,58,237,0.1)] scale-[1.02]"
                        : "bg-transparent border-transparent hover:bg-white/40"
                    }`}
                  >
                    {/* Number Circle */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-lg md:text-xl transition-all duration-500 ${
                          isActive
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-200 rotate-3"
                            : "bg-white text-slate-400 border border-slate-200"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h4
                        className={`text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors duration-300 ${
                          isActive ? "text-slate-900" : "text-slate-500"
                        }`}
                      >
                        {step.title}
                      </h4>

                      {isActive && (
                        <div className="animate-in fade-in duration-500">
                          <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;