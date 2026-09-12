"use client";

import * as React from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  CreditCard,
  Shield,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { DEMO_DASHBOARD_KPIS, DEMO_AI_INSIGHTS, DEMO_RECENT_PAYMENTS, DEMO_RECENT_VISITORS } from "@/lib/demo-data";

export default function ExecutiveDashboardPage() {
  const [kpis, setKpis] = React.useState(DEMO_DASHBOARD_KPIS);

  return (
    <div className="space-y-8">
      {/* Top Header & Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Executive Command Center
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Real-time operations, financial metrics, and AI health overview for <span className="font-semibold text-foreground">Green Valley Residency</span>.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/resident-portal">
              Resident View
            </Link>
          </Button>
          <Button size="sm" asChild className="bg-gold text-primary-foreground hover:bg-gold/90 gap-1">
            <Link href="/dashboard/finance">
              <Plus className="h-3.5 w-3.5" /> Generate Bills
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Total Units</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
                <Building2 className="h-4 w-4 text-foreground" />
              </div>
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{kpis.totalUnits}</p>
            <p className="text-xs text-muted-foreground mt-1">3 Towers • 96% Occupancy</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Collection Rate</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-success/10 text-success">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-success">{kpis.collectionRate}%</p>
            <p className="text-xs text-success mt-1">↑ 3.2% vs last month</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Outstanding Dues</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold/10 text-gold">
                <CreditCard className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{formatCurrency(kpis.pendingDues)}</p>
            <p className="text-xs text-muted-foreground mt-1">23 units pending payment</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Society Health</p>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold/10 text-gold font-bold text-xs">
                {kpis.societyHealth}
              </div>
            </div>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gold">{kpis.societyHealth}<span className="text-sm font-normal text-muted-foreground">/100</span></p>
            <p className="text-xs text-muted-foreground mt-1">Rating: <span className="text-foreground font-semibold">Excellent</span></p>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Alert Banner */}
      <Card className="border-gold/30 bg-gold/5 shadow-premium">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">LeaseIQ AI Financial Insight</h3>
                <Badge variant="outline" className="text-[10px] bg-gold/10 text-gold border-gold/30">
                  Automated Recommendation
                </Badge>
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                4 bank transactions matched with 98% confidence. Reviewing these now will boost this month&apos;s auto-reconciliation rate to 97.4%.
              </p>
            </div>
            <Button size="sm" asChild className="hidden sm:inline-flex bg-gold text-primary-foreground hover:bg-gold/90 text-xs">
              <Link href="/dashboard/ai-finance">Review Matches</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Grid: Collections Chart & Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left 2 Cols: Monthly Collections Visual */}
        <Card className="border-border shadow-premium lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold">Collections vs Billed Revenue</CardTitle>
                <CardDescription className="text-xs">Annual performance trend (in ₹ Lakhs)</CardDescription>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-gold" /> Billed</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-success" /> Collected</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-3 pt-6 border-t border-border/50">
              {[
                { month: "Jan", billed: 28, collected: 26 },
                { month: "Feb", billed: 28, collected: 27 },
                { month: "Mar", billed: 30, collected: 29 },
                { month: "Apr", billed: 28, collected: 25 },
                { month: "May", billed: 29, collected: 28 },
                { month: "Jun", billed: 30, collected: 28 },
                { month: "Jul", billed: 31, collected: 29 },
                { month: "Aug", billed: 31, collected: 30 },
                { month: "Sep", billed: 32, collected: 30 },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="w-full flex items-end justify-center gap-1 h-48">
                    <div
                      style={{ height: `${(item.billed / 35) * 100}%` }}
                      className="w-2.5 sm:w-3.5 bg-gold/60 rounded-t-sm transition-all group-hover:bg-gold"
                    />
                    <div
                      style={{ height: `${(item.collected / 35) * 100}%` }}
                      className="w-2.5 sm:w-3.5 bg-success rounded-t-sm transition-all group-hover:bg-success/80"
                    />
                  </div>
                  <span className="text-[11px] text-muted-foreground font-medium">{item.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right 1 Col: Recent Visitors Stream */}
        <Card className="border-border shadow-premium">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Live Gate Stream</CardTitle>
              <Badge variant="outline" className="text-[10px] text-success border-success/30">
                Main Gate Active
              </Badge>
            </div>
            <CardDescription className="text-xs">Recent visitor entries & deliveries</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {DEMO_RECENT_VISITORS.map((v, i) => (
                <div key={i} className="p-3.5 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-semibold text-xs">
                      {v.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{v.name}</p>
                      <p className="text-[10px] text-muted-foreground">{v.flat} • {v.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-medium text-success bg-success/10 px-1.5 py-0.5 rounded">
                      {v.status}
                    </span>
                    <p className="text-[9px] text-muted-foreground mt-0.5">{v.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid: Recent Transactions & Complaints */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Payments */}
        <Card className="border-border shadow-premium">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold">Recent Maintenance Receipts</CardTitle>
              <CardDescription className="text-xs">Live payment collections</CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-xs text-gold hover:text-gold/90">
              <Link href="/dashboard/finance">View All →</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50">
              {DEMO_RECENT_PAYMENTS.map((p, i) => (
                <div key={i} className="p-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-foreground">{p.resident}</p>
                    <p className="text-[10px] text-muted-foreground">{p.unit} • {p.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-foreground">{formatCurrency(p.amount)}</p>
                    <span className="text-[10px] text-success flex items-center justify-end gap-0.5">
                      <CheckCircle2 className="h-3 w-3" /> {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Operations Module Grid */}
        <Card className="border-border shadow-premium">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold">Operational Shortcuts</CardTitle>
            <CardDescription className="text-xs">Direct access to society operations</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-3 p-4">
            <Link
              href="/dashboard/ai-finance"
              className="flex flex-col items-start p-3.5 rounded-lg border border-border bg-muted/20 hover:border-gold/30 hover:bg-muted/40 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-gold mb-2" />
              <span className="text-xs font-semibold text-foreground">AI Reconciliation</span>
              <span className="text-[10px] text-muted-foreground">Match bank transactions</span>
            </Link>

            <Link
              href="/dashboard/complaints"
              className="flex flex-col items-start p-3.5 rounded-lg border border-border bg-muted/20 hover:border-gold/30 hover:bg-muted/40 transition-colors"
            >
              <Clock className="h-4 w-4 text-warning mb-2" />
              <span className="text-xs font-semibold text-foreground">Helpdesk Pipeline</span>
              <span className="text-[10px] text-muted-foreground">12 open maintenance tickets</span>
            </Link>

            <Link
              href="/dashboard/facilities"
              className="flex flex-col items-start p-3.5 rounded-lg border border-border bg-muted/20 hover:border-gold/30 hover:bg-muted/40 transition-colors"
            >
              <Building2 className="h-4 w-4 text-blue-500 mb-2" />
              <span className="text-xs font-semibold text-foreground">Facility Booking</span>
              <span className="text-[10px] text-muted-foreground">Clubhouse, Pool, Courts</span>
            </Link>

            <Link
              href="/dashboard/community"
              className="flex flex-col items-start p-3.5 rounded-lg border border-border bg-muted/20 hover:border-gold/30 hover:bg-muted/40 transition-colors"
            >
              <Users className="h-4 w-4 text-success mb-2" />
              <span className="text-xs font-semibold text-foreground">Community Polls</span>
              <span className="text-[10px] text-muted-foreground">Live voting on EV chargers</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
