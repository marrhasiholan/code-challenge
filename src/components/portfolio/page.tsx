"use client"

import "../styles/styles.css";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" text-3xl font-bold mb-12 text-center"
      >
        My <span className="text-pink-300">Projects</span>
      </motion.h2>
      <div className="glassmorphism grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-2xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
