import { NavLink } from "react-router-dom";
import navLinks from "./navLinks.json";

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-10">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `relative text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#8B5CF6] 
            ${isActive ? "text-[#8B5CF6]" : "text-gray-800"}`
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
  );
};

export default NavLinks;