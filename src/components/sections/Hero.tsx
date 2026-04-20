"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroCopy, heroImages, siteMetaData } from "@/data";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    heroImages.slice(1).forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, []);

  useEffect(() => {
    if (heroImages.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-stone-950">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60 md:opacity-100">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            aria-hidden={currentImage !== index}
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-[1400ms] ease-out ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            title={image.alt}
            style={{ backgroundImage: `url("${image.src}")` }}
          />
        ))}
        <div className="absolute inset-0 bg-stone-950/40" />
      </div>

      <div className="relative z-10 mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center md:mt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-stone-400 md:text-sm"
        >
          {heroCopy.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mb-6 max-w-5xl text-4xl font-light leading-[1.08] text-stone-100 md:text-6xl lg:text-[5.4rem]"
        >
          {heroCopy.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mb-6 max-w-3xl text-lg font-light text-stone-200 md:text-2xl"
        >
          {heroCopy.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mb-12 max-w-3xl text-base font-light leading-[1.8] text-stone-300 md:text-lg"
        >
          {siteMetaData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button href="#portfolio">{heroCopy.ctaLabel}</Button>
        </motion.div>
      </div>
    </section>
  );
}
