"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, QrCode, Sparkles, Clock, Users, ShieldCheck } from "lucide-react";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { LIFESTYLE_IMAGES } from "@/lib/media-config";

const AMENITIES_DATA = [
  {
    name: "Clubhouse Lounge",
    capacity: "80 Guests",
    rules: "Advance approval required • Deposit ₹5,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    tagline: "Air-conditioned banquet space with audio-visual conference setup",
    slots: ["09:00 AM", "11:00 AM", "02:00 PM", "05:00 PM", "07:30 PM"],
    booked: ["02:00 PM", "05:00 PM"],
  },
  {
    name: "Swimming Pool",
    capacity: "25 Swimmers",
    rules: "Turnstile QR pass • Proper swimwear mandatory",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
    tagline: "Temperature-controlled 25m semi-Olympic pool with certified lifeguard",
    slots: ["06:00 AM", "07:30 AM", "09:00 AM", "05:00 PM", "06:30 PM"],
    booked: ["07:30 AM"],
  },
  {
    name: "Tennis & Badminton Arena",
    capacity: "4 Players / Court",
    rules: "Non-marking shoes only • 60m max per slot",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1000&q=80",
    tagline: "Floodlit synthetic courts with automated turnstile barcode validation",
    slots: ["06:00 AM", "07:00 AM", "08:00 AM", "06:00 PM", "07:00 PM"],
    booked: ["06:00 PM"],
  },
  {
    name: "Fitness Centre & Gym",
    capacity: "35 Members",
    rules: "Biometric access • Dedicated personal trainer hours",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    tagline: "State-of-the-art cardio and strength equipment with air purification",
    slots: ["06:00 AM", "08:00 AM", "10:00 AM", "05:00 PM", "07:00 PM"],
    booked: ["06:00 AM", "07:00 PM"],
  },
];

export function AmenitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("09:00 AM");
  const [isBooked, setIsBooked] = useState(false);

  const amenity = AMENITIES_DATA[activeIdx];

  const handleBook = () => {
    setIsBooked(true);
    setTimeout(() => setIsBooked(false), 3000);
  };

  return (
    <section className="section-padding bg-surface/50 py-24 sm:py-32 relative overflow-hidden" id="amenities">
      {/* Ambient Looping Clubhouse & Lifestyle & High-Resolution Background Image */}
      <AmbientVideoBg preset="lifestyle" variant="light" overlayOpacity={0.60} showControls={false} />

      <div className="container-wide relative z-10">
        <SectionHeading
        label="LIFESTYLE & SHARED SPACES"
        title="Make Every Community Amenity"
        titleAccent="Effortless to Enjoy."
        description="Fair slot booking, automated access turnstile QR codes, rule enforcement, and real-time utilization analytics."
        align="center"
      />

      <div className="mx-auto mt-14 max-w-5xl">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-background border border-border/80 p-1.5 shadow-sm rounded-full flex flex-wrap justify-center gap-1">
            {AMENITIES_DATA.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveIdx(idx);
                  setSelectedSlot(item.slots[0]);
                  setIsBooked(false);
                }}
                className={cn(
                  "px-5 py-2 text-xs sm:text-sm rounded-full font-medium transition-all",
                  activeIdx === idx
                    ? "bg-foreground text-background font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Master Amenity Card */}
        <div className="relative">
          <Card className="overflow-hidden border-border/80 shadow-premium rounded-3xl bg-background grid lg:grid-cols-12 gap-0">
          {/* Left: Lifestyle Photo with Vignette */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-muted">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${amenity.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />

            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <Badge className="bg-gold text-black border-none font-bold text-xs mb-2">
                Turnstile QR Linked
              </Badge>
              <h4 className="font-serif text-xl font-bold text-white">{amenity.name}</h4>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">{amenity.tagline}</p>
            </div>
          </div>

          {/* Right: Slot Selection & Capacity Info */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Max Capacity: <strong className="text-foreground">{amenity.capacity}</strong></span>
                </div>
                <div className="text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
                  <span>Verified Residents Only</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold text-foreground mb-3 flex items-center justify-between">
                  <span>Available Time Slots for Today</span>
                  <span className="text-gold font-mono text-[11px]">Instant Pass</span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {amenity.slots.map((time) => {
                    const isBookedSlot = amenity.booked.includes(time);
                    const isSelected = selectedSlot === time;

                    return (
                      <button
                        key={time}
                        disabled={isBookedSlot}
                        onClick={() => setSelectedSlot(time)}
                        className={cn(
                          "py-3 px-3 rounded-xl text-xs font-medium transition-all text-center border flex flex-col items-center gap-0.5",
                          isBookedSlot && "bg-muted/50 text-muted-foreground border-transparent opacity-50 cursor-not-allowed",
                          !isBookedSlot && !isSelected && "bg-surface border-border/70 text-foreground hover:border-gold/40",
                          !isBookedSlot && isSelected && "bg-gold text-black border-gold font-bold shadow-md"
                        )}
                      >
                        <span className="font-mono">{time}</span>
                        <span className="text-[9px] opacity-80">
                          {isBookedSlot ? "Booked" : "Available"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 p-3 rounded-xl bg-surface border border-border/60 text-xs text-muted-foreground">
                <p className="font-medium text-foreground">Usage Rules & Guidelines:</p>
                <p className="text-[11px] mt-0.5">{amenity.rules}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-4">
              <div className="text-xs">
                <span className="text-muted-foreground">Selected Slot: </span>
                <strong className="text-foreground font-mono">{selectedSlot}</strong>
              </div>

              <div className="flex items-center gap-3">
                {isBooked ? (
                  <span className="text-xs text-emerald-600 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> Pass #CLB-89 Issued!
                  </span>
                ) : (
                  <Button onClick={handleBook} className="bg-gold text-black hover:bg-gold/90 font-semibold px-6 text-xs">
                    <QrCode className="w-3.5 h-3.5 mr-1.5" /> Book Slot & Issue QR
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AmenitiesSection;
