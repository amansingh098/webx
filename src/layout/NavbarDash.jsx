import React from 'react';

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
        {/* Bell Icon */}
        <svg
          className="w-6 h-6 cursor-pointer hover:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          ></path>
        </svg>
        {/* Cog Icon */}
        <svg
          className="w-6 h-6 cursor-pointer hover:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.5 2.219a1.7 1.7 0 01.018 1.535l-.276.55a2.012 2.012 0 00.722 2.595l.62.383a1.7 1.7 0 01-.136 2.922l-.648.324a2.012 2.012 0 000 3.5l.648.324a1.7 1.7 0 01.136 2.922l-.62.383a2.012 2.012 0 00-.722 2.595l.276.55a1.7 1.7 0 01-.018 1.535l-.276.55a2.012 2.012 0 00-.722 2.595l-.62.383a1.7 1.7 0 01-.136 2.922l-.648.324a2.012 2.012 0 000 3.5l.648.324a1.7 1.7 0 01.136 2.922l.62.383a2.012 2.012 0 00.722 2.595l.276.55a1.7 1.7 0 01-.018 1.535l-.276.55a2.012 2.012 0 00.722 2.595l.62.383a1.7 1.7 0 01-.136 2.922l-.648.324a2.012 2.012 0 000 3.5l.648.324a1.7 1.7 0 01.136 2.922l-.62.383a2.012 2.012 0 00.722 2.595l.276.55a1.7 1.7 0 01-.018 1.535l.276.55a2.012 2.012 0 00.722 2.595l.62.383a1.7 1.7 0 01.136 2.922l.648.324a2.012 2.012 0 000 3.5l-.648.324a1.7 1.7 0 01-.136 2.922l-.62.383a2.012 2.012 0 00-.722 2.595l-.276.55a1.7 1.7 0 01-.018 1.535zM21 16v-2a4 4 0 10-8 0v2a4 4 0 108 0z"
          ></path>
        </svg>
        {/* Sign Out Icon */}
        <svg
          className="w-6 h-6 cursor-pointer hover:text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-16v1m0 10a2 2 0 002 2h3a2 2 0 002-2v-2m0 10V8a2 2 0 00-2-2h-3a2 2 0 00-2 2v8a2 2 0 002 2h3a2 2 0 002-2z"
          ></path>
        </svg>
      </div>
    </nav>
  );
};

export default NavbarDash;
