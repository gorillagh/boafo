// src/components/sections/Testimonials.jsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote:
        "Boafo has made the internet truly accessible for me. I can now browse websites, read articles, and even navigate government portals with ease, thanks to the text-to-speech and voice command features.",
      name: "Kwame A.",
      role: "Visually Impaired User",
      image: "/testimonials/kwame.webp",
      rating: 5,
      location: "Accra, Ghana",
    },
    {
      quote:
        "As someone with limited mobility, Boafo's voice navigation has been life-changing. I can now interact with online services, from filling out forms to sending emails, without needing assistance.",
      name: "Ama S.",
      role: "User with Motor Disabilities",
      image: "/testimonials/ama.webp",
      rating: 5,
      location: "Kumasi, Ghana",
    },
    {
      quote:
        "With Boafo’s real-time translation, I can now understand and engage with online content in multiple languages, making education and job opportunities more accessible to me.",
      name: "Kofi B.",
      role: "Multilingual User",
      image: "/testimonials/kofi.webp",
      rating: 4.5,
      location: "Tamale, Ghana",
    },
    {
      quote:
        "Boafo’s audio descriptions and resizable text have made my daily internet use far more comfortable. Whether I’m reading the news or browsing social media, I no longer struggle with small text.",
      name: "Adwoa P.",
      role: "User with Low Vision",
      image: "/testimonials/adwoa.webp",
      rating: 5,
      location: "Cape Coast, Ghana",
    },
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setActiveIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setAutoplay(false);
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  // Helper function to render rating stars
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-secondaryGreen-light dark:from-[#0D0D0D] dark:to-secondaryGreen-dark opacity-90 -z-10"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots.png')] bg-repeat opacity-5 -z-10"></div>

      {/* Decorative glass shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark blur-3xl opacity-10 mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-blue-400 dark:bg-blue-500 blur-3xl opacity-10 mix-blend-multiply dark:mix-blend-screen"
      />

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
            What Our{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Users
            </span>{" "}
            Say
          </h2>
          <p className="font-ubuntu text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Discover how Boafo is changing lives and making digital experiences
            accessible for everyone.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16 relative">
          {/* Quote decoration */}
          <div className="absolute -top-16 -left-8 text-9xl opacity-5 text-primaryGreen-light dark:text-primaryGreen-dark">
            <FaQuoteLeft />
          </div>

          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute w-full h-full flex flex-col md:flex-row items-center"
              >
                {/* Testimonial Image */}
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-tr from-primaryGreen-light to-blue-400 dark:from-primaryGreen-dark dark:to-blue-500 rounded-full blur"></div>
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Rating badge */}
                    {/* <div className="absolute -bottom-2 right-0 backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 rounded-full px-3 py-1 shadow-lg border border-white dark:border-gray-700 flex items-center">
                      <div className="flex">
                        {renderRating(testimonials[activeIndex].rating)}
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="md:w-2/3 md:pl-12">
                  <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
                    <div className="text-primaryGreen-light dark:text-primaryGreen-dark mb-4">
                      <FaQuoteLeft size={24} />
                    </div>
                    <p className="font-ubuntu text-lg md:text-xl text-gray-700 dark:text-gray-200 italic mb-6">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg text-gray-800 dark:text-white">
                          {testimonials[activeIndex].name}
                        </h4>
                        <p className="text-primaryGreen-light dark:text-primaryGreen-dark font-medium">
                          {testimonials[activeIndex].role}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full backdrop-blur-md bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-white border-opacity-40 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primaryGreen-light dark:bg-primaryGreen-dark w-6"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full backdrop-blur-md bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-white border-opacity-40 dark:border-gray-700 shadow-lg flex items-center justify-center text-gray-800 dark:text-white"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Testimonial Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "1,200+", label: "Happy Users" },
            { number: "92%", label: "Satisfaction Rate" },
            { number: "40+", label: "Countries Reached" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="backdrop-blur-md bg-white dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-xl p-5 text-center shadow-md"
            >
              <p className="font-montserrat font-bold text-2xl md:text-3xl mb-1 bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
                {stat.number}
              </p>
              <p className="font-ubuntu text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
