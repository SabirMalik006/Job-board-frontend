import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const EmployerDashboard = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Employer!</h1>
          <p className="text-gray-600">Here's a quick overview of your activity.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-gray-600">Total Jobs</h2>
            <p className="text-2xl font-semibold text-indigo-600">5</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-gray-600">Applications</h2>
            <p className="text-2xl font-semibold text-indigo-600">23</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-gray-600">Active Jobs</h2>
            <p className="text-2xl font-semibold text-indigo-600">3</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-gray-600">Closed Jobs</h2>
            <p className="text-2xl font-semibold text-indigo-600">2</p>
          </div>
        </div>

        {/* Posted Jobs Section */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Posted Jobs</h2>
            <Link
              to="/employer/post-job"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              + Post New Job
            </Link>
          </div>

          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-2">Title</th>
                <th className="py-2">Date</th>
                <th className="py-2">Applications</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2">Frontend Developer</td>
                <td className="py-2">2025-06-12</td>
                <td className="py-2">12</td>
                <td className="py-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span>
                </td>
                <td className="py-2 space-x-2">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-yellow-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
              {/* Repeat rows for more jobs if needed */}
            </tbody>
          </table>
        </div>

        {/* Recent Applications (Optional section) */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Applications</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium text-gray-700">Sabir Amir</p>
                <p className="text-sm text-gray-500">Frontend Developer</p>
              </div>
              <button className="text-indigo-600 hover:underline text-sm">View</button>
            </li>
            {/* More applicants if needed */}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default EmployerDashboard;
