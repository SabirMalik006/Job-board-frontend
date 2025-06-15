import React, { useEffect, useState } from "react";
import axios from "axios";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://localhost:5000/jobs/saved", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setSavedJobs(response.data.jobs || []);
      } catch (error) {
        console.error("Error fetching saved jobs:", error);
      }
    };

    fetchSavedJobs();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Saved Jobs</h2>
      {savedJobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        <ul className="space-y-4">
          {savedJobs.map((item, index) => (
            <li
              key={index}
              className="p-4 border rounded shadow-md bg-white hover:bg-gray-50"
            >
              <h3 className="text-xl font-semibold">
                {item.Job?.title || "Untitled Job"}
              </h3>
              <p className="text-gray-600">
                {item.Job?.description?.slice(0, 100)}...
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedJobs;
