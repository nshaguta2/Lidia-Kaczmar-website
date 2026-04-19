import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
  lineClassName?: string;
}

export function SectionHeading({ title, className, lineClassName }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={cn("mb-20", className)}
    >
      <h2 className="text-4xl md:text-5xl font-light text-stone-100 mb-6 tracking-wide">{title}</h2>
      <div className={cn("w-16 h-[1px] bg-stone-700", lineClassName)}></div>
    </motion.div>
  );
}
