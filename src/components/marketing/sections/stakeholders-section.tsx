"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calculator, UserCog, Shield, Home, Wrench } from "lucide-react"

const stakeholders = [
  {
    title: "Committee Members",
    icon: Users,
    desc: "Governance, approvals, financial oversight and complete audit trails.",
    workflow: "Review → Approve → Monitor"
  },
  {
    title: "Accountants & Treasurers",
    icon: Calculator,
    desc: "Billing, collections, expense management and bank reconciliation.",
    workflow: "Bill → Collect → Reconcile"
  },
  {
    title: "Society Managers",
    icon: UserCog,
    desc: "Daily operations, vendor coordination, staff management and compliance.",
    workflow: "Plan → Execute → Report"
  },
  {
    title: "Security Teams",
    icon: Shield,
    desc: "Visitor management, gate control, delivery tracking and emergency response.",
    workflow: "Verify → Approve → Log"
  },
  {
    title: "Residents",
    icon: Home,
    desc: "Payments, visitors, complaints, facilities and community engagement.",
    workflow: "Request → Track → Engage"
  },
  {
    title: "Vendors",
    icon: Wrench,
    desc: "Work assignments, invoicing, payment tracking and performance reviews.",
    workflow: "Assign → Invoice → Pay"
  }
]

export function StakeholdersSection() {
  return (
    <section className="section-padding bg-surface/30 relative overflow-hidden py-24 sm:py-32 border-t border-border/40">
      <div className="container-wide relative z-10">
        <SectionHeading
        label="FOR EVERY STAKEHOLDER"
        title="One platform."
        titleAccent="Every stakeholder."
      />

      <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stakeholders.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full border border-border/50 bg-background hover:border-gold/20 transition-all duration-300 hover:shadow-premium group">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                
                <h3 className="font-serif text-xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-8">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <div className="inline-flex px-3 py-1.5 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground border border-border/50">
                    {item.workflow}
                  </div>
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
