import React from "react";
import Card from "../components/ui/Card";
import Navbar from "../components/ui/Navbar";
import HeroSection from "../components/ui/HeroSection";
// import Footer from '../components/ui/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from "./JobList";
import Footer from "../components/ui/Footer";

const HomeContent = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JobList />
      <Footer />
    </>
  );
};

export default HomeContent;
