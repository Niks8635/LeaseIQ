import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Building,
  Wallet,
  BrainCircuit,
  ShieldCheck,
  HeadphonesIcon,
  Briefcase,
  Dumbbell,
  Users,
  Sparkles,
} from 'lucide-react';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';

export const metadata: Metadata = {
  title: 'Features | LeaseIQ Societies ERP',
  description: 'Explore the comprehensive suite of PropTech modules and automated society workflows offered by LeaseIQ.',
};

const features = [
  {
    title: "Society Management",
    desc: "Multi-tower, multi-wing directory with occupancy mapping and tenant agreements.",
    icon: Building,
    href: "/features/society-management",
    badge: "Structure & KYC",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Finance & Accounting",
    desc: "Automate monthly maintenance billing, late fees, GST output, and bank inflows.",
    icon: Wallet,
    href: "/features/finance",
    badge: "GST Automated",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "AI Finance Hub",
    desc: "Autonomous bank reconciliation, invoice OCR extraction, and duplicate detection.",
    icon: BrainCircuit,
    href: "/features/ai-finance",
    badge: "98.8% Match",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Security & Visitors",
    desc: "Optical ANPR license plate recognition, boom barrier auto-lift, and FastPass QR.",
    icon: ShieldCheck,
    href: "/features/security",
    badge: "Sub-Second Gate",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Complaints & Helpdesk",
    desc: "Photo-evidenced resident ticketing with auto-assignment and strict SLA tracking.",
    icon: HeadphonesIcon,
    href: "/features/helpdesk",
    badge: "97% SLA Met",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Vendor Management",
    desc: "Centralized AMC directory, contract renewal alerts, and vendor invoice audits.",
    icon: Briefcase,
    href: "/features/vendors",
    badge: "Contract Guardian",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Clubhouses & Amenities",
    desc: "Fair slot reservation, rule enforcement, and automated QR turnstile pass generation.",
    icon: Dumbbell,
    href: "/features/amenities",
    badge: "Turnstile QR",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Community & Polls",
    desc: "Multi-channel WhatsApp circulars, quorum-verified digital AGM voting, and SOS alerts.",
    icon: Users,
    href: "/features/community",
    badge: "84%+ Quorum",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      {/* Ambient Looping PropTech Cloud Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="technology" variant="light" overlayOpacity={0.62} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <section className="section-padding container-wide text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete PropTech Suite</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-6">
          Everything your society needs. <br />
          <span className="text-gradient-gold">One intelligent platform.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          Discover a suite of 8 specialized modules designed to bring harmony, financial transparency, and sub-second security to your gated community.
        </p>

        {/* 8 Feature Cards with Photography Headers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <Link key={i} href={feature.href} className="group">
              <Card className="h-full bg-card shadow-sm hover:shadow-premium border-border/80 hover:border-gold/50 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between">
                {/* Photo Thumbnail */}
                <div className="relative h-36 w-full overflow-hidden bg-muted">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-gold border border-gold/30 backdrop-blur-md">
                      {feature.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-foreground shadow">
                    <feature.icon className="w-4 h-4 text-gold" />
                  </div>
                </div>

                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-0">
                  <div className="flex items-center text-xs text-gold font-semibold pt-3 border-t border-border/50 group-hover:gap-2 transition-all">
                    Explore module <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
