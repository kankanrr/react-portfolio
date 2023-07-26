import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  const imageURL = "./anton-maksimov-5642-su-MSzGw5V0ui8-unsplash.jpg";
  return (
    <main
      className="text-gray-400 bg-gray-900 body-font bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
