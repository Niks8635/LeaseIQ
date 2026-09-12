"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Check, Calculator, Sparkles, ArrowRight, Shield, Building2, CheckCircle2, Star, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { LIFESTYLE_IMAGES } from '@/lib/media-config';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const [units, setUnits] = useState(250);
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  // Realistic Indian PropTech SaaS Benchmarks (e.g. ₹22/flat/month billed annually or ₹28 billed monthly)
  const ratePerUnit = billingCycle === 'annual' ? 22 : 28;
  const monthlyTotal = units * ratePerUnit;
  const annualTotal = monthlyTotal * 12;
  const annualSavings = (units * 28 * 12) - annualTotal;

  const plans = [
    {
      name: "STARTER",
      badge: "Small Communities",
      desc: "Essential digital management for standalone residential buildings up to 60 units.",
      price: "₹18",
      unitLabel: "/ flat / month",
      features: [
        "Up to 60 Residential Units",
        "Digital Member & Tenant Directory",
        "Automated Maintenance Bill Generation",
        "Basic Visitor & Delivery Logging",
        "Digital Notice Board & Circulars",
        "Email & In-App Ticket Support",
      ],
      featured: false,
      cta: "Start with Starter",
    },
    {
      name: "PRO ENTERPRISE",
      badge: "Most Popular",
      desc: "Comprehensive society ERP with automated AI reconciliation, gate ANPR, and resident superapp.",
      price: "₹25",
      unitLabel: "/ flat / month",
      features: [
        "Unlimited Residential Units & Towers",
        "Autonomous AI Bank Reconciliation",
        "Optical ANPR Vehicle Recognition & Boom Barrier",
        "1-Tap UPI Maintenance with Instant GST Receipts",
        "Clubhouse & Amenities Slot Management",
        "Multi-Stage Helpdesk SLA Tracker",
        "Vendor AMC Contract & Performance Vault",
        "Dedicated Society Account Specialist",
      ],
      featured: true,
      cta: "Schedule Pro Demo",
    },
    {
      name: "FEDERATION & TOWNSHIPS",
      badge: "Large Complexes",
      desc: "Custom multi-society infrastructure for mega gated townships, federations, and builder handovers.",
      price: "Custom",
      unitLabel: "Enterprise SLA",
      features: [
        "5,000+ Units Across Multiple RWAs",
        "Federation Consolidated Command Dashboard",
        "Full AI Finance Hub & Tally Prime 2-Way Sync",
        "Custom API Integrations & Smart Water Meters",
        "On-Premise / Private Cloud Deployment Options",
        "24/7 Dedicated Emergency RWA Hotline",
        "Bespoke Legal & Audit Compliance Packages",
      ],
      featured: false,
      cta: "Contact Enterprise Sales",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 relative overflow-hidden">
      {/* Ambient Looping Fintech Stream Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="finance" variant="light" overlayOpacity={0.62} showControls={false} />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

      <section className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            Predictable & Transparent Society Pricing
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-4">
            Invest in Society <span className="text-gradient-gold">Efficiency</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            No hidden setup fees. No surcharges on resident UPI payments. Simple per-unit pricing tailored for Indian residential communities and RWAs.
          </p>
        </div>

        {/* Interactive Society Cost Calculator */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border/70 shadow-premium relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">Interactive Society Cost Calculator</h3>
                  <p className="text-xs text-muted-foreground">Slide to your total flat count to view instant estimated pricing.</p>
                </div>
              </div>

              {/* Billing Cycle Toggle */}
              <div className="inline-flex p-1 bg-background border border-border/60 rounded-full text-xs self-start sm:self-auto shadow-sm">
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                    billingCycle === 'annual' ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Annual Prepay (Save 20%)
                </button>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                    billingCycle === 'monthly' ? 'bg-foreground text-background shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span>Society Size: <strong className="text-gold text-lg">{units} Flats / Units</strong></span>
                  <span className="text-xs text-muted-foreground">Approx. {(units * 3.4).toFixed(0)} Residents</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1200"
                  step="10"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-gold h-2.5 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-background border border-border/60">
                  <p className="text-xs text-muted-foreground font-medium">Monthly Investment</p>
                  <p className="text-3xl font-bold font-serif text-foreground mt-1">₹{monthlyTotal.toLocaleString('en-IN')}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Billed at ₹{ratePerUnit}/flat/month</p>
                </div>

                <div className="p-5 rounded-2xl bg-background border border-border/60">
                  <p className="text-xs text-muted-foreground font-medium">Annual Total</p>
                  <p className="text-3xl font-bold font-serif text-foreground mt-1">₹{annualTotal.toLocaleString('en-IN')}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">+ Applicable GST (18% ITC Eligible)</p>
                </div>

                <div className="p-5 rounded-2xl bg-gold/10 border border-gold/25 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gold font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Annual Committee Savings
                    </p>
                    <p className="text-3xl font-bold font-serif text-foreground mt-1">₹{annualSavings.toLocaleString('en-IN')}</p>
                  </div>
                  <Button size="sm" asChild className="bg-gold text-gold-foreground hover:bg-gold/90 mt-3 text-xs font-medium">
                    <Link href="/book-demo">Request Proposal for {units} Flats</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-24">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`bg-surface flex flex-col rounded-3xl transition-all duration-300 ${
                plan.featured
                  ? 'border-2 border-gold shadow-premium relative transform md:-translate-y-4'
                  : 'border border-border/60 hover:border-gold/30'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-primary-foreground font-semibold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow">
                  {plan.badge}
                </div>
              )}

              <CardHeader className="p-8 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{plan.name}</span>
                  {!plan.featured && (
                    <Badge variant="outline" className="text-[10px]">{plan.badge}</Badge>
                  )}
                </div>
                <CardTitle className="text-3xl font-serif font-bold text-foreground">
                  {plan.price} <span className="text-xs font-normal text-muted-foreground font-sans">{plan.unitLabel}</span>
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {plan.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-4 flex-1">
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-4">Included Capabilities:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="p-8 pt-0">
                <Button
                  className={`w-full h-11 rounded-xl font-medium ${
                    plan.featured ? 'bg-gold text-gold-foreground hover:bg-gold/90 shadow-md' : 'border-border/60'
                  }`}
                  variant={plan.featured ? 'default' : 'outline'}
                  asChild
                >
                  <Link href="/book-demo">
                    {plan.cta} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Visual Trust & Architectural Photography Showcase Strip */}
        <div className="max-w-6xl mx-auto mb-20 rounded-3xl overflow-hidden border border-border/70 bg-card shadow-premium relative">
          <div className="grid lg:grid-cols-12 items-center">
            {/* Left Photo Showcase */}
            <div className="lg:col-span-6 relative h-[320px] lg:h-[380px] overflow-hidden group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LIFESTYLE_IMAGES[0].imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              
              {/* Overlay Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <Badge className="bg-gold text-black font-semibold text-[11px]">
                  Verified Deployment
                </Badge>
                <h4 className="font-serif text-xl font-semibold leading-tight">
                  {LIFESTYLE_IMAGES[0].title}
                </h4>
                <p className="text-xs text-white/80">
                  {LIFESTYLE_IMAGES[0].location} • 450 Units Managed on LeaseIQ
                </p>
              </div>
            </div>

            {/* Right Information & Guarantees */}
            <div className="lg:col-span-6 p-8 lg:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                <Shield className="w-3.5 h-3.5" /> Enterprise SLA & Zero Hidden Surcharges
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
                Everything Included. No Surprise Maintenance Add-ons.
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Unlike traditional society vendors who bill extra for SMS credits, guard training, and database backups, LeaseIQ provides complete end-to-end operational coverage.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-surface border border-border/60">
                  <p className="text-xs font-semibold text-foreground">0% Payment Fee</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Direct settlement into society account</p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface border border-border/60">
                  <p className="text-xs font-semibold text-foreground">Free Data Migration</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Historical Excel & Tally import</p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface border border-border/60">
                  <p className="text-xs font-semibold text-foreground">99.9% Uptime SLA</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">High availability gate servers</p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface border border-border/60">
                  <p className="text-xs font-semibold text-foreground">Unlimited Support</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Dedicated onboarding engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-surface border border-border/60 shadow-premium">
          <h2 className="font-serif text-3xl font-semibold text-center mb-8 text-foreground">
            Frequently Asked Pricing Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Are there setup, hardware or data migration fees?",
                a: "No hidden onboarding charges. Our technical engineers handle full migration from your historical Excel sheets, Tally, or legacy society software at zero extra cost on annual plans.",
              },
              {
                q: "Do residents incur extra charges when paying maintenance via UPI?",
                a: "Never. LeaseIQ processes resident UPI transactions with 0% convenience fees. Settlement occurs directly into your society's registered nodal account.",
              },
              {
                q: "Can we install gate tablets and guard passes on existing hardware?",
                a: "Yes. The LeaseIQ Guard app operates on any standard Android tablet or smartphone (Android 10+). No proprietary expensive hardware lock-in.",
              },
              {
                q: "How does billing work if our society adds new units or towers later?",
                a: "Billing scales seamlessly on a pro-rata basis as new wings or phases are handed over by the builder.",
              },
            ].map((faq, i) => (
              <div key={i} className="pb-6 border-b border-border/40 last:border-none last:pb-0">
                <h4 className="text-base font-semibold text-foreground mb-1.5">{faq.q}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

