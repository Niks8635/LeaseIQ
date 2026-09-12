"use client";

import * as React from "react";
import {
  Headset,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Filter,
  User,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComplaintTicket {
  id: string;
  unit: string;
  category: string;
  title: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  status: "OPEN" | "ASSIGNED" | "IN_PROGRESS" | "RESOLVED";
  assignedTo: string;
  timeAgo: string;
}

export default function HelpdeskPage() {
  const [tickets, setTickets] = React.useState<ComplaintTicket[]>([
    {
      id: "TKT-489201",
      unit: "B-203",
      category: "Plumbing",
      title: "Water pipe leakage in master bathroom",
      priority: "HIGH",
      status: "IN_PROGRESS",
      assignedTo: "Suresh Plumber",
      timeAgo: "2 hours ago",
    },
    {
      id: "TKT-489202",
      unit: "A-402",
      category: "Electrical",
      title: "Balcony socket sparking on load",
      priority: "HIGH",
      status: "OPEN",
      assignedTo: "Unassigned",
      timeAgo: "30 mins ago",
    },
    {
      id: "TKT-489203",
      unit: "Tower C",
      category: "Maintenance",
      title: "Lift #2 strange vibration noise",
      priority: "MEDIUM",
      status: "ASSIGNED",
      assignedTo: "LiftCare Team",
      timeAgo: "5 hours ago",
    },
    {
      id: "TKT-489204",
      unit: "A-101",
      category: "Housekeeping",
      title: "Corridor floor cleaning pending",
      priority: "LOW",
      status: "RESOLVED",
      assignedTo: "CleanPro Staff",
      timeAgo: "Yesterday",
    },
  ]);

  const stages = [
    { label: "OPEN", title: "New Requests", color: "border-border" },
    { label: "ASSIGNED", title: "Assigned to Staff", color: "border-blue-500/40" },
    { label: "IN_PROGRESS", title: "Work in Progress", color: "border-warning/40" },
    { label: "RESOLVED", title: "Resolved & Closed", color: "border-success/40" },
  ];

  const handleAdvanceStatus = (ticketId: string) => {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== ticketId) return t;
        if (t.status === "OPEN") return { ...t, status: "ASSIGNED", assignedTo: "Duty Technician" };
        if (t.status === "ASSIGNED") return { ...t, status: "IN_PROGRESS" };
        if (t.status === "IN_PROGRESS") return { ...t, status: "RESOLVED" };
        return t;
      })
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Helpdesk & Maintenance Operations
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Track resident service tickets, maintenance dispatch, and SLA resolution pipelines.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-primary text-primary-foreground text-xs gap-1.5">
            <Plus className="h-3.5 w-3.5" /> Raise New Ticket
          </Button>
        </div>
      </div>

      {/* SLA Benchmarks Row */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="border-border shadow-premium">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-serif font-bold text-foreground">2.4 hrs</p>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">Avg Response Time</p>
          </CardContent>
        </Card>
        <Card className="border-border shadow-premium">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-serif font-bold text-success">94.8%</p>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">SLA Compliance</p>
          </CardContent>
        </Card>
        <Card className="border-border shadow-premium">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-serif font-bold text-warning">{tickets.filter((t) => t.status !== "RESOLVED").length}</p>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">Active Tickets</p>
          </CardContent>
        </Card>
        <Card className="border-border shadow-premium">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-serif font-bold text-foreground">4.8 / 5</p>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">Resident Satisfaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Kanban Pipeline Columns */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => {
          const stageTickets = tickets.filter((t) => t.status === stage.label);
          return (
            <div key={stage.label} className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  {stage.title}
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                  {stageTickets.length}
                </span>
              </div>

              <div className="space-y-3 min-h-[350px] rounded-xl bg-muted/20 p-2.5 border border-border/50">
                {stageTickets.length === 0 ? (
                  <p className="text-center text-xs text-muted-foreground/60 py-12">No tickets in stage</p>
                ) : (
                  stageTickets.map((t) => (
                    <div
                      key={t.id}
                      className="rounded-lg border border-border bg-card p-3.5 shadow-sm space-y-2.5 transition-all hover:border-gold/30 hover:shadow-premium text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-muted-foreground">{t.id}</span>
                        <Badge
                          variant="outline"
                          className={
                            t.priority === "HIGH"
                              ? "bg-destructive/10 text-destructive border-destructive/20 text-[9px]"
                              : "bg-muted text-muted-foreground text-[9px]"
                          }
                        >
                          {t.priority}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground leading-tight">{t.title}</h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5">Unit: {t.unit} • {t.category}</p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1 border-t border-border/50">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" /> {t.assignedTo}
                        </span>
                        <span>{t.timeAgo}</span>
                      </div>

                      {t.status !== "RESOLVED" && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAdvanceStatus(t.id)}
                          className="w-full h-6 text-[10px] border-border hover:border-gold/30 hover:text-gold"
                        >
                          Advance Stage →
                        </Button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
