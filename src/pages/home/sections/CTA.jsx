import { motion } from "framer-motion";
import { FaRocket, FaHeadset, FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with dynamic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryGreen-light via-primaryGreen-hover-light to-primaryGreen-light dark:from-primaryGreen-dark dark:via-primaryGreen-hover-dark dark:to-primaryGreen-dark z-0"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern-dots-white.png')] bg-repeat opacity-5 mix-blend-overlay z-0"></div>

      {/* Floating orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-white blur-3xl opacity-10 mix-blend-overlay"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-white blur-3xl opacity-10 mix-blend-overlay"
      />

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout for desktop, stacked for mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CTA Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="backdrop-blur-xl bg-white bg-opacity-10 dark:bg-opacity-5 border border-white border-opacity-20 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                {/* Glass shine effect */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-10 blur-xl"></div>

                <span className="inline-block py-1 px-4 backdrop-blur-sm bg-white bg-opacity-30 dark:bg-opacity-10 rounded-full text-white text-sm font-medium mb-6">
                  GET STARTED TODAY
                </span>

                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
                  Ready to Make Digital Experiences{" "}
                  <span className="relative inline-block">
                    Accessible
                    <motion.span
                      initial={{ width: "100%" }}
                      whileInView={{ width: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                      className="absolute bottom-0 left-0 h-1 bg-white"
                    />
                  </span>{" "}
                  for All?
                </h2>

                <p className="font-ubuntu text-lg text-white text-opacity-90 mb-8">
                  Join Boafo today and empower independence online. Our
                  extension seamlessly integrates with your digital experience,
                  opening up a world of accessibility at your fingertips.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: <FaRocket />, text: "Quick and easy integration" },
                    { icon: <FaHeadset />, text: "24/7 technical support" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                      className="flex items-center"
                    >
                      <div className="mr-3 text-white bg-white bg-opacity-20 rounded-full p-2">
                        {item.icon}
                      </div>
                      <p className="text-white">{item.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primaryGreen-dark font-medium py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                    <FaArrowRight className="ml-2" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="backdrop-blur-md bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center"
                  >
                    Request Demo
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Interactive 3D Device Display */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="relative max-w-md">
                {/* Decorative elements */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20 rounded-3xl"></div> */}

                {/* Main device frame */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className=" bg-transparent  rounded-3xl  shadow-2xl">
                    <div className="relative rounded-xl overflow-hidden bg-transparent">
                      <img
                        src="/illustrations/CTA.webp"
                        alt="Boafo in action on various devices"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
