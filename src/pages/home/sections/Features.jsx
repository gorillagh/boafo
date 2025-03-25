// src/components/sections/Features.jsx

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaVolumeUp,
  FaImage,
  FaMicrophone,
  FaExpand,
  FaFileAlt,
  FaArrowRight,
  FaArrowLeft,
  FaChevronRight,
} from "react-icons/fa";

// Add CSS to hide scrollbars but keep scrolling functionality
const scrollbarHiddenStyles = `
  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [direction, setDirection] = useState(0);
  const scrollRef = useRef(null);

  const features = [
    {
      icon: <FaVolumeUp size={24} />,
      title: "Text-to-Speech",
      description:
        "Converts text content into audio, enabling visually impaired users to hear website information.",
      color: "#34C759",
      darkColor: "#28A745",
      illustration: "/illustrations/text-to-speech.webp",
    },
    {
      icon: <FaImage size={24} />,
      title: "Audio Description",
      description:
        "Describes images and graphics in audio form for visually impaired users.",
      color: "#5E5CE6",
      darkColor: "#4E4CD4",
      illustration: "/illustrations/audio-description.webp",
    },
    {
      icon: <FaMicrophone size={24} />,
      title: "Speech-to-Text",
      description:
        "Transcribes audio input into text, simplifying searches for users with limited typing abilities.",
      color: "#FF9500",
      darkColor: "#E68600",
      illustration: "/illustrations/speech-to-text.webp",
    },
    {
      icon: <FaExpand size={24} />,
      title: "Resizable Elements",
      description:
        "Allows users to adjust text and image sizes for a comfortable viewing experience.",
      color: "#FF3B30",
      darkColor: "#D33227",
      illustration: "/illustrations/resizable-elements.webp",
    },
    {
      icon: <FaFileAlt size={24} />,
      title: "Image Description",
      description:
        "Generates descriptive text for images, providing context for graphics without alt text.",
      color: "#007AFF",
      darkColor: "#0066D6",
      illustration: "/illustrations/image-description.webp",
    },
  ];

  // Scroll active item into view in mobile horizontal scroll
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const activeItem = scrollContainer.children[activeFeature];

      if (activeItem) {
        const containerWidth = scrollContainer.offsetWidth;
        const itemWidth = activeItem.offsetWidth;
        const scrollLeft =
          activeItem.offsetLeft - containerWidth / 2 + itemWidth / 2;

        scrollContainer.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeFeature]);

  const nextFeature = () => {
    setDirection(1);
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setDirection(-1);
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const selectFeature = (index) => {
    setDirection(index > activeFeature ? 1 : -1);
    setActiveFeature(index);
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      };
    },
  };

  const currentFeature = features[activeFeature];

  return (
    <section id="features" className="pt-24 overflow-hidden relative">
      {/* Inject the CSS to hide scrollbars */}
      <style>{scrollbarHiddenStyles}</style>

      {/* Background Elements with improved light mode */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 -z-10"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <div className="absolute top-0 w-full h-full bg-[url('/pattern-grid.png')] bg-repeat"></div>
      </div>

      {/* Light mode accent */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-primaryGreen-light to-transparent opacity-[0.03] dark:opacity-0 -z-5"></div>

      {/* Glass Orbs Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark opacity-10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500 dark:bg-blue-600 opacity-10 blur-3xl"
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-4 text-gray-800 dark:text-white">
            Intelligent Features for{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="font-ubuntu text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Discover how Boafo's cutting-edge tools create an inclusive digital
            experience for users of all abilities.
          </p>
        </motion.div>

        {/* Mobile Feature Navigation - Horizontal Scrolling */}
        <div className="lg:hidden mb-8">
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => selectFeature(index)}
                  className={`flex-shrink-0 snap-center mx-2 first:ml-4 last:mr-4 w-[180px] cursor-pointer p-4 rounded-3xl transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-40 shadow-md text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`mr-3 ${
                        activeFeature === index
                          ? "text-white"
                          : "text-primaryGreen-light dark:text-primaryGreen-dark"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="truncate">
                      <h4 className="font-montserrat font-medium truncate">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md rounded-l-full p-1.5 text-primaryGreen-light dark:text-primaryGreen-dark">
              <FaChevronRight size={12} />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Feature Display */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <div className="relative h-[400px] md:h-[450px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={activeFeature}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  >
                    {/* Feature Illustration */}
                    <div className="relative order-2 md:order-2">
                      <div
                        className="backdrop-blur-xl h-52 md:h-80 flex items-center justify-center"
                        style={{
                          boxShadow: `0 20px 80px -20px ${currentFeature.color}50`,
                        }}
                      >
                        <motion.div
                          initial={{ y: 10 }}
                          animate={{ y: -10 }}
                          transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                            ease: "easeInOut",
                          }}
                          className="w-full h-full rounded-3xl max-w-xs mx-auto flex items-center justify-center"
                        >
                          <img
                            src={
                              currentFeature.illustration ||
                              "/illustrations/placeholder.svg"
                            }
                            alt={currentFeature.title}
                            className="max-w-full max-h-full rounded-3xl object-contain"
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Feature Text Content */}
                    <div className="order-1 md:order-1">
                      <div
                        className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-30 border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-lg"
                        style={{
                          boxShadow: `0 10px 40px -10px ${currentFeature.color}40`,
                        }}
                      >
                        <div
                          className="rounded-full p-4 w-16 h-16 mb-6 flex items-center justify-center text-white shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${currentFeature.color}, ${currentFeature.darkColor})`,
                            boxShadow: `0 10px 15px -3px ${currentFeature.color}40`,
                          }}
                        >
                          {currentFeature.icon}
                        </div>
                        <h3 className="font-montserrat font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
                          {currentFeature.title}
                        </h3>
                        <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-6">
                          {currentFeature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Feature Navigation Controls */}
              <div className="flex justify-between mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevFeature}
                  className="backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-30 border border-gray-100 dark:border-gray-700 rounded-full p-3 text-gray-800 dark:text-white shadow-md"
                  aria-label="Previous feature"
                >
                  <FaArrowLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextFeature}
                  className="backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-30 border border-gray-100 dark:border-gray-700 rounded-full p-3 text-gray-800 dark:text-white shadow-md"
                  aria-label="Next feature"
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </div>

            {/* Feature Navigation Sidebar - Desktop Only */}
            <div className="lg:col-span-5 order-1 lg:order-1 hidden lg:block">
              <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-20 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 shadow-lg">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => selectFeature(index)}
                      whileHover={{ x: 5 }}
                      className={`cursor-pointer p-4 rounded-full transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark text-white shadow-md"
                          : "hover:bg-gray-50 hover:dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`mr-4 ${
                            activeFeature === index
                              ? "text-white"
                              : "text-primaryGreen-light dark:text-primaryGreen-dark"
                          }`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-montserrat font-medium">
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Dots Navigation */}
        <div className="flex justify-center mt-10 space-x-2">
          {features.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => selectFeature(index)}
              className={`w-3 h-3 rounded-full ${
                activeFeature === index
                  ? "bg-primaryGreen-light dark:bg-primaryGreen-dark"
                  : "bg-gray-300 dark:bg-gray-700"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
