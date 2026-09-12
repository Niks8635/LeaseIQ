import { HeroSection } from "@/components/marketing/hero/hero-section";
import { ValueStatement } from "@/components/marketing/sections/value-statement";
import { VideoShowcaseSection } from "@/components/marketing/sections/video-showcase-section";
import { HowItWorksSection } from "@/components/marketing/sections/how-it-works-section";
import { ProductShowcase } from "@/components/marketing/sections/product-showcase";
import { BeforeAfterSection } from "@/components/marketing/sections/before-after-section";
import { EcosystemSection } from "@/components/marketing/sections/ecosystem-section";
import { FinanceSection } from "@/components/marketing/sections/finance-section";
import { AIFinanceSection } from "@/components/marketing/sections/ai-finance-section";
import { SecuritySection } from "@/components/marketing/sections/security-section";
import { ResidentSection } from "@/components/marketing/sections/resident-section";
import { HelpdeskSection } from "@/components/marketing/sections/helpdesk-section";
import { VendorsSection } from "@/components/marketing/sections/vendors-section";
import { AmenitiesSection } from "@/components/marketing/sections/amenities-section";
import { CommunityGallerySection } from "@/components/marketing/sections/community-gallery-section";
import { AIIntelligenceSection } from "@/components/marketing/sections/ai-intelligence-section";
import { DashboardSection } from "@/components/marketing/sections/dashboard-section";
import { StakeholdersSection } from "@/components/marketing/sections/stakeholders-section";
import { MetricsSection } from "@/components/marketing/sections/metrics-section";
import { TestimonialsSection } from "@/components/marketing/sections/testimonials-section";
import { PricingSection } from "@/components/marketing/sections/pricing-section";
import { FAQSection } from "@/components/marketing/sections/faq-section";
import { FinalCTASection } from "@/components/marketing/sections/final-cta-section";

export default function HomePage() {
  return (
    <>
      {/* Hero with Ambient Looping Video & Live Pulse Ticker */}
      <HeroSection />

      {/* Value Proposition Statement */}
      <ValueStatement />

      {/* Dedicated Master Video Showcase: See LeaseIQ in Action */}
      <VideoShowcaseSection />

      {/* 4-Step Operational Sequence: How It Works */}
      <HowItWorksSection />

      {/* 10 Core ERP Modules Interactive Showcase */}
      <ProductShowcase />

      {/* Before vs After Visual Comparison */}
      <BeforeAfterSection />

      {/* Platform Ecosystem */}
      <EcosystemSection />

      {/* Finance & Invoicing */}
      <FinanceSection />

      {/* AI Finance Hub (Auto-Reconciliation & Invoicing) */}
      <AIFinanceSection />

      {/* Smart Gate & Boom Barrier Access */}
      <SecuritySection />

      {/* Resident Experience & 3D Mobile App Mockup */}
      <ResidentSection />

      {/* Helpdesk & Maintenance Lifecycle */}
      <HelpdeskSection />

      {/* Vendor Management & AMC Auditing */}
      <VendorsSection />

      {/* Lifestyle & Amenities Shared Spaces */}
      <AmenitiesSection />

      {/* Real Communities & Architectural Photography Showcase */}
      <CommunityGallerySection />

      {/* AI Society Health Radar & Intelligence */}
      <AIIntelligenceSection />

      {/* Executive Command Center Dashboard Preview */}
      <DashboardSection />

      {/* Stakeholders Matrix */}
      <StakeholdersSection />

      {/* Trust & Scale Metrics */}
      <MetricsSection />

      {/* Testimonials Carousel & Case Studies */}
      <TestimonialsSection />

      {/* Transparent Pricing Calculator */}
      <PricingSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Final Action CTA */}
      <FinalCTASection />
    </>
  );
}
