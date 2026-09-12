"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCounter } from "@/hooks/use-counter"
import { TrendingUp, AlertTriangle, Sparkles, Brain, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function AIIntelligenceSection() {
  const [inView, setInView] = useState(false)
  const healthScore = useCounter({ end: 94, enabled: inView, duration: 2000 })

  return (
    <section 
      className="section-padding relative overflow-hidden py-24 sm:py-32 bg-background border-t border-border/40"
      onMouseEnter={() => setInView(true)}
      onTouchStart={() => setInView(true)}
      id="ai-intelligence"
    >
      <div className="container-wide relative z-10">
        <SectionHeading
        label="LEASEIQ INTELLIGENCE RADAR"
        title="Your society generates data."
        titleAccent="LeaseIQ turns it into decisions."
        description="Autonomous ledger reconciliation, preventative maintenance anomaly detection, and predictive collection intelligence for committee leaders."
      />

      <div className="relative mx-auto mt-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-8 md:p-12 border-border/70 bg-surface/90 backdrop-blur-xl shadow-premium rounded-3xl flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            
            {/* Top Accent Gradient */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

            {/* Health Score Circular Gauge */}
            <div className="flex-shrink-0 relative flex flex-col items-center justify-center">
              <div className="w-52 h-52 rounded-full border-4 border-muted/60 flex items-center justify-center relative shadow-inner bg-background/50">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-emerald-500 transition-all duration-1000 ease-out" 
                  style={{ clipPath: `polygon(0 0, 100% 0, 100% ${inView ? '100%' : '0%'}, 0 ${inView ? '100%' : '0%'})` }}
                />
                <div className="text-center">
                  <span className="text-5xl font-serif font-bold text-foreground">{Math.round(healthScore)}</span>
                  <span className="text-muted-foreground text-xl">/100</span>
                  <p className="text-emerald-600 font-semibold text-xs tracking-wider uppercase mt-1">Optimal Health</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Society Health Index</p>
                <span className="text-[10px] text-gold font-mono">Real-time Telemetry</span>
              </div>
              
              {/* Floating micro metrics */}
              <div className="hidden md:flex items-center gap-1.5 absolute -top-2 -right-8 bg-background border border-border/80 px-3 py-1 rounded-full text-[11px] font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Financial: 98%</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 absolute top-1/3 -left-12 bg-background border border-border/80 px-3 py-1 rounded-full text-[11px] font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Collection: 98.4%</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 absolute bottom-4 -right-6 bg-background border border-border/80 px-3 py-1 rounded-full text-[11px] font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Security: 100%</span>
              </div>
            </div>

            {/* AI Actionable Insights Feed */}
            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-gold" />
                  <h3 className="font-serif text-xl font-bold text-foreground">AI Insights & Anomaly Radar</h3>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-500/30 text-emerald-600 bg-emerald-500/10 font-mono">
                  Autonomous Engine Active
                </Badge>
              </div>
              
              <motion.div 
                className="p-4 rounded-2xl bg-background border border-border/70 border-l-4 border-l-emerald-500 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">Inflow Acceleration</span>
                      <span className="text-[10px] text-emerald-600 font-mono font-semibold">+3.2% vs Q3</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Maintenance collection reached <strong className="text-foreground">98.4%</strong> before the 10th of the month via automated WhatsApp reminder nudges.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-4 rounded-2xl bg-background border border-border/70 border-l-4 border-l-amber-500 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">Defaulter Aging Anomaly</span>
                      <span className="text-[10px] text-amber-600 font-mono font-semibold">23 Units Flagged</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Total overdue dues of <strong className="text-foreground">₹1.7 Lakhs</strong> detected across 23 units. Automated interest penal calculations applied.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="p-4 rounded-2xl bg-background border border-border/70 border-l-4 border-l-gold shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">Predictive Fiscal Forecast</span>
                      <span className="text-[10px] text-gold font-mono font-semibold">95.1% Projected</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      Next month projected maintenance collection rate is <strong className="text-foreground">95.1%</strong> based on historical seasonal tenancy patterns.
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
  )
}

export const AiIntelligenceSection = AIIntelligenceSection;


