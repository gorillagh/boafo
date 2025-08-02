// src/components/onboarding/OnboardingFlow.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import API from "@/lib/axios";

// Import individual step components (skip account creation)
import OnboardingStep2Welcome from "./OnboardingStep2Welcome";
import OnboardingStep3Goals from "./OnboardingStep3Goals";
import OnboardingStep4Content from "./OnboardingStep4Content";
import OnboardingStep5Voice from "./OnboardingStep5Voice";
import OnboardingStep6Speed from "./OnboardingStep6Speed";
import OnboardingStep7LocalLanguage from "./OnboardingStep7LocalLanguage";
import OnboardingStep8Install from "./OnboardingStep8Install";
import { getToken } from "@/lib/authHelpers";
import Logo from "@/components/Logo";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7; // steps 2-8 now remapped to 1-7
  const navigate = useNavigate();

  const [onboardingData, setOnboardingData] = useState({
    goals: [],
    contentTypes: [],
    selectedVoice: null,
    readingSpeed: 1.0,
    localLanguageInterest: false,
  });

  // Ensure user is authenticated before onboarding
  useEffect(() => {
    const token = getToken();
    if (!token) {
      toast.error("Please sign up or log in first.");
      navigate("/onboarding"); // redirect to signup (onboarding route)
    }
  }, [navigate]);

  const updateOnboardingData = (key, value) => {
    setOnboardingData((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => setCurrentStep((s) => Math.min(s + 1, totalSteps));
  const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleFinalizeAndNavigate = async () => {
    try {
      const token = getToken();
      const res = await API.post(
        "/users/onboardingFlow",
        { ...onboardingData },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      window.postMessage({ type: "BOAFO_TOKEN", token }, "*");
      toast.success("Onboarding completed!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Onboarding API error:", err);
      toast.error(
        "Failed to save preferences. " +
          (err.response?.data?.message || "Please try again.")
      );
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingStep2Welcome onContinue={handleNext} />;
      case 2:
        return (
          <OnboardingStep3Goals
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 3:
        return (
          <OnboardingStep4Content
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 4:
        return (
          <OnboardingStep5Voice
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 5:
        return (
          <OnboardingStep6Speed
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 6:
        return (
          <OnboardingStep7LocalLanguage
            onContinue={handleNext}
            updateData={updateOnboardingData}
            data={onboardingData}
          />
        );
      case 7:
        return (
          <OnboardingStep8Install
            onCompleteOnboarding={handleFinalizeAndNavigate}
          />
        );
      default:
        return <div>Something went wrong.</div>;
    }
  };

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="relative glass-card max-w-lg w-full p-5 text-center my-4 mx-4">
        {currentStep > 1 && (
          <button onClick={handleBack} className="absolute top-4 left-5">
            <FaArrowLeft /> Back
          </button>
        )}

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
          <motion.div
            className="bg-primaryGreen-light dark:bg-primaryGreen-dark h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <Logo />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OnboardingFlow;
