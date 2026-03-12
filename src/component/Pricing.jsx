import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const featureList = [
  "Multi-Branch Management",
  "Role-Based Access Control",
  "Staff Management",
  "Student Database",
  "Batch & Class Scheduling",
  "Attendance Automation",
  "Fee & Payment Management",
  "Parent Portal & Notifications",
  "Payment & Fee Reports",
  "Advanced Analytics Dashboard"
];

const plans = [
  {
    name: "Free Trial",
    price: "0",
    features: [true, true, true, true, true, true, true, true, true, true],
    trial: "7 Days Free"
  },
  {
    name: "Starter",
    price: "1,499",
    features: [true, true, true, true, true, true, true, true, true, true],
    popular: true
  }
];

export default function PricingTable() {
  const primaryGradient = "bg-[linear-gradient(108.64deg,#967edd_39.76%,#5f259f_105.69%)]";

  return (
    <section className="w-full bg-white sm:py-20 py-24 px-4 md:px-10 overflow-hidden mb-20 ">
      {/* Title */}
      <div className="text-center sm:mb-20 mb-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-gray-900"
        >
          Tuvido <span className="text-purple-600">Pricing</span>
        </motion.h2>
        <p className="text-gray-600 text-lg md:text-xl mt-4">
          Simple plans designed for growing institutes
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* --- DESKTOP TABLE VIEW (Visible on MD and up) --- */}
        <div className="hidden md:grid md:grid-cols-3 bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-visible">


           {/* Feature Column */}
        {/* <div className="pt-24 pb-12 relative border-r border-gray-100">

          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-28 h-28 rounded-full border-[5px] border-[#967edd] bg-white flex items-center justify-center shadow-lg p-2"
            >
              <div className="w-full h-full rounded-full  flex items-center justify-center font-bold text-gray-800 text-[14px] text-center px-2 uppercase">
                Pricing Table
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col">
            {features.map((f, i) => (
              <div
                key={i}
                className="h-12 flex items-center px-6 border-b border-gray-100 last:border-0"
              >
                <span className="text-[px] font-semibold text-gray-700  tracking-tight">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
           */}
          {/* Feature Column */}
          <div className="relative pt-24 pb-12 border-r border-gray-100">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 rounded-full border-[5px] border-[#967edd] bg-white flex items-center justify-center shadow-lg "
            >
              <div className="w-full h-full rounded-full text-base flex items-center justify-center font-bold text-gray-800 text-[14px] text-center px-2 ">
                Pricing Table
              </div>
            </motion.div>
          </div>
            <div className="flex flex-col">
              {featureList.map((f, i) => (
                <div key={i} className="h-14 flex items-center px-8 border-b border-gray-50 last:border-0">
                  <span className=" font-semibold text-gray-700 tracking-tight">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Columns */}
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pt-24 pb-12 flex flex-col items-center relative border-r last:border-r-0 border-gray-100 
                ${plan.popular ? "bg-purple-50/30 z-10" : "bg-white"}`}
            >
              {/* Header Circle */}
              <div className="absolute -top-12 flex flex-col items-center">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`w-24 h-24 rounded-full shadow-xl flex items-center justify-center p-1 ${primaryGradient}`}
                >
                  <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] text-gray-500 uppercase font-bold">{plan.name}</span>
                    <span className="text-gray-900 font-bold text-lg">₹{plan.price}</span>
                    {plan.trial ? (
                       <span className="text-[9px] text-green-600 font-bold leading-none">{plan.trial}</span>
                    ) : (
                       <span className="text-[9px] text-gray-400">/mo</span>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Checks */}
              <div className="w-full">
                {plan.features.map((available, i) => (
                  <div key={i} className="h-14 flex items-center justify-center border-b border-gray-50 last:border-0">
                    {available ? (
                      <Check className="text-green-500" size={20} strokeWidth={3} />
                    ) : (
                      <X className="text-red-300" size={20} strokeWidth={3} />
                    )}
                  </div>
                ))}
              </div>

              <button className={`mt-8 px-8 py-3 rounded-full text-white font-bold text-xs tracking-widest shadow-lg hover:scale-105 transition-transform ${primaryGradient}`}>
                GET STARTED
              </button>
            </div>
          ))}
        </div>

        {/* --- MOBILE CARD VIEW (Visible only on SM) --- */}
        <div className="flex flex-col gap-12 md:hidden">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`rounded-3xl border border-gray-200 p-6 shadow-xl relative ${plan.popular ? "border-purple-400 ring-2 ring-purple-100" : "bg-white"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] px-4 py-1 rounded-full font-bold">
                  MOST POPULAR
                </span>
              )}
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-3xl font-black text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.trial ? "/7 days" : "/month"}</span>
                </div>
              </div>

              <div className="space-y-4">
                {featureList.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      {plan.features[i] ? (
                        <Check className="text-green-500" size={18} strokeWidth={3} />
                      ) : (
                        <X className="text-red-300" size={18} strokeWidth={3} />
                      )}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full mt-8 py-4 rounded-2xl text-white font-bold text-sm tracking-widest shadow-lg ${primaryGradient}`}>
                SELECT {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}