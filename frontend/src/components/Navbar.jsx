import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Get username from localStorage
    const uname = localStorage.getItem("uname");
    if (uname) {
      setUsername(uname);
    }
  }, []);

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uname");
    setUsername(null);
    navigate("/"); // redirect to home
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/fluency/48/briefcase.png"
            alt="YuvaNaukri Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-gray-800">YuvaNaukri</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/resume-builder" className="hover:text-blue-600">Resume Builder</a>
          <a href="/jobs" className="hover:text-blue-600">Jobs</a>
          <a href="/carrier" className="hover:text-blue-600">Career Guidance</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {username ? (
            <>
              {/* Show Username */}
              <span className="text-gray-700 font-medium">👋 {username}</span>
              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Default for new/guest users */}
              <a href="/login">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Login
                </button>
              </a>
              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
