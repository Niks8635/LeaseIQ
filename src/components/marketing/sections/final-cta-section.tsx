"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg"
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#121215] text-white border-t border-white/10">
      {/* Ambient Looping Golden Horizon Sunset Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="sunset" variant="dark" overlayOpacity={0.70} showControls={true} />
      
      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Transform Your Society Operations Today
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
            Ready to run your society <span className="text-gradient-gold">smarter?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-zinc-200 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
            Join modern communities across Mumbai, Bengaluru, Delhi-NCR, and Pune using LeaseIQ to automate finances, secure gates, and elevate resident living.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild className="w-full sm:w-auto bg-gold text-black hover:bg-gold/90 px-8 py-6 text-lg font-semibold shadow-[0_0_30px_rgba(201,169,110,0.3)]">
              <Link href="/book-demo">Book a Demo</Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              <Link href="/features">Explore Platform</Link>
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-zinc-300 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free 48-Hour Migration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 0% UPI Surcharge
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 99.9% Uptime SLA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const FinalCTASection = FinalCtaSection;
