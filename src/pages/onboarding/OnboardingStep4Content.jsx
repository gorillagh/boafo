// src/components/onboarding/OnboardingStep4Content.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const contentOptions = [
  { id: "articles_news", label: "Articles & News" },
  { id: "ebooks_docs", label: "E-books & Documents" },
  { id: "emails_messages", label: "Emails & Messages" },
  { id: "educational", label: "Educational Materials" },
  { id: "research", label: "Research Papers" },
  { id: "social_media", label: "Social Media Feeds" },
  { id: "my_writing", label: "My own notes/writing" },
  { id: "other", label: "Other" },
];

const OnboardingStep4Content = ({ onContinue, updateData, data }) => {
  const [selectedContent, setSelectedContent] = useState(
    data.contentTypes || []
  );

  const handleCheckboxChange = (contentId) => {
    setSelectedContent((prev) =>
      prev.includes(contentId)
        ? prev.filter((id) => id !== contentId)
        : [...prev, contentId]
    );
  };

  const handleSubmit = () => {
    updateData("contentTypes", selectedContent);
    onContinue();
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-xl w-[90%] text-textColor-light dark:text-textColor-dark mb-4">
        What type of content do you usually engage with?
      </h2>
      <p className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark mb-8">
        Choose all that apply.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mb-8">
        {contentOptions.map((content, index) => (
          <motion.label
            key={content.id}
            htmlFor={content.id}
            className="flex items-center glass-card p-4 cursor-pointer hover:bg-primaryGreen-light hover:bg-opacity-10 dark:hover:bg-primaryGreen-dark dark:hover:bg-opacity-10 transition-colors duration-200"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <input
              type="checkbox"
              id={content.id}
              checked={selectedContent.includes(content.id)}
              onChange={() => handleCheckboxChange(content.id)}
              className="form-checkbox h-3 w-3 text-primaryGreen-light dark:text-primaryGreen-dark rounded focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark mr-3"
            />
            <span className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark">
              {content.label}
            </span>
          </motion.label>
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

export default OnboardingStep4Content;
