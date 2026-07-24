"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  techIcons: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  variant?: "default" | "text-only" | "image-focus";
  number: string; // e.g. "01"
};

const projects: Project[] = [
  {
    number: "01",
    title: "Expense Tracker",
    description:
      "Built to manage day-to-day expenses using Dapper ORM for efficient .NET data access, PL/pgSQL for database logic, Zustand for state, and Zod for type-safe validation.",
    techIcons: ["dotnet", "csharp", "postgresql", "zustand", "typescript"],
    githubUrl: "https://github.com/you/expense-tracker",
  },
  {
    number: "02",
    title: "Next Playground",
    description:
      "A collection of minor projects built while learning Next.js — a news portal, blog, food shop, and more.",
    techIcons: ["javascript", "nextdotjs", "react", "tailwindcss"],
    githubUrl: "https://github.com/you/next-playground",
  },
  {
    number: "03",
    title: "Notes Management System",
    description: "A minimal, distraction-free notes app.",
    techIcons: ["nextdotjs", "typescript"],
    image: "/projects/notebook.jpg",
    githubUrl: "https://github.com/you/notes-system",
    variant: "image-focus",
  },
  {
    number: "—",
    title: "RANDOMIZE();",
    description: "",
    techIcons: [],
    variant: "text-only",
  },
  {
    number: "04",
    title: "Captcha Resolver",
    description:
      "A CAPTCHA recognition microservice built during my internship at Blowbits Solutions LLP — ASP.NET Core, ONNX Runtime, and Emgu.CV with a pre-trained CNN for automated text extraction, deployed on AWS.",
    techIcons: ["amazonaws", "dotnet", "python"],
    githubUrl: "https://github.com/you/captcha-resolver",
  },
  {
    number: "05",
    title: "Wallace",
    description: "A brand identity and product experiment.",
    techIcons: [],
    image: "/projects/wallace.jpg",
    variant: "image-focus",
  },
];

function TechPill({ slug }: { slug: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-secondary/70 border-b border-secondary/20 pb-0.5">
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        className="w-3 h-3 opacity-70"
      />
      {slug}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="break-inside-avoid mb-6"
    >
      {project.variant === "text-only" ? (
        <div className="rounded-none border-l-2 border-primary bg-transparent p-8 flex items-center justify-center min-h-[160px] group cursor-default relative overflow-hidden">
          <p className="text-3xl font-mono tracking-tight text-secondary/50 group-hover:text-primary transition-colors duration-500">
            {project.title}
          </p>
        </div>
      ) : project.variant === "image-focus" ? (
        <div className="relative rounded-lg overflow-hidden group">
          <div className="aspect-[4/3] overflow-hidden bg-secondary/5 hover:border-primary/40 ">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-sm text-white/70">{project.description}</p>
          </div>
          <div className="absolute top-4 left-4 flex items-center justify-between w-[calc(100%-2rem)]">
            <span className="text-xs font-mono text-white/60">
              {project.number}
            </span>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-primary transition-colors"
              >
                <FaGithub size={14} />
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-secondary/10 p-6 hover:bg-secondary/5 hover:border-primary/40  transition-colors duration-300 group hover:shadow-primary/5 hover:shadow-lg">
          <div className="flex items-start justify-between mb-6">
            <span className="text-xs font-mono text-primary">
              {project.number}
            </span>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/40 hover:text-primary transition-colors flex items-center gap-1 text-xs"
              >
                Source <FiArrowUpRight size={12} />
              </a>
            )}
          </div>

          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-secondary/10">
            {project.techIcons.map((slug) => (
              <TechPill key={slug} slug={slug} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
              My Work
            </p>
            <h2 className="text-4xl font-bold font-sans leading-tight">
              Selected <span className="text-primary">Projects</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs">
            A mix of production work, internship projects, and things built for
            the sake of learning.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
