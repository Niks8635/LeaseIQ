"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react"

const vendors = [
  {
    name: "ABC Security Services",
    category: "Gate & Perimeter Security",
    contract: "Active AMC",
    contractStatus: "success",
    monthly: "₹85,000",
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=600&q=80",
    staffCount: "12 Verified Guards",
    slaScore: "99.2% Attendance",
  },
  {
    name: "CleanPro Facility Care",
    category: "Housekeeping & Waste Management",
    contract: "Active AMC",
    contractStatus: "success",
    monthly: "₹45,000",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    staffCount: "8 Dedicated Staff",
    slaScore: "Daily Checklist Logged",
  },
  {
    name: "LiftCare India Elevators",
    category: "Lift Maintenance & DG Sets",
    contract: "Renewal Due (30d)",
    contractStatus: "warning",
    monthly: "₹25,000",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    staffCount: "Certified Technicians",
    slaScore: "Monthly Safety Audit",
  },
]

export function VendorsSection() {
  return (
    <section className="section-padding relative overflow-hidden py-24 sm:py-32 bg-background border-t border-border/40">
      <div className="container-wide relative z-10">
        <SectionHeading
        label="VENDOR MANAGEMENT"
        title="Know who works for your society,"
        titleAccent="what they provide and what you pay."
        description="Complete vendor lifecycle management — from contract compliance to monthly performance audits."
      />

      <div className="mx-auto mt-16 max-w-5xl grid gap-8 md:grid-cols-3">
        {vendors.map((vendor, index) => (
          <motion.div
            key={vendor.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="h-full border-border/60 bg-surface shadow-premium hover:border-gold/40 transition-all rounded-3xl overflow-hidden flex flex-col group">
              {/* Vendor Photographic Header */}
              <div className="relative h-36 w-full overflow-hidden bg-muted">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${vendor.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={
                      vendor.contractStatus === 'success' 
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-950/70 backdrop-blur-md text-[10px]' 
                        : 'border-amber-500/30 text-amber-400 bg-amber-950/70 backdrop-blur-md text-[10px]'
                    }
                  >
                    {vendor.contract}
                  </Badge>
                  <span className="text-[10px] text-white/90 font-medium bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
                    {vendor.staffCount}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-lg font-serif text-foreground group-hover:text-gold transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{vendor.category}</p>
                  
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{vendor.slaScore}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Monthly AMC:</span>
                  <span className="font-bold text-sm text-foreground font-mono">{vendor.monthly}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}
