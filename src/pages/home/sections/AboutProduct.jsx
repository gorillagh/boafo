// src/components/sections/AboutProduct.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaAccessibleIcon,
  FaGlobe,
  FaHandHoldingHeart,
  FaPlay,
  FaPause,
  FaChevronRight,
} from "react-icons/fa";

const VideoPlayer = ({ videoSrc, posterSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById(
      `video-${title.replace(/\s+/g, "-").toLowerCase()}`
    );
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl">
      <div className="backdrop-blur-md bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-5 absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <video
          id={`video-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="w-full rounded-2xl"
          poster={posterSrc}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center focus:outline-none group"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {!isPlaying && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-50 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl"
            >
              <FaPlay className="text-white ml-1" />
            </motion.div>
          )}
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <p className="text-white font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
};

const AboutProduct = () => {
  const benefits = [
    {
      icon: <FaAccessibleIcon />,
      title: "Enhanced Accessibility",
      description:
        "Make online shopping accessible for people with visual, hearing, and physical disabilities.",
    },
    {
      icon: <FaGlobe />,
      title: "Bridging Language Gaps",
      description:
        "AI-powered language support to help users communicate in their preferred languages.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Independence & Empowerment",
      description:
        "Enabling users to shop independently, boosting confidence and self-reliance.",
    },
  ];

  const videos = [
    {
      title: "Text-to-Speech Demo",
      description:
        "See how Boafo reads product descriptions aloud for visually impaired users.",
      videoSrc: "/videos/text-to-speech-demo.mp4",
      posterSrc: "/videos/text-to-speech-poster.jpg",
    },
    {
      title: "Speech Recognition",
      description:
        "Watch how users can search for products using just their voice.",
      videoSrc: "/videos/speech-recognition-demo.mp4",
      posterSrc: "/videos/speech-recognition-poster.jpg",
    },
    {
      title: "Language Translation",
      description:
        "Explore how Boafo bridges language barriers between shoppers and sellers.",
      videoSrc: "/videos/language-translation-demo.mp4",
      posterSrc: "/videos/language-translation-poster.jpg",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-secondaryGreen-light to-white dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-70 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      {/* Glass elements */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-5xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen blur-5xl opacity-20 animate-pulse"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
            Discover{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Boafo
            </span>
          </h2>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Interactive Product Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Background elements */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primaryGreen-hover-light dark:bg-primaryGreen-hover-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-xl opacity-20 animate-pulse"></div>

              {/* Main image with glass effect */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-30 border border-white border-opacity-30 dark:border-gray-700 rounded-xl overflow-hidden shadow-2xl transform rotate-3 transition-transform duration-500"
              >
                <img
                  src="/about-product-placeholder.jpg"
                  alt="Boafo widget demonstration"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Floating UI elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ rotate: 0, y: -5 }}
                className="absolute top-6 right-8 backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-50 border border-white border-opacity-30 dark:border-gray-700 p-4 rounded-xl shadow-lg transform -rotate-6 transition-all duration-500 z-10"
              >
                <div className="bg-white dark:bg-gray-800 p-2 rounded-lg">
                  <span className="block w-24 h-3 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mb-2"></span>
                  <span className="block w-16 h-3 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full opacity-70"></span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-50 border border-white border-opacity-30 dark:border-gray-700 rounded-xl px-4 py-2 shadow-lg z-10"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">
                    AI-Powered Accessibility
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-20 border border-white border-opacity-30 dark:border-gray-700 rounded-xl p-8 shadow-lg">
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-gray-800 dark:text-white">
                About Boafo
              </h3>
              <p className="font-ubuntu text-gray-700 dark:text-gray-300 mb-8">
                The Accessible E-Commerce Widget is designed to empower
                individuals with disabilities (visual impairments, hearing
                impairments, physical disabilities) and local traders with
                limited digital skills to use e-commerce platforms
                independently. With features like text-to-speech, audio
                descriptions, and local language support, Boafo bridges
                communication barriers and enhances online shopping
                independence.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="backdrop-blur-md bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-90 dark:bg-opacity-90 rounded-full p-3 mr-4 text-white flex-shrink-0 shadow-md">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="font-ubuntu text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center mt-8 text-primaryGreen-light dark:text-primaryGreen-dark font-medium"
              >
                <span>Learn more about our technology</span>
                <FaChevronRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Video Demonstrations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-center text-gray-800 dark:text-white">
            See{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Boafo
            </span>{" "}
            in Action
          </h3>
          <p className="font-ubuntu text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Watch our demonstration videos to see how Boafo makes online
            shopping accessible for everyone.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-20 border border-white border-opacity-30 dark:border-gray-700 rounded-xl p-5 shadow-lg"
            >
              <VideoPlayer
                videoSrc={video.videoSrc}
                posterSrc={video.posterSrc}
                title={video.title}
              />
              <div className="mt-4">
                <h4 className="font-montserrat font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                  {video.title}
                </h4>
                <p className="font-ubuntu text-sm text-gray-600 dark:text-gray-400">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: "15K+", label: "Active Users" },
            { number: "94%", label: "Accessibility Score" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-20 border border-white border-opacity-30 dark:border-gray-700 rounded-xl p-6 text-center shadow-lg"
            >
              <h3 className="font-montserrat font-bold text-3xl mb-2 bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="font-ubuntu text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
