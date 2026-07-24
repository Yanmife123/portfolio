export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className=" grid md:grid-cols-2 gap-17 items-center ">
        {/* Left: Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl -z-10" />
          <img
            src="/me.jpeg"
            alt="Portrait"
            className="rounded-2xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-secondary text-dark px-5 py-3 rounded-xl shadow-lg">
            <p className="text-2xl font-bold">3+</p>
            <p className="text-xs uppercase tracking-wide">Years Experience</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="block z-10">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            About Me
          </p>
          <h2 className="text-4xl font-bold font-sans leading-tight mb-6">
            I turn ideas into{" "}
            <span className="text-primary">clean, functional</span> products
          </h2>

          <p className="text-base leading-relaxed text-gray-400 mb-6">
            I'm a software engineer who loves building things that live at the
            intersection of design and code. Whether it's a pixel-perfect UI or
            a robust backend system, I care about the details that make software
            feel effortless to use.
          </p>

          <p className="text-base leading-relaxed text-gray-400 mb-8">
            Outside of work, I'm usually exploring new frameworks, contributing
            to side projects, or refining my craft one commit at a time.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind",
              "Laravel",
              "PHP",
              "MySQL",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-secondary/30 text-sm text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
