"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, CheckCircle2, Clock, MessageSquare, Building2, Send, Loader2, Sparkles, ShieldCheck } from "lucide-react";
import { REGIONAL_OFFICES, CONTACT_PHONE, CONTACT_PHONE_TOLL_FREE, CONTACT_WHATSAPP } from "@/lib/company-config";
import { AmbientVideoBg } from "@/components/shared/ambient-video-bg";
import { Badge } from "@/components/ui/badge";

const OFFICE_IMAGES = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", // Bengaluru HQ
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80", // Mumbai BKC
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80", // New Delhi Aerocity
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    society: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#040D1A] pt-28 pb-20 relative overflow-hidden text-white">
      {/* Ambient Looping Architectural HQ Video & High-Resolution Background Image */}
      <AmbientVideoBg preset="architecture" variant="dark" overlayOpacity={0.80} showControls={false} />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.08)_0%,transparent_70%)] blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.06)_0%,transparent_70%)] pointer-events-none" />

      <section className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.3)] text-[#00F5D4] text-xs font-semibold uppercase tracking-wider mb-4">
            Direct Committee & RWA Support
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-4">
            Connect With the <span className="text-gradient-cyan">LeaseIQ Team</span>
          </h1>
          <p className="text-lg text-[#7E97B8] leading-relaxed">
            Whether you are exploring LeaseIQ for your residential community, need support for your society committee, or want an on-site product presentation, our team is at your service.
          </p>
        </div>

        {/* Quick Contact Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] shadow-xl flex items-center gap-4 transition-all duration-300 card-accent-line card-glow backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.2)] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#00F5D4]" />
            </div>
            <div>
              <p className="text-xs text-[#7E97B8] font-medium">Main Boardline</p>
              <a href={`tel:${CONTACT_PHONE}`} className="text-sm font-semibold text-white hover:text-[#00F5D4] transition-colors">
                {CONTACT_PHONE}
              </a>
              <p className="text-[11px] text-[#7E97B8]">Mon-Sat, 9AM-7PM IST</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] shadow-xl flex items-center gap-4 transition-all duration-300 card-accent-line card-glow backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.2)] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-[#00F5D4]" />
            </div>
            <div>
              <p className="text-xs text-[#7E97B8] font-medium">Toll-Free Support</p>
              <a href={`tel:${CONTACT_PHONE_TOLL_FREE}`} className="text-sm font-semibold text-white hover:text-[#00F5D4] transition-colors">
                {CONTACT_PHONE_TOLL_FREE}
              </a>
              <p className="text-[11px] text-[#7E97B8]">Pan-India Access</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] shadow-xl flex items-center gap-4 transition-all duration-300 card-accent-line card-glow backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.2)] flex items-center justify-center shrink-0">
              <MessageSquare className="w-6 h-6 text-[#00F5D4]" />
            </div>
            <div>
              <p className="text-xs text-[#7E97B8] font-medium">WhatsApp Desk</p>
              <a href={`https://wa.me/${CONTACT_WHATSAPP.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-[#00F5D4] transition-colors">
                {CONTACT_WHATSAPP}
              </a>
              <p className="text-[11px] text-[#7E97B8]">Instant Query Desk</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] shadow-xl flex items-center gap-4 transition-all duration-300 card-accent-line card-glow backdrop-blur-xl">
            <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/10 border border-[rgba(0,245,212,0.2)] flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#00F5D4]" />
            </div>
            <div>
              <p className="text-xs text-[#7E97B8] font-medium">Official Inquiries</p>
              <a href="mailto:hello@leaseiq.in" className="text-sm font-semibold text-white hover:text-[#00F5D4] transition-colors">
                hello@leaseiq.in
              </a>
              <p className="text-[11px] text-[#7E97B8]">Guaranteed 4-hour SLA</p>
            </div>
          </div>
        </div>

        {/* Main Grid: Form + Regional Offices */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto relative mb-16">

          {/* Left Column: Multi-city Offices with Architecture Photos */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white mb-3">
                Regional Presence
              </h2>
              <p className="text-sm text-[#7E97B8] mb-6">
                Our operations and onboarding engineering teams are physically stationed in India&apos;s top metropolitan property hubs.
              </p>
            </div>

            <div className="space-y-4">
              {REGIONAL_OFFICES.map((office, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] hover:border-[rgba(0,245,212,0.4)] transition-all duration-300 flex gap-4 group card-glow backdrop-blur-xl">
                  {/* Office Architecture Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative bg-[#061220]">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${OFFICE_IMAGES[idx]})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Building2 className="w-3.5 h-3.5 text-[#00F5D4] shrink-0" />
                      <h3 className="font-semibold text-white text-sm truncate">{office.city}</h3>
                    </div>
                    <p className="text-xs text-[#7E97B8] line-clamp-2 leading-relaxed mb-2">
                      {office.address}
                    </p>
                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[rgba(0,245,212,0.1)]">
                      <span className="text-white font-medium truncate">{office.phone}</span>
                      <span className="text-[#00F5D4] truncate ml-2">{office.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.2)] flex items-start gap-4 card-accent-line card-glow">
              <Clock className="w-5 h-5 text-[#00F5D4] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Priority Emergency Desk for RWAs</h4>
                <p className="text-xs text-[#7E97B8] mt-1 leading-relaxed">
                  Active societies subscribed to our Enterprise Tier receive 24/7 designated hotline access for emergency gate server or account access issues.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Demo Form */}
          <div className="lg:col-span-7">
            <Card className="bg-[#0A1B30]/80 border border-[rgba(0,245,212,0.14)] shadow-2xl rounded-3xl card-accent-line card-glow backdrop-blur-xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#00F5D4]/10 text-[#00F5D4] border border-[rgba(0,245,212,0.2)] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#00F5D4]" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-white">Message Received</h3>
                    <p className="text-sm text-[#7E97B8] max-w-md mx-auto">
                      Thank you for contacting LeaseIQ. A regional society relationship manager has been assigned to your request and will call or email you within 4 business hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-4 border border-[rgba(0,245,212,0.25)] bg-[#061220] text-white hover:text-[#00F5D4] hover:border-[#00F5D4] rounded-full px-6">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-white">Send an Inquiry</h3>
                      <p className="text-xs text-[#7E97B8] mt-1">
                        Fill in your details below and our team will prepare tailored society operation insights for your community.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          placeholder="e.g. Vikramaditya Deshmukh"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-[#061220] border-[rgba(0,245,212,0.2)] text-white placeholder:text-[#7E97B8] focus-visible:border-[#00F5D4]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white text-sm font-medium">Official Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="vikram@society.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-[#061220] border-[rgba(0,245,212,0.2)] text-white placeholder:text-[#7E97B8] focus-visible:border-[#00F5D4]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white text-sm font-medium">Contact Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 98200 12345"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-[#061220] border-[rgba(0,245,212,0.2)] text-white placeholder:text-[#7E97B8] focus-visible:border-[#00F5D4]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="society" className="text-white text-sm font-medium">Society / Apartment Complex Name *</Label>
                        <Input
                          id="society"
                          required
                          placeholder="e.g. Palm Grove Residency"
                          value={formData.society}
                          onChange={(e) => setFormData({ ...formData, society: e.target.value })}
                          className="bg-[#061220] border-[rgba(0,245,212,0.2)] text-white placeholder:text-[#7E97B8] focus-visible:border-[#00F5D4]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white text-sm font-medium">Subject / Inquiry Type *</Label>
                      <Input
                        id="subject"
                        required
                        placeholder="e.g. Society ERP Migration, Gate Security, or AI Finance"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-[#061220] border-[rgba(0,245,212,0.2)] text-white placeholder:text-[#7E97B8] focus-visible:border-[#00F5D4]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white text-sm font-medium">Message & Specific Requirements *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about the number of units, current software or challenges (e.g., WhatsApp collection issues, gate visitor delays, Tally sync)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#061220] border-[rgba(0,245,212,0.2)] text-white placeholder:text-[#7E97B8] focus-visible:border-[#00F5D4] min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#00F5D4] hover:bg-[#00F5D4]/90 text-[#040D1A] font-bold shadow-[0_0_15px_rgba(0,245,212,0.3)] h-11 rounded-xl">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Send Message to Society Relations <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Onboarding Operations & Implementation Engineering Showcase Strip */}
        <div className="max-w-6xl mx-auto mt-16 rounded-3xl overflow-hidden border border-[rgba(0,245,212,0.14)] bg-[#0A1B30]/80 shadow-2xl relative card-accent-line card-glow backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-5 relative h-[260px] lg:h-[300px] overflow-hidden group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
              
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <Badge className="bg-[#00F5D4] text-[#040D1A] font-bold text-[10px] mb-1.5 border-none">
                  On-Site Deployment
                </Badge>
                <h4 className="font-serif text-lg font-semibold text-white">
                  Field Engineers in Mumbai, Bengaluru & Delhi
                </h4>
                <p className="text-xs text-white/70">
                  White-glove data onboarding and gate barrier calibration.
                </p>
              </div>
            </div>

            {/* Right Information */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#00F5D4]">
                <ShieldCheck className="w-4 h-4 text-[#00F5D4]" /> Comprehensive Implementation Commitment
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                We Deploy On-Premise Within 48 Hours
              </h3>
              <p className="text-xs text-[#7E97B8] leading-relaxed">
                Our certified PropTech deployment technicians visit your society clubhouse, verify barrier arm motor wiring, train your security staff in their native language, and ensure 100% tenant directory data validation.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="font-serif font-bold text-base text-white">48h</p>
                  <p className="text-[10px] text-[#7E97B8]">Go-Live SLA</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="font-serif font-bold text-base text-[#00F5D4]">0%</p>
                  <p className="text-[10px] text-[#7E97B8]">Data Loss Rate</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#061220] border border-[rgba(0,245,212,0.12)]">
                  <p className="font-serif font-bold text-base text-white">7</p>
                  <p className="text-[10px] text-[#7E97B8]">Guard Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
