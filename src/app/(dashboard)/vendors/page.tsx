"use client";

import * as React from "react";
import { Store, Star, FileText, Phone, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export default function VendorsPage() {
  const vendors = [
    {
      id: 1,
      name: "ABC Security Services Pvt Ltd",
      category: "Security & Guarding",
      contact: "Anil Mehta",
      phone: "+91 22 2840 9900",
      email: "billing@abcsecurity.in",
      contractAmount: 125000,
      contractEnd: "31 Dec 2025",
      rating: 4.8,
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "Sparkle Clean Facility Solutions",
      category: "Housekeeping & Cleaning",
      contact: "Sunil Shinde",
      phone: "+91 22 2840 8800",
      email: "support@sparkleclean.in",
      contractAmount: 45000,
      contractEnd: "31 Mar 2026",
      rating: 4.5,
      status: "ACTIVE",
    },
    {
      id: 3,
      name: "LiftCare India Elevators",
      category: "Lift AMC Maintenance",
      contact: "Rohan Kulkarni",
      phone: "+91 22 2840 7700",
      email: "service@liftcare.in",
      contractAmount: 25000,
      contractEnd: "15 Oct 2025",
      rating: 4.7,
      status: "RENEWAL_DUE",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Vendor & Contract Lifecycle
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Service level agreements, recurring monthly contracts, and vendor performance audits.
          </p>
        </div>
        <Button size="sm" className="bg-primary text-primary-foreground text-xs gap-1.5">
          <Plus className="h-3.5 w-3.5" /> Onboard Vendor
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {vendors.map((v) => (
          <Card key={v.id} className="border-border shadow-premium flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle className="text-base font-semibold text-foreground">{v.name}</CardTitle>
                  <CardDescription className="text-xs mt-0.5">{v.category}</CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className={
                    v.status === "ACTIVE"
                      ? "border-success/30 bg-success/10 text-success text-[10px]"
                      : "border-warning/30 bg-warning/10 text-warning text-[10px]"
                  }
                >
                  {v.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-xs">
              <div className="rounded-lg bg-muted/40 p-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Payout:</span>
                  <span className="font-bold text-foreground">{formatCurrency(v.contractAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Contract Expiry:</span>
                  <span className="text-foreground">{v.contractEnd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Performance Rating:</span>
                  <span className="font-semibold text-gold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-gold text-gold" /> {v.rating} / 5.0
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5" /> {v.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" /> {v.email}
                </p>
              </div>

              <Button variant="outline" size="sm" className="w-full text-xs">
                View Contract & Invoices
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
