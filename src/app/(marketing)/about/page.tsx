import { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Building,
  Users,
  Shield,
  Zap,
  CheckCircle2,
  Lock,
  FileSpreadsheet,
  MessageCircle,
  FileText,
  Landmark,
  EyeOff,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { LIFESTYLE_IMAGES } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'About LeaseIQ | Redefining Residential Community ERP',
  description: 'Learn about the mission, architecture, and engineering principles behind LeaseIQ Societies—the luxury PropTech platform for modern Indian residential communities.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#040D1A] pt-24 pb-20 relative overflow-hidden text-white">
      {/* Ambient Looping Architectural Drone Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="architecture" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="section-padding container-wide relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.3)] text-[#00F5D4] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering the Operating System for Communities</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
              The Vision Behind <span className="text-gradient-cyan">LeaseIQ</span>
            </h1>
            <p className="text-lg md:text-xl text-[#7E97B8] font-light max-w-2xl mx-auto leading-relaxed">
              We believe residential communities, RWAs, and housing societies are the foundation of modern urban living. They deserve enterprise-grade software, AI-powered automation, and uncompromised privacy.
            </p>
          </div>

          {/* Architectural Image Collage Strip */}
          <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              {
                title: "Prestige Tech Cloud, Outer Ring Road",
                location: "Bengaluru, Karnataka (HQ)",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
                badge: "Engineering HQ",
              },
              {
                title: "One BKC, Bandra Kurla Complex",
                location: "Mumbai, Maharashtra",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
                badge: "West Operations",
              },
              {
                title: "Worldmark 2, Aerocity",
                location: "New Delhi, NCR",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
                badge: "North Hub",
              },
            ].map((loc, i) => (
              <div key={i} className="relative h-60 rounded-3xl overflow-hidden border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] shadow-xl group card-glow backdrop-blur-xl transition-all duration-300">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${loc.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-[#00F5D4] text-[#040D1A] border-none font-bold text-[10px]">
                    {loc.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono text-[#00F5D4] flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {loc.location}
                  </p>
                  <p className="text-sm font-semibold text-white mt-0.5">{loc.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem Section: Balanced 6-Point Matrix */}
        <section className="section-padding relative">
          <div className="container-wide">
            <SectionHeading
              label="THE CHALLENGE"
              title="Why Traditional Society Management"
              titleAccent="Breaks Down"
              description="Most residential complexes in India juggle fragmented legacy tools, paper logs, and manual spreadsheets that create operational blindspots and audit vulnerabilities."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
              {[
                { 
                  title: "Error-Prone Spreadsheets", 
                  icon: FileSpreadsheet, 
                  desc: "Manual bookkeeping formulas break, causing reconciliation errors, duplicate billing, and disputes during AGM committee audits." 
                },
                { 
                  title: "WhatsApp & Chat Chaos", 
                  icon: MessageCircle, 
                  desc: "Crucial emergency notices, maintenance complaints, and financial deliberations get lost in the noise of unorganized chat groups." 
                },
                { 
                  title: "Insecure Paper Gate Registers", 
                  icon: FileText, 
                  desc: "Handwritten visitor logs compromise resident privacy, offer zero vehicle tracking, and fail during security audits or incident investigations." 
                },
                { 
                  title: "Manual Reconciliation & Defaulters", 
                  icon: Landmark, 
                  desc: "Treasurers spend 40+ hours per month matching bank statements against NEFT, RTGS, and cheque receipts, leading to delayed collections." 
                },
                { 
                  title: "Vendor Billing Blindspots", 
                  icon: EyeOff, 
                  desc: "Societies pay millions annually to security, housekeeping, and lift AMC vendors without digital SLA tracking, invoice verification, or AMC renewal alerts." 
                },
                { 
                  title: "Disconnected Island Systems", 
                  icon: Lock, 
                  desc: "Accounting is isolated from the gate, gate is isolated from resident directories, leaving committee members with zero unified visibility." 
                }
              ].map((item, i) => (
                <Card key={i} className="bg-[#0A1B30]/80 shadow-2xl border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] transition-all duration-300 p-2 rounded-3xl card-accent-line card-glow backdrop-blur-xl">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.2)] flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-[#00F5D4]" />
                    </div>
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                    <CardDescription className="text-[#7E97B8] text-xs leading-relaxed mt-2">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding container-wide">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="p-8 md:p-10 rounded-3xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.35)] transition-all duration-300 shadow-2xl space-y-4 card-accent-line card-glow backdrop-blur-xl">
              <span className="text-xs font-semibold text-[#00F5D4] uppercase tracking-wider">Our Vision</span>
              <h2 className="font-serif text-3xl font-semibold text-white">The Operating System for Communities</h2>
              <p className="text-sm text-[#7E97B8] leading-relaxed">
                To power every residential community across India with an intelligent, reliable digital infrastructure that elevates community trust, protects property value, and simplifies everyday life.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-3xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.35)] transition-all duration-300 shadow-2xl space-y-4 card-accent-line card-glow backdrop-blur-xl">
              <span className="text-xs font-semibold text-[#00F5D4] uppercase tracking-wider">Our Mission</span>
              <h2 className="font-serif text-3xl font-semibold text-white">Zero Friction. 100% Transparency.</h2>
              <p className="text-sm text-[#7E97B8] leading-relaxed">
                To automate society finance, simplify gate access control, empower committee decision-making with AI analytics, and deliver a luxury digital experience to residents and staff alike.
              </p>
            </div>
          </div>
        </section>

        {/* Security & Regulatory Compliance */}
        <section className="section-padding relative">
          <div className="container-wide">
            <SectionHeading
              label="SECURITY & COMPLIANCE"
              title="Enterprise-Grade Privacy"
              titleAccent="Built-In"
              description="Resident personal information and society financial ledgers are protected by banking-grade security controls."
              align="center"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
              {[
                { title: "DPDP Act 2023 Ready", desc: "Full compliance with India's Digital Personal Data Protection Act, granting residents full data sovereignty." },
                { title: "256-Bit AES Encryption", desc: "All sensitive data encrypted at rest and in transit via TLS 1.3 with automated zero-knowledge backups." },
                { title: "Role-Based Access Control", desc: "Strict RBAC segregation preventing guards or vendors from accessing financial or personal records." },
                { title: "VAPT Audited & Certified", desc: "Annual third-party vulnerability and penetration testing to ensure resilient cloud infrastructure." },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] flex flex-col justify-between shadow-xl transition-all duration-300 card-accent-line card-glow backdrop-blur-xl">
                  <div className="w-10 h-10 rounded-full bg-[#00F5D4]/10 text-[#00F5D4] border border-[rgba(0,245,212,0.2)] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                    <p className="text-xs text-[#7E97B8] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Philosophy: 4 Pillars with Photography */}
        <section className="section-padding container-wide">
          <SectionHeading
            label="CORE ARCHITECTURE"
            title="The Four Pillars of LeaseIQ"
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
            {[
              { title: "AI Intelligence", icon: Zap, desc: "Automatic bank transaction matching, invoice duplicate detection, and cashflow forecasting.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" },
              { title: "Auditable Finance", icon: Landmark, desc: "Double-entry accounting, automated maintenance billing, GST compliance, and seamless Tally sync.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
              { title: "Connected Community", icon: Users, desc: "High-speed amenity booking, digital notices, committee polls, and transparent helpdesk.", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80" },
              { title: "Smart Perimeter Guard", icon: Shield, desc: "Digital visitor authorization, ANPR vehicle cameras, boom barrier automation, and delivery passes.", img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80" }
            ].map((item, i) => (
              <Card key={i} className="bg-[#0A1B30]/80 shadow-2xl border border-[rgba(0,245,212,0.14)] overflow-hidden rounded-3xl hover:border-[rgba(0,245,212,0.4)] transition-all duration-300 flex flex-col justify-between card-accent-line card-glow backdrop-blur-xl">
                <div className="relative h-32 w-full overflow-hidden bg-[#061220]">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 z-10 w-8 h-8 rounded-lg bg-[#00F5D4] text-[#040D1A] flex items-center justify-center font-bold shadow-[0_0_10px_rgba(0,245,212,0.3)]">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>
                <CardHeader className="p-5">
                  <CardTitle className="font-serif text-lg text-white">{item.title}</CardTitle>
                  <CardDescription className="text-xs text-[#7E97B8] leading-relaxed mt-2">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding text-center">
          <div className="container-narrow space-y-8 bg-[#0A1B30]/80 p-12 md:p-16 rounded-3xl shadow-2xl border border-[rgba(0,245,212,0.14)] max-w-4xl mx-auto card-accent-line card-glow backdrop-blur-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white">Transform Your Society Today</h2>
            <p className="text-base text-[#7E97B8] max-w-xl mx-auto leading-relaxed">
              Experience the smarter way to manage your residential community. Book a tailored walk-through with our PropTech engineering consultants.
            </p>
            <div className="pt-2">
              <Button size="lg" asChild className="bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] px-8 h-12 rounded-full">
                <Link href="/book-demo">
                  Schedule 1-on-1 Presentation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
