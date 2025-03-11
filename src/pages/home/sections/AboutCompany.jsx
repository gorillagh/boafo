// src/components/sections/AboutCompany.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaQuoteRight,
  FaLightbulb,
  FaGlobeAfrica,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState("story");

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

  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Digital Drivers Technology was founded in Accra with a mission to make technology accessible to all.",
    },
    {
      year: "2020",
      title: "First Prototype",
      description:
        "The first version of Boafo was developed to address accessibility challenges in e-commerce.",
    },
    {
      year: "2021",
      title: "Community Partnership",
      description:
        "Partnered with local disability organizations to refine and enhance our accessibility solutions.",
    },
    {
      year: "2022",
      title: "Launch & Recognition",
      description:
        "Official launch of Boafo followed by recognition at the Ghana Technology Awards.",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Expanded operations across West Africa, helping thousands access e-commerce platforms.",
    },
  ];

  const teamMembers = [
    {
      name: "Kofi Mensah",
      role: "Founder & CEO",
      image: "/team/kofi-placeholder.jpg",
      quote: "Technology should empower everyone, regardless of ability.",
    },
    {
      name: "Ama Darko",
      role: "Head of Accessibility",
      image: "/team/ama-placeholder.jpg",
      quote: "We design with empathy first, technology second.",
    },
    {
      name: "Kwame Osei",
      role: "Lead Developer",
      image: "/team/kwame-placeholder.jpg",
      quote: "Every line of code we write is a step toward digital inclusion.",
    },
  ];

  const tabs = [
    { id: "story", label: "Our Story" },
    { id: "team", label: "Meet the Team" },
    { id: "mission", label: "Mission & Values" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark bg-clip-text text-transparent">
              Digital Drivers Technology
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

            <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
              {/* Logo and Branding */}
              <div className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 border border-white border-opacity-40 dark:border-gray-700 rounded-full p-4 shadow-lg">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark flex items-center justify-center">
                  <img
                    src="/company-logo-placeholder.png"
                    alt="Digital Drivers Technology Logo"
                    className="w-20 h-20 object-contain"
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

                <div className="mt-4 flex space-x-4">
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

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white shadow-md"
                    : "backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {/* Our Story Tab */}
            {activeTab === "story" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-center text-gray-800 dark:text-white">
                  Our Journey
                </h3>

                {/* Timeline */}
                <div className="space-y-0 relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark transform md:translate-x-px"></div>

                  {timelineEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`relative pl-8 md:pl-0 pb-10 flex flex-col ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Year bubble */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark shadow-md flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-white"></span>
                      </div>

                      {/* Event content */}
                      <div
                        className={`md:w-1/2 ${
                          index % 2 === 0
                            ? "md:pr-12 md:text-right"
                            : "md:pl-12"
                        }`}
                      >
                        <div className="backdrop-blur-md bg-white dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-30 rounded-xl p-5 shadow-md">
                          <span className="inline-block px-3 py-1 bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-30 rounded-full text-primaryGreen-light dark:text-primaryGreen-dark text-sm font-bold mb-2">
                            {event.year}
                          </span>
                          <h4 className="font-montserrat font-semibold text-xl mb-2 text-gray-800 dark:text-white">
                            {event.title}
                          </h4>
                          <p className="font-ubuntu text-gray-600 dark:text-gray-400">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-montserrat font-semibold text-2xl mb-6 text-center text-gray-800 dark:text-white">
                  Meet Our Team
                </h3>
                <p className="font-ubuntu text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                  Our diverse team of engineers, designers, and accessibility
                  experts work together to create technology that bridges
                  digital divides.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="backdrop-blur-xl bg-white dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-30 border border-white border-opacity-40 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
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
                <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
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
                <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg">
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
                        className="flex items-start bg-white dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-30 rounded-xl p-4 shadow-md"
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

          {/* Recognition and Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-montserrat font-semibold text-xl mb-6 text-center text-gray-800 dark:text-white">
              Recognition & Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="h-16 bg-white dark:bg-gray-900 bg-opacity-40 dark:bg-opacity-30 rounded-lg flex items-center justify-center p-2 shadow-md"
                >
                  <img
                    src={`/partners/partner-${i}-placeholder.png`}
                    alt={`Partner ${i}`}
                    className="max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
