// src/components/sections/Hero.jsx

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden"
    >
      {/* Enhanced gradient background with improved color blend */}
      <div className="absolute inset-0 z-0">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-secondaryGreen-light dark:opacity-0 opacity-100 transition-opacity duration-500">
          <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-gradient-to-bl from-primaryGreen-light to-transparent opacity-40 rounded-bl-full"></div>
          <div className="absolute left-0 bottom-0 w-3/4 h-3/4 bg-gradient-to-tr from-primaryGreen-hover-light to-transparent opacity-30 rounded-tr-full"></div>
        </div>

        {/* Dark mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-secondaryGreen-dark dark:opacity-100 opacity-0 transition-opacity duration-500">
          <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-gradient-to-bl from-primaryGreen-dark to-transparent opacity-50 rounded-bl-full"></div>
          <div className="absolute left-0 bottom-0 w-3/4 h-3/4 bg-gradient-to-tr from-primaryGreen-hover-dark to-transparent opacity-40 rounded-tr-full"></div>
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] bg-repeat opacity-3 mix-blend-overlay"></div>
      </div>

      {/* Glass orbs/decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-white dark:bg-primaryGreen-dark blur-3xl opacity-10 dark:opacity-15 mix-blend-overlay"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-primaryGreen-light dark:bg-white blur-3xl opacity-10 dark:opacity-5 mix-blend-overlay"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content - Takes 7 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Heading with refined animation */}
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="inline-block"
                >
                  Empowering
                </motion.span>
              </div>
              <div className="overflow-hidden mt-1">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="inline-block"
                >
                  <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
                    Independence
                  </span>
                </motion.span>
              </div>
              <div className="overflow-hidden mt-1">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="inline-block"
                >
                  Online.
                </motion.span>
              </div>
            </h1>

            {/* Description with improved readability */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-ubuntu text-lg mb-10 text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              AI-powered tools that make the web accessible for everyone
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5"
            >
              {/* Primary button with glass effect */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px -10px rgba(52, 199, 89, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden group backdrop-blur-md bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium py-3.5 px-8 rounded-full shadow-md"
              >
                {/* Subtle shine effect */}
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-45 transition-all duration-700 ease-out"></span>

                <span className="flex items-center justify-center">
                  Get Started
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>
              </motion.button>

              {/* Secondary button with glass effect */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="backdrop-blur-md bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-30 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium py-3.5 px-8 rounded-full shadow-sm hover:bg-opacity-100 dark:hover:bg-opacity-40 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Device Display - Takes 5 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Main device display with enhanced glass effect */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-30 dark:bg-opacity-20 border border-white border-opacity-50 dark:border-gray-700 dark:border-opacity-20 rounded-3xl  shadow-lg"
              >
                {/* Screen content */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-inner">
                  <img
                    src="/hero.webp"
                    alt="Boafo interface demonstration"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats with refined glass effect */}
        <div className="mt-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-10 border border-white border-opacity-50 dark:border-gray-700 dark:border-opacity-20 rounded-3xl p-6 shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              {[
                {
                  number: "50+",
                  label: "Accessibility Features",
                  description: "Empowering inclusive digital experiences",
                },
                {
                  number: "10K+",
                  label: "Active Users",
                  description: "Across multiple platforms",
                },
                {
                  number: "98%",
                  label: "User Satisfaction",
                  description: "Based on user feedback",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="px-6 py-4 text-center"
                >
                  <p className="font-montserrat font-bold text-3xl mb-1 bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="font-ubuntu font-medium text-gray-800 dark:text-white mb-1">
                    {stat.label}
                  </p>
                  <p className="font-ubuntu text-xs text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced glass divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-[#0D0D0D] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-[#0D0D0D] transform -skew-y-1"></div>
      </div>
    </section>
  );
};

export default Hero;
