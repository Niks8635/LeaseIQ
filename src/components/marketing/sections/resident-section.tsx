"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  MessageSquare,
  CreditCard,
  Wifi,
  Battery,
  Signal,
  CheckCircle2,
  QrCode,
  X,
  Sparkles,
  ShieldCheck,
  AlertCircle,
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
    <section className="section-padding bg-[#040D1A] relative overflow-hidden py-24 sm:py-32 text-white" ref={ref} id="resident-app">
      {/* Ambient Video Background */}
      <AmbientVideoBg preset="gardens" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Subtle glow orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

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
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A1B30]/75 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] backdrop-blur-xl transition-all card-glow">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">1-Tap UPI Maintenance & GST Invoicing</h4>
                  <p className="text-xs text-[#7E97B8] mt-1 leading-relaxed">
                    Zero convenience fees on native UPI. Computerized GST receipts automatically generated and archived in the resident's digital vault.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A1B30]/75 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] backdrop-blur-xl transition-all card-glow">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">FastPass Guest Pre-Approvals & Intercom</h4>
                  <p className="text-xs text-[#7E97B8] mt-1 leading-relaxed">
                    Generate WhatsApp QR passes for expected dinner guests or delivery couriers. Auto-lift boom barriers without guard intercom calls.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A1B30]/75 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] backdrop-blur-xl transition-all card-glow">
                <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">Photo Ticketing & SLA Tracking</h4>
                  <p className="text-xs text-[#7E97B8] mt-1 leading-relaxed">
                    Capture plumbing leaks or lift faults with camera photos. Track technician dispatch with a live SLA countdown timer.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile App Screen Switcher Pills */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#7E97B8] mb-2.5">
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
                      "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border cursor-pointer",
                      activeScreen === s.key
                        ? "bg-[#00F5D4] text-[#040D1A] border-[#00F5D4] font-semibold shadow-[0_0_15px_rgba(0,245,212,0.35)]"
                        : "bg-[#0A1B30] text-[#7E97B8] hover:text-white border-[rgba(0,245,212,0.15)] hover:border-[rgba(0,245,212,0.3)]"
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
              className="relative w-[320px] h-[670px] bg-[#020810] border-[12px] border-[#061220] rounded-[3.2rem] ring-1 ring-[rgba(0,245,212,0.2)] shadow-[0_25px_60px_-15px_rgba(0,245,212,0.15)] overflow-hidden transition-shadow"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-[#061220] rounded-b-3xl w-1/2 mx-auto z-40 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black/60 mr-2" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>

              {/* Screen Content Viewport */}
              <div className="bg-[#040D1A] w-full h-full p-4 pt-7 overflow-hidden relative flex flex-col justify-between text-white">
                <div>
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-[#7E97B8] mb-3 opacity-90">
                    <span className="font-semibold ml-2 font-mono text-white">9:41 AM</span>
                    <div className="flex items-center gap-1.5 mr-2">
                      <Signal className="w-3 h-3 text-white" />
                      <Wifi className="w-3 h-3 text-white" />
                      <Battery className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* App Bar */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div>
                      <h3 className="font-semibold text-base text-white">Good Morning 👋</h3>
                      <p className="text-[10px] text-[#7E97B8]">Priya Sharma • Flat A-402</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00F5D4] to-[#3B82F6] text-[#040D1A] font-bold text-xs flex items-center justify-center shadow">
                      PS
                    </div>
                  </div>

                  {/* SCREEN 1: HOME */}
                  {activeScreen === "home" && (
                    <div className="space-y-3">
                      {/* Maintenance Due Card */}
                      <div className="bg-[#0A1B30] border border-[rgba(0,245,212,0.2)] text-white rounded-2xl p-3.5 relative overflow-hidden shadow-lg card-accent-line">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] text-[#7E97B8]">Maintenance Due (Oct 2025)</p>
                            <h4 className="text-xl font-bold mt-0.5 text-white">
                              {isPaid ? "₹0.00" : "₹4,500.00"}
                            </h4>
                          </div>
                          <span
                            className={cn(
                              "text-[9px] px-2 py-0.5 rounded-full font-medium border",
                              isPaid
                                ? "bg-[#00F5D4]/15 text-[#00F5D4] border-[#00F5D4]/30"
                                : "bg-amber-500/15 text-amber-300 border-amber-500/30"
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
                            "w-full mt-2.5 py-1.5 rounded-xl text-[11px] font-semibold transition-all flex items-center justify-center gap-1 shadow-md cursor-pointer",
                            isPaid
                              ? "bg-white/10 hover:bg-white/20 text-white"
                              : "bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)]"
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
                            className="p-2 bg-[#061220] border border-[rgba(0,245,212,0.12)] rounded-xl flex flex-col items-center gap-1 shadow-sm hover:border-[#00F5D4] transition-all text-center cursor-pointer"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#0A1B30] flex items-center justify-center">
                              <act.icon className="w-3.5 h-3.5 text-[#00F5D4]" />
                            </div>
                            <span className="text-[9px] font-medium text-white">{act.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Live Gate Pass Notification */}
                      <div className="p-2.5 bg-[#061220] border border-[rgba(0,245,212,0.1)] rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#00F5D4]/10 text-[#00F5D4] flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-white">Delivery Arrived</p>
                            <p className="text-[9px] text-[#7E97B8]">Amazon Logistics • Main Gate</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-[#7E97B8]">10:24 AM</span>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: MAINTENANCE */}
                  {activeScreen === "maintenance" && (
                    <div className="space-y-3">
                      <div className="p-3 bg-[#061220] border border-[rgba(0,245,212,0.14)] rounded-xl space-y-2">
                        <p className="text-[10px] text-[#7E97B8]">Bill Statement Breakdown</p>
                        <div className="space-y-1 text-[11px]">
                          <div className="flex justify-between text-[#7E97B8]">
                            <span>Base Maintenance</span>
                            <span className="font-mono text-white">₹3,500</span>
                          </div>
                          <div className="flex justify-between text-[#7E97B8]">
                            <span>Sinking Fund</span>
                            <span className="font-mono text-white">₹500</span>
                          </div>
                          <div className="flex justify-between text-[#7E97B8]">
                            <span>GST @ 18%</span>
                            <span className="font-mono text-white">₹500</span>
                          </div>
                          <div className="border-t border-[rgba(0,245,212,0.15)] pt-1 flex justify-between font-bold text-white">
                            <span>Total Payable</span>
                            <span className="text-[#00F5D4] font-mono">₹4,500</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => setShowPaymentSheet(true)}
                        className="w-full bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 text-xs font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] cursor-pointer"
                      >
                        Proceed to 1-Tap UPI
                      </Button>
                    </div>
                  )}

                  {/* SCREEN 3: VISITORS */}
                  {activeScreen === "visitors" && (
                    <div className="space-y-3">
                      <div className="p-4 bg-[#061220] border border-[rgba(0,245,212,0.14)] rounded-xl text-center space-y-2">
                        <div className="p-2 bg-white rounded-lg inline-block">
                          <QrCode className="w-14 h-14 text-black" />
                        </div>
                        <div>
                          <p className="text-[10px] text-[#7E97B8]">WhatsApp FastPass</p>
                          <p className="font-mono text-lg font-bold text-[#00F5D4] tracking-widest">{guestCode}</p>
                        </div>
                        <p className="text-[9px] text-[#7E97B8] leading-tight">
                          Share this pass with your guest. Boom barrier scans and lifts automatically.
                        </p>
                      </div>

                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setGuestCode(`${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`);
                        }}
                        className="w-full text-xs h-8 border-[rgba(0,245,212,0.2)] bg-[#0A1B30] text-white hover:text-[#00F5D4] cursor-pointer"
                      >
                        Regenerate FastPass Code
                      </Button>
                    </div>
                  )}

                  {/* SCREEN 4: COMPLAINTS */}
                  {activeScreen === "complaints" && (
                    <div className="space-y-3">
                      <div className="p-3 bg-[#061220] border border-[rgba(0,245,212,0.14)] rounded-xl space-y-2">
                        <p className="text-[11px] font-semibold text-white">Raise Maintenance Ticket</p>
                        <div className="p-2 rounded bg-[#0A1B30] text-[10px] text-[#7E97B8] flex items-center justify-between">
                          <span>Category: Plumbing Leak</span>
                          <span className="text-[#00F5D4] font-medium">Select</span>
                        </div>
                        <div className="p-2.5 rounded bg-[#0A1B30] text-[10px] text-[#7E97B8] flex items-center gap-2 border border-dashed border-[rgba(0,245,212,0.2)]">
                          <AlertCircle className="w-4 h-4 text-[#00F5D4]" />
                          <span>Attach Photo Proof (Simulated)</span>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() => {
                          setTicketSubmitted(true);
                          setTimeout(() => setTicketSubmitted(false), 2500);
                        }}
                        className="w-full bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 text-xs font-semibold h-8 cursor-pointer shadow-[0_0_15px_rgba(0,245,212,0.25)]"
                      >
                        Submit Ticket (SLA: 4h)
                      </Button>

                      {ticketSubmitted && (
                        <p className="text-[10px] text-[#00F5D4] text-center font-medium">
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
                      className="absolute inset-x-0 bottom-0 bg-[#061220] text-white p-4 rounded-t-3xl border-t border-[rgba(0,245,212,0.25)] shadow-2xl z-50 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#7E97B8]">UPI Instant Settlement</span>
                        <button onClick={() => setShowPaymentSheet(false)} className="cursor-pointer">
                          <X className="w-4 h-4 text-[#7E97B8] hover:text-white" />
                        </button>
                      </div>

                      <div className="p-2.5 bg-[#0A1B30] rounded-xl border border-[rgba(0,245,212,0.15)] flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-[#7E97B8]">Pay To: Society RWA</p>
                          <p className="text-base font-bold text-white">₹4,500.00</p>
                        </div>
                        <Badge className="bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/30 text-[9px]">
                          0% Fee
                        </Badge>
                      </div>

                      {isPaid ? (
                        <div className="text-center py-1 space-y-1">
                          <CheckCircle2 className="w-6 h-6 text-[#00F5D4] mx-auto animate-bounce" />
                          <p className="text-xs font-semibold text-[#00F5D4]">Payment Successful!</p>
                          <p className="text-[9px] text-[#7E97B8]">Receipt #LSO-9821 issued</p>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={handleCompletePayment}
                          className="w-full bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-[#040D1A] font-semibold text-xs h-9 shadow-[0_0_15px_rgba(0,245,212,0.3)] cursor-pointer"
                        >
                          Approve Payment via GPay/PhonePe
                        </Button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResidentSection;
