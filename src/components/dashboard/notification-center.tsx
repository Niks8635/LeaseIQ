"use client";

import * as React from "react";
import { Bell, Check, Sparkles, UserCheck, CreditCard, Wrench } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  category: "visitor" | "payment" | "complaint" | "ai";
}

export function NotificationCenter() {
  const [notifications, setNotifications] = React.useState<NotificationItem[]>([
    {
      id: "1",
      title: "Visitor Approved",
      message: "Rahul Verma approved for Flat A-402 by resident Priya Sharma.",
      time: "10 mins ago",
      read: false,
      category: "visitor",
    },
    {
      id: "2",
      title: "Payment Received",
      message: "₹4,500 maintenance received from Unit B-201 via UPI.",
      time: "1 hour ago",
      read: false,
      category: "payment",
    },
    {
      id: "3",
      title: "AI Reconciliation Alert",
      message: "4 new bank transactions matched with 98% confidence.",
      time: "2 hours ago",
      read: false,
      category: "ai",
    },
    {
      id: "4",
      title: "Complaint Status Updated",
      message: "Ticket TKT-489201 assigned to Plumbing staff team.",
      time: "Yesterday",
      read: true,
      category: "complaint",
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const getIcon = (cat: NotificationItem["category"]) => {
    switch (cat) {
      case "visitor":
        return <UserCheck className="h-4 w-4 text-success" />;
      case "payment":
        return <CreditCard className="h-4 w-4 text-gold" />;
      case "ai":
        return <Sparkles className="h-4 w-4 text-blue-500" />;
      case "complaint":
        return <Wrench className="h-4 w-4 text-warning" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer">
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-gold animate-pulse" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80 p-0 border-border bg-popover shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">Notifications</span>
            {unreadCount > 0 && (
              <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold">
                {unreadCount} new
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer"
            >
              <Check className="h-3 w-3" /> Mark all read
            </button>
          )}
        </div>

        <div className="max-h-[320px] overflow-y-auto divide-y divide-border/50">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markAsRead(n.id)}
              className={`p-3.5 flex items-start gap-3 transition-colors cursor-pointer hover:bg-accent ${
                !n.read ? "bg-accent/40" : ""
              }`}
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background border border-border">
                {getIcon(n.category)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-foreground">{n.title}</p>
                  <span className="text-[10px] text-muted-foreground">{n.time}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{n.message}</p>
              </div>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
