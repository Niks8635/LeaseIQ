import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building, Home, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'Society Management | LeaseIQ Features',
  description: 'Manage buildings, wings, floors, units, and residents effortlessly.',
};

export default function SocietyManagementFeature() {
  const subFeatures = [
    { title: "Buildings & Wings", icon: Building, desc: "Structure your complex with multi-tower, multi-wing configurations." },
    { title: "Floors & Units", icon: Home, desc: "Detailed unit management with ownership and occupancy status." },
    { title: "Resident Management", icon: Users, desc: "Maintain accurate records of owners, tenants, and family members." },
    { title: "Committee & Office Bearers", icon: CheckCircle2, desc: "Manage roles, permissions, and term limits for committee members." },
  ];

  return (
    <div className="min-h-screen bg-[#040D1A] pt-24 pb-20 relative overflow-hidden text-white">
      <AmbientVideoBg preset="architecture" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-[rgba(0,245,212,0.3)] bg-[#00F5D4]/10 px-3 py-1 text-sm font-medium text-[#00F5D4]">
            <Building className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            Digital Foundation for Your <span className="text-gradient-cyan">Society</span>
          </h1>
          <p className="text-lg text-[#7E97B8] leading-relaxed">
            Configure your society structure down to the last detail. Manage buildings, wings, units, and resident data in one central, secure repository.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            {subFeatures.map((f, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] transition-all duration-300 card-accent-line card-glow backdrop-blur-xl shadow-xl">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00F5D4]/10 flex items-center justify-center border border-[rgba(0,245,212,0.2)]">
                  <f.icon className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <div>
                  <h3 className="font-medium text-white text-sm">{f.title}</h3>
                  <p className="text-xs text-[#7E97B8] mt-1 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button size="lg" className="bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] rounded-full px-8" asChild>
              <Link href="/book-demo">Book a Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* High-Res Photography & Floating Metric Card */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
          badge="450 Units Configured"
          title="Tower & Wing Occupancy Radar"
          subtitle="Green Valley Residency • Towers A, B, C, D"
          metrics={[
            { label: "Occupancy Rate", value: "98.4%" },
            { label: "Owner-Occupied", value: "72%" },
            { label: "Tenants Active", value: "28%" },
          ]}
          floatingCard={FLOATING_CARDS[5]}
          iconName="Building"
        />
      </section>
    </div>
  );
}
