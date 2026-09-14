"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Shield,
  Users,
  Wrench,
  Store,
  Building,
  MessageSquare,
  BarChart3,
  Sparkles,
  ArrowRight,
  Activity,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Radio,
  Lock,
  Zap,
} from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

export interface EcosystemNode {
  id: string;
  label: string;
  category: string;
  icon: React.ElementType;
  badge: string;
  liveMetric: string;
  metricLabel: string;
  connectionLine: string;
  syncFrequency: string;
  status: string;
  telemetry: {
    endpoint: string;
    throughput: string;
    latency: string;
    activeProtocol: string;
    connectedEntities: string;
    actionTrigger: string;
  };
}

const NODES: EcosystemNode[] = [
  {
    id: "finance",
    label: "Finance & Accounts",
    category: "LEDGER ENGINE",
    icon: Landmark,
    badge: "Autonomous ERP",
    liveMetric: "₹28.5L Synced",
    metricLabel: "Auto Inflow Today",
    connectionLine: "⇄ Nodal Bank Webhooks",
    syncFrequency: "Real-time (<4ms)",
    status: "Active Sync",
    telemetry: {
      endpoint: "api.leaseiq.in/v1/finance/nodal-feed",
      throughput: "42 txn/min (99.8% match)",
      latency: "4.2 ms round-trip",
      activeProtocol: "ISO 20022 / NACH Auto-Debits",
      connectedEntities: "HDFC & ICICI Virtual Escrows ⇄ Resident Dues Ledger",
      actionTrigger: "Incoming UPI collections auto-reconcile against maintenance invoices with zero human touch.",
    },
  },
  {
    id: "security",
    label: "Perimeter & Gates",
    category: "ACCESS HARDWARE",
    icon: Shield,
    badge: "Hardware Mesh",
    liveMetric: "0.8s ANPR",
    metricLabel: "Gate Clearance",
    connectionLine: "⇄ Optical License OCR",
    syncFrequency: "Sub-second (<10ms)",
    status: "Barrier Online",
    telemetry: {
      endpoint: "iot.leaseiq.in/v1/gate/anpr-stream",
      throughput: "1,420 vehicles processed today",
      latency: "0.8s detection-to-gate",
      activeProtocol: "Wiegand / MQTT IoT Bus",
      connectedEntities: "Hikvision ANPR Cameras ⇄ Boom Barrier ⇄ Resident Intercom",
      actionTrigger: "Recognized resident license plates lift barriers instantly and push arrival alert to resident app.",
    },
  },
  {
    id: "residents",
    label: "Resident SuperApp",
    category: "COMMUNITY APP",
    icon: Users,
    badge: "1-Tap SuperApp",
    liveMetric: "1,247 Onboarded",
    metricLabel: "94% Active Residents",
    connectionLine: "⇄ Biometric & UPI",
    syncFrequency: "Live WebSockets",
    status: "Connected",
    telemetry: {
      endpoint: "ws.leaseiq.in/v1/residents/realtime",
      throughput: "3,800 active sessions/day",
      latency: "12 ms broadcast",
      activeProtocol: "Secure WebSocket (WSS / TLS 1.3)",
      connectedEntities: "iOS & Android SuperApp ⇄ Gate Guard Tablet ⇄ ERP Core",
      actionTrigger: "Residents grant digital WhatsApp guest passes, clear society dues, and book clubhouse slots.",
    },
  },
  {
    id: "maintenance",
    label: "Helpdesk & SLA",
    category: "DISPATCH QUEUE",
    icon: Wrench,
    badge: "Smart Dispatch",
    liveMetric: "97.4% SLA",
    metricLabel: "12 Open Tickets",
    connectionLine: "⇄ Auto-Routing Engine",
    syncFrequency: "Sub-second",
    status: "Queues Active",
    telemetry: {
      endpoint: "api.leaseiq.in/v1/tickets/sla-monitor",
      throughput: "2.4h avg ticket turnaround",
      latency: "15 ms dispatch",
      activeProtocol: "RESTful JSON / Webhook Queues",
      connectedEntities: "Photo Complaint Feed ⇄ Facility Staff ⇄ MC Escalation",
      actionTrigger: "Plumbing or electrical tickets auto-assign to duty technicians with SLA countdown and resident ratings.",
    },
  },
  {
    id: "vendors",
    label: "Vendors & AMCs",
    category: "CONTRACT ESCROW",
    icon: Store,
    badge: "Escrow Guardian",
    liveMetric: "8 AMCs Audited",
    metricLabel: "₹1.8L In Escrow",
    connectionLine: "⇄ GST & OCR Match",
    syncFrequency: "Daily Batch",
    status: "Compliant",
    telemetry: {
      endpoint: "api.leaseiq.in/v1/vendors/amc-escrow",
      throughput: "100% GST Validated",
      latency: "38 ms verification",
      activeProtocol: "Govt GSTIN Verification API",
      connectedEntities: "Security Agencies / Elevator AMC ⇄ Treasurer Approval Workflow",
      actionTrigger: "Vendor invoices checked against biometric guard attendance before release of milestone payments.",
    },
  },
  {
    id: "facilities",
    label: "Amenities & QR",
    category: "IOT TURNSTILES",
    icon: Building,
    badge: "Turnstile QR",
    liveMetric: "84 Bookings",
    metricLabel: "4 Turnstiles Synced",
    connectionLine: "⇄ Dynamic QR Tokens",
    syncFrequency: "Real-time",
    status: "Gates Active",
    telemetry: {
      endpoint: "iot.leaseiq.in/v1/facilities/access-token",
      throughput: "18 slots available today",
      latency: "8 ms generation",
      activeProtocol: "Dynamic TOTP Cryptographic QR",
      connectedEntities: "Resident App Booking ⇄ Clubhouse Turnstile Scanners",
      actionTrigger: "Slot reservation generates dynamic QR token valid exclusively for the booked duration at turnstile.",
    },
  },
  {
    id: "communication",
    label: "AGM & E-Voting",
    category: "LEGAL GOVERNANCE",
    icon: MessageSquare,
    badge: "Audited Ballot",
    liveMetric: "88% Quorum",
    metricLabel: "Active E-Voting",
    connectionLine: "⇄ Tamper-Proof Audit",
    syncFrequency: "Continuous",
    status: "Verified",
    telemetry: {
      endpoint: "api.leaseiq.in/v1/governance/quorum-ballot",
      throughput: "450 verified voter flat units",
      latency: "6 ms consensus",
      activeProtocol: "SHA-256 Audit Trail Cryptography",
      connectedEntities: "Management Committee ⇄ Property Owners ⇄ Legal Audit PDF",
      actionTrigger: "Society resolutions voted online with legal quorum compliance and unalterable audit certifications.",
    },
  },
  {
    id: "analytics",
    label: "CA Audit Analytics",
    category: "STATUTORY COMPLIANCE",
    icon: BarChart3,
    badge: "Audit-Ready",
    liveMetric: "100% CA-Ready",
    metricLabel: "Real-Time Balance",
    connectionLine: "⇄ Balance Sheet Feed",
    syncFrequency: "Automated Daily",
    status: "Balanced",
    telemetry: {
      endpoint: "api.leaseiq.in/v1/analytics/compliance-sync",
      throughput: "0 reconciliation mismatch",
      latency: "22 ms sync",
      activeProtocol: "Tally / Zoho Books Two-Way Sync",
      connectedEntities: "Society Accounts ⇄ Chartered Accountant Portal",
      actionTrigger: "Income-expenditure schedules, statutory balance sheets, and audit trails generated continuously.",
    },
  },
];

export function EcosystemSection() {
  const [ref, isIntersecting] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const activeNode = NODES[selectedNodeIndex];

  // Symmetrical circular coordinates (Center: 360, 360, Radius: 250 in a 720x720 coordinate space)
  const centerX = 360;
  const centerY = 360;
  const radius = 250;

  const nodePositions = NODES.map((_, i) => {
    // Start top (-90 deg) and distribute clockwise
    const angleRad = ((i * 360) / NODES.length - 90) * (Math.PI / 180);
    const x = Math.round(centerX + radius * Math.cos(angleRad));
    const y = Math.round(centerY + radius * Math.sin(angleRad));
    return { x, y, angleDeg: (i * 360) / NODES.length };
  });

  return (
    <section className="w-full bg-[#040D1A] section-padding py-24 sm:py-32 overflow-hidden relative border-t border-b border-[rgba(0,245,212,0.1)]">
      {/* Decorative Radial Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00F5D4]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="container-wide relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Unified Operating Architecture
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            The Complete Connected <span className="text-gradient-cyan">Ecosystem</span>
          </h2>
          <p className="text-base sm:text-lg text-[#7E97B8] leading-relaxed font-normal">
            Eliminate fragmented software and disconnected paper trails. Every gate barrier, bank transaction, resident ticket, and vendor audit connects directly into the central LeaseIQ ERP backbone.
          </p>
        </div>

        {/* ================= DESKTOP COMPLETE NETWORK CANVAS ================= */}
        <div
          ref={ref as any}
          className="relative hidden lg:block w-full max-w-[840px] mx-auto aspect-square mb-12 select-none"
        >
          {/* SVG Connection Beams & Dynamic Travelling Pulses */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 720 720"
          >
            <defs>
              {/* Linear cyan gradient for connection lines */}
              <linearGradient id="cyanBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.8" />
              </linearGradient>

              {/* Active illuminated beam */}
              <linearGradient id="activeCyanBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
              </linearGradient>

              {/* Radial Core Glow */}
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#00F5D4" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Core Background Radiance */}
            <circle cx={centerX} cy={centerY} r="180" fill="url(#hubGlow)" />

            {/* Outer Mesh Inter-Connecting Ring */}
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="#00F5D4"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              opacity="0.25"
            />

            {/* Radial Beams from Core to each Satellite Node */}
            {nodePositions.map((pos, i) => {
              const isSelected = selectedNodeIndex === i;
              return (
                <g key={i}>
                  {/* Base Connection Beam */}
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={isSelected ? "url(#activeCyanBeam)" : "url(#cyanBeam)"}
                    strokeWidth={isSelected ? "3" : "1.8"}
                    strokeDasharray={isSelected ? "none" : "5 5"}
                    opacity={isSelected ? 1 : 0.4}
                    className="transition-all duration-300"
                  />

                  {/* Travelling Data Packet Pulse (Framer Motion Animation) */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isSelected ? "5" : "3.5"}
                    fill={isSelected ? "#00F5D4" : "#3B82F6"}
                    animate={{
                      cx: [centerX, pos.x, centerX],
                      cy: [centerY, pos.y, centerY],
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 3 + (i % 3) * 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central LeaseIQ Core ERP Hub */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64 rounded-full bg-[#0A1B30] text-white flex flex-col items-center justify-center p-6 shadow-2xl border-4 border-[#00F5D4] ring-4 ring-[#00F5D4]/30 shadow-[0_0_50px_rgba(0,245,212,0.3)]"
          >
            {/* Animated Radiating Pulse Waves */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00F5D4]/40 animate-ping pointer-events-none opacity-25" />
            <div className="absolute -inset-3 rounded-full border border-[#00F5D4]/30 animate-pulse pointer-events-none opacity-40" />

            {/* Core Badge Content */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00F5D4]/20 text-[#00F5D4] text-[10px] font-bold tracking-wider uppercase mb-2 border border-[#00F5D4]/40">
              <Cpu className="w-3 h-3 animate-spin text-[#00F5D4]" style={{ animationDuration: "10s" }} />
              Core Engine
            </div>

            <h3 className="font-serif text-2xl font-bold tracking-wider text-white">
              LEASEIQ
            </h3>
            <span className="text-[11px] uppercase tracking-widest text-[#00F5D4] font-semibold mt-0.5">
              Operating Platform
            </span>

            {/* Live Connected Event Throughput */}
            <div className="mt-3 pt-3 border-t border-[rgba(0,245,212,0.2)] w-full flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 text-[#00F5D4] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                24,190 Events Today
              </div>
              <span className="text-[10px] text-[#7E97B8] mt-0.5 font-medium">
                Mesh Latency: &lt; 8ms
              </span>
            </div>
          </div>

          {/* 8 Connected Module Pods */}
          {NODES.map((node, i) => {
            const pos = nodePositions[i];
            const isSelected = selectedNodeIndex === i;

            // Offset to center the card on the coordinate (width: ~140px, height: ~84px)
            const leftPercent = (pos.x / 720) * 100;
            const topPercent = (pos.y / 720) * 100;

            return (
              <div
                key={node.id}
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setSelectedNodeIndex(i)}
                className="absolute z-20 cursor-pointer group"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                  className={cn(
                    "w-44 p-3 rounded-2xl border transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col justify-between",
                    isSelected
                      ? "bg-[#0A1B30] border-[#00F5D4] ring-4 ring-[#00F5D4]/30 shadow-[0_0_25px_rgba(0,245,212,0.3)] -translate-y-1 text-white"
                      : "bg-[#0A1B30]/85 border-[rgba(0,245,212,0.15)] text-white hover:border-[#00F5D4]/50 hover:shadow-lg"
                  )}
                >
                  {/* Top Bar: Icon + Status */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                      isSelected
                        ? "bg-[#00F5D4] text-[#040D1A]"
                        : "bg-[#00F5D4]/10 text-[#00F5D4] group-hover:bg-[#00F5D4] group-hover:text-[#040D1A]"
                    )}>
                      <node.icon className="w-4 h-4" />
                    </div>

                    <span className={cn(
                      "text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1",
                      isSelected
                        ? "bg-[#00F5D4]/20 text-[#00F5D4] border-[#00F5D4]/40"
                        : "bg-[#0D223E] text-[#7E97B8] border-[rgba(0,245,212,0.15)]"
                    )}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                      {node.status}
                    </span>
                  </div>

                  {/* Node Label */}
                  <h4 className="text-xs font-serif font-bold text-white tracking-tight truncate">
                    {node.label}
                  </h4>

                  {/* Live Connected Metric Badge */}
                  <div className="mt-1.5 pt-1.5 border-t border-[rgba(0,245,212,0.12)] flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#00F5D4] tracking-tight">
                        {node.liveMetric}
                      </div>
                      <div className="text-[9px] text-[#7E97B8] font-medium truncate">
                        {node.metricLabel}
                      </div>
                    </div>
                    <ArrowRight className={cn(
                      "w-3 h-3 transition-transform",
                      isSelected ? "translate-x-0.5 text-[#00F5D4]" : "text-[#7E97B8] group-hover:text-[#00F5D4]"
                    )} />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ================= INTERACTIVE TELEMETRY & DATA STREAM INSPECTOR ================= */}
        <div className="max-w-4xl mx-auto mt-4">
          <div className="rounded-3xl border border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/90 shadow-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl card-accent-line text-white">
            {/* Top Accent Strip */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(0,245,212,0.12)]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#00F5D4]/15 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4] shadow-sm">
                  <activeNode.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00F5D4]/10 text-[#00F5D4] uppercase tracking-wider border border-[#00F5D4]/20">
                      {activeNode.category}
                    </span>
                    <span className="text-xs text-[#00F5D4] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                      Live Data Pipe
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {activeNode.label} ⇄ LeaseIQ Core Hub
                  </h3>
                </div>
              </div>

              {/* Module Quick Switcher */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {NODES.map((node, i) => (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeIndex(i)}
                    className={cn(
                      "p-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap",
                      selectedNodeIndex === i
                        ? "bg-[#00F5D4] text-[#040D1A] shadow-md font-bold"
                        : "bg-[#061220] hover:bg-[rgba(0,245,212,0.1)] text-[#7E97B8] border border-[rgba(0,245,212,0.12)]"
                    )}
                    title={node.label}
                  >
                    <node.icon className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">{node.label.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Connected Data Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {/* Telemetry Metric 1: Live Connected Feed */}
              <div className="p-4 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                <span className="text-[10px] uppercase font-bold text-[#7E97B8] tracking-wider block mb-1">
                  Active Connected Feed
                </span>
                <div className="text-lg font-serif font-bold text-white">
                  {activeNode.liveMetric}
                </div>
                <div className="text-xs text-[#00F5D4] font-semibold mt-0.5">
                  {activeNode.telemetry.throughput}
                </div>
                <div className="text-[11px] text-[#7E97B8] mt-2 font-mono break-all">
                  {activeNode.telemetry.endpoint}
                </div>
              </div>

              {/* Telemetry Metric 2: Sync Protocol & Latency */}
              <div className="p-4 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                <span className="text-[10px] uppercase font-bold text-[#7E97B8] tracking-wider block mb-1">
                  Sync Protocol & Speed
                </span>
                <div className="text-lg font-serif font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#00F5D4]" />
                  {activeNode.telemetry.latency}
                </div>
                <div className="text-xs text-[#E2EBF7]/80 font-medium mt-0.5">
                  {activeNode.telemetry.activeProtocol}
                </div>
                <div className="text-[11px] text-[#00F5D4] mt-2 flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3" /> End-to-End Encrypted (TLS 1.3)
                </div>
              </div>

              {/* Telemetry Metric 3: Inter-Module Relay */}
              <div className="p-4 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                <span className="text-[10px] uppercase font-bold text-[#7E97B8] tracking-wider block mb-1">
                  Connected Entities
                </span>
                <div className="text-xs font-semibold text-white leading-snug">
                  {activeNode.telemetry.connectedEntities}
                </div>
                <div className="mt-2 text-[11px] text-[#7E97B8] leading-relaxed">
                  {activeNode.telemetry.actionTrigger}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MOBILE RESPONSIVE GRID ================= */}
        <div className="lg:hidden mt-8">
          <div className="mb-4 p-4 rounded-2xl bg-[#0A1B30] text-white flex items-center justify-between border border-[rgba(0,245,212,0.18)] shadow-lg">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#00F5D4] font-bold">LeaseIQ Core Hub</div>
              <div className="text-lg font-serif font-bold">24,190 Events Processed</div>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#00F5D4] font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                8 Modules Synced
              </span>
              <span className="text-[10px] text-[#7E97B8]">&lt; 8ms Mesh Latency</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NODES.map((node, i) => (
              <div
                key={node.id}
                onClick={() => setSelectedNodeIndex(i)}
                className={cn(
                  "p-4 rounded-2xl border transition-all cursor-pointer bg-[#0A1B30]",
                  selectedNodeIndex === i
                    ? "border-[#00F5D4] ring-2 ring-[#00F5D4]/30 shadow-lg shadow-[#00F5D4]/10"
                    : "border-[rgba(0,245,212,0.14)]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-[#00F5D4]/15 text-[#00F5D4] flex items-center justify-center">
                    <node.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded-full border border-[#00F5D4]/30">
                    {node.status}
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-white">{node.label}</h4>
                <div className="mt-2 pt-2 border-t border-[rgba(0,245,212,0.1)] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#00F5D4]">{node.liveMetric}</span>
                  <span className="text-[10px] text-[#7E97B8]">{node.connectionLine}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcosystemSection;
