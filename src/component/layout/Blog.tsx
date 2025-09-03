import { useState } from "react";

// Custom Card Component
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white  rounded-xl shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

// Custom Button Component
function Button({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-medium transition ${
        active
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white  text-gray-800  shadow hover:bg-gray-100 "
      }`}
    >
      {children}
    </button>
  );
}

export default function BlogPortfolioSection() {
  // Blog Data with relevant images
  const blogs = [
    {
      title: "Top 10 Cyber Security Practices in 2025",
      desc: "How to keep your systems secure – with practical examples.",
<<<<<<< HEAD
      img: "/images/Cyber-Security.jpg",
=======
      img: "https://images.unsplash.com/photo-1611078481894-9d76c02d6f7b?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
      category: "Cyber Security",
    },
    {
      title: "Modern Web Development Trends",
      desc: "React, Next.js, and AI-based tools developers should know.",
<<<<<<< HEAD
      img: "/images/Top-Web-Development-Trends.jpg",
=======
      img: "https://images.unsplash.com/photo-1581091012184-7c1f53d2d3e4?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
      category: "Development",
    },
    {
      title: "AI in Security",
      desc: "The use of AI in Cyber Security is growing day by day.",
<<<<<<< HEAD
      img: "/images/AiSecurity.jpg",
=======
      img: "https://images.unsplash.com/photo-1611175694984-0e2c2a5f1b44?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
      category: "AI",
    },
  ];

  // Portfolio Data with relevant images
  const projects = [
    {
      name: "CyberShield Tool",
      tech: "Node.js, Express, MongoDB",
<<<<<<< HEAD
      img: "/images/CyberShield Tool.webp",
=======
      img: "https://images.unsplash.com/photo-1591696205602-d2716a3a1f2d?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
      link: "#",
      category: "Security Tools",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind",
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      link: "#",
      category: "Web Apps",
    },
    {
      name: "API Gateway",
      tech: "Express.js, JWT, Redis",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&h=400&w=600",
      link: "#",
      category: "API",
    },
  ];

  const blogCategories = ["All", "Cyber Security", "Development", "AI"];
  const projectCategories = ["All", "Web Apps", "Security Tools", "API"];

  const [blogFilter, setBlogFilter] = useState("All");
  const [projectFilter, setProjectFilter] = useState("All");

  return (
<<<<<<< HEAD
    <div className="p-6 space-y-12  " id="Blog">
      {/* Blog Section */}
      <section className="">
=======
    <div className="p-6 space-y-12">
      {/* Blog Section */}
      <section>
>>>>>>> 2dd03a0ac644611d30512ece042c457aa8ce0e03
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          🔹 Latest Blogs
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {blogCategories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setBlogFilter(cat)}
              active={blogFilter === cat}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs
            .filter(
              (blog) => blogFilter === "All" || blog.category === blogFilter
            )
            .map((blog, i) => (
              <Card key={i}>
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600  my-2">{blog.desc}</p>
                  <span className="text-sm text-blue-500">
                    #{blog.category}
                  </span>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 ">
          🔹 My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {projectCategories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setProjectFilter(cat)}
              active={projectFilter === cat}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(
              (project) =>
                projectFilter === "All" || project.category === projectFilter
            )
            .map((project, i) => (
              <Card key={i}>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {project.name}
                  </h3>
                  <p className="text-gray-60 my-2">Tech: {project.tech}</p>
                  <span className="text-sm text-blue-500">
                    #{project.category}
                  </span>
                  <div className="mt-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      🔗 View Project
                    </a>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
