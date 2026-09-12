"use client";

import * as React from "react";
import { Wrench, CheckCircle2, AlertCircle, Clock, Plus, Shield, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OperationsPage() {
  const staff = [
    { name: "Ramesh Yadav", role: "Security Supervisor", shift: "Morning", status: "Present", checkIn: "06:45 AM" },
    { name: "Suresh Plumber", role: "Maintenance Technician", shift: "General", status: "Present", checkIn: "08:30 AM" },
    { name: "Gopal Electrician", role: "Maintenance Technician", shift: "General", status: "Present", checkIn: "08:45 AM" },
    { name: "Anita Housekeeping", role: "Cleaning Crew Lead", shift: "Morning", status: "Present", checkIn: "07:00 AM" },
  ];

  const inventory = [
    { item: "LED Corridor Bulbs (15W)", category: "Electrical", inStock: 38, minAlert: 10, status: "Normal" },
    { item: "Submersible Pump Spare Valves", category: "Plumbing", inStock: 3, minAlert: 5, status: "Low Stock Alert" },
    { item: "Floor Disinfectant Concentrate", category: "Cleaning", inStock: 25, minAlert: 8, status: "Normal" },
    { item: "Visitor Pass Thermal Rolls", category: "Gate Ops", inStock: 12, minAlert: 4, status: "Normal" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Facility Operations & Staff Attendance
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Guard duty rosters, internal staff biometric attendance, inventory levels, and maintenance work orders.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Staff Attendance */}
        <Card className="border-border shadow-premium">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-base font-semibold">Today&apos;s Staff Duty Roster</CardTitle>
              <CardDescription className="text-xs">Active biometric check-ins</CardDescription>
            </div>
            <Badge variant="outline" className="text-[10px] text-success border-success/30 bg-success/10">
              100% Present
            </Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50 text-xs">
              {staff.map((s, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{s.name}</p>
                    <p className="text-[10px] text-muted-foreground">{s.role} • {s.shift} Shift</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-success font-medium bg-success/10 px-1.5 py-0.5 rounded">
                      {s.status}
                    </span>
                    <p className="text-[9px] text-muted-foreground mt-0.5">In: {s.checkIn}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inventory & Low Stock Alerts */}
        <Card className="border-border shadow-premium">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <div>
              <CardTitle className="text-base font-semibold">Society Spares & Consumables</CardTitle>
              <CardDescription className="text-xs">Inventory levels with automated reorder alerts</CardDescription>
            </div>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/50 text-xs">
              {inventory.map((item, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{item.item}</p>
                    <p className="text-[10px] text-muted-foreground">{item.category} • Min Alert: {item.minAlert}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{item.inStock} units</p>
                    <span
                      className={`text-[10px] font-medium ${
                        item.status.includes("Alert") ? "text-destructive" : "text-muted-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
