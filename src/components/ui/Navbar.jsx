import React from "react"

function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        {/* Logo Icon with inner white circle */}
        <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">ProHire</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Jobs</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Companies</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">For Employers</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Login</a></li>
        </ul>
      </nav>

      {/* Sign Up Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        Sign Up
      </button>
    </header>
  )
}

export default Navbar
