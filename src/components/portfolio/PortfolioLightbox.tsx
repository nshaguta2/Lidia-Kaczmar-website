"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Photo } from "@/types";

interface PortfolioLightboxProps {
  photos: Photo[];
  selectedId: string | null;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function PortfolioLightbox({
  photos,
  selectedId,
  onClose,
  onSelect,
}: PortfolioLightboxProps) {
  const selectedIndex = photos.findIndex((photo) => photo.id === selectedId);
  const selectedPhoto = selectedIndex >= 0 ? photos[selectedIndex] : null;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!selectedPhoto) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        const previousIndex = (selectedIndex - 1 + photos.length) % photos.length;
        onSelect(photos[previousIndex].id);
      }

      if (event.key === "ArrowRight") {
        const nextIndex = (selectedIndex + 1) % photos.length;
        onSelect(photos[nextIndex].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onSelect, photos, selectedIndex, selectedPhoto]);

  useEffect(() => {
    setIsImageLoaded(false);
  }, [selectedPhoto]);

  return (
    <AnimatePresence>
      {selectedPhoto && (
        <motion.div
          key={selectedPhoto.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/96 p-4 backdrop-blur-xl md:p-8"
          onClick={onClose}
        >
          <div
            className="relative flex h-full w-full max-w-[1800px] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border border-stone-700 border-t-stone-300" />
              </div>
            )}

            <motion.img
              key={selectedPhoto.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: isImageLoaded ? 1 : 0, scale: isImageLoaded ? 1 : 0.985 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              onLoad={() => setIsImageLoaded(true)}
              onError={(event) => {
                const target = event.currentTarget;
                const currentSrc = target.getAttribute("src") ?? "";
                const baseSegment = window.location.pathname.split("/").filter(Boolean)[0];

                if (currentSrc.startsWith("/") && baseSegment && !currentSrc.startsWith(`/${baseSegment}/`)) {
                  target.src = `${window.location.origin}/${baseSegment}${currentSrc}`;
                  return;
                }

                setIsImageLoaded(true);
              }}
              className="block max-h-[88vh] max-w-full object-contain shadow-2xl"
            />

            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/50 p-3 text-stone-400 transition-colors hover:text-white md:left-6"
              onClick={() => {
                const previousIndex = (selectedIndex - 1 + photos.length) % photos.length;
                onSelect(photos[previousIndex].id);
              }}
              aria-label="Poprzednie zdj\u0119cie"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone-950/50 p-3 text-stone-400 transition-colors hover:text-white md:right-6"
              onClick={() => {
                const nextIndex = (selectedIndex + 1) % photos.length;
                onSelect(photos[nextIndex].id);
              }}
              aria-label="Nast\u0119pne zdj\u0119cie"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-stone-950/50 p-2 text-stone-400 transition-colors hover:text-white"
              onClick={onClose}
              aria-label="Zamknij podgl\u0105d"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
