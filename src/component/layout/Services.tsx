import { motion } from "framer-motion";
import { ShieldCheck, Code, Cloud, SearchCheck, Workflow } from "lucide-react";

// Custom Card Components
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white  rounded-xl shadow-md p-6 hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
}
function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-center space-y-3">{children}</div>;
}
function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-900 ">{children}</h3>;
}
function CardContent({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600  text-center text-sm">{children}</p>;
}

// Custom Button
function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition bg-blue-600 text-white hover:bg-blue-700 font-medium"
    >
      {children}
    </button>
  );
}

// Services Section
export default function ServicesSection() {
  const services = [
    {
      title: "Cyber Security Consulting",
      desc: "Penetration testing, vulnerability assessment and system hardening.",
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Full-Stack Development",
      desc: "Building scalable and modern web applications using React, Next.js, and Node.js.",
      icon: <Code className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Cloud & DevOps",
      desc: "ACloud deployment and automation using AWS, Docker, and CI/CD pipelines.",
      icon: <Cloud className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Security Audits & Compliance",
      desc: "Conducting security audits and reporting in compliance with OWASP, GDPR, and ISO standards.",
      icon: <SearchCheck className="h-10 w-10 text-red-600" />,
    },
    {
      title: "API Development & Integration",
      desc: "Designing, integrating, and documenting secure REST/GraphQL APIs.",
      icon: <Workflow className="h-10 w-10 text-orange-600" />,
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          🔹 My Services
        </h2>
        <p className="text-gray-600  mt-2 text-lg">
          Cyber Security & Full-Stack Development <br /> Here’s what I offer
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
          },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 120 },
              },
            }}
          >
            <Card>
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>{service.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 ">
          🚀 Ready to Work Together?
        </h3>
        <p className="text-gray-600  mb-6 text-lg">
          If you are looking for Cyber Security, Web Development, or DevOps
          solutions <br />— I’m ready to help. Let’s start working together!
        </p>
        <Button onClick={() => (window.location.href = "#contact")}>
          Hire Me
        </Button>
      </div>
    </section>
  );
}
