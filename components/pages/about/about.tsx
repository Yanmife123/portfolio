"use client";
import { motion } from "framer-motion";
import { Cpu, Swords } from "lucide-react";
import DevIllustration from "@/components/ui/dev-Illustration";
import Skills from "@/components/pages/skill-set";
import { FloatingSquares } from "@/components/ui/box-animation";
import ContactFormSection from "./form";

function About() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto relative">
        {/* 1. Top Right: Frames the navigation menu */}
        <FloatingSquares top="8%" right="4%" zIndex={0} />
        {/* 1. Top Right: Frames the navigation menu */}
        <FloatingSquares top="1%" left="1%" zIndex={0} />
        <FloatingSquares top="50%" right="1%" zIndex={0} />
        {/* 2. Bottom Right: Anchors the large teal circle to the bottom corner */}
        <FloatingSquares top="auto" bottom="8%" right="7%" zIndex={2} />
        {/* 3. Bottom Left: Fills the empty dark void under your buttons */}
        <FloatingSquares
          top="auto"
          bottom="15%"
          left="5%"
          right="auto"
          zIndex={0}
        />
        {/* 4. Center Gap: Tucked in the background between the text and the big circle */}
        <FloatingSquares top="35%" right="45%" zIndex={0} />
        {/* 5. Top Mid-Left: Floating gently high above the main text box */}
        {/* <FloatingSquares top="12%" left="40%" right="auto" zIndex={0} /> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="order-1 md:order-2 z-10 md:py-6 py-6"
        >
          <motion.h2
            variants={itemVariants}
            className=" font-semibold uppercase text-3xl md:text-4xl  text-center font-bold- mb-3 transition-colors duration-300"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 items-center mb-20 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1"
          >
            <div className="absolute -inset-6 bg-primary/5 rounded-3xl -z-10 blur-2xl" />
            {/* DevIllustration component goes here */}
            <div className="max-md:col-start-1">
              <DevIllustration />
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 md:order-2 z-10"
          >
            <motion.h2
              variants={itemVariants}
              className="md:text-4xl text-3xl  font-bold font-sans leading-tight mb-2"
            >
              I'm Yanmife Adegbola
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-primary font-medium mb-3"
            >
              Software Engineer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-gray-400 mb-6"
            >
              A Software Engineer with a deep focus on crafting intuitive
              frontend architectures and scalable web applications. Over the
              past three years, I've focused on solidifying my foundation,
              learning the fundamentals deeply and building the discipline to
              turn intricate requirements into seamless, high-performance
              digital products.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 z-5">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 z-10"
          >
            <h3 className="text-2xl font-bold mb-5">
              My <span className="text-primary">Journey</span>
            </h3>
            <p className="text-base leading-relaxed text-gray-400 mb-4">
              My engineering journey spans diverse industries, from logistics
              platforms to digital media and asset management solutions. Most
              recently, I spearheaded the frontend architecture and design for
              the <span className="text-secondary">CAF App</span>, building
              dynamic, accessible React interfaces and connecting them with
              real-time backend services for live data handling.
            </p>
            <p className="text-base leading-relaxed text-gray-400 mb-4 z-10 inline-block">
              Prior to that, at{" "}
              <span className="text-secondary">Oresma Logistics</span>, I
              engineered scalable admin and rider-facing platforms powered by
              Next.js, TypeScript, and map-based APIs to streamline real-time
              delivery workflows and tracking operations. My work at{" "}
              <span className="text-secondary">Abode Asset Limited</span>{" "}
              further sharpened my approach to component architecture, system
              maintenance, and state management using tools like shadcn/ui and
              TanStack Query.
            </p>
            <p className="text-base leading-relaxed text-gray-400 z-5 block">
              Beyond crafting frontend interfaces, my foundation in computer
              science drives my interest in full-stack architecture, backend
              integrations, and clean systems design. I care deeply about
              component reusability, API integration, type safety, and writing
              accessible, maintainable code that scales alongside business
              needs.
            </p>
          </motion.div>

          {/* Beyond the Code */}
          <div className=" z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-secondary/10 bg-secondary/5 p-8 max-w-3xl h-fit "
            >
              <h3 className="text-lg font-bold mb-4">Beyond the Code</h3>
              <p className="text-base leading-relaxed text-gray-400 mb-6">
                When I'm not building web applications or digging into new
                technologies, you can usually find me playing efootball or
                breaking down tactical positions over a game of chess.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Cpu size={18} className="text-primary" />
                  Hardware Tinkering
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <Swords size={18} className="text-primary" />
                  Chess Strategy
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {" "}
        <Skills />
        <ContactFormSection />
      </div>
    </section>
  );
}

export default About;
