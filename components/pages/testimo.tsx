"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { FloatingSquares } from "../ui/box-animation";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Delivered the admin and rider dashboards ahead of schedule, and communicated clearly throughout. Reliable and easy to work with on a fast-moving project.",
    name: "Jane Doe",
    role: "Engineering Lead",
    company: "Oresma Logistics",
  },
  {
    quote:
      "Picked things up quickly and consistently produced clean, well-documented code. A strong addition to any team.",
    name: "John Smith",
    role: "Senior Developer",
    company: "Abode Asset Limited",
  },
  {
    quote:
      "Great eye for UI detail and very responsive to feedback. The frontend work on our platform noticeably improved the user experience.",
    name: "Sarah Lee",
    role: "Product Manager",
    company: "CAF App",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[380px]  border border-secondary/10 rounded-2xl p-8 hover:border-primary/40 transition-colors">
      <Quote className="w-8 h-8 text-primary/40 mb-6" />
      <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")
          )}
        </div>
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const scrollingSet = [...testimonials, ...testimonials]; // seamless loop

  return (
    <section id="testimonials" className="py-24 relative">
      {/* 1. Top Right: Frames the navigation menu */}
      <FloatingSquares top="8%" right="4%" zIndex={0} />
      {/* 1. Top Right: Frames the navigation menu */}
      <FloatingSquares top="1%" left="1%" zIndex={0} />
      <FloatingSquares top="50%" right="1%" zIndex={0} />
      {/* 2. Bottom Right: Anchors the large teal circle to the bottom corner */}
      <FloatingSquares top="auto" bottom="8%" right="7%" zIndex={2} />
      {/* 3. Bottom Left: Fills the empty dark void under your buttons */}

      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Kind Words
          </p>
          <h2 className="text-4xl font-bold font-sans leading-tight">
            What People <span className="text-primary">Say</span>
          </h2>
        </motion.div>
      </div>

      {/* Auto-scrolling row */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollingSet.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
