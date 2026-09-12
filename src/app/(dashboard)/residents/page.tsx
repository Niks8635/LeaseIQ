"use client";

import * as React from "react";
import {
  Users,
  Search,
  Filter,
  Plus,
  Building,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface ResidentRecord {
  id: number;
  unit: string;
  tower: string;
  name: string;
  phone: string;
  email: string;
  type: "OWNER" | "TENANT";
  familyCount: number;
  vehicles: string;
}

export default function ResidentsDirectoryPage() {
  const [residents, setResidents] = React.useState<ResidentRecord[]>([
    { id: 1, unit: "A-402", tower: "Tower A", name: "Priya Sharma", phone: "+91 98200 44444", email: "resident@leaseiq.in", type: "OWNER", familyCount: 2, vehicles: "1 Car, 1 Two-wheeler" },
    { id: 2, unit: "A-101", tower: "Tower A", name: "Anil Kapoor", phone: "+91 98200 12345", email: "anil.k@gmail.com", type: "OWNER", familyCount: 3, vehicles: "1 Car" },
    { id: 3, unit: "B-201", tower: "Tower B", name: "Sunita Rao", phone: "+91 98200 23456", email: "sunita.rao@outlook.com", type: "TENANT", familyCount: 1, vehicles: "1 Car" },
    { id: 4, unit: "B-304", tower: "Tower B", name: "Vikram Singh", phone: "+91 98200 34567", email: "vikram.singh@yahoo.com", type: "OWNER", familyCount: 4, vehicles: "2 Cars" },
    { id: 5, unit: "C-101", tower: "Tower C", name: "Meera Patel", phone: "+91 98200 56789", email: "meera.patel@gmail.com", type: "OWNER", familyCount: 2, vehicles: "1 Car" },
    { id: 6, unit: "C-204", tower: "Tower C", name: "Rahul Verma", phone: "+91 98200 67890", email: "rahul.v@gmail.com", type: "TENANT", familyCount: 2, vehicles: "1 Two-wheeler" },
  ]);

  const [towerFilter, setTowerFilter] = React.useState("ALL");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  const filtered = residents.filter((r) => {
    const matchesTower = towerFilter === "ALL" || r.tower === towerFilter;
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.unit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.phone.includes(searchQuery);
    return matchesTower && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Residents & Units Directory
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Flat assignments, occupancy registers, family members, and vehicle passes.
          </p>
        </div>
        <Button size="sm" onClick={() => setAddModalOpen(true)} className="bg-primary text-primary-foreground text-xs gap-1.5">
          <Plus className="h-3.5 w-3.5" /> Onboard Resident
        </Button>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-72">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, flat (e.g. A-402)..."
            className="h-8 text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          {["ALL", "Tower A", "Tower B", "Tower C"].map((t) => (
            <Button
              key={t}
              size="sm"
              variant={towerFilter === t ? "default" : "outline"}
              onClick={() => setTowerFilter(t)}
              className="h-7 text-xs"
            >
              {t === "ALL" ? "All Towers" : t}
            </Button>
          ))}
        </div>
      </div>

      {/* Directory Table */}
      <Card className="border-border shadow-premium">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/40 uppercase tracking-wider text-[10px] text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Unit</th>
                  <th className="px-5 py-3 font-semibold">Resident Name</th>
                  <th className="px-5 py-3 font-semibold">Type</th>
                  <th className="px-5 py-3 font-semibold">Mobile</th>
                  <th className="px-5 py-3 font-semibold">Family</th>
                  <th className="px-5 py-3 font-semibold">Vehicles</th>
                  <th className="px-5 py-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-foreground">
                      {r.unit} <span className="text-[10px] text-muted-foreground font-normal">({r.tower})</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <p className="font-semibold text-foreground">{r.name}</p>
                      <p className="text-[10px] text-muted-foreground">{r.email}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <Badge
                        variant="outline"
                        className={
                          r.type === "OWNER"
                            ? "bg-gold/10 text-gold border-gold/30 text-[10px]"
                            : "bg-blue-500/10 text-blue-500 border-blue-500/30 text-[10px]"
                        }
                      >
                        {r.type}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5 font-mono text-muted-foreground">{r.phone}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{r.familyCount} Members</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{r.vehicles}</td>
                    <td className="px-5 py-3.5 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] text-success">
                        <span className="h-1.5 w-1.5 rounded-full bg-success" /> Active
                      </span>
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
