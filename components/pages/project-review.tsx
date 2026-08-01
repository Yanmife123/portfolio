"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiSupabase,
  SiTailwindcss,
  SiFramer,
  SiJsonwebtokens,
  SiShadcnui,
} from "react-icons/si";

type Project = {
  title: string;
  description: string;
  icons: React.ElementType[];
  githubUrl?: string;
  image?: string;
};

// Column 1: 3 Projects
const columnOne: Project[] = [
  {
    title: "Lecturer Loan System",
    description:
      "Digital loan management for Redeemer's Cooperative with multi-tier approval routing.",
    icons: [SiNextdotjs, SiLaravel, SiPhp, SiMysql, SiShadcnui],
    image: "/projects/llms.png",
    githubUrl: "https://github.com/Yanmife123/Lecturer_loan_management_system",
  },
  {
    title: "Ezone Commerce",
    description:
      "Full-stack e-commerce app with custom PHP REST API backend, JWT auth, and React state.",
    icons: [SiReact, SiPhp, SiJsonwebtokens, SiTailwindcss],
    image: "/projects/ezone.png",
    githubUrl: "https://github.com/Yanmife123/Ezone_Commerce",
  },
  {
    title: "Redeemer's SPE Chapter",
    description:
      "Custom landing page featuring chapter mission, dynamic event listings, and contact workflow.",
    icons: [SiReact, SiJavascript, SiTailwindcss],
    image: "/projects/spe.png",
  },
];

// Column 2: 2 Projects
const columnTwo: Project[] = [
  {
    title: "CAF App",
    description:
      "Campus dining platform with real-time visibility into menus, queue status, and pricing.",
    icons: [SiReact, SiJavascript, SiTailwindcss],
    image: "/projects/caf.png",
  },
  {
    title: "Oresma Logistics",
    description:
      "Scalable fleet platform featuring role-based dashboards and real-time map tracking.",
    icons: [SiNextdotjs, SiTypescript, SiShadcnui, SiTailwindcss],
    image: "/projects/ors.png",
  },
];

// Column 3: 2 Projects
const columnThree: Project[] = [
  {
    title: "Golobe Airline",
    description:
      "Travel booking platform with flight/hotel search interfaces and Supabase dynamic routing.",
    icons: [SiNextdotjs, SiTypescript, SiSupabase, SiShadcnui],
    image: "/projects/golobe.png",
    githubUrl: "https://github.com/Yanmife123/Golobe_version2",
  },
  {
    title: "Ascension Clone",
    description:
      "Sleek, motion-driven landing page recreation exploring complex UI animations.",
    icons: [SiReact, SiFramer, SiTailwindcss],
    image: "/projects/as.png",
    githubUrl: "https://github.com/Yanmife123/Ascension",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-secondary/10 hover:bg-secondary/5 overflow-hidden hover:border-primary/40 transition-colors shadow-sm hover:shadow-xl hover:shadow-primary/5 group">
      {project.image && (
        <div className="aspect-4/3 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            // unoptimized
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-bold">{project.title}</h3>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary/40 hover:text-primary transition-colors flex-shrink-0"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
        <p className="text-xs text-gray-400 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.icons.map((Icon, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-md bg-secondary/10 flex items-center justify-center"
            >
              <Icon className="w-3.5 h-3.5 text-secondary/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfiniteColumn({
  projects,
  direction = "up",
  speed = 25,
}: {
  projects: Project[];
  direction?: "up" | "down";
  speed?: number;
}) {
  const duplicatedProjects = [
    ...projects,
    ...projects,
    ...projects,
    ...projects,
  ];

  return (
    <div className="w-full relative overflow-visible">
      <motion.div
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex flex-col gap-6"
      >
        {duplicatedProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default function HomeProjectsGrid() {
  return (
    <section className="pt-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center relative z-10"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
            Selected <span className="text-primary">Projects</span>
          </h2>
        </motion.div>

        <div
          className="h-[550px] overflow-hidden flex"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
            <InfiniteColumn projects={columnOne} direction="down" speed={30} />

            <div className="hidden md:block">
              <InfiniteColumn projects={columnTwo} direction="up" speed={25} />
            </div>

            <div className="hidden md:block">
              <InfiniteColumn
                projects={columnThree}
                direction="down"
                speed={35}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center relative z-10"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300 border border-primary/20 bg-primary/5 hover:bg-primary/10 px-6 py-3 rounded-full"
          >
            Explore All Projects
            <FiArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
