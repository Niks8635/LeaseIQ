"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Shield,
  Brain,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Car,
  BellRing,
  CreditCard,
  QrCode,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CHAPTERS = [
  {
    id: 1,
    title: "Smart Gate & ANPR",
    duration: "0:25",
    icon: Shield,
    tagline: "Boom Barrier & Digital Intercom",
  },
  {
    id: 2,
    title: "AI Finance Hub",
    duration: "0:50",
    icon: Brain,
    tagline: "Auto-Reconciliation & Tally Sync",
  },
  {
    id: 3,
    title: "Resident SuperApp",
    duration: "1:15",
    icon: Smartphone,
    tagline: "1-Tap UPI & Clubhouse Booking",
  },
  {
    id: 4,
    title: "Committee Vault",
    duration: "1:30",
    icon: BarChart3,
    tagline: "Live Health Index & Audit Trail",
  },
];

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [activeChapter, setActiveChapter] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(15);
  const [simStep, setSimStep] = useState(1);

  // Auto advance progress and simulation stages
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveChapter((c) => (c % 4) + 1);
          return 0;
        }
        return prev + 1.5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  // Micro step cycling inside current chapter
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const stepInterval = setInterval(() => {
      setSimStep((s) => (s % 3) + 1);
    }, 2800);
    return () => clearInterval(stepInterval);
  }, [isOpen, isPlaying, activeChapter]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-card border border-border/70 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-surface/80">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
              <div>
                <h3 className="font-serif font-semibold text-foreground text-sm sm:text-base">
                  LeaseIQ Interactive Platform Film (90 Sec)
                </h3>
                <p className="text-[11px] text-muted-foreground">
                  Chapter {activeChapter} of 4 • {CHAPTERS[activeChapter - 1].title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Player Display Screen */}
          <div className="relative bg-[#0D0D11] min-h-[380px] sm:min-h-[460px] flex items-center justify-center p-6 overflow-hidden">
            {/* Cinematic Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.12),transparent_70%)] pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #FFF 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Chapter 1: Smart Gate & ANPR Live Action Simulation */}
            {activeChapter === 1 && (
              <motion.div
                key="chap-1"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-2xl text-white space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <Car className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">Main Gate ANPR & FastPass</h4>
                      <p className="text-xs text-white/60">Automated Vehicle Recognition • Gate #01</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/40 text-xs">
                    Live Optical Feed
                  </Badge>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Gate Camera View */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-gold bg-black/60 px-2 py-0.5 rounded">
                      CAM-01 4K 60FPS
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono text-emerald-400">ANPR LOCK ACQUIRED</span>
                    </div>

                    <div className="p-3 bg-black/60 rounded-lg border border-white/10 font-mono text-center mb-3">
                      <span className="text-lg font-bold tracking-widest text-white">MH 02 EQ 8820</span>
                      <p className="text-[10px] text-white/50 mt-0.5">Matched: Flat B-602 (Owner Vehicle)</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span>RFID Barrier Status:</span>
                      <span className="text-emerald-400 font-semibold">AUTOLIFT ENGAGED (0.4s)</span>
                    </div>
                  </div>

                  {/* Resident Phone Alert */}
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BellRing className="w-4 h-4 text-gold" />
                        <span className="text-xs font-semibold text-white/90">Resident Mobile Sync</span>
                      </div>
                      <div className="p-3 bg-black/50 rounded-lg border border-gold/30">
                        <p className="text-xs font-medium text-white">Vehicle Entry Logged</p>
                        <p className="text-[11px] text-white/60 mt-1">
                          Audi A4 entered via North Gate at 10:24 AM. FastPass balance valid.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                      <span>Audit Hash: #EQ-8820-A</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Logged
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Chapter 2: AI Finance Hub Simulation */}
            {activeChapter === 2 && (
              <motion.div
                key="chap-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-2xl text-white space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">Autonomous AI Bank Reconciliation</h4>
                      <p className="text-xs text-white/60">Bank Statement Feed → Real-Time Ledger Matching</p>
                    </div>
                  </div>
                  <Badge className="bg-gold/20 text-gold border-gold/40 text-xs">98.8% AI Match Rate</Badge>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>HDFC Bank Nodal Statement (NEFT / UPI)</span>
                    <span className="font-mono text-emerald-400">Live Inflow Stream</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3 rounded-lg bg-black/60 border border-emerald-500/30 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-mono text-white">NEFT/CMS-984210 • ₹4,500</p>
                        <p className="text-[11px] text-white/50">From: Vikramaditya Deshmukh</p>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-none">
                        AUTO-MATCHED (Flat A-402)
                      </Badge>
                    </div>

                    <div className="p-3 rounded-lg bg-black/60 border border-gold/30 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-mono text-white">INV-8419 • ABC Security Services • ₹85,000</p>
                        <p className="text-[11px] text-white/50">OCR Scanned & GST Verified (18% ITC)</p>
                      </div>
                      <Badge className="bg-gold/20 text-gold border-none">APPROVED BY TREASURER</Badge>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Tally Prime & ERP 2-Way Sync Verified • Zero Manual Data Entry Required</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Chapter 3: Resident SuperApp Simulation */}
            {activeChapter === 3 && (
              <motion.div
                key="chap-3"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-2xl text-white space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">Resident Living & Self-Service Experience</h4>
                      <p className="text-xs text-white/60">One Tap for Maintenance, Visitors, & Club Booking</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/40 text-xs">
                    iOS & Android Ready
                  </Badge>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-white">Instant UPI Maintenance</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 mb-3 text-center">
                      <p className="text-xs text-white/60">Maintenance Due (Oct 2025)</p>
                      <p className="text-2xl font-bold font-serif text-white mt-1">₹4,500.00</p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-500 text-black text-xs font-bold">
                        ✓ PAID VIA GPAY
                      </span>
                    </div>
                    <p className="text-[11px] text-white/50 text-center">
                      Computerized GST Receipt instantly generated & emailed.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <QrCode className="w-4 h-4 text-gold" />
                      <span className="text-xs font-semibold text-white">Clubhouse Tennis Slot</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/60 border border-gold/30 mb-3 text-center">
                      <p className="text-xs text-gold font-medium">Court 2 Reserved Today</p>
                      <p className="text-sm font-semibold text-white mt-1">06:00 PM – 07:00 PM</p>
                      <span className="inline-block mt-2 px-3 py-1 rounded bg-white/10 text-white font-mono text-[11px]">
                        PASS: #CLB-8921
                      </span>
                    </div>
                    <p className="text-[11px] text-white/50 text-center">
                      Smart turnstile opens automatically upon QR scan.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Chapter 4: Committee Command Center */}
            {activeChapter === 4 && (
              <motion.div
                key="chap-4"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-2xl text-white space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">Executive Committee Governance & Audit</h4>
                      <p className="text-xs text-white/60">Complete 360° Operational Oversight</p>
                    </div>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/40 text-xs">
                    Audit Vault Active
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-xs text-white/60">Society Health</p>
                    <p className="text-3xl font-bold font-serif text-emerald-400 mt-1">92/100</p>
                    <p className="text-[10px] text-emerald-400/80 mt-1">Excellent Status</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-xs text-white/60">Collection Ratio</p>
                    <p className="text-3xl font-bold font-serif text-gold mt-1">98.4%</p>
                    <p className="text-[10px] text-white/50 mt-1">₹28.5L / ₹28.9L</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-xs text-white/60">Open Complaints</p>
                    <p className="text-3xl font-bold font-serif text-white mt-1">2</p>
                    <p className="text-[10px] text-white/50 mt-1">Avg SLA: 2.1 hrs</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="text-xs">
                    <p className="font-semibold text-white">Immutable AGM Audit Package</p>
                    <p className="text-white/60 text-[11px] mt-0.5">
                      Auditor-certified P&L, balance sheet, defaulters ledger & GST returns ready.
                    </p>
                  </div>
                  <Button size="sm" asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
                    <a href="/book-demo">Schedule Walkthrough</a>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Timeline Scrubber & Player Controls */}
          <div className="px-6 py-4 bg-surface border-t border-border/60">
            {/* Scrubber Bar */}
            <div className="w-full bg-border/60 h-2 rounded-full overflow-hidden mb-4 cursor-pointer">
              <div
                className="bg-gold h-full rounded-full transition-all duration-150 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
              </div>
            </div>

            {/* Controls Bar & Chapter Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full h-9 w-9 p-0"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 text-gold" />}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setProgress(0)}
                  className="rounded-full h-9 w-9 p-0"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  {activeChapter === 1 && "0:22 / 1:30"}
                  {activeChapter === 2 && "0:48 / 1:30"}
                  {activeChapter === 3 && "1:10 / 1:30"}
                  {activeChapter === 4 && "1:28 / 1:30"}
                </span>
              </div>

              {/* Chapter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
                {CHAPTERS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveChapter(c.id);
                      setProgress(c.id === 1 ? 15 : c.id === 2 ? 40 : c.id === 3 ? 70 : 90);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeChapter === c.id
                        ? "bg-foreground text-background font-semibold shadow-sm"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <c.icon className="w-3.5 h-3.5" />
                    <span>{c.title}</span>
                  </button>
                ))}
              </div>

              {/* Action Button */}
              <Button asChild size="sm" className="bg-gold text-gold-foreground hover:bg-gold/90 shrink-0">
                <a href="/book-demo">
                  Book Live Demo <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
