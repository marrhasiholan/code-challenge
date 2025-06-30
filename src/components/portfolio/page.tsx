import "../styles/styles.css";
import { project } from "@/data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className=" text-3xl font-bold mb-12 text-center">
        My <span className="text-pink-300">Projects</span>
      </h2>
      <div className="md:grid-cols-2 lg: grid-cols-3 gap-8">
        <div className="glassmorphism p-6 rounded-2xl hover:shadow-lg transition">
          <div className="mb-4 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Project"
              className="w-full h-48 object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <h3></h3>
        </div>
      </div>
    </section>
  );
}
