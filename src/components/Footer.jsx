// src/components/sections/Footer.jsx

import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import { COMPANY_DATA } from "../constants/placeholder";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-secondaryGreen-light dark:bg-secondaryGreen-dark bg-opacity-10 dark:bg-opacity-10 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent opacity-30"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          {/* Left column - Company Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-10 w-auto"
                  src="/logo-placeholder.png"
                  alt="Boafo Logo"
                />
                <span className="ml-3 text-xl font-montserrat font-bold text-gray-900 dark:text-white">
                  Boafo
                </span>
              </div>

              <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Boafo by Digital Drivers Technology - Empowering independence in
                e-commerce for all abilities, regardless of digital expertise or
                physical limitation.
              </p>

              <div className="flex space-x-3 mb-8">
                {[
                  { icon: <FaTwitter size={16} />, label: "Twitter" },
                  { icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
                  { icon: <FaInstagram size={16} />, label: "Instagram" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-primaryGreen-light dark:hover:bg-primaryGreen-dark transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="relative">
                <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subscribe to our newsletter
                </span>
                <div className="flex border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-transparent px-4 py-2 text-gray-800 dark:text-gray-200 w-full focus:outline-none text-sm"
                  />
                  <button className="bg-primaryGreen-light dark:bg-primaryGreen-dark text-white px-3 flex items-center">
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right columns - Links and Contact */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h4 className="text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {["Home", "Features", "About", "Contact Us"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-sm block py-1"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h4 className="text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookies Policy",
                  "Accessibility",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-sm block py-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h4 className="text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center py-1">
                  <span className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2">
                    Email:
                  </span>
                  <a
                    href="mailto:support@boafoapp.com"
                    className="hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
                  >
                    {COMPANY_DATA.emails[0]}
                  </a>
                </li>
                <li className="flex items-center py-1">
                  <span className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2">
                    Phone:
                  </span>
                  <a
                    href="tel:+233123456789"
                    className="hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
                  >
                    {COMPANY_DATA.phones[0]}
                  </a>
                </li>
                <li className="flex items-center py-1">
                  <span className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2">
                    Address:
                  </span>
                  <span>{COMPANY_DATA.addresses[0].name}</span>
                </li>
                <li className="flex items-center py-1">
                  <span className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2">
                    Hours:
                  </span>
                  <span>{COMPANY_DATA.workingHours}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 md:mb-0">
              &copy; {currentYear} Digital Drivers Technology. All rights
              reserved.
            </p>

            <div className="flex items-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Made with
                <span className="inline-block mx-1">❤️</span>
                in Ghana for the world
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
