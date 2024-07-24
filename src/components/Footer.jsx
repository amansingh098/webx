import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Jobindeed</h3>
            <p className="text-gray-400 text-sm">
              Jobindeed is your go-to platform for finding the best job opportunities tailored to your skills and preferences. Our mission is to connect job seekers with their dream jobs and help companies find the perfect candidates.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.475v-9.294H9.691v-3.622h3.109V8.413c0-3.067 1.877-4.742 4.618-4.742 1.312 0 2.438.097 2.764.141v3.202l-1.897.001c-1.487 0-1.774.707-1.774 1.742v2.285h3.548l-.464 3.622h-3.084V24h6.044C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.994 9.994 0 01-2.827.775A4.937 4.937 0 0023.337 3.1a9.943 9.943 0 01-3.127 1.194 4.925 4.925 0 00-8.385 4.485A13.978 13.978 0 011.675 3.149 4.917 4.917 0 003.194 9.723a4.902 4.902 0 01-2.231-.616v.062a4.925 4.925 0 003.95 4.827 4.93 4.93 0 01-2.224.084 4.927 4.927 0 004.604 3.417 9.866 9.866 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.939 13.939 0 007.548 2.212c9.057 0 14.004-7.503 14.004-14.004 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c-5.479 0-9.94 4.461-9.94 9.94 0 5.479 4.461 9.94 9.94 9.94s9.94-4.461 9.94-9.94c0-5.479-4.461-9.94-9.94-9.94zm0 1.838c2.26 0 2.527.008 3.411.05.885.041 1.493.178 1.83.297.58.202.997.446 1.438.888.442.442.686.858.888 1.438.119.337.256.945.297 1.83.042.884.05 1.151.05 3.411s-.008 2.527-.05 3.411c-.041.885-.178 1.493-.297 1.83a3.372 3.372 0 01-.888 1.438c-.442.442-.858.686-1.438.888-.337.119-.945.256-1.83.297-.884.042-1.151.05-3.411.05s-2.527-.008-3.411-.05c-.885-.041-1.493-.178-1.83-.297a3.372 3.372 0 01-1.438-.888 3.372 3.372 0 01-.888-1.438c-.119-.337-.256-.945-.297-1.83-.042-.884-.05-1.151-.05-3.411s.008-2.527.05-3.411c.041-.885.178-1.493.297-1.83a3.372 3.372 0 01.888-1.438c.442-.442.858-.686 1.438-.888.337-.119.945-.256 1.83-.297.884-.042 1.151-.05 3.411-.05zm0 1.838c-2.198 0-2.464.007-3.334.048-.753.035-1.165.155-1.43.257a2.348 2.348 0 00-.852.552 2.348 2.348 0 00-.552.852c-.102.265-.222.677-.257 1.43-.041.87-.048 1.136-.048 3.334s.007 2.464.048 3.334c.035.753.155 1.165.257 1.43.123.312.292.579.552.852.272.272.54.429.852.552.265.102.677.222 1.43.257.87.041 1.136.048 3.334.048s2.464-.007 3.334-.048c.753-.035 1.165-.155 1.43-.257a2.348 2.348 0 00.852-.552 2.348 2.348 0 00.552-.852c.102-.265.222-.677.257-1.43.041-.87.048-1.136.048-3.334s-.007-2.464-.048-3.334c-.035-.753-.155-1.165-.257-1.43a2.348 2.348 0 00-.552-.852 2.348 2.348 0 00-.852-.552c-.265-.102-.677-.222-1.43-.257-.87-.041-1.136-.048-3.334-.048zm0 3.207a5.02 5.02 0 100 10.04 5.02 5.02 0 000-10.04zm0 1.838a3.182 3.182 0 110 6.364 3.182 3.182 0 010-6.364zm6.406-.448a1.214 1.214 0 110 2.428 1.214 1.214 0 010-2.428z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.225 0H1.771C.792 0 .001.774.001 1.729v20.543C.001 23.228.792 24 1.771 24h20.451C23.2 24 24 23.228 24 22.272V1.729C24 .774 23.2 0 22.225 0zm-13.61 20.452h-3.69V9.099h3.69v11.353zM7.357 7.43a2.144 2.144 0 01-2.144-2.144 2.144 2.144 0 112.144 2.144zm13.092 13.022h-3.69V14.92c0-1.318-.471-2.22-1.654-2.22-.901 0-1.437.623-1.672 1.223-.086.209-.108.499-.108.79v5.739h-3.69V9.099h3.69v1.548h.052c.514-.77 1.434-1.868 3.517-1.868 2.564 0 4.49 1.666 4.49 5.245v6.428z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">&copy; 2023 Jobindeed. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="hover:text-gray-400 text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
