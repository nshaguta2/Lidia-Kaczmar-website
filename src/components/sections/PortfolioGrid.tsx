"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioCopy, portfolioPhotos, socialLinks } from "@/data";
import { PortfolioLightbox } from "@/components/portfolio/PortfolioLightbox";
import { PortfolioPhotoCard } from "@/components/portfolio/PortfolioPhotoCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function PortfolioGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const featuredPhotos = portfolioPhotos.slice(0, 3);
  const supportingPhotos = portfolioPhotos.slice(3);
  const instagramLink = socialLinks.find((link) => link.name === "Instagram");

  return (
    <section id="portfolio" className="min-h-screen bg-stone-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={portfolioCopy.title} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {featuredPhotos.map((photo, index) => (
            <PortfolioPhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              className="aspect-[3/4] md:aspect-[4/5]"
              onSelect={setSelectedId}
            />
          ))}
        </div>

        {supportingPhotos.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {supportingPhotos.map((photo, index) => (
              <PortfolioPhotoCard
                key={photo.id}
                photo={photo}
                index={index + featuredPhotos.length}
                className="aspect-[3/4]"
                onSelect={setSelectedId}
              />
            ))}
          </div>
        )}

        {instagramLink && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="mt-16 border-t border-stone-900 pt-10 text-center"
          >
            <p className="mx-auto max-w-2xl text-base font-light leading-[1.8] text-stone-400 md:text-lg">
              {portfolioCopy.instagramBlurb}
            </p>
            <div className="mt-6">
              <Button
                href={instagramLink.url}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lidia_kaczmar
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      <PortfolioLightbox
        photos={portfolioPhotos}
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
        onSelect={setSelectedId}
      />
    </section>
  );
}
