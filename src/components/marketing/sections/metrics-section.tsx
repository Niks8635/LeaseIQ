"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Users, IndianRupee, Activity } from "lucide-react"
import { useCounter } from "@/hooks/use-counter"

const metrics = [
  { icon: Building2, target: 500, suffix: "+", label: "Societies" },
  { icon: Users, target: 50000, suffix: "+", label: "Residents" },
  { icon: IndianRupee, target: 10, suffix: "Cr+", label: "Transactions" },
  { icon: Activity, target: 99.9, suffix: "%", label: "Uptime" },
]

function MetricItem({ metric, inView }: { metric: any, inView: boolean }) {
  const value = useCounter({ 
    end: metric.target, 
    enabled: inView, 
    duration: 2000,
    decimals: metric.target % 1 !== 0 ? 1 : 0 
  })
  const displayValue = metric.target % 1 !== 0 ? value.toFixed(1) : Math.round(value)

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
        <metric.icon className="w-6 h-6 text-gold" />
      </div>
      <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
        {displayValue}{metric.suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
        {metric.label}
      </div>
    </div>
  )
}

export function MetricsSection() {
  const [inView, setInView] = useState(false)

  return (
    <section className="py-24 border-y border-border/50 bg-surface relative overflow-hidden">
      <div className="container-wide relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setInView(true)}
        >
          {metrics.map((metric, i) => (
            <MetricItem key={i} metric={metric} inView={inView} />
          ))}
        </motion.div>
        
        {/* Enterprise Compliance & Security Trust Badges */}
        <div className="mt-14 pt-8 border-t border-border/50 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-foreground">Tier-IV MeitY</span> Empaneled Cloud
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-semibold text-foreground">ISO 27001</span> Certified Infosec
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-foreground">RBI Master Directions</span> Compliant
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-semibold text-foreground">256-Bit TLS</span> Bank-Grade Encryption
          </div>
        </div>
      </div>
    </section>
  )
}
