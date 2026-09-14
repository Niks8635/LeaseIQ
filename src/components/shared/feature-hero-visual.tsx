"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Building,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  HeadphonesIcon,
  Briefcase,
  Dumbbell,
  Users,
  Home,
  Calculator,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Building,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  HeadphonesIcon,
  Briefcase,
  Dumbbell,
  Users,
  Home,
  Calculator,
  Shield,
};

interface FeatureHeroVisualProps {
  imageUrl: string;
  badge: string;
  title: string;
  subtitle?: string;
  metrics?: Array<{ label: string; value: string }>;
  floatingCard?: unknown;
  statusText?: string;
  iconName?: string;
  className?: string;
}

export function FeatureHeroVisual({
  imageUrl,
  badge,
  title,
  subtitle,
  metrics,
  floatingCard: _floatingCard,
  statusText = "Live System Active",
  iconName,
  className,
}: FeatureHeroVisualProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconName ? ICON_MAP[iconName] : undefined;

  return (
    <div className={cn("relative [perspective:1200px]", className)}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4]/15 via-[#00F5D4]/5 to-transparent rounded-3xl blur-3xl -z-10" />

      {/* Master 3D Visual Card */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-4, 4, -4],
                rotateX: [1, -1, 1],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="rounded-3xl border border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/80 shadow-2xl overflow-hidden relative min-h-[440px] md:min-h-[520px] flex flex-col justify-between backdrop-blur-xl"
      >
        {/* Photo Background with Luxury Dark Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A]/95 via-black/40 to-black/30" />

        {/* Top Header Overlay Bar */}
        <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
          <Badge className="bg-[#040D1A]/80 backdrop-blur-md text-[#00F5D4] border border-[rgba(0,245,212,0.3)] text-xs px-3 py-1 font-semibold">
            <Sparkles className="w-3 h-3 mr-1 text-[#00F5D4]" />
            {badge}
          </Badge>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#040D1A]/80 backdrop-blur-md border border-[rgba(0,245,212,0.15)] text-[11px] text-white">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
            <span>{statusText}</span>
          </div>
        </div>

        {/* Bottom Metrics & Title Overlay */}
        <div className="relative z-10 p-6 sm:p-8 space-y-4 text-white">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-[#00F5D4] text-[#040D1A] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,245,212,0.3)]">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-white/70 mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Live Metrics Grid */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center"
                >
                  <p className="text-[10px] text-white/70">{m.label}</p>
                  <p className="text-sm sm:text-base font-bold text-white font-mono mt-0.5">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default FeatureHeroVisual;
