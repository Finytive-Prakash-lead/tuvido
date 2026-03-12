import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">

      <h1 className="text-7xl font-bold text-gray-800">404</h1>

      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default NotFound;