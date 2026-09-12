"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Calculator, CheckCircle2, FileText, Shield, Landmark, Sparkles, ArrowRight, Search, Mail, ExternalLink, Award } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { LIFESTYLE_IMAGES } from '@/lib/media-config';
import { Badge } from '@/components/ui/badge';

const guides = [
  {
    title: "Model Bye-Laws & RWA Compliance Handbook (2024–25)",
    description: "Complete legal framework, voting rules, AGM guidelines, and statutory election procedures for housing societies across Maharashtra, Karnataka, and Delhi-NCR.",
    category: "Legal & Governance",
    pages: "48 Pages PDF",
    icon: FileText,
    coverImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    tag: "Updated for DPDP Act 2023",
  },
  {
    title: "Housing Society Accounting & GST Playbook",
    description: "In-depth guide on the ₹7,500 maintenance GST threshold, sinking fund calculations, repair fund statutory limits, and TDS compliance on vendor contracts.",
    category: "Finance & Taxation",
    pages: "36 Pages PDF",
    icon: Landmark,
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    tag: "CA Association Reviewed",
  },
  {
    title: "Gated Community Security & Gate Guard SOP Manual",
    description: "Standard operating procedures for security guard shifts, visitor verification protocols, delivery handling, emergency escalation, and digital gate pass auditing.",
    category: "Security & Operations",
    pages: "28 Pages PDF",
    icon: Shield,
    coverImage: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80",
    tag: "Optical ANPR Standard",
  },
  {
    title: "AI Invoicing & Automated Audit Readiness Guide",
    description: "How management committees use automated OCR invoice parsing, duplicate payment detection, and automated bank reconciliation to prepare for annual society audits.",
    category: "AI & Innovation",
    pages: "24 Pages PDF",
    icon: Sparkles,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tag: "Zero Deficit Accounting",
  },
];

export default function ResourcesPage() {
  const [downloadedIndex, setDownloadedIndex] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Interactive Maintenance Estimator State
  const [units, setUnits] = useState(200);
  const [avgSqft, setAvgSqft] = useState(1200);
  const [ratePerSqft, setRatePerSqft] = useState(3.5);

  const monthlyBilled = Math.round(units * avgSqft * ratePerSqft);
  const annualBilled = monthlyBilled * 12;
  const estimatedCollectionLoss = Math.round(annualBilled * 0.08); // 8% avg manual leakage
  const leaseiqRecovered = Math.round(estimatedCollectionLoss * 0.85); // 85% recovery

  const handleDownload = (i: number) => {
    setDownloadedIndex(i);
    setTimeout(() => {
      setDownloadedIndex(null);
    }, 2500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-20 relative overflow-hidden">
      {/* Ambient Looping Analytics Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="analytics" variant="light" overlayOpacity={0.62} showControls={false} />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            PropTech Knowledge & Guidance
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-4">
            Resources & <span className="text-gradient-gold">Society Toolkit</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Curated playbooks, legal compliance guides, society accounting calculators, and operational frameworks for modern housing societies and RWAs.
          </p>
        </div>

        {/* Section 1: Downloadable Guides Grid with Photographic Covers */}
        <div className="mb-20 relative">

          <SectionHeading
            label="HANDBOOKS & FRAMEWORKS"
            title="Download Free"
            titleAccent="Society Guides"
            description="Authored by seasoned society auditors, legal advisors, and security specialists."
            align="left"
            className="mb-10"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, idx) => (
              <Card key={idx} className="bg-surface border-border/60 hover:border-gold/40 transition-all shadow-sm hover:shadow-premium flex flex-col justify-between overflow-hidden group">
                {/* Visual Photographic Book Cover Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${guide.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Category & Status Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      {guide.category}
                    </span>
                    <span className="text-xs text-white/90 font-mono px-2 py-0.5 rounded bg-black/40 backdrop-blur-md">
                      {guide.pages}
                    </span>
                  </div>

                  {/* Tag on Cover */}
                  <div className="absolute bottom-3 left-4">
                    <Badge className="bg-gold text-black font-semibold text-[10px] tracking-wide">
                      <Award className="w-3 h-3 mr-1" /> {guide.tag}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <guide.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground leading-snug group-hover:text-gold transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {guide.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">PDF Instant Download</span>
                    <Button
                      onClick={() => handleDownload(idx)}
                      variant="outline"
                      size="sm"
                      className="border-gold/30 hover:bg-gold hover:text-primary-foreground transition-colors gap-1.5 font-medium"
                    >
                      {downloadedIndex === idx ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-success" /> Downloaded!
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4" /> Download Guide
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Interactive Society Maintenance & Leakage Calculator */}
        <div className="mb-20 p-8 md:p-12 rounded-3xl bg-surface border border-border/60 shadow-premium">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                <Calculator className="w-3.5 h-3.5" /> Interactive Society Calculator
              </div>
              <h2 className="font-serif text-3xl font-semibold text-foreground leading-tight">
                Calculate Potential <span className="text-gradient-gold">Revenue Leakage</span> & Savings
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Indian societies running on manual collection methods experience an average of 6% to 12% in delayed dues, unverified cheques, and unaccounted expenses. See how LeaseIQ transforms your balance sheet.
              </p>
              
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span>Number of Units: <strong>{units} Flats</strong></span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="1000"
                    step="10"
                    value={units}
                    onChange={(e) => setUnits(Number(e.target.value))}
                    className="w-full accent-gold h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span>Average Flat Carpet Area: <strong>{avgSqft} sq.ft</strong></span>
                  </div>
                  <input
                    type="range"
                    min="600"
                    max="3500"
                    step="50"
                    value={avgSqft}
                    onChange={(e) => setAvgSqft(Number(e.target.value))}
                    className="w-full accent-gold h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span>Maintenance Rate: <strong>₹{ratePerSqft} / sq.ft</strong></span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="8.0"
                    step="0.5"
                    value={ratePerSqft}
                    onChange={(e) => setRatePerSqft(Number(e.target.value))}
                    className="w-full accent-gold h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right: Calculated Stats Display */}
            <div className="lg:col-span-7 bg-background p-6 sm:p-8 rounded-2xl border border-border/60 shadow-sm">
              <h3 className="font-serif text-lg font-semibold mb-6">Financial Impact Forecast</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-surface border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Monthly Billing</p>
                  <p className="text-2xl font-bold font-serif text-foreground">
                    ₹{(monthlyBilled / 100000).toFixed(2)} Lakhs
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Annual Society Turnover</p>
                  <p className="text-2xl font-bold font-serif text-foreground">
                    ₹{(annualBilled / 10000000).toFixed(2)} Crores
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                  <p className="text-xs text-warning mb-1">Estimated Manual Dues At Risk</p>
                  <p className="text-2xl font-bold font-serif text-warning">
                    ₹{(estimatedCollectionLoss / 100000).toFixed(2)} Lakhs/yr
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                  <p className="text-xs text-success mb-1">Estimated Dues Recovered via LeaseIQ</p>
                  <p className="text-2xl font-bold font-serif text-success">
                    ₹{(leaseiqRecovered / 100000).toFixed(2)} Lakhs/yr
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gold/10 border border-gold/20">
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Automated Reminders + 1-Tap UPI:</span> Results in 98%+ collection consistency within 45 days.
                </div>
                <Button size="sm" asChild className="bg-gold text-gold-foreground hover:bg-gold/90 shrink-0">
                  <a href="/book-demo">Request Custom Audit</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2.5: Community Knowledge & Executive Lounge Visual Showcase */}
        <div className="max-w-6xl mx-auto mb-20 rounded-3xl overflow-hidden border border-border/70 bg-card shadow-premium relative">
          <div className="grid lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" /> Society Governance & Digital Literacy
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
                Empowering Modern Management Committees & Residents
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                From organizing seamless hybrid AGMs with audited e-voting to navigating municipal water quota bylaws, our proprietary knowledge base keeps your community compliant, transparent, and ahead of regulatory shifts.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-surface border border-border/60 text-foreground">
                  Maharashtra CHS Act 1960
                </span>
                <span className="px-3 py-1 rounded-full bg-surface border border-border/60 text-foreground">
                  Karnataka Apartment Ownership Act
                </span>
                <span className="px-3 py-1 rounded-full bg-surface border border-border/60 text-foreground">
                  RERA Escrow Guidelines
                </span>
              </div>
            </div>

            {/* Right Photo with Floating Media Card */}
            <div className="lg:col-span-6 relative h-[280px] lg:h-[340px] overflow-hidden group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LIFESTYLE_IMAGES[5].imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider">Lifestyle Architecture</p>
                <h4 className="font-serif text-lg font-semibold">{LIFESTYLE_IMAGES[5].title}</h4>
                <p className="text-xs text-white/70">{LIFESTYLE_IMAGES[5].location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Newsletter & Executive Briefing */}
        <div className="max-w-2xl mx-auto text-center p-10 rounded-3xl bg-surface border border-border/60 shadow-premium">
          <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-2">The Modern Society Dispatch</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Join 4,200+ housing society presidents, treasurers, and property managers receiving our monthly newsletter on GST updates, security best practices, and PropTech innovations.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-success font-medium py-3">
              <CheckCircle2 className="w-5 h-5" /> You're subscribed! Check your inbox for the welcome pack.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="treasurer@yoursociety.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="bg-background border-border/60"
              />
              <Button type="submit" className="bg-gold text-gold-foreground hover:bg-gold/90 shrink-0">
                Subscribe Free
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
