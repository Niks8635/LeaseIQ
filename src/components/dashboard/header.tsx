"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Menu,
  User,
  LogOut,
  ChevronDown,
  UserCheck,
  Check,
  Building,
  Shield,
  CreditCard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NotificationCenter } from "./notification-center";

export function DashboardHeader({
  onOpenCommand,
  onOpenMobileMenu,
}: {
  onOpenCommand: () => void;
  onOpenMobileMenu?: () => void;
}) {
  const router = useRouter();
  const [currentRole, setCurrentRole] = React.useState("SOCIETY_ADMIN");
  const [currentUser, setCurrentUser] = React.useState("Rajesh Singhania (Admin)");

  // Dropdown states
  const [personaOpen, setPersonaOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);

  const personaRef = React.useRef<HTMLDivElement>(null);
  const userMenuRef = React.useRef<HTMLDivElement>(null);

  const personas = [
    { role: "SOCIETY_ADMIN", name: "Rajesh Singhania (Admin)", defaultRoute: "/dashboard", desc: "Full executive oversight & committee access" },
    { role: "ACCOUNTANT", name: "Suresh Iyer (Accountant)", defaultRoute: "/dashboard/finance", desc: "Maintenance invoices & bank reconciliation" },
    { role: "SOCIETY_MANAGER", name: "Vikram Rathore (Manager)", defaultRoute: "/dashboard/operations", desc: "Staff operations, vendors & SLA tracking" },
    { role: "RESIDENT", name: "Priya Sharma (Flat A-402)", defaultRoute: "/dashboard/resident-portal", desc: "Resident bills, visitor passes & notices" },
    { role: "SECURITY_GUARD", name: "Ramesh Yadav (Security)", defaultRoute: "/dashboard/security", desc: "ANPR gate entries, visitor verification" },
  ];

  // Close dropdowns on outside click
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (personaRef.current && !personaRef.current.contains(e.target as Node)) {
        setPersonaOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSwitchPersona = (p: typeof personas[0]) => {
    setCurrentRole(p.role);
    setCurrentUser(p.name);
    setPersonaOpen(false);
    router.push(p.defaultRoute);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("leaseiq_session");
      window.location.href = "/login";
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[rgba(0,245,212,0.12)] bg-[#040D1A]/90 px-4 md:px-6 backdrop-blur-xl">
      {/* Mobile Toggle & Search Button */}
      <div className="flex items-center gap-3">
        {onOpenMobileMenu && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenMobileMenu}
            className="md:hidden text-[#7E97B8] hover:text-[#00F5D4] hover:bg-[#0A1B30]"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <button
          type="button"
          onClick={onOpenCommand}
          className="flex items-center gap-2 rounded-lg border border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/60 px-3 py-1.5 text-xs text-[#7E97B8] transition-colors hover:border-[#00F5D4] hover:bg-[#0A1B30] cursor-pointer"
        >
          <Search className="h-3.5 w-3.5 text-[#00F5D4]" />
          <span className="hidden sm:inline">Search platform or jump to...</span>
          <span className="sm:hidden">Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-[rgba(0,245,212,0.2)] bg-[#040D1A] px-1.5 font-mono text-[9px] text-[#7E97B8]">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* 1. Persona / Role Switcher */}
        <div className="relative" ref={personaRef}>
          <button
            type="button"
            onClick={() => {
              setPersonaOpen((prev) => !prev);
              setUserMenuOpen(false);
            }}
            className="flex items-center gap-1.5 text-xs font-semibold border border-[rgba(0,245,212,0.3)] bg-[#00F5D4]/10 text-white hover:bg-[#00F5D4]/20 hover:border-[#00F5D4] h-8 rounded-full px-3 transition-all cursor-pointer shadow-[0_0_12px_rgba(0,245,212,0.12)]"
            aria-expanded={personaOpen}
            aria-label="Switch Persona"
          >
            <UserCheck className="h-3.5 w-3.5 text-[#00F5D4]" />
            <span className="font-mono text-[11px] tracking-wide">{currentRole}</span>
            <ChevronDown className={`h-3 w-3 text-[#00F5D4] transition-transform duration-200 ${personaOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {personaOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-[rgba(0,245,212,0.22)] bg-[#0A1B30]/95 backdrop-blur-2xl shadow-2xl z-50 p-2 overflow-hidden"
              >
                <div className="px-3 py-2 border-b border-[rgba(0,245,212,0.1)] mb-1">
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#00F5D4]">Switch Test Persona</p>
                  <p className="text-[11px] text-[#7E97B8] mt-0.5">Test app features from different roles</p>
                </div>

                <div className="space-y-1">
                  {personas.map((p) => {
                    const isSelected = currentRole === p.role;
                    return (
                      <button
                        key={p.role}
                        type="button"
                        onClick={() => handleSwitchPersona(p)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between gap-2 cursor-pointer ${
                          isSelected
                            ? "bg-[#00F5D4]/15 border border-[#00F5D4]/30 text-white"
                            : "hover:bg-[#061220] text-[#7E97B8] hover:text-white"
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <p className={`text-xs font-semibold ${isSelected ? "text-[#00F5D4]" : "text-white"}`}>
                            {p.name}
                          </p>
                          <p className="text-[10px] text-[#7E97B8] truncate mt-0.5">{p.desc}</p>
                        </div>
                        {isSelected && (
                          <div className="h-5 w-5 rounded-full bg-[#00F5D4] text-[#040D1A] flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. Notifications Center */}
        <NotificationCenter />

        {/* 3. User Menu Avatar */}
        <div className="relative" ref={userMenuRef}>
          <button
            type="button"
            onClick={() => {
              setUserMenuOpen((prev) => !prev);
              setPersonaOpen(false);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(0,245,212,0.2)] bg-[#0A1B30] text-white hover:border-[#00F5D4] hover:text-[#00F5D4] transition-all cursor-pointer"
            aria-expanded={userMenuOpen}
            aria-label="User Account"
          >
            <User className="h-4 w-4" />
          </button>

          <AnimatePresence>
            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 top-full mt-2 w-56 rounded-2xl border border-[rgba(0,245,212,0.22)] bg-[#0A1B30]/95 backdrop-blur-2xl shadow-2xl z-50 p-2 overflow-hidden"
              >
                <div className="px-3 py-2 border-b border-[rgba(0,245,212,0.1)] mb-1">
                  <p className="text-xs font-semibold text-white truncate">{currentUser}</p>
                  <p className="text-[10px] font-mono text-[#00F5D4] mt-0.5">{currentRole}</p>
                </div>

                <div className="space-y-0.5">
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      router.push("/dashboard/resident-portal");
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-[#7E97B8] hover:text-white hover:bg-[#061220] transition-colors cursor-pointer"
                  >
                    Resident Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUserMenuOpen(false);
                      router.push("/dashboard/intelligence");
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-[#7E97B8] hover:text-white hover:bg-[#061220] transition-colors cursor-pointer"
                  >
                    LeaseIQ Intelligence
                  </button>
                </div>

                <div className="border-t border-[rgba(0,245,212,0.1)] my-1" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Log out</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
