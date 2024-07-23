import React from 'react';
import Navbar from './NavbarDash';
import SidebarDash from './SidebarDash';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <SidebarDash />
        <main className="flex-grow p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
