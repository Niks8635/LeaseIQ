"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Sparkles, FileSearch, CopyX, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";

export function AIFinanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Ambient Neural Data Matrix Feed & High-Resolution Background Image */}
      <AmbientVideoBg preset="cyber" variant="light" overlayOpacity={0.62} showControls={false} />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="AI FINANCE HUB"
          title="Turn society finances into"
          titleAccent="intelligent workflows."
          description="AI-powered bank reconciliation, invoice intelligence and duplicate detection — making financial management effortless."
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* AI Bank Reconciliation */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-border/40 shadow-premium h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Bank Reconciliation</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-surface rounded-xl p-4 border border-border/50 text-sm">
                    <p className="text-muted-foreground text-xs mb-1">Bank Transaction</p>
                    <p className="font-medium">₹4,500 — NEFT — 15 Sep</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-gold animate-pulse transform rotate-90 lg:rotate-0" />
                  </div>

                  <div className="bg-surface rounded-xl p-4 border border-border/50 text-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-success/5 to-transparent pointer-events-none" />
                    <p className="text-muted-foreground text-xs mb-1">Matched Invoice</p>
                    <p className="font-medium">Invoice #1247 — Flat A-402</p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-border/30">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> MATCHED
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">98% confidence</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Invoice Intelligence */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-border/40 shadow-premium h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <FileSearch className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Invoice Intelligence</h3>
                </div>

                <div className="bg-surface border border-border/50 rounded-xl p-5 relative">
                  <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">SCAN_v2.4</div>
                  
                  <div className="space-y-3 mt-4 text-sm">
                    <div className="flex justify-between border-b border-border/30 pb-2">
                      <span className="text-muted-foreground">Vendor:</span>
                      <span className="font-medium">ABC Security Services</span>
                    </div>
                    <div className="flex justify-between border-b border-border/30 pb-2">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">₹1,25,000</span>
                    </div>
                    <div className="flex justify-between border-b border-border/30 pb-2">
                      <span className="text-muted-foreground">GST:</span>
                      <span className="font-medium">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Due Date:</span>
                      <span className="font-medium">30 Sep 2024</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                     <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                      Extracted Successfully
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Duplicate Detection */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-border/40 shadow-premium h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                    <CopyX className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">Duplicate Detection</h3>
                </div>

                <div className="relative h-48 mt-4">
                  {/* Card B (Back) */}
                  <div className="absolute top-4 right-4 w-4/5 bg-surface border border-border/50 rounded-xl p-4 shadow-sm transform rotate-3">
                    <div className="text-xs text-muted-foreground mb-2">Invoice #INV-1235</div>
                    <div className="font-medium text-sm">ABC Cleaning</div>
                    <div className="font-semibold mt-1">₹45,000</div>
                  </div>
                  
                  {/* Card A (Front) */}
                  <div className="absolute top-0 left-0 w-4/5 bg-background border border-border rounded-xl p-4 shadow-md z-10">
                    <div className="text-xs text-muted-foreground mb-2">Invoice #INV-1234</div>
                    <div className="font-medium text-sm">ABC Cleaning</div>
                    <div className="font-semibold mt-1">₹45,000</div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 flex justify-center z-20">
                    <div className="bg-background rounded-full px-4 py-2 border border-warning/30 shadow-lg flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                      <span className="text-xs font-semibold text-warning tracking-wide">POTENTIAL DUPLICATE</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-sm text-muted-foreground font-medium">92% similarity score</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
