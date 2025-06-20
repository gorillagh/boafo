// src/components/onboarding/OnboardingStep7LocalLanguage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobeAfrica, FaCheckCircle, FaCrown } from "react-icons/fa";

const localLanguages = [
  { name: "Twi", example: "Akwaaba!" },
  { name: "Ga", example: "Abaafra!" },
  { name: "Frafra", example: "Mogre!" },
  { name: "Ewe", example: "Agbadzɛ!" },
];

const OnboardingStep7LocalLanguage = ({ onContinue, updateData, data }) => {
  const [interested, setInterested] = useState(
    data.localLanguageInterest || false
  );

  const handleSubmit = () => {
    updateData("localLanguageInterest", interested);
    onContinue();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4 text-center">
        Are you interested in local African languages?
      </h2>
      <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-8 text-center max-w-md">
        Boafo uniquely supports powerful translation and text-to-speech for
        languages like Twi, Ga, Frafra, and Ewe.
      </p>

      <div className="glass-card p-6 w-full max-w-lg mb-8 flex flex-col items-center">
        <FaGlobeAfrica className="text-primaryGreen-light dark:text-primaryGreen-dark text-6xl mb-6" />
        <p className="font-montserrat font-semibold text-lg text-textColor-light dark:text-textColor-dark mb-4">
          Experience the web in your native tongue.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6 w-full">
          {localLanguages.map((lang, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="font-ubuntu text-textColor-light dark:text-textColor-dark">
                {lang.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                {lang.example}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center space-x-2 text-primaryGreen-light dark:text-primaryGreen-dark font-semibold">
          <FaCrown />{" "}
          <span className="font-ubuntu">Available with Pro Plan</span>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="local_language_interest"
            value="yes"
            checked={interested === true}
            onChange={() => setInterested(true)}
            className="form-radio h-5 w-5 text-primaryGreen-light dark:text-primaryGreen-dark focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
          <span className="ml-2 font-ubuntu text-textColor-light dark:text-textColor-dark">
            Yes, tell me more!
          </span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="local_language_interest"
            value="no"
            checked={interested === false}
            onChange={() => setInterested(false)}
            className="form-radio h-5 w-5 text-primaryGreen-light dark:text-primaryGreen-dark focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
          />
          <span className="ml-2 font-ubuntu text-textColor-light dark:text-textColor-dark">
            Maybe later / No
          </span>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="primary-button w-full max-w-xs py-3"
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingStep7LocalLanguage;
