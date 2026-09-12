"use client";

import * as React from "react";
import { ShieldCheck, Search, Filter, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function AuditLogPage() {
  const logs = [
    { id: 1, action: "PAYMENT_RECORDED", user: "Priya Sharma", role: "RESIDENT", details: "₹4,500 maintenance bill paid via UPI (RCP-202509-0001)", time: "10 mins ago", ip: "103.21.58.42" },
    { id: 2, action: "VISITOR_APPROVED", user: "Priya Sharma", role: "RESIDENT", details: "Pass generated for guest Rahul Verma at Main Gate", time: "45 mins ago", ip: "103.21.58.42" },
    { id: 3, action: "COMPLAINT_ASSIGNED", user: "Vikram Rathore", role: "SOCIETY_MANAGER", details: "Ticket TKT-489201 assigned to technician Suresh Plumber", time: "2 hours ago", ip: "14.139.12.11" },
    { id: 4, action: "AI_RECONCILIATION_MATCHED", user: "SYSTEM (LeaseIQ AI)", role: "SYSTEM", details: "Auto-matched bank credit ₹4,500 with invoice #BILL-2025-0002", time: "3 hours ago", ip: "Internal" },
    { id: 5, action: "POLL_VOTE_CAST", user: "Dr. Anita Desai", role: "COMMITTEE_MEMBER", details: "Vote cast on EV Charger installation in Basement 2", time: "Yesterday", ip: "115.111.45.89" },
    { id: 6, action: "NOTICE_PUBLISHED", user: "Rajesh Singhania", role: "SOCIETY_ADMIN", details: "Notice 'Quarterly AGM & Budget Review' pinned to notice board", time: "Yesterday", ip: "14.139.12.11" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Immutable System Audit Log
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Cryptographically timestamped audit trail of all financial, operational, and administrative actions.
        </p>
      </div>

      <Card className="border-border shadow-premium">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/40 uppercase tracking-wider text-[10px] text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Event Action</th>
                  <th className="px-5 py-3 font-semibold">Actor / User</th>
                  <th className="px-5 py-3 font-semibold">Details</th>
                  <th className="px-5 py-3 font-semibold">IP Address</th>
                  <th className="px-5 py-3 font-semibold text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {logs.map((l) => (
                  <tr key={l.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="font-mono text-[11px] font-bold text-foreground">{l.action}</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="font-medium text-foreground">{l.user}</p>
                      <p className="text-[10px] text-muted-foreground">{l.role}</p>
                    </td>
                    <td className="px-5 py-3.5 text-muted-foreground leading-relaxed max-w-md">{l.details}</td>
                    <td className="px-5 py-3.5 font-mono text-[11px] text-muted-foreground">{l.ip}</td>
                    <td className="px-5 py-3.5 text-right text-muted-foreground">{l.time}</td>
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
