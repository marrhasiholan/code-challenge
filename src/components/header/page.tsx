"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/styles.css";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50"
    >
      <nav className="relative glassmorphism max-w-6xl mx-4 md:mx-auto mt-4 rounded-full p-4 flex justify-between items-center px-6">
        {/* Logo */}
        <Link
          href={"#"}
          className="w-15 h-15 md:w-24 md:h-24 block rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-1"
        >
          <img
            src="/avatar.jpg"
            alt="Logo"
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </Link>

        {/* Dekstop Menu */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <Link href={"#home"} className="hover:text-pink-500 transition">
            Home
          </Link>
          <Link href={"#portfolio"} className="hover:text-pink-500 transition">
            Portfolio
          </Link>
          <Link href={"#about"} className="hover:text-pink-500 transition">
            About
          </Link>
          <Link href={"#contact"} className="hover:text-pink-500 transition">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon ( Mobile Menu ) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6 hover:text-pink-500 transition" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full md:hidden left-0 right-0 bg-white/30 z-40 rounded-lg shadow-md max-w-6xl mx-auto mt-2 px-6 py-4 space-y-4 text-center backdrop-blur-md border-b border-gray-200 "
          >
            <Link
              href={"#home"}
              onClick={toggleMenu}
              className="block text-lg font-medium text-gray-700 hover:bg-pink-100 hover:text-pink-500 transition rounded-md px-4 py-2"
            >
              Home
            </Link>
            <Link
              href={"#portfolio"}
              onClick={toggleMenu}
              className="block text-lg font-medium text-gray-700 hover:bg-pink-100 hover:text-pink-500 transition rounded-md px-4 py-2"
            >
              Portfolio
            </Link>
            <Link
              href={"#about"}
              onClick={toggleMenu}
              className="block text-lg font-medium text-gray-700 hover:bg-pink-100 hover:text-pink-500 transition rounded-md px-4 py-2"
            >
              About
            </Link>
            <Link
              href={"#contact"}
              onClick={toggleMenu}
              className="block text-lg font-medium text-gray-700 hover:bg-pink-100 hover:text-pink-500 transition rounded-md px-4 py-2"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
