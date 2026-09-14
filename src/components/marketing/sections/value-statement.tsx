"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Network, Brain, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Layers,
    title: "Replace Fragmented Chaos",
    description: "Stop juggling physical paper registers, unorganized WhatsApp groups, manual receipts, and disconnected accounting spreadsheets.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    badge: "100% Digital",
  },
  {
    icon: Network,
    title: "One Connected Platform",
    description: "Finance, boom barrier security, resident KYC, vendor contracts, facilities, and community notices — unified in one operating system.",
    imageUrl: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80",
    badge: "Unified Ecosystem",
  },
  {
    icon: Brain,
    title: "Autonomous Intelligence",
    description: "AI bank statement reconciliation, invoice OCR duplicate detection, SLA predictive tracking, and executive society health scores.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    badge: "98.8% AI Match",
  },
];

export function ValueStatement() {
  const [ref, isIntersecting] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="w-full bg-[#040D1A] section-padding py-24 sm:py-32 relative overflow-hidden border-b border-[rgba(0,245,212,0.1)]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00F5D4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="WHY LEASEIQ"
          title="Everything your society needs."
          titleAccent="Connected in one place."
          description="Replace fragmented spreadsheets, WhatsApp groups, paper registers and manual processes with one intelligent platform."
          align="center"
        />

        {/* 3 Core Cards with Imagery */}
        <div 
          ref={ref as any}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            >
              <Card className="group relative h-full rounded-3xl border border-[rgba(0,245,212,0.14)] bg-[#0A1B30]/75 hover:border-[rgba(0,245,212,0.4)] hover:shadow-[0_12px_35px_rgba(0,245,212,0.1)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between backdrop-blur-xl card-accent-line">
                {/* Photo Preview Strip */}
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B30] via-black/40 to-transparent" />
                  
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#040D1A]/80 text-[#00F5D4] border border-[rgba(0,245,212,0.3)] backdrop-blur-md">
                      {card.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 z-10">
                    <div className="w-9 h-9 rounded-xl bg-[#040D1A]/90 backdrop-blur-md border border-[rgba(0,245,212,0.25)] flex items-center justify-center text-foreground shadow-lg shadow-black/40">
                      <card.icon className="w-4 h-4 text-[#00F5D4]" />
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-white mb-2.5 group-hover:text-[#00F5D4] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#7E97B8] text-xs sm:text-sm leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-[rgba(0,245,212,0.1)] flex items-center text-[11px] font-semibold text-[#00F5D4] group-hover:translate-x-1 transition-transform">
                    <span>Explore Operating Workflow →</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueStatement;
