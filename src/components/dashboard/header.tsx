"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Moon,
  Sun,
  Menu,
  User,
  LogOut,
  ChevronDown,
  UserCheck,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotificationCenter } from "./notification-center";

export function DashboardHeader({
  onOpenCommand,
  onOpenMobileMenu,
}: {
  onOpenCommand: () => void;
  onOpenMobileMenu?: () => void;
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [currentRole, setCurrentRole] = React.useState("SOCIETY_ADMIN");
  const [currentUser, setCurrentUser] = React.useState("Rajesh Singhania");

  const personas = [
    { role: "SOCIETY_ADMIN", name: "Rajesh Singhania (Admin)", defaultRoute: "/dashboard" },
    { role: "ACCOUNTANT", name: "Suresh Iyer (Accountant)", defaultRoute: "/dashboard/finance" },
    { role: "SOCIETY_MANAGER", name: "Vikram Rathore (Manager)", defaultRoute: "/dashboard" },
    { role: "RESIDENT", name: "Priya Sharma (Flat A-402)", defaultRoute: "/dashboard/resident-portal" },
    { role: "SECURITY_GUARD", name: "Ramesh Yadav (Security)", defaultRoute: "/dashboard/security" },
  ];

  const handleSwitchPersona = (p: typeof personas[0]) => {
    setCurrentRole(p.role);
    setCurrentUser(p.name);
    router.push(p.defaultRoute);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("leaseiq_session");
    }
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-background/80 px-4 md:px-6 backdrop-blur-xl">
      {/* Mobile Toggle & Search Button */}
      <div className="flex items-center gap-3">
        {onOpenMobileMenu && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onOpenMobileMenu}
            className="md:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        <button
          onClick={onOpenCommand}
          className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-gold/30 hover:bg-muted"
        >
          <Search className="h-3.5 w-3.5 text-gold" />
          <span className="hidden sm:inline">Search platform or jump to...</span>
          <span className="sm:hidden">Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border bg-background px-1.5 font-mono text-[9px] text-muted-foreground">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Persona / Role Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger className="hidden sm:flex items-center gap-1.5 text-xs font-medium border border-gold/30 bg-gold/5 text-foreground hover:bg-gold/10 h-7 rounded-md px-2.5 transition-colors cursor-pointer">
            <UserCheck className="h-3.5 w-3.5 text-gold" />
            <span>{currentRole}</span>
            <ChevronDown className="h-3 w-3 opacity-60" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
              Switch Test Persona
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {personas.map((p) => (
              <DropdownMenuItem
                key={p.role}
                onClick={() => handleSwitchPersona(p)}
                className="text-xs cursor-pointer flex justify-between items-center"
              >
                <span>{p.name}</span>
                {currentRole === p.role && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <NotificationCenter />

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-muted/60 hover:bg-muted transition-colors cursor-pointer">
            <User className="h-4 w-4 text-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>
              <p className="text-xs font-semibold text-foreground">{currentUser}</p>
              <p className="text-[10px] text-muted-foreground">{currentRole}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/dashboard/resident-portal")} className="text-xs cursor-pointer">
              Resident Portal
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/dashboard/intelligence")} className="text-xs cursor-pointer">
              LeaseIQ Intelligence
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-xs cursor-pointer text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-3.5 w-3.5" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
