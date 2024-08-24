import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-6">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/000/396/787/original/bookstore-and-papers-logo-vector.jpg" 
              className="h-12 w-12 rounded-full transition-transform duration-300 hover:scale-110" 
              alt="Book-Store Logo" 
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Book-Store</span>
          </a>
          <div className="block lg:hidden">
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar */}
      <nav className="bg-gray-50 dark:bg-gray-800 shadow-inner">
        <div className="max-w-screen-xl flex justify-between items-center px-6 py-4 mx-auto">
          <ul className="flex flex-col lg:flex-row lg:space-x-10 font-medium mt-0 space-y-3 lg:space-y-0 rtl:space-x-reverse text-base">
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:underline" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">Company</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">Team</a>
            </li>
            <li>
              <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:underline">Features</a>
            </li>
          </ul>
          <button className="btn px-4 py-2 bg-cyan-500 text-white rounded-md shadow-md hover:bg-cyan-600 transition-all duration-300">
            <Link to ="/Addbook/"> Add Book</Link>
           
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
