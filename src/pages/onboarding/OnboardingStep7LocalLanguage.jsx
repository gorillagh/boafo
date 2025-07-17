// src/components/onboarding/OnboardingStep7LocalLanguage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobeAfrica, FaCrown } from "react-icons/fa";

const localLanguages = [
  { name: "Twi", example: "Akwaaba!" },
  { name: "Ga", example: "Abaafra!" },
  { name: "Frafra", example: "Mogre!" },
  { name: "Ewe", example: "Agbadzɛ!" },
];

const OnboardingStep7LocalLanguage = ({ onContinue, updateData, data }) => {
  const [interested, setInterested] = useState(data.localLanguageInterest ?? false);

  const handleSubmit = () => {
    updateData("localLanguageInterest", interested);
    onContinue();
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="font-montserrat text-xl font-bold text-textColor-light dark:text-textColor-dark w-[90%] mb-4">
        Are you interested in local African languages?
      </h2>

      <p className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark w-[70%] max-w-md mb-8">
        Boafo uniquely supports powerful translation and text-to-speech for languages like Twi, Ga, Frafra, and Ewe.
      </p>

      <div className="glass-card p-6 w-full max-w-lg mb-8 flex flex-col items-center">
        <FaGlobeAfrica className="text-primaryGreen-light dark:text-primaryGreen-dark text-6xl mb-6" />
        <p className="font-montserrat font-semibold text-sm text-textColor-light dark:text-textColor-dark mb-4">
          Experience the web in your native tongue.
        </p>

        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          {localLanguages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-between items-center p-3 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm"
            >
              <span className="font-ubuntu text-textColor-light dark:text-textColor-dark">
                {lang.name}
              </span>
              <span className="text-sm italic text-gray-500 dark:text-gray-400">
                {lang.example}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center space-x-2 text-primaryGreen-light dark:text-primaryGreen-dark font-semibold">
          <FaCrown />
          <span className="font-ubuntu text-sm">Available with Pro Plan</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md justify-center">
        {[
          { label: "Yes, tell me more!", value: true },
          { label: "Maybe later / No", value: false },
        ].map((option) => (
          <label key={option.label} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="local_language_interest"
              value={option.value}
              checked={interested === option.value}
              onChange={() => setInterested(option.value)}
              className="form-radio h-5 w-5 text-primaryGreen-light dark:text-primaryGreen-dark"
            />
            <span className="ml-2 font-ubuntu text-textColor-light dark:text-textColor-dark">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="primary-button text-sm w-full max-w-xs py-3"
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingStep7LocalLanguage;
