"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  MessageSquare,
  Calendar,
  CreditCard,
  FileText,
  BellRing,
  Wifi,
  Battery,
  Signal,
  CheckCircle2,
  QrCode,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Send,
  AlertCircle,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";

type AppScreen = "home" | "maintenance" | "visitors" | "complaints";

export function ResidentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Interactive Smartphone States
  const [activeScreen, setActiveScreen] = useState<AppScreen>("home");
  const [showPaymentSheet, setShowPaymentSheet] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [guestCode, setGuestCode] = useState("842-190");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // 3D tilt coordinates
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // -6 to +6 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCompletePayment = () => {
    setIsPaid(true);
    setTimeout(() => {
      setShowPaymentSheet(false);
    }, 1600);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden py-24 sm:py-32" ref={ref} id="resident-app">
      {/* Ambient Looping Lush Community Greenery & Botanical Gardens Background */}
      <AmbientVideoBg preset="gardens" variant="light" overlayOpacity={0.62} showControls={false} />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-6"
          >
            <SectionHeading
              label="RESIDENT LIVING SUPERAPP"
              title="Give Residents an Effortless"
              titleAccent="Everyday Experience."
              description="One unified mobile app for maintenance payments via UPI, guest pre-approvals, delivery notifications, clubhouse booking, and community governance."
              align="left"
            />

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border/60 hover:border-gold/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">1-Tap UPI Maintenance & GST Invoicing</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Zero convenience fees on native UPI. Computerized GST receipts automatically generated and archived in the resident's digital vault.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border/60 hover:border-gold/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">FastPass Guest Pre-Approvals & Intercom</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Generate WhatsApp QR passes for expected dinner guests or delivery couriers. Auto-lift boom barriers without guard intercom calls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border/60 hover:border-gold/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Photo Ticketing & SLA Tracking</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Capture plumbing leaks or lift faults with camera photos. Track technician dispatch with a live SLA countdown timer.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile App Screen Switcher Pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2.5">
                Interact with the phone mockup by switching screens:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "home" as const, label: "Home Screen" },
                  { key: "maintenance" as const, label: "Maintenance UPI" },
                  { key: "visitors" as const, label: "Visitor Pass" },
                  { key: "complaints" as const, label: "Photo Ticket" },
                ].map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setActiveScreen(s.key)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border",
                      activeScreen === s.key
                        ? "bg-gold text-black border-gold font-semibold shadow-sm"
                        : "bg-surface text-muted-foreground hover:text-foreground border-border/80"
                    )}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Interactive 3D Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative [perspective:1400px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{
                rotateX: tilt.x || 3,
                rotateY: tilt.y || -6,
                y: [0, -8, 0],
              }}
              transition={{
                rotateX: { type: "spring", stiffness: 200, damping: 20 },
                rotateY: { type: "spring", stiffness: 200, damping: 20 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-[320px] h-[670px] bg-background border-[14px] border-[#1C1C1E] rounded-[3.2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden transition-shadow"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#1C1C1E] rounded-b-3xl w-1/2 mx-auto z-40" />

              {/* Screen Content Viewport */}
              <div className="bg-surface w-full h-full p-4 pt-7 overflow-hidden relative flex flex-col justify-between">
                <div>
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-foreground mb-3 opacity-80">
                    <span className="font-semibold ml-2 font-mono">9:41 AM</span>
                    <div className="flex items-center gap-1.5 mr-2">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* App Bar */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div>
                      <h3 className="font-serif font-bold text-base text-foreground">Good Morning 👋</h3>
                      <p className="text-[10px] text-muted-foreground">Priya Sharma • Flat A-402</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gold text-black font-serif font-bold text-xs flex items-center justify-center shadow">
                      PS
                    </div>
                  </div>

                  {/* SCREEN 1: HOME */}
                  {activeScreen === "home" && (
                    <div className="space-y-3">
                      {/* Maintenance Due Card */}
                      <div className="bg-[#1C1C1E] text-white rounded-2xl p-3.5 relative overflow-hidden shadow-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] text-white/70">Maintenance Due (Oct 2025)</p>
                            <h4 className="text-xl font-bold font-serif mt-0.5">
                              {isPaid ? "₹0.00" : "₹4,500.00"}
                            </h4>
                          </div>
                          <span
                            className={cn(
                              "text-[9px] px-2 py-0.5 rounded-full font-medium",
                              isPaid ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-300"
                            )}
                          >
                            {isPaid ? "Paid in Full" : "Due in 3 Days"}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            if (isPaid) setIsPaid(false);
                            else setShowPaymentSheet(true);
                          }}
                          className={cn(
                            "w-full mt-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1 shadow-md",
                            isPaid
                              ? "bg-white/10 hover:bg-white/20 text-white"
                              : "bg-gold hover:bg-gold/90 text-black font-bold"
                          )}
                        >
                          {isPaid ? "View Paid Receipt" : "PAY NOW (1-Tap UPI)"}
                        </button>
                      </div>

                      {/* Quick Actions Grid */}
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { icon: UserPlus, label: "Invite Guest", action: () => setActiveScreen("visitors") },
                          { icon: MessageSquare, label: "Raise Ticket", action: () => setActiveScreen("complaints") },
                          { icon: CreditCard, label: "Pay Dues", action: () => setShowPaymentSheet(true) },
                        ].map((act, i) => (
                          <button
                            key={i}
                            onClick={act.action}
                            className="p-2 bg-background border border-border/60 rounded-xl flex flex-col items-center gap-1 shadow-sm hover:border-gold/40 transition-all text-center"
                          >
                            <div className="w-7 h-7 rounded-lg bg-surface flex items-center justify-center">
                              <act.icon className="w-3.5 h-3.5 text-gold" />
                            </div>
                            <span className="text-[9px] font-medium text-foreground">{act.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Live Gate Pass Notification */}
                      <div className="p-2.5 bg-background border border-border/50 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-foreground">Delivery Arrived</p>
                            <p className="text-[9px] text-muted-foreground">Amazon Logistics • Main Gate</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-muted-foreground">10:24 AM</span>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: MAINTENANCE */}
                  {activeScreen === "maintenance" && (
                    <div className="space-y-3">
                      <div className="p-3 bg-background border border-border/60 rounded-xl space-y-2">
                        <p className="text-[10px] text-muted-foreground">Bill Statement Breakdown</p>
                        <div className="space-y-1 text-[11px]">
                          <div className="flex justify-between">
                            <span>Base Maintenance</span>
                            <span className="font-mono">₹3,500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sinking Fund</span>
                            <span className="font-mono">₹500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GST @ 18%</span>
                            <span className="font-mono">₹500</span>
                          </div>
                          <div className="border-t border-border/60 pt-1 flex justify-between font-bold text-foreground">
                            <span>Total Payable</span>
                            <span className="text-gold font-mono">₹4,500</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => setShowPaymentSheet(true)}
                        className="w-full bg-gold text-black hover:bg-gold/90 text-xs font-bold"
                      >
                        Proceed to 1-Tap UPI
                      </Button>
                    </div>
                  )}

                  {/* SCREEN 3: VISITORS */}
                  {activeScreen === "visitors" && (
                    <div className="space-y-3">
                      <div className="p-4 bg-background border border-border/60 rounded-xl text-center space-y-2">
                        <QrCode className="w-16 h-16 mx-auto text-foreground" />
                        <div>
                          <p className="text-[10px] text-muted-foreground">WhatsApp FastPass</p>
                          <p className="font-mono text-lg font-bold text-gold tracking-widest">{guestCode}</p>
                        </div>
                        <p className="text-[9px] text-muted-foreground leading-tight">
                          Share this pass with your guest. Boom barrier scans and lifts automatically.
                        </p>
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setGuestCode(`${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`);
                        }}
                        className="w-full text-xs h-8"
                      >
                        Regenerate FastPass Code
                      </Button>
                    </div>
                  )}

                  {/* SCREEN 4: COMPLAINTS */}
                  {activeScreen === "complaints" && (
                    <div className="space-y-3">
                      <div className="p-3 bg-background border border-border/60 rounded-xl space-y-2">
                        <p className="text-[11px] font-semibold text-foreground">Raise Maintenance Ticket</p>
                        <div className="p-2 rounded bg-surface text-[10px] text-muted-foreground flex items-center justify-between">
                          <span>Category: Plumbing Leak</span>
                          <span className="text-gold font-medium">Select</span>
                        </div>
                        <div className="p-2.5 rounded bg-surface text-[10px] text-muted-foreground flex items-center gap-2 border border-dashed border-border">
                          <AlertCircle className="w-4 h-4 text-gold" />
                          <span>Attach Photo Proof (Simulated)</span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => {
                          setTicketSubmitted(true);
                          setTimeout(() => setTicketSubmitted(false), 2500);
                        }}
                        className="w-full bg-[#1C1C1E] text-white hover:bg-black/90 text-xs h-8"
                      >
                        Submit Ticket (SLA: 4h)
                      </Button>

                      {ticketSubmitted && (
                        <p className="text-[10px] text-emerald-600 text-center font-medium">
                          ✓ Ticket #TCK-881 dispatched to plumber!
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Simulated UPI Payment Sheet Bottom Modal */}
                <AnimatePresence>
                  {showPaymentSheet && (
                    <motion.div
                      initial={{ y: 200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 200, opacity: 0 }}
                      className="absolute inset-x-0 bottom-0 bg-[#121217] text-white p-4 rounded-t-3xl border-t border-white/20 shadow-2xl z-50 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-white/70">UPI Instant Settlement</span>
                        <button onClick={() => setShowPaymentSheet(false)}>
                          <X className="w-4 h-4 text-white/50 hover:text-white" />
                        </button>
                      </div>

                      <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-white/60">Pay To: Society RWA</p>
                          <p className="text-base font-bold font-serif">₹4,500.00</p>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-none text-[9px]">
                          0% Fee
                        </Badge>
                      </div>

                      {isPaid ? (
                        <div className="text-center py-1 space-y-1">
                          <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto animate-bounce" />
                          <p className="text-xs font-semibold text-emerald-400">Payment Successful!</p>
                          <p className="text-[9px] text-white/60">Receipt #LSO-9821 issued</p>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={handleCompletePayment}
                          className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-xs h-9"
                        >
                          Approve Payment via GPay/PhonePe
                        </Button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-foreground/20 rounded-full mx-auto mt-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResidentSection;
