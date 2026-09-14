"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Shield,
  Wrench,
  Receipt,
  Eye,
  Megaphone,
  Briefcase,
  FileBarChart,
  CheckCircle2,
  Plus,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  QrCode,
  Calendar,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MODULE_SCREENSHOTS } from "@/lib/media-config";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { cn } from "@/lib/utils";

const MODULE_ICONS = [
  LayoutDashboard,
  Users,
  Receipt,
  Shield,
  Wrench,
  CreditCard,
  Eye,
  Megaphone,
  Briefcase,
  FileBarChart,
];

export function ProductShowcase() {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Interactive mock states
  const [billedAmount, setBilledAmount] = useState(28.5);
  const [invoiceSuccess, setInvoiceSuccess] = useState(false);
  const [reconcileSuccess, setReconcileSuccess] = useState(false);
  const [gateApproved, setGateApproved] = useState<number | null>(null);
  const [ticketStatus, setTicketStatus] = useState<Record<number, string>>({
    0: "OPEN",
    1: "IN_PROGRESS",
    2: "RESOLVED",
  });

  const activeModule = MODULE_SCREENSHOTS[activeModuleIndex];
  const Icon = MODULE_ICONS[activeModuleIndex] || LayoutDashboard;

  return (
    <section className="w-full bg-[#040D1A] section-padding py-24 sm:py-32 relative overflow-hidden border-b border-[rgba(0,245,212,0.1)]" id="modules-showcase">
      {/* Ambient Looping Cloud Tech Stream & Background */}
      <AmbientVideoBg preset="technology" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00F5D4]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="10 CORE ERP MODULES"
          title="Engineered for Every Dimension of"
          titleAccent="Modern Society Operations."
          description="Click across the 10 specialized modules to preview how LeaseIQ eliminates manual registers, stops financial leakage, and digitizes resident community life."
          align="center"
        />

        {/* 10-Module Navigation Bar (Desktop Grid + Mobile Scroll) */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-4 sm:pb-6 scrollbar-none justify-start lg:justify-center">
            {MODULE_SCREENSHOTS.map((mod, idx) => {
              const ModIcon = MODULE_ICONS[idx] || LayoutDashboard;
              const isActive = activeModuleIndex === idx;

              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all shrink-0 border",
                    isActive
                      ? "bg-[#00F5D4] text-[#040D1A] border-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.3)] font-bold scale-105"
                      : "bg-[#0A1B30] text-[#7E97B8] hover:text-white hover:bg-[rgba(0,245,212,0.06)] border-[rgba(0,245,212,0.12)]"
                  )}
                >
                  <ModIcon className={cn("w-3.5 h-3.5", isActive ? "text-[#040D1A]" : "text-[#00F5D4]")} />
                  <span>{mod.title}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Display Card with 3D perspective */}
          <div className="mt-4 relative [perspective:1200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 15, rotateX: 2 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -15, rotateX: -2 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#0A1B30]/90 rounded-3xl border border-[rgba(0,245,212,0.18)] shadow-2xl shadow-black/80 overflow-hidden p-6 sm:p-10 backdrop-blur-xl card-accent-line text-white"
              >
                {/* Module Header Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[rgba(0,245,212,0.12)]">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold text-[#00F5D4] uppercase tracking-wider">
                        Module 0{activeModuleIndex + 1} • {activeModule.category}
                      </span>
                      <Badge variant="outline" className="text-[11px] border-[rgba(0,245,212,0.3)] text-[#00F5D4] bg-[#00F5D4]/10">
                        {activeModule.badge}
                      </Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {activeModule.headline}
                    </h3>
                    <p className="text-[#7E97B8] text-sm max-w-2xl leading-relaxed">
                      {activeModule.description}
                    </p>
                  </div>

                  {/* Top Live Metrics */}
                  <div className="grid grid-cols-3 gap-3 shrink-0">
                    {activeModule.metrics.map((m, i) => (
                      <div key={i} className="p-3 bg-[#061220] rounded-2xl border border-[rgba(0,245,212,0.12)] text-center min-w-[95px]">
                        <p className="text-[10px] text-[#7E97B8]">{m.label}</p>
                        <p className="text-sm font-bold text-white mt-0.5">{m.value}</p>
                        <span className="text-[9px] text-[#00F5D4] font-medium">{m.trend}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module-Specific High-Fidelity Interactive Preview Screen */}
                <div className="mt-8 bg-[#061220] rounded-2xl p-6 border border-[rgba(0,245,212,0.14)] min-h-[380px]">
                  {/* MODULE 1: ADMIN DASHBOARD */}
                  {activeModule.id === "admin-dashboard" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <Card className="p-4 bg-[#0A1B30] border-[rgba(0,245,212,0.12)] shadow-sm">
                          <p className="text-xs text-[#7E97B8]">Total Units</p>
                          <p className="text-2xl font-bold font-serif text-white mt-1">450</p>
                          <span className="text-[10px] text-[#00F5D4]">100% Onboarded</span>
                        </Card>
                        <Card className="p-4 bg-[#0A1B30] border-[rgba(0,245,212,0.12)] shadow-sm">
                          <p className="text-xs text-[#7E97B8]">Oct Collection</p>
                          <p className="text-2xl font-bold font-serif text-[#00F5D4] mt-1">94.2%</p>
                          <span className="text-[10px] text-[#00F5D4]">₹26.8L / ₹28.5L</span>
                        </Card>
                        <Card className="p-4 bg-[#0A1B30] border-[rgba(0,245,212,0.12)] shadow-sm">
                          <p className="text-xs text-[#7E97B8]">Passes Today</p>
                          <p className="text-2xl font-bold font-serif text-white mt-1">312</p>
                          <span className="text-[10px] text-[#7E97B8]">0 Deficits</span>
                        </Card>
                        <Card className="p-4 bg-[#0A1B30] border-[rgba(0,245,212,0.12)] shadow-sm">
                          <p className="text-xs text-[#7E97B8]">Health Index</p>
                          <p className="text-2xl font-bold font-serif text-[#00F5D4] mt-1">94/100</p>
                          <span className="text-[10px] text-[#00F5D4]">Optimal Standard</span>
                        </Card>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2 p-5 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)]">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-semibold text-white">Monthly Inflow vs Outflow</span>
                            <span className="text-xs text-[#00F5D4] font-mono">12-Month Run Rate</span>
                          </div>
                          <div className="h-44 flex items-end justify-between gap-3 pt-2">
                            {[55, 68, 74, 82, 91, 94.2].map((val, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                                <span className="text-[10px] font-mono text-[#7E97B8]">{val}%</span>
                                <div className="w-full flex gap-1 items-end h-full justify-center">
                                  <div className="w-1/2 bg-[#0D223E] rounded-t-sm" style={{ height: `${val * 0.7}%` }} />
                                  <div
                                    className={cn("w-1/2 rounded-t-sm", i === 5 ? "bg-[#00F5D4] shadow-[0_0_10px_rgba(0,245,212,0.5)]" : "bg-[#3B82F6]/50")}
                                    style={{ height: `${val}%` }}
                                  />
                                </div>
                                <span className="text-[10px] text-[#7E97B8]">M{i + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] flex flex-col justify-between">
                          <div>
                            <span className="text-xs font-semibold text-white">Live Action Center</span>
                            <div className="mt-3 space-y-2.5">
                              <div className="p-2.5 rounded-lg bg-[#061220] text-xs flex items-center justify-between border border-[rgba(0,245,212,0.08)]">
                                <span className="text-[#E2EBF7]">3 Bank Credits Pending Sync</span>
                                <span className="text-[#00F5D4] font-semibold">Match Now</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-[#061220] text-xs flex items-center justify-between border border-[rgba(0,245,212,0.08)]">
                                <span className="text-[#E2EBF7]">Tower B Water Sensor Alert</span>
                                <span className="text-[#F59E0B] font-semibold">SLA: 45m</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-[#061220] text-xs flex items-center justify-between border border-[rgba(0,245,212,0.08)]">
                                <span className="text-[#E2EBF7]">Q3 Defaulter Aging Report</span>
                                <span className="text-white font-semibold">View</span>
                              </div>
                            </div>
                          </div>
                          <Button size="sm" asChild className="w-full mt-4 btn-cyan font-bold">
                            <a href="/dashboard">Launch Interactive App</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MODULE 2: RESIDENT MANAGEMENT */}
                  {activeModule.id === "resident-management" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Tower A & B Directory</span>
                        <span className="text-xs text-[#7E97B8] font-mono">Filter: All Occupants</span>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          { name: "Dr. Arvind Menon", unit: "Tower A • Flat 101", role: "Owner", phone: "+91 98201 •••••", vehicle: "KA 01 MG 2024" },
                          { name: "Sunita Ramanathan", unit: "Tower A • Flat 102", role: "Treasurer", phone: "+91 98202 •••••", vehicle: "MH 02 EQ 8820" },
                          { name: "Rajesh & Kavita Sen", unit: "Tower A • Flat 103", role: "Tenant", phone: "+91 98203 •••••", vehicle: "DL 03 AC 9012" },
                          { name: "Vikramaditya Deshmukh", unit: "Tower A • Flat 104", role: "Secretary", phone: "+91 98204 •••••", vehicle: "MH 12 BB 3311" },
                          { name: "Meera Chawla", unit: "Tower A • Flat 105", role: "Owner", phone: "+91 98205 •••••", vehicle: "KA 05 JJ 7701" },
                          { name: "Rohan Kapoor", unit: "Tower A • Flat 106", role: "Tenant", phone: "+91 98206 •••••", vehicle: "HR 26 DD 1290" },
                        ].map((r, i) => (
                          <div key={i} className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] shadow-sm flex items-center justify-between">
                            <div>
                              <p className="text-sm font-semibold text-white">{r.name}</p>
                              <p className="text-xs text-[#7E97B8]">{r.unit}</p>
                              <div className="flex items-center gap-2 mt-1.5 text-[10px]">
                                <span className="px-2 py-0.5 rounded bg-[#0D223E] text-[#00F5D4] font-medium">{r.role}</span>
                                <span className="text-[#00F5D4] font-mono">{r.vehicle}</span>
                              </div>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MODULE 3: MAINTENANCE & BILLING */}
                  {activeModule.id === "maintenance-billing" && (
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="space-y-4">
                        <div className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] space-y-3">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-semibold text-white">Monthly Maintenance Ledger</span>
                            <Badge className="bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/20">GST Compliant</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <div className="p-3 bg-[#061220] rounded-lg border border-[rgba(0,245,212,0.08)]">
                              <p className="text-xs text-[#7E97B8]">Total Invoiced</p>
                              <p className="text-lg font-bold text-white">₹{billedAmount}L</p>
                            </div>
                            <div className="p-3 bg-[#061220] rounded-lg border border-[rgba(0,245,212,0.08)]">
                              <p className="text-xs text-[#7E97B8]">Collected</p>
                              <p className="text-lg font-bold text-[#00F5D4]">₹26.8L</p>
                            </div>
                          </div>
                          <Button
                            onClick={() => {
                              setBilledAmount((prev) => +(prev + 0.45).toFixed(2));
                              setInvoiceSuccess(true);
                              setTimeout(() => setInvoiceSuccess(false), 2000);
                            }}
                            className="w-full btn-cyan font-bold text-xs"
                          >
                            <Plus className="w-3.5 h-3.5 mr-1" /> Generate Test Invoice (+₹45K)
                          </Button>
                          {invoiceSuccess && (
                            <p className="text-xs text-[#00F5D4] flex items-center gap-1 justify-center">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Invoice #LSO-841 generated & GST calculated!
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-5 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] space-y-3">
                        <span className="text-xs font-semibold text-white">Billing Slabs & Tariff Breakdown</span>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between p-2 rounded bg-[#061220] border border-[rgba(0,245,212,0.08)]">
                            <span className="text-[#7E97B8]">Base Maintenance (₹3.5 / sqft)</span>
                            <span className="font-mono font-semibold text-white">₹15,75,000</span>
                          </div>
                          <div className="flex justify-between p-2 rounded bg-[#061220] border border-[rgba(0,245,212,0.08)]">
                            <span className="text-[#7E97B8]">Sinking & Repair Reserve Fund</span>
                            <span className="font-mono font-semibold text-white">₹4,50,000</span>
                          </div>
                          <div className="flex justify-between p-2 rounded bg-[#061220] border border-[rgba(0,245,212,0.08)]">
                            <span className="text-[#7E97B8]">Lift & Diesel Generator AMC</span>
                            <span className="font-mono font-semibold text-white">₹3,12,000</span>
                          </div>
                          <div className="flex justify-between p-2 rounded bg-[#061220] border border-[rgba(0,245,212,0.08)]">
                            <span className="text-[#7E97B8]">GST @ 18% (Input Tax Reconciled)</span>
                            <span className="font-mono font-semibold text-[#00F5D4]">₹5,13,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* MODULE 4: VISITOR & GATE PASS */}
                  {activeModule.id === "visitor-management" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Main North Gate ANPR Stream</span>
                        <Badge className="bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/20 text-[10px]">Optical Sensor Active</Badge>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "Rahul Sharma (Guest)", flat: "Flat A-402", time: "10:24 AM", pass: "#GP-8812", status: "APPROVED" },
                          { name: "Amazon Logistics (Kiran)", flat: "Flat B-105", time: "10:31 AM", pass: "#DL-3341", status: "WAITING" },
                          { name: "Zomato Food Courier", flat: "Flat C-502", time: "10:35 AM", pass: "#FD-9012", status: "APPROVED" },
                        ].map((v, i) => (
                          <div key={i} className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] shadow-sm flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/30 flex items-center justify-center font-bold text-xs">
                                {v.name[0]}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">{v.name}</p>
                                <p className="text-xs text-[#7E97B8]">Destination: {v.flat} • Logged {v.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={cn("text-xs border-none", v.status === "APPROVED" || gateApproved === i ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30" : "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30")}>
                                {gateApproved === i ? "APPROVED" : v.status}
                              </Badge>
                              {v.status === "WAITING" && gateApproved !== i && (
                                <Button
                                  size="sm"
                                  onClick={() => setGateApproved(i)}
                                  className="h-7 text-xs btn-cyan font-bold"
                                >
                                  Approve Pass
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MODULE 5: COMPLAINTS & HELPDESK */}
                  {activeModule.id === "complaint-helpdesk" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Facility Maintenance Tickets</span>
                        <span className="text-xs text-[#7E97B8]">SLA Target: 4 Hours Max</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          { title: "Plumbing Leakage — Tower B", category: "Plumbing", priority: "High", vendor: "Apex Facilities" },
                          { title: "Passenger Lift Emergency Stop", category: "Elevators", priority: "Critical", vendor: "Schindler AMC" },
                          { title: "Garden Sprinkler Valve Jam", category: "Horticulture", priority: "Low", vendor: "Internal Team" },
                        ].map((ticket, i) => (
                          <div key={i} className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] shadow-sm flex flex-col justify-between min-h-[160px]">
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <Badge variant="outline" className="text-[10px] uppercase border-[rgba(0,245,212,0.25)] text-[#00F5D4]">{ticket.priority}</Badge>
                                <span className="text-[10px] text-[#7E97B8]">{ticket.vendor}</span>
                              </div>
                              <p className="text-sm font-semibold text-white">{ticket.title}</p>
                            </div>
                            <div className="pt-3 border-t border-[rgba(0,245,212,0.1)] flex items-center justify-between">
                              <Badge className={cn("text-xs border-none", ticketStatus[i] === "RESOLVED" ? "bg-[#00F5D4]/15 text-[#00F5D4]" : "bg-[#0D223E] text-[#E2EBF7]")}>
                                {ticketStatus[i]}
                              </Badge>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setTicketStatus((prev) => ({
                                    ...prev,
                                    [i]: prev[i] === "RESOLVED" ? "IN_PROGRESS" : "RESOLVED",
                                  }));
                                }}
                                className="h-7 text-xs text-[#00F5D4] hover:text-white"
                              >
                                {ticketStatus[i] === "RESOLVED" ? "Re-open" : "Mark Resolved"}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MODULE 6: PAYMENTS & RECONCILIATION */}
                  {activeModule.id === "payment-reconciliation" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">HDFC Bank Nodal Feed (Autonomous AI Matcher)</span>
                        <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30 text-xs">98.8% Confidence</Badge>
                      </div>
                      <div className="space-y-2.5">
                        {[
                          { tx: "NEFT/CMS-984210", amount: "₹4,500.00", payer: "Vikramaditya Deshmukh", match: "Flat A-402 Oct Maintenance", confidence: "99%" },
                          { tx: "UPI/390124881023", amount: "₹6,000.00", payer: "Sunita Ramanathan", match: "Flat A-102 Q3 Sinking Fund", confidence: "98%" },
                          { tx: "IMPS/9812400192", amount: "₹1,25,000.00", payer: "Prestige Facility AMC", match: "Vendor INV-8419", confidence: "100%" },
                        ].map((item, i) => (
                          <div key={i} className="p-3.5 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] shadow-sm flex items-center justify-between text-xs">
                            <div>
                              <p className="font-mono font-semibold text-white">{item.tx} • {item.amount}</p>
                              <p className="text-[11px] text-[#7E97B8] mt-0.5">Matched To: <strong className="text-white">{item.match}</strong> ({item.payer})</p>
                            </div>
                            <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/25 text-xs">
                              Auto-Reconciled ({item.confidence})
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-[#00F5D4]/10 border border-[#00F5D4]/20 rounded-xl flex items-center justify-between text-xs text-[#00F5D4]">
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" /> Tally Prime 2-Way API Sync Live
                        </span>
                        <span className="font-mono">Zero Manual Keying Required</span>
                      </div>
                    </div>
                  )}

                  {/* MODULE 7: SECURITY & GUARD VIEW */}
                  {activeModule.id === "security-guard-view" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Guard Tablet Mode (Touch-Optimized)</span>
                        <Badge variant="outline" className="text-xs border-[#00F5D4] text-[#00F5D4]">Gate #01 Tablet</Badge>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <button className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.15)] hover:border-[#00F5D4] transition-all text-center flex flex-col items-center gap-2">
                          <QrCode className="w-8 h-8 text-[#00F5D4]" />
                          <span className="text-xs font-semibold text-white">Scan FastPass QR</span>
                          <span className="text-[10px] text-[#7E97B8]">Guest & Delivery Entry</span>
                        </button>
                        <button className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.15)] hover:border-[#00F5D4] transition-all text-center flex flex-col items-center gap-2">
                          <Eye className="w-8 h-8 text-[#3B82F6]" />
                          <span className="text-xs font-semibold text-white">OCR Number Plate</span>
                          <span className="text-[10px] text-[#7E97B8]">Instant Barrier Lift</span>
                        </button>
                        <button className="p-4 bg-red-950/40 rounded-xl border border-red-500/40 hover:bg-red-950/60 transition-all text-center flex flex-col items-center gap-2 text-red-300">
                          <AlertTriangle className="w-8 h-8 text-red-400" />
                          <span className="text-xs font-bold text-red-300">Emergency SOS Alarm</span>
                          <span className="text-[10px] text-red-400/80">Perimeter Lockdown</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* MODULE 8: NOTICES & BROADCASTS */}
                  {activeModule.id === "communication-notices" && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Official Community Noticeboard</span>
                        <span className="text-xs text-[#7E97B8]">Delivery: WhatsApp + In-App Push</span>
                      </div>
                      {[
                        { title: "Annual General Body Meeting (AGM 2025)", date: "Sunday, 26 Oct • 10:00 AM", status: "Quorum Active (84% Voted)", urgent: true },
                        { title: "Scheduled Overhead Tank Maintenance & Water Shutoff", date: "Tomorrow, 02:00 PM – 05:00 PM", status: "All Towers Notified", urgent: false },
                        { title: "Diwali Festivities & Clubhouse Decoration Guidelines", date: "Posted 2 Days Ago", status: "Active Circular", urgent: false },
                      ].map((n, i) => (
                        <div key={i} className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] shadow-sm flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-white">{n.title}</p>
                              {n.urgent && <Badge className="bg-red-500/20 text-red-400 border border-red-500/30 text-[9px]">Mandatory</Badge>}
                            </div>
                            <p className="text-xs text-[#7E97B8] mt-0.5">{n.date}</p>
                          </div>
                          <span className="text-xs font-medium text-[#00F5D4]">{n.status}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* MODULE 9: VENDORS & STAFF */}
                  {activeModule.id === "vendor-staff-management" && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Active Vendor AMCs & Housekeeping Staff</span>
                        <span className="text-xs text-[#00F5D4] font-medium">100% Contracts Verified</span>
                      </div>
                      {[
                        { vendor: "SecureTech India Patrol", type: "Security AMC", value: "₹85,000/mo", status: "Audit Passed", verified: true },
                        { vendor: "UrbanClean Facility Services", type: "Housekeeping", value: "₹45,000/mo", status: "Attendance Reconciled", verified: true },
                        { vendor: "Schindler Lift AMC", type: "Elevators", value: "₹25,000/mo", status: "Renewal Review 30d", verified: false },
                      ].map((v, i) => (
                        <div key={i} className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)] shadow-sm flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-white">{v.vendor}</p>
                            <p className="text-xs text-[#7E97B8]">{v.type} • {v.value}</p>
                          </div>
                          <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/25 text-xs">
                            {v.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* MODULE 10: REPORTS & ANALYTICS */}
                  {activeModule.id === "reports-analytics" && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Auditor Package & AGM Statements</span>
                        <Button size="sm" variant="outline" className="text-xs h-7 btn-ghost-cyan">
                          Download CA Excel Pack
                        </Button>
                      </div>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)]">
                          <p className="text-xs text-[#7E97B8]">Balance Sheet Health</p>
                          <p className="text-xl font-bold font-serif text-[#00F5D4] mt-1">₹48.2L Reserve</p>
                          <p className="text-[10px] text-[#7E97B8] mt-1">Zero Statutory Liability</p>
                        </div>
                        <div className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)]">
                          <p className="text-xs text-[#7E97B8]">Defaulter Aging</p>
                          <p className="text-xl font-bold font-serif text-[#F59E0B] mt-1">3.2% of Units</p>
                          <p className="text-[10px] text-[#7E97B8] mt-1">Down from 18% in Jan</p>
                        </div>
                        <div className="p-4 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.12)]">
                          <p className="text-xs text-[#7E97B8]">Energy & Generator Audit</p>
                          <p className="text-xl font-bold font-serif text-white mt-1">₹1.8L Saved</p>
                          <p className="text-[10px] text-[#00F5D4] mt-1">Diesel Theft Prevented</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Module Footer Tags & CTA */}
                <div className="mt-8 pt-6 border-t border-[rgba(0,245,212,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-[#7E97B8]">Capabilities:</span>
                    {activeModule.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-[#0D223E] text-[#00F5D4] border border-[rgba(0,245,212,0.15)] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild size="sm" className="btn-cyan rounded-full px-5 font-bold">
                    <a href={`/features`}>
                      Explore Full Spec <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
