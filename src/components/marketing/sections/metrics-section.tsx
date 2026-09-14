"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, IndianRupee, Activity } from "lucide-react";
import { useCounter } from "@/hooks/use-counter";

const metrics = [
  { icon: Building2, target: 500, suffix: "+", label: "Societies" },
  { icon: Users, target: 50000, suffix: "+", label: "Residents" },
  { icon: IndianRupee, target: 10, suffix: "Cr+", label: "Transactions" },
  { icon: Activity, target: 99.9, suffix: "%", label: "Uptime" },
];

function MetricItem({ metric, inView }: { metric: any; inView: boolean }) {
  const value = useCounter({ 
    end: metric.target, 
    enabled: inView, 
    duration: 2000,
    decimals: metric.target % 1 !== 0 ? 1 : 0,
  });
  const displayValue = metric.target % 1 !== 0 ? value.toFixed(1) : Math.round(value);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center group">
      <div className="w-14 h-14 rounded-2xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center mb-4 text-[#00F5D4] group-hover:scale-110 transition-transform duration-300">
        <metric.icon className="w-7 h-7" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gradient-cyan mb-2">
        {displayValue}{metric.suffix}
      </div>
      <div className="text-xs text-[#7E97B8] font-semibold uppercase tracking-wider">
        {metric.label}
      </div>
    </div>
  );
}

export function MetricsSection() {
  const [inView, setInView] = useState(false);

  return (
    <section className="py-24 border-y border-[rgba(0,245,212,0.12)] bg-[#040D1A] relative overflow-hidden text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />

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
        <div className="mt-14 pt-8 border-t border-[rgba(0,245,212,0.1)] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#7E97B8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping" />
            <span className="font-semibold text-white">Tier-IV MeitY</span> Empaneled Cloud
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
            <span className="font-semibold text-white">ISO 27001</span> Certified Infosec
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
            <span className="font-semibold text-white">RBI Master Directions</span> Compliant
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
            <span className="font-semibold text-white">256-Bit TLS</span> Bank-Grade Encryption
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
