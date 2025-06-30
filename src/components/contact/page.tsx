"user client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Dribbble,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Get In <span className="text-pink-300">Touch</span>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glassmorphism p-8 rounded-2xl shadow-lg w-full mx-auto text-white space-y-8"
      >
        <div className="md:flex md:justify-between md:items-start gap-10">
          {/* Contact Info */}
          <div className="space-y-6 mb-8 md:mb-0 md:w-1/2">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-600 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-white"></Mail>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>marrhasiholan@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-600 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-white"></Phone>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>+62 852-1585-1310</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-indigo-600 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-white"></MapPin>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:w-1/2">
            <h4 className="text-md font-semibold mb-3 text-white">
              Follow Me
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/marrhasiholan"
                target="_blank"
                className="bg-indigo-600 p-2 rounded-full hover:scale-110 transition"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                className="bg-pink-500 p-2 rounded-full hover:scale-110 transition"
              >
                <Dribbble className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="bg-pink-400 p-2 rounded-full hover:scale-110 transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
