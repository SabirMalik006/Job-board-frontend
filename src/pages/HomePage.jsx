import React from 'react';
import SignupForm from './SignUpForm';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContent from './HomeContent';
import SignupForm2 from './SignupForm2';
import JobDetails from './JobDetails';
import Company from './Company';
import Jobs from './Jobs';
import JobApplicationPage from '../pages/jobApplication';
import EmployerDashboard from './EmployerDashboard';
import PostJob from "../pages/PostJob";
import UserDashboard from './UserDashboard';
import SavedJobs from './SavedJobs';
import Companies from './Companies';

// ✅ React Toastify import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  return (
    <Router>
      {/* 👇 ToastContainer ko Routes ke bahar rakhna zaroori hai */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signup2" element={<SignupForm2 />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/apply/:jobId" element={<JobApplicationPage />} />
        <Route path="/JobApplicationPage" element={<JobApplicationPage />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/EmployerDashboard" element={<EmployerDashboard />} />
        <Route path="/employer/post-job" element={<PostJob />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </Router>
  );
};

export default HomePage;
