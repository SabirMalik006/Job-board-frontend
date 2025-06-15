// import React, { useState } from "react";
// import { Building2, User, Lock, Upload, Eye, EyeOff } from "lucide-react";
// import   Footer  from "../components/ui/Footer";
// import   Navbar  from "../components/ui/Navbar";
// export default function CompanyRegistration() {
//   const [formData, setFormData] = useState({
//     companyName: "",
//     companyEmail: "",
//     industry: "",
//     companySize: "",
//     website: "",
//     fullName: "",
//     jobTitle: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     companyLogo: null,
//     companyDescription: "",
//     agreeTerms: false,
//     emailUpdates: false,
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };
//   return (
//       <>
//       <Navbar />
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-lg shadow-sm p-8">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-2xl font-semibold text-gray-900 mb-2">
//               Register Your Company
//             </h1>
//             <p className="text-gray-500 text-sm">
//               Start hiring top talent today
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Company Information */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-2 mb-4">
//                 <Building2 className="w-5 h-5 text-blue-600" />
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Company Information
//                 </h2>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Name *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.companyName}
//                   onChange={(e) =>
//                     handleInputChange("companyName", e.target.value)
//                   }
//                   placeholder="Your company name"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Email *
//                 </label>
//                 <input
//                   type="email"
//                   value={formData.companyEmail}
//                   onChange={(e) =>
//                     handleInputChange("companyEmail", e.target.value)
//                   }
//                   placeholder="company@example.com"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Industry *
//                   </label>
//                   <select
//                     value={formData.industry}
//                     onChange={(e) =>
//                       handleInputChange("industry", e.target.value)
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-400"
//                   >
//                     <option value="">Select industry</option>
//                     <option value="technology">Technology</option>
//                     <option value="finance">Finance</option>
//                     <option value="healthcare">Healthcare</option>
//                     <option value="education">Education</option>
//                     <option value="retail">Retail</option>
//                     <option value="manufacturing">Manufacturing</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Company Size *
//                   </label>
//                   <select
//                     value={formData.companySize}
//                     onChange={(e) =>
//                       handleInputChange("companySize", e.target.value)
//                     }
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-400"
//                   >
//                     <option value="">Select size</option>
//                     <option value="1-10">1-10 employees</option>
//                     <option value="11-50">11-50 employees</option>
//                     <option value="51-200">51-200 employees</option>
//                     <option value="201-500">201-500 employees</option>
//                     <option value="500+">500+ employees</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Website (Optional)
//                 </label>
//                 <input
//                   type="url"
//                   value={formData.website}
//                   onChange={(e) => handleInputChange("website", e.target.value)}
//                   placeholder="https://yourcompany.com"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                 />
//               </div>
//             </div>

//             {/* Contact Person */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-2 mb-4">
//                 <User className="w-5 h-5 text-blue-600" />
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Contact Person
//                 </h2>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       handleInputChange("fullName", e.target.value)
//                     }
//                     placeholder="Your full name"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Job Title *
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.jobTitle}
//                     onChange={(e) =>
//                       handleInputChange("jobTitle", e.target.value)
//                     }
//                     placeholder="HR Manager, CEO, etc."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number *
//                 </label>
//                 <input
//                   type="tel"
//                   value={formData.phoneNumber}
//                   onChange={(e) =>
//                     handleInputChange("phoneNumber", e.target.value)
//                   }
//                   placeholder="+1 (555) 123-4567"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                 />
//               </div>
//             </div>

//             {/* Account Setup */}
//             <div className="space-y-6">
//               <div className="flex items-center space-x-2 mb-4">
//                 <Lock className="w-5 h-5 text-blue-600" />
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Account Setup
//                 </h2>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Password *
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={formData.password}
//                       onChange={(e) =>
//                         handleInputChange("password", e.target.value)
//                       }
//                       placeholder="••••••••"
//                       className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="w-5 h-5" />
//                       ) : (
//                         <Eye className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Confirm Password *
//                   </label>
//                   <div className="relative">
//                     <input
//                       type={showConfirmPassword ? "text" : "password"}
//                       value={formData.confirmPassword}
//                       onChange={(e) =>
//                         handleInputChange("confirmPassword", e.target.value)
//                       }
//                       placeholder="••••••••"
//                       className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                     />
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setShowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="w-5 h-5" />
//                       ) : (
//                         <Eye className="w-5 h-5" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Additional Information */}
//             <div className="space-y-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Additional Information (Optional)
//               </h3>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Logo
//                 </label>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition duration-200">
//                   <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                   <p className="text-sm text-gray-600">
//                     Upload Logo (PNG, JPG, SVG)
//                   </p>
//                   <input
//                     type="file"
//                     className="hidden"
//                     accept=".png,.jpg,.jpeg,.svg"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Description
//                 </label>
//                 <textarea
//                   value={formData.companyDescription}
//                   onChange={(e) =>
//                     handleInputChange("companyDescription", e.target.value)
//                   }
//                   placeholder="Brief description about your company and what you do..."
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
//                 />
//               </div>
//             </div>

//             {/* Checkboxes */}
//             <div className="space-y-4">
//               <label className="flex items-start">
//                 <input
//                   type="checkbox"
//                   checked={formData.agreeTerms}
//                   onChange={(e) =>
//                     handleInputChange("agreeTerms", e.target.checked)
//                   }
//                   className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
//                 />
//                 <span className="ml-3 text-sm text-gray-700">
//                   I agree to the{" "}
//                   <a
//                     href="#"
//                     className="text-blue-600 hover:text-blue-700 underline"
//                   >
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a
//                     href="#"
//                     className="text-blue-600 hover:text-blue-700 underline"
//                   >
//                     Privacy Policy
//                   </a>{" "}
//                   *
//                 </span>
//               </label>

//               <label className="flex items-start">
//                 <input
//                   type="checkbox"
//                   checked={formData.emailUpdates}
//                   onChange={(e) =>
//                     handleInputChange("emailUpdates", e.target.checked)
//                   }
//                   className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
//                 />
//                 <span className="ml-3 text-sm text-gray-700">
//                   Send me hiring tips and platform updates via email
//                 </span>
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={!formData.agreeTerms}
//               className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
//             >
//               Register Company
//             </button>

//             {/* Sign In Link */}
//             <p className="text-center text-sm text-gray-600">
//               Already have an account?{" "}
//               <a
//                 href="#"
//                 className="font-medium text-blue-600 hover:text-blue-700"
//               >
//                 Sign in
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }


import React, { useState } from "react";
import { Building2, User, Lock, Upload, Eye, EyeOff } from "lucide-react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function CompanyRegistration() {
  // All Form States
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    industry: "",
    companySize: "",
    website: "",
    fullName: "",
    jobTitle: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    companyLogo: null,
    companyDescription: "",
    agreeTerms: false,
    emailUpdates: false,
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle Input Changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle File Upload
  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleInputChange("companyLogo", e.target.files[0]);
    }
  };

  // Validate Form
  const validateForm = () => {
    if (!formData.companyName.trim()) {
      setError("Company name is required!");
      return false;
    }
    if (!formData.companyEmail.includes("@")) {
      setError("Valid email is required!");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be 6+ characters!");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return false;
    }
    if (!formData.agreeTerms) {
      setError("You must accept terms!");
      return false;
    }
    setError("");
    return true;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSuccess("");

    // API Call (Yahan tum khud lagana)
    console.log("Data ready for API:", formData);

    // Simulate API call (Replace this with actual API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess("Company registered successfully!");
      // Reset form if needed
      // setFormData({...initialState});
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Register Your Company
              </h1>
              <p className="text-gray-500 text-sm">
                Start hiring top talent today
              </p>
            </div>

            {/* Error/Success Messages */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                {success}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Company Information
                  </h2>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>

                
                    {/* Industry */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <input
                        type="text"
                        value={formData.industry}
                        onChange={(e) => handleInputChange("industry", e.target.value)}
                        placeholder="Your industry"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                        required
                      />
                    </div>

                    {/* Company Size */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size *
                      </label>
                      <input
                        type="text"
                        value={formData.companySize}
                        onChange={(e) => handleInputChange("companySize", e.target.value)}
                        placeholder="Your company size"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                        required
                      />
                    </div>

                {/* Website */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Your address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                {/* Rest of your form fields... */}
                {/* (Industry, Company Size, etc. - Tumhare original fields yahi rahenge) */}

                    

              </div>

              {/* Contact Person Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Contact Person
                  </h2>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>

                {/* Rest of contact fields... */}
              </div>

              {/* Account Setup Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Account Setup
                  </h2>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      placeholder="••••••••"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                      required
                      minLength="6"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleInputChange("confirmPassword", e.target.value)
                      }
                      placeholder="••••••••"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
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
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Additional Information (Optional)
                </h3>

                {/* Company Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Logo
                  </label>
                  <label className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition duration-200 cursor-pointer block">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {formData.companyLogo
                        ? formData.companyLogo.name
                        : "Upload Logo (PNG, JPG, SVG)"}
                    </p>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.svg"
                    />
                  </label>
                </div>

                {/* Company Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Description
                  </label>
                  <textarea
                    value={formData.companyDescription}
                    onChange={(e) =>
                      handleInputChange("companyDescription", e.target.value)
                    }
                    placeholder="Brief description about your company..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Terms Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      handleInputChange("agreeTerms", e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    required
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I agree to the terms and conditions *
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.emailUpdates}
                    onChange={(e) =>
                      handleInputChange("emailUpdates", e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    Receive email updates
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Register Company"
                )}
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-700"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}