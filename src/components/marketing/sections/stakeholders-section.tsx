"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calculator, UserCog, Shield, Home, Wrench } from "lucide-react";

const stakeholders = [
  {
    title: "Committee Members",
    icon: Users,
    desc: "Governance, approvals, financial oversight and complete audit trails.",
    workflow: "Review → Approve → Monitor",
  },
  {
    title: "Accountants & Treasurers",
    icon: Calculator,
    desc: "Billing, collections, expense management and bank reconciliation.",
    workflow: "Bill → Collect → Reconcile",
  },
  {
    title: "Society Managers",
    icon: UserCog,
    desc: "Daily operations, vendor coordination, staff management and compliance.",
    workflow: "Plan → Execute → Report",
  },
  {
    title: "Security Teams",
    icon: Shield,
    desc: "Visitor management, gate control, delivery tracking and emergency response.",
    workflow: "Verify → Approve → Log",
  },
  {
    title: "Residents",
    icon: Home,
    desc: "Payments, visitors, complaints, facilities and community engagement.",
    workflow: "Request → Track → Engage",
  },
  {
    title: "Vendors",
    icon: Wrench,
    desc: "Work assignments, invoicing, payment tracking and performance reviews.",
    workflow: "Assign → Invoice → Pay",
  },
];

export function StakeholdersSection() {
  return (
    <section className="section-padding bg-[#040D1A] relative overflow-hidden py-24 sm:py-32 border-t border-[rgba(0,245,212,0.1)] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeading
          label="FOR EVERY STAKEHOLDER"
          title="One platform."
          titleAccent="Every stakeholder."
          align="center"
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
              <Card className="h-full border border-[rgba(0,245,212,0.14)] bg-[#0A1B30]/75 hover:border-[rgba(0,245,212,0.4)] backdrop-blur-xl transition-all duration-300 shadow-xl rounded-3xl group card-accent-line card-glow">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-[#00F5D4]/10 border border-[#00F5D4]/20 flex items-center justify-center mb-6 group-hover:bg-[#00F5D4]/20 transition-colors text-[#00F5D4]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F5D4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#7E97B8] text-sm leading-relaxed flex-1 mb-8">
                    {item.desc}
                  </p>

                  <div className="mt-auto">
                    <div className="inline-flex px-3.5 py-1.5 rounded-full bg-[#061220] text-xs font-mono font-medium text-[#00F5D4] border border-[rgba(0,245,212,0.15)]">
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
  );
}

export default StakeholdersSection;
