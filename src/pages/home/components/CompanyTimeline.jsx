import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHistory } from "react-icons/fa";

const CompanyTimeline = () => {
  const containerRef = useRef(null);

  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "Digital Drivers Technology was founded in Accra with a mission to make technology accessible to all.",
      image: "/timelines/beginning.webp",
      imageAlt: "Founding team at the first office in Accra",
      highlight: "Started with just 3 team members and a shared vision",
    },
    {
      year: "2020",
      title: "First Prototype",
      description:
        "The first version of Boafo was developed to address accessibility challenges in e-commerce.",
      image: "/timelines/first-prototype.webp",
      imageAlt: "Team working on Boafo prototype",
      highlight: "Over 200 hours of user research with diverse ability groups",
    },
    {
      year: "2021",
      title: "Community Partnership",
      description:
        "Partnered with local disability organizations to refine and enhance our accessibility solutions.",
      image: "/timelines/community-partnership.webp",
      imageAlt: "Partnership signing ceremony with community organizations",
      highlight: "Established 5 key partnerships across Ghana",
    },
    {
      year: "2022",
      title: "Launch & Recognition",
      description:
        "Official launch of Boafo followed by recognition at the Ghana Technology Awards.",
      image: "/timelines/launch-recognition.webp",
      imageAlt: "Team receiving award at Ghana Technology Awards",
      highlight: "Won 'Most Innovative Accessibility Solution' award",
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Expanded operations across West Africa, helping thousands access e-commerce platforms.",
      image: "/timelines/expansion.webp",
      imageAlt: "New office opening in West Africa",
      highlight: "Now serving over 15,000 users across 5 countries",
    },
    {
      year: "2024",
      title: "Global Accessibility Revolution",
      description:
        "Boafo expanded from e-commerce to global digital accessibility. We now support the entire web with advanced AI tools, local language support (Twi, Frafra, French, Spanish, Dutch, and more), and adaptive interfaces. New international partnerships reinforce our commitment to making technology accessible for everyone.",
      image: "/timelines/future.webp",
      imageAlt: "",
      highlight: "Bringing accessibility to the entire digital world",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative backdrop-blur-xl bg-white dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-20 border border-white border-opacity-40 dark:border-gray-700 rounded-2xl p-8 shadow-lg overflow-hidden"
      ref={containerRef}
    >
      {/* Custom background patterns */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Light mode patterns */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-green-50 dark:from-transparent dark:to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.png')] bg-repeat opacity-5 dark:opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primaryGreen-light dark:bg-primaryGreen-dark rounded-full filter blur-3xl opacity-5 dark:opacity-10 -z-10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full filter blur-3xl opacity-5 dark:opacity-10 -z-10"></div>
      </div>
      <div className="flex items-center justify-center mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent w-1/4"></div>
        <div className="mx-4 flex items-center">
          <FaHistory className="text-primaryGreen-light dark:text-primaryGreen-dark mr-2" />
          <h3 className="font-montserrat font-semibold text-2xl text-gray-800 dark:text-white">
            Our Journey
          </h3>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primaryGreen-light dark:via-primaryGreen-dark to-transparent w-1/4"></div>
      </div>

      {/* Custom timeline with side-by-side layout */}
      <div className="space-y-24 relative">
        {/* Central timeline line with gradient */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primaryGreen-light via-blue-400 to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:via-blue-500 dark:to-primaryGreen-hover-dark transform -translate-x-1/2 rounded-full"></div>

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Year indicator that breaks the timeline */}
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
              className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-4 z-20"
            >
              <div className="bg-gradient-to-r from-primaryGreen-light to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:to-primaryGreen-hover-dark text-white font-bold text-lg px-5 py-2 rounded-full shadow-lg">
                {event.year}
              </div>
            </motion.div>

            {/* Content row with image and text side by side */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 pt-10`}
            >
              {/* Image side */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="md:w-1/2"
              >
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-primaryGreen-light dark:bg-primaryGreen-dark opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primaryGreen-light to-transparent dark:from-primaryGreen-dark opacity-40 rounded-tl-3xl"></div>
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                className="md:w-1/2"
              >
                <div
                  className={`bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-70 backdrop-blur-sm border border-gray-100 dark:border-gray-800 p-6 rounded-xl shadow-md ${
                    index % 2 === 0 ? "md:ml-6" : "md:mr-6"
                  } relative`}
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primaryGreen-light via-blue-400 to-primaryGreen-hover-light dark:from-primaryGreen-dark dark:via-blue-500 dark:to-primaryGreen-hover-dark rounded-t-xl"></div>
                  <h4 className="font-montserrat font-semibold text-xl mb-3 text-gray-800 dark:text-white">
                    {event.title}
                  </h4>
                  <p className="font-ubuntu text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  {/* Highlight fact */}
                  <div className="mt-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-primaryGreen-light dark:border-primaryGreen-dark p-3 rounded-r-md">
                    <p className="font-ubuntu italic text-sm text-gray-600 dark:text-gray-400">
                      {event.highlight}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future milestone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-primaryGreen-light dark:bg-primaryGreen-dark bg-opacity-10 dark:bg-opacity-20 border border-primaryGreen-light dark:border-primaryGreen-dark border-opacity-30 rounded-full px-6 py-3">
          <span className="text-primaryGreen-light dark:text-primaryGreen-dark font-medium">
            Our story continues as we work toward digital inclusion for all...
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CompanyTimeline;
