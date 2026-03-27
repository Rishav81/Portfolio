import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const names = [
    { heading: "1+", title: "Years Learning" },
    { heading: "10+", title: "Projects" },
    { heading: "Full Stack", title: "Development" },
    { heading: "Open", title: "To Work" },
  ];

  const hRef = useRef(null);
  const textContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // 🔥 Heading animation
      tl.fromTo(
        hRef.current,
        { y: 80, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
        },
      );

      // 🔥 Paragraph reveal
      tl.fromTo(
        textContainerRef.current.children,
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.8",
      );

      // 🔥 Cards animation (scale + pop)
      tl.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,

          duration: 0.8,
          stagger: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      );

      // 🔥 Scroll fade/parallax
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

      // 🔥 Card hover 3D tilt
      cardsRef.current.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(card, {
            rotationY: x * 0.05,
            rotationX: -y * 0.05,
            transformPerspective: 500,
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className="relative z-10 text-white pt-20 px-6 md:px-4 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          ref={hRef}
          className="text-4xl md:text-5xl font-semibold mb-12 text-center"
        >
          About <span className="text-[#DAC5A7]">Me</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div
            ref={textContainerRef}
            className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed text-center md:text-left"
          >
            <p>
              I’m <span className="text-white font-medium">Rishav</span>, a{" "}
              <span className="text-[#DAC5A7] font-medium">
                Full Stack Developer
              </span>{" "}
              building modern, scalable, and user-focused web applications.
            </p>

            <p>
              I focus on clean code and crafting smooth, engaging user
              experiences.
            </p>

            <p>
              I work with{" "}
              <span className="text-[#DAC5A7] font-medium">
                React, Node.js, MongoDB
              </span>{" "}
              and build real-world projects that solve actual problems.
            </p>

            <p>Always learning, always improving, always building 🚀</p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-4">
            {names.map((name, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(218,197,167,0.2)]"
              >
                <h3 className="text-2xl font-bold text-[#DAC5A7]">
                  {name.heading}
                </h3>
                <p className="text-white/60 text-xs uppercase tracking-wider">
                  {name.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
