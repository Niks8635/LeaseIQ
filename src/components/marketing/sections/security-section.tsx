"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Package,
  AlertTriangle,
  UserCheck,
  Bell,
  Check,
  DoorOpen,
  Car,
  Camera,
  Smartphone,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";

const steps = [
  { icon: UserCheck, label: "Visitor Arrives", desc: "Vehicle or pedestrian at gate" },
  { icon: Camera, label: "Optical ANPR Scan", desc: "License plate & QR read" },
  { icon: Bell, label: "Resident Alerted", desc: "Instant mobile push notification" },
  { icon: Check, label: "Digital Approval", desc: "1-Tap authorize or decline" },
  { icon: DoorOpen, label: "Barrier Automated", desc: "Boom barrier lifts, visit logged" },
];

const features = [
  {
    icon: Shield,
    title: "FastPass & ANPR Cameras",
    description: "Automatic high-speed license plate recognition for registered resident vehicles with sub-second boom barrier lift.",
  },
  {
    icon: Package,
    title: "Secure Delivery Staging",
    description: "Digital PIN verification and parcel drop staging at clubhouse with instant photo proof sent to residents.",
  },
  {
    icon: AlertTriangle,
    title: "Community Panic & SOS",
    description: "One-tap emergency alarm on resident and guard devices instantly dispatching gate security to specific unit coordinates.",
  },
];

export function SecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Interactive Smart Gate Simulation State
  const [gateMode, setGateMode] = useState<"resident" | "visitor">("resident");
  const [isSimulating, setIsSimulating] = useState(false);
  const [gateStage, setGateStage] = useState<"idle" | "scanning" | "alerting" | "approved" | "opened">("opened");

  const runSimulation = (mode: "resident" | "visitor") => {
    setGateMode(mode);
    setIsSimulating(true);
    setGateStage("scanning");

    setTimeout(() => {
      setGateStage("alerting");
    }, 1200);

    setTimeout(() => {
      setGateStage("approved");
    }, 2400);

    setTimeout(() => {
      setGateStage("opened");
      setIsSimulating(false);
    }, 3600);
  };

  return (
    <section className="section-padding bg-[#040D1A] relative overflow-hidden text-white" ref={ref}>
      {/* Ambient Gate Surveillance Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="security" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Subtle background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="SMART GATE & PERIMETER SECURITY"
          title="A Safer, Smarter Community"
          titleAccent="Starts at the Gate."
          description="Automated boom barriers, ANPR license plate recognition, digital guard tablets, and seamless resident mobile intercoms."
          align="center"
          className="mb-14"
        />

        {/* Interactive Live Smart Gate & Boom Barrier Simulation Frame */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="rounded-3xl border border-[rgba(0,245,212,0.18)] bg-[#0A1B30]/85 backdrop-blur-xl shadow-2xl overflow-hidden relative z-10 card-accent-line">
            {/* Simulation Header / Mode Switcher */}
            <div className="px-6 py-4 bg-[#061220]/90 border-b border-[rgba(0,245,212,0.12)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F5D4]" />
                </span>
                <span className="text-xs font-semibold text-white tracking-wide uppercase">
                  Live Gate Simulator • North Entry Gate 01
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => runSimulation("resident")}
                  disabled={isSimulating}
                  className={cn(
                    "text-xs px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                    gateMode === "resident"
                      ? "bg-[#00F5D4] text-[#040D1A] font-semibold shadow-[0_0_15px_rgba(0,245,212,0.4)]"
                      : "bg-[#0A1B30] text-[#7E97B8] hover:text-white border border-[rgba(0,245,212,0.15)] hover:border-[rgba(0,245,212,0.3)]"
                  )}
                >
                  <Car className="w-3.5 h-3.5" /> Resident Vehicle (ANPR)
                </button>
                <button
                  onClick={() => runSimulation("visitor")}
                  disabled={isSimulating}
                  className={cn(
                    "text-xs px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                    gateMode === "visitor"
                      ? "bg-[#00F5D4] text-[#040D1A] font-semibold shadow-[0_0_15px_rgba(0,245,212,0.4)]"
                      : "bg-[#0A1B30] text-[#7E97B8] hover:text-white border border-[rgba(0,245,212,0.15)] hover:border-[rgba(0,245,212,0.3)]"
                  )}
                >
                  <UserCheck className="w-3.5 h-3.5" /> Guest / Delivery Pass
                </button>
              </div>
            </div>

            {/* Simulation Visual Stage */}
            <div className="p-6 sm:p-10 bg-[#061220]/60 grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Animated Boom Barrier & Vehicle Gate View */}
              <div className="lg:col-span-7 bg-[#020810] rounded-2xl p-6 border border-[rgba(0,245,212,0.14)] relative overflow-hidden min-h-[300px] flex flex-col justify-between text-white shadow-inner">
                {/* Night Sky / Camera HUD overlay */}
                <div className="flex items-center justify-between text-xs font-mono text-[#7E97B8]">
                  <span className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-[#00F5D4]" /> ANPR CAM 1080P
                  </span>
                  <span className={gateStage === "opened" ? "text-[#00F5D4] font-semibold" : "text-amber-400"}>
                    {gateStage === "opened" ? "BARRIER OPEN • GREEN PASS" : gateStage.toUpperCase()}
                  </span>
                </div>

                {/* Animated Gate Center Graphic */}
                <div className="my-8 relative flex items-center justify-center">
                  {/* Boom Barrier Station */}
                  <div className="relative w-full max-w-md h-32 flex items-end">
                    {/* Gate Pillar */}
                    <div className="w-10 h-24 bg-gradient-to-t from-[#0A1B30] to-[#122B48] rounded-t-md border border-[rgba(0,245,212,0.2)] shadow-lg relative z-20 flex flex-col items-center justify-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${gateStage === "opened" ? "bg-[#00F5D4] shadow-[0_0_12px_#00F5D4]" : "bg-red-500 shadow-[0_0_10px_#ef4444]"}`} />
                      <div className="w-4 h-1 bg-white/30 rounded" />
                    </div>

                    {/* Boom Barrier Arm (Rotates when opened) */}
                    <motion.div
                      animate={{
                        rotate: gateStage === "opened" ? -65 : 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      style={{ transformOrigin: "0% 50%" }}
                      className="h-3.5 flex-1 bg-gradient-to-r from-red-600 via-white to-red-600 rounded-r-md border border-white/20 shadow-md relative z-10 -ml-1 mb-16"
                    >
                      {/* LED strip on barrier arm */}
                      <div
                        className={`absolute inset-0 rounded-r-md opacity-70 ${
                          gateStage === "opened" ? "bg-[#00F5D4]" : "bg-red-500 animate-pulse"
                        }`}
                      />
                    </motion.div>

                    {/* Approaching Vehicle Graphic */}
                    <motion.div
                      animate={{
                        x: gateStage === "opened" ? [0, 80, 260] : [0, 40],
                        opacity: gateStage === "opened" ? [1, 1, 0.4] : 1,
                      }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                      className="absolute bottom-0 left-16 z-0"
                    >
                      <div className="p-3 bg-[#0A1B30] border border-[rgba(0,245,212,0.3)] rounded-xl shadow-2xl flex items-center gap-3">
                        <Car className="w-8 h-8 text-[#00F5D4]" />
                        <div>
                          <p className="font-mono text-sm font-bold text-white tracking-wider">
                            {gateMode === "resident" ? "MH 02 EQ 8820" : "KA 01 DL 4419"}
                          </p>
                          <p className="text-[10px] text-[#7E97B8]">
                            {gateMode === "resident" ? "Resident: Flat B-602 (Owner)" : "Uber Cab • For: Flat A-402"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Live Optical Reader HUD */}
                <div className="p-3 rounded-xl bg-[#061220]/90 border border-[rgba(0,245,212,0.12)] flex items-center justify-between text-xs">
                  <span className="text-[#7E97B8]">
                    Optical Recognition:{" "}
                    <strong className="text-white">
                      {gateStage === "scanning" ? "Scanning License Plate..." : "Confidence: 99.4%"}
                    </strong>
                  </span>
                  <Badge
                    variant="outline"
                    className={`border-none ${
                      gateStage === "opened" ? "bg-[#00F5D4]/15 text-[#00F5D4]" : "bg-amber-500/15 text-amber-400"
                    }`}
                  >
                    {gateStage === "opened" ? "Barrier Clearance 100%" : "Processing Entry"}
                  </Badge>
                </div>
              </div>

              {/* Right Column: Resident Smartphone Approval Screen */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-[#061220] border border-[rgba(0,245,212,0.14)] shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="w-4 h-4 text-[#00F5D4]" />
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Resident Intercom Alert
                    </h4>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.1)] space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-sm text-white">
                          {gateMode === "resident" ? "FastPass Entry Confirmed" : "Guest Arrival Request"}
                        </p>
                        <p className="text-xs text-[#7E97B8] mt-0.5">
                          {gateMode === "resident" ? "North Main Gate • Automated" : "Gate Guard: Suresh Kumar"}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded border border-[#00F5D4]/20">
                        Just Now
                      </span>
                    </div>

                    <p className="text-xs text-[#7E97B8] leading-relaxed">
                      {gateMode === "resident"
                        ? "Vehicle MH 02 EQ 8820 recognized via ANPR Camera. RFID barrier lifted automatically in 0.4 seconds."
                        : "Visitor Rahul Sharma (Uber Cab) is at North Gate requesting entry to Flat A-402."}
                    </p>

                    <div className="pt-2 flex items-center gap-2">
                      <div className="w-full py-2 px-3 rounded-lg bg-[#00F5D4]/15 border border-[#00F5D4]/30 text-[#00F5D4] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Authorized & Recorded
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#7E97B8] mt-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00F5D4]" />
                    Zero wait time for residents; instant digital pass for verified guests.
                  </p>
                </div>

                <Button
                  onClick={() => runSimulation(gateMode === "resident" ? "visitor" : "resident")}
                  variant="outline"
                  size="sm"
                  className="w-full text-xs gap-1.5 border-[rgba(0,245,212,0.2)] bg-[#061220] hover:bg-[#0A1B30] text-white hover:text-[#00F5D4] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Replay Gate Simulation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Flow 5-Step Process Visualization */}
        <div className="mb-16">
          <Card className="bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.16)] backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden card-accent-line">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-[rgba(0,245,212,0.18)] -translate-y-1/2 z-0" />
              {/* Connecting line (mobile) */}
              <div className="block md:hidden absolute left-1/2 top-10 bottom-10 w-0.5 bg-[rgba(0,245,212,0.18)] -translate-x-1/2 z-0" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center group w-full md:w-1/5"
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 shadow-md",
                      "bg-[#061220] border",
                      "group-hover:border-[#00F5D4] group-hover:shadow-[0_0_15px_rgba(0,245,212,0.3)]",
                      index === 3
                        ? "border-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.25)] bg-[#00F5D4]/10"
                        : "border-[rgba(0,245,212,0.15)]"
                    )}
                  >
                    <step.icon
                      className={cn(
                        "w-7 h-7 transition-colors",
                        index === 3 ? "text-[#00F5D4]" : "text-[#7E97B8] group-hover:text-[#00F5D4]"
                      )}
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-white mb-1">{step.label}</h4>
                  <p className="text-xs text-[#7E97B8] max-w-[130px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Feature Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-[#0A1B30]/70 border border-[rgba(0,245,212,0.12)] hover:border-[rgba(0,245,212,0.35)] transition-all card-glow"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center text-[#00F5D4]">
                <feature.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-base text-white mb-2">{feature.title}</h4>
                <p className="text-xs text-[#7E97B8] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
