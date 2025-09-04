import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Home() {
  return (
    <section
      id="Home"
      className=" relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Hi, I'm <span className="text-blue-600">Anwarul Karim</span> 👋
            <br /> Web Developer & Designer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0"
          >
            I love creating modern, responsive and user-friendly web
            applications with React, Next.js & Tailwind CSS. I’m passionate
            about building beautiful UI & smooth UX.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center md:justify-start gap-6 pt-6"
          >
            <a
              href="https://github.com/aanwarulkarim"
              target="_blank"
              className="text-gray-700 hover:text-blue-600"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-gray-700 hover:text-blue-600"
            >
              <Twitter size={28} />
            </a>
            <a
              href=""
              target="_blank"
              className="text-gray-700 hover:text-blue-600"
            >
              <Facebook size={28} />
            </a>
          </motion.div>
        </div>

        {/* Right Content (Image / Illustration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="./images/anwrulkarim.jpg"
            alt="Profile"
            className="w-64 md:w-96 rounded-full shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
