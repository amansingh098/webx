import React from 'react';
import { useNavigate } from 'react-router-dom';
import videobg from '../assets/dots.mp4';

const Welcome = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Home');
  };

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden ">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay muted loop>
        <source src={videobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative flex flex-col md:flex-row justify-between items-center  bg-opacity-70 text-white p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="text-center md:text-left md:max-w-[60%]">
          <h1 className="font-bold text-3xl mb-4">Welcome to PlusAI</h1>
          <p className="text-lg mb-2">Jobindeed</p>
          <p className="text-lg mb-4">Your journey to AI excellence starts here.</p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition"
            onClick={handleExploreClick}
          >
            Explore
          </button>
        </div>
        <div className="flex justify-center items-center md:max-w-[40%] mt-8 md:mt-0">
          <svg width="150" height="150" viewBox="0 0 100 100" className="animate-spin-slow">
            <circle cx="50" cy="50" r="45" stroke="#00AEEF" strokeWidth="4" fill="none" />
            <circle cx="50" cy="50" r="35" stroke="#FFCB05" strokeWidth="4" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="#FF6F61" strokeWidth="4" fill="none" />
            <line x1="50" y1="5" x2="50" y2="45" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
