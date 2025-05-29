import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign, Star, Upload, ExternalLink } from 'lucide-react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export default function JobPortal() {
  const [currentView, setCurrentView] = useState('details'); // 'details' or 'application'
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    resumeCV: '',
    coverLetter: '',
    linkedinProfile: '',
    githubProfile: '',
    portfolioWebsite: '',
    earliestStartDate: '',
    howDidYouHear: '',
    willingToRelocate: false
  });

  const handleInputChange = (field, value) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const JobDetailsPage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {/* <div className="bg-white border-b px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Jobs</span> <span className="mx-2">/</span>
            <span className="text-gray-900">Senior Frontend Developer</span>
          </nav>
        </div>
      </div> */}
  <Navbar/>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg border flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Senior Frontend Developer</h1>
                <div className="text-gray-600 mb-2">TechCorp Solutions • 4.8 ⭐</div>
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
            <button
              onClick={() => setCurrentView('application')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            TechCorp Solutions is seeking a skilled Senior Frontend Developer to join our innovative team. The ideal candidate will have a strong background in React and modern JavaScript frameworks, with a passion for creating exceptional user experiences.
          </p>

          {/* Key Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'TypeScript'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Design and develop high-quality web applications using React and related technologies
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Collaborate with UX/UI designers to implement responsive and intuitive interfaces
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ensure cross-browser compatibility and optimize applications for maximum speed
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Work with backend developers to integrate RESTful APIs and other services
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Write clean, maintainable, and well-documented code following best practices
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Participate in code reviews and mentor junior developers
              </li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                5+ years of experience with React and modern JavaScript (ES6+)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Strong knowledge of HTML5, CSS3, and responsive design principles
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Experience with state management libraries (Redux, Context API, etc.)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Familiarity with TypeScript and testing frameworks (Jest, React Testing Library)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Understanding of CI/CD pipelines and version control systems (Git)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Bachelor's degree in Computer Science or equivalent experience
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Competitive salary and performance bonuses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Comprehensive health, dental, and vision insurance
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                401(k) matching program
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Flexible work hours and remote work options
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Professional development budget
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Modern office with snacks and beverages
              </li>
            </ul>
          </div>

          <button
            onClick={() => setCurrentView('application')}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Apply for this Position
          </button>
        </div>

        {/* Similar Jobs */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Similar Jobs You Might Like</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg border flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">React Developer</h3>
                  <p className="text-gray-600 text-sm">WebCorp Solutions</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                    <span>4.7</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                Remote • Full-time
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View Details
              </button>
            </div>

            <div className="border rounded-lg p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg border flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Frontend Engineer</h3>
                  <p className="text-gray-600 text-sm">DigitalCraft Inc.</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                    <span>4.9</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                San Francisco, CA • Full-time
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );

  const JobApplicationPage = () => (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Breadcrumb */}
      {/* <div className="bg-white border-b px-6 py-3">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500">
            <span>Home</span> <span className="mx-2">/</span>
            <span>Jobs</span> <span className="mx-2">/</span>
            <span className="text-gray-900">Senior Frontend Developer</span>
          </nav>
        </div>
      </div> */}

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white rounded-lg border flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Senior Frontend Developer</h1>
                <div className="text-gray-600 mb-2">TechCorp Solutions • 4.8 ⭐</div>
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
            <button
              onClick={() => setCurrentView('details')}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-200"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">Application Form</h2>

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={applicationData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
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
                  onChange={(e) => handleInputChange('email', e.target.value)}
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
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition duration-200">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Upload Resume (PDF, DOC, DOCX)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Additional Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter
              </label>
              <textarea
                value={applicationData.coverLetter}
                onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                value={applicationData.linkedinProfile}
                onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
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
                onChange={(e) => handleInputChange('githubProfile', e.target.value)}
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
                onChange={(e) => handleInputChange('portfolioWebsite', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Additional Questions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Earliest Start Date
              </label>
              <input
                type="date"
                value={applicationData.earliestStartDate}
                onChange={(e) => handleInputChange('earliestStartDate', e.target.value)}
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
                onChange={(e) => handleInputChange('howDidYouHear', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-8">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={applicationData.willingToRelocate}
                onChange={(e) => handleInputChange('willingToRelocate', e.target.checked)}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
              />
              <span className="ml-3 text-sm text-gray-700">I am willing to relocate if necessary</span>
            </label>
          </div>

          {/* Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs">i</span>
              </div>
              <p className="ml-3 text-sm text-blue-800">
                By submitting this application, I certify that all information provided is accurate and complete to the best of my knowledge. I understand that any false statements or omissions may disqualify me from further consideration for employment.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentView('details')}
              className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Details
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
              Submit Application
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );

  return currentView === 'details' ? <JobDetailsPage /> : <JobApplicationPage />;
}