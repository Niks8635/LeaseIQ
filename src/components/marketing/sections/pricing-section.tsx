"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

import Link from "next/link"

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
      "Email & chat support with 24h SLA"
    ]
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
      "Priority WhatsApp & phone support"
    ]
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
      "24/7 round-the-clock priority hotline"
    ]
  }
]

export function PricingSection() {
  return (
    <section className="section-padding bg-surface/50 py-24 sm:py-32 relative overflow-hidden border-t border-border/40" id="pricing">
      <div className="container-wide relative z-10">
        <SectionHeading
        label="TRANSPARENT PROPTECH PRICING"
        title="Simple, transparent"
        titleAccent="per-flat pricing."
        description="Predictable subscription pricing with zero hidden implementation charges. Free 48-hour onboarding from legacy spreadsheets."
      />

      {/* Floating Trust Banner */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-muted-foreground">
        <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full">
          <Check className="w-3.5 h-3.5" /> 0% Convenience Fee on Native UPI
        </span>
        <span className="flex items-center gap-1.5 text-gold bg-gold/10 px-3 py-1 rounded-full">
          <Check className="w-3.5 h-3.5" /> Free 48-Hour Data Migration
        </span>
        <span className="flex items-center gap-1.5 text-foreground bg-muted px-3 py-1 rounded-full">
          <Check className="w-3.5 h-3.5" /> CA-Audited Accounting Standards
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
              "flex-1 flex flex-col relative overflow-hidden transition-all duration-300 rounded-3xl",
              plan.popular 
                ? "border-gold shadow-premium shadow-gold/10 bg-background scale-[1.02]" 
                : "border-border/60 bg-surface hover:border-gold/30 shadow-sm"
            )}>
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />
              )}
              
              <CardHeader className="p-8 pb-0">
                {plan.popular && (
                  <Badge className="absolute top-6 right-6 bg-gold text-charcoal hover:bg-gold/90 border-none font-semibold text-[11px] shadow-sm">
                    Most Popular
                  </Badge>
                )}
                <CardTitle className="font-serif text-xl tracking-wide">{plan.name}</CardTitle>
                <p className="text-xs text-muted-foreground mt-1.5">{plan.desc}</p>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold font-serif text-foreground">{plan.price}</span>
                  <span className="text-xs text-muted-foreground font-medium">{plan.unit}</span>
                </div>
                <p className="text-[11px] text-gold font-medium mt-1">{plan.subtext}</p>
              </CardHeader>
              
              <CardContent className="p-8 pt-6 flex-1 flex flex-col">
                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground/85 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className={cn(
                    "w-full py-6 text-xs sm:text-sm font-semibold rounded-2xl transition-all",
                    plan.popular 
                      ? "bg-gold text-charcoal hover:bg-gold/90 shadow-md hover:shadow-premium" 
                      : "border-border/80 hover:border-gold/40 hover:bg-muted"
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
  )
}
