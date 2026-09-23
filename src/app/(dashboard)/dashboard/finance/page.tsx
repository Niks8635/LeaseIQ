"use client";

import * as React from "react";
import {
  CreditCard,
  Landmark,
  FileText,
  Plus,
  CheckCircle2,
  AlertCircle,
  Download,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/utils";

interface Bill {
  id: number;
  unit: string;
  resident: string;
  month: string;
  amount: number;
  dueDate: string;
  status: "PAID" | "PENDING" | "OVERDUE";
}

export default function FinanceDashboardPage() {
  const [bills, setBills] = React.useState<Bill[]>([
    { id: 1, unit: "A-402", resident: "Priya Sharma", month: "September 2025", amount: 4500, dueDate: "2025-09-25", status: "PENDING" },
    { id: 2, unit: "A-101", resident: "Anil Kapoor", month: "September 2025", amount: 4500, dueDate: "2025-09-15", status: "PAID" },
    { id: 3, unit: "B-201", resident: "Sunita Rao", month: "September 2025", amount: 5200, dueDate: "2025-09-10", status: "OVERDUE" },
    { id: 4, unit: "B-304", resident: "Vikram Singh", month: "September 2025", amount: 4500, dueDate: "2025-09-12", status: "PAID" },
    { id: 5, unit: "C-101", resident: "Meera Patel", month: "September 2025", amount: 5000, dueDate: "2025-09-25", status: "PENDING" },
  ]);

  const [selectedBill, setSelectedBill] = React.useState<Bill | null>(null);
  const [payModalOpen, setPayModalOpen] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const totalBilled = bills.reduce((acc, b) => acc + b.amount, 0);
  const totalCollected = bills.filter((b) => b.status === "PAID").reduce((acc, b) => acc + b.amount, 0);
  const pendingDues = totalBilled - totalCollected;
  const collectionRate = ((totalCollected / totalBilled) * 100).toFixed(1);

  const handleOpenPayment = (bill: Bill) => {
    setSelectedBill(bill);
    setPaymentSuccess(false);
    setPayModalOpen(true);
  };

  const handleConfirmPayment = () => {
    if (!selectedBill) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setBills((prev) =>
        prev.map((b) => (b.id === selectedBill.id ? { ...b, status: "PAID" } : b))
      );
    }, 1200);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Finance & Maintenance Billing
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Automated billing, collections, receipt verification, and expense management.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs gap-1.5">
            <Download className="h-3.5 w-3.5" /> Export Ledger
          </Button>
          <Button size="sm" className="bg-gold text-primary-foreground hover:bg-gold/90 text-xs gap-1.5">
            <Plus className="h-3.5 w-3.5" /> Generate Monthly Bills
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Total Billed</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{formatCurrency(totalBilled)}</p>
            <p className="text-xs text-muted-foreground mt-1">{bills.length} active invoices</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Total Collected</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-success">{formatCurrency(totalCollected)}</p>
            <p className="text-xs text-success mt-1">Collection Rate: {collectionRate}%</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Outstanding Dues</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-destructive">{formatCurrency(pendingDues)}</p>
            <p className="text-xs text-muted-foreground mt-1">Across pending units</p>
          </CardContent>
        </Card>

        <Card className="border-border shadow-premium">
          <CardContent className="p-5">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Monthly Expenses</p>
            <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{formatCurrency(170000)}</p>
            <p className="text-xs text-muted-foreground mt-1">Security, Cleaning & Lifts</p>
          </CardContent>
        </Card>
      </div>

      {/* Bills Table */}
      <Card className="border-border shadow-premium">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <div>
            <CardTitle className="text-base font-semibold">Maintenance Invoices</CardTitle>
            <CardDescription className="text-xs">September 2025 billing cycle</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs gap-1.5 h-8">
              <Filter className="h-3.5 w-3.5" /> Filter by Status
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-muted/40 uppercase tracking-wider text-[10px] text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-semibold">Unit</th>
                  <th className="px-5 py-3 font-semibold">Resident</th>
                  <th className="px-5 py-3 font-semibold">Billing Period</th>
                  <th className="px-5 py-3 font-semibold">Amount</th>
                  <th className="px-5 py-3 font-semibold">Due Date</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {bills.map((b) => (
                  <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-foreground">{b.unit}</td>
                    <td className="px-5 py-3.5 text-foreground">{b.resident}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{b.month}</td>
                    <td className="px-5 py-3.5 font-semibold text-foreground">{formatCurrency(b.amount)}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{b.dueDate}</td>
                    <td className="px-5 py-3.5">
                      <Badge
                        variant="outline"
                        className={
                          b.status === "PAID"
                            ? "border-success/30 bg-success/10 text-success text-[10px]"
                            : b.status === "OVERDUE"
                            ? "border-destructive/30 bg-destructive/10 text-destructive text-[10px]"
                            : "border-warning/30 bg-warning/10 text-warning text-[10px]"
                        }
                      >
                        {b.status}
                      </Badge>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      {b.status === "PAID" ? (
                        <span className="text-[11px] text-muted-foreground">Receipt Issued</span>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleOpenPayment(b)}
                          className="h-7 text-xs border-gold/30 hover:bg-gold/10 text-gold"
                        >
                          Record Payment
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Modal */}
      <Dialog open={payModalOpen} onOpenChange={setPayModalOpen}>
        <DialogContent className="max-w-md border-border bg-popover">
          <DialogHeader>
            <DialogTitle>Record Maintenance Payment</DialogTitle>
            <DialogDescription className="text-xs">
              Process payment for Unit {selectedBill?.unit} ({selectedBill?.resident})
            </DialogDescription>
          </DialogHeader>

          {paymentSuccess ? (
            <div className="py-6 text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-base text-foreground">Payment Recorded Successfully</h3>
              <p className="text-xs text-muted-foreground">
                Receipt #RCP-202509-{selectedBill?.id.toString().padStart(4, "0")} generated and ledger updated.
              </p>
              <Button size="sm" onClick={() => setPayModalOpen(false)} className="mt-4">
                Done
              </Button>
            </div>
          ) : (
            <div className="space-y-4 pt-2">
              <div className="rounded-lg bg-muted/40 p-3 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Outstanding Amount:</span>
                  <span className="font-bold text-foreground">{formatCurrency(selectedBill?.amount || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="text-foreground">{selectedBill?.dueDate}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="method" className="text-xs">Payment Method</Label>
                <Input id="method" defaultValue="UPI Instant Transfer" disabled />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="txRef" className="text-xs">Transaction Reference</Label>
                <Input id="txRef" defaultValue={`TXN-GVR-${Date.now().toString().slice(-6)}`} />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <Button variant="ghost" size="sm" onClick={() => setPayModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleConfirmPayment}
                  disabled={isProcessing}
                  className="bg-gold text-primary-foreground hover:bg-gold/90 text-xs"
                >
                  {isProcessing ? "Verifying..." : "Confirm Payment"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
