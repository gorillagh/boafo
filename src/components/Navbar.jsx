// src/components/sections/Navbar.jsx

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      setIsAtTop(!scrolled);
    };

    // Initialize on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-2 bg-white bg-opacity-90 dark:bg-[#0D0D0D] dark:bg-opacity-90 shadow-lg backdrop-blur-md"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="h-10 w-10 rounded-full flex items-center justify-center">
                <img
                  className="h-10 w-auto"
                  src="/logo-green.png"
                  alt="Boafo Logo"
                />
              </div>
              <span className="ml-2 text-xl font-montserrat font-bold text-primaryGreen-light dark:text-primaryGreen-dark">
                Boafo
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#home"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-primaryGreen-light dark:text-gray-200 dark:hover:text-primaryGreen-dark"
                    : "text-gray-900 dark:text-white hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark"
                }`}
              >
                Home
              </a>
              <a
                href="#features"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-primaryGreen-light dark:text-gray-200 dark:hover:text-primaryGreen-dark"
                    : "text-gray-900 dark:text-white hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark"
                }`}
              >
                Features
              </a>
              <a
                href="#about"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-primaryGreen-light dark:text-gray-200 dark:hover:text-primaryGreen-dark"
                    : "text-gray-900 dark:text-white hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark"
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-primaryGreen-light dark:text-gray-200 dark:hover:text-primaryGreen-dark"
                    : "text-gray-900 dark:text-white hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark"
                }`}
              >
                Contact Us
              </a>
            </div>

            {/* Theme Toggle and Get Started Button */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
                    : "text-white dark:text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-800 dark:hover:bg-opacity-20"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
              <button
                className={`transition-all duration-300 font-medium py-2 px-6 rounded-full ${
                  isScrolled
                    ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white hover:bg-primaryGreen-hover-light dark:hover:bg-primaryGreen-hover-dark"
                    : "bg-white text-primaryGreen-dark hover:bg-gray-100"
                }`}
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleTheme}
                className={`p-2 mr-2 rounded-full transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
                    : "text-white dark:text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-800 dark:hover:bg-opacity-20"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
                    : "text-white dark:text-white hover:bg-white hover:bg-opacity-20 dark:hover:bg-gray-800 dark:hover:bg-opacity-20"
                }`}
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu drawer - Now positioned outside the nav to avoid scroll issues */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop - handles click away */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileMenuOpen(false)}
              style={{ position: "fixed" }}
            />

            {/* Drawer panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto"
              style={{ position: "fixed" }}
            >
              <div className="p-5">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-auto"
                      src="/logo-green.png"
                      alt="Boafo Logo"
                    />
                    <span className="ml-2 text-lg font-montserrat font-bold text-primaryGreen-light dark:text-primaryGreen-dark">
                      Boafo
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <div className="space-y-1 py-4">
                  <a
                    href="#home"
                    className="block px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primaryGreen-light hover:text-white dark:hover:bg-primaryGreen-dark rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#features"
                    className="block px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primaryGreen-light hover:text-white dark:hover:bg-primaryGreen-dark rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#about"
                    className="block px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primaryGreen-light hover:text-white dark:hover:bg-primaryGreen-dark rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="block px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-primaryGreen-light hover:text-white dark:hover:bg-primaryGreen-dark rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    className="w-full bg-primaryGreen-light dark:bg-primaryGreen-dark text-white hover:bg-primaryGreen-hover-light dark:hover:bg-primaryGreen-hover-dark font-medium py-3 px-6 rounded-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </button>
                </div>

                <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                  <p>Need help? Contact our support team</p>
                  <a
                    href="#contact"
                    className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    support@boafoapp.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
