import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import jobsCsv from '../assets/jobs.csv'; // Make sure to place your CSV file in the correct path

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(jobsCsv);
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      setJobs(results.data); // array of objects
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{job.JobRole}</h2>
                <span className="text-sm text-gray-500">{job.PostedDate}</span>
              </div>
              <p className="text-gray-700">{job.CompanyName} - {job.Location}</p>
              <p className="text-gray-600 mt-2">{job.Description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500">{job.Salary}</span>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{job.JobType}</span>
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{job.Shift}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Job;
