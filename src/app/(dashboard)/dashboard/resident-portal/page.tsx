"use client";

import * as React from "react";
import {
  CreditCard,
  UserCheck,
  Wrench,
  TreePalm,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Clock,
  Send,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export default function ResidentPortalPage() {
  const [billPaid, setBillPaid] = React.useState(false);
  const [paying, setPaying] = React.useState(false);
  const [visitorAdded, setVisitorAdded] = React.useState(false);
  const [visitorName, setVisitorName] = React.useState("");
  const [visitorPhone, setVisitorPhone] = React.useState("");

  const handlePayBill = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setBillPaid(true);
    }, 1200);
  };

  const handlePreApproveVisitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone) return;
    setVisitorAdded(true);
    setTimeout(() => {
      setVisitorName("");
      setVisitorPhone("");
    }, 2000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Resident Welcome Banner */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-premium flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">Resident Self-Service</span>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
            Welcome, Priya Sharma
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Flat A-402 • Tower A, Floor 4 • Green Valley Residency
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs border-success/30 text-success bg-success/10 py-1 px-3">
            Primary Owner
          </Badge>
          <Badge variant="outline" className="text-xs border-border bg-muted/40 py-1 px-3">
            Occupied
          </Badge>
        </div>
      </div>

      {/* Maintenance Bill Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border shadow-premium md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base font-semibold">Maintenance Bill — September 2025</CardTitle>
                <CardDescription className="text-xs">Invoice #BILL-2025-0001 • Due: 25 Sep 2025</CardDescription>
              </div>
              <Badge
                variant={billPaid ? "outline" : "destructive"}
                className={billPaid ? "border-success text-success bg-success/10" : ""}
              >
                {billPaid ? "PAID" : "DUE IN 5 DAYS"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-border bg-muted/30 p-4 divide-y divide-border/50 text-xs">
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Base Maintenance (1050 sq.ft @ ₹3.8)</span>
                <span className="font-medium text-foreground">₹4,000.00</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Water & Sewerage Charges</span>
                <span className="font-medium text-foreground">₹300.00</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Sinking / Reserve Fund Contribution</span>
                <span className="font-medium text-foreground">₹200.00</span>
              </div>
              <div className="flex justify-between pt-3 text-sm font-bold">
                <span className="text-foreground">Total Payable</span>
                <span className="text-foreground">{formatCurrency(4500)}</span>
              </div>
            </div>

            {billPaid ? (
              <div className="flex items-center justify-between p-3 rounded-lg bg-success/10 border border-success/20 text-success text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Payment confirmed! Receipt <strong>RCP-202509-0001</strong> generated.</span>
                </div>
                <Button size="sm" variant="outline" className="h-7 text-xs border-success/30 hover:bg-success/20">
                  Download PDF
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Accepted: UPI, NetBanking, Credit/Debit Cards, Demo Mode</p>
                <Button
                  onClick={handlePayBill}
                  disabled={paying}
                  className="bg-gold text-primary-foreground hover:bg-gold/90 font-medium text-xs px-6"
                >
                  {paying ? "Processing Payment..." : "Pay ₹4,500 Now"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Resident Stats */}
        <div className="space-y-4">
          <Card className="border-border shadow-premium">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today&apos;s Visitors</p>
                  <p className="text-sm font-bold text-foreground">1 Visitor Approved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-premium">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-warning/10 text-warning">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Active Complaints</p>
                  <p className="text-sm font-bold text-foreground">1 Ticket In Progress</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-premium">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <TreePalm className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Upcoming Amenity</p>
                  <p className="text-sm font-bold text-foreground">Clubhouse • Sunday</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Visitor Pre-Approval & Helpdesk Ticket Forms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pre-approve Visitor */}
        <Card className="border-border shadow-premium">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Pre-Approve a Visitor</CardTitle>
            <CardDescription className="text-xs">Generate instantaneous seamless gate pass</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePreApproveVisitor} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="vName" className="text-xs">Visitor Full Name</Label>
                <Input
                  id="vName"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  placeholder="e.g. Rahul Verma"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="vPhone" className="text-xs">Visitor Mobile Number</Label>
                <Input
                  id="vPhone"
                  value={visitorPhone}
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  placeholder="+91 98200 12345"
                  required
                />
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-[11px] text-muted-foreground">Entry Gate: Main Gate</span>
                <Button type="submit" size="sm" className="bg-primary text-primary-foreground text-xs gap-1.5">
                  <UserCheck className="h-3.5 w-3.5" /> Pre-Approve Pass
                </Button>
              </div>

              {visitorAdded && (
                <p className="text-xs text-success flex items-center gap-1 mt-2">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Pass created! Gate security has been notified.
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Raise Quick Maintenance Complaint */}
        <Card className="border-border shadow-premium">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Raise Maintenance Request</CardTitle>
            <CardDescription className="text-xs">Direct dispatch to society maintenance staff</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 rounded-lg border border-border bg-muted/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-foreground">Water Leakage — B-203</p>
                  <p className="text-[10px] text-muted-foreground">Category: Plumbing • Priority: High</p>
                </div>
                <Badge variant="outline" className="text-[10px] bg-warning/10 text-warning border-warning/30">
                  IN PROGRESS
                </Badge>
              </div>

              <div className="p-3 rounded-lg border border-border bg-muted/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-foreground">Corridor Light Repair</p>
                  <p className="text-[10px] text-muted-foreground">Category: Electrical • Priority: Low</p>
                </div>
                <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/30">
                  RESOLVED
                </Badge>
              </div>

              <Button variant="outline" size="sm" className="w-full text-xs gap-1.5 mt-2">
                <Plus className="h-3.5 w-3.5" /> Submit New Ticket
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
