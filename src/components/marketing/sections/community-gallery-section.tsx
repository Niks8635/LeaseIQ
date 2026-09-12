"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LIFESTYLE_IMAGES } from "@/lib/media-config";
import { Building2, Shield, Users, Trophy, Sparkles, MapPin, ArrowRight } from "lucide-react";

export function CommunityGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Properties" },
    { id: "architecture", label: "Gated Architecture" },
    { id: "security", label: "Gate & Access" },
    { id: "amenity", label: "Clubhouses & Sports" },
    { id: "community", label: "Living & Greens" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? LIFESTYLE_IMAGES
      : LIFESTYLE_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section className="section-padding py-24 sm:py-32 relative overflow-hidden bg-background border-t border-border/40" id="gallery">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">

      <SectionHeading
        label="COMMUNITY & ARCHITECTURAL SHOWCASE"
        title="Designed for India's Finest"
        titleAccent="Residential Communities."
        description="From luxury skyscrapers to expansive gated townships, explore the properties running clean, secure, and automated operations with LeaseIQ."
        align="center"
      />

      {/* Filter Tabs */}
      <div className="flex justify-center mt-10 mb-14">
        <div className="inline-flex p-1.5 bg-surface border border-border/70 rounded-full text-xs gap-1 flex-wrap justify-center">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === c.id
                  ? "bg-foreground text-background font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Curated Photography Mosaic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredImages.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-3xl overflow-hidden border border-border/70 shadow-sm hover:shadow-premium transition-all bg-card min-h-[340px] flex flex-col justify-end"
          >
            {/* Background Image with Zoom on Hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            {/* Luxury Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

            {/* Top Floating Category Tag */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold" />
                {item.location}
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="relative z-20 p-6 text-white space-y-2">
              <div className="inline-flex items-center gap-1 text-gold text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {item.category.toUpperCase()}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-white/75 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Trust Metrics Strip */}
      <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Building2, value: "520+", label: "Premier Societies" },
          { icon: Shield, value: "24,000+", label: "Daily Gate Passes" },
          { icon: Users, value: "50,000+", label: "Verified Residents" },
          { icon: Trophy, value: "99.98%", label: "System Reliability" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-surface border border-border/70 text-center flex flex-col items-center gap-1 shadow-sm"
          >
            <stat.icon className="w-5 h-5 text-gold mb-1" />
            <p className="text-xl font-serif font-bold text-foreground">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default CommunityGallerySection;
