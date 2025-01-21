import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-emerald-500 min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Background Shape */}
      <div className="absolute bottom-0 right-0 w-full h-[70%] bg-emerald-400 transform rotate-[-5deg] scale-125 translate-y-1/4" />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center pt-12 md:pt-20">
          {/* Left Column - Text Content */}
          <div className="text-white z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Empowering Independence in{" "}
              <span className="block">E-Commerce for All Abilities</span>
            </h1>

            <p className="text-white/90  mb-8 max-w-lg">
              BOAFO enables people with disabilities to shop online
              independently, featuring AI-powered language support to bridge
              communication barriers with local traders
            </p>

            <button className="bg-white text-emerald-500 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative md:justify-self-end z-10">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-white rounded-full absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2" />
            <img
              src="/api/placeholder/600/800"
              alt="Person using laptop"
              className="relative z-10 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
