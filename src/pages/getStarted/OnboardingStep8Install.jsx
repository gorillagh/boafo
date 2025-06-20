// src/components/onboarding/OnboardingStep8Install.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaChrome, FaPuzzlePiece } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For potential redirection after simulated install

const CHROME_WEB_STORE_LINK = "#"; // Replace with actual link later

const OnboardingStep8Install = ({ onContinue }) => {
  const navigate = useNavigate();

  const handleInstallClick = () => {
    window.open(CHROME_WEB_STORE_LINK, "_blank", "noopener,noreferrer");
    // After the user clicks install, you might want to redirect them to a "thank you" page
    // or their dashboard/settings, assuming installation is successful or they return.
    // For now, we'll just log and proceed.
    console.log("Redirecting to Chrome Web Store...");
    // Simulate navigation to a dashboard or success page after user clicks install
    // This could happen after a short delay or based on a successful extension installation callback
    setTimeout(() => {
      // onContinue(); // If there's another step after install confirmation
      // OR navigate directly to a dashboard/success page
      navigate("/dashboard-or-success"); // Replace with your actual post-install route
    }, 2000); // Give user time to click the external link
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4 text-center">
        Almost Done! Install Boafo.
      </h2>
      <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-8 text-center max-w-md">
        To start using Boafo's powerful features, you need to add our extension
        to your Chrome browser.
      </p>

      <motion.div
        className="glass-card p-8 w-full max-w-lg mb-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <FaChrome className="text-primaryGreen-light dark:text-primaryGreen-dark text-8xl mb-6" />
        <h3 className="font-montserrat font-bold text-2xl text-textColor-light dark:text-textColor-dark mb-4">
          Get Boafo from the Chrome Web Store
        </h3>
        <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-6">
          Click the button below to be redirected.
        </p>
        <button
          onClick={handleInstallClick}
          className="primary-button inline-flex items-center justify-center px-8 py-4 text-lg font-bold shadow-lg transform hover:scale-105"
        >
          <FaChrome className="mr-3 text-2xl" /> Add Boafo to Chrome
        </button>
      </motion.div>

      <motion.div
        className="glass-card p-6 w-full max-w-lg flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <FaPuzzlePiece className="text-blue-500 dark:text-blue-400 text-5xl mb-4" />
        <h3 className="font-montserrat font-bold text-xl text-textColor-light dark:text-textColor-dark mb-3">
          Don't forget to pin Boafo!
        </h3>
        <p className="font-ubuntu text-textColor-light dark:text-textColor-dark">
          After installation, click the puzzle piece icon (Extensions) in your
          browser toolbar, find Boafo, and click the pin icon next to it for
          quick access!
        </p>
        {/* Could add an animated GIF here showing how to pin */}
      </motion.div>
    </div>
  );
};

export default OnboardingStep8Install;
