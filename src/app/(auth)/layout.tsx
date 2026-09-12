import Link from 'next/link';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Luxury PropTech Architectural Visual Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 text-primary-foreground relative overflow-hidden bg-primary">
        {/* Architectural Photography Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80)` }}
        />
        {/* Dark Luxury Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/80" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-0.5">
            <span className="text-2xl font-bold tracking-tight text-white">Lease</span>
            <span className="text-2xl font-bold tracking-tight text-gold">IQ</span>
            <span className="ml-2 text-[0.7rem] font-medium uppercase tracking-[0.25em] text-white/70">Societies</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" /> SOC-2 & DPDP Compliant
          </span>
        </div>

        {/* Center: Hero Statement & Floating Media Card */}
        <div className="relative z-10 my-auto py-12 max-w-lg space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-3 block">
              The Smarter Way to Run Your Society
            </span>
            <h1 className="font-serif text-4xl xl:text-5xl font-bold tracking-tight text-white leading-tight">
              One Intelligent Platform. <span className="text-gradient-gold">Every Society Operation.</span>
            </h1>
            <p className="mt-4 text-base text-white/80 leading-relaxed">
              Autonomous bank reconciliation, sub-second gate ANPR, and delightful resident living for over 500+ premier residential communities.
            </p>
          </div>

          {/* Clean Metric Callout */}
          <div className="pt-2">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/70">Trusted Community Scale</p>
                <p className="text-xl font-serif font-bold text-white mt-0.5">500+ Residential Societies</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold border border-gold/30">
                99.9% Uptime
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/60 pt-6 border-t border-white/15">
          <p>© {new Date().getFullYear()} LeaseIQ Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Help</Link>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 lg:w-1/2 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 lg:hidden">
            <Link href="/" className="flex items-baseline gap-0.5">
              <span className="text-xl font-bold tracking-tight text-foreground">Lease</span>
              <span className="text-xl font-bold tracking-tight text-gold">IQ</span>
              <span className="ml-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">Societies</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
