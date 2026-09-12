import { Metadata } from 'next';
import { ShieldCheck, Clock, FileCheck, Scale } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';

export const metadata: Metadata = {
  title: 'Terms of Service | LeaseIQ Societies',
  description: 'Enterprise master subscription terms, SLA commitments, and society user obligations for LeaseIQ Societies.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24 relative overflow-hidden">
      {/* Ambient Looping Governance Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="governance" variant="light" overlayOpacity={0.65} showControls={false} />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="container-narrow max-w-4xl mx-auto text-muted-foreground space-y-10 relative">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">Master Subscription Agreement</span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
            Terms of Service & SLA Commitment
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: January 1, 2025 • Governing the deployment and operation of LeaseIQ Societies SaaS for Housing Societies, RWAs, Apartment Owners Associations (AOAs), and registered residents.
          </p>
        </div>

        {/* Visual Enterprise Governance Banner */}
        <div className="rounded-3xl overflow-hidden border border-border/70 bg-card shadow-premium relative">
          <div className="grid sm:grid-cols-12 items-center">
            <div className="sm:col-span-5 relative h-[200px] sm:h-full min-h-[200px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <Badge className="bg-gold text-black font-semibold text-[10px] mb-1">
                  Master Agreement
                </Badge>
                <p className="text-xs font-semibold">99.9% Uptime Commitment</p>
                <p className="text-[10px] text-white/70">Cooperative Societies & RWAs</p>
              </div>
            </div>

            <div className="sm:col-span-7 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                <Scale className="w-4 h-4" /> Transparent Enterprise Terms
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Designed specifically for Indian cooperative housing societies and apartment associations. Transparent governance rights, zero vendor lock-in, and guaranteed data export portability.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground font-mono">
                  99.9% Gate Availability
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground font-mono">
                  Full Data Export Rights
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground font-mono">
                  Bengaluru Legal Seat
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">1. Engagement & Contracting Entity</h2>
          <p className="text-sm leading-relaxed">
            These Terms of Service constitute a legally binding agreement between <strong>LeaseIQ Technologies India Private Limited</strong> ("LeaseIQ", "we", "our") and the subscribing entity, which may be a registered Cooperative Housing Society (CHS), Resident Welfare Association (RWA), Apartment Owners Association (AOA), or commercial property management federation ("Customer", "Society").
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">2. Society Account & Administrative Authority</h2>
          <p className="text-sm leading-relaxed">
            The Management Committee members, Office Bearers (President, Secretary, Treasurer), or designated Facility Managers represent that they possess valid authority pursuant to the registered Society Bye-Laws or resolution passed at a general body meeting (AGM/EGM) to bind the Society to this Agreement.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 pl-2">
            <li><strong>Credential Confidentiality:</strong> Committee administrators are responsible for managing role assignments and terminating access upon committee rotation or tenure completion.</li>
            <li><strong>Audit Logging:</strong> All administrative actions (e.g. invoice creation, waiver of late fees, gate guard shift overrides) are permanently recorded in the immutable LeaseIQ Audit Vault.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">3. Service Level Agreement (SLA) & Uptime</h2>
          <p className="text-sm leading-relaxed">
            LeaseIQ guarantees an <strong>availability commitment of 99.9% uptime</strong> across billing calculation engines, resident mobile APIs, and gate pass validation microservices during each calendar month, excluding scheduled maintenance windows announced with at least 48 hours prior notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">4. Payment Gateway & Financial Disclaimers</h2>
          <p className="text-sm leading-relaxed">
            LeaseIQ provides technical integration with RBI-authorized payment aggregators (such as Razorpay, Cashfree, and PayU) for facilitating UPI, Net Banking, and Debit/Credit Card collections from residents directly into the Society's registered nodal bank account.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 pl-2">
            <li>LeaseIQ does not hold, pool, or custody society funds at any point in the settlement pipeline.</li>
            <li>Chargebacks, refund requests, and erroneous double-transfers are subject to the banking rules of the resident's issuing bank and the Society's settlement account.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">5. Data Ownership & Intellectual Property</h2>
          <p className="text-sm leading-relaxed">
            The Society retains complete and exclusive ownership of all resident records, financial ledgers, audit registers, and visitor entries uploaded to or generated within the platform ("Customer Data"). Upon written request or contract expiration, LeaseIQ provides automated full-data exports in standard format (JSON/CSV/PDF) and safely purges society data within 60 days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
          <p className="text-sm leading-relaxed">
            To the maximum extent permitted by Indian Law, neither party shall be liable for indirect, punitive, or consequential damages. LeaseIQ's aggregate liability arising out of or related to this Agreement shall not exceed the total fees paid by the Customer in the preceding twelve (12) months.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">7. Governing Law & Dispute Resolution</h2>
          <p className="text-sm leading-relaxed">
            This Agreement is governed by the laws of India. Any disputes arising out of this Agreement shall be referred to arbitration in Bengaluru, Karnataka, conducted in English under the Arbitration and Conciliation Act, 1996. The courts of Bengaluru shall have exclusive jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
}
