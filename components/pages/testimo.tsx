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

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-secondary/10 rounded-2xl p-8 hover:border-primary/40 transition-colors h-full flex flex-col"
    >
      <Quote className="w-8 h-8 text-primary/40 mb-6 flex-shrink-0" />
      <p className="text-gray-300 leading-relaxed mb-8 text-[15px] flex-1">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3 pt-6 border-t border-secondary/10">
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
    </motion.div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <FloatingSquares top="8%" right="4%" zIndex={0} />
      <FloatingSquares top="1%" left="1%" zIndex={0} />
      <FloatingSquares top="50%" right="1%" zIndex={0} />
      <FloatingSquares top="auto" bottom="8%" right="7%" zIndex={2} />

      <div className="max-w-6xl mx-auto px-6 md:px-16 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
