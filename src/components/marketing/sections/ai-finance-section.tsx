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
    <section className="section-padding bg-[#040D1A] text-white relative overflow-hidden border-b border-[rgba(0,245,212,0.1)]" ref={ref}>
      {/* Ambient Neural Data Matrix Feed & Background */}
      <AmbientVideoBg preset="cyber" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Ambient cyan glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[#00F5D4]/5 rounded-full blur-[130px] pointer-events-none" />

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
            <Card className="glass border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/90 shadow-2xl h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 card-accent-line text-white">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center text-[#00F5D4]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-white font-serif">Bank Reconciliation</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#061220] rounded-xl p-4 border border-[rgba(0,245,212,0.12)] text-sm">
                    <p className="text-[#7E97B8] text-xs mb-1">Bank Transaction</p>
                    <p className="font-medium text-white">₹4,500 — NEFT — 15 Sep</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-[#00F5D4] animate-pulse transform rotate-90 lg:rotate-0" />
                  </div>

                  <div className="bg-[#061220] rounded-xl p-4 border border-[rgba(0,245,212,0.12)] text-sm relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#00F5D4]/10 to-transparent pointer-events-none" />
                    <p className="text-[#7E97B8] text-xs mb-1">Matched Invoice</p>
                    <p className="font-medium text-white">Invoice #1247 — Flat A-402</p>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-[rgba(0,245,212,0.1)]">
                    <Badge variant="outline" className="bg-[#00F5D4]/15 text-[#00F5D4] border-[#00F5D4]/30">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> MATCHED
                    </Badge>
                    <span className="text-xs text-[#00F5D4] font-medium">98% confidence</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Invoice Intelligence */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/90 shadow-2xl h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 card-accent-line text-white">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6]">
                    <FileSearch className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-white font-serif">Invoice Intelligence</h3>
                </div>

                <div className="bg-[#061220] border border-[rgba(0,245,212,0.12)] rounded-xl p-5 relative">
                  <div className="absolute top-4 right-4 text-xs font-mono text-[#00F5D4]">SCAN_v2.4</div>
                  
                  <div className="space-y-3 mt-4 text-sm">
                    <div className="flex justify-between border-b border-[rgba(0,245,212,0.08)] pb-2">
                      <span className="text-[#7E97B8]">Vendor:</span>
                      <span className="font-medium text-white">ABC Security Services</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(0,245,212,0.08)] pb-2">
                      <span className="text-[#7E97B8]">Amount:</span>
                      <span className="font-medium text-[#00F5D4]">₹1,25,000</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(0,245,212,0.08)] pb-2">
                      <span className="text-[#7E97B8]">GST:</span>
                      <span className="font-medium text-white">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#7E97B8]">Due Date:</span>
                      <span className="font-medium text-white">30 Sep 2024</span>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                     <Badge variant="outline" className="bg-[#3B82F6]/15 text-[#3B82F6] border-[#3B82F6]/30">
                      Extracted Successfully
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Duplicate Detection */}
          <motion.div variants={itemVariants}>
            <Card className="glass border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/90 shadow-2xl h-full rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 card-accent-line text-white">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
                    <CopyX className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-white font-serif">Duplicate Detection</h3>
                </div>

                <div className="relative h-48 mt-4">
                  {/* Card B (Back) */}
                  <div className="absolute top-4 right-4 w-4/5 bg-[#061220] border border-[rgba(0,245,212,0.12)] rounded-xl p-4 shadow-sm transform rotate-3">
                    <div className="text-xs text-[#7E97B8] mb-2 font-mono">Invoice #INV-1235</div>
                    <div className="font-medium text-sm text-white">ABC Cleaning</div>
                    <div className="font-semibold mt-1 text-[#F59E0B]">₹45,000</div>
                  </div>
                  
                  {/* Card A (Front) */}
                  <div className="absolute top-0 left-0 w-4/5 bg-[#0A1B30] border border-[rgba(0,245,212,0.2)] rounded-xl p-4 shadow-md z-10">
                    <div className="text-xs text-[#7E97B8] mb-2 font-mono">Invoice #INV-1234</div>
                    <div className="font-medium text-sm text-white">ABC Cleaning</div>
                    <div className="font-semibold mt-1 text-[#F59E0B]">₹45,000</div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 flex justify-center z-20">
                    <div className="bg-[#061220] rounded-full px-4 py-2 border border-[#F59E0B]/40 shadow-lg flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
                      <span className="text-xs font-semibold text-[#F59E0B] tracking-wide">POTENTIAL DUPLICATE</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-sm text-[#7E97B8] font-medium">92% similarity score</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
