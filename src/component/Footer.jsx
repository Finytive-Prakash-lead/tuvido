

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/tuvido.png";

const Footer = () => {
  const location = useLocation();

  // Check if current page is Home
  const isHomePage = location.pathname === "/";

  return (
    <div className="relative mt-0">
      {/* CTA Banner - Responsive Positioning */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-40 md:-top-32 
          w-[90%] md:w-[80%] min-h-[250px] py-8
          bg-gradient-to-l from-[#2A0047] via-[#7C3AED] to-[#2A0047] 
          bg-[length:200%_auto] bg-left rounded-2xl shadow-2xl 
          flex flex-col justify-center items-center 
          text-center px-6 z-20"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          Ready to Simplify Your Institute Management?
        </h2>

        <p className="mt-4 text-white/90 text-sm md:text-[18px] lg:text-[20px] max-w-2xl">
          Join Tuvido today and transform attendance, billing, events,
          and parent engagement in one powerful platform.
        </p>

        <Link
          to="/contact"
          className="mt-6 bg-white text-violet-700 font-bold 
            px-8 py-3 rounded-lg hover:bg-gray-100 transition active:scale-95"
        >
          Contact Us
        </Link>
      </div>

      {/* Footer Container */}
      <footer className="w-full border-t border-[#4c1d95] bg-[#21153d] pt-48 md:pt-40 pb-10">
        <div className="px-6 lg:px-12">
          {/* Main Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <Link to="/" className="inline-flex items-center gap-3">
                <div className="bg-white rounded-lg p-1 shadow-md">
                  <img
                    className="h-8 w-8 md:h-9 md:w-9 object-contain"
                    src={logo}
                    alt="Tuvido Logo"
                  />
                </div>
                <h1 className="text-2xl font-extrabold text-white tracking-wide">
                  Tuvido
                </h1>
              </Link>
              <p className="text-white/80 text-sm md:text-base leading-relaxed ">
                Smart tuition management platform designed for modern institutes.
                Tuvido helps tuition and activity centers manage students, track 
                attendance, and monitor performance from a single dashboard.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/features", label: "Features" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/contact", label: "Contact" },

                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white/80 hover:text-violet-400 transition text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-base font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-white/80 text-sm md:text-base">
                <li>
                  <a
                    href="mailto:support@tuvido.co.in"
                    className="hover:text-violet-400 transition break-words"
                  >
                    support@tuvido.com
                  </a>
                </li>
                <li>Chennai, India</li>
              </ul>
              
              {/* Social Icons moved here for better layout balance on mobile */}
<div className="mt-6 flex items-center gap-5">
  
  {/* Instagram */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-[#E4405F] transition-colors duration-300"
  >
    <FaInstagram className="h-6 w-6" />
  </a>

  {/* YouTube */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-[#FF0000] transition-colors duration-300"
  >
    <FaYoutube className="h-6 w-6" />
  </a>


      <a
      href="#"
          target="_blank"
    rel="noopener norefer"
    className="text-white/80 hover:text-[#0A66C2] transition-colors duration-300"

    >
      <FaLinkedin className="h-6 w-6" />
    </a>


  

</div>
            </div>

            {/* App Download Section */}
            <div className="flex flex-col">
              <h3 className="text-base font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4">
                Download App
              </h3>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-2">
                <a href="#" target="_blank" rel="noreferrer" className="block active:scale-95 transition">
                  <img
                    src="https://www.jibble.io/wp-content/uploads/2024/10/English-9.png.webp"
                    alt="Google Play"
                    className="w-40 h-auto"
                  />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="block active:scale-95 transition">
                  <img
                    src="https://www.jibble.io/wp-content/uploads/2024/10/English-11.png.webp"
                    alt="App Store"
                    className="w-40 h-auto"
                  />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 <span className="font-semibold text-gray-100">Tuvido</span>. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs md:text-sm">
              <Link className="text-white/70 hover:text-violet-400 transition" to="/privacy-policy">
                Privacy Policy
              </Link>
              <span className="hidden sm:block h-3 w-px bg-gray-600"></span>
              <Link className="text-white/70 hover:text-violet-400 transition" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
              <span className="hidden sm:block h-3 w-px bg-gray-600"></span>
              <Link className="text-white/70 hover:text-violet-400 transition" to="/refund-policy">
                Refund Policy
              </Link>
              <span className="hidden sm:block h-3 w-px bg-gray-600"></span>
              <a href="#top" className="inline-flex items-center text-white/70 hover:text-violet-400 transition">
                Back to Top
                <svg className="ml-1 h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5l7 7-1.4 1.4L13 9.8V20h-2V9.8L6.4 13.4 5 12l7-7z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;