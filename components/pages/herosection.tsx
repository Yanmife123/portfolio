"use client";
// import { FloatingSquares } from "@/components/ui/box-animation";

import { motion } from "framer-motion";
import { useTypewriter, Segment } from "@/components/hooks/Typewriter";

// function AnimatedShapes() {
//   return (
//     <>
//       <motion.div
//         className="absolute top-[10%] left-[50%] -ml-[120px] md:left-auto md:ml-0 md:right-[15%] md:top-[15%] h-[240px] w-[240px] lg:h-[340px] lg:w-[340px] bg-[#00a19b] opacity-90"
//         animate={{
//           borderRadius: [
//             "62% 38% 55% 45% / 45% 55% 45% 55%",
//             "40% 60% 45% 55% / 55% 40% 60% 45%",
//             "62% 38% 55% 45% / 45% 55% 45% 55%",
//           ],
//           scale: [1, 1.05, 1],
//           rotate: [0, 8, 0],
//         }}
//         transition={{
//           duration: 8,
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       />

//       <motion.div
//         className="absolute top-[50%] left-[50%] ml-[20px] md:left-auto md:ml-0 md:right-[5%] md:top-[45%] h-[120px] w-[120px] lg:h-[160px] lg:w-[160px] bg-[#5fc7c2] opacity-[0.55]"
//         animate={{
//           borderRadius: [
//             "45% 55% 62% 38% / 55% 45% 55% 45%",
//             "60% 40% 45% 55% / 45% 60% 40% 55%",
//             "45% 55% 62% 38% / 55% 45% 55% 45%",
//           ],
//           scale: [1, 0.95, 1],
//           rotate: [0, -10, 0],
//         }}
//         transition={{
//           duration: 10,
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       />
//     </>
//   );
// }
export default function HeroSection() {
  const phrases: Segment[][] = [
    [{ text: "I'm " }, { text: "Yanmife Adegbola", className: "text-accent" }],
    [
      { text: "Shipping Ideas Into " },
      { text: "Reality", className: "text-primary" },
    ],
  ];
  const typedText = useTypewriter(phrases);

  return (
    <div className=" py-16 relative max-sm:h-112.5  ">
      {/* <FloatingSquares top={10} right={5} zIndex={0} />
      <FloatingSquares bottom={10} right={10} zIndex={2} className="" /> */}

      <div className="flex h-full z-10 md:flex-row flex-col gap-8">
        <div className="flex-1 flex flex-col md:items-center items-center gap-6 justify-center">
          <motion.div
            className="text-sm font-semibold bg-[rgba(0,161,155,0.12)] text-primary border border-primary rounded-full px-4 py-1 w-fit mb-4"
            animate={{
              boxShadow: [
                "0px 0px 0px 0px rgba(0, 161, 155, 0)",
                "0px 0px 12px 2px rgba(0, 161, 155, 0.5)",
                "0px 0px 0px 0px rgba(0, 161, 155, 0)",
              ],
              textShadow: [
                "0px 0px 0px rgba(0, 161, 155, 0)",
                "0px 0px 8px rgba(0, 161, 155, 0.8)",
                "0px 0px 0px rgba(0, 161, 155, 0)",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Software Engineer
          </motion.div>
          <div className="flex flex-col justify-center space-y-3 md:text-center text-center">
            {/* <h2 className=" text-4xl md:text-4xl  lg:text-5xl font-bold capitalize font-sans leading-tight md:h-[130px] h-[100px]">
              {typedText.map((seg, i) => (
                <span key={i} className={seg.className}>
                  {seg.text}
                </span>
              ))}
              <span className="animate-pulse text-secondary">|</span>
            </h2> */}
            <h2 className=" text-4xl md:text-4xl  lg:text-5xl font-bold capitalize font-sans leading-tight ">
              {typedText.map((seg, i) => (
                <span key={i} className={seg.className}>
                  {seg.text}
                </span>
              ))}
              <span className="animate-pulse text-secondary">|</span>
            </h2>

            <div className="flex flex-col space-y-4 md:items-center items-center">
              {/* <p className="text-lg text-secondary font-sans max-w-lg">
                Frontend-focused software engineer building fast, scalable
                interfaces with React, Next.js & TypeScript, backed by Laravel
                and PHP on the server side. Currently leveling up in cloud.
              </p> */}
              <p className="text-lg text-secondary font-sans max-w-lg text-center">
                Frontend specialist with robust backend skills. Leveling up in
                the cloud.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-dark px-6 py-3 rounded-full font-semibold hover:bg-dark hover:text-primary transition-all duration-200 ease-in-out border hover:border-primary">
                  Get in Touch
                </button>
                <button className="bg-dark text-secondary px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-dark transition-all duration-200 ease-in-out border border-primary">
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex-1 max-md:h-[300px] flex md:justify-end justify-center items-center relative">
          <div className="relative h-full w-[70%] max-md:h-[300px] max-md:mx-auto">
            <AnimatedShapes />
          </div>
        </div> */}
      </div>
    </div>
  );
}
