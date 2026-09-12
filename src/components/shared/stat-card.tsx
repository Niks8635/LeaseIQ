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
        "group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300",
        "hover:border-gold/20 hover:shadow-premium",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {prefix}
            {count.toLocaleString("en-IN")}
            {suffix}
          </p>
          {trend && (
            <p
              className={cn(
                "mt-1.5 text-xs font-medium",
                trend.value >= 0 ? "text-success" : "text-destructive"
              )}
            >
              {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}%{" "}
              <span className="text-muted-foreground">{trend.label}</span>
            </p>
          )}
        </div>
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-gold/10">
            <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-gold" />
          </div>
        )}
      </div>
    </div>
  );
}
