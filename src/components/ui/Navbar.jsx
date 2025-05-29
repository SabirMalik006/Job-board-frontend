import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        {/* Logo Icon with inner white circle */}
        <Link to="/" className="hover:text-blue-600 transition">
        <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        </Link>
        <Link to="/" className="hover:text-blue-600 transition">
          <h1 className="text-2xl font-bold text-gray-800">ProHire</h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/jobs" className="hover:text-blue-600 transition">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/Company" className="hover:text-blue-600 transition">
              Companies
            </Link>
          </li>
          <li>
            <Link
              to="/JobDescription"
              className="hover:text-blue-600 transition"
            >
              For Employers
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-600 transition">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sign Up Button */}
      <Link to="/signup">
        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Sign Up
        </button>
      </Link>
    </header>
  );
}

export default Navbar;
