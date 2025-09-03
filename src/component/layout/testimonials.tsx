import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Solutions",
    image: "https://i.ibb.co/2s8c6qT/avatar1.png",
    message:
      "Anwarul is a highly skilled developer. His work on our web application was top-notch and delivered on time.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, Creative Agency",
    image: "https://i.ibb.co/3v3c6vF/avatar2.png",
    message:
      "Working with Anwarul was an amazing experience. His attention to detail and creativity is unmatched.",
  },
  {
    name: "Ali Rahman",
    role: "Founder, Startup Hub",
    image: "https://i.ibb.co/FV9XhKx/avatar3.png",
    message:
      "I highly recommend Anwarul for any web development project. He is professional, talented, and reliable.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Testimonials
        </h2>

        <div className="relative bg-white p-8 rounded-2xl shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 text-lg mb-6">
                "{testimonials[current].message}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                />
                <div className="text-left">
                  <h3 className="text-gray-900 font-semibold">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-2">
            <button
              onClick={prevTestimonial}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              &#10094;
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-2">
            <button
              onClick={nextTestimonial}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
