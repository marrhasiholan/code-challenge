"use client";
import "../styles/styles.css";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        About <span className="text-pink-300">Me</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Skills Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6">My Skills</h3>
          <div className="space-y-6 font-semibold">
            <div>
              <div className="flex justify-between mb-1">
                <span>HTML / CSS</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>JavaScript, React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>PHP, Laravel</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200"
        >
          <h3 className="text-xl font-semibold mb-4">Who Am I?</h3>
          <p className="mb-4 leading-relaxed">
            I am a driven Frontend Developer passionate about crafting intuitive
            and visually stunning web experiences. My expertise lies in modern
            JavaScript frameworks, specifically React and Next.js, allowing me to
            create dynamic and scalable applications.
          </p>
          <p className="mb-6 leading-relaxed">
            Beyond the screen, I find balance in practicing photography or experimenting
            with new recipes in the kitchen. My professional philosophy centers on
            constant growth and adapting to the ever-evolving landscape of web development.
          </p>

          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center text-pink-300 hover:text-pink-400 transition font-semibold"
          >
            Download CV <span className="ml-2">⬇️</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}