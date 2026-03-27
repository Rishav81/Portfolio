import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const navigate = useNavigate();

  const works = [
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
      tech: ["ESP32", "React", "IOT"],
    },
    {
      id: "gsap",
      name: "GSAP Work",
      desc: "High-performance animation UI",
      img: "/images/mocktail.jpg",
      tech: ["React", "GSAP"],
    },
  ];

  const sectionRef = useRef(null);
  const hRef = useRef(null);
  const cardsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    cardsRef.current = [];

    const ctx = gsap.context(() => {
      // 🔥 Heading Animation
      gsap.fromTo(
        hRef.current,
        { y: 100, opacity: 0, filter: "blur(15px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        },
      );

      // 🔥 EACH CARD ANIMATION (better than group)
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          },
        );
      });

      // 🔥 Section Parallax
      gsap.to(sectionRef.current, {
        y: -120,
        opacity: 0.4,
        filter: "blur(12px)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="work"
      className="relative z-10 [perspective:1200px] text-white pt-20 px-4 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="flex items-center justify-between mb-12">
          <h2 ref={hRef} className="text-3xl md:text-5xl font-semibold">
            My <span className="text-[#DAC5A7]">Work</span>
          </h2>

          <button
            onClick={() => navigate("/projects")}
            className="
      hidden md:flex items-center gap-2
      text-sm px-4 py-2 rounded-lg
      border border-white/10 bg-white/5 backdrop-blur-lg
      text-white/70

      transition-all duration-300
      hover:text-[#DAC5A7]
      hover:border-[#DAC5A7]/40
      hover:shadow-lg
      hover:scale-105
    "
          >
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              ref={addToRefs}
              onClick={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 0.95,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                  onComplete: () => navigate(`/project/${work.id}`),
                });
              }}
              className={`
                group cursor-pointer relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/5 backdrop-blur-lg
                transition-all duration-500
                 hover:scale-[1.02]
                hover:shadow-2xl
                ${work.featured ? "md:col-span-2 lg:col-span-2" : ""}
              `}
            >
              {/* Featured Badge */}
              {work.featured && (
                <span className="absolute top-3 left-3 z-10 text-xs px-2 py-1 bg-[#DAC5A7] text-black rounded-md">
                  Featured
                </span>
              )}

              {/* Image */}
              <img
                src={work.img}
                alt={work.name}
                loading="lazy"
                className="w-full h-60 object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[1deg] "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 translate-y-full group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-semibold mb-1 transition duration-300 group-hover:-translate-y-1">
                  {work.name}
                </h3>

                <p className="text-sm text-white/70 mb-3 transition duration-300 delay-75 group-hover:-translate-y-1">
                  {work.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-white/10 text-white/70"
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
    </div>
  );
};

export default Work;
