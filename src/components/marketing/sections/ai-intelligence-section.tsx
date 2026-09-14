"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCounter } from "@/hooks/use-counter";
import { TrendingUp, AlertTriangle, Sparkles, Brain } from "lucide-react";

export function AIIntelligenceSection() {
  const [inView, setInView] = useState(false);
  const healthScore = useCounter({ end: 94, enabled: inView, duration: 2000 });

  return (
    <section 
      className="section-padding relative overflow-hidden py-24 sm:py-32 bg-[#040D1A] border-t border-[rgba(0,245,212,0.1)] text-white"
      onMouseEnter={() => setInView(true)}
      onTouchStart={() => setInView(true)}
      id="ai-intelligence"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="LEASEIQ INTELLIGENCE RADAR"
          title="Your society generates data."
          titleAccent="LeaseIQ turns it into decisions."
          description="Autonomous ledger reconciliation, preventative maintenance anomaly detection, and predictive collection intelligence for committee leaders."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setInView(true)}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-8 md:p-12 border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/85 backdrop-blur-xl shadow-2xl rounded-3xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden card-accent-line card-glow">
              
              {/* Health Score Circular Gauge */}
              <div className="flex-shrink-0 relative flex flex-col items-center justify-center">
                <div className="w-52 h-52 rounded-full border-4 border-[rgba(0,245,212,0.15)] flex items-center justify-center relative shadow-inner bg-[#061220]/80">
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-[#00F5D4] transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(0,245,212,0.4)]" 
                    style={{ clipPath: `polygon(0 0, 100% 0, 100% ${inView ? "100%" : "0%"}, 0 ${inView ? "100%" : "0%"})` }}
                  />
                  <div className="text-center">
                    <span className="text-5xl font-bold text-white">{Math.round(healthScore)}</span>
                    <span className="text-[#7E97B8] text-xl font-normal">/100</span>
                    <p className="text-[#00F5D4] font-semibold text-xs tracking-wider uppercase mt-1">Optimal Health</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#7E97B8]">Society Health Index</p>
                  <span className="text-[10px] text-[#00F5D4] font-mono">Real-time Telemetry</span>
                </div>
                
                {/* Floating micro metrics */}
                <div className="hidden md:flex items-center gap-1.5 absolute -top-2 -right-8 bg-[#061220] border border-[rgba(0,245,212,0.2)] px-3 py-1 rounded-full text-[11px] font-medium shadow-md text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-ping" />
                  <span>Financial: 98%</span>
                </div>
                <div className="hidden md:flex items-center gap-1.5 absolute top-1/3 -left-12 bg-[#061220] border border-[rgba(0,245,212,0.2)] px-3 py-1 rounded-full text-[11px] font-medium shadow-md text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                  <span>Collection: 98.4%</span>
                </div>
                <div className="hidden md:flex items-center gap-1.5 absolute bottom-4 -right-6 bg-[#061220] border border-[rgba(0,245,212,0.2)] px-3 py-1 rounded-full text-[11px] font-medium shadow-md text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>Security: 100%</span>
                </div>
              </div>

              {/* AI Actionable Insights Feed */}
              <div className="flex-1 space-y-4 w-full">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(0,245,212,0.12)]">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-[#00F5D4]" />
                    <h3 className="text-xl font-bold text-white">AI Insights & Anomaly Radar</h3>
                  </div>
                  <Badge variant="outline" className="text-[10px] border-[#00F5D4]/30 text-[#00F5D4] bg-[#00F5D4]/10 font-mono">
                    Autonomous Engine Active
                  </Badge>
                </div>
                
                <motion.div 
                  className="p-4 rounded-2xl bg-[#061220]/90 border border-[rgba(0,245,212,0.14)] border-l-4 border-l-[#00F5D4] shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#00F5D4]/10 text-[#00F5D4] flex items-center justify-center shrink-0 mt-0.5 border border-[#00F5D4]/20">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">Inflow Acceleration</span>
                        <span className="text-[10px] text-[#00F5D4] font-mono font-semibold">+3.2% vs Q3</span>
                      </div>
                      <p className="text-xs text-[#7E97B8] mt-0.5 leading-relaxed">
                        Maintenance collection reached <strong className="text-white font-medium">98.4%</strong> before the 10th of the month via automated WhatsApp reminder nudges.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-2xl bg-[#061220]/90 border border-[rgba(0,245,212,0.14)] border-l-4 border-l-amber-400 shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/20">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">Defaulter Aging Anomaly</span>
                        <span className="text-[10px] text-amber-400 font-mono font-semibold">23 Units Flagged</span>
                      </div>
                      <p className="text-xs text-[#7E97B8] mt-0.5 leading-relaxed">
                        Total overdue dues of <strong className="text-white font-medium">₹1.7 Lakhs</strong> detected across 23 units. Automated interest penal calculations applied.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-2xl bg-[#061220]/90 border border-[rgba(0,245,212,0.14)] border-l-4 border-l-[#3B82F6] shadow-md"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5 border border-[#3B82F6]/20">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">Predictive Fiscal Forecast</span>
                        <span className="text-[10px] text-[#3B82F6] font-mono font-semibold">95.1% Projected</span>
                      </div>
                      <p className="text-xs text-[#7E97B8] mt-0.5 leading-relaxed">
                        Next month projected maintenance collection rate is <strong className="text-white font-medium">95.1%</strong> based on historical seasonal tenancy patterns.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AIIntelligenceSection;
