import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully 🚀");

    setName("");
    setEmail("");
    setMessage("");
  };

  const sectionRef = useRef(null);
  const hRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔥 Heading
      tl.fromTo(
        hRef.current,
        { y: 80, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
      );

      // 🔥 Left content
      tl.fromTo(
        textRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2 },
        "-=0.6",
      );

      // 🔥 Form
      tl.fromTo(
        formRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.6",
      );

      // 🔥 3D tilt form
      formRef.current.addEventListener("mousemove", (e) => {
        const rect = formRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(formRef.current, {
          rotationY: x * 0.03,
          rotationX: -y * 0.03,
          transformPerspective: 800,
          duration: 0.3,
        });
      });

      formRef.current.addEventListener("mouseleave", () => {
        gsap.to(formRef.current, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="contact"
      className="relative z-10 text-white pt-20 px-4 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          ref={hRef}
          className="text-4xl md:text-5xl font-semibold mb-12 text-center"
        >
          Get In <span className="text-[#DAC5A7]">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div ref={textRef} className="space-y-6 text-center md:text-left">
            <h3 className="text-xl font-semibold">
              Let’s build something amazing 🚀
            </h3>

            <p className="text-white/70">
              Open to internships, jobs, freelance, and full-stack projects.
            </p>

            <div className="space-y-4">
              {[
                { icon: <MdEmail />, text: "rishavkumar4383@gmail.com" },
                { icon: <FaPhoneAlt />, text: "+91 81022 27630" },
                { icon: <FaMapMarkerAlt />, text: "India" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group transition"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(218,197,167,0.3)] transition">
                    {item.icon}
                  </div>
                  <span className="text-white/80 group-hover:text-[#DAC5A7] transition">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            ref={formRef}
            onSubmit={submitHandler}
            className=" relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-4  "
          >
            {/* Glow */}
            <div className="absolute  pointer-events-none inset-0 bg-[radial-gradient(circle_at_center,rgba(218,197,167,0.1),transparent_70%)]"></div>

            {/* Inputs */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-[#DAC5A7] focus:shadow-[0_0_10px_rgba(218,197,167,0.5)] outline-none transition"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-[#DAC5A7] focus:shadow-[0_0_10px_rgba(218,197,167,0.5)] outline-none transition"
            />

            <textarea
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-transparent border border-white/10 focus:border-[#DAC5A7] focus:shadow-[0_0_10px_rgba(218,197,167,0.5)] outline-none transition"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#DAC5A7] to-[#cbb18d] text-black font-medium transition hover:scale-105 hover:shadow-[0_0_20px_rgba(218,197,167,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
