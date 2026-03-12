import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/tuvido.png"
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#7C3AED] shadow-2xl overflow-hidden backdrop-blur-sm border-b border-white/10">
      
      {/* Realistic Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full blur-[1px] animate-bubble"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.5,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Elegant Logo */}
<Link to="/" className="group flex items-center space-x-3">
  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
    
    <img
      src={logo}
      alt="Tuvido Logo"
      className="w-6 h-6 object-contain"
    />

  </div>

  <span className="text-2xl font-bold tracking-tight text-white">
    Tuvido
  </span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold tracking-wide transition-all duration-300 hover:text-white
                  ${isActive ? "text-white" : "text-white/70"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Side Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="px-6 py-2.5 text-sm font-bold text-[#7C3AED] bg-white rounded-full shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-8 space-y-4 bg-[#7C3AED]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-white/80 hover:text-white transition"
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="block w-full text-center px-4 py-3 text-md font-bold text-[#7C3AED] bg-white rounded-xl"
          >
            Login
          </Link>
        </div>
      </div>

      {/* CSS Keyframes for Realistic Bubbles */}
      <style>
        {`
          @keyframes bubble {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0;
            }
            20% {
              opacity: 0.4;
            }
            100% {
              transform: translateY(-150px) scale(1.5);
              opacity: 0;
            }
          }
          .animate-bubble {
            animation: bubble linear infinite;
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;