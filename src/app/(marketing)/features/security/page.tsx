import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'Security & Visitors | LeaseIQ Features',
  description: 'A modern, digital gatekeeping solution for your society.',
};

export default function SecurityFeature() {
  const subFeatures = [
    { title: "Visitor Registration", icon: CheckCircle2, desc: "Digital passes and instant resident approvals." },
    { title: "Pre-approved Visitors", icon: CheckCircle2, desc: "Share entry codes with guests for seamless access." },
    { title: "Delivery Management", icon: CheckCircle2, desc: "Track packages and manage delivery personnel entry." },
    { title: "Guard Management", icon: CheckCircle2, desc: "Shift scheduling, patrols, and digital incident reporting." },
  ];

  return (
    <div className="min-h-screen bg-[#040D1A] pt-24 pb-20 relative overflow-hidden text-white">
      <AmbientVideoBg preset="security" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-[rgba(0,245,212,0.3)] bg-[#00F5D4]/10 px-3 py-1 text-sm font-medium text-[#00F5D4]">
            <ShieldCheck className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            Uncompromising <span className="text-gradient-cyan">Security</span>
          </h1>
          <p className="text-lg text-[#7E97B8] leading-relaxed">
            A modern, digital gatekeeping solution that ensures safety without compromising on convenience for residents.
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

        {/* High-Res Photography & Floating ANPR Card */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80"
          badge="Sub-Second Gate ANPR"
          title="Automated Boom Barrier & FastPass"
          subtitle="Gate 01 • Optical License Plate Scanner"
          metrics={[
            { label: "Clearance Speed", value: "0.8s" },
            { label: "Plate Accuracy", value: "99.4%" },
            { label: "Passes Today", value: "1,420" },
          ]}
          floatingCard={FLOATING_CARDS[0]}
          iconName="ShieldCheck"
        />
      </section>
    </div>
  );
}
