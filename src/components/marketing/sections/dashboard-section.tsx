"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Shield,
  Wallet,
  AlertCircle,
  Wrench,
  Settings,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

type DashTab = "overview" | "finance" | "security" | "helpdesk";

export function DashboardSection() {
  const [activeTab, setActiveTab] = useState<DashTab>("overview");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="section-padding overflow-hidden bg-[#040D1A] py-24 sm:py-32 relative border-t border-[rgba(0,245,212,0.1)] text-white" id="dashboard-preview">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="EXECUTIVE COMMAND CENTER"
          title="Your Entire Residential Community"
          titleAccent="at a Single Glance."
          description="Real-time occupancy radar, bank nodal inflows, gate clearance throughput, and automated SLA ticket dispatch in one high-fidelity command center."
          align="center"
        />

        {/* 3D Perspective Wrapper */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="[perspective:1400px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{
                rotateX: tilt.x || 2,
                rotateY: tilt.y || -1,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className="relative"
            >
              {/* Top Floating Badge */}
              <div className="absolute -top-4 left-6 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#061220] border border-[rgba(0,245,212,0.3)] text-white text-xs font-semibold shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
                <span>Live Production Telemetry • Prestige Sovereign Towers</span>
              </div>

              <Card className="border border-[rgba(0,245,212,0.2)] shadow-2xl rounded-3xl overflow-hidden bg-[#0A1B30]/90 backdrop-blur-xl flex flex-col md:flex-row min-h-[580px] card-accent-line card-glow">
                {/* Sidebar */}
                <div className="hidden md:flex w-20 flex-col items-center py-6 border-r border-[rgba(0,245,212,0.12)] bg-[#061220]/80 gap-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F5D4] to-[#3B82F6] text-[#040D1A] flex items-center justify-center font-bold text-sm shadow">
                    LQ
                  </div>
                  <div className="flex flex-col gap-5 text-[#7E97B8] mt-2">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={cn(
                        "p-2.5 rounded-xl transition-all cursor-pointer",
                        activeTab === "overview"
                          ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30"
                          : "hover:text-white hover:bg-[#0A1B30]"
                      )}
                      title="Overview"
                    >
                      <LayoutDashboard className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("finance")}
                      className={cn(
                        "p-2.5 rounded-xl transition-all cursor-pointer",
                        activeTab === "finance"
                          ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30"
                          : "hover:text-white hover:bg-[#0A1B30]"
                      )}
                      title="Finance"
                    >
                      <Wallet className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("security")}
                      className={cn(
                        "p-2.5 rounded-xl transition-all cursor-pointer",
                        activeTab === "security"
                          ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30"
                          : "hover:text-white hover:bg-[#0A1B30]"
                      )}
                      title="Security"
                    >
                      <Shield className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("helpdesk")}
                      className={cn(
                        "p-2.5 rounded-xl transition-all cursor-pointer",
                        activeTab === "helpdesk"
                          ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30"
                          : "hover:text-white hover:bg-[#0A1B30]"
                      )}
                      title="Tickets"
                    >
                      <Wrench className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-auto">
                    <Settings className="w-5 h-5 text-[#7E97B8] hover:text-white transition-colors cursor-pointer" />
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Topbar */}
                  <div className="h-16 border-b border-[rgba(0,245,212,0.12)] flex items-center justify-between px-6 bg-[#061220]/60">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        Prestige Sovereign Towers (Towers A–D)
                      </h4>
                      <Badge variant="outline" className="hidden sm:inline-flex text-[10px] border-[#00F5D4]/30 text-[#00F5D4] bg-[#00F5D4]/10">
                        Health 94/100
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#061220] border border-[rgba(0,245,212,0.15)] text-xs text-[#7E97B8]">
                        <Activity className="w-3.5 h-3.5 text-[#00F5D4]" />
                        <span className="hidden sm:inline">Bank API</span> Active
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00F5D4] to-[#3B82F6] text-[#040D1A] font-bold text-xs flex items-center justify-center shadow">
                        MC
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Viewport */}
                  <div className="p-6 flex-1 bg-[#040D1A]/50 space-y-6 overflow-y-auto">
                    {/* 4 Core KPIs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Total Units", value: "450", sub: "1,247 Residents" },
                        { label: "Collection Ratio", value: "94.2%", sub: "₹26.8L / ₹28.5L" },
                        { label: "Gate Passes Today", value: "312", sub: "0.8s Avg Clear" },
                        { label: "Open Complaints", value: "2", sub: "SLA: 2.1h Avg" },
                      ].map((kpi, i) => (
                        <div key={i} className="bg-[#061220] p-4 rounded-2xl border border-[rgba(0,245,212,0.12)] shadow-md">
                          <p className="text-[11px] text-[#7E97B8]">{kpi.label}</p>
                          <p className="text-2xl font-bold text-white mt-0.5">{kpi.value}</p>
                          <p className="text-[10px] text-[#00F5D4] font-medium mt-1">{kpi.sub}</p>
                        </div>
                      ))}
                    </div>

                    {/* TAB: OVERVIEW */}
                    {activeTab === "overview" && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#061220] p-5 rounded-2xl border border-[rgba(0,245,212,0.12)] shadow-md flex flex-col justify-between">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-semibold text-white">Monthly Inflow Run Rate</span>
                            <span className="text-xs text-[#00F5D4] font-mono">12-Mo Trend</span>
                          </div>
                          <div className="h-44 flex items-end justify-between gap-2.5 pt-2">
                            {[40, 60, 55, 80, 70, 95].map((h, i) => (
                              <div key={i} className="w-full flex flex-col items-center gap-1 h-full justify-end">
                                <span className="text-[10px] text-[#7E97B8] font-mono">{h}%</span>
                                <div className="w-full bg-[#0A1B30] rounded-t-sm relative h-full flex items-end">
                                  <div
                                    className={cn(
                                      "w-full rounded-t-sm transition-all",
                                      i === 5
                                        ? "bg-[#00F5D4] shadow-[0_0_12px_rgba(0,245,212,0.6)]"
                                        : "bg-white/20"
                                    )}
                                    style={{ height: `${h}%` }}
                                  />
                                </div>
                                <span className="text-[10px] text-[#7E97B8]">M{i + 1}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-[#061220] p-5 rounded-2xl border border-[rgba(0,245,212,0.12)] shadow-md flex flex-col justify-between">
                          <span className="text-xs font-semibold text-white mb-3">Live Operational Activity</span>
                          <div className="space-y-3 text-xs">
                            {[
                              { icon: Shield, text: "Visitor approved at North Gate (Flat A-402)", time: "2 mins ago" },
                              { icon: Wallet, text: "UPI Maintenance received: ₹4,500 (Unit B-402)", time: "15 mins ago" },
                              { icon: AlertCircle, text: "Plumbing ticket assigned to Apex Plumbers", time: "1 hour ago" },
                            ].map((act, i) => (
                              <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)]">
                                <div className="w-7 h-7 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center shrink-0">
                                  <act.icon className="w-3.5 h-3.5 text-[#00F5D4]" />
                                </div>
                                <p className="flex-1 text-white font-medium truncate">{act.text}</p>
                                <span className="text-[10px] text-[#7E97B8] font-mono shrink-0">{act.time}</span>
                              </div>
                            ))}
                          </div>
                          <Button size="sm" asChild className="w-full mt-4 bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]">
                            <a href="/dashboard">Access Full Dashboard</a>
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* TAB: FINANCE */}
                    {activeTab === "finance" && (
                      <div className="bg-[#061220] p-5 rounded-2xl border border-[rgba(0,245,212,0.12)] space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-white">Live Nodal Inflow Ledger</span>
                          <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30 text-xs">Tally Synced</Badge>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-3 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)] flex justify-between items-center">
                            <span>NEFT/CMS-984210 • Unit A-402</span>
                            <span className="font-mono font-bold text-[#00F5D4]">+₹4,500.00 (Matched)</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)] flex justify-between items-center">
                            <span>UPI/390124881023 • Unit B-105</span>
                            <span className="font-mono font-bold text-[#00F5D4]">+₹6,000.00 (Matched)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB: SECURITY */}
                    {activeTab === "security" && (
                      <div className="bg-[#061220] p-5 rounded-2xl border border-[rgba(0,245,212,0.12)] space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-white">Main Gate ANPR Scanner Status</span>
                          <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30 text-xs">Barrier Online</Badge>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-3 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)] flex justify-between items-center">
                            <span>Vehicle MH 02 EQ 8820 (Owner Flat A-402)</span>
                            <span className="text-[#00F5D4] font-semibold">Auto-Lift (0.4s)</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)] flex justify-between items-center">
                            <span>Amazon Logistics FastPass #DL-9912</span>
                            <span className="text-[#00F5D4] font-semibold">Approved via QR</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB: HELPDESK */}
                    {activeTab === "helpdesk" && (
                      <div className="bg-[#061220] p-5 rounded-2xl border border-[rgba(0,245,212,0.12)] space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-white">SLA-Enforced Facility Tickets</span>
                          <Badge variant="outline" className="text-xs border-[rgba(0,245,212,0.3)] text-white">SLA: 97% Met</Badge>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="p-3 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)] flex justify-between items-center">
                            <span>Water Leakage Shaft — Tower B</span>
                            <span className="text-amber-400 font-semibold">In Progress (SLA: 45m)</span>
                          </div>
                          <div className="p-3 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.08)] flex justify-between items-center">
                            <span>Clubhouse Badminton Light Replacement</span>
                            <span className="text-[#00F5D4] font-semibold">Resolved</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardSection;
