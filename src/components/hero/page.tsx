"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
    >
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-pink-300">Maxy</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
          Full-Stack Web Developer
        </h2>
        <p className="mb-8 text-gray-300 text-sm md:text-base">
          I am an adept web developer committed to engineering elegant,
          performance-driven, and fully responsive websites that stand out in
          today's dynamic digital landscape. Leveraging cutting-edge
          technologies and best practices, I deliver tailored web solutions
          designed to provide exceptional user experiences and meet the evolving
          demands of modern businesses.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button
            id="portfolio"
            className="bg-pink-500 hover:bg-pink-700 font-medium rounded-full px-6 py-3 transition"
          >
            View My Portfolio
          </button>
          <button
            id="contact"
            className="border border-white hover:bg-white hover:text-black font-medium px-7 py-3 rounded-full transition"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-1">
          <img
            src="/avatar.jpg"
            alt="Photo"
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
