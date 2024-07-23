import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const navigate = useNavigate();

  const handlePlanSelection = async (plan) => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await addDoc(collection(db, 'userPlans'), {
        userId: user.uid,
        plan,
      });

      navigate(`/payment/${plan}`);
    } catch (error) {
      console.error('Error saving plan: ', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full p-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">All content</h2>
              <p className="text-gray-400">Movies, live sports, TV Specials</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-around">
              <div className="text-center">
                <span className="block text-blue-500">✓</span>
              </div>
              <div className="text-center">
                <span className="block text-blue-500">✓</span>
              </div>
              <div className="text-center">
                <span className="block text-blue-500">✓</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Watch on TV or Laptop</h2>
            </div>
            <div className="w-full md:w-1/3 flex justify-around">
              <div className="text-center">
                <span className="block text-red-500">✗</span>
              </div>
              <div className="text-center">
                <span className="block text-blue-500">✓</span>
              </div>
              <div className="text-center">
                <span className="block text-blue-500">✓</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Number of devices that can be logged in</h2>
            </div>
            <div className="w-full md:w-1/3 flex justify-around">
              <div className="text-center">
                <span className="block">1</span>
              </div>
              <div className="text-center">
                <span className="block">2</span>
              </div>
              <div className="text-center">
                <span className="block">3</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Max video quality</h2>
            </div>
            <div className="w-full md:w-1/3 flex justify-around">
              <div className="text-center">
                <span className="block">HD (720p)</span>
              </div>
              <div className="text-center">
                <span className="block">Full HD (1080p)</span>
              </div>
              <div className="text-center">
                <span className="block">4K (2160p)</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Max audio quality</h2>
            </div>
            <div className="w-full md:w-1/3 flex justify-around">
              <div className="text-center">
                <span className="block">Stereo</span>
              </div>
              <div className="text-center">
                <span className="block">Dolby 5.1</span>
              </div>
              <div className="text-center">
                <span className="block">Dolby Atmos</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Price</h2>
            </div>
            <div className="w-full md:w-1/3 flex justify-around">
              <div className="text-center">
                <span className="block text-lg font-bold">₹399/Year</span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-2"
                  onClick={() => handlePlanSelection('399')}
                >
                  Choose
                </button>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold">₹599/Year</span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-2"
                  onClick={() => handlePlanSelection('599')}
                >
                  Choose
                </button>
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold">₹999/Year</span>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-2"
                  onClick={() => handlePlanSelection('999')}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
