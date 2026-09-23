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
  Store,
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
  { name: "Vendors & AMCs", href: "/dashboard/vendors", icon: Store },
  { name: "LeaseIQ Intelligence", href: "/dashboard/intelligence", icon: Sparkles, badge: "92/100" },
];

export function DashboardSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <aside className={cn("flex flex-col border-r border-[rgba(0,245,212,0.12)] bg-[#040D1A] h-full text-white", className)}>
      {/* Brand Logo */}
      <div className="flex h-16 items-center px-6 border-b border-[rgba(0,245,212,0.12)]">
        <Link href="/" className="flex items-baseline gap-0.5 group">
          <span className="text-xl font-bold tracking-tight text-white">Lease</span>
          <span className="text-xl font-bold tracking-tight text-[#00F5D4]">IQ</span>
          <span className="ml-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#7E97B8]">
            Societies
          </span>
        </Link>
      </div>

      {/* Society Badge */}
      <div className="px-4 py-3 border-b border-[rgba(0,245,212,0.1)] bg-[#0A1B30]/60">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00F5D4]/15 text-[#00F5D4] font-bold text-xs border border-[#00F5D4]/25">
            GV
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-white truncate">Green Valley Residency</p>
            <p className="text-[10px] text-[#7E97B8] truncate">Navi Mumbai • 450 Units</p>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname === item.href.replace("/dashboard", ""));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-medium transition-all",
                isActive
                  ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30 shadow-[0_0_15px_rgba(0,245,212,0.15)]"
                  : "text-[#7E97B8] hover:bg-[#0A1B30] hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    isActive ? "text-[#00F5D4]" : "text-[#7E97B8] group-hover:text-[#00F5D4]"
                  )}
                />
                <span className="truncate">{item.name}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    "text-[9px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-wider",
                    isActive
                      ? "bg-[#00F5D4]/25 text-[#00F5D4]"
                      : "bg-[#00F5D4]/10 text-[#00F5D4]"
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
