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
    <div className="min-h-screen bg-[#040D1A] pt-24 pb-20 relative overflow-hidden text-white">
      <AmbientVideoBg preset="finance" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <section className="section-padding container-wide grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-[rgba(0,245,212,0.3)] bg-[#00F5D4]/10 px-3 py-1 text-sm font-medium text-[#00F5D4]">
            <Wallet className="mr-2 h-4 w-4" /> Core Feature
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white">
            Transparent, Stress-Free <span className="text-gradient-cyan">Finances</span>
          </h1>
          <p className="text-lg text-[#7E97B8] leading-relaxed">
            Eliminate spreadsheet errors and billing disputes. LeaseIQ provides a robust accounting engine tailored specifically for residential societies.
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
