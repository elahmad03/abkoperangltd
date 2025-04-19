import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      name="contact"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold sm:font-extrabold mb-8 sm:mb-10 text-gray-900 dark:text-white"
        >
          Contact <span className="text-blue-600 dark:text-blue-400">Us</span>
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl mx-auto text-left"
        >
          <li className="flex items-start gap-3 sm:gap-4">
            <FaHome className="mt-0.5 sm:mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0 text-lg sm:text-xl" />
            <span className="break-words">
              No. 109 Modibbo Adama Way, Yola South, Adamawa State, Nigeria.
            </span>
          </li>

          <li className="flex items-start gap-3 sm:gap-4">
            <FaEnvelope className="mt-0.5 sm:mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0 text-lg sm:text-xl" />
            <a
              href="mailto:Aliyuabubakarmuhammed@gmail.com"
              className="hover:underline break-all"
            >
              Aliyuabubakarmuhammed@gmail.com
            </a>
          </li>

          <li className="flex items-start gap-3 sm:gap-4">
            <FaPhone className="mt-0.5 sm:mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0 text-lg sm:text-xl" />
            <a href="tel:+2348138804305" className="hover:underline">
              +234 813 880 4305
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}