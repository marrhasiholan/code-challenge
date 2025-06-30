"use client";

import About from "@/components/about/page";
import Hero from "@/components/hero/page";
import Portfolio from "@/components/portfolio/page";
import Experience from "@/components/experience/page";
import Contact from "@/components/contact/page"


export default function HomePage() {
  return (
    <main>
      <Hero/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </main>
  );
}
