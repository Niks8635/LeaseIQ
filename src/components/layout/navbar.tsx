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
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
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
    <Link href="/" className={cn("flex items-baseline gap-0.5 group", className)}>
      <span className="text-xl font-bold tracking-tight text-foreground transition-colors">
        Lease
      </span>
      <span className="text-xl font-bold tracking-tight text-gold transition-colors">
        IQ
      </span>
      <span className="ml-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
        Societies
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
          "flex items-center gap-1 text-sm font-medium transition-colors",
          "text-muted-foreground hover:text-foreground",
          isOpen && "text-foreground"
        )}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isOpen && "rotate-180"
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
            className="absolute left-1/2 top-full z-50 mt-3 w-[420px] -translate-x-1/2"
          >
            <div className="rounded-xl border border-border bg-popover p-2 shadow-premium">
              <div className="grid gap-0.5">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                    onClick={onToggle}
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-background transition-colors group-hover:border-gold/30 group-hover:bg-gold/5">
                      <item.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {item.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
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

/* ─── Theme Toggle ─── */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
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
            ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
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
            <div className="mx-2" />
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
            <div className="mx-2" />
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="gap-1.5">
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-foreground"
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
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-wide max-h-[calc(100vh-4rem)] overflow-y-auto py-6">
              {/* Solutions */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Solutions
                </p>
                <div className="grid gap-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Features
                </p>
                <div className="grid gap-1">
                  {features.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Links */}
              <div className="mb-6 border-t border-border pt-4">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild className="w-full gap-1.5">
                  <Link href="/book-demo">
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
