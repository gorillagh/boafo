import React from "react";
import Language from "../../../assets/images/lang.png";
import LangIcon from "../../../assets/images/langIcon.png";

const LanguageTranslationSection = () => {
  return (
    <div className="w-full min-h-bg-gray-50 flex flex-col lg:flex-row items-center justify-center gap-8 p-6">
      {/* Left Side - Language Bubbles */}
      <div className="w-full h-full  rounded-lg flex items-center justify-center">
        <img
          src={Language}
          alt="Access Icon"
          className=" rounded-lg object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="max-w-md text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
          <h2 className="text-2xl font-bold">Real-Time Language Translation</h2>
          <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center">
            <img
              src={LangIcon}
              alt="Access Icon"
              className=" rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          If you're looking for brands and creators to collaborate with, you'll
          find them on .mention. We study what makes for a successful match, so
          finding each other is easy.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LanguageTranslationSection;
