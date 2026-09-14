"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Users,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  UploadCloud,
  Smartphone,
  CreditCard,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    title: "Set Up Society & Units",
    headline: "Configure Your Society in Under 48 Hours",
    description:
      "Upload your existing flat directory via simple Excel import or let our dedicated onboarding team configure your towers, wings, square footage, and maintenance tariff slabs.",
    icon: Building2,
    badge: "Day 1 Setup",
    features: [
      "Bulk Excel / CSV flat and resident import",
      "Custom tariff rules (per sq. ft. vs flat slab)",
      "Automated parking bay & clubhouse allotment",
    ],
    preview: {
      tag: "Society Structure Configured",
      items: [
        { label: "Towers & Wings", val: "4 Towers (A, B, C, D)" },
        { label: "Total Units", val: "450 Flats Mapped" },
        { label: "Billing Formula", val: "₹3.50/sqft + Sinking Fund" },
      ],
    },
  },
  {
    step: "02",
    title: "Onboard Residents & Staff",
    headline: "Frictionless Self-Serve Activation",
    description:
      "Residents receive an instant WhatsApp invitation link to download the LeaseIQ SuperApp. Security guards receive pre-configured Android tablets with touch-optimized front-gate software.",
    icon: Users,
    badge: "Day 2 Launch",
    features: [
      "1-Click WhatsApp onboarding invite with magic login",
      "Owner vs tenant tenancy agreement verification",
      "Biometric guard & domestic staff RFID badge sync",
    ],
    preview: {
      tag: "Member Activation Live",
      items: [
        { label: "Residents Activated", val: "94% within 72 Hours" },
        { label: "Gate Tablets Deployed", val: "3 Active Kiosks" },
        { label: "Domestic Staff Registered", val: "184 Maid & Driver Passes" },
      ],
    },
  },
  {
    step: "03",
    title: "Manage Daily Operations",
    headline: "Automate Everyday Society Workflows",
    description:
      "Perimeter gates automatically scan visitor plates, delivery couriers are pre-approved via FastPass WhatsApp QR, and plumbing or electrical tickets route directly to contracted technicians.",
    icon: ShieldCheck,
    badge: "Everyday Flow",
    features: [
      "Sub-0.8s ANPR optical barrier lifting",
      "Digital intercom push notifications to resident phones",
      "SLA-enforced facility maintenance dispatch",
    ],
    preview: {
      tag: "Live Operations Engine",
      items: [
        { label: "Avg Gate Clearance", val: "0.8 Seconds" },
        { label: "Deliveries Today", val: "312 Pre-approved" },
        { label: "Open Tickets Resolved", val: "97% within SLA" },
      ],
    },
  },
  {
    step: "04",
    title: "Track Finances & Intelligence",
    headline: "Autonomous Accounting & 1-Click AGM Audits",
    description:
      "Bank nodal statements ingest automatically to reconcile resident UPI payments. Management committees access real-time society health scores and generate CA-certified AGM audit packs.",
    icon: BarChart3,
    badge: "Audit Transparency",
    features: [
      "Real-time bank nodal UPI & NEFT auto-reconciliation",
      "Tally Prime & ERP 2-way data synchronization",
      "One-click auditor balance sheet & defaulter reports",
    ],
    preview: {
      tag: "Executive Financial Oversight",
      items: [
        { label: "Collection Ratio", val: "98.4% (vs 72% manual)" },
        { label: "Manual Accounting Hours", val: "-35 Hours/Month" },
        { label: "Audit Readiness", val: "100% Bye-Law Compliant" },
      ],
    },
  },
];

export function HowItWorksSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section className="w-full section-padding bg-[#040D1A] py-24 sm:py-32 relative overflow-hidden border-b border-[rgba(0,245,212,0.1)]" id="how-it-works">
      {/* Ambient Looping Video & Poster */}
      <AmbientVideoBg preset="nightscape" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F5D4]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="OPERATIONAL JOURNEY"
          title="How LeaseIQ Works for"
          titleAccent="Your Society."
          description="A proven, 4-step framework that takes your residential community from manual spreadsheets to a fully automated smart society in less than 48 hours."
          align="center"
        />

        {/* 4 Steps Indicator Bar */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    "p-4 sm:p-5 rounded-2xl text-left transition-all border relative flex flex-col justify-between min-h-[130px] group backdrop-blur-md",
                    isActive
                      ? "bg-[#0A1B30] border-[#00F5D4] shadow-[0_0_20px_rgba(0,245,212,0.15)] ring-1 ring-[#00F5D4]"
                      : "bg-[#0A1B30]/50 border-[rgba(0,245,212,0.12)] hover:bg-[#0A1B30] hover:border-[rgba(0,245,212,0.3)]"
                  )}
                >
                  <div className="flex items-center justify-between w-full mb-3">
                    <span
                      className={cn(
                        "text-xs font-mono font-bold px-2 py-0.5 rounded",
                        isActive ? "bg-[#00F5D4] text-[#040D1A]" : "bg-[#0D223E] text-[#7E97B8]"
                      )}
                    >
                      Step {s.step}
                    </span>
                    <Icon className={cn("w-4 h-4", isActive ? "text-[#00F5D4]" : "text-[#7E97B8] group-hover:text-white")} />
                  </div>
                  <div>
                    <p className={cn("text-xs font-semibold leading-snug", isActive ? "text-white" : "text-[#7E97B8]")}>
                      {s.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details & Interactive Showcase */}
          <div className="mt-8 bg-[#0A1B30]/80 rounded-3xl border border-[rgba(0,245,212,0.16)] shadow-2xl p-6 sm:p-10 backdrop-blur-xl card-accent-line">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Left: Step Description */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#00F5D4] uppercase tracking-wider">
                      Phase 0{activeStepIndex + 1}
                    </span>
                    <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30 text-xs">
                      {activeStep.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {activeStep.headline}
                  </h3>

                  <p className="text-[#7E97B8] text-sm leading-relaxed">
                    {activeStep.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {activeStep.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#E2EBF7]">
                        <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    {activeStepIndex < 3 ? (
                      <Button
                        size="sm"
                        onClick={() => setActiveStepIndex((prev) => prev + 1)}
                        className="btn-cyan rounded-full px-5 font-bold"
                      >
                        Next Step <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    ) : (
                      <Button asChild size="sm" className="btn-cyan rounded-full px-5 font-bold">
                        <a href="/book-demo">
                          Start 48-Hour Setup <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right: Realistic UI Visual Card for this Step */}
                <div className="bg-[#061220] rounded-2xl border border-[rgba(0,245,212,0.15)] p-6 sm:p-8 space-y-5 shadow-lg">
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(0,245,212,0.12)]">
                    <span className="text-xs font-semibold text-white">{activeStep.preview.tag}</span>
                    <span className="flex h-2 w-2 rounded-full bg-[#00F5D4] animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    {activeStep.preview.items.map((item, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#0A1B30] border border-[rgba(0,245,212,0.12)] flex items-center justify-between text-xs">
                        <span className="text-[#7E97B8]">{item.label}</span>
                        <span className="font-semibold text-white font-mono">{item.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/25 flex items-center gap-2.5 text-xs text-[#00F5D4]">
                    <Sparkles className="w-4 h-4 shrink-0 text-[#00F5D4]" />
                    <span>LeaseIQ Dedicated Implementation Specialist Assigned</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
