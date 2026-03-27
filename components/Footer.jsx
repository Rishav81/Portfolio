import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 mt-20 px-4 pb-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 Gradient Top Border */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#DAC5A7] to-transparent mb-10"></div>

        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Branding */}
          <h2 className="text-lg md:text-xl font-semibold tracking-wide group cursor-pointer">
            Rishav
            <span className="text-[#DAC5A7] group-hover:tracking-widest transition-all duration-300">
              .dev
            </span>
          </h2>

          {/* Center - Links */}
          <ul className="flex gap-6 text-sm text-white/70">
            {["home", "about", "skills", "work"].map((item, i) => (
              <li key={i} className="relative group cursor-pointer">
                <a href={`#${item}`} className="capitalize">
                  {item}
                </a>

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#DAC5A7] group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Right - Socials */}
          <div className="flex gap-4">
            {[
              {
                icon: <FaGithub size={18} />,
                link: "https://github.com/Rishav81",
              },
              {
                icon: <FaLinkedin size={18} />,
                link: "https://www.linkedin.com/in/rishav-kumar-2027b6263/",
              },
              {
                icon: <FaInstagram size={18} />,
                link: "https://www.instagram.com/rishav__7782/",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-full
                  bg-white/5 border border-white/10 backdrop-blur-lg

                  transition-all duration-300
                  hover:scale-110
                  hover:shadow-[0_0_15px_rgba(218,197,167,0.4)]
                  hover:bg-white/10
                "
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-white/50 mt-10 relative">
          <p>© {new Date().getFullYear()} Rishav Kumar. All rights reserved.</p>

          {/* 🔥 subtle glow line */}
          <div className="absolute left-1/2 -translate-x-1/2 mt-3 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#DAC5A7]/40 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
