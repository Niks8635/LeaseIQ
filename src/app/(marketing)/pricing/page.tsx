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
    <div className="min-h-screen bg-[#040D1A] pt-28 pb-20 relative overflow-hidden text-white">
      {/* Ambient Looping Fintech Stream Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="finance" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <section className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.3)] text-[#00F5D4] text-xs font-semibold uppercase tracking-wider mb-4">
            Predictable & Transparent Society Pricing
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
            Invest in Society <span className="text-gradient-cyan">Efficiency</span>
          </h1>
          <p className="text-lg text-[#7E97B8] leading-relaxed">
            No hidden setup fees. No surcharges on resident UPI payments. Simple per-unit pricing tailored for Indian residential communities and RWAs.
          </p>
        </div>

        {/* Interactive Society Cost Calculator */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] shadow-2xl relative z-10 card-accent-line card-glow backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.2)] text-[#00F5D4] flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">Interactive Society Cost Calculator</h3>
                  <p className="text-xs text-[#7E97B8]">Slide to your total flat count to view instant estimated pricing.</p>
                </div>
              </div>

              {/* Billing Cycle Toggle */}
              <div className="inline-flex p-1 bg-[#061220] border border-[rgba(0,245,212,0.2)] rounded-full text-xs self-start sm:self-auto shadow-sm">
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                    billingCycle === 'annual'
                      ? 'bg-[#00F5D4] text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                      : 'text-[#7E97B8] hover:text-white'
                  }`}
                >
                  Annual Prepay (Save 20%)
                </button>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-1.5 rounded-full font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-[#00F5D4] text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                      : 'text-[#7E97B8] hover:text-white'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <span>Society Size: <strong className="text-[#00F5D4] text-lg">{units} Flats / Units</strong></span>
                  <span className="text-xs text-[#7E97B8]">Approx. {(units * 3.4).toFixed(0)} Residents</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1200"
                  step="10"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  className="w-full accent-[#00F5D4] h-2.5 bg-[#061220] rounded-lg appearance-none cursor-pointer border border-[rgba(0,245,212,0.15)]"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.14)]">
                  <p className="text-xs text-[#7E97B8] font-medium">Monthly Investment</p>
                  <p className="text-3xl font-bold font-serif text-white mt-1">₹{monthlyTotal.toLocaleString('en-IN')}</p>
                  <p className="text-[11px] text-[#7E97B8] mt-1">Billed at ₹{ratePerUnit}/flat/month</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.14)]">
                  <p className="text-xs text-[#7E97B8] font-medium">Annual Total</p>
                  <p className="text-3xl font-bold font-serif text-white mt-1">₹{annualTotal.toLocaleString('en-IN')}</p>
                  <p className="text-[11px] text-[#7E97B8] mt-1">+ Applicable GST (18% ITC Eligible)</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.25)] flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#00F5D4] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Annual Committee Savings
                    </p>
                    <p className="text-3xl font-bold font-serif text-white mt-1">₹{annualSavings.toLocaleString('en-IN')}</p>
                  </div>
                  <Button size="sm" asChild className="bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 mt-3 text-xs font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] rounded-full">
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
              className={`flex flex-col rounded-3xl transition-all duration-300 ${
                plan.featured
                  ? 'border-2 border-[#00F5D4] shadow-[0_0_30px_rgba(0,245,212,0.2)] bg-[#0A1B30]/90 relative transform md:-translate-y-4 card-accent-line backdrop-blur-xl'
                  : 'bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] card-glow backdrop-blur-xl shadow-xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00F5D4] text-[#040D1A] font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,212,0.4)]">
                  {plan.badge}
                </div>
              )}

              <CardHeader className="p-8 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7E97B8]">{plan.name}</span>
                  {!plan.featured && (
                    <Badge variant="outline" className="text-[10px] border-[rgba(0,245,212,0.2)] bg-[#061220] text-[#7E97B8]">{plan.badge}</Badge>
                  )}
                </div>
                <CardTitle className="text-3xl font-serif font-bold text-white">
                  {plan.price} <span className="text-xs font-normal text-[#7E97B8] font-sans">{plan.unitLabel}</span>
                </CardTitle>
                <CardDescription className="text-xs text-[#7E97B8] mt-2 leading-relaxed">
                  {plan.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-4 flex-1">
                <div className="pt-4 border-t border-[rgba(0,245,212,0.1)]">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Included Capabilities:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-[#7E97B8]">
                        <Check className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="p-8 pt-0">
                <Button
                  className={`w-full h-11 rounded-xl ${
                    plan.featured
                      ? 'bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]'
                      : 'border border-[rgba(0,245,212,0.25)] bg-[#061220] text-white hover:text-[#00F5D4] hover:border-[#00F5D4] font-medium transition-all'
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
        <div className="max-w-6xl mx-auto mb-20 rounded-3xl overflow-hidden border border-[rgba(0,245,212,0.14)] bg-[#0A1B30]/80 shadow-2xl relative card-accent-line card-glow backdrop-blur-xl">
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
                <Badge className="bg-[#00F5D4] text-[#040D1A] font-bold text-[11px] border-none">
                  Verified Deployment
                </Badge>
                <h4 className="font-serif text-xl font-semibold leading-tight text-white">
                  {LIFESTYLE_IMAGES[0].title}
                </h4>
                <p className="text-xs text-white/80">
                  {LIFESTYLE_IMAGES[0].location} • 450 Units Managed on LeaseIQ
                </p>
              </div>
            </div>

            {/* Right Information & Guarantees */}
            <div className="lg:col-span-6 p-8 lg:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/10 text-[#00F5D4] text-xs font-semibold border border-[rgba(0,245,212,0.2)]">
                <Shield className="w-3.5 h-3.5" /> Enterprise SLA & Zero Hidden Surcharges
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white leading-tight">
                Everything Included. No Surprise Maintenance Add-ons.
              </h3>
              <p className="text-xs sm:text-sm text-[#7E97B8] leading-relaxed">
                Unlike traditional society vendors who bill extra for SMS credits, guard training, and database backups, LeaseIQ provides complete end-to-end operational coverage.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="text-xs font-semibold text-white">0% Payment Fee</p>
                  <p className="text-[11px] text-[#7E97B8] mt-0.5">Direct settlement into society account</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="text-xs font-semibold text-white">Free Data Migration</p>
                  <p className="text-[11px] text-[#7E97B8] mt-0.5">Historical Excel & Tally import</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="text-xs font-semibold text-white">99.9% Uptime SLA</p>
                  <p className="text-[11px] text-[#7E97B8] mt-0.5">High availability gate servers</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="text-xs font-semibold text-white">Unlimited Support</p>
                  <p className="text-[11px] text-[#7E97B8] mt-0.5">Dedicated onboarding engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] shadow-2xl card-accent-line card-glow backdrop-blur-xl">
          <h2 className="font-serif text-3xl font-semibold text-center mb-8 text-white">
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
              <div key={i} className="pb-6 border-b border-[rgba(0,245,212,0.1)] last:border-none last:pb-0">
                <h4 className="text-base font-semibold text-white mb-1.5">{faq.q}</h4>
                <p className="text-xs text-[#7E97B8] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
