import React, { useState } from "react";
import {
  FaVolumeUp,
  FaKeyboard,
  FaSearch,
  FaExpandArrowsAlt,
  FaFileAlt,
} from "react-icons/fa";
import Accessibility from "../../../assets/images/accessibility.png";
import accessIcon from "../../../assets/images/acc.png";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaVolumeUp className="w-6 h-6" />,
      title: "Text-to-Speech",
      description:
        "Converts text content on the e-commerce website into audio form, enabling visually impaired users to hear website information, including product details.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "Audio Description",
      description:
        "Converts images and graphics into descriptive audio forms to help visually impaired users interpret product visuals effectively.",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: <FaKeyboard className="w-6 h-6" />,
      title: "Speech-to-Text",
      description:
        "Transcribes audio input from users into text, simplifying search and navigation for users with limited typing abilities.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: <FaExpandArrowsAlt className="w-6 h-6" />,
      title: "Resizable Elements",
      description:
        "Allow users to adjust text and image sizes to fit their preferences, ensuring comfortable viewing for all users.",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "Image Description",
      description:
        "Extracts descriptive text from images or generates descriptions if unavailable, providing additional context for graphics without pre-existing alt text.",
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Designed for Inclusivity and
            <br />
            Local Accessibility
          </h2>
        </div>

        {/* Feature Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Feature Description */}
          <div>
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg shadow-lg p-3">
                <div
                  className={`w-full h-full ${features[activeFeature].color} rounded-lg flex items-center justify-center ${features[activeFeature].iconColor}`}
                >
                  {features[activeFeature].icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold">
                {features[activeFeature].title}
              </h3>
            </div>

            {/* Feature Navigation */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    activeFeature === index
                      ? "bg-gray-100 shadow-md"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${feature.color} ${feature.iconColor} flex items-center justify-center`}
                    >
                      {feature.icon}
                    </div>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative flex flex-col items-center justify-around">
            {/* Description */}
            <p className="text-gray-900 text-lg mb-8">
              {features[activeFeature].description}
            </p>
            <img
              src={Accessibility}
              alt="Accessibility features illustration"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
