import React from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const companies = [
  {
    name: 'TechCorp Solutions',
    location: 'New York, NY',
    website: 'https://techcorp.com',
    logo: 'https://logo.clearbit.com/techcorp.com',
  },
  {
    name: 'InnovateX Inc.',
    location: 'San Francisco, CA',
    website: 'https://innovatex.com',
    logo: 'https://logo.clearbit.com/innovatex.com',
  },
  {
    name: 'CodeHive',
    location: 'Austin, TX',
    website: 'https://codehive.com',
    logo: 'https://logo.clearbit.com/codehive.com',
  },
  {
    name: 'DevSoft',
    location: 'Seattle, WA',
    website: 'https://devsoft.com',
    logo: 'https://logo.clearbit.com/devsoft.com',
  },
  {
    name: 'CloudNet Technologies',
    location: 'Chicago, IL',
    website: 'https://cloudnet.com',
    logo: 'https://logo.clearbit.com/cloudnet.com',
  },
  {
    name: 'NextGen Robotics',
    location: 'Boston, MA',
    website: 'https://nextgenrobotics.com',
    logo: 'https://logo.clearbit.com/nextgenrobotics.com',
  },
  {
    name: 'CyberShield',
    location: 'Los Angeles, CA',
    website: 'https://cybershield.com',
    logo: 'https://logo.clearbit.com/cybershield.com',
  },
  {
    name: 'Pixel Studios',
    location: 'Miami, FL',
    website: 'https://pixelstudios.com',
    logo: 'https://logo.clearbit.com/pixelstudios.com',
  },
  {
    name: 'HealthAI Systems',
    location: 'Denver, CO',
    website: 'https://healthai.com',
    logo: 'https://logo.clearbit.com/healthai.com',
  },
  {
    name: 'EcoWare Solutions',
    location: 'Portland, OR',
    website: 'https://ecoware.com',
    logo: 'https://logo.clearbit.com/ecoware.com',
  },
];

const Companies = () => {
  return (
    <>
    <Navbar />
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Top Companies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">{company.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{company.location}</p>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Companies;
