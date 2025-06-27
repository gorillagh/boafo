// src/components/onboarding/OnboardingFlow.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

// Import individual step components (will be created next)
import OnboardingStep1Account from "./OnboardingStep1Account";
import OnboardingStep2Welcome from "./OnboardingStep2Welcome";
import OnboardingStep3Goals from "./OnboardingStep3Goals";
import OnboardingStep4Content from "./OnboardingStep4Content";
import OnboardingStep5Voice from "./OnboardingStep5Voice";
import OnboardingStep6Speed from "./OnboardingStep6Speed";
import OnboardingStep7LocalLanguage from "./OnboardingStep7LocalLanguage";
import OnboardingStep8Install from "./OnboardingStep8Install";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8; // Update this as more steps are added

  // State to hold user preferences from the onboarding quiz
  const [onboardingData, setOnboardingData] = useState({
    email: "",
    password: "",
    goals: [],
    contentTypes: [],
    selectedVoice: null,
    readingSpeed: 1.0,
    localLanguageInterest: false,
  });

  const updateOnboardingData = (key, value) => {
    setOnboardingData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleNext = () => {
    // Here you might add validation for the current step before proceeding
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <OnboardingStep1Account
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 2:
        return <OnboardingStep2Welcome onContinue={handleNext} />;
      case 3:
        return (
          <OnboardingStep3Goals
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 4:
        return (
          <OnboardingStep4Content
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 5:
        return (
          <OnboardingStep5Voice
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 6:
        return (
          <OnboardingStep6Speed
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 7:
        return (
          <OnboardingStep7LocalLanguage
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 8:
        return <OnboardingStep8Install onContinue={handleNext} />; // Final step often redirects
      default:
        return <div>Something went wrong.</div>;
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative pb-16">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      <div className="relative glass-card max-w-3xl w-full p-8 md:p-12 text-center my-8 mx-4">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="absolute top-6 left-6 text-textColor-light dark:text-textColor-dark hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors duration-200 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
          <motion.div
            className="bg-primaryGreen-light dark:bg-primaryGreen-dark h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>

       
        <div className="mb-8">
          <span className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM11 16H13V8H11V16ZM8 12H10V8H8V12ZM14 12H16V8H14V12Z"
                fill="url(#gradient-logo)"
              />
              <defs>
                <linearGradient
                  id="gradient-logo"
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
            Boafo
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OnboardingFlow;
