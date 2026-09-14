"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Play,
  Activity,
  Sparkles,
  Shield,
  Car,
  CreditCard,
  Landmark,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCounter } from "@/hooks/use-counter";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { VideoModal } from "@/components/marketing/hero/video-modal";

function AnimatedCounter({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const count = useCounter({ end: value, duration: 2000, decimals });
  return <>{count}</>;
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[#040D1A] pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Ambient Looping Video & Deep Space Navy Glow Canvas */}
      <AmbientVideoBg
        preset="architecture"
        variant="dark"
        overlayOpacity={0.72}
        showControls={false}
      />

      {/* Decorative High-End Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-5 w-[500px] h-[500px] rounded-full bg-[#00F5D4]/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-5 w-[600px] h-[600px] rounded-full bg-[#2563EB]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="container-wide relative z-10 w-full">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, Copy & Action Triggers */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top AI Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(0,245,212,0.15)]">
                <span className="flex h-2 w-2 rounded-full bg-[#00F5D4] animate-pulse shadow-[0_0_8px_#00F5D4]" />
                <span>Next-Gen AI Community OS • 520+ Societies</span>
              </div>
            </motion.div>

            {/* Main Headline with Shimmer Gradient */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6"
            >
              Run Your Society Smarter.{" "}
              <span className="block text-gradient-shimmer mt-1">
                With LeaseIQ.
              </span>
            </motion.h1>

            {/* Concise Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#7E97B8] max-w-xl mb-8 leading-relaxed font-normal"
            >
              One unified, autonomous platform orchestrating society accounting,
              instant bank reconciliation, ANPR boom barriers, resident KYC,
              and maintenance ticketing.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto"
            >
              <Button
                size="lg"
                asChild
                className="btn-cyan rounded-xl px-7 h-12 text-sm font-bold shadow-[0_4px_24px_rgba(0,245,212,0.35)]"
              >
                <Link href="/book-demo" className="flex items-center gap-2">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-ghost-cyan inline-flex items-center gap-2.5 px-5 h-12 rounded-xl text-sm font-semibold backdrop-blur-md group"
              >
                <div className="w-6 h-6 rounded-full bg-[#00F5D4] text-[#040D1A] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch 90-Sec Film</span>
              </button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-xl px-5 h-12 text-sm font-medium border-[rgba(0,245,212,0.2)] text-[#E2EBF7] hover:bg-[#0D223E] hover:text-[#00F5D4]"
              >
                <Link href="/features">Explore Modules</Link>
              </Button>
            </motion.div>

            {/* Live Telemetry Pulse Strip */}
            <motion.div
              variants={itemVariants}
              className="w-full pt-6 border-t border-[rgba(0,245,212,0.12)]"
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#7E97B8]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse shadow-[0_0_6px_#00F5D4]" />
                  <span className="text-[#E2EBF7] font-medium font-mono">
                    24,190
                  </span>{" "}
                  Gate Passes Today
                </div>
                <div className="hidden sm:block h-3 w-[1px] bg-[rgba(0,245,212,0.15)]" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  <span className="text-[#E2EBF7] font-medium font-mono">
                    ₹28.5L
                  </span>{" "}
                  Inflow Reconciled
                </div>
                <div className="hidden sm:block h-3 w-[1px] bg-[rgba(0,245,212,0.15)]" />
                <div className="flex items-center gap-1.5 text-[#00F5D4] font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>99.98% Gateway SLA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Product Dashboard with Interactive Mouse Tilt & Connected Nodes */}
          <div
            className="lg:col-span-6 relative w-full perspective-1200 py-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Background Glow behind 3D Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[460px] max-h-[380px] bg-gradient-to-tr from-[#00F5D4]/15 via-[#3B82F6]/10 to-transparent blur-[90px] pointer-events-none" />

            {/* SVG Connecting Vector Lines for the Floating Nodes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block overflow-visible"
              viewBox="0 0 600 500"
            >
              <defs>
                <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="blueLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="purpleLine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Node 1: Top-Left to Dashboard Center-Left */}
              <line
                x1="45"
                y1="35"
                x2="120"
                y2="120"
                stroke="url(#cyanLine)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-75"
              />
              <circle cx="120" cy="120" r="3" fill="#00F5D4" />

              {/* Node 2: Top-Right to Dashboard Center-Right */}
              <line
                x1="550"
                y1="40"
                x2="480"
                y2="120"
                stroke="url(#blueLine)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-75"
              />
              <circle cx="480" cy="120" r="3" fill="#3B82F6" />

              {/* Node 3: Bottom-Left to Dashboard */}
              <line
                x1="50"
                y1="450"
                x2="130"
                y2="380"
                stroke="url(#purpleLine)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-75"
              />
              <circle cx="130" cy="380" r="3" fill="#8B5CF6" />

              {/* Node 4: Bottom-Right to Dashboard */}
              <line
                x1="540"
                y1="440"
                x2="470"
                y2="370"
                stroke="url(#goldLine)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                className="opacity-75"
              />
              <circle cx="470" cy="370" r="3" fill="#F59E0B" />
            </svg>

            {/* 5 Connected Floating Nodes */}
            {/* Node 1: Finance Node (Top-Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-3 sm:-left-6 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0A1B30]/95 border border-[#00F5D4]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_15px_rgba(0,245,212,0.15)] backdrop-blur-xl">
                <div className="w-7 h-7 rounded-lg bg-[#00F5D4]/15 flex items-center justify-center text-[#00F5D4]">
                  <Landmark className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                    <span className="text-[11px] font-bold text-white font-mono">
                      ₹28.5L Synced
                    </span>
                  </div>
                  <span className="text-[9px] text-[#7E97B8] block">
                    Nodal Bank Webhook
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Node 2: Security Node (Top-Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute -top-3 -right-3 sm:-right-6 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0A1B30]/95 border border-[#3B82F6]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-xl">
                <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/15 flex items-center justify-center text-[#3B82F6]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                    <span className="text-[11px] font-bold text-white font-mono">
                      0.8s Gate ANPR
                    </span>
                  </div>
                  <span className="text-[9px] text-[#7E97B8] block">
                    Auto-Lift Barrier
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Node 3: Resident SuperApp Node (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              }}
              className="absolute -bottom-4 -left-2 sm:-left-5 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0A1B30]/95 border border-[#8B5CF6]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_15px_rgba(139,92,246,0.15)] backdrop-blur-xl">
                <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/15 flex items-center justify-center text-[#8B5CF6]">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                    <span className="text-[11px] font-bold text-white font-mono">
                      1,247 KYC
                    </span>
                  </div>
                  <span className="text-[9px] text-[#7E97B8] block">
                    94% SuperApp Active
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Node 4: Maintenance Node (Bottom-Right) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-4 -right-2 sm:-right-5 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0A1B30]/95 border border-[#F59E0B]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_15px_rgba(245,158,11,0.15)] backdrop-blur-xl">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center text-[#F59E0B]">
                  <Wrench className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                    <span className="text-[11px] font-bold text-white font-mono">
                      98.4% SLA
                    </span>
                  </div>
                  <span className="text-[9px] text-[#7E97B8] block">
                    Auto-Dispatched
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Node 5: AI Insights Master Hub (Floating Center-Top) */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#0A1B30] via-[#0D223E] to-[#0A1B30] border border-[#00F5D4]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(0,245,212,0.25)] backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span className="text-[11px] font-semibold text-[#E2EBF7]">
                  Autonomous Bank Reconciliation
                </span>
                <span className="text-[10px] font-mono text-[#00F5D4] bg-[#00F5D4]/15 px-2 py-0.5 rounded-full font-bold">
                  99.2% MATCH
                </span>
              </div>
            </motion.div>

            {/* Main 3D Tilt Dashboard Card */}
            <motion.div
              style={{
                transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "transform 0.12s ease-out",
              }}
              className="relative w-full rounded-2xl bg-[#0A1B30]/90 border border-[rgba(0,245,212,0.2)] shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(0,245,212,0.1)] overflow-hidden backdrop-blur-2xl"
            >
              {/* Card Top Glowing Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent" />

              {/* Window Controls Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[rgba(0,245,212,0.12)] bg-[#061426]/70">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="h-3.5 w-[1px] bg-[rgba(0,245,212,0.15)] mx-1" />
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
                    LeaseIQ Command Center
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#7E97B8] font-mono bg-[#0D223E] px-2.5 py-0.5 rounded border border-[rgba(0,245,212,0.1)]">
                    Grand Arch • Towers A–F
                  </span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-5 sm:p-6 space-y-5 bg-[#0A1B30]/95 text-left">
                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#0D223E]/70 p-3 rounded-xl border border-[rgba(0,245,212,0.12)]">
                    <p className="text-[10px] text-[#7E97B8] font-medium">
                      Collection Rate
                    </p>
                    <p className="text-xl sm:text-2xl font-bold font-mono text-[#00F5D4] mt-0.5">
                      <AnimatedCounter value={98.4} decimals={1} />%
                    </p>
                    <p className="text-[9px] text-[#00F5D4]/80 font-mono mt-0.5">
                      ₹26.8L / ₹28.5L
                    </p>
                  </div>

                  <div className="bg-[#0D223E]/70 p-3 rounded-xl border border-[rgba(0,245,212,0.12)]">
                    <p className="text-[10px] text-[#7E97B8] font-medium">
                      Total Units
                    </p>
                    <p className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
                      <AnimatedCounter value={450} />
                    </p>
                    <p className="text-[9px] text-[#7E97B8] font-mono mt-0.5">
                      1,247 Residents
                    </p>
                  </div>

                  <div className="bg-[#0D223E]/70 p-3 rounded-xl border border-[rgba(0,245,212,0.12)]">
                    <p className="text-[10px] text-[#7E97B8] font-medium">
                      Gate Clearance
                    </p>
                    <p className="text-xl sm:text-2xl font-bold font-mono text-[#F59E0B] mt-0.5">
                      <AnimatedCounter value={0.8} decimals={1} />s
                    </p>
                    <p className="text-[9px] text-[#F59E0B]/80 font-mono mt-0.5">
                      FastPass ANPR
                    </p>
                  </div>
                </div>

                {/* Monthly Collection Run-Rate Chart */}
                <div className="bg-[#0D223E]/70 p-4 rounded-xl border border-[rgba(0,245,212,0.12)]">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
                      Reconciled Collections Run-Rate
                    </span>
                    <span className="text-[10px] font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded">
                      Auto-Matched
                    </span>
                  </div>

                  <div className="h-28 flex items-end justify-between gap-2.5 pt-2">
                    {[
                      { month: "Oct", val: 90 },
                      { month: "Nov", val: 92 },
                      { month: "Dec", val: 94 },
                      { month: "Jan", val: 95 },
                      { month: "Feb", val: 97 },
                      { month: "Mar", val: 98.4 },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="w-full flex flex-col items-center gap-1 h-full justify-end"
                      >
                        <span className="text-[9px] font-mono text-[#7E97B8]">
                          {item.val}%
                        </span>
                        <div className="w-full bg-[#061426] rounded-t-sm relative h-full flex items-end overflow-hidden">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${item.val}%` }}
                            transition={{ duration: 1, delay: 0.3 + idx * 0.08 }}
                            className={cn(
                              "w-full rounded-t-sm transition-colors",
                              idx === 5
                                ? "bg-gradient-to-t from-[#00F5D4]/60 to-[#00F5D4]"
                                : "bg-[#3B82F6]/40 hover:bg-[#3B82F6]/60"
                            )}
                          />
                        </div>
                        <span className="text-[9px] text-[#7E97B8] font-medium">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operations Live Ticker Rows */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-[#0D223E]/50 border border-[rgba(0,245,212,0.08)] flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-6 h-6 rounded-lg bg-[#00F5D4]/10 text-[#00F5D4] flex items-center justify-center shrink-0">
                        <Car className="w-3 h-3" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white truncate text-[11px]">
                          MH 02 EQ 8820 • Gate North
                        </p>
                        <p className="text-[9px] text-[#7E97B8] truncate">
                          FastPass Optical OCR
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded font-bold shrink-0">
                      PASS (0.4s)
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#0D223E]/50 border border-[rgba(0,245,212,0.08)] flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-6 h-6 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center shrink-0">
                        <CreditCard className="w-3 h-3" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-white truncate text-[11px]">
                          ₹4,500 via HDFC UPI • Flat A-402
                        </p>
                        <p className="text-[9px] text-[#7E97B8] truncate">
                          Tally ERP Auto-Ledger
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded font-bold shrink-0">
                      RECONCILED
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
