// src/components/sections/Navbar.jsx

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    sectionId: "home",
  },
  {
    name: "Features",
    href: "#features",
    sectionId: "features",
  },
  {
    name: "About",
    href: "#about",
    sectionId: "about",
  },
  {
    name: "Company",
    href: "#company",
    sectionId: "company",
  },
  {
    name: "Contact Us",
    href: "#contact",
    sectionId: "contact",
  },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("");
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

  // Handle active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -75% 0px", // Adjust the detection area
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.getElementById(link.sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.sectionId);
        if (section) observer.unobserve(section);
      });
    };
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
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className={`font-medium transition-colors relative ${
                      isScrolled
                        ? "text-gray-800 hover:text-primaryGreen-light dark:text-gray-200 dark:hover:text-primaryGreen-dark"
                        : "text-gray-900 dark:text-white hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark"
                    } ${
                      isActive
                        ? "text-primaryGreen-light dark:text-primaryGreen-dark"
                        : ""
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                      />
                    )}
                  </a>
                );
              })}
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
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.sectionId;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors relative ${
                          isActive
                            ? "bg-primaryGreen-light bg-opacity-10 dark:bg-primaryGreen-dark dark:bg-opacity-10 text-primaryGreen-light dark:text-primaryGreen-dark"
                            : "text-gray-800 dark:text-white hover:bg-primaryGreen-light hover:bg-opacity-5 dark:hover:bg-primaryGreen-dark dark:hover:bg-opacity-5"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                        {isActive && (
                          <motion.span
                            className="absolute left-0 top-0 bottom-0 w-1 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-r-full"
                            layoutId="mobileActiveIndicator"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                          />
                        )}
                      </a>
                    );
                  })}
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
