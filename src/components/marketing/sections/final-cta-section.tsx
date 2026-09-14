"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#020810] text-white border-t border-[rgba(0,245,212,0.15)]">
      {/* Ambient Looping Sunset Video Background */}
      <AmbientVideoBg preset="sunset" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Radiant Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#020810] to-transparent pointer-events-none" />
      
      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/25 text-[#00F5D4] text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(0,245,212,0.2)]">
            <Sparkles className="w-3.5 h-3.5" /> Transform Your Society Operations Today
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            Ready to run your society <span className="text-gradient-cyan">smarter?</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#7E97B8] mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
            Join modern communities across Mumbai, Bengaluru, Delhi-NCR, and Pune using LeaseIQ to automate finances, secure gates, and elevate resident living.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild className="w-full sm:w-auto bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 px-8 py-6 text-base sm:text-lg font-bold shadow-[0_0_30px_rgba(0,245,212,0.4)] rounded-full transition-all cursor-pointer">
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto border-[rgba(0,245,212,0.25)] bg-[#0A1B30]/60 text-white hover:border-[#00F5D4] hover:text-[#00F5D4] hover:bg-[#0A1B30] px-8 py-6 text-base sm:text-lg font-medium rounded-full transition-all cursor-pointer">
              <Link href="/features">Explore Platform</Link>
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#7E97B8] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" /> Free 48-Hour Migration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" /> 0% UPI Surcharge
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" /> 99.9% Uptime SLA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const FinalCTASection = FinalCtaSection;
