"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  Landmark,
  Brain,
  Headset,
  TreePalm,
  MessageSquare,
  Sparkles,
  UserCheck,
  Building2,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Executive Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Resident Portal", href: "/dashboard/resident-portal", icon: UserCheck, badge: "Self-Service" },
  { name: "Residents & Units", href: "/dashboard/residents", icon: Users },
  { name: "Security & Gate", href: "/dashboard/security", icon: Shield },
  { name: "Finance & Billing", href: "/dashboard/finance", icon: Landmark },
  { name: "AI Finance Hub", href: "/dashboard/ai-finance", icon: Brain, badge: "AI" },
  { name: "Helpdesk & Complaints", href: "/dashboard/complaints", icon: Headset },
  { name: "Amenities & Bookings", href: "/dashboard/facilities", icon: TreePalm },
  { name: "Community & Polls", href: "/dashboard/community", icon: MessageSquare },
  { name: "LeaseIQ Intelligence", href: "/dashboard/intelligence", icon: Sparkles, badge: "92/100" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex flex-col border-r border-border bg-sidebar h-full", className)}>
      {/* Brand Logo */}
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-baseline gap-0.5 group">
          <span className="text-xl font-bold tracking-tight text-foreground">Lease</span>
          <span className="text-xl font-bold tracking-tight text-gold">IQ</span>
          <span className="ml-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Societies
          </span>
        </Link>
      </div>

      {/* Society Badge */}
      <div className="px-4 py-3 border-b border-sidebar-border/60 bg-sidebar-accent/30">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold font-bold text-xs">
            GV
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-foreground truncate">Green Valley Residency</p>
            <p className="text-[10px] text-muted-foreground truncate">Navi Mumbai • 450 Units</p>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-gold"
                  )}
                />
                <span className="truncate">{item.name}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    "text-[9px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-wider",
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-gold/10 text-gold"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>v1.0 Production</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-success" /> Live
          </span>
        </div>
      </div>
    </aside>
  );
}
