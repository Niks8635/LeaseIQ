"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Receipt,
  FileCheck,
  MessageSquareWarning,
  MessageSquareCheck,
  FileSpreadsheet,
  Cpu,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComparisonItem {
  domain: string;
  before: {
    title: string;
    description: string;
    painPoint: string;
    metric: string;
  };
  after: {
    title: string;
    description: string;
    solution: string;
    metric: string;
  };
}

const COMPARISONS: ComparisonItem[] = [
  {
    domain: "Gate Security & Visitors",
    before: {
      title: "Physical Paper Registers & Intercom Choke",
      description: "Visitors write illegible contact numbers in ragged paper logbooks. Security guards manually dial intercoms while long vehicle queues block the main gate.",
      painPoint: "Zero verification, security blindspots & vehicle congestion",
      metric: "3.5 Mins Avg Gate Wait",
    },
    after: {
      title: "Optical ANPR & WhatsApp FastPass QR",
      description: "Sub-0.8s optical number plate recognition automatically opens boom barriers for residents. Guests enter via WhatsApp QR code passes without guard delays.",
      solution: "100% verified entries, zero queue congestion & instant resident push alert",
      metric: "0.8s Clearance Speed",
    },
  },
  {
    domain: "Maintenance Billing & Inflows",
    before: {
      title: "Manual Cheques & Disconnected WhatsApp Slips",
      description: "Treasurers spend weeks deciphering NEFT references, sending manual reminder messages, and reconciling bank passbooks line-by-line in Excel.",
      painPoint: "High defaulter rates, 45-day collection lags & manual accounting fatigue",
      metric: "72% Avg Collection Rate",
    },
    after: {
      title: "Automated GST Invoicing & Autonomous Bank Sync",
      description: "Invoices dispatch automatically on the 1st of every month with 1-tap UPI payment links. Bank nodal feeds auto-match inflows with 98.8% accuracy.",
      solution: "Zero manual data keying, automated late penalties & Tally Prime 2-way sync",
      metric: "98.4% Collection Within 7 Days",
    },
  },
  {
    domain: "Complaints & Helpdesk",
    before: {
      title: "WhatsApp Group Chaos & Lost Chits",
      description: "Plumbing and lift complaints get lost in informal WhatsApp chat groups. Residents feel ignored because there is zero accountability or SLA tracking.",
      painPoint: "Unresolved issues, angry committee meetings & repeat contractor calls",
      metric: "4.8 Days Avg Resolution",
    },
    after: {
      title: "SLA-Enforced Digital Ticketing Pipeline",
      description: "Residents submit photo evidence directly in the SuperApp. Tasks automatically assign to contracted vendors with live SLA countdowns and rating reviews.",
      solution: "Complete audit transparency, automated vendor escalation & 97% SLA compliance",
      metric: "2.4 Hours Avg Turnaround",
    },
  },
  {
    domain: "Noticeboard & AGM Voting",
    before: {
      title: "Paper Notices Pasted in Elevators",
      description: "Important circulars get torn or go unread. AGM meetings frequently fail to reach quorum because working professionals and tenant owners are unreachable.",
      painPoint: "Low member engagement, missed deadlines & legal dispute risks",
      metric: "< 35% AGM Quorum",
    },
    after: {
      title: "Multi-Channel Broadcasts & Digital Polling",
      description: "Official notifications reach residents instantly on their SuperApp and WhatsApp. Quorum-verified digital voting enables transparent democratic resolutions.",
      solution: "96.4% read rate within 4 hours and immutable digital voting audit trails",
      metric: "84%+ Quorum Attendance",
    },
  },
];

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"interactive" | "grid">("interactive");

  const current = COMPARISONS[activeTab];

  return (
    <section className="w-full section-padding bg-[#040D1A] py-24 sm:py-32 relative overflow-hidden border-b border-[rgba(0,245,212,0.1)]" id="before-after">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F5D4]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="THE LEASEIQ DIFFERENCE"
          title="From Disconnected Manual Chaos to"
          titleAccent="Intelligent Society Control."
          description="See how residential societies across India replace outdated manual processes with an autonomous, transparent operating system."
          align="center"
        />

        {/* View Mode Toggle */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <div className="inline-flex p-1 bg-[#061220] border border-[rgba(0,245,212,0.15)] rounded-full text-xs">
            <button
              onClick={() => setViewMode("interactive")}
              className={cn(
                "px-4 py-1.5 rounded-full font-medium transition-all",
                viewMode === "interactive"
                  ? "bg-[#00F5D4] text-[#040D1A] font-bold shadow-md shadow-[#00F5D4]/20"
                  : "text-[#7E97B8] hover:text-white"
              )}
            >
              Interactive Focus View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "px-4 py-1.5 rounded-full font-medium transition-all",
                viewMode === "grid"
                  ? "bg-[#00F5D4] text-[#040D1A] font-bold shadow-md shadow-[#00F5D4]/20"
                  : "text-[#7E97B8] hover:text-white"
              )}
            >
              Side-by-Side Matrix
            </button>
          </div>
        </div>

        {/* INTERACTIVE FOCUS VIEW */}
        {viewMode === "interactive" && (
          <div className="mt-12 max-w-5xl mx-auto">
            {/* Domain Tabs */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
              {COMPARISONS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap border",
                    activeTab === idx
                      ? "bg-[#00F5D4] text-[#040D1A] border-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.25)] font-bold scale-105"
                      : "bg-[#0A1B30] text-[#7E97B8] hover:text-white hover:bg-[rgba(0,245,212,0.06)] border-[rgba(0,245,212,0.12)]"
                  )}
                >
                  {item.domain}
                </button>
              ))}
            </div>

            {/* Split Comparison Cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6 items-stretch">
              {/* The Old Way (Red Accent) */}
              <motion.div
                key={`before-${activeTab}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-red-500/20 bg-red-950/20 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                      <XCircle className="w-3.5 h-3.5" /> The Legacy Manual Way
                    </span>
                    <span className="text-xs font-mono font-bold text-red-400">
                      {current.before.metric}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                    {current.before.title}
                  </h3>
                  <p className="text-sm text-[#7E97B8] leading-relaxed mb-6">
                    {current.before.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-red-500/15">
                  <p className="text-xs font-semibold text-red-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Impact: {current.before.painPoint}</span>
                  </p>
                </div>
              </motion.div>

              {/* The LeaseIQ Way (Cyan/Emerald Accent) */}
              <motion.div
                key={`after-${activeTab}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[rgba(0,245,212,0.3)] bg-[#0A1B30]/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl card-accent-line relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00F5D4]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/35 text-[#00F5D4] text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The LeaseIQ Way
                    </span>
                    <span className="text-xs font-mono font-bold text-[#00F5D4]">
                      {current.after.metric}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                    {current.after.title}
                  </h3>
                  <p className="text-sm text-[#E2EBF7]/90 leading-relaxed mb-6">
                    {current.after.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[rgba(0,245,212,0.15)]">
                  <p className="text-xs font-semibold text-[#00F5D4] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-[#00F5D4]" />
                    <span>Outcome: {current.after.solution}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* SIDE-BY-SIDE MATRIX VIEW */}
        {viewMode === "grid" && (
          <div className="mt-12 max-w-6xl mx-auto space-y-6">
            {COMPARISONS.map((comp, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-4 p-6 rounded-3xl bg-[#0A1B30] border border-[rgba(0,245,212,0.14)] shadow-xl hover:border-[rgba(0,245,212,0.35)] transition-all card-accent-line"
              >
                {/* Before Column */}
                <div className="space-y-2 pr-0 md:pr-4 md:border-r border-[rgba(0,245,212,0.1)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Before LeaseIQ ({comp.domain})
                    </span>
                    <span className="text-[11px] font-mono text-[#7E97B8]">{comp.before.metric}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-white">{comp.before.title}</h4>
                  <p className="text-xs text-[#7E97B8] leading-relaxed">{comp.before.description}</p>
                </div>

                {/* After Column */}
                <div className="space-y-2 pl-0 md:pl-4 pt-4 md:pt-0 border-t md:border-t-0 border-[rgba(0,245,212,0.1)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00F5D4] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> The LeaseIQ Advantage
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#00F5D4]">{comp.after.metric}</span>
                  </div>
                  <h4 className="font-semibold text-sm text-white">{comp.after.title}</h4>
                  <p className="text-xs text-[#E2EBF7]/90 leading-relaxed">{comp.after.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Switchboard CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.18)] max-w-xl mx-auto shadow-xl">
            <span className="text-xs font-medium text-[#E2EBF7]">
              Ready to transition your society from manual registers to LeaseIQ?
            </span>
            <Button asChild size="sm" className="btn-cyan rounded-full px-5 font-bold shrink-0">
              <a href="/book-demo">
                Book Society Migration <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfterSection;
