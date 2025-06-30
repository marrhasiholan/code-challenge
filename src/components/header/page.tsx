import "../styles/styles.css"

export default function Header() {
  return (
    <header className="sticky top-4">
      <nav className="glassmorphism max-w-6xl mx-auto mt-4 rounded-full p-4 flex justify-between items-center">
        <div className="w-15 h-15 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-1">
          <img src="/avatar.jpg" alt="Logo" className="w-full h-full rounded-full object-cover border-4 border-white"/>
        </div>

        {/* Dekstop Menu */}
        <div className="md:flex space-x-6 ">
          <a href="#home" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
