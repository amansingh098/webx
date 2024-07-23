import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaCog, FaChartLine, FaUsers, FaAddressBook, FaFileInvoiceDollar, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';

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
            <FaHome className="mr-3" /> Dashboard
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/manage-team" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <FaUsers className="mr-3" /> Manage Team
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/contacts" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <FaAddressBook className="mr-3" /> Contacts Information
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/invoices" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <FaFileInvoiceDollar className="mr-3" /> Invoices Balances
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/profile" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <FaUser className="mr-3" /> Profile Form
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/calendar" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <FaCalendarAlt className="mr-3" /> Calendar
          </Link>
        </li>
        <li className="mb-6">
          <Link to="/dashboard/faq" className="flex items-center text-lg font-semibold hover:text-blue-400 transition">
            <FaQuestionCircle className="mr-3" /> FAQ Page
          </Link>
        </li>
        <div className="mt-auto">
        <button
          className="w-full bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      </ul>
   
    </div>
  );
};

export default SidebarDash;