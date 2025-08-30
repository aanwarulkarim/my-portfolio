import { Github, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">MyPortfolio</h2>
          <p className="mt-4 text-sm text-gray-400">
            Crafting modern and responsive web experiences with React, Next.js &
            Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <p className="mt-3 text-sm">
            Email:{" "}
            <a href="mailto:hello@example.com" className="hover:text-blue-400">
              developer.anwarul@gmail.com
            </a>
          </p>
          <p className="text-sm">Location: Dhaka, Bangladesh</p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
