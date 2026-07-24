"use client";
import { motion } from "framer-motion";

type ExperienceItem = {
  year: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  description: string;
  tags: string[];
};

const experience: ExperienceItem[] = [
  {
    year: "2025 — 2026",
    role: "Frontend Developer",
    company: "CAF App",
    location: "Remote",
    description:
      "Handled the design and frontend development of the CAF app, building a responsive UI connected to backend APIs using React and JavaScript.",
    tags: ["React", "JavaScript", "REST APIs"],
    achievements: [
      "Designed and implemented the app's core UI/UX from the ground up",
      "Integrated frontend features with backend APIs for real-time data handling",
      "Built reusable, responsive components to maintain design consistency",
      "Optimized app performance and state management for a smoother user experience",
    ],
  },
  {
    year: "10/2025 — 12/2025",
    role: "Front-End Developer",
    company: "Oresma Logistics",
    location: "Lagos, Nigeria",
    description:
      "Developed a comprehensive logistics platform using Next.js and TypeScript, built for scalability across admin and rider-facing workflows.",
    tags: [
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Tailwind",
      "shadcn/ui",
      "TanStack",
      "Git",
      "map-based APIs",
    ],
    achievements: [
      "Integrated frontend features with backend services using map-based APIs for logistics operations",
      "Implemented an admin dashboard for managing delivery requests, users, and rider accounts",
      "Created a rider-facing dashboard for request acceptance and workflow updates",
      "Collaborated with backend developers to ensure seamless API integration",
      "Emphasized clean UI design, responsiveness, and efficient state management",
    ],
  },
  {
    year: "06/2025 — 10/2025",
    role: "Software Development Intern",
    company: "Abode Asset Limited",
    location: "Lagos, Nigeria",
    description:
      "Contributed to the development and maintenance of software applications under senior developers' guidance, while also building and maintaining websites as part of system updates and specific internal programs.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "TanStack", "Git"],
    achievements: [
      "Built several websites as updates to existing systems and for specific internal programs",
      "Fixed and maintained existing company websites using Next.js, TypeScript, and Tailwind CSS",
      "Used shadcn/ui and TanStack to build accessible, well-structured UI components and data-driven views",
      "Participated in writing, testing, and debugging code to enhance system functionality",
      "Collaborated with the software team on remote development tasks and technical discussions",
      "Applied best practices in version control (Git), documentation, and problem-solving",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            My Journey
          </p>
          <h2 className="text-4xl font-bold font-sans leading-tight">
            Work <span className="text-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line: left on mobile, centered on desktop */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-secondary/20" />

          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.role}
                className="relative flex items-start mb-12 md:mb-16 last:mb-0"
              >
                {/* Dot: left on mobile, centered on desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"
                />

                {/* Left column - desktop only, only renders when isLeft */}
                <div className="hidden md:block md:w-1/2 md:pr-12">
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="text-right"
                    >
                      <ExperienceCard item={item} align="right" />
                    </motion.div>
                  )}
                </div>

                {/* Right column - always visible on mobile, desktop only when !isLeft */}
                <div className="w-full pl-12 md:w-1/2 md:pl-12">
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`text-left ${isLeft ? "md:hidden" : ""}`}
                  >
                    <ExperienceCard item={item} align="left" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  align,
}: {
  item: ExperienceItem;
  align: "left" | "right";
}) {
  return (
    <div className="bg-secondary/5 border border-secondary/10 rounded-2xl p-6 hover:border-primary/40 transition-colors">
      <div
        className={`flex items-center gap-2 mb-3 flex-wrap ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          {item.year}
        </span>
        <span className="text-xs text-gray-400">{item.location}</span>
      </div>

      <h3 className="text-xl font-bold mb-1">{item.role}</h3>
      <p className="text-primary text-sm font-medium mb-4">{item.company}</p>

      <p className="text-gray-400 leading-relaxed mb-4 text-sm">
        {item.description}
      </p>

      <ul
        className={`space-y-2 mb-4 ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {item.achievements.map((point, i) => (
          <li
            key={i}
            className="text-sm text-gray-400 leading-relaxed flex gap-2 items-start"
          >
            {align === "left" && <span className="text-primary mt-1.5">•</span>}
            <span className="flex-1">{point}</span>
            {align === "right" && (
              <span className="text-primary mt-1.5 order-last">•</span>
            )}
          </li>
        ))}
      </ul>

      <div
        className={`flex flex-wrap gap-2 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
export default Experience;
