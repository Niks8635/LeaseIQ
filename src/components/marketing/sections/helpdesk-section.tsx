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
    <section className="section-padding bg-surface relative overflow-hidden py-24 sm:py-32 border-t border-border/40" ref={ref}>
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
          <Card className="glass border-border/50 p-8 rounded-3xl shadow-premium relative overflow-hidden">
            
            <div className="relative pt-8 pb-16 md:py-16 px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[300px]">
              
              {/* Background Line */}
              <div className="absolute left-8 top-8 bottom-16 w-0.5 md:w-auto md:h-0.5 md:left-12 md:right-12 md:top-1/2 md:bottom-auto bg-border -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 z-0 rounded-full" />
              
              {/* Animated Progress Line */}
              <motion.div 
                initial={{ height: 0, width: "2px" }} // Mobile initial
                animate={{ 
                  height: ["0%", "100%", "100%"],
                  width: ["2px", "2px", "2px"]
                }}
                className="md:hidden absolute left-8 top-8 w-0.5 bg-gold -translate-x-1/2 z-0 rounded-full origin-top"
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div 
                initial={{ width: 0, height: "2px" }} // Desktop initial
                animate={{ width: "100%", height: "2px" }}
                className="hidden md:block absolute left-12 right-12 top-1/2 h-0.5 bg-gold -translate-y-1/2 z-0 rounded-full origin-left"
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
                      "w-4 h-4 rounded-full border-4 bg-background",
                      "border-gold shadow-[0_0_15px_rgba(201,169,110,0.5)]"
                    )}
                  />
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.5 + 0.2 }}
                    className="text-xs font-semibold tracking-wider text-muted-foreground"
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
                className="hidden md:flex items-center gap-3 absolute top-1/2 left-10 -translate-y-1/2 z-20 w-72 bg-card border border-border/80 shadow-premium rounded-2xl p-3.5 ml-2 backdrop-blur-md"
              >
                {/* Photo Thumbnail */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-border/60 bg-muted relative">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=200&q=80)` }}
                  />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 ring-2 ring-background animate-pulse" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-mono text-gold font-semibold">TICKET #4829</span>
                    <Badge variant="destructive" className="text-[9px] h-4 px-1.5 py-0">HIGH SLA</Badge>
                  </div>
                  <h5 className="font-semibold text-xs text-foreground truncate">Water Pipe Joint Leak — B-203</h5>
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Wrench className="w-3 h-3 text-gold" /> Plumber: Ramesh Kumar
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-background rounded-2xl p-6 border border-border/50 text-center shadow-sm">
            <h4 className="text-3xl font-serif font-bold text-foreground mb-1">2.4<span className="text-lg">h</span></h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg Response Time</p>
          </div>
          <div className="bg-background rounded-2xl p-6 border border-border/50 text-center shadow-sm">
            <h4 className="text-3xl font-serif font-bold text-success mb-1">94%</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Resolution Rate</p>
          </div>
          <div className="bg-background rounded-2xl p-6 border border-border/50 text-center shadow-sm">
            <h4 className="text-3xl font-serif font-bold text-warning mb-1">12</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Open Complaints</p>
          </div>
          <div className="bg-background rounded-2xl p-6 border border-border/50 text-center shadow-sm">
            <h4 className="text-3xl font-serif font-bold text-foreground mb-1">97%</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">SLA Compliance</p>
          </div>
        </div>

      </div>
    </section>
  );
}
