import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Have a project in mind or just want to say hello? Fill out the form
            or connect with me directly. I’ll get back to you as soon as
            possible.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700">
              <Mail className="text-blue-600" size={20} /> hello@example.com
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Phone className="text-blue-600" size={20} /> +880 1234-567890
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-blue-600" size={20} /> Dhaka, Bangladesh
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-600 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-600 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-gray-600 hover:text-blue-600"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-gray-600 hover:text-blue-600"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
