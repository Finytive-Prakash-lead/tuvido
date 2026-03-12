import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-lg overflow-hidden backdrop-blur-sm border-b border-white/10">
      
      {/* Animated Bubbles */}
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
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Logo />

          <div className="gap-10  hidden md:flex items-center">
          <NavLinks />

          
           <a
  href="/login"
  className="relative group px-10 py-3 text-sm font-bold text-white 
             bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] 
             rounded-lg 
             overflow-hidden transition-all duration-300"
>
  {/* Layer 1: The Base Gradient & Static Glint */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-150 rotate-45 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
  
  {/* Layer 2: Iridescent "Glitter" (Conic-Gradient Overlay) */}
  <div className="absolute inset-0 bg-[conic-gradient(at_top_right,rgba(243,232,255,0.4)_0%,rgba(139,92,246,0.1)_25%,rgba(243,232,255,0.1)_50%,rgba(139,92,246,0.1)_75%,rgba(243,232,255,0.4)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[2px]" />

  {/* Layer 3: Moving Light Shine (Animated Element) */}
  <div className="absolute inset-0 animate-lightShine -translate-x-[150%] scale-150">
    <div className="w-[15%] h-full bg-white opacity-40 blur-lg rotate-12" />
  </div>

  {/* The Text - Needs to be relative/z-10 to sit above the effects */}
  <span className="relative z-10  tracking-widest ">
    Login
  </span>

  {/* Custom CSS for the Light Shine Animation */}
  <style>{`
    @keyframes lightShine {
      0% { transform: translateX(-150%) scale(1.5); }
      50% { transform: translateX(150%) scale(1.5); }
      100% { transform: translateX(-150%) scale(1.5); }
    }
    .animate-lightShine {
      animation: lightShine 6s ease-in-out infinite;
    }
  `}</style>
</a>
          </div>

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

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;