"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  techIcons: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  variant?: "default" | "text-only" | "image-focus";
  number: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Lecturer Loan Management System",
    description:
      "A full-stack Lecturer Loan & Savings Management System built for the Redeemer's Cooperative Society, replacing paper-based loan processing with a real-time digital workflow. Next.js frontend, Laravel backend, built after mapping the cooperative's actual approval hierarchy with its leadership. Features multi-tier approval routing, accelerated emergency loan review, and role-based dashboards for lecturers and executives.",
    techIcons: [
      "laravel",
      "mysql",
      "zod",
      "typescript",
      "php",
      "nextdotjs",
      "shadcnui",
      "tailwindcss",
    ],
    image: "/projects/llms.png",
    variant: "image-focus",
    githubUrl: "https://github.com/Yanmife123/Lecturer_loan_management_system",
    liveUrl: "https://lecturer-loan-management-system.vercel.app/",
  },
  {
    number: "02",
    title: "CAF App",
    description:
      "A campus dining platform for Redeemer's University that gives students real-time visibility into what each cafeteria is currently serving, menu items, availability, pricing, food photos, and live queue status.",
    techIcons: ["react", "javascript", "css"],
    image: "/projects/caf.png",
    variant: "image-focus",
    liveUrl: "https://caf-fe.vercel.app/",
  },
  {
    number: "03",
    title: "Ezone Commerce",
    description:
      "An e-commerce frontend built from a Figma community design, paired with a custom PHP backend built without a framework. Focused on functionality over polish, manual JWT authentication, REST API endpoints connecting backend logic to the frontend, a cart system, and auth-protected routes, with state managed via useContext and useReducer.",
    techIcons: ["react", "javascript", "php", "jsonwebtokens", "tailwindcss"],
    image: "/projects/ezone.png",
    githubUrl: "https://github.com/Yanmife123/Ezone_Commerce",
    variant: "image-focus",
    liveUrl: "https://ezone-commerce.vercel.app/",
  },
  // {
  //   number: "—",
  //   title: "RANDOMIZE();",
  //   description: "",
  //   techIcons: [],
  //   variant: "text-only",
  // },
  {
    number: "04",
    title: "Golobe Airline",
    description:
      "A full-stack travel booking platform rebuilt using Next.js. Features modular UI components built with Tailwind CSS, flight and hotel search interfaces, interactive filtering, dynamic routing for booking flows, and unified state management across user flows.",
    techIcons: [
      "nextdotjs",
      "typescript",
      "supabase",
      "shadcnui",
      "zod",
      "tailwindcss",
    ],
    image: "/projects/golobe.png",
    githubUrl: "https://github.com/Yanmife123/Golobe_version2",
    variant: "image-focus",
    liveUrl: "https://golobe-airline.vercel.app/",
  },
  {
    number: "05",
    title: "Oresma Logistics",
    description:
      "A full-featured logistics platform built with Next.js, TypeScript, and Tailwind CSS. Features role-based dashboards for admins and riders, real-time map API integrations for dispatch tracking, and a high-conversion landing page designed with custom brand identity and responsive workflows.",
    techIcons: ["nextdotjs", "typescript", "shadcnui", "zod", "tailwindcss"],
    image: "/projects/ors.png",
    liveUrl: "https://oresma-logistics-fe.vercel.app/",
    variant: "image-focus",
  },
  {
    number: "06",
    title: "Ascension clone",
    description:
      "A sleek, motion-driven landing page recreation built with React, Framer Motion, and Tailwind CSS. Conceived as a creative palette cleanser to hone complex UI animations, fine-tune layout interactions, and deliver a responsive, high-fidelity experience.",
    techIcons: ["react", "framer", "tailwindcss"],
    image: "/projects/as.png",
    liveUrl: "https://ascension-olive.vercel.app/",
    githubUrl: "https://github.com/Yanmife123/Ascension",
    variant: "image-focus",
  },
  {
    number: "07",
    title: "Redeemer's Society Petrol Engineer",
    description:
      "A custom landing page designed and built for the Redeemer's University chapter of the Society of Petroleum Engineers (SPE). Features dynamic sections highlighting the chapter's core mission, upcoming academic and networking events, departmental announcements, and an integrated contact workflow for student engagement.",
    techIcons: ["react", "javascript"],
    image: "/projects/spe.png",
    liveUrl: "https://redeemersspe.vercel.app/",
    // githubUrl: "https://github.com/Yanmife123/Ascension",
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

function ImageFocusCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-lg overflow-hidden border border-secondary/10 hover:border-primary/40 transition-colors duration-300"
    >
      {/* Image — clean, no overlay */}
      <div className="relative  overflow-hidden bg-secondary/5">
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.title}
            animate={{
              scale: hovered ? 1.06 : 1,
              filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full object-contain"
          />
        )}

        {/* Number + links float on the image, top corners only */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="text-xs font-mono text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
            {project.number}
          </span>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-primary transition-colors"
                aria-label={`View ${project.title} live site`}
              >
                <FiExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-primary transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Text content — own container, not on the image */}
      <div className="p-5 bg-secondary/5">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>
        {project.techIcons.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-secondary/10">
            {project.techIcons.map((slug) => (
              <div
                key={slug}
                className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center flex-shrink-0"
                title={slug}
              >
                <img
                  src={`https://cdn.simpleicons.org/${slug}`}
                  alt={slug}
                  className="w-3.5 h-3.5 opacity-80"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
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
        <ImageFocusCard project={project} />
      ) : (
        <div className="rounded-lg border border-secondary/10 p-6 hover:bg-secondary/5 hover:border-primary/40 transition-colors duration-300 group hover:shadow-primary/5 hover:shadow-lg">
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
    <section id="projects" className="pt-24 pb-5">
      <div className="max-w-7xl mx-auto">
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

        <div className="columns-1 md:columns-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
