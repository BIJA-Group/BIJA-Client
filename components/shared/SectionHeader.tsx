"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "center", className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.4,0,0.2,1] }}
      className={cn("mb-16", align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-xl", className)}
    >
      {eyebrow && (
        <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-subtle mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.1] tracking-tight mb-4">{title}</h2>
      {description && (
        <p className="text-muted text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
