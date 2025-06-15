import React, { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

function HeroSection({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, location });
  };

  return (
    <section className="bg-[#8824e6] py-20 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Discover Your Dream Job</h2>
        <p className="text-lg mb-10">Find opportunities that match your skills and aspirations</p>

        {/* Search Box */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          {/* Job title input */}
          <div className="flex items-center border border-white rounded-full px-3 py-2 w-72 shadow-sm bg-transparent">
            <Search className="text-white mr-2" size={20} />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="outline-none flex-grow text-sm text-white bg-transparent  placeholder-white"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          {/* Location input */}
          <div className="flex items-center border border-white rounded-full  px-3 py-2 w-56 shadow-sm bg-transparent">
            <MapPin className="text-white mr-2" size={20} />
            <input
              type="text"
              placeholder="Location"
              className="outline-none flex-grow text-sm text-white bg-transparent placeholder-white"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Job Type Button */}
          <button className="flex items-center border border-white  rounded-full px-3 py-2 shadow-sm hover:bg-white/10 text-sm text-white bg-transparent">
            <span className="mr-2">Job Type</span>
            <ChevronDown size={18} />
          </button>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-white text-[#8824e6] px-4 py-2 rounded hover:bg-gray-100 rounded-full transition flex items-center"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <span className="text-sm font-medium">Popular:</span>
          <div className="flex flex-wrap gap-2 mt-1 sm:mt-0">
            <button onClick={() => setKeyword("Remote")} className="bg-white text-[#8824e6] hover:bg-gray-100 text-sm px-3 py-1 rounded-full">Remote</button>
            <button onClick={() => setKeyword("Developer")} className="bg-white text-[#8824e6] hover:bg-gray-100 text-sm px-3 py-1 rounded-full">Developer</button>
            <button onClick={() => setKeyword("Design")} className="bg-white text-[#8824e6] hover:bg-gray-100 text-sm px-3 py-1 rounded-full">Design</button>
            <button onClick={() => setKeyword("Marketing")} className="bg-white text-[#8824e6] hover:bg-gray-100 text-sm px-3 py-1 rounded-full">Marketing</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
