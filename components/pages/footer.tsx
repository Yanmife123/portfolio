"use client";
import { motion } from "framer-motion";
import { Mail, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

function FooterSection() {
  return (
    <section id="contact" className=" pt-24">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[#0a0a0a] border border-secondary/10 px-8 py-16 md:px-16 md:py-20"
        >
          {/* Glow accents */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/25 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
              Let's Build Something
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Have an exciting project or role in mind? Let’s bring it to life
              with scalable backend systems and seamless frontend interfaces.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/about#contact"
                className="flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
              >
                <Mail size={18} />
                Get In Touch
              </Link>

              <Link
                href="/Adegbola_Yanmife_Software_Developer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-secondary/5 border border-secondary/10 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-secondary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <ExternalLink size={18} />
                Review Resume
              </Link>

              {/* <Link
                href="/YANMIFE-ADEGBOLA-Resume.pdf"
                download=""
                className="flex items-center gap-2 bg-secondary/5 border border-secondary/10 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-secondary/10 transition-colors w-full sm:w-auto justify-center"
              >
                <FileText size={18} />
                Download Resume
              </Link> */}
            </div>

            {/* Footer info */}
            <div className="pt-10 border-t border-secondary/10">
              <a
                href="mailto:yanmifeigwe@gmail.com"
                className="text-gray-500 hover:text-primary transition-colors text-sm"
              >
                yanmifeigwe@gmail.com
              </a>
              <p className="text-gray-600 text-xs mt-2 tracking-wide">
                © {new Date().getFullYear()} YANMIFE.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FooterSection;
