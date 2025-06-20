// src/components/onboarding/OnboardingStep2Welcome.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaGlobe, FaVolumeUp, FaCommentDots } from "react-icons/fa"; // Example icons

const OnboardingStep2Welcome = ({ onContinue }) => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const icons = [
    { icon: <FaBookOpen />, className: "top-10 left-10" },
    { icon: <FaGlobe />, className: "top-10 right-10" },
    { icon: <FaVolumeUp />, className: "bottom-10 left-10" },
    { icon: <FaCommentDots />, className: "bottom-10 right-10" },
    // Add more icons as needed for visual interest
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4">
        Empower Your Digital Journey with Boafo!
      </h2>
      <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-8 max-w-md">
        Turn any text or speech into an accessible and productive experience,
        effortlessly.
      </p>

      <div className="relative w-64 h-64 mb-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full shadow-lg">
        {/* Central Boafo Pulse Icon */}
        <motion.div
          className="text-primaryGreen-light dark:text-primaryGreen-dark text-6xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 16H13V8H11V16ZM8 12H10V8H8V12ZM14 12H16V8H14V12Z"
              fill="url(#gradient-center-logo)"
            />
            <defs>
              <linearGradient
                id="gradient-center-logo"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#34C759" />
                <stop offset="1" stopColor="#2DB54F" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Surrounding smaller icons */}
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {icons.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute p-3 rounded-full bg-white dark:bg-gray-700 shadow-md text-primaryGreen-light dark:text-primaryGreen-dark text-xl ${item.className}`}
              custom={index}
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={onContinue}
        className="primary-button w-full max-w-xs py-3"
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingStep2Welcome;
