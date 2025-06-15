import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("http://localhost:5000/jobs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("✅ Job posted successfully!");
      setFormData({
        title: "",
        category: "",
        description: "",
        location: "",
        salary: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to post job!");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">📢 Post a New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary (optional)"
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Post Job
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default PostJob;
