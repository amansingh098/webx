import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plans = () => {
  const navigate = useNavigate();

  const handlePlanSelection = async (plan, amount) => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
      return;
    }

    const totalAmount = amount + 20; // Adding GST of 20 Rs

    try {
      await addDoc(collection(db, 'userPlans'), {
        userId: user.uid,
        plan,
        amount: totalAmount,
      });

      // Redirect to the specific payment link for each plan
      if (plan === 'basic') {
        window.location.href = 'https://payments.cashfree.com/links/h731hib1h54g';
      } else if (plan === 'pro') {
        window.location.href = 'https://payments.cashfree.com/links/z731hs0fffjg'; // Replace with actual Pro plan link
      } else if (plan === 'pro-plus') {
        window.location.href = 'https://payments.cashfree.com/links/M731hus8dfjg'; // Replace with actual Pro Plus plan link
      }
    } catch (error) {
      console.error('Error saving plan: ', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-6">Choose Your Job Plan</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg max-w-5xl w-full p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">Basic</h2>
                <p className="text-gray-400 mb-6">Job Application</p>
                <p className="text-3xl font-bold mb-2">₹499</p>
                <p className="text-lg mb-6">1 Month</p>
                <ul className="text-gray-400 mb-6">
                  <li>Automatic Apply</li>
                  <li>Personal Dashboard</li>
                  <li>Daily Updates</li>
                  <li>100+ Companies Applied</li>
                </ul>
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
                onClick={() => handlePlanSelection('basic', 300)}
              >
                Enroll Now
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">Pro</h2>
                <p className="text-gray-400 mb-6">Advanced Job Application</p>
                <p className="text-3xl font-bold mb-2">₹899</p>
                <p className="text-lg mb-6">1 in Months</p>
                <ul className="text-gray-400 mb-6">
                  <li>Automatic Apply by AI</li>
                  <li>Email Updates</li>
                  <li>Personal Dashboard</li>
                  <li>Customer Service Support</li>
                  <li>150+ Companies Applied</li>
                </ul>
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
                onClick={() => handlePlanSelection('pro', 799)}
              >
                Enroll Now
              </button>
            </div>
            <div className="bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center justify-between h-full">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">Pro Plus</h2>
                <p className="text-gray-400 mb-6">Comprehensive Job Assistance</p>
                <p className="text-3xl font-bold mb-2">₹1299</p>
                <p className="text-lg mb-6">1 Months</p>
                <ul className="text-gray-400 mb-6">
                  <li>All Recent Job Updates</li>
                  <li>Personal Dashboard</li>
                  <li>Customer Service Support</li>
                  <li>Personal Updates</li>
                  <li>100% Placement Guarantee</li>
                  <li>Chance to Appear for Interviews</li>
                  <li>Resume Building</li>
                  <li>200+ Companies Applied</li>
                </ul>
              </div>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-4"
                onClick={() => handlePlanSelection('pro-plus', 999)}
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Plans;
