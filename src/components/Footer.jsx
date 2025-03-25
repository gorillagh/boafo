// src/components/sections/Footer.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { COMPANY_DATA } from "../constants/placeholder";
import LegalModal from "./LegalModal";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  // Legal content from the document
  const legalContent = {
    "Privacy Policy": (
      <>
        <h1 className="text-2xl font-bold mb-6">
          Boafo Extension Privacy Policy
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Introduction</h2>
        <p>
          Welcome to <strong>Boafo</strong> ("the Extension"), a comprehensive
          accessibility assistant designed to make web browsing more inclusive.
          This Privacy Policy explains how we collect, use, and protect your
          information when you use Boafo.
        </p>
        <p className="mt-2">
          By installing or using Boafo, you agree to the practices described in
          this policy. If you do not agree, please discontinue using the
          Extension.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          2. Information We Collect
        </h2>
        <h3 className="text-lg font-medium mt-4 mb-2">
          2.1 Non-Personal Information
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Extension Settings:</strong> We store user preferences
            (e.g., language choices, speech rate, dark mode preference) locally
            in your browser.
          </li>
          <li>
            <strong>Usage Data (Optional):</strong> We may collect anonymized
            information about feature usage (e.g., frequency of using certain
            tools) to improve the Extension. This data does not identify you
            personally.
          </li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">
          2.2 Audio/Transcription Data
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            When you enable real-time transcription or translation, audio input
            or text is processed on-the-fly to provide the requested
            accessibility service.
          </li>
          <li>
            We do not permanently store or archive any audio or text transcripts
            on our servers.
          </li>
          <li>
            Some features (e.g., text-to-speech, speech recognition) may require
            sending data to third-party APIs (e.g., Google Cloud services).
            These services handle data only for the duration needed to process
            your request and may have their own privacy policies.
          </li>
        </ul>

        <h3 className="text-lg font-medium mt-4 mb-2">
          2.3 No Personal Data Collection
        </h3>
        <p>
          Boafo does <strong>not</strong> collect personal identifiers (such as
          name, email, or address) or track browsing history. We only request
          permissions essential to deliver accessibility features (e.g.,
          "activeTab" for reading on-page text).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Provide Accessibility Features:</strong> Your input (text or
            audio) is processed in real-time to deliver transcriptions,
            translations, screen reading, or interface adjustments.
          </li>
          <li>
            <strong>Enhance User Experience:</strong> We store language
            preferences, brightness settings, and other customizations locally
            so the Extension can remember them whenever you browse.
          </li>
          <li>
            <strong>Improve the Extension (Optional):</strong> If collected,
            anonymized usage data may be used internally to understand how users
            interact with Boafo's features and to guide future updates.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          4. Data Sharing and Disclosure
        </h2>
        <h3 className="text-lg font-medium mt-4 mb-2">4.1 Third-Party APIs</h3>
        <p>
          Boafo may send snippets of text or short audio segments to external
          services (e.g., text-to-speech, translation, or speech recognition
          APIs) strictly to fulfill your request. These third-party services may
          have their own privacy policies. We do not control their data handling
          practices beyond what is necessary for the service to function.
        </p>

        <h3 className="text-lg font-medium mt-4 mb-2">
          4.2 No Sale of Personal Data
        </h3>
        <p>We do not sell or rent your information to third parties.</p>

        <h3 className="text-lg font-medium mt-4 mb-2">
          4.3 Legal Requirements
        </h3>
        <p>
          We may disclose information if required by law or to comply with a
          valid legal request.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          5. Third-Party Services
        </h2>
        <p>
          Some of Boafo's functionalities rely on external services (e.g.,
          Google Cloud Text-to-Speech, speech recognition, or translation APIs).
          We do not control these services' data handling practices, and their
          use is subject to their respective privacy policies. Please review
          those policies if you have concerns about how they handle your data.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">6. Cookies</h2>
        <p>
          Boafo itself does not set or use cookies. However, if you visit our
          official website (e.g.,{" "}
          <a
            href="https://boafo.co"
            className="text-primaryGreen-light dark:text-primaryGreen-dark"
          >
            boafo.co
          </a>
          ) or interact with embedded content, those sites or third parties may
          use cookies. Refer to their cookie policies for more information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          7. Children's Privacy
        </h2>
        <p>
          Boafo is not directed to children under the age of 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided personal data to us, please contact us so we can
          remove it.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">8. Data Security</h2>
        <p>
          We take reasonable measures to protect the information processed
          through the Extension:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong>Local Storage:</strong> Your settings are stored in your
            browser's local storage, which is protected by the browser's
            security model.
          </li>
          <li>
            <strong>Secure Communication:</strong> When we send data to
            third-party services, we use secure protocols (HTTPS) to protect it
            in transit.
          </li>
          <li>
            <strong>Limited Access:</strong> We request only those permissions
            needed to provide accessibility features (e.g., reading on-page text
            for TTS).
          </li>
        </ul>
        <p className="mt-2">
          Despite these measures, no method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or services. If we make material changes, we will
          notify you by updating the "Effective Date" at the top of this
          document. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">10. Your Choices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Permission Revocation:</strong> You can manage or revoke the
            Extension's permissions through your browser's settings at any time.
          </li>
          <li>
            <strong>Uninstalling the Extension:</strong> You can remove Boafo
            from your browser if you no longer wish to use it. Upon removal, all
            locally stored preferences and data are deleted.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">11. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or
          Boafo's data practices, please contact us at:
        </p>
        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:support@boafoapp.com"
            className="text-primaryGreen-light dark:text-primaryGreen-dark"
          >
            support@boafoapp.com
          </a>
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://boafo.co"
            className="text-primaryGreen-light dark:text-primaryGreen-dark"
          >
            https://boafo.co
          </a>
        </p>
        <p className="mt-4 font-semibold">
          By installing or using Boafo, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
      </>
    ),
    "Terms of Service": (
      <>
        <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          This Terms of Service document outlines the terms and conditions for
          using Boafo, a browser extension designed to make web browsing more
          accessible and inclusive.
        </p>
        <p className="font-medium">
          This is a placeholder for the Terms of Service content. The complete
          terms would include information about:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Acceptable use policies</li>
          <li>Intellectual property rights</li>
          <li>User responsibilities</li>
          <li>Disclaimer of warranties</li>
          <li>Limitation of liability</li>
          <li>Governing law and jurisdiction</li>
          <li>Termination policies</li>
          <li>Changes to terms</li>
        </ul>
      </>
    ),
    "Cookies Policy": (
      <>
        <h1 className="text-2xl font-bold mb-6">Cookies Policy</h1>
        <p className="mb-4">
          This Cookies Policy explains how Boafo and our website use cookies and
          similar technologies to recognize you when you visit our sites and use
          our services.
        </p>
        <p className="font-medium">
          This is a placeholder for the Cookies Policy content. The complete
          policy would include information about:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>What cookies are</li>
          <li>Types of cookies we use</li>
          <li>How we use cookies</li>
          <li>How to manage cookie preferences</li>
          <li>Third-party cookies</li>
          <li>Updates to this policy</li>
        </ul>
      </>
    ),
    Accessibility: (
      <>
        <h1 className="text-2xl font-bold mb-6">Accessibility Statement</h1>
        <p className="mb-4">
          Digital Drivers Technology is committed to ensuring digital
          accessibility for people with disabilities. We are continually
          improving the user experience for everyone and applying the relevant
          accessibility standards.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Conformance Status</h2>
        <p>
          The Web Content Accessibility Guidelines (WCAG) defines requirements
          for designers and developers to improve accessibility for people with
          disabilities. It defines three levels of conformance: Level A, Level
          AA, and Level AAA.
        </p>
        <p className="mt-2">
          Boafo is fully conformant with WCAG 2.1 level AA. Fully conformant
          means that the content fully conforms to the accessibility standard
          without any exceptions.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Feedback</h2>
        <p>
          We welcome your feedback on the accessibility of Boafo. Please let us
          know if you encounter accessibility barriers on Boafo by:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Email:{" "}
            <a
              href="mailto:accessibility@boafoapp.com"
              className="text-primaryGreen-light dark:text-primaryGreen-dark"
            >
              accessibility@boafoapp.com
            </a>
          </li>
          <li>Phone: +233 123 456 789</li>
          <li>Visitor address: North Legon, Accra, Ghana</li>
        </ul>
        <p className="mt-4">
          We try to respond to feedback within 5 business days.
        </p>
      </>
    ),
  };

  return (
    <footer className="pt-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 -z-10"></div>
      <div className="absolute inset-0 opacity-5 dark:opacity-10 -z-10">
        <div className="absolute top-0 w-full h-full bg-[url('/pattern-dots.png')] bg-repeat"></div>
      </div>

      {/* Decorative elements */}

      {/* Glass-like orbs */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primaryGreen-light dark:bg-primaryGreen-dark blur-3xl opacity-10 dark:opacity-5"
      /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-blue-400 dark:bg-blue-600 blur-3xl opacity-10 dark:opacity-5"
      />

      <div className="section-container relative z-10">
        {/* Main Footer Content */}
        <div className="backdrop-blur-sm bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-30 border border-white dark:border-gray-700 border-opacity-30 dark:border-opacity-20 rounded-3xl p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info Column */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center"
              >
                <div className="h-12 w-12 rounded-full overflow-hidden bg-transparent shadow-md">
                  <img
                    className="h-full w-full object-contain"
                    src="/logo-green.png"
                    alt="Boafo Logo"
                  />
                </div>
                <span className="ml-3 text-xl font-montserrat font-bold text-gray-900 dark:text-white">
                  Boafo
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-ubuntu text-gray-600 dark:text-gray-300"
              >
                Empowering independence online for all abilities, regardless of
                digital expertise or physical limitations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex space-x-3"
              >
                {[
                  {
                    icon: <FaXTwitter size={16} />,
                    label: "Twitter",
                    href: COMPANY_DATA.socials.x,
                  },
                  {
                    icon: <FaLinkedinIn size={16} />,
                    label: "LinkedIn",
                    href: COMPANY_DATA.socials.linkedin,
                  },
                  {
                    icon: <FaInstagram size={16} />,
                    label: "Instagram",
                    href: COMPANY_DATA.socials.instagram,
                  },
                ].map((social, index) => (
                  <a
                    target="_blank"
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-primaryGreen-light dark:hover:bg-primaryGreen-dark transition-all shadow-sm bg-white dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-30"
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Navigation Column */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"
              >
                Navigation
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                {["Home", "Features", "About", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`/#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-sm block py-1 relative group"
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Legal Column */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"
              >
                Legal
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4"
              >
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-sm block py-1 text-left w-full relative group"
                  >
                    <span>Privacy Policy</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                {[
                  // "Privacy Policy",
                  "Terms of Service",
                  "Cookies Policy",
                  "Accessibility",
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveModal(item)}
                      className="text-gray-600 dark:text-gray-400 hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors text-sm block py-1 text-left w-full relative group"
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryGreen-light dark:bg-primaryGreen-dark transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Column */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm font-montserrat font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6"
              >
                Contact
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-4 text-sm text-gray-600 dark:text-gray-400"
              >
                <li className="flex items-start">
                  <FaEnvelope className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-3" />
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-500 mb-1">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${COMPANY_DATA.emails[0]}`}
                      className="hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
                    >
                      {COMPANY_DATA.emails[0]}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-3" />
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-500 mb-1">
                      PHONE
                    </span>
                    <a
                      href={`tel:${COMPANY_DATA.phones[0]}`}
                      className="hover:text-primaryGreen-light dark:hover:text-primaryGreen-dark transition-colors"
                    >
                      {COMPANY_DATA.phones[0]}
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-3" />
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-500 mb-1">
                      ADDRESS
                    </span>
                    <span>{COMPANY_DATA.addresses[0].name}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-primaryGreen-light dark:text-primaryGreen-dark mt-1 mr-3" />
                  <div>
                    <span className="block text-xs text-gray-500 dark:text-gray-500 mb-1">
                      HOURS
                    </span>
                    <span>{COMPANY_DATA.workingHours}</span>
                  </div>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Digital Drivers Technology. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Legal Modals */}
      {Object.entries(legalContent).map(([title, content]) => (
        <LegalModal
          key={title}
          isOpen={activeModal === title}
          onClose={() => setActiveModal(null)}
          title={title}
          content={content}
        />
      ))}
    </footer>
  );
};

export default Footer;
