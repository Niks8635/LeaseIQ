"use client";

import { cn } from "@/lib/utils";
import { useCounter } from "@/hooks/use-counter";
import { useIntersection } from "@/hooks/use-intersection";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  icon?: LucideIcon;
  trend?: { value: number; label: string };
  className?: string;
}

export function StatCard({
  label,
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });
  const count = useCounter({ end: value, enabled: isVisible, decimals, duration: 2000 });

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[rgba(0,245,212,0.14)] bg-[#0A1B30]/70 p-6 backdrop-blur-xl transition-all duration-300 card-accent-line",
        "hover:border-[rgba(0,245,212,0.4)] hover:shadow-[0_10px_30px_rgba(0,245,212,0.1)] hover:-translate-y-1",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7E97B8]">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {prefix}
            {count.toLocaleString("en-IN")}
            {suffix}
          </p>
          {trend && (
            <p
              className={cn(
                "mt-1.5 text-xs font-medium",
                trend.value >= 0 ? "text-[#00F5D4]" : "text-destructive"
              )}
            >
              {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}%{" "}
              <span className="text-[#7E97B8]">{trend.label}</span>
            </p>
          )}
        </div>
        {Icon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(0,245,212,0.15)] bg-[#0D223E] transition-all duration-300 group-hover:border-[#00F5D4] group-hover:bg-[#00F5D4]/10 group-hover:shadow-[0_0_15px_rgba(0,245,212,0.25)]">
            <Icon className="h-5 w-5 text-[#7E97B8] transition-colors group-hover:text-[#00F5D4]" />
          </div>
        )}
      </div>
    </div>
  );
}
