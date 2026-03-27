import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-2xl lg:max-w-4xl mx-auto px-4 pt-6">
        <div className=" relative overflow-hidden flex justify-between items-center py-1 px-3 rounded-xl bg-black/5 backdrop-blur-xl border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          {/* LOGO */}{" "}
          <a href="#home" className="text-xl font-bold text-[#373736]">
            𝓡𝓲𝓼𝓱𝓪𝓿.
          </a>
          {/* DESKTOP LINKS */}{" "}
          <ul className="hidden md:flex items-center gap-6 text-[#373736] cursor-pointer">
            {" "}
            <li className="">
              <a
                href="#skills"
                className="
    relative px-2 py-1
    text-[#373736] font-medium tracking-wide

    transition-all duration-300 ease-out
    hover:text-[#DAC5A7]

    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-[#DAC5A7]

    after:transition-all after:duration-300
    hover:after:w-full
  "
              >
                SKILLS
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="
    relative px-2 py-1
    text-[#373736] font-medium tracking-wide

    transition-all duration-300 ease-out
    hover:text-[#DAC5A7]

    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-[#DAC5A7]

    after:transition-all after:duration-300
    hover:after:w-full
  "
              >
                WORK
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="#about"
                className="
    relative px-2 py-1
    text-[#373736] font-medium tracking-wide

    transition-all duration-300 ease-out
    hover:text-[#DAC5A7]

    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0
    after:bg-[#DAC5A7]

    after:transition-all after:duration-300
    hover:after:w-full
  "
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="
      relative inline-block px-5 py-2.5 rounded-lg
      bg-gradient-to-r from-[#DAC5A7] to-[#cbb18d]
      text-black font-medium overflow-hidden

      transition-all duration-300
      hover:scale-105 hover:shadow-xl

      before:absolute before:top-0 before:left-[-100%]
      before:w-full before:h-full
      before:bg-white/30
      before:skew-x-[-20deg]
      before:transition-all before:duration-500

      hover:before:left-[120%]
    "
              >
                LET'S TALK
              </a>
            </li>
          </ul>
          {/* MOBILE MENU BUTTON */}{" "}
          <div
            className="
    md:hidden 
  "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FaTimes className="text-[#DAC5A7]" size={18} />
            ) : (
              <FaBars className="text-[#373736]" size={18} />
            )}
          </div>
        </div>
        {/* MOBILE MENU */}{" "}
        {open && (
          <div className="md:hidden mt-2 rounded-xl bg-black/5 backdrop-blur-xl border border-black/10 shadow-lg p-4">
            {" "}
            <ul className="flex flex-col gap-4 text-[#373736]">
              {" "}
              <li>
                {" "}
                <a
                  onClick={() => {
                    setOpen(false);
                  }}
                  href="#skills"
                  className="relative px-2 py-1
    text-[#373736] font-medium tracking-wide
  "
                >
                  SKILLS
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  onClick={() => {
                    setOpen(false);
                  }}
                  href="#work"
                  className="relative px-2 py-1
    text-[#373736] font-medium tracking-wide
  "
                >
                  WORK
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="#about"
                  className="relative px-2 py-1
    text-[#373736] font-medium tracking-wide
  "
                >
                  ABOUT
                </a>{" "}
              </li>{" "}
              <li>
                <a
                  onClick={() => {
                    setOpen(false);
                  }}
                  href="#contact"
                  className="
      relative inline-block w-full text-center px-5 py-2.5 rounded-lg
      bg-gradient-to-r from-[#DAC5A7] to-[#cbb18d]
      text-black font-medium overflow-hidden animate-pulse
    "
                >
                  LET'S TALK
                </a>
              </li>
            </ul>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export default Navbar;
