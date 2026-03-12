// import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/tuvido.png";
import { useState, useEffect } from "react";
export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["Home", "About", "Features", "Pricing", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
<nav
  className={`fixed w-full top-0 z-50 overflow-hidden backdrop-blur-md border-b transition-all duration-300
  ${
    scrolled
      ? "bg-white border-purple-100 shadow-md"
      : "bg-transparent border-transparent"
  }`}
>
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-200/30 rounded-full blur-[2px] animate-bubble"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative  px-6 lg:px-10">
        <div className="flex justify-between items-center h-18 py-2">

          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className=" flex items-center justify-center">
              <img
                src={logo}
                alt="Tuvido Logo"
                className="w-12 h-12 object-contain"
              />
            </div>

            <span className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-clip-text text-transparent bg-gradient-to-r from-[#AD46FF] to-[#7C3AED]">
              Tuvido
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navLinks.map((item) => {
                const path =
                  item.toLowerCase() === "home"
                    ? "/"
                    : `/${item.toLowerCase()}`;

                const isActive = location.pathname === path;

                return (
                  <NavLink
                    key={item}
                    to={path}
                    className="relative text-[18px] font-bold tracking-wide transition-all duration-300 text-gray-700 hover:text-[#7C3AED] py-2 group"
                  >
                    {item}

                    {/* Underline */}
                    <span
                      className={`absolute -bottom-3  left-0 h-[8px] bg-gradient-to-r from-[#7C3AED] to-[#AD46FF] 
                      transition-all duration-300 rounded-lg ease-out
                      ${isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                    ></span>
                  </NavLink>
                );
              })}
            </div>

            {/* Shutter Login Button */}
             
            {/* <NavLink
            to="/login"
              className="group relative px-8 py-2 text-[18px] font-black 
                         text-[#7C3AED] border-2 border-[#7C3AED] 
                         rounded-lg  tracking-widest 
                         overflow-hidden transition-colors duration-500
                         hover:text-white inline-block"
            >
              <span className="absolute inset-x-0 top-0 h-0 w-full bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left  transition-all duration-500 ease-out group-hover:h-1/2 -z-10"></span>
              <span className="absolute inset-x-0 bottom-0 h-0 w-full bg-gradient-to-r from-[#2A0047] via-[#7C3AED] to-[#2A0047] bg-[length:200%_auto] bg-right hover:bg-left  transition-all duration-500 ease-out group-hover:h-1/2 -z-10"></span>
              <span className="relative z-10">Login</span>
            </NavLink> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-600 p-2 hover:bg-purple-50 rounded-lg transition"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-purple-50 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((item) => {
            const path =
              item.toLowerCase() === "home"
                ? "/"
                : `/${item.toLowerCase()}`;

            return (
              <NavLink
                key={item}
                to={path}
                className="block text-lg font-bold text-gray-800 hover:text-[#7C3AED] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            );
          })}

          <NavLink
            to="/login"
            className="block w-full text-center px-4 py-3 text-md font-bold text-white bg-[#7C3AED] rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Bubble Animation */}
      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
      `}</style>
    </nav>
  );
}