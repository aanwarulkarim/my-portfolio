import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
<<<<<<< HEAD
        <div className="flex items-center rounded-4xl">
          <img
            src="./images/anwrulkarim-modified.png"
=======
        <div className="flex items-center">
          <img
            src="./images/anwrulkarim.jpg"
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-4xl"
          />
          <span className="ml-2 text-xl md:text-2xl font-bold text-blue-600">
            MyPortfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <a href="#Home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#services" className="hover:text-blue-600">
            Services
          </a>
<<<<<<< HEAD
          <a href="#Blog" className="hover:text-blue-600">
=======
          <a href="#blog" className="hover:text-blue-600">
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
            Blog
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Download Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 px-4 py-4 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#blog" className="hover:text-blue-600">
              Blog
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-2xl bg-blue-600 text-white text-center hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
