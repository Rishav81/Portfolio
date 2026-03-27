import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { id } = useParams();

  const sectionRef = useRef(null);
  const hRef = useRef(null);
  const contentRef = useRef(null);

  // 🔥 Your Project Data
  const projects = {
    stayfinder: {
      name: "StayFinder",
      desc: "Airbnb inspired rental platform",
      longDesc:
        "StayFinder is a full-stack rental platform where users can explore, book, and list properties. It focuses on clean UI, performance, and real-world functionality like authentication and database management.",
      img: "/images/StayFinder.jpg",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Mongoose",
        "EJS",
        "TailwindCSS",
        "Architecture",
      ],
      features: [
        "User authentication & authorization",
        "Property listing system (Host)",
        "Booking functionality (User)",
        "Responsive UI design",
        "Profile Management",
      ],
      github: "https://github.com/Rishav81/airbnb.git",
    },

    smartsight: {
      name: "SmartSight",
      desc: "Wearable tech for visually impaired",
      longDesc:
        "SmartSight is a wearable device designed to assist visually impaired users with obstacle detection, GPS navigation, and real-time alerts using ESP32 and sensors.",
      img: "/images/smartSight.png",
      tech: ["ESP32", "React", "IoT"],
      features: [
        "Obstacle detection",
        "GPS navigation",
        "Voice alerts",
        "Solar Panel Support",
        "Water detection system",
        "Eco-Friendly Materials",
      ],
      github: "https://github.com/Rishav81/SmartSight.git",
    },

    gsap: {
      name: "GSAP (MOCKTAIL)",
      desc: "High-performance animation UI",
      longDesc:
        "A modern portfolio built using GSAP animations, focusing on smooth UI transitions, performance, and premium user experience. It is my learning phase of gsap where i follow some instruction of instructor and building a good UI with gsap.",
      img: "/images/mocktail.jpg",
      tech: ["React", "GSAP", "Tailwind"],
      features: [
        "Smooth animations",
        "Scroll-based effects",
        "Responsive design",
        "Uses of animation",
      ],
      github: "https://github.com/Rishav81/GSAP-Cocktail.git",
    },
  };

  const project = projects[id];

  // 🔥 Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!project) {
    return (
      <div className="text-white text-center mt-20">Project not found 🚫</div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className="min-h-screen text-white bg-[radial-gradient(circle_at_30%_30%,#1a1a1a,#000)] px-4 pt-10 relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,197,167,0.12),transparent_70%)]" />
      <div className="max-w-7xl mx-auto">
        {/* 🔥 Hero Image */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={project.img}
            alt={project.name}
            loading="lazy"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
        </div>

        {/* 🔥 Title */}
        <h1 ref={hRef} className="text-3xl md:text-5xl font-semibold mb-4">
          {project.name}
        </h1>

        {/* 🔥 Short Desc */}
        <p className="text-white/70 mb-6">{project.desc}</p>

        {/* 🔥 Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-md bg-white/10 text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* 🔥 Long Description */}
        <div ref={contentRef} className="space-y-6">
          <p className="text-white/70 leading-relaxed">{project.longDesc}</p>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#DAC5A7]">
              Key Features
            </h3>

            <ul className="space-y-2 text-white/70">
              {project.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href={project.github}
              target="_blank"
              className="px-6 py-2.5 rounded-lg border border-white/20 text-white transition hover:bg-white/10 duration-300"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
