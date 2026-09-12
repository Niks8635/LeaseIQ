"use client";

import * as React from "react";
import {
  Shield,
  UserCheck,
  Package,
  AlertTriangle,
  Clock,
  DoorOpen,
  CheckCircle2,
  XCircle,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VisitorEntry {
  id: number;
  name: string;
  phone: string;
  flat: string;
  type: string;
  time: string;
  status: "WAITING" | "APPROVED" | "INSIDE" | "EXITED";
}

export default function SecurityGatePage() {
  const [visitors, setVisitors] = React.useState<VisitorEntry[]>([
    { id: 1, name: "Rahul Verma", phone: "+91 98111 22334", flat: "A-402", type: "Guest", time: "10:15 AM", status: "WAITING" },
    { id: 2, name: "Amazon Delivery (Mahesh)", phone: "+91 98222 33445", flat: "B-105", type: "Delivery", time: "10:05 AM", status: "APPROVED" },
    { id: 3, name: "Urban Company (Electrician)", phone: "+91 98333 44556", flat: "C-304", type: "Service", time: "09:45 AM", status: "INSIDE" },
    { id: 4, name: "Swiggy Rider", phone: "+91 98444 55667", flat: "A-201", type: "Delivery", time: "09:30 AM", status: "EXITED" },
  ]);

  const [sosActive, setSosActive] = React.useState(false);

  const handleAction = (id: number, newStatus: VisitorEntry["status"]) => {
    setVisitors((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Security & Gate Operations
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Real-time gate passes, visitor identity verification, and delivery logging.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={sosActive ? "destructive" : "outline"}
            size="sm"
            onClick={() => setSosActive(!sosActive)}
            className="text-xs gap-1.5 border-destructive/40 text-destructive hover:bg-destructive/10"
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            {sosActive ? "Emergency Alert Active" : "Trigger Emergency SOS"}
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground text-xs gap-1.5">
            <Plus className="h-3.5 w-3.5" /> New Visitor Check-In
          </Button>
        </div>
      </div>

      {sosActive && (
        <div className="p-4 rounded-xl bg-destructive/10 border border-destructive text-destructive flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            <span className="text-xs font-semibold">
              Emergency SOS dispatched to Main Gate guards and Committee Office Bearers.
            </span>
          </div>
          <Button size="sm" variant="outline" onClick={() => setSosActive(false)} className="text-xs h-7">
            Acknowledge & Dismiss
          </Button>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="border-border shadow-premium">
          <CardContent className="p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Entries Today</p>
            <p className="mt-1 text-2xl font-bold text-foreground">38 Visitors</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">24 Guests • 14 Deliveries</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Currently Inside</p>
            <p className="mt-1 text-2xl font-bold text-gold">12 Visitors</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Active passes logged</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Waiting Approval</p>
            <p className="mt-1 text-2xl font-bold text-warning">{visitors.filter((v) => v.status === "WAITING").length}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Resident ping dispatched</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Guards on Duty</p>
            <p className="mt-1 text-2xl font-bold text-success">4 Guards</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Shift: Morning (Gate 1 & 2)</p>
          </CardContent>
        </Card>
      </div>

      {/* Visitor Stream Table */}
      <Card className="border-border shadow-premium">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Live Gate Access Log</CardTitle>
          <CardDescription className="text-xs">Incoming visitors, resident approvals, and entry/exit times</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/40 uppercase tracking-wider text-[10px] text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Visitor Name</th>
                  <th className="px-5 py-3 font-semibold">Target Unit</th>
                  <th className="px-5 py-3 font-semibold">Type</th>
                  <th className="px-5 py-3 font-semibold">Mobile</th>
                  <th className="px-5 py-3 font-semibold">Time</th>
                  <th className="px-5 py-3 font-semibold">Gate Status</th>
                  <th className="px-5 py-3 font-semibold text-right">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {visitors.map((v) => (
                  <tr key={v.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-foreground">{v.name}</td>
                    <td className="px-5 py-3.5 font-bold text-gold">{v.flat}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{v.type}</td>
                    <td className="px-5 py-3.5 font-mono text-muted-foreground">{v.phone}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{v.time}</td>
                    <td className="px-5 py-3.5">
                      <Badge
                        variant="outline"
                        className={
                          v.status === "APPROVED" || v.status === "INSIDE"
                            ? "border-success/30 bg-success/10 text-success text-[10px]"
                            : v.status === "WAITING"
                            ? "border-warning/30 bg-warning/10 text-warning text-[10px]"
                            : "border-muted text-muted-foreground text-[10px]"
                        }
                      >
                        {v.status}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      {v.status === "WAITING" && (
                        <div className="flex justify-end gap-1.5">
                          <Button
                            size="sm"
                            onClick={() => handleAction(v.id, "APPROVED")}
                            className="h-6 text-[10px] bg-success text-success-foreground hover:bg-success/90 px-2"
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAction(v.id, "EXITED")}
                            className="h-6 text-[10px] border-destructive text-destructive hover:bg-destructive/10 px-2"
                          >
                            Deny
                          </Button>
                        </div>
                      )}
                      {v.status === "APPROVED" && (
                        <Button
                          size="sm"
                          onClick={() => handleAction(v.id, "INSIDE")}
                          className="h-6 text-[10px] bg-gold text-primary-foreground hover:bg-gold/90 px-2"
                        >
                          Check In
                        </Button>
                      )}
                      {v.status === "INSIDE" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAction(v.id, "EXITED")}
                          className="h-6 text-[10px] border-border text-foreground hover:bg-muted px-2"
                        >
                          Mark Exited
                        </Button>
                      )}
                      {v.status === "EXITED" && (
                        <span className="text-[11px] text-muted-foreground">Logged</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
