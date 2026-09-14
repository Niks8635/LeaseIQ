"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stages = ["OPEN", "ASSIGNED", "IN PROGRESS", "RESOLVED", "CLOSED"];

export function HelpdeskSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="section-padding bg-[#040D1A] relative overflow-hidden py-24 sm:py-32 border-t border-[rgba(0,245,212,0.1)] text-white" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="HELPDESK & MAINTENANCE"
          title="Every complaint. Every update."
          titleAccent="One place."
          description="From complaint submission to resolution — track every step with full transparency."
          align="center"
          className="mb-16"
        />

        {/* Pipeline Visual */}
        <div className="mb-16">
          <Card className="bg-[#0A1B30]/85 border border-[rgba(0,245,212,0.18)] p-8 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl card-accent-line">
            <div className="relative pt-8 pb-16 md:py-16 px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[300px]">
              
              {/* Background Line */}
              <div className="absolute left-8 top-8 bottom-16 w-0.5 md:w-auto md:h-0.5 md:left-12 md:right-12 md:top-1/2 md:bottom-auto bg-[rgba(0,245,212,0.15)] -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 z-0 rounded-full" />
              
              {/* Animated Progress Line */}
              <motion.div 
                initial={{ height: 0, width: "2px" }} // Mobile initial
                animate={{ 
                  height: ["0%", "100%", "100%"],
                  width: ["2px", "2px", "2px"]
                }}
                className="md:hidden absolute left-8 top-8 w-0.5 bg-[#00F5D4] shadow-[0_0_12px_rgba(0,245,212,0.6)] -translate-x-1/2 z-0 rounded-full origin-top"
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div 
                initial={{ width: 0, height: "2px" }} // Desktop initial
                animate={{ width: "100%", height: "2px" }}
                className="hidden md:block absolute left-12 right-12 top-1/2 h-0.5 bg-[#00F5D4] shadow-[0_0_12px_rgba(0,245,212,0.6)] -translate-y-1/2 z-0 rounded-full origin-left"
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Stages */}
              {stages.map((stage, index) => (
                <div key={stage} className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-3 mb-8 md:mb-0 last:mb-0">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.5, duration: 0.3 }}
                    className={cn(
                      "w-4 h-4 rounded-full border-4 bg-[#040D1A]",
                      "border-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.6)]"
                    )}
                  />
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.5 + 0.2 }}
                    className="text-xs font-semibold tracking-wider text-[#7E97B8]"
                  >
                    {stage}
                  </motion.span>
                </div>
              ))}

              {/* Floating Complaint Card with Photo Evidence */}
              <motion.div
                initial={{ x: "-10%", y: "-50%", opacity: 0 }}
                animate={{ 
                  x: ["0%", "90%", "190%", "290%", "390%", "480%"],
                  opacity: [0, 1, 1, 1, 1, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="hidden md:flex items-center gap-3 absolute top-1/2 left-10 -translate-y-1/2 z-20 w-72 bg-[#061220]/95 border border-[rgba(0,245,212,0.3)] shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-2xl p-3.5 ml-2 backdrop-blur-xl"
              >
                {/* Photo Thumbnail */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[rgba(0,245,212,0.2)] bg-[#0A1B30] relative">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80)` }}
                  />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 ring-2 ring-[#061220] animate-pulse" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono text-[#00F5D4] font-semibold">TICKET #4829</span>
                    <Badge variant="destructive" className="text-[9px] h-4 px-1.5 py-0 bg-red-500/20 text-red-400 border border-red-500/30">HIGH SLA</Badge>
                  </div>
                  <h5 className="font-semibold text-xs text-white truncate">Water Pipe Joint Leak — B-203</h5>
                  <p className="text-[10px] text-[#7E97B8] flex items-center gap-1 mt-0.5">
                    <Wrench className="w-3 h-3 text-[#00F5D4]" /> Plumber: Ramesh Kumar
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#0A1B30]/75 rounded-2xl p-6 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] transition-all text-center shadow-lg card-glow">
            <h4 className="text-3xl font-bold text-white mb-1">2.4<span className="text-lg text-[#00F5D4]">h</span></h4>
            <p className="text-xs text-[#7E97B8] uppercase tracking-wide font-medium">Avg Response Time</p>
          </div>
          <div className="bg-[#0A1B30]/75 rounded-2xl p-6 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] transition-all text-center shadow-lg card-glow">
            <h4 className="text-3xl font-bold text-[#00F5D4] mb-1">94%</h4>
            <p className="text-xs text-[#7E97B8] uppercase tracking-wide font-medium">Resolution Rate</p>
          </div>
          <div className="bg-[#0A1B30]/75 rounded-2xl p-6 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] transition-all text-center shadow-lg card-glow">
            <h4 className="text-3xl font-bold text-amber-400 mb-1">12</h4>
            <p className="text-xs text-[#7E97B8] uppercase tracking-wide font-medium">Open Complaints</p>
          </div>
          <div className="bg-[#0A1B30]/75 rounded-2xl p-6 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] transition-all text-center shadow-lg card-glow">
            <h4 className="text-3xl font-bold text-white mb-1">97%</h4>
            <p className="text-xs text-[#7E97B8] uppercase tracking-wide font-medium">SLA Compliance</p>
          </div>
        </div>

      </div>
    </section>
  );
}
