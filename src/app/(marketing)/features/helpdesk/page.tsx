import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeadphonesIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';

export const metadata: Metadata = {
  title: 'Helpdesk | LeaseIQ Features',
  description: 'Streamline resident complaints and maintenance requests.',
};

export default function HelpdeskFeature() {
  const subFeatures = [
    { title: "Complaint Submission", icon: CheckCircle2, desc: "Residents can easily log issues with photos from the app." },
    { title: "Auto-assignment", icon: CheckCircle2, desc: "Automatically route tickets to the correct maintenance staff." },
    { title: "SLA Monitoring", icon: CheckCircle2, desc: "Track resolution times and ensure service quality." },
    { title: "Resident Feedback", icon: CheckCircle2, desc: "Collect ratings on resolved issues for continuous improvement." },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="operations" variant="light" overlayOpacity={0.62} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <HeadphonesIcon className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Efficient <span className="text-gradient-gold">Issue Resolution</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline resident complaints and maintenance requests with automated ticketing, vendor routing, and SLA tracking.
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

        {/* High-Res Photography & SLA Tracker */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
          badge="97% SLA Met"
          title="Facility Maintenance & Dispatch"
          subtitle="Photo Evidence • Automated Contractor Allocation"
          metrics={[
            { label: "Avg Resolution", value: "2.4 Hours" },
            { label: "Resolved (Oct)", value: "62 of 64" },
            { label: "Resident Rating", value: "4.9 / 5.0" },
          ]}
          iconName="HeadphonesIcon"
        />
      </section>
    </div>
  );
}
