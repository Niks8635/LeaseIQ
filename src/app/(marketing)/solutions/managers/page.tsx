import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'LeaseIQ for Estate & Facility Managers | Operations ERP',
  description: 'Streamline daily operations, vendors, and helpdesk.',
};

export default function ManagersSolution() {
  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="operations" variant="light" overlayOpacity={0.62} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <Briefcase className="mr-2 h-4 w-4" /> Solutions for Managers
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            LeaseIQ for <span className="text-gradient-gold">Managers</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay on top of daily facility operations, vendor schedules, staff attendance, and resident complaints with a unified operational dashboard.
          </p>
          
          <div className="pt-2 space-y-3">
            <h3 className="font-serif font-medium text-lg text-foreground">How LeaseIQ helps:</h3>
            <ul className="space-y-3">
              {[
                "Centralized helpdesk with auto-routing to plumbers and electricians.",
                "Vendor AMC contract tracking and 30-day renewal alerts.",
                "Clubhouse and sports facility booking management.",
                "Daily staff biometric attendance and shift assignment.",
                "Society physical asset management and diesel generator logs."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-2.5 rounded-xl bg-surface border border-border/50 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8" asChild>
              <Link href="/book-demo">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* High-Res Photography & Operations Hub Visual */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
          badge="Operational Precision"
          title="Estate Operations Command"
          subtitle="Vendor AMCs • Facility SLA Logs • Daily Attendance"
          metrics={[
            { label: "Active AMCs", value: "8 Contracts" },
            { label: "Staff Present", value: "48 / 50" },
            { label: "Open Tickets", value: "2 (SLA Met)" },
          ]}
          iconName="Briefcase"
        />
      </section>
    </div>
  );
}
