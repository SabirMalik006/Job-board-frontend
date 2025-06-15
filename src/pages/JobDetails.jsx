import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MapPin, Calendar, DollarSign } from "lucide-react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Link } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs/jobs/${id}`)
      .then((res) => {
        if (res.data.status === "success") {
          setJob(res.data.data);
        }
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, [id]);

  if (!job) {
    return (
      <div className="text-center mt-20 text-gray-600">
        Loading job details...
      </div>
    );
  }

  // String se array me convert karna
  const skills = JSON.parse(job.tags || "[]");
  const responsibilities = JSON.parse(job.responsibilities || "[]");
  const requirements = JSON.parse(job.requirements || "[]");
  const benefits = JSON.parse(job.benefits || "[]");

  // const handleSaveJob = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  
  //     if (!token) {
  //       alert("Please login first to save the job.");
  //       return;
  //     }
  
  //     await axios.post(
  //       "http://localhost:5000/jobs/saved",
  //       { jobId: job.id },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  
  //     alert("Job saved successfully!");
  //   } catch (err) {
  //     console.error("Error saving job:", err);
  //     alert("Failed to save the job. It might be already saved.");
  //   }
  // };
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen pby-8 bg-gray-50  bg-white rounded-lg shadow-sm  mb-8 border border-gray-100 mx-10 my-5">
        <div className="w-full ">
          {/* Header Section */}
          <div className="w-full bg-white rounded-lg shadow-sm  p-6 mb-6 border border-gray-100 relative">
            {/* Centered Title */}
            <h1 className="absolute left-1/2 top-2 transform -translate-x-1/2 text-3xl font-bold text-gray-900 pt-5">
              {job.title}
            </h1>

            <div className="flex items-center justify-between pt-12 mb-12  ">
              {/* Left - Logo + Info */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {job.company.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-4">
                    <p className="text-base text-gray-700 font-semibold">
                      {job.company}
                    </p>
                    <p className="text-base text-gray-700 font-semibold">
                      {job.rating}🌟
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-5 text-sm text-gray-600 mt-2">
                    <div className="flex items-center gap-1 bg-gray-100 text-black px-2 py-1 rounded-md">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-gray-100 text-black px-2 py-1 rounded-md">
                      <Calendar size={16} />
                      <span>{job.posted}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 text-black px-2 py-1 rounded-md">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-gray-100 text-black px-2 py-1 rounded-md">
                      <DollarSign size={16} />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Apply Button */}
              <div className="m-8">
                <div className="text-center">
                  <Link
                    to={`/job/apply/${job._id}`}
                    className="bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
              {/* Save Job Button
              <div className="text-center mt-6">
                <button
                  onClick={handleSaveJob}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
                >
                  Save Job
                </button>
              </div> */}
            </div>
          </div>

          {/* Job Description */}
          <div className="m-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Job Description
            </h2>
            <p className="text-gray-700 leading-relaxed text-left">
              {job.description}
            </p>
          </div>

          {/* Key Skills */}
          <div className="m-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Key Skills
            </h2>
            <div className="flex flex-wrap gap-2 justify-start">
              {JSON.parse(job.tags).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="m-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Responsibilities
            </h2>
            <ul className="space-y-3 text-left">
              {JSON.parse(job.responsibilities).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="m-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Requirements
            </h2>
            <ul className="space-y-3 text-left">
              {JSON.parse(job.requirements).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="m-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Benefits
            </h2>
            <ul className="space-y-3 text-left">
              {JSON.parse(job.benefits).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="m-8">
            <div className="text-center">
              <Link
                to={`/job/apply/${job._id}`}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
              >
                Apply for this Position
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JobDetail;
