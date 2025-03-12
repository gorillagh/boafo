import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaQuoteRight,
  FaLightbulb,
  FaGlobeAfrica,
  FaHandshake,
  FaUsers,
  FaHistory,
} from "react-icons/fa";

import CompanyTimeline from "../components/CompanyTimeline";

const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [isTabsSticky, setIsTabsSticky] = useState(false);
  const tabsRef = useRef(null);
  const tabsSentinelRef = useRef(null);
  const sectionRef = useRef(null);

  const values = [
    {
      text: "Inclusivity in technology access",
      icon: (
        <FaUsers className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
    {
      text: "Empowerment through innovation",
      icon: (
        <FaLightbulb className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
    {
      text: "Bridging digital divides",
      icon: (
        <FaGlobeAfrica className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
    {
      text: "Supporting local communities",
      icon: (
        <FaHandshake className="text-primaryGreen-light dark:text-primaryGreen-dark mr-3 flex-shrink-0" />
      ),
    },
  ];

  const teamMembers = [
    {
      name: "Kofi Mensah",
      role: "Founder & CEO",
      image: "/testimonials/kofi.webp",
      quote: "Technology should empower everyone, regardless of ability.",
    },
    {
      name: "Ama Darko",
      role: "Head of Accessibility",
      image: "/testimonials/ama.webp",
      quote: "We design with empathy first, technology second.",
    },
    {
      name: "Kwame Osei",
      role: "Lead Developer",
      image: "/testimonials/kwame.webp",
      quote: "Every line of code we write is a step toward digital inclusion.",
    },
  ];

  const tabs = [
    { id: "story", label: "Our Story", icon: <FaHistory className="mr-2" /> },
    { id: "team", label: "Meet the Team", icon: <FaUsers className="mr-2" /> },
    {
      id: "mission",
      label: "Mission & Values",
      icon: <FaLightbulb className="mr-2" />,
    },
  ];

  // Set up Intersection Observer for sticky tabs
  useEffect(() => {
    const tabsElement = tabsRef.current;
    const sentinelElement = tabsSentinelRef.current;
    const sectionElement = sectionRef.current;

    if (!tabsElement || !sentinelElement || !sectionElement) return;

    // Observer for when to start being sticky (when sentinel leaves viewport)
    const startObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (!isTabsSticky) {
              // Tabs should be sticky when sentinel is out of view
              setIsTabsSticky(true);
            }
          } else {
            // Tabs should not be sticky when sentinel is in view
            setIsTabsSticky(false);
          }
        });
      },
      { threshold: 0 }
    );

    // Observer for when to stop being sticky (when section leaves viewport)
    const endObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is no longer visible and tabs are sticky
          if (!entry.isIntersecting) {
            setIsTabsSticky(false);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100% 0px", // Only trigger when section completely exits viewport at the top
      }
    );

    startObserver.observe(sentinelElement);
    endObserver.observe(sectionElement);

    return () => {
      if (sentinelElement) {
        startObserver.unobserve(sentinelElement);
      }
      if (sectionElement) {
        endObserver.unobserve(sectionElement);
      }
    };
  }, [isTabsSticky]);

  return (
    <section
      id="company"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background with subtle pattern and gradient */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 -z-10"></div>
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-0 w-full h-full bg-[url('/pattern-circuit.png')] bg-repeat"></div>
      </div>

      {/* Glass orbs for decorative effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500 dark:bg-blue-600 blur-3xl opacity-20 mix-blend-multiply dark:mix-blend-screen"
      />

      <div className="section-container">
        {/* Section Header with Catchy Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
            The Innovators{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Behind Boafo
            </span>
          </h2>
          <p className="font-ubuntu text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A pioneering Ghanaian tech company on a mission to make digital
            spaces accessible for everyone.
          </p>
        </motion.div>

        {/* Company Logo and Intro */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-16"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full mix-blend-multiply dark:mix-blend-screen blur-3xl opacity-10"></div>

            <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
              {/* Logo and Branding */}
              <div className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-60 dark:bg-opacity-50 border border-white border-opacity-40 dark:border-gray-700 rounded-full  shadow-lg">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark flex items-center justify-center">
                  <img
                    src="/ddt-logo.jpg"
                    alt="Digital Drivers Technology Logo"
                    className="w-28 rounded-full h-28 object-contain"
                  />
                </div>
              </div>

              {/* Company Intro */}
              <div>
                <h3 className="font-montserrat font-semibold text-2xl mb-3 text-gray-800 dark:text-white">
                  Digital Drivers Technology
                </h3>
                <p className="font-ubuntu text-gray-600 dark:text-gray-300">
                  Founded in 2018 in Accra, Ghana, Digital Drivers Technology
                  (DDT) is a social enterprise dedicated to developing
                  accessible technology solutions. We believe in the power of
                  innovation to bridge digital divides and empower communities.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-primaryGreen-light dark:text-primaryGreen-dark">
                      Est. 2018
                    </span>
                  </div>
                  <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-primaryGreen-light dark:text-primaryGreen-dark">
                      Accra, Ghana
                    </span>
                  </div>
                  <div className="bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-primaryGreen-light dark:text-primaryGreen-dark">
                      25+ Team Members
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation Observer Element - Placed where we want stickiness to start */}
          <div id="tabs-sentinel" className="h-20"></div>
          <div ref={tabsSentinelRef} className="h-0 w-full"></div>

          {/* Tab Navigation - Sticky on Mobile */}
          <div
            ref={tabsRef}
            className={`flex flex-wrap justify-center mb-8 gap-4 py-4 z-30 transition-all duration-300 w-full ${
              isTabsSticky
                ? "fixed top-20 left-0 right-0 shadow-md border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm"
                : ""
            }`}
            style={{
              visibility: isTabsSticky ? "visible" : "visible",
              position: isTabsSticky ? "fixed" : "relative",
            }}
          >
            {tabs.map((tab) => (
              <motion.a
                href="#tabs-sentinel"
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white shadow-md"
                    : "backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {tab.label}
              </motion.a>
            ))}
          </div>

          {/* Add spacer when tabs are sticky to prevent content jump */}
          {isTabsSticky && <div className="h-16 mb-8"></div>}

          {/* Tab Content */}
          <div className={`${isTabsSticky ? "mt-48" : "mt-8"}`}>
            {/* Our Story Tab - Now using the CompanyTimeline component */}
            {activeTab === "story" && <CompanyTimeline />}

            {/* Team Tab */}
            {activeTab === "team" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center justify-center mb-12">
                  <div className="h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent w-1/4"></div>
                  <div className="mx-4 flex items-center">
                    <FaUsers className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2" />
                    <h3 className="font-montserrat font-semibold text-2xl text-gray-800 dark:text-white">
                      Meet Our Team
                    </h3>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent w-1/4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                      className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 border border-white border-opacity-40 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg group"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-montserrat font-semibold text-lg text-white">
                            {member.name}
                          </h4>
                          <p className="font-ubuntu text-sm text-white text-opacity-90">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex">
                          <FaQuoteRight className="text-primaryGreen-light dark:text-primaryGreen-dark opacity-20 text-2xl mr-3 flex-shrink-0" />
                          <p className="font-ubuntu italic text-gray-600 dark:text-gray-300">
                            "{member.quote}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-12 text-center"
                >
                  <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-4">
                    Want to join our mission?
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium py-2 px-6 rounded-full shadow-md"
                  >
                    View Careers
                  </motion.button>
                </motion.div>
              </motion.div>
            )}

            {/* Mission & Values Tab */}
            {activeTab === "mission" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Mission and Vision */}
                <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
                  <div className="mb-10">
                    <span className="inline-block w-12 h-1 bg-primaryGreen-light dark:bg-primaryGreen-dark mb-4"></span>
                    <h3 className="font-montserrat font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
                      Our Mission
                    </h3>
                    <p className="font-ubuntu text-gray-600 dark:text-gray-300">
                      To create accessible technology solutions that bridge
                      digital divides and foster independence for all users,
                      regardless of ability or technical expertise.
                    </p>
                  </div>

                  <div>
                    <span className="inline-block w-12 h-1 bg-primaryGreen-light dark:bg-primaryGreen-dark mb-4"></span>
                    <h3 className="font-montserrat font-semibold text-2xl mb-4 text-gray-800 dark:text-white">
                      Our Vision
                    </h3>
                    <p className="font-ubuntu text-gray-600 dark:text-gray-300">
                      A world where technology empowers rather than excludes,
                      enabling everyone to participate fully in the digital
                      economy regardless of their abilities.
                    </p>
                  </div>
                </div>

                {/* Values */}
                <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
                  <span className="inline-block w-12 h-1 bg-primaryGreen-light dark:bg-primaryGreen-dark mb-4"></span>
                  <h3 className="font-montserrat font-semibold text-2xl mb-6 text-gray-800 dark:text-white">
                    Our Values
                  </h3>

                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-30 rounded-xl p-4 shadow-md"
                      >
                        {value.icon}
                        <div>
                          <p className="font-ubuntu font-medium text-gray-800 dark:text-white">
                            {value.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-5 border-t border-gray-200 dark:border-gray-700">
                    <p className="font-ubuntu text-gray-600 dark:text-gray-400 text-center italic">
                      "We believe that technology should serve humanity, not the
                      other way around."
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
