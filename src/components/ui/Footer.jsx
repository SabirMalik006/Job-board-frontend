import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white w-full bg-[#1a2939]" >
      <div className="top  flex justify-between items-start bg-[#1a2939] py-8 px-10" >
        <div className="first ">
            <p className="my-3 text-center ">Job Finder</p>
            <h4 className="opacity-50" >Connecting talent with Opportunity</h4>
        </div>
        <div className="second flex flex-col align-center justify-center ">
            <p className="my-3" >For Job Seekers</p>
            <h3 className=" ml-3 opacity-50" >Browse Jobs</h3>
            <h4 className="my-3 opacity-50" >Career Resources</h4>
        </div>
        <div className="third">
            <p className="my-3 text-center" >For Employers</p>
            <h3 className="my-3 ml-3 opacity-50" >Post a Job</h3>
            <h4 className="my-3 opacity-50" >Find Candidate</h4>
        </div>
        <div className="fourth">
            <p className="my-3 ml-1 " >Company</p>
            <h3 className=" ml-2  opacity-50" >About us</h3>
            <h4 className="my-3  ml-3 opacity-50" >Contact</h4>
            <h5 className="  opacity-50" >Privacy policy</h5>
        </div>
      </div>
      <div className="bottom text-center p-5 border-t border-gray-300 mx-3 opacity-70 ">
  <p>© 2025 Job Finder. All rights reserved</p>
</div>

    </footer>
  );
};

export default Footer;
