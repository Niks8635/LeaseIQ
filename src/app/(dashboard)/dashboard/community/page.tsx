"use client";

import * as React from "react";
import {
  MessageSquare,
  Pin,
  Calendar,
  Vote,
  CheckCircle2,
  Users,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Poll {
  id: number;
  question: string;
  totalVotes: number;
  hasVoted: boolean;
  options: { id: number; text: string; votes: number }[];
}

export default function CommunityPage() {
  const [polls, setPolls] = React.useState<Poll[]>([
    {
      id: 1,
      question: "Should we install dual-gun AC fast EV charging stations in Basement 2?",
      totalVotes: 64,
      hasVoted: false,
      options: [
        { id: 1, text: "Yes, approve installation", votes: 42 },
        { id: 2, text: "No, defer to next AGM", votes: 8 },
        { id: 3, text: "Need more cost estimates", votes: 14 },
      ],
    },
  ]);

  const handleVote = (pollId: number, optionId: number) => {
    setPolls((prev) =>
      prev.map((p) => {
        if (p.id !== pollId || p.hasVoted) return p;
        return {
          ...p,
          hasVoted: true,
          totalVotes: p.totalVotes + 1,
          options: p.options.map((o) =>
            o.id === optionId ? { ...o, votes: o.votes + 1 } : o
          ),
        };
      })
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Community & Resident Communications
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Official announcements, participatory voting polls, and community event coordination.
          </p>
        </div>
        <Button size="sm" className="bg-primary text-primary-foreground text-xs gap-1.5">
          <Plus className="h-3.5 w-3.5" /> Publish Announcement
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left 2 Cols: Notices & Announcements */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <Pin className="h-4 w-4 text-gold" /> Official Notices
          </h2>

          <Card className="border-gold/30 bg-gold/5 shadow-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] bg-gold/10 text-gold border-gold/30">
                  PINNED • CRITICAL
                </Badge>
                <span className="text-[10px] text-muted-foreground">14 Sep 2025</span>
              </div>
              <CardTitle className="text-base font-semibold text-foreground mt-2">
                Quarterly Society AGM & Financial Budget Review
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              <p>
                The General Body Meeting will be held this Sunday at 10:30 AM in the Clubhouse Banquet Hall.
                Agenda includes the FY 2025-26 audited accounts, solar panel rooftop installation proposal,
                and vendor security contract renewal.
              </p>
              <div className="pt-3 flex items-center gap-4 text-xs font-medium text-foreground">
                <span>Location: <strong>Clubhouse Hall</strong></span>
                <span>Quorum: <strong>50+ Units</strong></span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-premium">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] text-muted-foreground">
                  MAINTENANCE
                </Badge>
                <span className="text-[10px] text-muted-foreground">Yesterday</span>
              </div>
              <CardTitle className="text-base font-semibold text-foreground mt-2">
                Elevator Routine Lubrication & Safety Certification
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground leading-relaxed">
              <p>
                LiftCare engineers will service Tower B lifts tomorrow between 14:00 and 17:00.
                Only one passenger lift will remain operational during maintenance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right 1 Col: Live Polls */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <Vote className="h-4 w-4 text-blue-500" /> Active Community Poll
          </h2>

          {polls.map((p) => (
            <Card key={p.id} className="border-border shadow-premium">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-foreground leading-snug">
                  {p.question}
                </CardTitle>
                <CardDescription className="text-[11px]">
                  {p.totalVotes} total verified votes cast
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {p.options.map((opt) => {
                  const pct = p.totalVotes > 0 ? Math.round((opt.votes / p.totalVotes) * 100) : 0;
                  return (
                    <div key={opt.id} className="space-y-1">
                      <button
                        type="button"
                        onClick={() => handleVote(p.id, opt.id)}
                        disabled={p.hasVoted}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all flex items-center justify-between ${
                          p.hasVoted
                            ? "border-border/60 bg-muted/20"
                            : "border-border hover:border-gold/30 hover:bg-muted/30 cursor-pointer"
                        }`}
                      >
                        <span className="font-medium text-foreground">{opt.text}</span>
                        {p.hasVoted && (
                          <span className="text-[11px] font-bold text-gold">{pct}%</span>
                        )}
                      </button>

                      {p.hasVoted && (
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            style={{ width: `${pct}%` }}
                            className="h-full rounded-full bg-gold transition-all duration-500"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}

                {p.hasVoted && (
                  <p className="text-[11px] text-success flex items-center gap-1 pt-2">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Your vote has been recorded on-chain.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
