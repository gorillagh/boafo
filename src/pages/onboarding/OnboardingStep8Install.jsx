import React from "react";
import { motion } from "framer-motion";
import { FaChrome, FaPuzzlePiece } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CHROME_WEB_STORE_LINK = "https://chromewebstore.google.com/detail/bfpoecmheiafbmghdbajladmhdjgobkg?utm_source=item-share-cb";

const OnboardingStep8Install = ({ onCompleteOnboarding }) => {
  const navigate = useNavigate();

  const handleInstallClick = () => {
    window.open(CHROME_WEB_STORE_LINK, "_blank", "noopener,noreferrer");
    console.log("Redirecting to Chrome Web Store...");
    setTimeout(() => {
      if (onCompleteOnboarding) {
        onCompleteOnboarding(); 
      } else {
        navigate("/dashboard");
      }
    }, 2000); 
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
      </motion.div>
    </div>
  );
};

export default OnboardingStep8Install;