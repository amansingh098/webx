import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Ensure Navbar component is correctly defined
import Footer from '../components/Footer';  // Ensure Footer component is correctly defined
import './Joined.css';
import aiImage from '../assets/a.webp';
import aiu from '../assets/b.webp';
import aic from '../assets/c.webp';

const Joined = () => {
  const navigate = useNavigate();

  const handleJoinPlanClick = () => {
    navigate('/plans');
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <header className="bg-gradient-to-r from-gray-800 to-black text-white text-center py-16 sm:py-20 md:py-24 lg:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Elevate Your Career</h1>
        <p className="text-sm sm:text-base md:text-xl font-light mb-6 md:mb-8 lg:mb-12">
          Transformative solutions for modern job seekers using AI and advanced technology.
        </p>
      </header>
      <main className="flex-1 p-6 sm:px-6 md:px-8 lg:px-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={aiu}
              alt="Resume Processing" 
              className="w-full h-64 object-cover md:h-80 lg:h-96"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Enhanced Resume Processing</h2>
              <p className="text-gray-300">
                We use cutting-edge technology to analyze and enhance your resume, ensuring it meets the highest standards.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={aic}
              alt="Skill Identification" 
              className="w-full h-64 object-cover md:h-80 lg:h-96"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Advanced Skill Identification</h2>
              <p className="text-gray-300">
                Our intelligent systems identify and highlight your key skills, matching you with the best job opportunities.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={aiImage}
              alt="AI Integration" 
              className="w-full h-64 object-cover md:h-80 lg:h-96"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">AI-Powered Job Applications</h2>
              <p className="text-gray-300">
                Automate your job applications with our AI-powered system, optimizing your chances of getting hired.
              </p>
            </div>
          </div>
        </section>
        
        <section className="text-center py-12 sm:py-16 md:py-20 bg-gray-800 rounded-lg mt-8 sm:mt-12 lg:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Discover tailored plans that suit your career goals and start your journey towards success.
          </p>
          <button 
            onClick={handleJoinPlanClick} 
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-transform transform hover:scale-105"
          >
            View Plans
          </button>
        </section>
        <section className="logo-section mt-8 sm:mt-12 lg:mt-16">
  <div className="logo-row left-to-right">
    <div className="logo-card">
      <img src="https://marketingmagazine.com.my/wp-content/uploads/2019/01/Microsoft-logo-Featured-image.png" alt="Microsoft Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://logos-world.net/wp-content/uploads/2020/07/Adobe-Logo.png" alt="Adobe Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://th.bing.com/th/id/OIP.-E_R7gxhUdCuoceu0ZcqYQHaEK?w=293&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Intel Logo" className="logo" />
    </div>
    {/* Repeat logos or use additional unique logos */}
    <div className="logo-card">
      <img src="https://th.bing.com/th/id/OIP.u7EacCFBeokY-0SfOD12lQHaEK?w=287&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Microsoft Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="logo" />
    </div>
  </div>
  <div className="logo-row right-to-left">
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://cdn.freebiesupply.com/images/large/2x/oracle-logo-transparent.png" alt="Oracle Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://th.bing.com/th/id/OIP.3it2aYi15bnxjE3n1pakWAAAAA?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Apple Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://img.freepik.com/vektoren-premium/neues-twitter-logo-x-2023-twitter-x-logo-vektor-download_691560-10809.jpg?w=2000" alt="Twitter Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://th.bing.com/th/id/OIP.t04z7YCrwJYFQVt9VdlyKAHaCO?w=300&h=105&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Meta Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://th.bing.com/th/id/OIP.sCtdNjphAin-gugu0MNptAHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="YouTube Logo" className="logo" />
    </div>
    {/* Repeat logos or use additional unique logos */}
    <div className="logo-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="https://cdn.freebiesupply.com/images/large/2x/oracle-logo-transparent.png" alt="Oracle Logo" className="logo" />
    </div>
    <div className="logo-card">
      <img src="" alt="Apple Logo" className="logo" />
    </div>
  </div>
</section>


      </main>
      <Footer />
    </div>
  );
};

export default Joined;
