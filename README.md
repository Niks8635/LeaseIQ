# LEASEIQ SOCIETIES

> **The Smarter Way to Run Your Society.**  
> *One Platform. Every Society Operation.*  
> *AI-Powered Management for Modern Residential Communities.*

---

## 1. Overview

**LeaseIQ Societies** is an executive-grade PropTech SaaS platform designed for housing societies, residential communities, RWAs, committee members, accountants, security teams, residents, managers, and service providers.

It unites:
- **Society & Resident Operations**: Units, towers, residents, occupancy, committees.
- **Finance & Accounting**: Maintenance billing, payments, bank reconciliation, expense audits.
- **AI Finance Automation**: Intelligent transaction reconciliation, invoice intelligence, duplicate detection.
- **Security & Visitor Management**: Gate workflows, visitor approvals, delivery and staff logging.
- **Helpdesk & Maintenance**: Service tickets, vendor workflows, SLAs.
- **Amenities & Community**: Facility bookings, announcements, events, polls, and secure documents.

---

## 2. Visual Design System

- **Palette**: Deep Charcoal (`#1C1C1E`), Warm Ivory (`#FAFAF8`), Muted Gold (`#C9A96E`), Sophisticated Teal (`#2A9D8F`), Surface neutrals.
- **Typography**: 
  - Sans: **Inter** for crisp UI, navigation, forms, and dense data cards.
  - Serif: **Playfair Display** for editorial headlines and luxury marketing moments.
- **Theme**: Refined light mode and deep charcoal dark mode using CSS variables in OKLCH color space.
- **Motion**: Framer Motion entrance & micro-interactions with `prefers-reduced-motion` compliance.

---

## 3. Route Architecture (Phase 1)

### Public Marketing Website (`src/app/(marketing)`)
- `/` — Full continuous scroll storytelling homepage (19 sections)
- `/about` — Origin, problem statement, solution, and core philosophy
- `/features` — Complete platform capability directory
  - `/features/society-management`
  - `/features/finance`
  - `/features/ai-finance`
  - `/features/security`
  - `/features/helpdesk`
  - `/features/vendors`
  - `/features/amenities`
  - `/features/community`
- `/solutions` — Stakeholder solutions directory
  - `/solutions/committee`
  - `/solutions/accountant`
  - `/solutions/residents`
  - `/solutions/security`
  - `/solutions/managers`
- `/pricing` — Transparent tier comparison (Starter, Pro, Enterprise)
- `/resources` — Guides, articles, and newsletter signup
- `/contact` — Inquiries and communication channels
- `/book-demo` — Interactive demo request form with inline validation
- `/privacy` & `/terms` — Governance and compliance placeholders

### Authentication (`src/app/(auth)`)
- `/login` — Secure login interface with password visibility toggle and validation
- `/register` — Account creation with society registration, password strength, and terms consent

---

## 4. Technology Stack

- **Framework**: Next.js 16 (App Router, Server Components & Client Components)
- **Language**: TypeScript Strict Mode
- **Styling**: Tailwind CSS v4 + Tailwind Animate
- **Components**: shadcn/ui + Base UI + Radix UI Slot
- **Icons**: Lucide React + custom inline SVGs
- **Motion**: Framer Motion + GSAP
- **Visualizations**: Recharts + custom responsive SVG charts

---

## 5. Development & Build

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### Quickstart
```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Run strict production build & route generation
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view LeaseIQ Societies.
