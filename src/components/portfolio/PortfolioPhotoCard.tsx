"use client";

import { motion } from "framer-motion";
import { Photo } from "@/types";

interface PortfolioPhotoCardProps {
  photo: Photo;
  index: number;
  className: string;
  onSelect: (id: string) => void;
}

export function PortfolioPhotoCard({
  photo,
  index,
  className,
  onSelect,
}: PortfolioPhotoCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onSelect(photo.id)}
      className={`group relative block overflow-hidden rounded-sm text-left ${className}`}
      aria-label={photo.alt}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={index < 3 ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/18" />
    </motion.button>
  );
}
