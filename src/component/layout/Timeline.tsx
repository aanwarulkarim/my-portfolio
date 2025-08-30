import { Briefcase, Book } from "lucide-react";

export default function Timeline() {
  const timelineData = [
    {
      type: "education",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Dhaka",
      duration: "2018 - 2022",
      grade: "CGPA: 3.85/4.00",
    },
    {
      type: "experience",
      role: "Frontend Developer",
      company: "Tech Solutions Ltd.",
      duration: "2022 - Present",
      description:
        "Building responsive web applications with React, Next.js, Tailwind CSS. Collaborating with cross-functional teams to deliver high-quality UI/UX.",
    },
    {
      type: "education",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      duration: "2016 - 2018",
      grade: "GPA: 5.00/5.00",
    },
    {
      type: "experience",
      role: "Intern Web Developer",
      company: "Creative Agency",
      duration: "Jan 2022 - Jun 2022",
      description:
        "Developed landing pages and small projects using HTML, CSS, JS and React.",
    },
  ];

  return (
    <section id="timeline" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Timeline
        </h2>

        <div className="relative border-l-2 border-blue-600 ml-4">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              {/* Icon */}
              <span
                className={`absolute -left-6 top-0 flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ${
                  item.type === "education" ? "bg-blue-600" : "bg-green-600"
                }`}
              >
                {item.type === "education" ? (
                  <Book size={24} />
                ) : (
                  <Briefcase size={24} />
                )}
              </span>

              {/* Content */}
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                {item.type === "education" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.degree}
                    </h3>
                    <p className="text-gray-700 mt-1">{item.institution}</p>
                    <p className="text-gray-500 mt-1 text-sm">
                      {item.duration}
                    </p>
                    {item.grade && (
                      <p className="text-gray-500 text-sm">{item.grade}</p>
                    )}
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.role}
                    </h3>
                    <p className="text-gray-700 mt-1">{item.company}</p>
                    <p className="text-gray-500 mt-1 text-sm">
                      {item.duration}
                    </p>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
