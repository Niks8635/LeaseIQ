import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'LeaseIQ for Committee Members | Society Governance',
  description: 'Empower your society committee with data-driven governance tools.',
};

export default function CommitteeSolution() {
  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="governance" variant="light" overlayOpacity={0.62} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <Users className="mr-2 h-4 w-4" /> Solutions for Committees
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            LeaseIQ for <span className="text-gradient-gold">Committees</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gain complete oversight of society operations, make data-backed decisions, and ensure statutory compliance without daily operational stress.
          </p>
          
          <div className="pt-2 space-y-3">
            <h3 className="font-serif font-medium text-lg text-foreground">Key Committee Capabilities:</h3>
            <ul className="space-y-3">
              {[
                "Real-time financial dashboards and fund status.",
                "Automated compliance tracking and audit trails.",
                "Digital approvals for expenses and contracts.",
                "Centralized communication with all residents.",
                "Transparent resolution of resident complaints."
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
              <Link href="/book-demo">Book a Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* High-Res Photography & Executive Governance Card */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
          badge="Executive Governance Vault"
          title="Management Committee Command"
          subtitle="Real-Time Society Health Index & Financial Auditing"
          metrics={[
            { label: "Society Health", value: "94 / 100" },
            { label: "AGM Quorum", value: "84%" },
            { label: "Audit Readiness", value: "100%" },
          ]}
          floatingCard={FLOATING_CARDS[4]}
          iconName="Users"
        />
      </section>
    </div>
  );
}
