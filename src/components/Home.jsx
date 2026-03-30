import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const bgRef = useRef(null);
  const hRef = useRef(null);
  const pRef = useRef(null);
  const btnsRef = useRef([]);
  const sectionRef = useRef(null);

  const addToBtnRefs = (el) => {
    if (el && !btnsRef.current.includes(el)) {
      btnsRef.current.push(el);
    }
  };

  useEffect(() => {
    const splitH = new SplitType(hRef.current, { types: "chars" });
    const splitP = new SplitType(pRef.current, { types: "chars, words" });

    const ctx = gsap.context(() => {
      const allChars = [...splitH.chars, ...splitP.chars];

      gsap.set(allChars, {
        display: "inline-block",
        willChange: "transform, opacity",
      });

      gsap.set([hRef.current, pRef.current], { opacity: 1 });
      gsap.set(allChars, { opacity: 0 });
      gsap.set(btnsRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // 🔥 Background cinematic entry
      tl.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2 },
      );

      // 🔥 Text animation (controlled cinematic)
      tl.fromTo(
        allChars,
        {
          opacity: 0,
          y: () => gsap.utils.random(50, 120),
          x: () => gsap.utils.random(-150, 150),
          rotationX: () => gsap.utils.random(-90, 90),
          scale: 0.8,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotationX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: {
            each: 0.02,
            from: "random",
          },
        },
        "-=1",
      );

      // 🔥 Buttons reveal
      tl.to(
        btnsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
        },
        "-=0.8",
      );

      // 🔥 Name glow pulse
      gsap.to(".name-glow", {
        textShadow: "0 0 20px rgba(218,197,167,0.8)",
        repeat: -1,
        yoyo: true,
        duration: 1.5,
      });

      // 🔥 Scroll exit animation
      gsap.to(sectionRef.current, {
        scale: 0.9,
        opacity: 0,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 🔥 Background parallax
      gsap.to(bgRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 🔥 Mouse parallax
      const moveHandler = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 40;
        const y = (e.clientY / innerHeight - 0.5) * 40;

        gsap.to(hRef.current, {
          x,
          y,
          duration: 0.5,
        });
      };

      window.addEventListener("mousemove", moveHandler);

      // 🔥 Magnetic buttons
      btnsRef.current.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
        });
      });

      return () => {
        window.removeEventListener("mousemove", moveHandler);
      };
    }, sectionRef);

    return () => {
      ctx.revert();
      splitH.revert();
      splitP.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-black [perspective:1200px]"
    >
      {/* 🔥 Premium Gradient Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1a1a1a,#000)]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,197,167,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen px-4">
        {/* Tag */}
        <span className="text-xs tracking-[0.3em] uppercase text-[#DAC5A7]/70 mb-4">
          FULL STACK DEVELOPER
        </span>

        {/* 🔥 Extra line */}
        <p className="text-sm text-[#DAC5A7] mb-2">
          Turning ideas into real-world products 🚀
        </p>

        {/* Heading */}
        <h1
          ref={hRef}
          className="text-4xl md:text-6xl font-semibold leading-tight mb-6 max-w-4xl"
        >
          Hi, I’m <span className="name-glow text-[#DAC5A7]">RISHAV</span> — I
          build{" "}
          <span className="bg-gradient-to-r from-[#DAC5A7] via-white to-[#DAC5A7] bg-clip-text ">
            modern web apps
          </span>
        </h1>

        {/* Description */}
        <p
          ref={pRef}
          className="max-w-xl text-white/70 text-base md:text-lg mb-8"
        >
          I design and develop high-performance web applications using React,
          Node.js, and modern tools. Currently building real-world projects that
          solve practical problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            ref={addToBtnRefs}
            href="/Resume/Smart Sight PAPER final (1).docx"
            target="_blank"
            className="cursor-pointer px-6 py-3 rounded-lg bg-gradient-to-r from-[#DAC5A7] to-[#cbb18d] text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            DOWNLOAD RESUME
          </a>

          <a
            ref={addToBtnRefs}
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/20 backdrop-blur-md text-[#DAC5A7] transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce text-xl">
        ↓
      </div>
    </div>
  );
};

export default Home;
