"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What is LeaseIQ Societies?",
    a: "LeaseIQ Societies is a comprehensive luxury PropTech SaaS platform designed to streamline and automate every aspect of society management, from finances and billing to security and amenities."
  },
  {
    q: "How does AI bank reconciliation work?",
    a: "Our system automatically fetches bank statements and uses AI to match incoming transactions against raised bills, automatically marking dues as paid without manual intervention."
  },
  {
    q: "Can LeaseIQ handle multiple buildings in one society?",
    a: "Yes, LeaseIQ is built to handle complex multi-tower, multi-phase residential complexes with distinct rules, shared amenities, and consolidated reporting."
  },
  {
    q: "How does visitor management work?",
    a: "Residents use the LeaseIQ app to pre-approve guests. Security guards at the gate verify them via OTP or QR code, ensuring a seamless and secure entry process."
  },
  {
    q: "Is my society's financial data secure?",
    a: "Absolutely. We employ bank-grade encryption, strict access controls, and regular security audits to ensure all your financial and personal data remains completely secure."
  },
  {
    q: "Can residents make payments through LeaseIQ?",
    a: "Yes, residents can pay their maintenance bills, facility booking fees, and other dues directly through the app using UPI, credit cards, or net banking."
  },
  {
    q: "How does the maintenance billing system work?",
    a: "Admins can configure automated recurring bills based on flat area, fixed rates, or a hybrid model. Invoices are generated and sent automatically on the scheduled date."
  },
  {
    q: "Do you offer a free trial?",
    a: "We provide customized demos and pilot programs for committees. Please contact our sales team to discuss how we can set up a trial tailored to your society's specific needs."
  }
]

export function FaqSection() {
  return (
    <section className="section-padding relative overflow-hidden py-24 sm:py-32 bg-background border-t border-border/40">
      <div className="container-wide relative z-10">
        <SectionHeading
        label="FAQ"
        title="Frequently asked"
        titleAccent="questions."
      />

      <motion.div 
        className="mx-auto mt-16 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Accordion className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 bg-surface rounded-lg px-6 data-[state=open]:border-gold/30 data-[state=open]:shadow-sm transition-all">
              <AccordionTrigger className="text-left font-medium text-foreground py-5 hover:no-underline hover:text-gold transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
      </div>
    </section>
  )
}

export const FAQSection = FaqSection;

