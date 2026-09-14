"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Building2,
  Shield,
  Users,
  Calculator,
  UserCog,
  Landmark,
  Brain,
  Headset,
  Wrench,
  TreePalm,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* ─── Navigation Data ─── */

const solutions = [
  {
    title: "Committee Members",
    description: "Governance, approvals & society oversight",
    href: "/solutions/committee",
    icon: Users,
  },
  {
    title: "Accountants & Treasurers",
    description: "Finance, billing & reconciliation",
    href: "/solutions/accountant",
    icon: Calculator,
  },
  {
    title: "Residents",
    description: "Payments, visitors & community",
    href: "/solutions/residents",
    icon: Building2,
  },
  {
    title: "Security Teams",
    description: "Visitor management & gate control",
    href: "/solutions/security",
    icon: Shield,
  },
  {
    title: "Society Managers",
    description: "End-to-end operations management",
    href: "/solutions/managers",
    icon: UserCog,
  },
];

const features = [
  {
    title: "Society Management",
    description: "Buildings, units, residents & committees",
    href: "/features/society-management",
    icon: Building2,
  },
  {
    title: "Finance & Accounting",
    description: "Billing, payments & reconciliation",
    href: "/features/finance",
    icon: Landmark,
  },
  {
    title: "AI Finance Hub",
    description: "Intelligent financial automation",
    href: "/features/ai-finance",
    icon: Brain,
  },
  {
    title: "Security & Visitors",
    description: "Gate management & visitor tracking",
    href: "/features/security",
    icon: Shield,
  },
  {
    title: "Helpdesk",
    description: "Complaints & maintenance tracking",
    href: "/features/helpdesk",
    icon: Headset,
  },
  {
    title: "Vendor Management",
    description: "Contracts, invoices & performance",
    href: "/features/vendors",
    icon: Wrench,
  },
  {
    title: "Amenities & Facilities",
    description: "Booking & facility management",
    href: "/features/amenities",
    icon: TreePalm,
  },
  {
    title: "Community",
    description: "Notices, events, polls & documents",
    href: "/features/community",
    icon: MessageSquare,
  },
];

const mainNav = [
  { title: "Platform", href: "/features" },
  { title: "AI", href: "/features/ai-finance" },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
];

/* ─── Wordmark Logo ─── */

function LeaseIQLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00F5D4] to-[#3B82F6] p-[1px] shadow-[0_0_15px_rgba(0,245,212,0.25)]">
        <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#040D1A]">
          <span className="font-mono text-xs font-bold text-[#00F5D4]">LQ</span>
        </div>
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="text-xl font-bold tracking-tight text-white transition-colors">
          Lease
        </span>
        <span className="text-xl font-bold tracking-tight text-gradient-cyan transition-colors">
          IQ
        </span>
      </div>
      <span className="ml-1 rounded-full border border-[rgba(0,245,212,0.3)] bg-[rgba(0,245,212,0.08)] px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-[#00F5D4] hidden sm:inline-flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-[#00F5D4] animate-pulse" />
        AI
      </span>
    </Link>
  );
}

/* ─── Dropdown Menu ─── */

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

function NavDropdown({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors rounded-lg",
          "text-[#7E97B8] hover:text-white hover:bg-[rgba(0,245,212,0.05)]",
          isOpen && "text-[#00F5D4] bg-[rgba(0,245,212,0.08)]"
        )}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen ? "rotate-180 text-[#00F5D4]" : "text-[#7E97B8]"
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[440px] -translate-x-1/2"
          >
            <div className="rounded-2xl border border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/95 p-2.5 shadow-2xl shadow-black/80 backdrop-blur-2xl">
              <div className="grid gap-1">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-[rgba(0,245,212,0.06)]"
                    onClick={onToggle}
                  >
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,245,212,0.15)] bg-[#0D223E] transition-all group-hover:border-[#00F5D4] group-hover:bg-[#00F5D4]/10 group-hover:shadow-[0_0_12px_rgba(0,245,212,0.25)]">
                      <item.icon className="h-4 w-4 text-[#7E97B8] transition-colors group-hover:text-[#00F5D4]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00F5D4] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-[#7E97B8] mt-0.5 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* ─── Main Navbar ─── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [openDropdown]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-[rgba(0,245,212,0.12)] bg-[#040D1A]/85 backdrop-blur-2xl shadow-xl shadow-black/40"
            : "bg-transparent"
        )}
      >
        <nav className="container-wide flex h-16 items-center justify-between lg:h-[72px]">
          {/* Logo */}
          <LeaseIQLogo />

          {/* Desktop Nav */}
          <div
            className="hidden items-center gap-1 lg:flex"
            onClick={(e) => e.stopPropagation()}
          >
            <NavDropdown
              label="Solutions"
              items={solutions}
              isOpen={openDropdown === "solutions"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "solutions" ? null : "solutions"
                )
              }
            />
            <div className="mx-1" />
            <NavDropdown
              label="Features"
              items={features}
              isOpen={openDropdown === "features"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "features" ? null : "features"
                )
              }
            />
            <div className="mx-1" />
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium transition-colors rounded-lg",
                  pathname === item.href
                    ? "text-[#00F5D4] bg-[rgba(0,245,212,0.08)] font-semibold"
                    : "text-[#7E97B8] hover:text-white hover:bg-[rgba(0,245,212,0.05)]"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-[#E2EBF7] hover:text-[#00F5D4] hover:bg-[rgba(0,245,212,0.08)]"
            >
              <Link href="/login">Log in</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="btn-cyan rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider"
            >
              <Link href="/book-demo" className="flex items-center gap-1.5">
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(0,245,212,0.2)] bg-[#0A1B30] text-white hover:text-[#00F5D4]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[rgba(0,245,212,0.15)] bg-[#040D1A]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-wide max-h-[calc(100vh-4rem)] overflow-y-auto py-6">
              {/* Solutions */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00F5D4]">
                  Solutions
                </p>
                <div className="grid gap-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#E2EBF7] transition-colors hover:bg-[rgba(0,245,212,0.08)] hover:text-[#00F5D4]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-[#00F5D4]" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00F5D4]">
                  Features
                </p>
                <div className="grid gap-1">
                  {features.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#E2EBF7] transition-colors hover:bg-[rgba(0,245,212,0.08)] hover:text-[#00F5D4]"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-[#00F5D4]" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Links */}
              <div className="mb-6 border-t border-[rgba(0,245,212,0.12)] pt-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#E2EBF7] transition-colors hover:bg-[rgba(0,245,212,0.08)] hover:text-[#00F5D4]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-2.5">
                <Button variant="outline" asChild className="w-full btn-ghost-cyan">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild className="w-full btn-cyan font-bold">
                  <Link href="/book-demo" className="flex items-center justify-center gap-1.5">
                    Book a Demo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
