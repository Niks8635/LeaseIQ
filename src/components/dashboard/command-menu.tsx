"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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
  Search,
  UserCheck,
  CreditCard,
  PlusCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface CommandItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  href?: string;
  action?: () => void;
}

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const items: CommandItem[] = [
    { icon: LayoutDashboard, title: "Executive Dashboard", category: "Navigation", href: "/dashboard" },
    { icon: UserCheck, title: "Resident Portal (Priya Sharma)", category: "Navigation", href: "/dashboard/resident-portal" },
    { icon: Users, title: "Residents & Units", category: "Navigation", href: "/dashboard/residents" },
    { icon: Shield, title: "Security & Gate Control", category: "Navigation", href: "/dashboard/security" },
    { icon: Landmark, title: "Finance & Maintenance Billing", category: "Navigation", href: "/dashboard/finance" },
    { icon: Brain, title: "AI Finance Hub & Reconciliation", category: "Navigation", href: "/dashboard/ai-finance" },
    { icon: Headset, title: "Helpdesk & Complaints", category: "Navigation", href: "/dashboard/complaints" },
    { icon: TreePalm, title: "Amenities & Facility Booking", category: "Navigation", href: "/dashboard/facilities" },
    { icon: MessageSquare, title: "Community Notices & Polls", category: "Navigation", href: "/dashboard/community" },
    { icon: Sparkles, title: "LeaseIQ Intelligence & Health Score", category: "Navigation", href: "/dashboard/intelligence" },
    { icon: CreditCard, title: "Pay Maintenance Bill", category: "Quick Actions", href: "/dashboard/resident-portal" },
    { icon: PlusCircle, title: "Pre-approve Visitor", category: "Quick Actions", href: "/dashboard/resident-portal" },
    { icon: PlusCircle, title: "Raise Maintenance Complaint", category: "Quick Actions", href: "/dashboard/complaints" },
  ];

  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: CommandItem) => {
    setOpen(false);
    if (item.href) {
      router.push(item.href);
    } else if (item.action) {
      item.action();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 max-w-xl overflow-hidden border-border bg-popover shadow-2xl">
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="mr-3 h-5 w-5 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search modules, or take quick action..."
            className="border-0 shadow-none focus-visible:ring-0 text-base bg-transparent"
            autoFocus
          />
          <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            ESC
          </kbd>
        </div>

        <div className="max-h-[350px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="p-4 text-center text-sm text-muted-foreground">
              No matching modules or actions found.
            </p>
          ) : (
            <div className="space-y-1">
              {filtered.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent hover:text-foreground"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-foreground">
                      <item.icon className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.category}</div>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">Jump →</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
