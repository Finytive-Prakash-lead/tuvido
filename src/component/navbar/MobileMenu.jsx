import { NavLink, Link } from "react-router-dom";
import navLinks from "./navLinks.json";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10
      ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div className="px-6 py-8 space-y-4 bg-[var(--primary)]">
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
          className="block w-full text-center px-4 py-3 text-md font-bold text-[var(--primary)] bg-white rounded-xl"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;