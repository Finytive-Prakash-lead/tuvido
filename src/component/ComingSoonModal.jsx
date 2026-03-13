import { FaTimes } from "react-icons/fa";
import popup from "../assets/popup.jpg"

export default function ComingSoonModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 text-center relative max-w-md w-full border border-gray-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <img
            src={popup}
            alt="ITPCE Logo"
            className="w-full h-auto"
          />
        </div>

        {/* Message */}
        <p className="text-gray-600 text-xl mb-6">
          We're working smart to bring you the iOS version. Stay tuned!
        </p>

      </div>
    </div>
  );
}