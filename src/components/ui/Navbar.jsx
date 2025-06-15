import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // ✅ Correct way (named export)


function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // ⬅️ Role state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const decoded = jwtDecode(token);
        setUserRole(decoded.role); // 👈 Set role from token
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setUserRole(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="hover:text-blue-600 transition">
          <div
            className="w-10 h-10 rounded-md flex items-center justify-center"
            style={{
              background: "linear-gradient(to right, #7c3aed, #4f46e5)",
            }}
          >
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </Link>
        <Link to="/" className="hover:text-blue-600 transition">
          <h1
            className="text-2xl font-bold"
            style={{
              background: "linear-gradient(to right, #7c3aed, #4f46e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ProHire
          </h1>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="ml-130">
        <ul className="flex gap-14 text-gray-700 font-medium">
          <li>
            <Link to="/jobs" className="hover:text-blue-600 transition">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/companies" className="hover:text-blue-600 transition">
              Companies
            </Link>
          </li>
          <li>
            <Link to="/Company" className="hover:text-blue-600 transition">
              For Employers
            </Link>
          </li>

          {isLoggedIn && userRole === "employer" && (
            <li>
              <Link to="/EmployerDashboard" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
            </li>
          )}

          {isLoggedIn && userRole === "user" && (
            <li>
              <Link to="/UserDashboard" className="hover:text-blue-600 transition">
                Dashboard
              </Link>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link to="/login" className="hover:text-blue-600 transition">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Right Button */}
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="text-white px-5 py-2 rounded transition"
          style={{
            background: "linear-gradient(to right, #ef4444, #dc2626)",
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/signup">
          <button
            className="text-white px-5 py-2 rounded transition"
            style={{
              background: "linear-gradient(to right, #7c3aed, #4f46e5)",
            }}
          >
            Sign Up
          </button>
        </Link>
      )}
    </header>
  );
}

export default Navbar;
