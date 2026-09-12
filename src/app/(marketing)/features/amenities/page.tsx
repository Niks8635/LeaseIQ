import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Dumbbell, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'Amenities | LeaseIQ Features',
  description: 'Smart facility management for your society.',
};

export default function AmenitiesFeature() {
  const subFeatures = [
    { title: "Facility Booking", icon: CheckCircle2, desc: "Residents can reserve amenities instantly via the app." },
    { title: "Availability Management", icon: CheckCircle2, desc: "Real-time calendars prevent double bookings." },
    { title: "Rules & Policies", icon: CheckCircle2, desc: "Enforce usage limits, paid bookings, and cancellation rules." },
    { title: "Capacity Management", icon: CheckCircle2, desc: "Control maximum occupancy for shared facilities." },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="lifestyle" variant="light" overlayOpacity={0.60} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <Dumbbell className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Smart <span className="text-gradient-gold">Facility Management</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fair, transparent, and automated booking systems for clubhouses, pools, and other shared society spaces.
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

        {/* High-Res Photography & Floating QR Card */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
          badge="Turnstile Access Validated"
          title="Clubhouse & Pool Turnstile Hub"
          subtitle="Smart QR Barcode Integration • Court & Pool Passes"
          metrics={[
            { label: "Active Bookings", value: "48 Slots" },
            { label: "Capacity Limit", value: "80 Guests" },
            { label: "Utilization", value: "92%" },
          ]}
          floatingCard={FLOATING_CARDS[3]}
          iconName="Dumbbell"
        />
      </section>
    </div>
  );
}
