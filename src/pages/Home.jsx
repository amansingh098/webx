import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';

const backgroundImageUrl = 'https://static.vecteezy.com/system/resources/previews/001/257/256/non_2x/polygonal-abstract-angled-strips-with-golden-lines-vector.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleProfileNavigation = () => {
    navigate('/profile');
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-300 flex flex-col items-center justify-center py-10"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-center max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Automate Your Job Applications with Jobindeed
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Harness the power of AI to apply for jobs seamlessly. Jobindeed helps you automate your job applications, ensuring you never miss an opportunity.
        </motion.p>
      </div>
      <div className="mt-8 flex flex-col items-center rounded-r-lg w-full px-4">
        <motion.div
          className="relative w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-3xl font-semibold mb-6">AI-Powered Job Application</h2>
          <ul className="list-disc list-inside text-gray-400 mb-8 space-y-4">
            <li>Automatically apply to jobs that match your profile.</li>
            <li>Receive personalized job recommendations.</li>
            <li>Save time and effort with automated resume submissions.</li>
            <li>Track the status of your applications in one place.</li>
            <li>Leverage advanced AI to tailor your applications for each job.</li>
          </ul>
          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            onClick={handleProfileNavigation}
          >
            Automate Your Jobs Now
          </button>
        </motion.div>
      </div>
      <div className="mt-16 w-full flex justify-center">
        <motion.div
          className="flex items-center bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Animated-gif-desktop-images-download.jpg"
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mr-8 cursor-pointer"
            onClick={handleProfileNavigation}
          />
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">Hi there!</h2>
            <p className="text-gray-400 mb-2">
              Automate your job applications with PlusAI. Our tool makes it easy to apply to multiple jobs with personalized applications.
            </p>
            <p className="text-gray-400">
              Click on the profile image to get started with automating your job applications using PlusAI.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
