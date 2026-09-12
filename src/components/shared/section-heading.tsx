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
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className="text-gold">{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:mt-6">
          {description}
        </p>
      )}
    </motion.div>
  );
}
