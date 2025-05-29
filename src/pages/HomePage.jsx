import React from 'react';
import SignupForm from './SignUpForm';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContent from './HomeContent'; // jo tumne naya component banaya hai
import SignupForm2 from './SignupForm2';
// import JobDescription from './JobDescription';
import JobDetails from './JobDetails'
import Company from './Company'
import Jobs from './Jobs'
// import Card from '../components/ui/Card';
const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomeContent />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signup2" element={<SignupForm2/>} />
        <Route path='/JobDetails' element={<JobDetails/>}/>
        <Route path='/Company' element={<Company/>}/>
        <Route path='/JobDescription' element={<JobDetails/>}/>
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

export default HomePage