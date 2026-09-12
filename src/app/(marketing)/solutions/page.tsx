import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Calculator, Home, Shield, Briefcase, Sparkles } from 'lucide-react';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';

export const metadata: Metadata = {
  title: 'Solutions | LeaseIQ Societies',
  description: 'Tailored solutions for every stakeholder in your residential society.',
};

const solutions = [
  {
    role: "Management Committee",
    icon: Users,
    desc: "Executive governance, real-time balance sheet oversight, and audit-ready records.",
    href: "/solutions/committee",
    badge: "Governance",
    metric: "100% Audit Ready",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    role: "Treasurers & Accountants",
    icon: Calculator,
    desc: "Autonomous bank statement reconciliation, Tally Prime sync, and GST billing.",
    href: "/solutions/accountant",
    badge: "Finance Hub",
    metric: "98.8% Auto-Match",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
  },
  {
    role: "Residents & Families",
    icon: Home,
    desc: "1-Tap UPI maintenance, WhatsApp FastPass QR passes, and amenity bookings.",
    href: "/solutions/residents",
    badge: "SuperApp",
    metric: "4.9 ★ Rating",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    role: "Security & Guard Teams",
    icon: Shield,
    desc: "Touch-optimized guard tablet mode, sub-0.8s ANPR recognition, and emergency SOS.",
    href: "/solutions/security",
    badge: "Perimeter",
    metric: "0.8s Clearance",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80",
  },
  {
    role: "Estate & Facility Managers",
    icon: Briefcase,
    desc: "Daily vendor work orders, biometric staff logs, and SLA ticket escalation.",
    href: "/solutions/managers",
    badge: "Operations",
    metric: "97% SLA Met",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      {/* Ambient Looping Resident Living Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="community" variant="light" overlayOpacity={0.62} showControls={false} />

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <section className="section-padding container-wide text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Experiences</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-6">
          Solutions for <span className="text-gradient-gold">every stakeholder.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          LeaseIQ provides specialized interfaces tailored to the distinct needs of committee members, accountants, guards, managers, and residents.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {solutions.map((sol, i) => (
            <Link key={i} href={sol.href} className="group">
              <Card className="h-full bg-card shadow-sm hover:shadow-premium border-border/80 hover:border-gold/50 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col justify-between">
                {/* Photo Thumbnail */}
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${sol.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-gold border border-gold/30 backdrop-blur-md">
                      {sol.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                      {sol.metric}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 z-10 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-foreground shadow">
                    <sol.icon className="w-4 h-4 text-gold" />
                  </div>
                </div>

                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-xl font-medium text-foreground group-hover:text-gold transition-colors">
                    For {sol.role}
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {sol.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-0">
                  <div className="flex items-center text-xs text-gold font-semibold pt-3 border-t border-border/50 group-hover:gap-2 transition-all">
                    Explore role solution <ArrowRight className="w-3.5 h-3.5 ml-1" />
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
