export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10"
    >
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-pink-300">Maxy</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
          Software Engineer
        </h2>
        <p className="mb-8 text-gray-300">
          I am an adept web developer committed to engineering elegant,
          performance-driven, and fully responsive websites that stand out in
          today's dynamic digital landscape. Leveraging cutting-edge
          technologies and best practices, I deliver tailored web solutions
          designed to provide exceptional user experiences and meet the evolving
          demands of modern businesses.
        </p>
        <div className="flex gap-4">
          <button
            id="portfolio"
            className="bg-pink-500 hover:bg-pink-700 border-none rounded-full mx-auto my-3 px-7 py-3 transition"
          >
            View My Portfolio
          </button>
          <button
            id="contact"
            className="border border-white hover:bg-white hover:text-black mx-auto my-3 px-7 py-3 rounded-full transition"
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-1">
          <img
            src="/avatar.jpg"
            alt="Photo"
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}
