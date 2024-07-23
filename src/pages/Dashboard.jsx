import React from 'react';

const jobData = [
  {
    company: 'Salesforce',
    rating: '4.1',
    title: 'Intern',
    location: 'Hyderabad',
    description: 'Our Futureforce University Recruiting program is dedicated to attracting, retaining and cultivating talent...',
  },
  {
    company: 'Google',
    rating: '4.3',
    title: 'Web Application Engineer',
    location: 'Hyderabad',
    description: 'Work on web applications that affect how our business runs, giving them the opportunity to make a tangible impact...',
  },
  // Add more job data as needed
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobData.map((job, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{job.company}</h2>
              <p className="text-gray-400 mb-1">{job.title}</p>
              <p className="text-gray-400 mb-1">{job.location}</p>
              <p className="text-gray-400 mb-4">Rating: {job.rating} ★</p>
              <p className="text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
