import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills = [
    { name: "HTML", img: "/logo/html.png" },
    { name: "CSS", img: "/logo/css.png" },
    { name: "JavaScript", img: "/logo/js.png" },
    { name: "React", img: "/logo/react.png" },
    { name: "Tailwind", img: "/logo/tailwind.png" },
    { name: "Bootstrap", img: "/logo/bootstrap" },
    { name: "GSAP", img: "/logo/gsap.png" },
    { name: "Node.js", img: "/logo/node.png" },
    { name: "Express.js", img: "/logo/express.png" },
    { name: "MongoDB", img: "/logo/mongo.png" },
    { name: "Git", img: "/logo/git.png" },
    { name: "Figma", img: "/logo/figma.png" },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      // 🔥 Cards animation
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      // 🔥 Scroll fade effect
      gsap.to(sectionRef.current, {
        y: -80,
        opacity: 0.6,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 🔥 3D tilt effect

      cardsRef.current.forEach((card) => {
        const handleMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(card, {
            rotationY: x * 0.03,
            rotationX: -y * 0.03,
            transformPerspective: 800,
            duration: 0.3,
          });
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);

        // 🔥 cleanup
        return () => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="skills"
      className="relative z-10 text-white pt-20 px-4 scroll-mt-32"
    >
      {" "}
      {/* Heading */}{" "}
      <div ref={headingRef} className="text-center mb-12">
        {" "}
        <h2 className="text-3xl md:text-5xl font-semibold">
          {" "}
          My <span className="text-[#DAC5A7]">Skills</span>{" "}
        </h2>{" "}
        <p className="text-white/60 mt-3">
          Technologies I use to build scalable applications
        </p>
      </div>{" "}
      {/* Grid */}{" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
        {" "}
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(218,197,167,0.25)]"
          >
            {" "}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl"></div>
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#DAC5A7]/10 via-white/10 to-[#DAC5A7]/10 blur-xl"></div>
            <img
              src={skill.img}
              alt={skill.name}
              loading="lazy"
              className=" w-14 h-14 object-contain mb-2 transition duration-500 group-hover:scale-110 group-hover:rotate-360 lazy-loading"
            />{" "}
            <h3 className=" text-sm md:text-base text-white/80 transition duration-300 group-hover:text-[#DAC5A7] group-hover:scale-115">
              {" "}
              {skill.name}{" "}
            </h3>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Skills;
