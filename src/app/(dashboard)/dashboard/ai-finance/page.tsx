"use client";

import * as React from "react";
import {
  Brain,
  CheckCircle2,
  AlertTriangle,
  FileSearch,
  CopyX,
  UploadCloud,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";

interface ReconciliationItem {
  id: number;
  narration: string;
  amount: number;
  date: string;
  unit: string;
  resident: string;
  confidence: number;
  explanation: string;
  status: "MATCHED" | "CONFIRMED" | "POSSIBLE_MATCH";
}

export default function AIFinanceHubPage() {
  const [matches, setMatches] = React.useState<ReconciliationItem[]>([
    {
      id: 1,
      narration: "NEFT-AXIS-A402-PRIYA SHARMA-MAINTENANCE",
      amount: 4500,
      date: "2025-09-11",
      unit: "A-402",
      resident: "Priya Sharma",
      confidence: 0.98,
      explanation: "Exact amount ₹4,500 and Unit A-402 identified in bank narration.",
      status: "MATCHED",
    },
    {
      id: 2,
      narration: "UPI-9820011111-FLAT A101-MAINT",
      amount: 4500,
      date: "2025-09-10",
      unit: "A-101",
      resident: "Anil Kapoor",
      confidence: 0.98,
      explanation: "Exact match for bill #BILL-2025-0002 and Unit A-101.",
      status: "MATCHED",
    },
    {
      id: 3,
      narration: "RTGS-SUNITA RAO PART PAYMENT B201",
      amount: 3000,
      date: "2025-09-09",
      unit: "B-201",
      resident: "Sunita Rao",
      confidence: 0.75,
      explanation: "Resident matched, but amount ₹3,000 differs from monthly bill of ₹5,200.",
      status: "POSSIBLE_MATCH",
    },
  ]);

  const handleConfirmMatch = (id: number) => {
    setMatches((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "CONFIRMED" } : m))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Intelligent Automation</span>
            <Badge variant="outline" className="text-[10px] bg-gold/10 text-gold border-gold/30">
              AI Powered
            </Badge>
          </div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl mt-1">
            AI Finance Hub
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Intelligent bank reconciliation, automated invoice extraction, and duplicate payment detection.
          </p>
        </div>
      </div>

      <Tabs defaultValue="reconciliation" className="space-y-6">
        <TabsList className="bg-muted border border-border p-1">
          <TabsTrigger value="reconciliation" className="text-xs gap-1.5">
            <Brain className="h-3.5 w-3.5 text-gold" /> Bank Reconciliation
          </TabsTrigger>
          <TabsTrigger value="extraction" className="text-xs gap-1.5">
            <FileSearch className="h-3.5 w-3.5 text-blue-500" /> Invoice Intelligence
          </TabsTrigger>
          <TabsTrigger value="duplicates" className="text-xs gap-1.5">
            <CopyX className="h-3.5 w-3.5 text-warning" /> Duplicate Detection
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Bank Reconciliation */}
        <TabsContent value="reconciliation" className="space-y-4">
          <Card className="border-border shadow-premium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-semibold">AI Bank Reconciliation Engine</CardTitle>
                  <CardDescription className="text-xs">
                    Matches bank transactions with open society maintenance bills using semantic entity recognition.
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-xs border-success/30 bg-success/10 text-success">
                  98% Average Confidence
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {matches.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border bg-card p-4 transition-all hover:border-gold/30 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-foreground">
                          {item.narration}
                        </span>
                        <Badge
                          variant="outline"
                          className={
                            item.status === "CONFIRMED"
                              ? "bg-success/10 text-success border-success/30 text-[10px]"
                              : item.status === "MATCHED"
                              ? "bg-blue-500/10 text-blue-500 border-blue-500/30 text-[10px]"
                              : "bg-warning/10 text-warning border-warning/30 text-[10px]"
                          }
                        >
                          {item.status} ({Math.round(item.confidence * 100)}%)
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.explanation}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-foreground font-medium pt-1">
                        <span>Matched Unit: <strong className="text-gold">{item.unit}</strong></span>
                        <span>Resident: <strong>{item.resident}</strong></span>
                        <span>Date: {item.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:flex-col md:items-end gap-2 shrink-0">
                      <p className="text-base font-bold text-foreground">{formatCurrency(item.amount)}</p>
                      {item.status === "CONFIRMED" ? (
                        <span className="text-xs text-success flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" /> Reconciled
                        </span>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handleConfirmMatch(item.id)}
                          className="bg-gold text-primary-foreground hover:bg-gold/90 text-xs gap-1 h-7"
                        >
                          <Check className="h-3.5 w-3.5" /> Confirm Match
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Invoice Intelligence */}
        <TabsContent value="extraction" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border shadow-premium">
              <CardHeader>
                <CardTitle className="text-base font-semibold">Upload Vendor Invoice</CardTitle>
                <CardDescription className="text-xs">
                  AI extracts vendor, invoice number, GST, line items, and due dates automatically.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-gold/40 transition-colors cursor-pointer bg-muted/20">
                  <UploadCloud className="h-10 w-10 text-gold mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">Upload Vendor Invoice (PDF / Image)</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Drag and drop or click to test simulated AI optical field extraction
                  </p>
                </div>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Supported formats: PDF, PNG, JPG</span>
                  <span>Confidence threshold: 90%</span>
                </div>
              </CardContent>
            </Card>

            {/* Extracted Fields Card */}
            <Card className="border-border shadow-premium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold">Extracted Entity Fields</CardTitle>
                  <Badge variant="outline" className="text-[10px] bg-success/10 text-success border-success/30">
                    95% Confidence
                  </Badge>
                </div>
                <CardDescription className="text-xs">Live structured representation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Vendor Name:</span>
                  <span className="font-semibold text-foreground">ABC Security Services Pvt Ltd</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Invoice Number:</span>
                  <span className="font-mono font-medium text-foreground">INV-2025-089</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">GST Registration:</span>
                  <span className="font-mono text-foreground">27AAACA1234A1Z5 (18%)</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Total Invoice Amount:</span>
                  <span className="font-bold text-base text-foreground">{formatCurrency(125000)}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Payment Due Date:</span>
                  <span className="text-foreground">30 Sep 2025</span>
                </div>
                <Button size="sm" className="w-full bg-primary text-primary-foreground text-xs mt-3">
                  Approve for Ledger Entry
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 3: Duplicate Invoice Detection */}
        <TabsContent value="duplicates" className="space-y-4">
          <Card className="border-warning/30 bg-warning/5 shadow-premium">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <CardTitle className="text-base font-semibold text-foreground">Duplicate Invoice Warning</CardTitle>
              </div>
              <CardDescription className="text-xs">
                The AI anomaly detection engine identified potential duplicate billing submitted by vendor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border bg-card space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">Existing Invoice #INV-2025-089</span>
                    <Badge variant="outline" className="text-[10px] text-success">PAID</Badge>
                  </div>
                  <p className="text-muted-foreground">Vendor: ABC Security Services</p>
                  <p className="font-bold text-foreground text-sm">{formatCurrency(125000)}</p>
                  <p className="text-[10px] text-muted-foreground">Dated: 01 Sep 2025</p>
                </div>

                <div className="p-4 rounded-xl border border-warning/40 bg-warning/10 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">Flagged Duplicate #INV-2025-089-DUP</span>
                    <Badge variant="destructive" className="text-[10px]">SUSPECTED</Badge>
                  </div>
                  <p className="text-muted-foreground">Vendor: ABC Security Services</p>
                  <p className="font-bold text-foreground text-sm">{formatCurrency(125000)}</p>
                  <p className="text-[10px] text-destructive">Similarity Score: 98% (Same amount, category & line items)</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button size="sm" variant="outline" className="text-xs border-destructive text-destructive">
                  Reject Duplicate
                </Button>
                <Button size="sm" variant="ghost" className="text-xs">
                  Review Manually
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
