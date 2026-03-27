import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Projects = () => {
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const hRef = useRef(null);
  const cardsRef = useRef([]);

  // 🔥 Project Data
  const projects = [
    {
      id: "stayfinder",
      name: "StayFinder",
      desc: "Airbnb inspired rental platform",
      img: "/images/StayFinder.jpg",
      tech: ["React", "Node", "MongoDB"],
      featured: true,
    },
    {
      id: "smartsight",
      name: "SmartSight",
      desc: "Wearable tech for visually impaired",
      img: "/images/smartSight.png",
      tech: ["ESP32", "React"],
    },
    {
      id: "gsap",
      name: "GSAP Portfolio",
      desc: "High-performance animation UI",
      img: "/images/mocktail.jpg",
      tech: ["React", "GSAP"],
    },
    {
      id: "uber",
      name: "Uber Clone",
      desc: "Ride booking UI clone",
      img: "/images/uber.jpg",
      tech: ["React"],
    },
    {
      id: "currency",
      name: "Currency Converter",
      desc: "Live exchange rates app",
      img: "/images/currency.jpg",
      tech: ["JS", "API"],
    },
    {
      id: "gym",
      name: "Gym Website",
      desc: "Modern fitness landing page",
      img: "/images/gym.jpg",
      tech: ["HTML", "CSS"],
    },
  ];

  // 🔥 Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        hRef.current,
        { y: 80, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "expo.out",
        },
      );

      // Cards (one-by-one reveal)
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen text-white bg-[radial-gradient(circle_at_30%_30%,#1a1a1a,#000)] pt-10 px-4 relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,197,167,0.12),transparent_70%)]" />
      <div className="max-w-7xl mx-auto">
        {/* 🔥 Heading */}
        <h2
          ref={hRef}
          className="text-3xl md:text-5xl font-semibold mb-12 text-center"
        >
          All <span className="text-[#DAC5A7]">Projects</span>
        </h2>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => navigate(`/project/${project.id}`)}
              className={`
                group cursor-pointer relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-lg

                transition-all duration-500
                hover:-translate-y-3 hover:scale-[1.02]
                hover:shadow-2xl

                ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}
              `}
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.name}
                loading="lazy"
                className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>

                <p className="text-sm text-white/70 mb-3">{project.desc}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#DAC5A7]/10 via-white/5 to-[#DAC5A7]/10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
