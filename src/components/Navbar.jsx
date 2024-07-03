import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-2 sm:px-6 lg:px-40">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoClose size={25}/>
              ) : (
                <IoIosMenu size={25}/>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
            <div className="ml-20 flex-shrink-0">
              <span>Hamro dream auto</span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="/" className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="/" className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="/" className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Parts</a>
                <a href="/" className="text-gray-900 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book Appointment</a>
              </div>
            </div>
            <div className="flex relative items-center mr-4 ml-auto">
              <div className="cursor-pointer">
                <BsBag className="text-2xl" />
                <div className="bg-red-900 absolute top-1 -right-2 -border-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">15</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 h-screen z-50">
            <a href="/" className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/" className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="/" className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Parts</a>
            <a href="/" className="text-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Book Appointment</a>
          </div>
        </div>
      )}
    </nav>
  );
};
