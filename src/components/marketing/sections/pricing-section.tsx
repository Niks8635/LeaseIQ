"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "STARTER",
    price: "₹18",
    unit: "/ flat / mo",
    subtext: "Billed annually • Min 50 units",
    desc: "Essential operations for boutique residential communities",
    popular: false,
    cta: "Start 30-Day Trial",
    href: "/book-demo",
    features: [
      "Up to 50 units",
      "Automated maintenance billing & UPI",
      "Visitor & courier management with PIN",
      "Helpdesk tickets with photo upload",
      "Digital notices & AGM notifications",
      "Email & chat support with 24h SLA",
    ],
  },
  {
    name: "PRO",
    price: "₹25",
    unit: "/ flat / mo",
    subtext: "Billed annually • Most popular choice",
    desc: "Complete operational suite with AI ledger & smart gate",
    popular: true,
    cta: "Book Live Demo",
    href: "/book-demo",
    features: [
      "Up to 500 units",
      "Advanced billing & GST e-invoicing",
      "Autonomous AI bank reconciliation",
      "Optical ANPR boom barrier integration",
      "Facility booking with turnstile QR pass",
      "Vendor AMC auditing & payroll tracking",
      "Priority WhatsApp & phone support",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    unit: "tailored quote",
    subtext: "Dedicated SLA • On-premise options",
    desc: "For large high-rise townships and multi-tower federations",
    popular: false,
    cta: "Contact Enterprise",
    href: "/contact",
    features: [
      "Unlimited residential units & towers",
      "Full AI Finance Hub & Tally Prime 2-way sync",
      "Custom IoT boom barrier & turnstiles",
      "Dedicated account manager & CA onboarding",
      "99.99% uptime SLA guarantee",
      "Multi-society federation rollups",
      "24/7 round-the-clock priority hotline",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="section-padding bg-[#040D1A] py-24 sm:py-32 relative overflow-hidden border-t border-[rgba(0,245,212,0.1)] text-white" id="pricing">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="TRANSPARENT PROPTECH PRICING"
          title="Simple, transparent"
          titleAccent="per-flat pricing."
          description="Predictable subscription pricing with zero hidden implementation charges. Free 48-hour onboarding from legacy spreadsheets."
          align="center"
        />

        {/* Floating Trust Banner */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-semibold text-[#7E97B8]">
          <span className="flex items-center gap-1.5 text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-3.5 py-1 rounded-full">
            <Check className="w-3.5 h-3.5" /> 0% Convenience Fee on Native UPI
          </span>
          <span className="flex items-center gap-1.5 text-[#00F5D4] bg-[#00F5D4]/10 border border-[#00F5D4]/25 px-3.5 py-1 rounded-full">
            <Check className="w-3.5 h-3.5" /> Free 48-Hour Data Migration
          </span>
          <span className="flex items-center gap-1.5 text-white bg-[#061220] border border-[rgba(0,245,212,0.2)] px-3.5 py-1 rounded-full">
            <Check className="w-3.5 h-3.5 text-[#00F5D4]" /> CA-Audited Accounting Standards
          </span>
        </div>

        <div className="mx-auto mt-14 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={cn("h-full flex", plan.popular && "md:-mt-4 md:mb-4")}
            >
              <Card className={cn(
                "flex-1 flex flex-col relative overflow-hidden transition-all duration-300 rounded-3xl backdrop-blur-xl card-accent-line",
                plan.popular 
                  ? "border-2 border-[#00F5D4] shadow-[0_0_35px_rgba(0,245,212,0.2)] bg-[#0A1B30] scale-[1.02] ring-1 ring-[#00F5D4]/30" 
                  : "border-[rgba(0,245,212,0.14)] bg-[#0A1B30]/80 hover:border-[rgba(0,245,212,0.35)] shadow-xl"
              )}>
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent shadow-[0_0_12px_#00F5D4]" />
                )}
                
                <CardHeader className="p-8 pb-0">
                  {plan.popular && (
                    <Badge className="absolute top-6 right-6 bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 border-none font-bold text-[11px] shadow-[0_0_12px_rgba(0,245,212,0.4)]">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-xl tracking-wide text-white">{plan.name}</CardTitle>
                  <p className="text-xs text-[#7E97B8] mt-1.5">{plan.desc}</p>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-xs text-[#7E97B8] font-medium">{plan.unit}</span>
                  </div>
                  <p className="text-[11px] text-[#00F5D4] font-medium mt-1">{plan.subtext}</p>
                </CardHeader>
                
                <CardContent className="p-8 pt-6 flex-1 flex flex-col">
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                        <span className="text-white/85 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={cn(
                      "w-full py-6 text-xs sm:text-sm font-semibold rounded-2xl transition-all cursor-pointer",
                      plan.popular 
                        ? "bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 shadow-[0_0_20px_rgba(0,245,212,0.3)] font-bold" 
                        : "border border-[rgba(0,245,212,0.25)] bg-[#061220] text-white hover:border-[#00F5D4] hover:text-[#00F5D4] hover:bg-[#0A1B30]"
                    )}
                  >
                    <Link href={plan.href}>
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
