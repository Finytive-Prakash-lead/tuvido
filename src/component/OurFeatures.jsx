import React from "react";
import { motion } from "framer-motion";

export default function MobileShowcase() {
  const cards = [
    { title: "Streamline Tuition", color: "from-purple-600 to-indigo-700", label: "Tuition", description: "Manage private classes and fees." },
    { title: "Scale Coaching", color: "from-purple-600 to-indigo-700", label: "Coaching", description: "Batch and performance tracking." },
    { title: "Master Skills", color: "from-purple-600 to-indigo-700", label: "Academies", description: "Scheduling and staff tools." },
    { title: "Large Orgs", color: "from-purple-600 to-indigo-700", label: "Enterprise", description: "Multi-branch management." },
  ];

  // Function to shuffle array for different column orders
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const columns = [
    { id: 1, items: [...cards, ...cards], speed: 20, initialY: 0 },
    { id: 2, items: [...shuffle(cards), ...shuffle(cards)], speed: 25, initialY: -100 },
    { id: 3, items: [...cards, ...cards].reverse(), speed: 18, initialY: -50 },
  ];

  return (
    <div className="bg-[#0a051a] py-16 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-4xl font-bold text-white">
          Who It's <span className="text-[#AD46FF]">For</span>
        </h2>
        <p className="text-gray-400 mt-3">Built for modern learning environments.</p>
      </div>

      {/* 3-Column Grid Container */}
      <div className="relative h-[600px] w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        
        {columns.map((col) => (
          <div key={col.id} className="relative overflow-hidden h-full">
            <motion.div
              className="flex flex-col gap-6"
              animate={{
                y: [col.initialY, col.initialY - 1000], // Adjust based on card height
              }}
              transition={{
                duration: col.speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {col.items.map((card, index) => (
                <div
                  key={index}
                  className={`w-full rounded-2xl p-6 text-white shadow-xl bg-gradient-to-br ${card.color} border border-white/10 min-h-[160px] flex flex-col justify-center`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">
                    {card.label}
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-purple-100 opacity-80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-0" />
    </div>
  );
}

