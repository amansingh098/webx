import React from 'react';
import { FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';

const NavbarDash = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-xl cursor-pointer hover:text-blue-400" />
        <FaCog className="text-xl cursor-pointer hover:text-blue-400" />
        <FaSignOutAlt className="text-xl cursor-pointer hover:text-blue-400" />
      </div>
    </nav>
  );
};

export default NavbarDash;
