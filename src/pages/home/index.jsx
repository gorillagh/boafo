import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./sections/Hero";
import FeatureSection from "./sections/Features";
import LanguageTranslationSection from "./sections/Language";
import Footer from "../../components/Footer";
import FeaturesSection from "./sections/FeaturesSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <FeatureSection /> */}
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="about">
        <LanguageTranslationSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
