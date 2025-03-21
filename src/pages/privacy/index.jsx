import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChevronRight,
  FaHome,
  FaCheck,
  FaLock,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { COMPANY_DATA } from "../../constants/placeholder";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const effectiveDate = "March 15, 2025"; // You can update this as needed

  // Define sections for navigation
  const sections = [
    { id: "introduction", title: "Introduction", icon: <FaShieldAlt /> },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <FaUserShield />,
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: <FaCheck />,
    },
    {
      id: "data-sharing",
      title: "Data Sharing and Disclosure",
      icon: <FaLock />,
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: <FaChevronRight />,
    },
    { id: "cookies", title: "Cookies", icon: <FaChevronRight /> },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: <FaChevronRight />,
    },
    { id: "data-security", title: "Data Security", icon: <FaChevronRight /> },
    {
      id: "changes",
      title: "Changes to This Policy",
      icon: <FaChevronRight />,
    },
    { id: "your-choices", title: "Your Choices", icon: <FaChevronRight /> },
    { id: "contact", title: "Contact Us", icon: <FaChevronRight /> },
  ];

  // Handle scroll to track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Find all section elements
      const sectionElements = sections.map((section) => {
        const element = document.getElementById(section.id);
        return { id: section.id, position: element?.offsetTop || 0 };
      });

      // Set active section based on scroll position
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].position) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  // Scroll to section when clicking on nav item
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <div className="absolute top-0 w-full h-full bg-[url('/pattern-dots.png')] bg-repeat"></div>
      </div>

      {/* Glass orbs decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="fixed -top-20 -left-20 w-80 h-80 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark blur-3xl opacity-10 dark:opacity-5 -z-5"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="fixed -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-400 dark:bg-blue-600 blur-3xl opacity-10 dark:opacity-5 -z-5"
      />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex items-center text-sm text-gray-600 dark:text-gray-400"
        >
          <Link
            to="/"
            className="flex items-center hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <FaChevronRight className="mx-2" />
          <span className="text-gray-800 dark:text-gray-200">
            Privacy Policy
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar navigation - Sticky on desktop, hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden lg:block w-72 flex-shrink-0"
          >
            <div className="sticky top-24">
              <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-white border-opacity-30 dark:border-gray-700 dark:border-opacity-20 rounded-3xl shadow-xl p-6">
                <h3 className="font-montserrat font-semibold text-gray-800 dark:text-white text-lg mb-6 flex items-center">
                  <FaShieldAlt className="mr-2 text-primaryGreen-light dark:text-primaryGreen-dark" />
                  <span>Privacy Policy</span>
                </h3>

                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-200 text-sm ${
                          activeSection === section.id
                            ? "bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium shadow-md"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:bg-opacity-50 dark:hover:bg-opacity-50"
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            {/* Mobile dropdown for navigation */}
            <div className="lg:hidden mb-8">
              <label
                htmlFor="section-select"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Jump to section
              </label>
              <select
                id="section-select"
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark"
              >
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Privacy policy content */}
            <div className="backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-white border-opacity-30 dark:border-gray-700 dark:border-opacity-20 rounded-3xl shadow-xl p-8 md:p-12">
              {/* Title banner */}
              <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark text-white">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <FaShieldAlt size={24} />
                  </div>
                  <h1 className="text-3xl font-montserrat font-bold ml-4">
                    Boafo Extension Privacy Policy
                  </h1>
                </div>
                <p className="text-white text-opacity-90 font-ubuntu">
                  Effective Date: {effectiveDate}
                </p>
              </div>

              {/* Section: Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  1. Introduction
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    Welcome to <strong>Boafo</strong> ("the Extension"), a
                    comprehensive accessibility assistant designed to make web
                    browsing more inclusive. This Privacy Policy explains how we
                    collect, use, and protect your information when you use
                    Boafo.
                  </p>
                  <p>
                    By installing or using Boafo, you agree to the practices
                    described in this policy. If you do not agree, please
                    discontinue using the Extension.
                  </p>
                </div>
              </section>

              {/* Section: Information We Collect */}
              <section id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  2. Information We Collect
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    2.1 Non-Personal Information
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Extension Settings:</strong> We store user
                        preferences (e.g., language choices, speech rate, dark
                        mode preference) locally in your browser.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Usage Data (Optional):</strong> We may collect
                        anonymized information about feature usage (e.g.,
                        frequency of using certain tools) to improve the
                        Extension. This data does not identify you personally.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    2.2 Audio/Transcription Data
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        When you enable real-time transcription or translation,
                        audio input or text is processed on-the-fly to provide
                        the requested accessibility service.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        We do not permanently store or archive any audio or text
                        transcripts on our servers.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        Some features (e.g., text-to-speech, speech recognition)
                        may require sending data to third-party APIs (e.g.,
                        Google Cloud services). These services handle data only
                        for the duration needed to process your request and may
                        have their own privacy policies.
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    2.3 No Personal Data Collection
                  </h3>
                  <p>
                    Boafo does <strong>not</strong> collect personal identifiers
                    (such as name, email, or address) or track browsing history.
                    We only request permissions essential to deliver
                    accessibility features (e.g., "activeTab" for reading
                    on-page text).
                  </p>
                </div>
              </section>

              {/* Section: How We Use Your Information */}
              <section id="how-we-use" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Provide Accessibility Features:</strong> Your
                        input (text or audio) is processed in real-time to
                        deliver transcriptions, translations, screen reading, or
                        interface adjustments.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Enhance User Experience:</strong> We store
                        language preferences, brightness settings, and other
                        customizations locally so the Extension can remember
                        them whenever you browse.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Improve the Extension (Optional):</strong> If
                        collected, anonymized usage data may be used internally
                        to understand how users interact with Boafo's features
                        and to guide future updates.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section: Data Sharing and Disclosure */}
              <section id="data-sharing" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  4. Data Sharing and Disclosure
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    4.1 Third-Party APIs
                  </h3>
                  <p>
                    Boafo may send snippets of text or short audio segments to
                    external services (e.g., text-to-speech, translation, or
                    speech recognition APIs) strictly to fulfill your request.
                    These third-party services may have their own privacy
                    policies. We do not control their data handling practices
                    beyond what is necessary for the service to function.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    4.2 No Sale of Personal Data
                  </h3>
                  <p>
                    We do not sell or rent your information to third parties.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">
                    4.3 Legal Requirements
                  </h3>
                  <p>
                    We may disclose information if required by law or to comply
                    with a valid legal request.
                  </p>
                </div>
              </section>

              {/* Section: Third-Party Services */}
              <section id="third-party" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  5. Third-Party Services
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    Some of Boafo's functionalities rely on external services
                    (e.g., Google Cloud Text-to-Speech, speech recognition, or
                    translation APIs). We do not control these services' data
                    handling practices, and their use is subject to their
                    respective privacy policies. Please review those policies if
                    you have concerns about how they handle your data.
                  </p>
                </div>
              </section>

              {/* Section: Cookies */}
              <section id="cookies" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  6. Cookies
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    Boafo itself does not set or use cookies. However, if you
                    visit our official website (e.g.,{" "}
                    <a
                      href="https://boafo.co"
                      className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
                    >
                      boafo.co
                    </a>
                    ) or interact with embedded content, those sites or third
                    parties may use cookies. Refer to their cookie policies for
                    more information.
                  </p>
                </div>
              </section>

              {/* Section: Children's Privacy */}
              <section id="childrens-privacy" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  7. Children's Privacy
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    Boafo is not directed to children under the age of 13. We do
                    not knowingly collect personal information from children. If
                    you believe a child has provided personal data to us, please
                    contact us so we can remove it.
                  </p>
                </div>
              </section>

              {/* Section: Data Security */}
              <section id="data-security" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  8. Data Security
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    We take reasonable measures to protect the information
                    processed through the Extension:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Local Storage:</strong> Your settings are stored
                        in your browser's local storage, which is protected by
                        the browser's security model.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Secure Communication:</strong> When we send data
                        to third-party services, we use secure protocols (HTTPS)
                        to protect it in transit.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Limited Access:</strong> We request only those
                        permissions needed to provide accessibility features
                        (e.g., reading on-page text for TTS).
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    Despite these measures, no method of transmission or storage
                    is completely secure, and we cannot guarantee absolute
                    security.
                  </p>
                </div>
              </section>

              {/* Section: Changes to This Policy */}
              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  9. Changes to This Policy
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or services. If we make
                    material changes, we will notify you by updating the
                    "Effective Date" at the top of this document. We encourage
                    you to review this policy periodically.
                  </p>
                </div>
              </section>

              {/* Section: Your Choices */}
              <section id="your-choices" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  10. Your Choices
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Permission Revocation:</strong> You can manage
                        or revoke the Extension's permissions through your
                        browser's settings at any time.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mt-1.5 mr-3 text-primaryGreen-light dark:text-primaryGreen-dark">
                        <FaCheck size={14} />
                      </span>
                      <span>
                        <strong>Uninstalling the Extension:</strong> You can
                        remove Boafo from your browser if you no longer wish to
                        use it. Upon removal, all locally stored preferences and
                        data are deleted.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section: Contact Us */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-montserrat font-bold text-gray-800 dark:text-white mb-4">
                  11. Contact Us
                </h2>

                <div className="prose prose-lg dark:prose-invert max-w-none font-ubuntu text-gray-600 dark:text-gray-300">
                  <p>
                    If you have any questions or concerns regarding this Privacy
                    Policy or Boafo's data practices, please contact us at:
                  </p>
                  <p className="mt-4">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@boafoapp.com"
                      className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
                    >
                      {COMPANY_DATA.emails[0]}
                    </a>
                    <br />
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://boafo.co"
                      className="text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
                    >
                      https://boafo.co
                    </a>
                  </p>
                </div>
              </section>

              {/* Signature section */}
              <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      By installing or using Boafo, you acknowledge that you
                      have read and understood this Privacy Policy.
                    </p>
                  </div>
                  {/* <div className="mt-6 md:mt-0">
                    <div className="h-16 opacity-80 flex items-center justify-center">
                      <div className="w-48 h-12 bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark rounded-lg flex items-center justify-center text-white font-montserrat font-bold">
                        Digital Drivers Technology
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 text-center md:text-right">
                      Kofi Mensah
                      <br />
                      CEO, Digital Drivers Technology
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
