import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const UserDashboard = () => {
  return (
   <>
   <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-center space-x-6">
        <img
          src="https://i.pravatar.cc/150?img=47"
          alt="User"
          className="w-20 h-20 rounded-full border-4 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Ayesha Fatima</h2>
          <p className="text-gray-500">Frontend Developer</p>
          <p className="text-sm text-gray-400 mt-1">Joined: Jan 2024</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-gray-700 text-sm mb-2">Jobs Applied</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-gray-700 text-sm mb-2">Interviews Scheduled</h3>
          <p className="text-3xl font-bold text-green-500">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-gray-700 text-sm mb-2">Offers Received</h3>
          <p className="text-3xl font-bold text-purple-500">1</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="flex items-start justify-between">
            <span className="text-gray-700">Applied for <strong>React Developer</strong> at TechX</span>
            <span className="text-sm text-gray-400">2 days ago</span>
          </li>
          <li className="flex items-start justify-between">
            <span className="text-gray-700">Interview scheduled with <strong>CodeHive</strong></span>
            <span className="text-sm text-gray-400">1 day ago</span>
          </li>
          <li className="flex items-start justify-between">
            <span className="text-gray-700">Received offer from <strong>DevSoft</strong></span>
            <span className="text-sm text-gray-400">3 hours ago</span>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default UserDashboard;
