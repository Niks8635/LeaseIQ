"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Landmark, CreditCard, FileText, ArrowLeftRight, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";

const features = [
  {
    icon: Landmark,
    title: "Maintenance Billing",
    description: "Generate monthly bills, apply custom charges, penalties and track payment status.",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description: "Real-time collection tracking with outstanding dues and overdue alerts.",
  },
  {
    icon: FileText,
    title: "Expense Management",
    description: "Categorize expenses, manage budgets and maintain complete financial records.",
  },
  {
    icon: ArrowLeftRight,
    title: "Bank Reconciliation",
    description: "Match bank transactions with invoices and payments automatically.",
  },
];

export function FinanceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="section-padding bg-[#040D1A] text-white overflow-hidden relative py-24 sm:py-32 border-b border-[rgba(0,245,212,0.1)]" id="finance-section">
      {/* Ambient Looping Fintech Ledger & Background */}
      <AmbientVideoBg preset="finance" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Ambient cyan glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#00F5D4]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="FINANCE & ACCOUNTING"
          title="Finance that works"
          titleAccent="smarter."
          description="Automate maintenance billing, track collections, manage expenses and reconcile bank statements — all from one intelligent platform."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" ref={ref}>
          {/* Left Column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 p-4 rounded-2xl bg-[#0A1B30] border border-[rgba(0,245,212,0.14)] shadow-xl hover:border-[rgba(0,245,212,0.4)] transition-all card-accent-line">
                <div className="shrink-0 mt-1 w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center text-[#00F5D4]">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-serif mb-1 text-white">{feature.title}</h3>
                  <p className="text-[#7E97B8] text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Visual & Floating Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Ambient cyan glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F5D4]/15 to-transparent rounded-3xl blur-3xl -z-10 transform scale-110" />

            <Card className="glass border-[rgba(0,245,212,0.2)] shadow-2xl p-7 sm:p-8 rounded-3xl relative overflow-hidden bg-[#0A1B30]/90 backdrop-blur-xl card-accent-line">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent" />
              
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs font-semibold text-[#7E97B8] uppercase tracking-wider mb-1">Monthly Inflow Run Rate</p>
                  <h4 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">₹28,50,000</h4>
                  <p className="text-xs text-[#00F5D4] flex items-center gap-1 mt-1.5 font-medium">
                    <TrendingUp className="w-4 h-4 text-[#00F5D4]" /> +12.5% vs Prior Quarter
                  </p>
                </div>
                <div className="relative w-22 h-22 flex items-center justify-center rounded-full bg-[#061220] border border-[rgba(0,245,212,0.15)] shadow-inner">
                  <svg className="w-22 h-22 transform -rotate-90 absolute">
                    <circle cx="44" cy="44" r="36" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-[#0D223E]" />
                    <circle
                      cx="44" cy="44" r="36" stroke="currentColor" strokeWidth="6" fill="transparent"
                      strokeDasharray="226.2" strokeDashoffset={226.2 * (1 - 0.942)}
                      className="text-[#00F5D4] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(0,245,212,0.5)]"
                    />
                  </svg>
                  <div className="text-center z-10">
                    <span className="block text-lg font-bold font-mono text-[#00F5D4]">94%</span>
                    <span className="block text-[9px] text-[#7E97B8] uppercase">Collected</span>
                  </div>
                </div>
              </div>

              {/* Financial Breakdown Pills */}
              <div className="grid grid-cols-3 gap-3 border-t border-[rgba(0,245,212,0.12)] pt-6">
                <div className="bg-[#061220] rounded-2xl p-3.5 text-center border border-[rgba(0,245,212,0.1)]">
                  <p className="text-[10px] text-[#7E97B8] mb-0.5">Outstanding</p>
                  <p className="text-base font-bold text-[#00F5D4] font-mono">₹1.7L</p>
                </div>
                <div className="bg-[#061220] rounded-2xl p-3.5 text-center border border-[rgba(0,245,212,0.1)]">
                  <p className="text-[10px] text-[#7E97B8] mb-0.5">Overdue</p>
                  <p className="text-base font-bold text-[#F59E0B] font-mono">₹45K</p>
                </div>
                <div className="bg-[#061220] rounded-2xl p-3.5 text-center border border-[rgba(0,245,212,0.1)]">
                  <p className="text-[10px] text-[#7E97B8] mb-0.5">Defaulters</p>
                  <p className="text-base font-bold text-white font-mono">23 Units</p>
                </div>
              </div>

              {/* Verified Ledger Badge */}
              <div className="mt-5 pt-4 border-t border-[rgba(0,245,212,0.1)] flex items-center justify-between text-xs text-[#7E97B8]">
                <span className="flex items-center gap-1.5 text-[#00F5D4] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" /> Bank Nodal Statement Matched
                </span>
                <span className="font-mono text-[#7E97B8]">HDFC / ICICI Auto-Sync</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinanceSection;
