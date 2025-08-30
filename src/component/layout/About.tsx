export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="./images/i-2.png"
            alt="About Me"
            className="w-64 md:w-80 rounded-full shadow-xl border-4 border-white"
          />
        </div>

        {/* Right Side - About Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-600">Anwarul Karim</span>,
            a passionate Web Developer who loves building modern, responsive,
            and user-friendly web applications. I specialize in
            <span className="font-medium">
              {" "}
              React, Next.js, and Tailwind CSS
            </span>
            . I enjoy solving real-world problems through clean and efficient
            code.
          </p>

          {/* Skills Highlight */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <div className="bg-white shadow rounded-xl py-3 px-4 text-center hover:shadow-md transition">
              HTML & CSS
            </div>
            <div className="bg-white shadow rounded-xl py-3 px-4 text-center hover:shadow-md transition">
              JavaScript / TypeScript
            </div>
            <div className="bg-white shadow rounded-xl py-3 px-4 text-center hover:shadow-md transition">
              React / Next.js
            </div>
            <div className="bg-white shadow rounded-xl py-3 px-4 text-center hover:shadow-md transition">
              Tailwind CSS
            </div>
            <div className="bg-white shadow rounded-xl py-3 px-4 text-center hover:shadow-md transition">
              Node.js
            </div>
            <div className="bg-white shadow rounded-xl py-3 px-4 text-center hover:shadow-md transition">
              Git & GitHub
            </div>
          </div>

          {/* CV Button */}
          <div>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
