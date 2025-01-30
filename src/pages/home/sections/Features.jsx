import React from "react";
import Accessibility from "../../../assets/images/accessibility.png";
import accessIcon from "../../../assets/images/acc.png";
const FeatureSection = () => {
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
                <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={accessIcon}
                    alt="Access Icon"
                    className=" rounded-lg object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Accessibility Tools</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8">
              If you're looking for brands and creators to collaborate with,
              you'll find them on .mention. We study what makes for a successful
              match, so finding each other is easy.
            </p>

            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Column - Illustration */}

          {/* User Images */}
          <div className="relative flex items-center justify-around">
            <img
              src={Accessibility}
              alt="User 1"
              className=" rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
