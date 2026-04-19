"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { portfolioPhotos, socialLinks } from "@/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/types";

export default function PortfolioGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedIndex = portfolioPhotos.findIndex((photo) => photo.id === selectedId);
  const selectedPhoto = portfolioPhotos.find((photo) => photo.id === selectedId);
  const featuredPhotos = portfolioPhotos.slice(0, 3);
  const supportingPhotos = portfolioPhotos.slice(3);
  const instagramLink = socialLinks.find((link) => link.name === "Instagram");

  const goToPreviousPhoto = () => {
    if (selectedIndex === -1) {
      return;
    }

    const previousIndex = (selectedIndex - 1 + portfolioPhotos.length) % portfolioPhotos.length;
    setSelectedId(portfolioPhotos[previousIndex].id);
  };

  const goToNextPhoto = () => {
    if (selectedIndex === -1) {
      return;
    }

    const nextIndex = (selectedIndex + 1) % portfolioPhotos.length;
    setSelectedId(portfolioPhotos[nextIndex].id);
  };

  const renderPhotoCard = (photo: Photo, index: number, sizes: string, className: string) => (
    <motion.div
      layoutId={`card-container-${photo.id}`}
      key={photo.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => setSelectedId(photo.id)}
      className={`group relative cursor-pointer overflow-hidden rounded-sm ${className}`}
    >
      <motion.div layoutId={`image-${photo.id}`} className="h-full w-full">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes}
        />
      </motion.div>
      <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/18" />
    </motion.div>
  );

  return (
    <section id="portfolio" className="min-h-screen bg-stone-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Portfolio" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {featuredPhotos.map((photo, index) =>
            renderPhotoCard(
              photo,
              index,
              "(max-width: 768px) 100vw, 33vw",
              "aspect-[3/4] md:aspect-[4/5]"
            )
          )}
        </div>

        {supportingPhotos.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
            {supportingPhotos.map((photo, index) =>
              renderPhotoCard(
                photo,
                index + featuredPhotos.length,
                "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
                "aspect-[3/4]"
              )
            )}
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
              Więcej aktualnych kadrów, nowych realizacji i kulis pracy można zobaczyć na Instagramie.
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

      <AnimatePresence>
        {selectedId && selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-stone-950/98 p-4 backdrop-blur-3xl md:p-8"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedId}`}
              className="relative flex h-full w-full max-w-[1800px] cursor-default items-center justify-center shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.div layoutId={`image-${selectedId}`} className="relative h-full w-full max-h-[90vh]">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>

              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/50 p-3 text-stone-400 transition-colors hover:text-white md:left-6"
                onClick={(event) => {
                  event.stopPropagation();
                  goToPreviousPhoto();
                }}
                aria-label="Poprzednie zdjęcie"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/50 p-3 text-stone-400 transition-colors hover:text-white md:right-6"
                onClick={(event) => {
                  event.stopPropagation();
                  goToNextPhoto();
                }}
                aria-label="Następne zdjęcie"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-4 rounded-full bg-stone-950/50 p-2 text-stone-400 transition-colors hover:text-white"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedId(null);
                }}
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
