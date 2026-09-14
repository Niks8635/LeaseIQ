"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, QrCode, Users, ShieldCheck } from "lucide-react";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";

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
    <section className="section-padding bg-[#040D1A] py-24 sm:py-32 relative overflow-hidden text-white" id="amenities">
      {/* Ambient Looping Clubhouse & Lifestyle Video Background */}
      <AmbientVideoBg preset="lifestyle" variant="dark" overlayOpacity={0.75} showControls={false} />

      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />

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
            <div className="bg-[#0A1B30]/90 border border-[rgba(0,245,212,0.18)] p-1.5 shadow-xl rounded-full flex flex-wrap justify-center gap-1 backdrop-blur-xl">
              {AMENITIES_DATA.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveIdx(idx);
                    setSelectedSlot(item.slots[0]);
                    setIsBooked(false);
                  }}
                  className={cn(
                    "px-5 py-2 text-xs sm:text-sm rounded-full font-medium transition-all cursor-pointer",
                    activeIdx === idx
                      ? "bg-[#00F5D4] text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.35)]"
                      : "text-[#7E97B8] hover:text-white"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Master Amenity Card */}
          <div className="relative">
            <Card className="overflow-hidden border-[rgba(0,245,212,0.18)] shadow-2xl rounded-3xl bg-[#0A1B30]/85 backdrop-blur-xl grid lg:grid-cols-12 gap-0 card-accent-line">
              {/* Left: Lifestyle Photo with Vignette */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#061220]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${amenity.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B30] via-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0A1B30]" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <Badge className="bg-[#00F5D4] text-[#040D1A] border-none font-bold text-xs mb-2 shadow-[0_0_12px_rgba(0,245,212,0.4)]">
                    Turnstile QR Linked
                  </Badge>
                  <h4 className="text-xl font-bold text-white">{amenity.name}</h4>
                  <p className="text-xs text-[#7E97B8] mt-1 leading-relaxed">{amenity.tagline}</p>
                </div>
              </div>

              {/* Right: Slot Selection & Capacity Info */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(0,245,212,0.12)]">
                    <div className="flex items-center gap-2 text-xs text-[#7E97B8]">
                      <Users className="w-4 h-4 text-[#00F5D4]" />
                      <span>Max Capacity: <strong className="text-white">{amenity.capacity}</strong></span>
                    </div>
                    <div className="text-xs text-[#7E97B8]">
                      <ShieldCheck className="w-4 h-4 text-[#00F5D4] inline mr-1" />
                      <span>Verified Residents Only</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold text-white mb-3 flex items-center justify-between">
                      <span>Available Time Slots for Today</span>
                      <span className="text-[#00F5D4] font-mono text-[11px]">Instant Pass</span>
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
                              "py-3 px-3 rounded-xl text-xs font-medium transition-all text-center border flex flex-col items-center gap-0.5 cursor-pointer",
                              isBookedSlot && "bg-[#061220]/50 text-[#7E97B8]/40 border-transparent opacity-50 cursor-not-allowed",
                              !isBookedSlot && !isSelected && "bg-[#061220] border-[rgba(0,245,212,0.12)] text-white hover:border-[#00F5D4]",
                              !isBookedSlot && isSelected && "bg-[#00F5D4] text-[#040D1A] border-[#00F5D4] font-bold shadow-[0_0_15px_rgba(0,245,212,0.35)]"
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

                  <div className="mt-6 p-3 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.1)] text-xs text-[#7E97B8]">
                    <p className="font-medium text-white">Usage Rules & Guidelines:</p>
                    <p className="text-[11px] mt-0.5">{amenity.rules}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(0,245,212,0.12)] flex items-center justify-between gap-4">
                  <div className="text-xs">
                    <span className="text-[#7E97B8]">Selected Slot: </span>
                    <strong className="text-white font-mono">{selectedSlot}</strong>
                  </div>

                  <div className="flex items-center gap-3">
                    {isBooked ? (
                      <span className="text-xs text-[#00F5D4] flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-4 h-4" /> Pass #CLB-89 Issued!
                      </span>
                    ) : (
                      <Button
                        onClick={handleBook}
                        className="bg-[#00F5D4] text-[#040D1A] hover:bg-[#00F5D4]/90 font-bold px-6 text-xs shadow-[0_0_15px_rgba(0,245,212,0.3)] cursor-pointer"
                      >
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
