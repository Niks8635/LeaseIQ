"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, CircleDollarSign, CheckCircle2, Zap, Play, Activity, Sparkles, Shield, Camera, Car, CreditCard, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useCounter } from "@/hooks/use-counter";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { VideoModal } from "@/components/marketing/hero/video-modal";

function AnimatedCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const count = useCounter({ end: value, duration: 2000, decimals });
  return <>{count}</>;
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const dashboardVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background section-padding pt-32 pb-24">
      {/* Ambient Looping Video & High-Resolution Architectural Background Image */}
      <AmbientVideoBg preset="architecture" variant="light" overlayOpacity={0.62} showControls={false} />

      <div className="container-wide relative z-10 flex flex-col items-center text-center">
        <motion.div className="max-w-4xl mx-auto flex flex-col items-center" variants={containerVariants} initial="hidden" animate="visible">
          {/* Top Trust Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/25 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-gold animate-ping" />
              <span className="text-xs font-semibold text-foreground tracking-wide uppercase">
                India&apos;s Premier Community ERP • 520+ Gated Societies
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#1C1C1E] dark:text-foreground font-semibold leading-[1.1] mb-6">
            Run Your Society Smarter.<br />
            <span className="text-gradient-gold">With LeaseIQ.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-[#1C1C1E]/80 dark:text-muted-foreground max-w-2xl mb-8 font-sans font-normal leading-relaxed">
            One intelligent operating system for society finance, automated security, maintenance, residents, and everyday community operations.
          </motion.p>

          {/* CTA Buttons + Watch Video Modal Trigger */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button size="lg" asChild className="bg-gold hover:bg-gold/90 text-primary-foreground rounded-full px-8 h-12 text-base font-semibold shadow-premium">
              <Link href="/book-demo">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 h-12 rounded-full bg-card/90 hover:bg-card border border-gold/40 text-foreground font-medium text-base shadow-sm hover:shadow-premium hover:border-gold transition-all duration-300 backdrop-blur-md group"
            >
              <div className="w-7 h-7 rounded-full bg-gold text-primary-foreground flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch 90-Sec Film</span>
            </button>

            <Button size="lg" variant="outline" asChild className="rounded-full px-6 h-12 text-base font-medium">
              <Link href="/features">
                Explore Platform
              </Link>
            </Button>
          </motion.div>

          {/* Live Real-time Pulse Ticker Bar */}
          <motion.div variants={itemVariants} className="w-full max-w-3xl mb-14">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-5 py-2.5 rounded-full bg-card/85 border border-border/80 backdrop-blur-md text-xs text-[#1C1C1E]/80 dark:text-muted-foreground shadow-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-foreground">Live Telemetry:</span>
                <span>24,190 Passes Processed Today</span>
              </div>
              <div className="hidden sm:block h-3 w-[1px] bg-border/80" />
              <div>
                <span className="font-semibold text-foreground">₹28.5L</span> Maintenance Inflow Reconciled
              </div>
              <div className="hidden sm:block h-3 w-[1px] bg-border/80" />
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Activity className="w-3.5 h-3.5" /> 99.98% Gateway Uptime
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Master Hero Visual Showcase */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* High-Fidelity Command Center Dashboard Container */}
          <motion.div variants={dashboardVariants} initial="hidden" animate="visible" className="relative z-10 w-full bg-card/85 backdrop-blur-2xl rounded-3xl border border-border/80 shadow-premium overflow-hidden">
            {/* Topbar Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-card/70">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-border/80 mx-2" />
                <span className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold" /> LeaseIQ Executive Command Center
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Operations</span>
                </div>
                <span className="text-xs font-medium text-foreground bg-surface px-3 py-1 rounded-lg border border-border/60 font-mono">
                  The Grand Arch Residences • Towers A–F
                </span>
              </div>
            </div>

            {/* Main Command Center Body */}
            <div className="p-6 sm:p-8 bg-surface/80 space-y-6">
              {/* 4 Core Quantitative KPIs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Units Managed", value: 450, sub: "1,247 Onboarded", prefix: "", suffix: "" },
                  { label: "On-Time Collection", value: 98.4, sub: "₹26.8L / ₹28.5L", prefix: "", suffix: "%", decimals: 1 },
                  { label: "Gate Clearance Speed", value: 0.8, sub: "FastPass ANPR", prefix: "", suffix: "s", decimals: 1 },
                  { label: "Society Health Score", value: 96, sub: "Optimal Status", prefix: "", suffix: "/100" },
                ].map((stat, i) => (
                  <div key={i} className="bg-card p-4.5 rounded-2xl border border-border/70 shadow-sm text-left">
                    <p className="text-[11px] font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold font-serif text-foreground mt-0.5">
                      {stat.prefix}<AnimatedCounter value={stat.value} decimals={stat.decimals} />{stat.suffix}
                    </p>
                    <p className="text-[10px] text-gold font-semibold mt-1 font-mono">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Two-Column Telemetry View */}
              <div className="grid md:grid-cols-12 gap-6 text-left">
                {/* Left: Monthly Inflow & Financial Run Rate */}
                <div className="md:col-span-7 bg-card p-5 sm:p-6 rounded-2xl border border-border/70 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                        Monthly Maintenance Collections & Reconciliation
                      </span>
                      <span className="text-[11px] text-muted-foreground">Oct 2024 – Mar 2025 • ₹28.5L Target</span>
                    </div>
                    <Badge variant="outline" className="text-[10px] border-gold/40 text-gold bg-gold/5 font-mono">
                      100% Invoiced
                    </Badge>
                  </div>

                  {/* Labeled Trend Bars */}
                  <div className="h-40 flex items-end justify-between gap-3 pt-3">
                    {[
                      { month: "Oct", billed: 92, collected: 90 },
                      { month: "Nov", billed: 94, collected: 92 },
                      { month: "Dec", billed: 95, collected: 94 },
                      { month: "Jan", billed: 96, collected: 95 },
                      { month: "Feb", billed: 98, collected: 97 },
                      { month: "Mar", billed: 100, collected: 98.4 },
                    ].map((item, idx) => (
                      <div key={idx} className="w-full flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] font-mono text-muted-foreground">{item.collected}%</span>
                        <div className="w-full bg-muted/60 rounded-t-md relative h-full flex items-end overflow-hidden">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${item.collected}%` }}
                            transition={{ duration: 1, delay: 0.6 + idx * 0.08 }}
                            className={cn(
                              "w-full rounded-t-md transition-colors",
                              idx === 5 ? "bg-gold" : "bg-primary/25 hover:bg-primary/40"
                            )}
                          />
                        </div>
                        <span className="text-[10px] font-medium text-muted-foreground">{item.month}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-gold" /> Current Month (98.4% Settled)
                    </span>
                    <span className="font-mono text-foreground font-semibold">₹26.8 Lakhs Collected</span>
                  </div>
                </div>

                {/* Right: Real-time Gate & Inflow Telemetry Feed */}
                <div className="md:col-span-5 bg-card p-5 sm:p-6 rounded-2xl border border-border/70 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Real-Time Operations Feed
                      </span>
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-2.5 rounded-xl bg-surface border border-border/50 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                            <Car className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-foreground truncate">MH 02 EQ 8820</p>
                            <p className="text-[10px] text-muted-foreground truncate">North Gate • Auto-Lift (0.4s)</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold shrink-0">
                          CLEARED
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-border/50 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                            <CreditCard className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-foreground truncate">₹4,500.00 via UPI</p>
                            <p className="text-[10px] text-muted-foreground truncate">Flat A-402 • Nodal Settled</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold shrink-0">
                          MATCHED
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-surface border border-border/50 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                            <Shield className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-foreground truncate">FastPass QR #DL-9912</p>
                            <p className="text-[10px] text-muted-foreground truncate">Amazon Logistics • Tower C</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-foreground bg-muted px-2 py-0.5 rounded font-semibold shrink-0">
                          VERIFIED
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Connected to Tally Prime ERP</span>
                    <Link href="/dashboard" className="text-gold font-semibold hover:underline flex items-center gap-1">
                      Full Console <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Video Walkthrough Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}

export default HeroSection;
