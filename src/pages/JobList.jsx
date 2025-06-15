// src/components/JobList.jsx

import React, { useEffect, useState } from 'react'
import Card from '../components/ui/Card'
import axios from 'axios'
// import Navbar from '../components/ui/Navbar'
// import Footer from '../components/ui/Footer'

const JobList = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs/jobs') // ✅ your backend URL
        setJobs(response.data.data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      }
    }

    fetchJobs()
    
  }, [])

  return (
    <>
    {/* <Navbar /> */}
    <div className="flex flex-wrap flex-col gap-4 mx-5 my-5">
      {jobs.length > 0 ? (
        jobs.map((job) => <Card key={job.id} job={job} />)
      ) : (
        <p className="text-center text-purple-700 font-medium animate-pulse">
  Loading jobs...
</p>
      )}
    </div>
    {/* <Footer /> */}
    </>
    
  )
}

export default JobList
