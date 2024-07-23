import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 text-white z-50 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="text-2xl font-bold cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => handleNavigation('/')}
            >
              Jobindeed
            </motion.div>
          </div>
          <div className="flex items-center">
            <motion.button
              className="bg-gray-700 bg-opacity-70 p-1 rounded-full text-blue-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleNavigation('/notifications')}
            >
              <span className="sr-only">View notifications</span>
              {/* Notification Icon */}
            </motion.button>
            <motion.button
              className="ml-3 bg-gray-700 bg-opacity-70 text-blue-300 px-3 py-2 rounded-md text-sm font-medium hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleNavigation('/login')}
            >
              Login
            </motion.button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <motion.button
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => handleNavigation('/menu')}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
