"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { FloatingCardAsset } from "@/lib/media-config";
import { cn } from "@/lib/utils";

interface FloatingMediaCardProps {
  card: FloatingCardAsset;
  align?: "left" | "right" | "center";
  delay?: number;
  className?: string;
  variant?: "glass" | "solid" | "compact";
}

export function FloatingMediaCard({
  card,
  align = "right",
  delay = 0,
  className,
  variant = "glass",
}: FloatingMediaCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const floatAnimation = {
    y: shouldReduceMotion ? 0 : [-6, 6, -6],
    transition: {
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={cn("pointer-events-auto z-20", className)}
    >
      <motion.div
        animate={floatAnimation}
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 shadow-xl group max-w-[320px]",
          variant === "glass" &&
            "bg-card/90 dark:bg-card/85 backdrop-blur-xl border-border/80 hover:border-gold/50 shadow-premium",
          variant === "solid" &&
            "bg-card border-border shadow-2xl hover:border-gold/60",
          variant === "compact" &&
            "bg-card/95 backdrop-blur-md p-2.5 rounded-xl border-border/70"
        )}
      >
        {/* Photo Thumbnail */}
        <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-border/60 bg-muted">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#00F5D4] ring-2 ring-[#040D1A]" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <span className="text-[10px] font-semibold text-[#00F5D4] uppercase tracking-wider truncate">
              {card.badge}
            </span>
            {card.metric && (
              <span className="text-[10px] font-mono font-bold text-white bg-[#061220] px-1.5 py-0.2 rounded border border-[rgba(0,245,212,0.14)] shrink-0">
                {card.metric}
              </span>
            )}
          </div>
          <p className="text-xs font-bold text-white truncate leading-tight">
            {card.title}
          </p>
          <p className="text-[11px] text-[#7E97B8] truncate mt-0.5">
            {card.subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FloatingMediaCard;
