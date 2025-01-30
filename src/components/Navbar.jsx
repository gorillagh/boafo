import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GoX } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="ml-2 text-xl font-bold">BOAFO</span>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-12 justify-between h-16">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-900 font-semibold border-b-2 border-gray-900 px-1 py-2"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-500 hover:text-gray-900 px-1 py-2"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-500 hover:text-gray-900 px-1 py-2"
              >
                About
              </a>
              <a
                href="#footer"
                className="text-gray-500 hover:text-gray-900 px-1 py-2"
              >
                Contact Us
              </a>
            </div>
            {/* Get Started Button */}
            <div className="hidden md:block">
              <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>{" "}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <GoX size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-900 font-medium">
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-500 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-500 hover:text-gray-900"
              >
                Contact Us
              </a>
              <button className="w-full mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
