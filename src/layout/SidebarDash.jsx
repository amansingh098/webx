import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SidebarDash = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here, like clearing auth tokens
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Jobindeed</h2>
      </div>
      <div className="flex items-center mb-8">
        <img src="https://img.freepik.com/premium-vector/colorful-abstract-background-futuristic-wavy-illustration_114588-2521.jpg" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Aditya Singh</h3>
          <p className="text-sm"> Admin</p>
        </div>
      </div>
      <ul className="flex-grow">
        <li className="mb-6">
          <Link to="/dashboard" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-9-5v12m0 0H5a2 2 0 01-2-2v-5a2 2 0 012-2h4a2 2 0 012 2v5z"></path>
            </svg>
            Dashboard
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/manage-team" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6-10a4 4 0 100-8 4 4 0 000 8zM21 12h-6m0 0H9m6 0v-6"></path>
            </svg>
            Manage Team
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/contacts" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v16l-7-3-7 3V5z"></path>
            </svg>
            Contacts Information
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/invoices" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14v2m0-2a2 2 0 00-2-2 2 2 0 00-2 2v2m6-2v2m0-2a2 2 0 012-2 2 2 0 012 2v2m6 4v-6a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-4.414-4.414a1 1 0 00-.707-.293H8a2 2 0 00-2 2v2"></path>
            </svg>
            Invoices Balances
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/profile" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16 3.422a12.05 12.05 0 01-12.32 0L12 14z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7"></path>
            </svg>
            Profile Form
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/calendar" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Calendar
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/faq" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11v1m8-1v1m-4-4v1m-4 7v2m8-2v2m-4-4v2m-4-5v1m8-1v1m4-4v1M4 7v1"></path>
            </svg>
            FAQ Page
          </Link>
        </li>
      </ul>
      <div className="mt-auto">
        <button
          className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarDash;
