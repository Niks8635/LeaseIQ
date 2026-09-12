import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';

export const metadata: Metadata = {
  title: 'Vendor Management | LeaseIQ Features',
  description: 'Manage your society\'s service providers, contracts, and payments.',
};

export default function VendorsFeature() {
  const subFeatures = [
    { title: "Vendor Onboarding", icon: CheckCircle2, desc: "Maintain a centralized directory of verified service providers." },
    { title: "Contract Management", icon: CheckCircle2, desc: "Track AMCs, expiry dates, and renewal alerts." },
    { title: "Invoice Processing", icon: CheckCircle2, desc: "Digital approval workflows for vendor bills." },
    { title: "Performance Monitoring", icon: CheckCircle2, desc: "Rate and review vendors based on service quality." },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="operations" variant="light" overlayOpacity={0.62} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <Briefcase className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Streamlined <span className="text-gradient-gold">Vendor Operations</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Manage your society's service providers, contracts, and payments from a single, organized dashboard with automated AMC audits.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            {subFeatures.map((f, i) => (
              <div key={i} className="flex gap-4 p-3.5 rounded-2xl bg-surface border border-border/60">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center border border-border">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8" asChild>
              <Link href="/book-demo">Book a Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* High-Res Photography & AMC Metrics */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
          badge="100% Contracts Audited"
          title="Vendor Contract & AMC Guardian"
          subtitle="Security, Lift & Housekeeping Service Agreements"
          metrics={[
            { label: "Active Contracts", value: "8 AMCs" },
            { label: "Audit Leakage Saved", value: "₹4.2L" },
            { label: "SLA Adherence", value: "98.2%" },
          ]}
          iconName="Briefcase"
        />
      </section>
    </div>
  );
}
