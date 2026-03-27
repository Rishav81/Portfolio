import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePages = () => {
  return (
    <div
      className="
  min-h-screen 
  bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#000]
  relative
"
    >
      <div className="absolute inset-0 bg-white/5 opacity-[0.03] pointer-events-none"></div>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePages;
