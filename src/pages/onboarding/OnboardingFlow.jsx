// src/components/onboarding/OnboardingFlow.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import API from "@/lib/axios";

// Import individual step components
import OnboardingStep1Account from "./OnboardingStep1Account";
import OnboardingStep2Welcome from "./OnboardingStep2Welcome";
import OnboardingStep3Goals from "./OnboardingStep3Goals";
import OnboardingStep4Content from "./OnboardingStep4Content";
import OnboardingStep5Voice from "./OnboardingStep5Voice";
import OnboardingStep6Speed from "./OnboardingStep6Speed";
import OnboardingStep7LocalLanguage from "./OnboardingStep7LocalLanguage";
import OnboardingStep8Install from "./OnboardingStep8Install";
import { getToken } from "@/lib/authHelpers";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  const navigate = useNavigate();

  const [onboardingData, setOnboardingData] = useState({
    name: "",
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
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };
  const handleFinalizeAndNavigate = async () => {
    try {
      const token = getToken();
      if (!token) {
        toast.error("Authentication token not found. Please log in.");
        navigate("/login");
        return;
      }

      const res = await API.post(
        "/users/onboarding",
        {
          goals: onboardingData.goals,
          contentTypes: onboardingData.contentTypes,
          selectedVoice: onboardingData.selectedVoice,
          readingSpeed: onboardingData.readingSpeed,
          localLanguageInterest: onboardingData.localLanguageInterest,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ POST MESSAGE TO EXTENSION
      window.postMessage(
        {
          type: "BOAFO_TOKEN",
          token: token,
        },
        "*"
      );

      toast.success("Onboarding completed!");
      navigate("/dashboard");
    } catch (err) {
      console.error(
        "Onboarding API error:",
        err.response ? err.response.data : err.message
      );
      toast.error(
        "Failed to save preferences. " +
          (err.response?.data?.message || "Please try again.")
      );
    }
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
        return (
          <OnboardingStep8Install
            onCompleteOnboarding={handleFinalizeAndNavigate}
          />
        );
      default:
        return <div>Something went wrong.</div>;
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      <div className="relative glass-card max-w-lg w-full p-5 text-center my-4 mx-4">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="absolute text-sm top-4 left-5 text-textColor-light dark:text-textColor-dark hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors duration-200 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        )}

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
          <motion.div
            className="bg-primaryGreen-light dark:bg-primaryGreen-dark h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </div>

        {/* Logo */}
        <Logo />

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
