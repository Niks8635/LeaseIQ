import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'LeaseIQ for Security Personnel & Gate Guards | Smart Gate ERP',
  description: 'Digital gatekeeping tools for society security.',
};

export default function SecuritySolution() {
  return (
    <div className="min-h-screen bg-[#040D1A] pt-24 pb-20 relative overflow-hidden text-white">
      <AmbientVideoBg preset="security" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-[rgba(0,245,212,0.3)] bg-[#00F5D4]/10 px-3 py-1 text-sm font-medium text-[#00F5D4]">
            <Shield className="mr-2 h-4 w-4" /> Solutions for Security Teams
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            LeaseIQ for <span className="text-gradient-cyan">Security</span>
          </h1>
          <p className="text-lg text-[#7E97B8] leading-relaxed">
            Equip your guards with an intuitive touch tablet mode to verify visitors in under 0.8 seconds, track delivery vehicles, and maintain perimeter control.
          </p>
          
          <div className="pt-2 space-y-3">
            <h3 className="font-serif font-medium text-lg text-white">How LeaseIQ helps:</h3>
            <ul className="space-y-3">
              {[
                "Digital tablet log replacing messy paper registers.",
                "Sub-0.8s ANPR camera license plate verification.",
                "Pre-approved entry QR scanning for food & parcel couriers.",
                "Staff and domestic maid biometric attendance tracking.",
                "One-tap perimeter lockdown and emergency SOS alerts."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] transition-all duration-300 card-accent-line card-glow backdrop-blur-xl shadow-xl text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button size="lg" className="bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] rounded-full px-8" asChild>
              <Link href="/book-demo">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* High-Res Photography & Guard Terminal Visual */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80"
          badge="Front-Gate Kiosk Active"
          title="Guard Tablet Operating System"
          subtitle="Gate #01 Kiosk • Multilingual Touch Interface"
          metrics={[
            { label: "Clearance Speed", value: "0.8s" },
            { label: "Active Guards", value: "12 Biometric" },
            { label: "SOS Response", value: "< 15s" },
          ]}
          floatingCard={FLOATING_CARDS[0]}
          iconName="Shield"
        />
      </section>
    </div>
  );
}
