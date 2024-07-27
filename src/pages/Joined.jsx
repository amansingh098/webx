import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Joined = () => {
  const navigate = useNavigate();

  const handleJoinPlanClick = () => {
    navigate('/plans');
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <div className="container mx-auto p-6">
        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Automate Your Job Applications with Jobindeed
          </h2>
          <p className="mb-6">Harness the power of AI to apply for jobs seamlessly. Jobindeed helps you manage your job applications, ensuring you never miss an opportunity. Submit your resume, and we will apply to all relevant companies on your behalf, based on your resume. Our platform has successfully placed many individuals in top companies.</p>
          <div className="flex flex-wrap gap-6">
            <div className="bg-gray-800 rounded-lg p-4 shadow-md flex-1 text-center">
              <p className="text-2xl font-semibold">4.5 LPA</p>
              <p className="text-sm">Average CTC</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 shadow-md flex-1 text-center">
              <p className="text-2xl font-semibold">2 lakh+</p>
              <p className="text-sm">Mentees trained</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 shadow-md flex-1 text-center">
              <p className="text-2xl font-semibold">500+</p>
              <p className="text-sm">Hiring Partners</p>
            </div>
          </div>
          <div className="carousel mt-4 overflow-hidden relative">
            <div className="carousel-track flex">
              <img src="https://yt3.ggpht.com/a/AATXAJw4Z9uoHgwH8hfW28PvqXCRe-NyeN9OcSHYcw=s900-c-k-c0xffffffff-no-rj-mo" alt="client 1" className="w-32 h-32 object-cover rounded-lg shadow-md inline-block mr-4" />
              <img src="https://static.vecteezy.com/system/resources/previews/017/792/880/original/coca-cola-logo-popular-drink-brand-logo-free-vector.jpg" alt="client 2" className="w-32 h-32 object-cover rounded-lg shadow-md inline-block mr-4" />
              <img src="https://th.bing.com/th/id/OIP.wZJisB2ss0I1G2kF2xEnMAD6D6?w=300&h=300&rs=1&pid=ImgDetMain" alt="client 3" className="w-32 h-32 object-cover rounded-lg shadow-md inline-block mr-4" />
              <img src="https://strydotech.com/wp-content/uploads/2021/06/brand-story-wipro-wipro-png-570_540-300x284.jpg" alt="client 4" className="w-32 h-32 object-cover rounded-lg shadow-md inline-block mr-4" />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">500+ Hiring Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Tata_Group_Logo.svg" alt="TCS" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" alt="Infosys" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Wipro_Logo.svg" alt="Wipro" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/HCLTech_logo.svg" alt="HCL" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Tech_Mahindra_Logo.svg" alt="Tech Mahindra" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Flipkart_Logo.svg" alt="Flipkart" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Byju%27s_Logo.svg" alt="Byju's" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Ola_Cabs_Logo.svg" alt="Ola" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Swiggy_Logo.svg" alt="Swiggy" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Zomato_Logo.svg" alt="Zomato" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_Logo.svg" alt="Paytm" className="w-20 h-auto" />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Reliance_Logo.svg" alt="Reliance" className="w-20 h-auto" />
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Spotlight</h2>
          <p className="mb-6">Loved by 2,50,000+ Learners and 1000s of organizations.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Forbes India</h3>
              <p>Forbes India 30 under 30 2021 Special Mention</p>
              <a href="#" className="text-blue-400 hover:underline">Continue reading ...</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">The Times of India</h3>
              <p>4 Engineers who teach people to follow their passion</p>
              <a href="#" className="text-blue-400 hover:underline">Continue reading ...</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">The Hindu</h3>
              <p>An E-learning platform that offers a plethora of streams</p>
              <a href="#" className="text-blue-400 hover:underline">Continue reading ...</a>
            </div>
          </div>
        </section>

        {/* Join Plan Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleJoinPlanClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Join Plan
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Joined;
