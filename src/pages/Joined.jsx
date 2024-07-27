import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BannerImage from '../assets/banner.png'; // Replace with the actual path to your banner image
import HeaderImage from '../assets/header.png'; // Replace with the actual path to your header image
import MainContentImage from '../assets/main-content.png'; // Replace with the actual path to your main content image
import FooterImage from '../assets/footer.png'; // Replace with the actual path to your footer image

const Joined = () => {
  const navigate = useNavigate();

  const handleJoinPlanClick = () => {
    navigate('/plans');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <Navbar />
      <header className="w-full text-center">
        <img src={BannerImage} alt="Banner" className="w-full object-cover" />
      </header>
      <main className="flex-1 w-full max-w-4xl p-6">
        <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={HeaderImage} alt="Header" className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-xl leading-relaxed">
                Here at our company, we take your resume, process it, and find your skills. Based on that, we will apply to jobs in 500+ companies. We provide high references and use an AI-integrated tool to automatically apply for jobs on all company portals. Our customers benefit greatly from this process.
              </p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={MainContentImage} alt="Main Content" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">Resume Processing</li>
                <li className="mb-2">Skill Identification</li>
                <li className="mb-2">High References</li>
                <li className="mb-2">AI-Integrated Job Applications</li>
                <li>Customer Benefits</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={FooterImage} alt="Footer" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <button 
                onClick={handleJoinPlanClick} 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4"
              >
                View Plans
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Joined;
