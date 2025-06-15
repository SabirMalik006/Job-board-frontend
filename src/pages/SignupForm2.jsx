import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { FormCard, FormCardContent } from "../components/ui/cardd";
import Textarea from "../components/ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import axiosInstance from "../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm2 = () => {
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get initial form data from previous step and combine with new fields
  const [formData, setFormData] = useState({
    remoteWork: false,
    ...(location.state?.formData || {}),
    portfolio: "",
    bio: "",
    currentPosition: "",
    location: "",
    experience: "",
    workingStyle: "",
    preferredRole: "",
    workType: "",
    preferredLocation: "",
    salaryRange: "",
    availability: "",
    // remoteWork: false,
    freelanceProjects: false,
    partTimeOpportunities: false,
    fullTimePositions: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
      [field]: Boolean(checked),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const fullName = `${formData.firstName} ${formData.lastName}`;

      // Prepare the complete user data for registration
      const userData = {
        name: fullName,
        // firstName: formData.firstName,
        // lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: formData.role,
        profile: {
          portfolio: formData.portfolio,
          bio: formData.bio,
          currentPosition: formData.currentPosition,
          location: formData.location,
          experience: formData.experience,
          workingStyle: formData.workingStyle,
        },
        preferences: {
          preferredRole: formData.preferredRole,
          workType: formData.workType,
          preferredLocation: formData.preferredLocation,
          salaryRange: formData.salaryRange,
          availability: formData.availability,
          remoteWork: formData.remoteWork,
          freelanceProjects: formData.freelanceProjects,
          partTimeOpportunities: formData.partTimeOpportunities,
          fullTimePositions: formData.fullTimePositions,
        },
      };

      // API call to register endpoint
      const response = await axiosInstance.post("/auth/register", userData);
      console.log("Full response:", response);

      toast.success("🎉 Registered successfully!");
      if (response.status === 201 || response.status === 200) {
        setSuccess(true);
        // Set role properly
        localStorage.setItem(
          "userRole",
          JSON.stringify(response.data.data.role)
        );
        // no need for JSON.stringify if it's a string
        localStorage.setItem("user", JSON.stringify(response.data.data));
        // Store full user object if needed
        // console.log("User Data:", userData);
        setTimeout(() => {
          navigate("/login"); // Navigate after 2 seconds
        }, 2000);
      }
      console.log("Full Response Data:", response.data); // Pura response
      console.log("User Data from Response:", response.data.data); // Actual user object
      console.log("Role from Response:", response.data.data.role); // Role value
    } catch (err) {
      console.error("Registration error:", err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
        <FormCard className="w-full max-w-2xl bg-white shadow-lg border-0">
          <FormCardContent className="p-8">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Complete Your Profile
              </h1>
              <p className="text-gray-600 text-sm">
                Enter additional information to complete registration
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phoneNumber || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Role Information */}
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  Role
                </Label>
                <Input
                  id="role"
                  name="role"
                  placeholder="Selct your role"
                  value={formData.role || ""}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password || ""}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={formData.confirmPassword || ""}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div className="space-y-2">
                <Label
                  htmlFor="portfolio"
                  className="text-sm font-medium text-gray-700"
                >
                  Portfolio/LinkedIn
                </Label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  placeholder="https://yourportfolio.com or LinkedIn profile"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <Label
                  htmlFor="bio"
                  className="text-sm font-medium text-gray-700"
                >
                  Professional Bio
                </Label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about your skills, experience, and professional interests"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[100px]"
                />
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="currentPosition"
                    className="text-sm font-medium text-gray-700"
                  >
                    Current Position
                  </Label>
                  <Input
                    id="currentPosition"
                    name="currentPosition"
                    placeholder="Software Engineer"
                    value={formData.currentPosition}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    className="text-sm font-medium text-gray-700"
                  >
                    Location
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="New York, NY"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="experience"
                    className="text-sm font-medium text-gray-700"
                  >
                    Years of Experience
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    placeholder="5"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="workingStyle"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Working Style
                  </Label>
                  <Input
                    id="workingStyle"
                    name="workingStyle"
                    placeholder="Remote, Hybrid, On-site"
                    value={formData.workingStyle}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Job Preferences Section */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Job Preferences
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="preferredRole"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Role
                    </Label>
                    <Input
                      id="preferredRole"
                      name="preferredRole"
                      placeholder="Frontend Developer, UX Designer, etc."
                      value={formData.preferredRole}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="workType"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Work Type
                    </Label>
                    <Input
                      id="workType"
                      name="workType"
                      placeholder="Full-time, Contract, etc."
                      value={formData.workType}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="preferredLocation"
                      className="text-sm font-medium text-gray-700"
                    >
                      Preferred Location
                    </Label>
                    <Input
                      id="preferredLocation"
                      name="preferredLocation"
                      placeholder="Remote, Specific cities, etc."
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="salaryRange"
                      className="text-sm font-medium text-gray-700"
                    >
                      Expected Salary Range
                    </Label>
                    <Input
                      id="salaryRange"
                      name="salaryRange"
                      placeholder="$80,000 - $120,000"
                      value={formData.salaryRange}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="availability"
                    className="text-sm font-medium text-gray-700"
                  >
                    Availability
                  </Label>
                  <Input
                    id="availability"
                    name="availability"
                    placeholder="Immediately, 2 weeks notice, etc."
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <Label className="text-sm font-medium text-gray-700">
                    I'm interested in:
                  </Label>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="remoteWork"
                        checked={formData.remoteWork}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("remoteWork", checked)
                        }
                        className="border-gray-300"
                      />
                      <label
                        htmlFor="remoteWork"
                        className="text-sm text-gray-700"
                      >
                        Remote work
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="freelanceProjects"
                        checked={formData.freelanceProjects}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("freelanceProjects", checked)
                        }
                        className="border-gray-300"
                      />
                      <label
                        htmlFor="freelanceProjects"
                        className="text-sm text-gray-700"
                      >
                        Freelance projects
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="partTimeOpportunities"
                        checked={formData.partTimeOpportunities}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("partTimeOpportunities", checked)
                        }
                        className="border-gray-300"
                      />
                      <label
                        htmlFor="partTimeOpportunities"
                        className="text-sm text-gray-700"
                      >
                        Part-time work
                      </label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="fullTimePositions"
                        checked={formData.fullTimePositions}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("fullTimePositions", checked)
                        }
                        className="border-gray-300"
                      />
                      <label
                        htmlFor="fullTimePositions"
                        className="text-sm text-gray-700"
                      >
                        Full-time positions
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    required
                    className="mt-1 border-gray-300"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg text-sm transition-colors mt-6"
              >
                {loading ? "Registering..." : "Complete Registration"}
              </Button>
              {success && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 border border-green-400 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
                  Register successful! Redirecting...
                </div>
              )}
            </form>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />

            {/* Footer */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Sign in
              </Link>
            </p>
          </FormCardContent>
        </FormCard>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm2;
