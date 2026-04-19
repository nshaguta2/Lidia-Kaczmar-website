"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteMetaData, socialLinks } from "@/data";

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-stone-900 bg-stone-950 py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <h2 className="mb-6 text-4xl font-light tracking-wide text-stone-100 md:text-5xl">
            Porozmawiajmy o sesji, która pokaże coś prawdziwego
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg font-light leading-[1.8] text-stone-400">
            Tworzę naturalne obrazy kulinarne dla marek, które chcą komunikować się estetycznie, apetycznie i
            bez wizualnego nadmiaru.
          </p>

          <Button href={`mailto:${siteMetaData.email}`}>Napisz do mnie</Button>

          <div className="mt-12 flex flex-col items-center gap-4 text-sm uppercase tracking-[0.18em] text-stone-500">
            <a href={`mailto:${siteMetaData.email}`} className="transition-colors hover:text-stone-100">
              {siteMetaData.email}
            </a>
            <a href={`tel:${siteMetaData.phone}`} className="transition-colors hover:text-stone-100">
              tel. {siteMetaData.phoneDisplay}
            </a>
          </div>

          <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-stone-900 pt-8 text-sm text-stone-500 md:flex-row">
            <p>
              &copy; {siteMetaData.year} {siteMetaData.author} Photography
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
