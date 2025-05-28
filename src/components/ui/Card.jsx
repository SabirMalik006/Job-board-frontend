import React from "react";
import image from "../../assets/images/download.jpeg";

const Card = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-xl py-5 px-4 flex items-start justify-between gap-4 border border-gray-200 mx-10">
      {/* left Section */}
      <div className="mx-5 flex gap-9 ">
        <div className="relative">
          <img
            src={image}
            alt={job.title}
            className="w-16 h-16 rounded-full object-cover bg-gray-500 my-6"
          />

          {job.id === 1 && (
            <>
              <span className="absolute top-3 right-5 bg-blue-100 color-blue text-xs font-semibold px-1 py-1 rounded-full border border-blue-200 ">
                Featured
              </span>
              <span className="absolute bottom-4  right-0 bg-yellow-100 color-yellow text-xs px-1 py-1 rounded-full border border-yellow-200">
                🔥 Hot
              </span>
            </>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 ">{job.title}</h2>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>{job.company}</span>
            <span className="text-yellow-500">• ⭐ {job.rating}</span>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-2">
            <div className="flex items-center gap-1">
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {job.jobLocation}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {job.type}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                {job.posted}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {job.tags.map((tag, index) => (
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
        <button
          className="text-gray-600 border px-10 py-2 rounded text-sm hover:bg-gray-100"
        >
          ♡ Save Job
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-2 rounded text-sm hover:opacity-90">
          ✍️ Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
