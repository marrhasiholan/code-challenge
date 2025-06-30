"use client";

import About from "@/components/about/page";
import Hero from "@/components/hero/page";
import Portfolio from "@/components/portfolio/page";
import Skills from "@/components/skills/page";


export default function HomePage() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
    </main>
  );
}
