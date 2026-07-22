"use client";

import { motion } from "framer-motion";

function AnimatedShapes() {
  return (
    <>
      <motion.div
        className="absolute right-[60px] top-4 h-[340px] w-[340px] bg-[#00a19b] opacity-90"
        animate={{
          borderRadius: [
            "62% 38% 55% 45% / 45% 55% 45% 55%",
            "40% 60% 45% 55% / 55% 40% 60% 45%",
            "62% 38% 55% 45% / 45% 55% 45% 55%",
          ],
          scale: [1, 1.05, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute right-10 top-[160px] h-[160px] w-[160px] bg-[#5fc7c2] opacity-[0.55]"
        animate={{
          borderRadius: [
            "45% 55% 62% 38% / 55% 45% 55% 45%",
            "60% 40% 45% 55% / 45% 60% 40% 55%",
            "45% 55% 62% 38% / 55% 45% 55% 45%",
          ],
          scale: [1, 0.95, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </>
  );
}

export default function HeroSection() {
  return (
    <div className=" h-125 py-8">
      <div className="flex border-2 border-red-500 h-full">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1">
            <h2 className="text-5xl font-bold capitalize font-sans leading-tight">
              building the <br /> <span className="text-primary"> future </span>
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-lg text-secondary font-sans max-w-md">
              I am a passionate software developer with a strong focus on
              creating innovative and efficient solutions. With expertise in
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-full w-full">
            <AnimatedShapes />
          </div>
        </div>
      </div>
    </div>
  );
}
