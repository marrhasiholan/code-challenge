"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}