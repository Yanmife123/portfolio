"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  // SiPostgresql,
  SiMysql,
  SiGit,
  SiFigma,
  SiTanstack,
  // SiPython,
  // SiDotnet,
  // SiSharp,
  // SiAmazonaws,
  SiHtml5,
  SiCss,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  // { name: "Python", icon: SiPython, color: "#3776ab" },
  // { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  // { name: "AWS", icon: SiAmazonaws, color: "#ff9900" },
  { name: "TanStack", icon: SiTanstack, color: "#ff4154" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },
];

function HexCell({ skill, index }: { skill: Skill; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-1 min-w-0 cursor-pointer"
      style={{
        aspectRatio: "0.87",
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: hovered ? "rgba(0,161,155,0.08)" : "#141414",
          border: hovered
            ? "2px solid #00a19b"
            : "1px solid rgba(228,221,211,0.1)",
          boxShadow: hovered ? "0 0 20px rgba(0,161,155,0.4)" : "none",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center gap-1.5 px-2">
        <Icon
          className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300"
          style={{
            color: skill.color,
            transform: hovered ? "scale(1.15)" : "scale(1)",
          }}
        />
        <span className="text-[10px] md:text-[11px] lg:text-xs font-medium text-center text-gray-300 leading-tight">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

function MobileChip({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="flex items-center gap-2 bg-secondary/5 border border-secondary/10 rounded-xl px-4 py-3"
    >
      <Icon className="w-5 h-5 flex-shrink-0" style={{ color: skill.color }} />
      <span className="text-sm text-gray-300">{skill.name}</span>
    </motion.div>
  );
}

// Builds alternating rows: 7 items, 6 items, 7 items, 6 items...
function buildHoneycombRows(items: Skill[]) {
  const rows: Skill[][] = [];
  let i = 0;
  let toggle = true;
  while (i < items.length) {
    const size = toggle ? 7 : 6;
    rows.push(items.slice(i, i + size));
    i += size;
    toggle = !toggle;
  }
  return rows;
}

function Skills() {
  const rows = buildHoneycombRows(skills);

  return (
    <section id="skills" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl font-bold font-sans leading-tight">
            Skills & <span className="text-primary">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Mobile: wrapped chip grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:hidden">
          {skills.map((skill, i) => (
            <MobileChip key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Tablet/Desktop: percentage-based honeycomb, fits container width exactly */}
        <div className="hidden md:flex flex-col gap-0 max-w-4xl mx-auto">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex -mt-3 lg:-mt-4 first:mt-0"
              style={{
                width: `${(row.length / 7) * 100}%`,
                margin: "0 auto",
                marginTop: rowIndex === 0 ? 0 : undefined,
              }}
            >
              {row.map((skill, i) => (
                <HexCell
                  key={skill.name}
                  skill={skill}
                  index={rowIndex * 7 + i}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
