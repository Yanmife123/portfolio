"use client";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiFigma,
  SiTanstack,
  SiPython,
  SiDotnet,
  SiSharp,
} from "react-icons/si";

const marqueeIcons = [
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiGit,
  SiTanstack,
  SiDotnet,
  SiSharp,
];

type SkillCategory = {
  label: string;
  skills: { name: string; icon: React.ElementType }[];
};

const categories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TanStack", icon: SiTanstack },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: ".NET", icon: SiDotnet },
      { name: "C#", icon: SiSharp },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    label: "Database & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

function Marquee() {
  const icons = [...marqueeIcons, ...marqueeIcons]; // duplicate for seamless loop

  return (
    <div className="relative max-md:hidden overflow-hidden py-8 border-y border-secondary/10">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map((Icon, i) => (
          <Icon
            key={i}
            className="w-10 h-10 text-secondary/40 hover:text-primary transition-colors flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
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
      </div>

      {/* Full-bleed marquee */}
      <Marquee />

      {/* Categorized breakdown */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 mt-20 md:hidden">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary/50 mb-6">
                {category.label}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary/5 border border-secondary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors">
                      <skill.icon className="w-4 h-4 text-secondary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
