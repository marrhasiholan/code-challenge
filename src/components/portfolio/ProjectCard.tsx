"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  star,
}: ProjectProps) {
  const [showStar, setShowStar] = useState(false);

  return (
    <div className="p-5 rounded-2xl shadow-lg text-white max-w-sm mx-auto">
      {/* Gambar Project */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4 transition duration-300 ease-in-out hover:scale-105"
      />
      {/* Judul */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Deskripsi */}
      <p className="text-sm text-gray-200 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tombol STAR */}
      <button
        onClick={() => setShowStar(!showStar)}
        className="text-sm text-pink-300 hover:underline transition mb-2"
      >
        {showStar ? "Hide Details" : "View STAR Details →"}
      </button>

      <AnimatePresence>
        {showStar && (
          <motion.div
            className="bg-white/10 rounded-xl p-4 text-sm mt-2 space-y-2"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <strong>Situation:</strong> <p>{star.situation}</p>
            </div>
            <div>
              <strong>Task:</strong> <p>{star.task}</p>
            </div>
            <div>
              <strong>Action:</strong> <p>{star.action}</p>
            </div>
            <div>
              <strong>Result:</strong> <p>{star.result}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ); 
}
    