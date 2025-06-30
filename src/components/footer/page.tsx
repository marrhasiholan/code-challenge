"use client";

export default function Footer() {
  return (
    <footer className="mt-20 px-4 py-8 text-sm text-white bg-white/10 backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Kiri: Nama dan copyright */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg mb-2">Maxy Developer</p>
          <p className="text-gray-300">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Kanan: Navigasi halaman */}
        <div className="flex gap-6">
          <a href="#home" className="hover:text-pink-300 transition">Home</a>
          <a href="#about" className="hover:text-pink-300 transition">About</a>
          <a href="#portfolio" className="hover:text-pink-300 transition">Projects</a>
          <a href="#contact" className="hover:text-pink-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}