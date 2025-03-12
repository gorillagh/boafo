import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { COMPANY_DATA } from "../../../constants/placeholder";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      title: "Email",
      value: COMPANY_DATA.emails[0],
      action: `mailto:${COMPANY_DATA.emails[0]}`,
    },
    {
      icon: <FaPhone size={20} />,
      title: "Phone",
      value: COMPANY_DATA.phones[0],
      action: `tel:+233202621904`,
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Office",
      value: COMPANY_DATA.addresses[0].name,
      action: `https://maps.google.com/?q=${COMPANY_DATA.addresses[0].name}`,
    },
  ];

  const socialLinks = [
    {
      icon: <FaXTwitter />,
      label: "Twitter",
      href: COMPANY_DATA.socials.x,
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: COMPANY_DATA.socials.linkedin,
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: COMPANY_DATA.socials.instagram,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background with solid colors for better contrast */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-850 -z-10"></div>

      {/* Design accent - diagonal section */}
      {/* <div className="absolute top-0 right-0 w-1/3 h-full bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 -z-5 skew-x-12 transform origin-top-right"></div> */}

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-gray-900 dark:text-white">
              We're Here to Help
            </h2>
            <p className="font-ubuntu text-lg text-gray-700 dark:text-gray-300">
              Have questions about Boafo? Our team is ready to assist you.
            </p>
          </motion.div>
        </div>

        {/* Contact Layout */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Contact Information Column */}
            <div className="lg:col-span-4 bg-primaryGreen-light dark:bg-primaryGreen-dark text-white p-8 md:p-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-montserrat font-bold text-2xl mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      href={info.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center group"
                    >
                      <div className="w-12 h-12   flex items-center justify-center mr-4 group-hover:bg-opacity-30 transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg">
                          {info.title}
                        </h4>
                        <p className="font-ubuntu text-white text-opacity-90">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="font-montserrat font-semibold text-lg mb-4">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        target="_blank"
                        key={index}
                        href={social.href}
                        whileHover={{ y: -5 }}
                        className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8 p-8 md:p-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-montserrat font-bold text-2xl mb-6 text-gray-900 dark:text-white">
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 rounded-3xl p-8 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 dark:bg-opacity-50 rounded-full mb-4">
                      <FaCheckCircle className="text-green-600 dark:text-green-400 text-3xl" />
                    </div>
                    <h4 className="font-montserrat font-semibold text-xl mb-2 text-gray-900 dark:text-white">
                      Message Sent Successfully!
                    </h4>
                    <p className="font-ubuntu text-gray-700 dark:text-gray-300">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark text-gray-900 dark:text-white"
                          required
                          aria-label="Your name"
                          placeholder="Yaw Davour"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark text-gray-900 dark:text-white"
                          required
                          aria-label="Your email"
                          placeholder="davour@example.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-primaryGreen-light dark:focus:ring-primaryGreen-dark text-gray-900 dark:text-white"
                        required
                        aria-label="Your message"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-primaryGreen-light dark:bg-primaryGreen-dark text-white font-medium rounded-full shadow-md hover:bg-primaryGreen-hover-light dark:hover:bg-primaryGreen-hover-dark transition-all flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" /> Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Business Hours and FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 border-t-4 border-primaryGreen-light dark:border-primaryGreen-dark"
          >
            <h4 className="font-montserrat font-bold text-xl mb-4 text-gray-900 dark:text-white">
              Business Hours
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-ubuntu text-gray-700 dark:text-gray-300">
                  Monday - Friday
                </span>
                <span className="font-ubuntu font-medium text-gray-900 dark:text-white">
                  9:00 AM - 5:00 PM (GMT)
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="font-ubuntu text-gray-700 dark:text-gray-300">
                  Saturday
                </span>
                <span className="font-ubuntu font-medium text-gray-900 dark:text-white">
                  10:00 AM - 2:00 PM (GMT)
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-ubuntu text-gray-700 dark:text-gray-300">
                  Sunday
                </span>
                <span className="font-ubuntu font-medium text-gray-900 dark:text-white">
                  Closed
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-6 border-t-4 border-primaryGreen-light dark:border-primaryGreen-dark"
          >
            <h4 className="font-montserrat font-bold text-xl mb-4 text-gray-900 dark:text-white">
              Need More Help?
            </h4>
            <p className="font-ubuntu text-gray-700 dark:text-gray-300 mb-6">
              Check our detailed FAQ section for answers to common questions
              about Boafo's features and integration.
            </p>
            <motion.a
              href="#faqs"
              whileHover={{ translateX: 5 }}
              className="inline-flex items-center font-medium text-primaryGreen-light dark:text-primaryGreen-dark hover:underline"
            >
              View FAQs
              <svg
                className="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
