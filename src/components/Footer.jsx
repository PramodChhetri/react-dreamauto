import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <h1>Dream Auto</h1>

        {/* Column 2 */}
        <div className="space-y-4">
          <ul>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            </ul>
          </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <ul>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            </ul>
          </div>

        {/* Column 4 */}
        <div className="space-y-4">
          <ul>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            <li><a href="/" className="hover:text-blue-300 flex items-center "><FaChevronRight size={10} className='mr-1'/> A few Words</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
