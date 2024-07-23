// src/pages/Payment.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Payment = () => {
  const { plan } = useParams();

  const planDetails = {
    '399': '₹399/Year Plan',
    '599': '₹599/Year Plan',
    '999': '₹999/Year Plan',
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6">Proceed to Payment</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg max-w-xl w-full p-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">{planDetails[plan]}</h2>
          <p className="text-gray-400 mb-4">Thank you for choosing our plan. Click the button below to proceed with the payment.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Pay Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
