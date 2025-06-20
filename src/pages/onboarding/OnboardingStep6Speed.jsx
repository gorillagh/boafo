// src/components/onboarding/OnboardingStep6Speed.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const OnboardingStep6Speed = ({ onContinue, updateData, data }) => {
  const [speed, setSpeed] = useState(data.readingSpeed || 1.0); // Default to 1.0x

  const handleSliderChange = (e) => {
    setSpeed(parseFloat(e.target.value));
  };

  const handleSubmit = () => {
    updateData("readingSpeed", speed);
    onContinue();
  };

  const getWPM = (s) => {
    // Assuming 200 WPM is normal (1.0x), adjust proportionally
    return Math.round(200 * s);
  };

  const getProductivityBoost = (s) => {
    if (s <= 1.0) return 0;
    return Math.round((s - 1.0) * 100);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4">
        Set Your Preferred Reading Speed
      </h2>
      <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-8">
        You can always adjust this later in the Boafo settings.
      </p>

      <motion.div
        className="glass-card p-6 w-full max-w-md flex flex-col items-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="font-montserrat font-bold text-5xl mb-4 text-primaryGreen-light dark:text-primaryGreen-dark">
          {speed.toFixed(1)}x
        </div>
        <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-4">
          This is approximately {getWPM(speed)} words per minute.
        </p>

        {getProductivityBoost(speed) > 0 && (
          <motion.p
            className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            📈 {getProductivityBoost(speed)}% productivity boost!
          </motion.p>
        )}

        <input
          type="range"
          min="0.5"
          max="3.0"
          step="0.1"
          value={speed}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg
            [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primaryGreen-light [&::-webkit-slider-thumb]:dark:bg-primaryGreen-dark [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none
            [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-primaryGreen-light [&::-moz-range-thumb]:dark:bg-primaryGreen-dark [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:appearance-none"
        />
        <div className="flex justify-between w-full mt-2 text-sm text-gray-500 dark:text-gray-400 px-1">
          <span>Slower</span>
          <span>Normal</span>
          <span>Faster</span>
        </div>
      </motion.div>

      <button
        onClick={handleSubmit}
        className="primary-button w-full max-w-xs py-3"
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingStep6Speed;
