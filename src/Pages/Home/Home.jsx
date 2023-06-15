import React from "react";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
