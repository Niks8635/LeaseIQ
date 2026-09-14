"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { LIFESTYLE_IMAGES } from "@/lib/media-config";
import { Building2, Shield, Users, Trophy, Sparkles, MapPin } from "lucide-react";

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
    <section className="section-padding py-24 sm:py-32 relative overflow-hidden bg-[#040D1A] border-t border-[rgba(0,245,212,0.1)] text-white" id="gallery">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />

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
          <div className="inline-flex p-1.5 bg-[#0A1B30]/90 border border-[rgba(0,245,212,0.18)] rounded-full text-xs gap-1 flex-wrap justify-center backdrop-blur-xl shadow-xl">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? "bg-[#00F5D4] text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.35)]"
                    : "text-[#7E97B8] hover:text-white"
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
              className="group relative rounded-3xl overflow-hidden border border-[rgba(0,245,212,0.16)] shadow-xl hover:border-[rgba(0,245,212,0.45)] transition-all bg-[#0A1B30] min-h-[340px] flex flex-col justify-end card-glow card-accent-line"
            >
              {/* Background Image with Zoom on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              {/* Luxury Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040D1A] via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Top Floating Category Tag */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-[#040D1A]/80 backdrop-blur-md border border-[rgba(0,245,212,0.25)] text-white text-[11px] font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3 h-3 text-[#00F5D4]" />
                  {item.location}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-20 p-6 text-white space-y-2">
                <div className="inline-flex items-center gap-1 text-[#00F5D4] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {item.category.toUpperCase()}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#7E97B8] leading-relaxed">
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
              className="p-5 rounded-2xl bg-[#0A1B30]/75 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.35)] text-center flex flex-col items-center gap-1 shadow-lg card-glow transition-all"
            >
              <stat.icon className="w-5 h-5 text-[#00F5D4] mb-1" />
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-[11px] text-[#7E97B8] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityGallerySection;
