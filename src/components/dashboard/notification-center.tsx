"use client";

import * as React from "react";
import { Bell, Check, Sparkles, UserCheck, CreditCard, Wrench } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  category: "visitor" | "payment" | "complaint" | "ai";
}

export function NotificationCenter() {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

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

  // Handle click outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const getIcon = (cat: NotificationItem["category"]) => {
    switch (cat) {
      case "visitor":
        return <UserCheck className="h-4 w-4 text-[#00F5D4]" />;
      case "payment":
        return <CreditCard className="h-4 w-4 text-[#00F5D4]" />;
      case "ai":
        return <Sparkles className="h-4 w-4 text-blue-400" />;
      case "complaint":
        return <Wrench className="h-4 w-4 text-amber-400" />;
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Bell Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Notifications"
        aria-expanded={isOpen}
        className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/60 text-[#7E97B8] hover:border-[#00F5D4] hover:bg-[#0A1B30] hover:text-[#00F5D4] transition-all cursor-pointer"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-amber-400 ring-2 ring-[#040D1A] animate-pulse" />
        )}
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border border-[rgba(0,245,212,0.22)] bg-[#0A1B30]/95 backdrop-blur-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[rgba(0,245,212,0.12)] px-4 py-3 bg-[#061220]/60">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-white tracking-wide">Notifications</span>
                {unreadCount > 0 && (
                  <span className="rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 px-2 py-0.5 text-[10px] font-semibold text-[#00F5D4]">
                    {unreadCount} new
                  </span>
                )}
              </div>
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="text-[11px] text-[#7E97B8] hover:text-[#00F5D4] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Check className="h-3 w-3" /> Mark all read
                </button>
              )}
            </div>

            {/* List */}
            <div className="max-h-[340px] overflow-y-auto divide-y divide-[rgba(0,245,212,0.08)]">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => markAsRead(n.id)}
                  className={`p-3.5 flex items-start gap-3 transition-colors cursor-pointer hover:bg-[#061220]/80 ${
                    !n.read ? "bg-[rgba(0,245,212,0.04)]" : ""
                  }`}
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.18)]">
                    {getIcon(n.category)}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-xs font-medium text-white truncate">{n.title}</p>
                      <span className="text-[10px] text-[#7E97B8] shrink-0 font-mono">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[#7E97B8] leading-relaxed line-clamp-2">{n.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
