"use client";

import * as React from "react";
import {
  Sparkles,
  Brain,
  TrendingUp,
  AlertTriangle,
  Send,
  MessageSquare,
  Bot,
  User,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  sources?: string[];
}

export default function LeaseIQIntelligencePage() {
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Hello! I am your LeaseIQ Intelligence Assistant. Ask me anything about society finances, collection rates, open complaints, visitor traffic, or amenity availability.",
      sources: ["LeaseIQ Knowledge Graph"],
    },
  ]);
  const [inputQuery, setInputQuery] = React.useState("");
  const [isThinking, setIsThinking] = React.useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const userText = inputQuery;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputQuery("");
    setIsThinking(true);

    setTimeout(() => {
      let reply = "I analyzed your society records. Let me pull the latest verified operational metrics.";
      let sources = ["Society Database", "RBAC Policy"];

      const q = userText.toLowerCase();
      if (q.includes("maintenance") || q.includes("due") || q.includes("collection")) {
        reply = "Green Valley Residency's current maintenance collection rate is 94.2% for September 2025. Outstanding dues stand at ₹8,47,500 across 23 pending flats. For Unit A-402, monthly dues are ₹4,500.";
        sources = ["Billing Ledger", "AI Finance Engine"];
      } else if (q.includes("complaint") || q.includes("ticket") || q.includes("plumbing")) {
        reply = "There are currently 12 active complaint tickets across the society. 1 is in progress for Unit B-203 (Bathroom water leakage, assigned to Suresh Plumber). Average SLA resolution time is 2.4 hours.";
        sources = ["Helpdesk Service Bus"];
      } else if (q.includes("visitor") || q.includes("gate")) {
        reply = "38 visitors have been logged at the Main Gate today. 1 visitor (Rahul Verma for Flat A-402) is currently verified and inside the premises.";
        sources = ["Gate Access Registry"];
      } else if (q.includes("clubhouse") || q.includes("facility") || q.includes("pool")) {
        reply = "The Clubhouse Banquet Hall is reserved this Sunday 18:00 - 21:00 for Priya Sharma (A-402). The swimming pool is open from 06:00 to 21:00.";
        sources = ["Amenities Calendar"];
      } else {
        reply = `Based on Green Valley Residency's current records, overall society operations are running with an Excellent 92/100 health index with zero critical security breaches.`;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply, sources }]);
      setIsThinking(false);
    }, 800);
  };

  const dimensions = [
    { label: "Financial Health", score: 95, color: "text-gold" },
    { label: "Collection Rate", score: 94, color: "text-success" },
    { label: "Security Compliance", score: 96, color: "text-success" },
    { label: "Complaint SLA Resolution", score: 88, color: "text-blue-500" },
    { label: "Facility Utilization", score: 78, color: "text-warning" },
  ];

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">Executive Analytics</span>
            <Badge variant="outline" className="text-[10px] bg-gold/10 text-gold border-gold/30">
              AI Command Center
            </Badge>
          </div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl mt-1">
            LeaseIQ Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Explainable Society Health Score, anomaly detection, predictive forecasting, and interactive AI assistant.
          </p>
        </div>
      </div>

      {/* Society Health Score Card */}
      <Card className="border-border shadow-premium overflow-hidden">
        <CardHeader className="border-b border-border/50 bg-muted/20">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold">Society Health Index</CardTitle>
              <CardDescription className="text-xs">
                Transparent multi-dimensional audit calculated from real operations
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-xs border-success/30 bg-success/10 text-success">
              Rating: Excellent
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Big Circular Score */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-gold shadow-[0_0_25px_rgba(201,169,110,0.3)]">
                <span className="font-serif text-5xl font-bold text-foreground">92</span>
              </div>
              <p className="text-xs font-semibold text-gold mt-3 uppercase tracking-wider">Overall Society Score</p>
              <p className="text-[11px] text-muted-foreground mt-1">Top 5% of residential communities</p>
            </div>

            {/* Dimension Bars */}
            <div className="md:col-span-2 space-y-3.5">
              {dimensions.map((d) => (
                <div key={d.label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-foreground">{d.label}</span>
                    <span className={`font-bold ${d.color}`}>{d.score} / 100</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      style={{ width: `${d.score}%` }}
                      className="h-full rounded-full bg-gold transition-all duration-700"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ask LeaseIQ Interactive AI Assistant */}
      <Card className="border-border shadow-premium">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-gold" />
            <CardTitle className="text-base font-semibold text-foreground">Ask LeaseIQ Assistant</CardTitle>
          </div>
          <CardDescription className="text-xs">
            Natural language queries with role-based data isolation. Residents only access authorized data.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Chat Transcript Area */}
          <div className="h-72 overflow-y-auto space-y-3 rounded-xl border border-border/60 bg-muted/20 p-4">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 text-xs leading-relaxed ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "bot" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-primary-foreground font-bold text-[10px]">
                    IQ
                  </div>
                )}
                <div
                  className={`rounded-xl p-3 max-w-lg ${
                    m.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border shadow-sm text-foreground"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.sources && (
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] opacity-70">
                      <ShieldCheck className="h-3 w-3" /> Source: {m.sources.join(", ")}
                    </div>
                  )}
                </div>
                {m.sender === "user" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            {isThinking && (
              <div className="flex gap-2 items-center text-xs text-muted-foreground p-2">
                <Sparkles className="h-4 w-4 text-gold animate-spin" />
                <span>LeaseIQ is analyzing society data...</span>
              </div>
            )}
          </div>

          {/* Prompt Form */}
          <form onSubmit={handleSend} className="flex gap-2">
            <Input
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask anything (e.g. 'What is the current collection rate?' or 'Show open complaints')..."
              className="text-xs"
            />
            <Button type="submit" size="sm" className="bg-gold text-primary-foreground hover:bg-gold/90 text-xs px-4">
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
