// src/components/JobList.jsx

import React from 'react'
import Card from '../components/ui/Card'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

const job = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    tags: ['HTML', 'CSS', 'JavaScript'],
    rating: 4.8,
    company: 'Uptech Sol',
    jobLocation: 'Pakistan',
    time: '2 days ago',
    salary: '$50,000 - $75,000',
    posted: '24 Hours ago'
  },
  {
    id: 2,
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Part-time',
    tags: ['Python', 'Django', 'SQL'],
    rating: 4.5,
    company: 'netSol',
    jobLocation: 'Pakistan',
    time: '2 days ago',
    salary: '$50,000 - $75,000',
    posted: 'Yesterday'
  },{
    id: 3,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    tags: ['HTML', 'CSS', 'JavaScript'],
    rating: 4.8,
    company: 'Uptech Sol',
    jobLocation: 'Pakistan',
    time:'2 days ago',
    salary: '$50,000 - $75,000',
    posted:'24 Hours ago'
},{
    id: 4,
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Part-time',
    tags: ['Python', 'Django', 'SQL'],
    rating: 4.5,
    company: 'netSol',
    jobLocation: 'Pakistan',
    time:'2 days ago',
    salary: '$50,000 - $75,000',
    posted:'Yesterday'
},{
    id: 5,
    title: 'Full Stack Developer',
    location: 'Hybrid',
    type: 'Full-time',
    tags: ['React', 'Node.js', 'MongoDB'],
    rating: 4.7,
    company: 'Uptech Sol',
    jobLocation: 'Pakistan',
    time:'2 days ago',
    salary: '$50,000 - $75,000',
    posted:'month ago'
},{
    id: 6,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    tags: ['HTML', 'CSS', 'JavaScript'],
    rating: 4.8,
    company: 'Hma Tech Solutions',
    jobLocation: 'Pakistan',
    time:'week ago',
    salary: '$40,000 - $87,000',
    posted:'Today'
},{
    id: 7,
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Python', 'Django', 'SQL'],
    rating: 4.5,
    company: 'Prism Promote',
    jobLocation: 'india',
    salary: '$50,00 - $75,00',
    time:'1 days ago',
    posted:'month ago'
}
]

const JobList = () => {
  return (
  <>
    <Navbar />
    <div className="flex flex-wrap flex-col gap-4 mx-5 my-5">
      {job.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
    <Footer />
    </>
  )
}

export default JobList
