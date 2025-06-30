"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Experience
        </h2>
        <p className="mt-4 text-gray-200">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      <motion.div
        className="glassmorphism p-6 md:p-8 rounded-2xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <img
            src="/upwork-logo.png"
            alt="Upwork Logo"
            className="w-24 md:w-28"
          />
        </div>

        {/* Job Details */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-white">
            Full Stack Developer
          </h3>
          <ul className="list-disc list-inside text-gray-200 text-sm mt-2 space-y-1">
            <li>
              Designed and implemented end-to-end web applications, covering
              intricate front-end interfaces and powerful back-end services.
            </li>
            <li>
              Streamlined development workflows by integrating modern build
              tools and continuous delivery pipelines.
            </li>
            <li>
              Boosted application responsiveness and ensured cross-browser
              compatibility, significantly enhancing the overall user
              experience.
            </li>
            <li>
              Authored clean, modular, and extensively tested code, adhering to
              industry standards and fostering collaborative development.
            </li>
          </ul>
        </div>

        {/* Date */}
        <div className="text-sm text-right text-gray-400">
          <p>Jan 2025 - Present</p>
        </div>
      </motion.div>
    </section>
  );
}
