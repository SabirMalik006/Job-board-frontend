import React, { useState } from "react";
import axios from "axios";
import { ArrowLeft, MapPin, Clock, DollarSign, Upload } from "lucide-react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // 👈 import this at the top

const JobApplicationPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    coverLetter: "",
    linkedinProfile: "",
    githubProfile: "",
    portfolioWebsite: "",
    earliestStartDate: "",
    howDidYouHear: "",
    willingToRelocate: false,
  });

  const [resumeFile, setResumeFile] = useState(null);

  const handleInputChange = (field, value) => {
    setApplicationData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }

    setLoading(true); // 🔵 Start loading

    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      const userId = decoded._id || decoded.userId || decoded.id;

      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("jobId", jobId);
      formData.append("fullName", applicationData.fullName);
      formData.append("email", applicationData.email);
      formData.append("phoneNumber", applicationData.phoneNumber);
      formData.append("coverLetter", applicationData.coverLetter);
      formData.append("linkedinProfile", applicationData.linkedinProfile);
      formData.append("githubProfile", applicationData.githubProfile);
      formData.append("portfolioWebsite", applicationData.portfolioWebsite);
      formData.append("earliestStartDate", applicationData.earliestStartDate);
      formData.append("howDidYouHear", applicationData.howDidYouHear);
      formData.append("willingToRelocate", applicationData.willingToRelocate);
      formData.append("resume", resumeFile);

      const response = await axios.post(
        `http://localhost:5000/jobs/apply/${jobId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("🎉 Application submitted successfully!", {
        position: "top-center",
        autoClose: 1500,
        onClose: () => navigate("/jobs"),
        theme: "colored",
      });
    } catch (error) {
      toast.error(
        "❌ " + (error.response?.data?.message || "Something went wrong."),
        {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        }
      );
    } finally {
      setLoading(false); // 🔴 Stop loading
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg border flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Senior Frontend Developer
                </h1>
                <div className="text-gray-600 mb-2">
                  TechCorp Solutions • 4.8 ⭐
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    New York, NY
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    Full-time
                  </div>
                  <div>2 days ago</div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    $90,000 - $120,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            Application Form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={applicationData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={applicationData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={applicationData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <label
                    htmlFor="resumeUpload"
                    className="w-full block px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-900 bg-white hover:bg-gray-50 cursor-pointer"
                  >
                    Upload Resume
                  </label>
                  <input
                    id="resumeUpload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    hidden
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Additional Information
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  value={applicationData.coverLetter}
                  onChange={(e) =>
                    handleInputChange("coverLetter", e.target.value)
                  }
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  value={applicationData.linkedinProfile}
                  onChange={(e) =>
                    handleInputChange("linkedinProfile", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  value={applicationData.githubProfile}
                  onChange={(e) =>
                    handleInputChange("githubProfile", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  value={applicationData.portfolioWebsite}
                  onChange={(e) =>
                    handleInputChange("portfolioWebsite", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Earliest Start Date
                </label>
                <input
                  type="date"
                  value={applicationData.earliestStartDate}
                  onChange={(e) =>
                    handleInputChange("earliestStartDate", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  value={applicationData.howDidYouHear}
                  onChange={(e) =>
                    handleInputChange("howDidYouHear", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={applicationData.willingToRelocate}
                  onChange={(e) =>
                    handleInputChange("willingToRelocate", e.target.checked)
                  }
                  className="mt-1 mr-2"
                />
                <span className="text-gray-700">Willing to relocate?</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>

            {/* Save Job Button
              <div className="text-center mt-6">
                <button
                  onClick={handleSaveJob}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  Save Job
                </button>
              </div> */}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JobApplicationPage;
