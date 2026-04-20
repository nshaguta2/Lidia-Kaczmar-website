"use client";

import { motion } from "framer-motion";
import { aboutCopy, siteBasePath } from "@/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-stone-900 py-32">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative mx-auto aspect-[3/4] w-full md:max-w-md">
            <img
              src={`${siteBasePath}/images/about/son02577.jpg`}
              alt="Lidia Kaczmar"
              className="absolute inset-0 h-full w-full rounded-sm object-cover"
            />
            <div className="absolute -inset-4 -z-10 translate-x-[-1rem] translate-y-4 border border-stone-700/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="flex w-full flex-col justify-center md:w-1/2"
        >
          <SectionHeading title={aboutCopy.title} lineClassName="bg-stone-500" className="mb-10" />

          <div className="max-w-prose space-y-6 text-lg font-light leading-[1.8] text-stone-400">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
