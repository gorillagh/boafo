// src/components/onboarding/OnboardingStep3Goals.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const goalsOptions = [
  { id: 'productive', label: 'Be more productive' },
  { id: 'listen_on_go', label: 'Listen on the go' },
  { id: 'stay_focused', label: 'Stay focused and engaged' },
  { id: 'reading_easier', label: 'Make reading easier' },
  { id: 'learn_new', label: 'Learn something new' },
  { id: 'relax_unwind', label: 'Relax and unwind' },
  { id: 'access_local', label: 'Access content in local languages' },
  { id: 'convert_ideas', label: 'Convert ideas to text quickly' },
];

const OnboardingStep3Goals = ({ onContinue, updateData, data }) => {
  const [selectedGoals, setSelectedGoals] = useState(data.goals || []);

  const handleCheckboxChange = (goalId) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleSubmit = () => {
    updateData('goals', selectedGoals);
    onContinue();
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-montserrat font-bold text-xl w-[90%] text-textColor-light dark:text-textColor-dark mb-4">
        What would you like to achieve with Boafo?
      </h2>
      <p className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark mb-8">
        Choose all that apply.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mb-8">
        {goalsOptions.map((goal, index) => (
          <motion.label
            key={goal.id}
            htmlFor={goal.id}
            className="flex text-sm glass-card p-4 cursor-pointer hover:bg-primaryGreen-light hover:bg-opacity-10 dark:hover:bg-primaryGreen-dark dark:hover:bg-opacity-10 transition-colors duration-200"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <input
              type="checkbox"
              id={goal.id}
              checked={selectedGoals.includes(goal.id)}
              onChange={() => handleCheckboxChange(goal.id)}
              className="form-checkbox h-3 w-3 text-primaryGreen-light dark:text-primaryGreen-dark rounded focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark mr-3"
            />
            <span className="font-ubuntu text-xs text-textColor-light dark:text-textColor-dark">{goal.label}</span>
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

export default OnboardingStep3Goals;