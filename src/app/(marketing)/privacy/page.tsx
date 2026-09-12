import { Metadata } from 'next';
import { ShieldCheck, Lock, Server, Database, CheckCircle2, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AmbientVideoBg } from '@/components/shared/ambient-video-bg';

export const metadata: Metadata = {
  title: 'Privacy Policy | LeaseIQ Societies',
  description: 'Enterprise privacy commitments, data sovereignty, and DPDP Act 2023 compliance for LeaseIQ Societies.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-28 pb-24 relative overflow-hidden">
      {/* Ambient Looping Governance Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="governance" variant="light" overlayOpacity={0.65} showControls={false} />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="container-narrow max-w-4xl mx-auto text-muted-foreground space-y-10 relative">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">Legal & Regulatory Compliance</span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mt-2 mb-4">
            Privacy Policy & Data Sovereignty
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: January 1, 2025 • Compliant with India's Digital Personal Data Protection (DPDP) Act 2023 and Information Technology Act 2000.
          </p>
        </div>

        {/* Visual Data Center & Security Showcase Banner */}
        <div className="rounded-3xl overflow-hidden border border-border/70 bg-card shadow-premium relative">
          <div className="grid sm:grid-cols-12 items-center">
            <div className="sm:col-span-5 relative h-[200px] sm:h-full min-h-[220px] overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <Badge className="bg-gold text-black font-semibold text-[10px] mb-1">
                  Indian Data Residency
                </Badge>
                <p className="text-xs font-semibold">Tier-IV MeitY Empaneled Data Centers</p>
                <p className="text-[10px] text-white/70">Mumbai & Bengaluru Facilities</p>
              </div>
            </div>

            <div className="sm:col-span-7 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                <ShieldCheck className="w-4 h-4" /> Zero Third-Party Advertising Monetization
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                LeaseIQ operates strictly as a <strong>Data Processor</strong> on behalf of your Housing Society / Resident Welfare Association (the <strong>Data Fiduciary</strong>). We do not monetize, rent, or sell resident contact records, financial ledgers, or visitor logs to insurance or loan advertisers.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground font-mono">
                  AES-256 at Rest
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground font-mono">
                  TLS 1.3 in Transit
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground font-mono">
                  180-Day Gate Auto-Purge
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">1. Categories of Information We Process</h2>
          <p className="text-sm leading-relaxed">
            To deliver society operations, accounting, and gate access management, LeaseIQ processes:
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 pl-2">
            <li><strong>Resident Profile Information:</strong> Name, flat/unit number, occupancy status (owner/tenant), phone number, and official email ID registered with the management committee.</li>
            <li><strong>Financial & Maintenance Records:</strong> Maintenance invoices, receipt logs, mode of payment (UPI/NEFT/Cheque reference), penalty ledger, and facility booking fees. No raw credit/debit card numbers or UPI MPINs are stored on our servers; payments are processed via RBI-authorized payment aggregators (PCI-DSS Level 1 compliant).</li>
            <li><strong>Gate & Visitor Logs:</strong> Visitor name, vehicle registration number, purpose of entry, timestamp, entry/exit gate ID, and resident approval status.</li>
            <li><strong>Staff & Vendor Records:</strong> Service contractor names, daily attendance timestamps, Police Verification status documents uploaded by committee, and contract invoices.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">2. Purpose of Processing</h2>
          <p className="text-sm leading-relaxed">
            Personal data is processed exclusively to execute legitimate community management operations, including:
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 pl-2">
            <li>Generating monthly maintenance bills and issuing computerized GST receipts.</li>
            <li>Notifying residents in real time of visitors, domestic help check-ins, and delivery arrivals.</li>
            <li>Enabling committee office-bearers to broadcast emergency alerts, AGM circulars, and poll ballots.</li>
            <li>Providing automated reconciliation and audit trails for registered society treasurers.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">3. Gate Log Retention & Auto-Purging</h2>
          <p className="text-sm leading-relaxed">
            In compliance with privacy standards and community safety guidelines:
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 pl-2">
            <li>Visitor entry/exit timestamps and vehicle logs are automatically purged after <strong>180 days</strong>, unless the management committee flags a record for ongoing security review or law enforcement inquiry.</li>
            <li>Residents may request deletion of guest invitation history directly through their self-service portal upon flat handover.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">4. Data Security & Storage</h2>
          <p className="text-sm leading-relaxed">
            All society and resident data is stored within certified Tier-IV data centers located within the Republic of India (MeitY empaneled cloud infrastructure in Mumbai and Bengaluru). We employ <strong>AES-256 bit encryption at rest</strong> and <strong>TLS 1.3 encryption in transit</strong>. Daily automated backups are cryptographically isolated with zero-knowledge keys.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">5. Resident Rights under DPDP Act 2023</h2>
          <p className="text-sm leading-relaxed">
            Residents possess the right to:
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 pl-2">
            <li><strong>Access & Review:</strong> View personal contact records and historical maintenance ledgers at any time via the Resident Portal.</li>
            <li><strong>Correction & Updation:</strong> Update vehicle numbers, tenant lease updates, or emergency contact persons.</li>
            <li><strong>Grievance Redressal:</strong> Contact the society Data Protection Officer or our Grievance Desk at <a href="mailto:privacy@leaseiq.in" className="text-gold underline">privacy@leaseiq.in</a>.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground">6. Contact Our Grievance Office</h2>
          <p className="text-sm leading-relaxed">
            For privacy queries, data access requests, or regulatory clarifications:
          </p>
          <div className="p-5 rounded-2xl bg-surface border border-border/60 text-xs space-y-1">
            <p className="font-semibold text-foreground">Data Protection & Grievance Officer</p>
            <p>LeaseIQ Technologies India Pvt. Ltd.</p>
            <p>Level 8, Tower B, Prestige Tech Cloud, Outer Ring Road, Bengaluru 560103</p>
            <p>Email: <span className="text-gold">privacy@leaseiq.in</span> • Phone: +91 80 4710 8899</p>
          </div>
        </section>
      </div>
    </div>
  );
}
