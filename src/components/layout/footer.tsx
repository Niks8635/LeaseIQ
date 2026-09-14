import Link from "next/link";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* ─── Footer Data ─── */

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Society Management", href: "/features/society-management" },
      { label: "Finance & Accounting", href: "/features/finance" },
      { label: "AI Finance Hub", href: "/features/ai-finance" },
      { label: "Security & Visitors", href: "/features/security" },
      { label: "Helpdesk", href: "/features/helpdesk" },
      { label: "Amenities", href: "/features/amenities" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Committees", href: "/solutions/committee" },
      { label: "For Accountants", href: "/solutions/accountant" },
      { label: "For Residents", href: "/solutions/residents" },
      { label: "For Security", href: "/solutions/security" },
      { label: "For Managers", href: "/solutions/managers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Demo", href: "/book-demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];

/* ─── Footer Component ─── */

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,245,212,0.12)] bg-[#020810] relative overflow-hidden">
      {/* Subtle top glow bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00F5D4]/40 to-transparent" />

      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#00F5D4] to-[#3B82F6] p-[1px] shadow-[0_0_12px_rgba(0,245,212,0.25)]">
                <div className="flex h-full w-full items-center justify-center rounded-[6px] bg-[#040D1A]">
                  <span className="font-mono text-[10px] font-bold text-[#00F5D4]">LQ</span>
                </div>
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold tracking-tight text-white">
                  Lease
                </span>
                <span className="text-lg font-bold tracking-tight text-gradient-cyan">
                  IQ
                </span>
              </div>
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-[#7E97B8]">
              The smarter way to run your society. One intelligent platform for
              every community operation.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@leaseiq.in"
                className="flex items-center gap-2 text-xs text-[#7E97B8] transition-colors hover:text-[#00F5D4]"
              >
                <Mail className="h-3.5 w-3.5 text-[#00F5D4]" />
                hello@leaseiq.in
              </a>
              <a
                href="tel:+918047108899"
                className="flex items-center gap-2 text-xs text-[#7E97B8] transition-colors hover:text-[#00F5D4]"
              >
                <Phone className="h-3.5 w-3.5 text-[#00F5D4]" />
                +91 80 4710 8899
              </a>
              <span className="flex items-center gap-2 text-xs text-[#7E97B8]">
                <MapPin className="h-3.5 w-3.5 text-[#00F5D4]" />
                Bengaluru & Mumbai, India
              </span>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(0,245,212,0.18)] bg-[#0A1B30] text-[#7E97B8] transition-all hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 hover:text-[#00F5D4] hover:shadow-[0_0_12px_rgba(0,245,212,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-[#00F5D4]" />
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#7E97B8] transition-colors hover:text-[#00F5D4]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(0,245,212,0.08)] bg-[#01050A]">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-[#7E97B8]/70">
            © {new Date().getFullYear()} LeaseIQ Societies. All rights reserved.
          </p>
          <p className="text-xs text-[#7E97B8]/50">
            Enterprise AI Management for Modern Residential Communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
