import React from "react";

const perks = [
  "Organized student data",
  "Easy attendance management",
  "Automated fee tracking",
  "Improved communication with parents",
  "Data-driven academic insights",
  "Secure cloud-based system"
];

export default function BenefitsPerks() {
  return (
    <section className="py-20 bg-[#ece0f5] px-4 sm:px-8 text-center">
      
      {/* Container for Heading & Description */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Benefits of<span className="text-purple-600"> Tuvido</span>
        </h2>
        

      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {perks.map((perk, index) => (
          <div
            key={index}
            className="p-[2px] rounded-[1.5rem] bg-gradient-to-r from-[#2A0047] via-[#c55df6] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left transition-all duration-300 group"
          >
            <div
              className="bg-white text-gray-900 text-[1rem] sm:text-[1.3rem]
              px-8 py-2.5 rounded-[1.5rem] text-center whitespace-normal
              shadow-lg transition-transform duration-300
              group-hover:-translate-y-2 group-hover:shadow-purple-500/20"
            >
              {perk}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}