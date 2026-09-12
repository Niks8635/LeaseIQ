/**
 * LEASEIQ SOCIETIES — CENTRALIZED MEDIA ASSET CONFIGURATION
 * 
 * This file is the single source of truth for all videos, poster images,
 * product screenshots, mobile app mockups, and lifestyle photography used
 * across the LeaseIQ Societies platform.
 * 
 * HOW TO SWAP IN YOUR REAL MEDIA ASSETS:
 * ---------------------------------------------------------------------------
 * 1. LOCAL VIDEOS: Place your .mp4 files into `/public/assets/videos/`
 *    and update the `url` property below (e.g. `url: "/assets/videos/demo.mp4"`).
 * 2. POSTER IMAGES: Place your poster stills into `/public/assets/videos/posters/`
 *    and update the `poster` property (e.g. `poster: "/assets/videos/posters/demo.webp"`).
 * 3. SCREENSHOTS: Place your high-res product screenshots into `/public/assets/screenshots/`
 *    and update the corresponding `screenshotUrl` in `MODULE_SCREENSHOTS`.
 * 4. LIFESTYLE IMAGES: Replace URLs in `LIFESTYLE_IMAGES` with your custom high-res photography.
 * ---------------------------------------------------------------------------
 */

export interface VideoAsset {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  url: string;           // Local /assets/videos/... or external CDN/YouTube/Vimeo MP4 stream
  poster: string;        // High-res preview poster image
  badge?: string;
  aspectRatio: "16/9" | "4/3" | "21/9";
}

export interface ModuleScreenshotAsset {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  screenshotUrl: string; // Local image path or fallback visual generator key
  badge: string;
  metrics: Array<{ label: string; value: string; trend?: string }>;
  tags: string[];
}

export interface LifestyleAsset {
  id: string;
  title: string;
  location: string;
  caption: string;
  imageUrl: string;
  category: "architecture" | "amenity" | "security" | "community";
}

export interface MobileScreenAsset {
  id: string;
  screenName: string;
  badge: string;
  headerTitle: string;
  summary: string;
}

export interface FloatingCardAsset {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  badge: string;
  metric?: string;
  tagline?: string;
}

// ---------------------------------------------------------------------------
// 1. PRODUCT VIDEOS CONFIGURATION
// ---------------------------------------------------------------------------
export const PRODUCT_VIDEOS = {
  // Main Hero background looping ambient film
  heroAmbient: {
    id: "hero-ambient",
    title: "Cinematic Modern Living & PropTech",
    subtitle: "Drone nightscape and residential high-rise architecture",
    duration: "0:30",
    url: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-buildings-seen-from-above-41484-large.mp4",
    poster: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
    aspectRatio: "16/9" as const,
  },

  // Dedicated "See LeaseIQ in Action" Master Video Walkthrough
  showcaseWalkthrough: {
    id: "showcase-walkthrough",
    title: "LeaseIQ Societies Platform Master Walkthrough",
    subtitle: "Full operational demonstration: Gate ANPR, AI Ledger, and Resident SuperApp",
    duration: "2:15",
    url: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-with-green-screen-in-an-office-42747-large.mp4",
    poster: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    aspectRatio: "16/9" as const,
  },

  // 4 Video Chapters
  chapters: [
    {
      id: "ch-1",
      title: "Smart Gate & ANPR Automation",
      subtitle: "Optical license plate capture & sub-second barrier lift",
      duration: "0:35",
      url: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-recording-a-parking-lot-41581-large.mp4",
      poster: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1280&q=80",
      badge: "Optical Gate AI",
      aspectRatio: "16/9" as const,
    },
    {
      id: "ch-2",
      title: "AI Bank Reconciliation & Nodal Feeds",
      subtitle: "Real-time UPI matching and automated Tally Prime sync",
      duration: "0:45",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-43403-large.mp4",
      poster: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1280&q=80",
      badge: "Autonomous Ledger",
      aspectRatio: "16/9" as const,
    },
    {
      id: "ch-3",
      title: "Resident SuperApp & 1-Tap UPI",
      subtitle: "Instant fee payments, clubhouse booking, and digital intercom",
      duration: "0:30",
      url: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-checking-her-phone-while-walking-outside-43415-large.mp4",
      poster: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1280&q=80",
      badge: "Resident Experience",
      aspectRatio: "16/9" as const,
    },
    {
      id: "ch-4",
      title: "Executive Committee Vault & Audits",
      subtitle: "Society Health Score, compliance packages, and revenue radar",
      duration: "0:25",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-41584-large.mp4",
      poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&q=80",
      badge: "Committee Governance",
      aspectRatio: "16/9" as const,
    },
  ],
};

// ---------------------------------------------------------------------------
// 2. 10 CORE MODULE SCREENSHOT CONFIGURATIONS
// ---------------------------------------------------------------------------
export const MODULE_SCREENSHOTS: ModuleScreenshotAsset[] = [
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    category: "Governance",
    headline: "Centralized Society Command Center",
    description: "Executive control room tracking resident occupancy, active gate lanes, daily financial inflow, and high-priority maintenance tickets.",
    screenshotUrl: "/assets/screenshots/admin-dashboard.webp",
    badge: "360° Operations",
    metrics: [
      { label: "Active Units", value: "450 / 450", trend: "100% Onboarded" },
      { label: "Daily Gate Volume", value: "1,420 Passes", trend: "+8% vs avg" },
      { label: "Society Health", value: "94 / 100", trend: "Optimal Status" },
    ],
    tags: ["Occupancy Radar", "Live Stream Feed", "Executive Summary"],
  },
  {
    id: "resident-management",
    title: "Resident Management",
    category: "Community",
    headline: "Smart Resident Directory & Occupancy Ledger",
    description: "Verify tenant KYC agreements, manage owner tenancies, register domestic staff biometrics, and configure parking bay allotments.",
    screenshotUrl: "/assets/screenshots/resident-management.webp",
    badge: "KYC Verified",
    metrics: [
      { label: "Residents", value: "1,247 Onboarded", trend: "Verified" },
      { label: "Owner-Occupied", value: "72%", trend: "Stable" },
      { label: "Staff Passes", value: "184 Active", trend: "Biometric Validated" },
    ],
    tags: ["Agreement Vault", "Family Profiles", "Staff Biometrics"],
  },
  {
    id: "maintenance-billing",
    title: "Maintenance & Billing",
    category: "Finance",
    headline: "Automated GST Billing & Utility Slabs",
    description: "Generate recurring maintenance invoices on the 1st of every month with automated meter-reading integrations and tiered late penalties.",
    screenshotUrl: "/assets/screenshots/maintenance-billing.webp",
    badge: "GST Automated",
    metrics: [
      { label: "Monthly Billed", value: "₹28.5 Lakhs", trend: "Oct 2025" },
      { label: "Billed On Time", value: "100%", trend: "Auto-dispatched" },
      { label: "GST Output Tax", value: "₹5.13 Lakhs", trend: "ITC Reconciled" },
    ],
    tags: ["Meter Slabs", "Penalty Automation", "GST E-Invoicing"],
  },
  {
    id: "visitor-management",
    title: "Visitor & Gate Pass",
    category: "Security",
    headline: "Optical ANPR & WhatsApp Digital Intercom",
    description: "Capture visitor vehicle plates automatically, send resident push notifications, and issue fast QR codes for deliveries and guest parties.",
    screenshotUrl: "/assets/screenshots/visitor-management.webp",
    badge: "Sub-Second Gate",
    metrics: [
      { label: "Avg Clearance Time", value: "0.8 Seconds", trend: "-85% delay" },
      { label: "Deliveries Today", value: "312 Logged", trend: "100% Pre-approved" },
      { label: "Unregistered Entries", value: "0", trend: "Zero Blindspots" },
    ],
    tags: ["Boom Barrier Sync", "Delivery Hub", "FastPass QR"],
  },
  {
    id: "complaint-helpdesk",
    title: "Complaints & Helpdesk",
    category: "Maintenance",
    headline: "SLA-Enforced Facility Ticketing",
    description: "Residents submit photo tickets for plumbing, electrical, or lift issues with auto-assignment to verified vendors and live escalation triggers.",
    screenshotUrl: "/assets/screenshots/complaint-helpdesk.webp",
    badge: "97% SLA Compliance",
    metrics: [
      { label: "Avg Resolution", value: "2.4 Hours", trend: "Target: 4h" },
      { label: "Tickets This Month", value: "64 Logged", trend: "62 Resolved" },
      { label: "Resident Satisfaction", value: "4.9 / 5.0", trend: "Post-job rating" },
    ],
    tags: ["Photo Evidence", "Vendor Dispatch", "Committee Escalation"],
  },
  {
    id: "payment-reconciliation",
    title: "Payments & Reconciliation",
    category: "Finance",
    headline: "Autonomous Bank Reconciliation & Tally Sync",
    description: "Direct bank nodal statement ingestion matches UPI, NEFT, and IMPS payments to flat ledger entries automatically with 98.8% accuracy.",
    screenshotUrl: "/assets/screenshots/payment-reconciliation.webp",
    badge: "Zero Manual Entry",
    metrics: [
      { label: "Auto-Match Accuracy", value: "98.8%", trend: "AI Confidence" },
      { label: "Total Reconciled", value: "₹26.8 Lakhs", trend: "Same-Day Inflow" },
      { label: "Defaulter Dues", value: "₹1.7 Lakhs", trend: "Automated Reminders" },
    ],
    tags: ["Tally Prime Link", "Bank API Sync", "Zero Deficit"],
  },
  {
    id: "security-guard-view",
    title: "Security & Guard View",
    category: "Security",
    headline: "Simplified Guard Tablet Interface",
    description: "Multilingual, touch-optimized guard app for front-gate personnel. One-tap number plate OCR, delivery logging, and SOS perimeter alerts.",
    screenshotUrl: "/assets/screenshots/security-guard-view.webp",
    badge: "Touch-Optimized",
    metrics: [
      { label: "Languages Supported", value: "7 Indian Dialects", trend: "Multilingual" },
      { label: "Panic SOS Response", value: "< 15 Seconds", trend: "Instant Guard Alert" },
      { label: "Guard Shifts Active", value: "12 Guards", trend: "Biometric Checkin" },
    ],
    tags: ["Offline Mode", "Guard Patrol NFC", "Emergency Broadcast"],
  },
  {
    id: "communication-notices",
    title: "Notices & Broadcasts",
    category: "Community",
    headline: "Official Digital Notice Board & AGM Polls",
    description: "Publish official committee resolutions, AGM meeting links, water supply notices, and run quorum-verified digital voting with audit records.",
    screenshotUrl: "/assets/screenshots/communication-notices.webp",
    badge: "Official Record",
    metrics: [
      { label: "Read Rate", value: "96.4%", trend: "Within 4 Hours" },
      { label: "AGM Quorum", value: "84% Participation", trend: "Digital Voting" },
      { label: "Active Circulars", value: "5 Notices", trend: "All Towers" },
    ],
    tags: ["Audited Polls", "Tower Targeting", "WhatsApp Notification"],
  },
  {
    id: "vendor-staff-management",
    title: "Vendors & Staff",
    category: "Operations",
    headline: "Vendor Contract Auditing & Staff Payroll",
    description: "Track security, housekeeping, and lift maintenance AMCs, audit invoices against contractual terms, and log staff attendance with RFID.",
    screenshotUrl: "/assets/screenshots/vendor-staff-management.webp",
    badge: "Contract Guardian",
    metrics: [
      { label: "Active AMCs", value: "8 Contracts", trend: "100% Audited" },
      { label: "Billing Discrepancies", value: "₹4.2L Caught", trend: "Overcharge Shield" },
      { label: "Staff Daily Attendance", value: "48 Checked In", trend: "Biometric Verified" },
    ],
    tags: ["AMC Lifecycle", "SLA Auditing", "Automated Payouts"],
  },
  {
    id: "reports-analytics",
    title: "Reports & Analytics",
    category: "Governance",
    headline: "Auditor-Ready Financials & Operational Radar",
    description: "Generate CA-certified balance sheets, income & expenditure reports, defaulter age-analysis, and asset depreciation statements in one click.",
    screenshotUrl: "/assets/screenshots/reports-analytics.webp",
    badge: "CA-Certified Ready",
    metrics: [
      { label: "Audit Prep Time", value: "1 Click (10s)", trend: "vs 3 Weeks Manual" },
      { label: "Compliance Score", value: "100%", trend: "Bye-Laws Validated" },
      { label: "Expense Variance", value: "-4.2%", trend: "Below Budget" },
    ],
    tags: ["Balance Sheet", "Defaulter Ageing", "Statutory Compliance"],
  },
];

// ---------------------------------------------------------------------------
// 3. CURATED REAL-LIFE LIFESTYLE & ARCHITECTURAL ASSETS
// ---------------------------------------------------------------------------
export const LIFESTYLE_IMAGES: LifestyleAsset[] = [
  {
    id: "arch-1",
    title: "Modern Luxury Residential Architecture",
    location: "Bengaluru, Karnataka",
    caption: "High-density premium gated society with automated perimeter surveillance.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    category: "architecture",
  },
  {
    id: "amenity-1",
    title: "Smart Clubhouse & Sports Arena",
    location: "Mumbai, Maharashtra",
    caption: "Turnstile-controlled Olympic swimming pool and indoor badminton courts.",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    category: "amenity",
  },
  {
    id: "security-1",
    title: "Smart Entry Gate & ANPR Guard Kiosk",
    location: "Gurugram, NCR",
    caption: "Sub-second license plate verification and digital resident intercom.",
    imageUrl: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80",
    category: "security",
  },
  {
    id: "community-1",
    title: "Vibrant Community Greenery & Family Living",
    location: "Pune, Maharashtra",
    caption: "Landscaped gardens and children's play areas managed through LeaseIQ facilities.",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    category: "community",
  },
  {
    id: "arch-2",
    title: "Evening High-Rise Horizon & Facade Illumination",
    location: "Mumbai Coastal Road, Maharashtra",
    caption: "Integrated building management and facade security operations.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    category: "architecture",
  },
  {
    id: "community-2",
    title: "Resident Co-Working & Library Lounge",
    location: "Hyderabad IT Corridor, Telangana",
    caption: "High-speed community co-working lounge bookable via LeaseIQ SuperApp.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    category: "community",
  },
];

// ---------------------------------------------------------------------------
// 4. SCROLLWISE FLOATING IMAGE CARDS & LIVE PROMPT BADGES
// ---------------------------------------------------------------------------
export const FLOATING_CARDS: FloatingCardAsset[] = [
  {
    id: "float-gate-pass",
    title: "FastPass Entry Cleared",
    subtitle: "Audi A4 • MH 02 EQ 8820",
    badge: "Boom Barrier Auto-Lift",
    metric: "0.4s Response",
    imageUrl: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=400&q=80",
    tagline: "North Gate #01 Camera",
  },
  {
    id: "float-upi-paid",
    title: "Maintenance Settled via UPI",
    subtitle: "Flat A-402 • ₹4,500.00",
    badge: "0% Convenience Fee",
    metric: "Instant GST Receipt",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
    tagline: "HDFC Nodal Auto-Matched",
  },
  {
    id: "float-anpr-cam",
    title: "Optical 4K ANPR Feed",
    subtitle: "99.4% Plate Recognition",
    badge: "Live Guard Tablet",
    metric: "Sub-Second",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    tagline: "Perimeter Barrier Secure",
  },
  {
    id: "float-amenity-qr",
    title: "Tennis Court Slot Issued",
    subtitle: "Pass #CLB-8921 • Court 2",
    badge: "Turnstile QR Valid",
    metric: "06:00 PM – 07:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=400&q=80",
    tagline: "Clubhouse Access Granted",
  },
  {
    id: "float-tally-sync",
    title: "Tally Prime ERP 2-Way Sync",
    subtitle: "Batch #849 Reconciled",
    badge: "Zero Manual Keying",
    metric: "₹28.5L Inflow",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    tagline: "Audit Ready Statement",
  },
  {
    id: "float-resident-app",
    title: "Resident SuperApp Active",
    subtitle: "1,247 Residents Connected",
    badge: "iOS & Android",
    metric: "4.9 ★ Rating",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
    tagline: "Community Network",
  },
];

// ---------------------------------------------------------------------------
// 5. MOBILE APP SCREENS CONFIGURATION
// ---------------------------------------------------------------------------
export const MOBILE_SCREENS: MobileScreenAsset[] = [
  {
    id: "screen-home",
    screenName: "Home",
    badge: "Resident SuperApp",
    headerTitle: "Good Morning 👋",
    summary: "Maintenance balance, upcoming visitors, and community quick actions.",
  },
  {
    id: "screen-maintenance",
    screenName: "Maintenance",
    badge: "1-Tap UPI",
    headerTitle: "Instant Billing",
    summary: "Zero-convenience fee UPI payments with computerized GST receipts.",
  },
  {
    id: "screen-visitors",
    screenName: "Visitors",
    badge: "FastPass QR",
    headerTitle: "Guest Approval",
    summary: "Generate 6-digit WhatsApp passes and approve courier arrivals in real-time.",
  },
  {
    id: "screen-complaints",
    screenName: "Helpdesk",
    badge: "Photo Ticket",
    headerTitle: "Maintenance Request",
    summary: "Raise tickets with photo evidence and track technician SLA progress.",
  },
  {
    id: "screen-notices",
    screenName: "Notices",
    badge: "Official Vault",
    headerTitle: "Circulars & Polls",
    summary: "Read signed committee resolutions and cast quorum-verified digital votes.",
  },
];
