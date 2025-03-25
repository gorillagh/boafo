// src/components/sections/AboutProduct.jsx

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAccessibleIcon,
  FaGlobe,
  FaHandHoldingHeart,
  FaPlay,
  FaTimes,
  FaChevronRight,
  FaLightbulb,
  FaMicrochip,
  FaShieldAlt,
} from "react-icons/fa";

// Modal components
const Modal = ({ isOpen, onClose, children, title }) => {
  const overlayRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={handleOverlayClick}
          ref={overlayRef}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold font-montserrat text-gray-800 dark:text-white">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Video player with modal
const VideoPlayer = ({ videoSrc, posterSrc, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setModalOpen(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Video Card Preview */}
      <div
        onClick={openModal}
        className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
      >
        <div className="relative aspect-video">
          <img
            src={posterSrc}
            alt={`${title} preview`}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl group-hover:bg-opacity-50 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-white font-medium truncate">{title}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 border border-white border-opacity-20 dark:border-gray-700 rounded-xl pointer-events-none"></div>
      </div>

      {/* Video Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} title={title}>
        <div className="mb-4">
          <div className="relative rounded-lg overflow-hidden shadow-inner bg-black">
            <video
              ref={videoRef}
              className="w-full aspect-video"
              poster={posterSrc}
              controls
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl"
                >
                  <FaPlay className="text-white ml-1 text-xl" />
                </motion.div>
              </button>
            )}
          </div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 font-ubuntu">
            {description}
          </p>
        </div>
      </Modal>
    </>
  );
};

// Technology modal content
const TechnologyContent = () => {
  const technologies = [
    {
      icon: (
        <FaMicrochip className="text-primaryGreen-light dark:text-primaryGreen-dark" />
      ),
      title: "AI-Powered Recognition",
      description:
        "Our proprietary machine learning algorithms analyze web content in real time, ensuring every element is optimized for accessibility",
    },
    {
      icon: <FaLightbulb className="text-blue-500 dark:text-blue-400" />,
      title: "Adaptive Interface",
      description:
        "Boafo’s dynamic interface adapts to your unique accessibility needs offering customizable controls for text size, brightness, and even a dark mode to reduce eye strain.",
    },
    {
      icon: <FaShieldAlt className="text-amber-500 dark:text-amber-400" />,
      title: "Privacy-First Design",
      description:
        "All processing happens locally in your browser no sensitive data is sent to external servers so you can enjoy enhanced accessibility with peace of mind.",
    },
  ];

  return (
    <div className="space-y-8">
      <p className="text-gray-700 dark:text-gray-300 font-ubuntu text-lg leading-relaxed">
        Boafo leverages cutting-edge technology to bridge the accessibility gap
        in the digital world. Our extension is built on advanced web
        technologies and artificial intelligence to deliver seamless
        accessibility features without requiring changes to the underlying
        website structure.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm"
          >
            <div className="text-2xl mb-4">{tech.icon}</div>
            <h4 className="font-montserrat font-semibold text-lg mb-2 text-gray-800 dark:text-white">
              {tech.title}
            </h4>
            <p className="font-ubuntu text-sm text-gray-600 dark:text-gray-400">
              {tech.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-primaryGreen-light bg-opacity-10 dark:bg-primaryGreen-dark dark:bg-opacity-10 border-l-4 border-primaryGreen-light dark:border-primaryGreen-dark rounded-r-lg p-4 mt-8">
        <h4 className="font-montserrat font-semibold text-gray-800 dark:text-white mb-2">
          Integration Made Simple
        </h4>
        <p className="font-ubuntu text-gray-600 dark:text-gray-400">
          Easily integrate Boafo into any website or web application with just a
          few lines of code. Our comprehensive documentation and support team
          are here to ensure a smooth and hassle-free implementation.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-primaryGreen-light hover:bg-primaryGreen-hover-light dark:bg-primaryGreen-dark dark:hover:bg-primaryGreen-hover-dark text-white font-medium rounded-lg shadow-sm transition-colors"
        >
          Contact Us for Technical Details
        </a>
      </div>
    </div>
  );
};

const AboutProduct = () => {
  const [techModalOpen, setTechModalOpen] = useState(false);

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
      title: "Shop Independently, with Confidence & Ease",
      description:
        "Enabling users to shop independently, boosting confidence and self-reliance.",
    },
  ];

  const videos = [
    {
      title: "Text-to-Speech Demo",
      description:
        "This demonstration showcases how Boafo's text-to-speech feature works in real time on digital platforms. The technology intelligently identifies key content such as descriptions, prices, and reviews, then converts them into clear, natural-sounding speech. Users can adjust the reading speed and voice preferences to suit their individual needs. This feature is particularly valuable for visually impaired users, enabling them to browse independently without requiring assistance.",
      videoSrc: "/videos/text-to-speech-demo.mp4",
      posterSrc: "/illustrations/text-to-speech-preview.webp",
    },
    {
      title: "Speech Recognition",
      description:
        "Our advanced speech recognition technology enables users to navigate digital platforms using voice commands alone. This demonstration shows how users can search for content, filter results, and perform actions using natural voice instructions. Designed to understand various accents and dialects, it makes interactions accessible to a diverse range of users. For individuals with motor disabilities or those who find typing challenging, this feature transforms the digital experience into an interactive conversation.",
      videoSrc: "/videos/speech-recognition-demo.mp4",
      posterSrc: "/illustrations/speech-recognition-preview.webp",
    },
    {
      title: "Language Translation",
      description:
        "Boafo's real-time language translation feature breaks down communication barriers on digital platforms. This demonstration shows how the extension automatically detects and translates content, customer questions, and responses. The technology supports over 40 languages, with special emphasis on local African languages to empower regional traders. This feature helps connect local businesses with global customers while preserving authentic cultural communication.",
      videoSrc: "/videos/language-translation-demo.mp4",
      posterSrc: "/illustrations/language-translation-preview.webp",
    },
  ];

  return (
    <section id="about" className="pb-24 relative overflow-hidden">
      {/* Background with improved light mode visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-secondaryGreen-light to-gray-50 dark:from-[#0D0D0D] dark:via-secondaryGreen-dark dark:to-[#0D0D0D] opacity-80 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots-light.png')] dark:bg-[url('/pattern-dots-dark.png')] bg-repeat opacity-5 -z-10"></div>

      {/* Glass elements - more subtle for light mode */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-5xl opacity-10 dark:opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen blur-5xl opacity-10 dark:opacity-20 animate-pulse"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}

        {/* Main Content Area with improved light mode contrast */}
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
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-xl opacity-10 dark:opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primaryGreen-hover-light dark:bg-primaryGreen-hover-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-xl opacity-10 dark:opacity-20 animate-pulse"></div>

              {/* Main image with glass effect - improved for light mode */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="overflow-hidden rounded-xl shadow-xl transform rotate-3 transition-transform duration-500 border border-gray-200 dark:border-gray-700"
              >
                <div className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-30 p-1.5">
                  <img
                    src="/about-product3.webp"
                    alt="Boafo widget demonstration"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text Content - improved contrast for light mode */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-30 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
                  Discover{" "}
                  <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
                    Boafo
                  </span>
                </h2>
              </motion.div>
              <p className="font-ubuntu text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Boafo makes digital experiences inclusive with text-to-speech,
                audio descriptions, and local language support, empowering users
                of all abilities.
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
                    <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark text-white rounded-full p-3 mr-4 flex-shrink-0 shadow-md">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                        {benefit.title}
                      </h3>
                      {/* <p className="font-ubuntu text-gray-600 dark:text-gray-400">
                        {benefit.description}
                      </p> */}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => setTechModalOpen(true)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center mt-8 text-primaryGreen-light dark:text-primaryGreen-dark font-medium hover:underline"
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
          className="mb-10"
        >
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4 text-center text-gray-800 dark:text-white">
            See{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Boafo
            </span>{" "}
            in Action
          </h3>
        </motion.div>

        {/* Video Grid - improved card design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-transparent bg-opacity-80 dark:bg-opacity-20  rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
            >
              <VideoPlayer
                videoSrc={video.videoSrc}
                posterSrc={video.posterSrc}
                title={video.title}
                description={video.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section with improved styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            {
              number: "500+",
              label: "Active Users",
              description: "Across multiple countries",
            },
            {
              number: "94%",
              label: "Accessibility Score",
              description: "WCAG 2.1 AA compliant",
            },
            {
              number: "24/7",
              label: "Support Available",
              description: "Dedicated customer service",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-20 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-montserrat font-bold text-3xl mb-2 bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
                {stat.number}
              </h3>
              <p className="font-ubuntu font-medium text-gray-800 dark:text-white mb-1">
                {stat.label}
              </p>
              <p className="font-ubuntu text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Modal */}
      <Modal
        isOpen={techModalOpen}
        onClose={() => setTechModalOpen(false)}
        title="Boafo Technology"
      >
        <TechnologyContent />
      </Modal>
    </section>
  );
};

export default AboutProduct;
