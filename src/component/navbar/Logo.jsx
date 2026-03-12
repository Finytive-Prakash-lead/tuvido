import { Link } from "react-router-dom";
import logo from "../../assets/tuvido.png";

const Logo = () => {
  return (
    <Link to="/" className="group flex items-center space-x-3">
      <div className="w-9 h-9  rounded-lg flex items-center justify-center rotate-3 ">
        <img
          src={logo}
          alt="Tuvido Logo"
          className="w-18 h-18 object-contain"
        />
      </div>

      <span className="text-2xl font-bold tracking-tight text-[#8B5CF6]">
        Tuvido
      </span>
    </Link>
  );
};

export default Logo;