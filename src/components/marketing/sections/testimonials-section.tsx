"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { Star, CheckCircle2, Building2, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "LeaseIQ transformed our RWA operations. Automatic bank reconciliation cut 35 hours of manual accounting every month, and our maintenance collection touched 98.4% within 60 days.",
    name: "Rajesh Kulkarni",
    role: "Management Committee President",
    society: "Palm Heights CHS",
    location: "Bandra West, Mumbai",
    units: "420 Units",
    metric: "98.4% Collection Rate",
    initials: "RK",
  },
  {
    quote:
      "The real-time vendor audit and AI invoice matching saved our society ₹4.2 Lakhs in duplicate and inflated billing this fiscal year alone. Our committee meetings are now 100% data-backed.",
    name: "Sunita Chandrasekhar",
    role: "Treasurer & Finance Lead",
    society: "Magnolia Woods Enclave",
    location: "Whitefield, Bengaluru",
    units: "680 Units",
    metric: "₹4.2L Saved in Audits",
    initials: "SC",
  },
  {
    quote:
      "The automated gate-barrier pass, ANPR vehicle tracking, and 2-way resident intercom approval give us 360° perimeter control with zero visitor congestion at our four entry gates.",
    name: "Col. Anand Verma (Retd.)",
    role: "Head of Estate & Security",
    society: "Prestige Sovereign Residences",
    location: "Golf Course Road, Gurugram",
    units: "1,150 Units",
    metric: "0 Gate Congestion",
    initials: "AV",
  },
  {
    quote:
      "Our AGM quorum participation jumped from 32% to 88% after introducing LeaseIQ's digital voting and multi-channel WhatsApp circulars. Resolving society disputes has never been smoother.",
    name: "Dr. Vikram Joshi",
    role: "Honorary Secretary",
    society: "Amanora Park Town Enclave",
    location: "Hadapsar, Pune",
    units: "820 Units",
    metric: "88% AGM Quorum",
    initials: "VJ",
  },
  {
    quote:
      "Managing amenity bookings across 3 clubhouses was a headache. With LeaseIQ's QR turnstile integrations, slot double-booking is gone and facility revenue increased by 40%.",
    name: "K. Raghunath",
    role: "Facilities Chairperson",
    society: "Aparna CyberLife Gated Society",
    location: "Gachibowli, Hyderabad",
    units: "950 Units",
    metric: "+40% Amenity Revenue",
    initials: "KR",
  },
  {
    quote:
      "The photo helpdesk ticketing feature gives our residents complete peace of mind. Technicians adhere strictly to our 4-hour SLA and our customer satisfaction score is 4.9/5.0.",
    name: "Deepa Subramanian",
    role: "RWA Secretary",
    society: "Olympia Opaline Community",
    location: "OMR, Chennai",
    units: "510 Units",
    metric: "4.9/5.0 Satisfaction",
    initials: "DS",
  },
];

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = TESTIMONIALS.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="section-padding relative overflow-hidden py-24 sm:py-32 bg-background" id="testimonials">
      {/* Ambient Looping Marble Concierge Lounge Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="lobby" variant="light" overlayOpacity={0.60} showControls={false} />

      <div className="container-wide relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <SectionHeading
          label="TESTIMONIALS & CASE STUDIES"
          title="Trusted by Premier"
          titleAccent="Residential Societies."
          description="See how residential societies, RWAs, and management committees across India achieve operational excellence with LeaseIQ."
          align="left"
        />

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <Button
            size="sm"
            variant="outline"
            onClick={prevPage}
            className="w-10 h-10 rounded-full p-0 border-border/80 hover:border-gold/40"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-xs font-mono text-muted-foreground px-2">
            0{currentPage + 1} / 0{totalPages}
          </span>
          <Button
            size="sm"
            variant="outline"
            onClick={nextPage}
            className="w-10 h-10 rounded-full p-0 border-border/80 hover:border-gold/40"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Cards Container with AnimatePresence */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {currentItems.map((t, i) => (
              <Card
                key={i}
                className="h-full bg-surface border-border/60 shadow-sm hover:shadow-premium hover:border-gold/40 transition-all duration-300 flex flex-col justify-between rounded-3xl"
              >
                <CardContent className="p-7 sm:p-8 flex flex-col h-full">
                  {/* Rating & Verified Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified Society
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/90 text-sm sm:text-base italic mb-6 flex-1 leading-relaxed">
                    "{t.quote}"
                  </p>

                  {/* Society Metric Highlight */}
                  <div className="mb-6 p-2.5 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gold">Key Result:</span>
                    <span className="text-xs font-bold text-foreground font-mono">{t.metric}</span>
                  </div>

                  {/* Author Credentials */}
                  <div className="pt-5 border-t border-border/60 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center font-serif font-bold text-sm shrink-0 border border-border shadow-sm">
                      {t.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-foreground text-sm truncate">{t.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.role}</p>
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5">
                        <Building2 className="w-3 h-3 text-gold shrink-0" />
                        <span className="truncate">{t.society} • {t.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={cn(
                "h-2 rounded-full transition-all",
                currentPage === idx ? "w-8 bg-gold" : "w-2 bg-border/80 hover:bg-muted-foreground"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
