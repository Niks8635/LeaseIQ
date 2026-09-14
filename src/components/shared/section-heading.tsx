"use client";

import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  titleAccent,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <div
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,245,212,0.25)] bg-[rgba(0,245,212,0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00F5D4]",
            align === "center" && "mx-auto"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
          {label}
        </div>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-gradient-cyan">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[#7E97B8] sm:text-lg lg:mt-6">
          {description}
        </p>
      )}
    </motion.div>
  );
}
