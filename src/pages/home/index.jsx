import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./sections/Hero";
import FeatureSection from "./sections/Features";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};

export default Home;
