"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Users,
  Shield,
  Wallet,
  Bell,
  AlertCircle,
  Wrench,
  Settings,
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  Car,
  Activity,
  Sparkles,
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
    <section className="section-padding overflow-hidden bg-background py-24 sm:py-32 relative border-t border-border/40" id="dashboard-preview">
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
            <div className="absolute -top-4 left-6 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-semibold shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Production Telemetry • Prestige Sovereign Towers</span>
            </div>

            <Card className="border border-border/70 shadow-2xl rounded-3xl overflow-hidden bg-surface flex flex-col md:flex-row min-h-[580px]">
              {/* Sidebar */}
              <div className="hidden md:flex w-20 flex-col items-center py-6 border-r border-border/50 bg-background/50 gap-6">
                <div className="w-10 h-10 rounded-xl bg-gold text-black flex items-center justify-center font-serif font-bold text-sm shadow">
                  LQ
                </div>
                <div className="flex flex-col gap-5 text-muted-foreground mt-2">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={cn(
                      "p-2.5 rounded-xl transition-all",
                      activeTab === "overview" ? "bg-gold/15 text-gold" : "hover:text-foreground hover:bg-muted"
                    )}
                    title="Overview"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                  </button>
                <button
                  onClick={() => setActiveTab("finance")}
                  className={cn(
                    "p-2.5 rounded-xl transition-all",
                    activeTab === "finance" ? "bg-gold/15 text-gold" : "hover:text-foreground hover:bg-muted"
                  )}
                  title="Finance"
                >
                  <Wallet className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={cn(
                    "p-2.5 rounded-xl transition-all",
                    activeTab === "security" ? "bg-gold/15 text-gold" : "hover:text-foreground hover:bg-muted"
                  )}
                  title="Security"
                >
                  <Shield className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveTab("helpdesk")}
                  className={cn(
                    "p-2.5 rounded-xl transition-all",
                    activeTab === "helpdesk" ? "bg-gold/15 text-gold" : "hover:text-foreground hover:bg-muted"
                  )}
                  title="Tickets"
                >
                  <Wrench className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-auto">
                <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Topbar */}
              <div className="h-16 border-b border-border/50 flex items-center justify-between px-6 bg-background/60">
                <div className="flex items-center gap-3">
                  <h4 className="font-serif font-semibold text-foreground text-sm sm:text-base">
                    Prestige Sovereign Towers (Towers A–D)
                  </h4>
                  <Badge variant="outline" className="hidden sm:inline-flex text-[10px] border-emerald-500/30 text-emerald-600 bg-emerald-500/10">
                    Health 94/100
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs text-muted-foreground">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="hidden sm:inline">Bank API</span> Active
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold text-black font-bold text-xs flex items-center justify-center font-serif">
                    MC
                  </div>
                </div>
              </div>

              {/* Dynamic Viewport */}
              <div className="p-6 flex-1 bg-background/30 space-y-6 overflow-y-auto">
                {/* 4 Core KPIs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Units", value: "450", sub: "1,247 Residents" },
                    { label: "Collection Ratio", value: "94.2%", sub: "₹26.8L / ₹28.5L" },
                    { label: "Gate Passes Today", value: "312", sub: "0.8s Avg Clear" },
                    { label: "Open Complaints", value: "2", sub: "SLA: 2.1h Avg" },
                  ].map((kpi, i) => (
                    <div key={i} className="bg-background p-4 rounded-2xl border border-border/60 shadow-sm">
                      <p className="text-[11px] text-muted-foreground">{kpi.label}</p>
                      <p className="text-2xl font-bold font-serif text-foreground mt-0.5">{kpi.value}</p>
                      <p className="text-[10px] text-gold font-medium mt-1">{kpi.sub}</p>
                    </div>
                  ))}
                </div>

                {/* TAB: OVERVIEW */}
                {activeTab === "overview" && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background p-5 rounded-2xl border border-border/60 shadow-sm flex flex-col justify-between">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-semibold text-foreground">Monthly Inflow Run Rate</span>
                        <span className="text-xs text-gold font-mono">12-Mo Trend</span>
                      </div>
                      <div className="h-44 flex items-end justify-between gap-2.5 pt-2">
                        {[40, 60, 55, 80, 70, 95].map((h, i) => (
                          <div key={i} className="w-full flex flex-col items-center gap-1 h-full justify-end">
                            <span className="text-[10px] text-muted-foreground font-mono">{h}%</span>
                            <div className="w-full bg-muted rounded-t-sm relative h-full flex items-end">
                              <div
                                className={cn("w-full rounded-t-sm", i === 5 ? "bg-gold" : "bg-foreground/25")}
                                style={{ height: `${h}%` }}
                              />
                            </div>
                            <span className="text-[10px] text-muted-foreground">M{i + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background p-5 rounded-2xl border border-border/60 shadow-sm flex flex-col justify-between">
                      <span className="text-xs font-semibold text-foreground mb-3">Live Operational Activity</span>
                      <div className="space-y-3 text-xs">
                        {[
                          { icon: Shield, text: "Visitor approved at North Gate (Flat A-402)", time: "2 mins ago" },
                          { icon: Wallet, text: "UPI Maintenance received: ₹4,500 (Unit B-402)", time: "15 mins ago" },
                          { icon: AlertCircle, text: "Plumbing ticket assigned to Apex Plumbers", time: "1 hour ago" },
                        ].map((act, i) => (
                          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-surface">
                            <div className="w-7 h-7 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                              <act.icon className="w-3.5 h-3.5 text-gold" />
                            </div>
                            <p className="flex-1 text-foreground font-medium truncate">{act.text}</p>
                            <span className="text-[10px] text-muted-foreground font-mono shrink-0">{act.time}</span>
                          </div>
                        ))}
                      </div>
                      <Button size="sm" asChild className="w-full mt-4 bg-foreground text-background">
                        <a href="/dashboard">Access Full Dashboard</a>
                      </Button>
                    </div>
                  </div>
                )}

                {/* TAB: FINANCE */}
                {activeTab === "finance" && (
                  <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-foreground">Live Nodal Inflow Ledger</span>
                      <Badge className="bg-emerald-500/10 text-emerald-600 border-none text-xs">Tally Synced</Badge>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-surface flex justify-between items-center">
                        <span>NEFT/CMS-984210 • Unit A-402</span>
                        <span className="font-mono font-bold text-emerald-600">+₹4,500.00 (Matched)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface flex justify-between items-center">
                        <span>UPI/390124881023 • Unit B-105</span>
                        <span className="font-mono font-bold text-emerald-600">+₹6,000.00 (Matched)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB: SECURITY */}
                {activeTab === "security" && (
                  <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-foreground">Main Gate ANPR Scanner Status</span>
                      <Badge className="bg-gold/15 text-gold border-none text-xs">Barrier Online</Badge>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-surface flex justify-between items-center">
                        <span>Vehicle MH 02 EQ 8820 (Owner Flat A-402)</span>
                        <span className="text-emerald-600 font-semibold">Auto-Lift (0.4s)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface flex justify-between items-center">
                        <span>Amazon Logistics FastPass #DL-9912</span>
                        <span className="text-emerald-600 font-semibold">Approved via QR</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB: HELPDESK */}
                {activeTab === "helpdesk" && (
                  <div className="bg-background p-5 rounded-2xl border border-border/60 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-foreground">SLA-Enforced Facility Tickets</span>
                      <Badge variant="outline" className="text-xs">SLA: 97% Met</Badge>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-surface flex justify-between items-center">
                        <span>Water Leakage Shaft — Tower B</span>
                        <span className="text-amber-500 font-semibold">In Progress (SLA: 45m)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface flex justify-between items-center">
                        <span>Clubhouse Badminton Light Replacement</span>
                        <span className="text-emerald-600 font-semibold">Resolved</span>
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
