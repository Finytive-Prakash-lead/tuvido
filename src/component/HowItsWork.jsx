import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Register Your Institute",
    description: "Create your institute account and configure your organization.",
  },
  {
    number: "02",
    title: "Add Students & Staff",
    description: "Register students, create batches, and assign staff members.",
  },
  {
    number: "03",
    title: "Manage Classes & Fees",
    description: "Track attendance, manage courses, and monitor fee collections.",
  },
  {
    number: "04",
    title: "Monitor Performance",
    description: "Use dashboards and reports to analyze progress and improve outcomes.",
  },
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="relative bg-[#fbfaff]  py-24 px-6 md:px-12 overflow-hidden bg-white">
      {/* Subtle Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">Tuvido</span> works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#AD46FF]/20 via-[#7C3AED] to-[#AD46FF]/20 pointer-events-none" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center group"
            >
              {/* Number Circle */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#AD46FF] to-[#7C3AED] opacity-10 group-hover:opacity-20 transition-opacity" />
                <span className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">
                  {step.number}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#7C3AED] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;