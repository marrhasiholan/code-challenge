import "../styles/styles.css";

export default function About() {
  return (
    <section id="about" className="max-6-wl mx-auto px-4 py-10">
      <div className="md: w-1/2 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 py-3">
        <h2>
          About <span className="text-pink-300">Me</span>
        </h2>
      </div>
      <div className="tracking-normal leading-6.5 text-gray-300 text-start">
        <p>
          I am a driven Frontend Developer passionate about crafting intuitive
          and visually stunning web experiences. My expertise lies in modern
          JavaScript frameworks, specifically React, Next.js, allowing me to
          create dynamic and scalable applications. Beyond the screen, I find
          balance in practicing photography or experimenting with new recipes in
          the kitchen. My professional philosophy centers on constant growth and
          adapting to the ever-evolving landscape of web development.
        </p>
      </div>
    </section>
  );
}
