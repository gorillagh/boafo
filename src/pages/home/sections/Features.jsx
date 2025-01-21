import React from "react";

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
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg shadow-lg p-3">
                <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500">
                    <circle cx="12" cy="12" r="3" className="fill-current" />
                    <path
                      className="fill-current"
                      d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                    />
                  </svg>
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
          <div className="relative">
            {/* Background Arc */}
            <div className="absolute right-0 w-4/5 h-4/5 bg-sky-100 rounded-full" />

            {/* Placeholder Images */}
            <div className="relative grid grid-cols-2 gap-4">
              {/* Country Flags */}
              <div className="absolute flex gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100" />
                <div className="w-8 h-8 rounded-full bg-yellow-100" />
                <div className="w-8 h-8 rounded-full bg-blue-100" />
              </div>

              {/* User Images */}
              <div className="relative flex items-center justify-around">
                <img
                  src="/api/placeholder/120/120"
                  alt="User 1"
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <img
                  src="/api/placeholder/120/120"
                  alt="User 2"
                  className="w-24 h-24 rounded-lg object-cover mt-12"
                />
              </div>
              <div className="relative flex items-center justify-around">
                <img
                  src="/api/placeholder/120/120"
                  alt="User 3"
                  className="w-24 h-24 rounded-lg object-cover mb-12"
                />
                <img
                  src="/api/placeholder/120/120"
                  alt="User 4"
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
