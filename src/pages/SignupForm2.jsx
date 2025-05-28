import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { FormCard, FormCardContent } from "../components/ui/cardd";
// import { Separator } from "../components/ui/separator";
import Textarea from "../components/ui/textarea";
import { Eye, EyeOff } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Link } from "react-router-dom";

const SignupForm2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
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
    remoteWork: false,
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
  };

  const handleCheckboxChange = (name, checked) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <FormCard className="w-full max-w-2xl bg-white shadow-lg border-0">
        <FormCardContent className="p-8">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Create Your Account
            </h1>
            <p className="text-gray-600 text-sm">
              Enter information to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700"
                >
                  First and Last Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    value={formData.password}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                Portfolio
              </Label>
              <Input
                id="portfolio"
                name="portfolio"
                placeholder="https://yourportfolio.com"
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
                Bio
              </Label>
              <Textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself, your experience, and your passion"
                value={formData.bio}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[80px]"
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
                  placeholder="5 years"
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
                  Working Style
                </Label>
                <Input
                  id="workingStyle"
                  name="workingStyle"
                  placeholder="Remote, Hybrid, etc."
                  value={formData.workingStyle}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Job Preferences Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Job Preferences (Optional)
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="preferredRole"
                    className="text-sm font-medium text-gray-700"
                  >
                    Preferred Role Type
                  </Label>
                  <Input
                    id="preferredRole"
                    name="preferredRole"
                    placeholder="Frontend Developer"
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
                    Work Type
                  </Label>
                  <Input
                    id="workType"
                    name="workType"
                    placeholder="Full-time"
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
                    placeholder="Remote"
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
                    Salary Range
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
                  placeholder="Available immediately"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  I'm interested in: (Check all that apply)
                </Label>

                <div className="space-y-2">
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
                      Remote work opportunities
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
                      Freelance and short-term projects
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
                      Part-time opportunities
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
            <div className="space-y-3">
              <p className="text-xs text-gray-500">
                By clicking Continue, you acknowledge that you have read and
                agree to TechJobs' Terms of Service and Privacy Policy.
              </p>
            </div>

            {/* Continue Button */}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg text-sm transition-colors"
            >
              Continue
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
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
  );
};

export default SignupForm2;
