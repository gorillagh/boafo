// src/components/onboarding/OnboardingStep5Voice.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlayCircle, FaCheckCircle, FaCrown } from "react-icons/fa"; // FaCrown for Pro feature

const voiceOptions = [
  {
    id: "standard_male_en",
    name: "Standard Male (English)",
    accent: "US",
    isPro: false,
  },
  {
    id: "standard_female_en",
    name: "Standard Female (English)",
    accent: "US",
    isPro: false,
  },
  {
    id: "twi_voice_gh",
    name: "Auntie Akua (Twi)",
    accent: "Ghanaian",
    isPro: true,
  }, // Local voice as Pro
  {
    id: "ga_voice_gh",
    name: "Uncle Kofi (Ga)",
    accent: "Ghanaian",
    isPro: true,
  }, // Local voice as Pro
  { id: "samantha_uk", name: "Samantha (English)", accent: "UK", isPro: false },
  { id: "pierre_fr", name: "Pierre (French)", accent: "French", isPro: false },
  { id: "sofia_es", name: "Sofia (Spanish)", accent: "Spanish", isPro: false },
  {
    id: "custom_profile",
    name: "Create Custom Profile",
    accent: "Pro Feature",
    isPro: true,
  }, // Emphasize Pro
];

const OnboardingStep5Voice = ({ onContinue, updateData, data }) => {
  const [selectedVoiceId, setSelectedVoiceId] = useState(
    data.selectedVoice || null
  );
  const [playingVoiceId, setPlayingVoiceId] = useState(null);

  const handleVoiceSelect = (voiceId) => {
    setSelectedVoiceId(voiceId);
  };

  const handlePlaySample = (voiceId) => {
    // In a real app, this would trigger an audio play
    setPlayingVoiceId(voiceId);
    setTimeout(() => setPlayingVoiceId(null), 2000); // Simulate play time
    console.log(`Playing sample for voice: ${voiceId}`);
  };

  const handleSubmit = () => {
    updateData("selectedVoice", selectedVoiceId);
    onContinue();
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-3xl text-textColor-light dark:text-textColor-dark mb-4">
        Choose Your Listening Voice
      </h2>
      <p className="font-ubuntu text-textColor-light dark:text-textColor-dark mb-8">
        You can always change this later. Pro voices offer more customization
        and advanced features.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mb-8">
        {voiceOptions.map((voice) => (
          <motion.div
            key={voice.id}
            className={`glass-card p-4 cursor-pointer relative
              ${
                selectedVoiceId === voice.id
                  ? "border-2 border-primaryGreen-light dark:border-primaryGreen-dark ring-2 ring-primaryGreen-light dark:ring-primaryGreen-dark"
                  : "border-gray-200 dark:border-gray-700"
              }
              ${
                voice.isPro ? "opacity-90" : ""
              } hover:shadow-lg transition-all duration-200`}
            onClick={() => handleVoiceSelect(voice.id)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {voice.isPro && (
              <span className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <FaCrown className="mr-1" /> Pro
              </span>
            )}
            <div className="flex items-center justify-between mb-2">
              <span className="font-montserrat font-semibold text-textColor-light dark:text-textColor-dark">
                {voice.name}
              </span>
              {selectedVoiceId === voice.id && (
                <FaCheckCircle className="text-primaryGreen-light dark:text-primaryGreen-dark" />
              )}
            </div>
            <p className="font-ubuntu text-sm text-gray-600 dark:text-gray-400 mb-3">
              Accent: {voice.accent}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePlaySample(voice.id);
              }}
              className={`text-primaryGreen-light dark:text-primaryGreen-dark hover:opacity-80 transition-opacity flex items-center text-sm
                ${
                  playingVoiceId === voice.id
                    ? "opacity-60 cursor-not-allowed"
                    : ""
                }`}
              disabled={playingVoiceId === voice.id}
            >
              <FaPlayCircle className="mr-2" />{" "}
              {playingVoiceId === voice.id ? "Playing..." : "Play Sample"}
            </button>
          </motion.div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedVoiceId}
        className="primary-button w-full max-w-xs py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  );
};

export default OnboardingStep5Voice;
