import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'LeaseIQ for Accountants & Treasurers | Society Accounting',
  description: 'Streamline society billing, collections, and compliance.',
};

export default function AccountantSolution() {
  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="finance" variant="light" overlayOpacity={0.62} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <Calculator className="mr-2 h-4 w-4" /> Solutions for Treasurers
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            LeaseIQ for <span className="text-gradient-gold">Accountants</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eliminate manual data entry, automate billing cycles, and leverage AI for faster, error-free bank reconciliations and audited ledgers.
          </p>
          
          <div className="pt-2 space-y-3">
            <h3 className="font-serif font-medium text-lg text-foreground">How LeaseIQ helps:</h3>
            <ul className="space-y-3">
              {[
                "Automated recurring billing and penalty calculations.",
                "AI-powered bank reconciliation matching (98.8% accuracy).",
                "Instant ledger generation and CA balance sheets.",
                "Automated payment receipts via integrated UPI gateways.",
                "GST and TDS compliance audit reports."
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

        {/* High-Res Photography & Autonomous Ledger Card */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
          badge="Autonomous Society Accounting"
          title="Treasurer's Finance Hub"
          subtitle="Tally Prime 2-Way Sync & Bank Nodal Feeds"
          metrics={[
            { label: "Collection Ratio", value: "98.4%" },
            { label: "Audit Prep Time", value: "10s (Instant)" },
            { label: "GST Input Verified", value: "100%" },
          ]}
          floatingCard={FLOATING_CARDS[1]}
          iconName="Calculator"
        />
      </section>
    </div>
  );
}
