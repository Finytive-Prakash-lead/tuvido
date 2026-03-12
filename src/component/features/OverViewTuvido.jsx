import React from "react";
import logo from "../../assets/tuvido.png";

const EcosystemDiagram = () => {
  const nodeClass =
    "flex items-center justify-between px-4 py-3 rounded-full border shadow-sm w-48 transition-transform duration-300 hover:scale-105";

  return (
    <div className="pt-16 md:pt-24 pb-16 md:pb-24 bg-[#ece0f5] overflow-hidden">

      {/* HEADER */}
      <div className="text-center px-6 lg:px-12">
        <h1 className="font-bold text-3xl md:text-5xl text-black leading-tight">
          Complete{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#AD46FF]">
            Academic & Administrative
          </span>{" "}
          Control
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-800 leading-relaxed">
          Tuvido is a comprehensive institute management platform that
          streamlines student management, attendance, fees, and administrative
          operations through a secure, role-based system.
        </p>
      </div>

      {/* DIAGRAM CONTAINER */}
      <div className="relative mt-16 md:mt-20 px-4 md:px-6">

        {/* SVG LINES (hidden on small screens) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* LEFT */}
          <path d="M 300 250 L 420 250" stroke="#C4B5FD" strokeWidth="2" fill="none"/>
          <path d="M 200 120 C 280 120 280 250 300 250" stroke="#C4B5FD" strokeWidth="2" fill="none"/>
          <path d="M 200 380 C 280 380 280 250 300 250" stroke="#C4B5FD" strokeWidth="2" fill="none"/>

          {/* RIGHT */}
          <path d="M 580 250 L 700 250" stroke="#C4B5FD" strokeWidth="2" fill="none"/>
          <path d="M 800 120 C 720 120 720 250 700 250" stroke="#C4B5FD" strokeWidth="2" fill="none"/>
          <path d="M 800 380 C 720 380 720 250 700 250" stroke="#C4B5FD" strokeWidth="2" fill="none"/>
        </svg>

        {/* GRID */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center gap-10 lg:gap-6">

          {/* LEFT MODULES */}
          <div className="flex flex-col items-center lg:items-end gap-8 md:gap-10">
            <Node label="Student Management" purple />
            <Node label="Attendance Module" purple />
            <Node label="Fee Management" purple />
          </div>

          {/* LEFT HUB */}
          <div className="flex justify-center">
            <div className={`${nodeClass} bg-purple-50 border-purple-200 justify-center`}>
              <span className="font-semibold text-gray-900 text-center">
                Admin / Staff Control
              </span>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-purple-100 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
                  <img
                    src={logo}
                    alt="Tuvido"
                    className="w-16 md:w-20 object-contain"
                  />
                </div>
              </div>

              <h1 className="text-center mt-3 text-2xl md:text-3xl font-bold">
                Tuvido
              </h1>

            </div>
          </div>

          {/* RIGHT HUB */}
          <div className="flex justify-center">
            <div className={`${nodeClass} bg-gray-50 border-gray-200 justify-center`}>
              <span className="font-semibold text-gray-900 text-center">
                System Management
              </span>
            </div>
          </div>

          {/* RIGHT MODULES */}
          <div className="flex flex-col items-center lg:items-start gap-8 md:gap-10">
            <Node label="Roles & Permissions" />
            <Node label="Structure & Settings" />
            <Node label="Dashboard & Reports" />
          </div>

        </div>
      </div>
    </div>
  );
};

/* NODE COMPONENT */

const Node = ({ label, purple }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-full border shadow-sm w-full max-w-[220px] transition-transform duration-300 hover:scale-105 ${
        purple
          ? "bg-purple-50 border-purple-200"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <span className="font-medium text-gray-800 text-sm text-center w-full">
        {label}
      </span>
    </div>
  );
};

export default EcosystemDiagram;