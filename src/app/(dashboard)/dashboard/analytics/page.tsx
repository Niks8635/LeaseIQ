"use client";

import * as React from "react";
import { BarChart3, TrendingUp, Users, Calendar, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Society Analytics & Operational Reports
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Historical trends across collection performance, expense distributions, complaint SLAs, and gate traffic.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-border shadow-premium">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Expense Allocation</CardTitle>
            <CardDescription className="text-xs">Where society funds go monthly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2 text-xs">
            {[
              { cat: "Security Guard Services", amt: 125000, pct: 45, color: "bg-gold" },
              { cat: "Housekeeping & Sanitization", amt: 45000, pct: 20, color: "bg-blue-500" },
              { cat: "Common Area Electricity & Lift AMC", amt: 55000, pct: 22, color: "bg-warning" },
              { cat: "Water Supply & Pumps", amt: 22000, pct: 8, color: "bg-success" },
              { cat: "Reserve / Sinking Fund", amt: 15000, pct: 5, color: "bg-primary/40" },
            ].map((e, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{e.cat}</span>
                  <span className="font-semibold text-foreground">{formatCurrency(e.amt)} ({e.pct}%)</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div style={{ width: `${e.pct}%` }} className={`h-full ${e.color}`} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Complaint SLA Trends</CardTitle>
            <CardDescription className="text-xs">Average turnaround time by category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2 text-xs">
            {[
              { cat: "Plumbing", avgHours: "1.8h", compliance: "98%" },
              { cat: "Electrical", avgHours: "2.1h", compliance: "95%" },
              { cat: "Lift Maintenance", avgHours: "3.4h", compliance: "92%" },
              { cat: "Housekeeping", avgHours: "1.2h", compliance: "99%" },
              { cat: "Security / Intercom", avgHours: "2.0h", compliance: "96%" },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                <span className="font-medium text-foreground">{s.cat}</span>
                <div className="text-right">
                  <span className="font-bold text-foreground">{s.avgHours}</span>
                  <span className="text-[10px] text-success ml-2">({s.compliance} SLA)</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold">Visitor Peak Hours</CardTitle>
            <CardDescription className="text-xs">Average daily gate traffic distribution</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-2 text-xs">
            {[
              { time: "08:00 - 11:00 (Morning Rush)", count: "18 entries", pct: 35 },
              { time: "12:00 - 15:00 (Deliveries & Lunch)", count: "24 entries", pct: 45 },
              { time: "17:00 - 20:00 (Evening Guests)", count: "28 entries", pct: 55 },
              { time: "20:00 - 23:00 (Dinner Deliveries)", count: "14 entries", pct: 25 },
            ].map((v, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{v.time}</span>
                  <span className="font-semibold text-foreground">{v.count}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div style={{ width: `${v.pct}%` }} className="h-full bg-gold" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
