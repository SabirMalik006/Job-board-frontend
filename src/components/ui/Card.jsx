import React, { useState } from "react";
import image from "../../assets/images/download.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

const Card = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleSaveJob = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first.");
        return;
      }
  
      const response = await axios.post(
        "http://localhost:5000/jobs/saved",
        { jobId: job.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // ✅ Animate only if newly saved
      if (response.data?.message === "Job already saved") {
        // Do nothing silently
        return;
      }
  
      setIsSaved(true);
      setAnimating(true);
      setTimeout(() => setAnimating(false), 1000);
    } catch (err) {
      console.error("Error saving job:", err);
      // ❌ Don't alert if already saved
      if (err?.response?.status === 400) return;
      alert("Failed to save the job.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl py-5 px-4 flex items-start justify-between gap-4 border border-gray-200 mx-10">
      {/* Left Section */}
      <div className="mx-5 flex gap-9 ">
        <div className="relative">
          <img
            src={image}
            alt={job.title}
            className="w-16 h-16 rounded-full object-cover bg-gray-500 my-6"
          />

          {job.id === 1 && (
            <>
              <span className="absolute top-3 right-5 bg-blue-100 text-blue-700 text-xs font-semibold px-1 py-1 rounded-full border border-blue-200">
                Featured
              </span>
              <span className="absolute bottom-4 right-0 bg-yellow-100 text-yellow-700 text-xs px-1 py-1 rounded-full border border-yellow-200">
                🔥 Hot
              </span>
            </>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 ">
            {job.title}
          </h2>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>{job.company}</span>
            <span className="text-yellow-500">• ⭐ {job.rating}</span>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-2">
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {job.jobLocation}
            </span>
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {job.type}
            </span>
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              {job.posted}
            </span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {(Array.isArray(job.tags)
              ? job.tags
              : (() => {
                  try {
                    return JSON.parse(job.tags || "[]");
                  } catch {
                    return [];
                  }
                })()
            ).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="text-right space-y-2 flex flex-col border-l-1 border-gray-300 pl-7">
        <p className="text-indigo-600 font-bold text-md px-6">{job.salary}</p>

        {/* Save Job Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleSaveJob}
            className={`relative px-10 py-2 rounded text-sm w-full border transition-all duration-300 ease-in-out
              ${isSaved ? "bg-green-100 text-green-700 border-green-300" : "text-gray-600 hover:bg-gray-100"}
              ${animating ? "scale-105" : ""}
            `}
          >
            {isSaved ? "✅ Saved" : "💾 Save Job"}
          </button>
        </div>

        <Link to={`/job/apply/${job.id}`}>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-13 py-2 rounded text-sm hover:opacity-90">
            ✍️ Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
