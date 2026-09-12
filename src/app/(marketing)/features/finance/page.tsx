import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wallet, FileText, PieChart, Receipt, ArrowRight } from 'lucide-react';
import { FeatureHeroVisual } from '@/components/shared/feature-hero-visual';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';
import { FLOATING_CARDS } from '@/lib/media-config';

export const metadata: Metadata = {
  title: 'Finance & Accounting | LeaseIQ Features',
  description: 'Streamline your society billing, collections, and financial reporting.',
};

export default function FinanceFeature() {
  const subFeatures = [
    { title: "Maintenance Billing", icon: FileText, desc: "Automate recurring invoices with customizable penalty structures." },
    { title: "Payment Tracking", icon: Wallet, desc: "Integrated payment gateways and automatic receipt generation." },
    { title: "Expense Management", icon: Receipt, desc: "Track society expenses, approvals, and vendor payouts." },
    { title: "Financial Reports", icon: PieChart, desc: "Generate balance sheets, income statements, and tax reports instantly." },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      <AmbientVideoBg preset="finance" variant="light" overlayOpacity={0.62} showControls={false} />
      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-sm font-medium text-gold">
            <Wallet className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Transparent, Stress-Free <span className="text-gradient-gold">Finances</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eliminate spreadsheet errors and billing disputes. LeaseIQ provides a robust accounting engine tailored specifically for residential societies.
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
              <Link href="/book-demo">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>

        {/* High-Res Photography & Floating Metric Card */}
        <FeatureHeroVisual
          imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
          badge="Autonomous Society Ledger"
          title="Automated GST & Maintenance Engine"
          subtitle="Real-Time Nodal Statement Matching"
          metrics={[
            { label: "Billed This Month", value: "₹28.5L" },
            { label: "Collected (7d)", value: "98.4%" },
            { label: "Defaulter Dues", value: "₹1.7L" },
          ]}
          floatingCard={FLOATING_CARDS[1]}
          iconName="Wallet"
        />
      </section>
    </div>
  );
}
