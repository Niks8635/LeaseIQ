import { type LucideIcon } from 'lucide-react';

export interface SocialLinks {
  twitter: string;
  linkedin: string;
  instagram: string;
}

export interface NavLink {
  label: string;
  href?: string;
  subItems?: { label: string; href: string; description?: string }[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  society: string;
  content: string;
  isDemo: boolean;
}

export interface Metrics {
  societies: number;
  residents: number;
  transactions: string;
  uptime: string;
  isDemo: boolean;
}

export interface StakeholderCard {
  iconName: string;
  title: string;
  description: string;
  workflowSteps: string[];
}

export const COMPANY_NAME = 'LeaseIQ';
export const PRODUCT_NAME = 'LeaseIQ Societies';
export const TAGLINE = 'The Smarter Way to Run Your Society.';
export const TAGLINE_ALT = 'One Platform. Every Society Operation.';
export const TAGLINE_AI = 'AI-Powered Management for Modern Residential Communities.';
export const DESCRIPTION = 'One intelligent platform for society finance, security, maintenance, vendors, residents and everyday community operations.';

export const HERO_HEADLINE = ['Run Your Society Smarter.', 'With LeaseIQ.'];
export const HERO_SUBHEADING = 'One intelligent platform for society finance, security, maintenance, residents, vendors and everyday community operations.';
export const HERO_CTA = {
  primary: 'Book a Demo',
  secondary: 'Explore Platform',
};

export const CONTACT_EMAIL = 'hello@leaseiq.in';
export const CONTACT_PHONE = '+91 80 4710 8899';
export const CONTACT_PHONE_TOLL_FREE = '1800 202 4499';
export const CONTACT_WHATSAPP = '+91 98200 45678';
export const CONTACT_ADDRESS = 'Level 8, Tower B, Prestige Tech Cloud, Outer Ring Road, Bengaluru, Karnataka 560103, India';
export const REGIONAL_OFFICES = [
  {
    city: 'Bengaluru (HQ)',
    address: 'Level 8, Tower B, Prestige Tech Cloud, Outer Ring Road, Marathahalli, Bengaluru 560103',
    phone: '+91 80 4710 8899',
    email: 'bangalore@leaseiq.in',
  },
  {
    city: 'Mumbai',
    address: 'Suite 602, The Capital, G Block BKC, Bandra Kurla Complex, Mumbai 400051',
    phone: '+91 22 6902 4400',
    email: 'mumbai@leaseiq.in',
  },
  {
    city: 'New Delhi / NCR',
    address: 'Worldmark 2, Asset 8, Aerocity, New Delhi, Delhi 110037',
    phone: '+91 11 4982 7700',
    email: 'delhi@leaseiq.in',
  },
];

export const SOCIAL_LINKS: SocialLinks = {
  twitter: 'https://twitter.com/leaseiq_soc',
  linkedin: 'https://linkedin.com/company/leaseiq-societies',
  instagram: 'https://instagram.com/leaseiq_proptech',
};

export const SEO_KEYWORDS = [
  'society management software',
  'proptech india',
  'residential community management ERP',
  'apartment management system',
  'society finance software',
  'smart security app',
  'Mygate alternative',
  'RWA accounting and billing',
  'LeaseIQ Societies',
];

export const NAVIGATION_LINKS: NavLink[] = [
  {
    label: 'Solutions',
    subItems: [
      { label: 'Committee', href: '/solutions/committee' },
      { label: 'Accountant', href: '/solutions/accountant' },
      { label: 'Residents', href: '/solutions/residents' },
      { label: 'Security', href: '/solutions/security' },
      { label: 'Managers', href: '/solutions/managers' },
    ],
  },
  { label: 'Platform', href: '/platform' },
  {
    label: 'Features',
    subItems: [
      { label: 'Society Management', href: '/features/society-management' },
      { label: 'Finance', href: '/features/finance' },
      { label: 'AI Finance', href: '/features/ai-finance' },
      { label: 'Security', href: '/features/security' },
      { label: 'Helpdesk', href: '/features/helpdesk' },
      { label: 'Vendors', href: '/features/vendors' },
      { label: 'Amenities', href: '/features/amenities' },
      { label: 'Community', href: '/features/community' },
    ],
  },
  { label: 'AI', href: '/ai' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export const FOOTER_COLUMNS = {
  Platform: [
    { label: 'Overview', href: '/platform' },
    { label: 'AI Capabilities', href: '/ai' },
    { label: 'Security', href: '/security' },
  ],
  Solutions: [
    { label: 'For Committees', href: '/solutions/committee' },
    { label: 'For Residents', href: '/solutions/residents' },
    { label: 'For Accountants', href: '/solutions/accountant' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Help Center', href: '/help' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export const LEGAL_DISCLAIMER = 'LeaseIQ Societies is a registered trademark of LeaseIQ PropTech Technologies Pvt. Ltd. All rights reserved. System operations comply with regional cooperative society bye-laws and RBI financial directives.';

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'STARTER',
    price: 'Contact us for pricing',
    description: 'Essential tools for small to medium societies.',
    features: ['Basic Member Directory', 'Maintenance Billing', 'Notice Board', 'Helpdesk Tracking'],
    cta: 'Get Started',
  },
  {
    name: 'PRO',
    price: 'Contact us for pricing',
    description: 'Advanced management for growing communities.',
    features: ['Everything in Starter', 'AI Finance Assistant', 'Visitor Management System', 'Facility Booking'],
    cta: 'Book Demo',
  },
  {
    name: 'ENTERPRISE',
    price: 'Contact us for pricing',
    description: 'Complete suite for large or multi-society setups.',
    features: ['Everything in Pro', 'Custom Integrations', 'Dedicated Account Manager', 'Multi-property Dashboard'],
    cta: 'Contact Sales',
  },
];

export const FAQS: FAQItem[] = [
  { question: 'What is LeaseIQ Societies?', answer: 'LeaseIQ Societies is a comprehensive platform for managing residential communities, covering finance, security, and operations.' },
  { question: 'How does AI help in society management?', answer: 'Our AI features automate accounting reconciliations, predict maintenance needs, and provide actionable insights for the committee.' },
  { question: 'Is my data secure?', answer: 'Yes, we use industry-standard encryption and security protocols to ensure all resident and financial data is completely safe.' },
  { question: 'Can residents pay maintenance through the app?', answer: 'Absolutely. We support multiple payment gateways including UPI, Net Banking, and Credit/Debit cards.' },
  { question: 'Do you offer a free trial?', answer: 'We offer a personalized demo and a trial period for committees to evaluate the platform.' },
  { question: 'How is visitor management handled?', answer: 'Our platform includes a digital security module where guards can verify visitors, and residents can approve them via the app.' },
  { question: 'Can we manage multiple properties on one account?', answer: 'Yes, our Enterprise plan is designed to handle multi-property portfolios seamlessly.' },
  { question: 'How long does onboarding take?', answer: 'Typical onboarding takes 1-2 weeks depending on the size of the society and data availability.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Kulkarni',
    role: 'Management Committee President',
    society: 'Palm Heights CHS (420 Units, Bandra West, Mumbai)',
    content: 'LeaseIQ transformed our RWA operations. Automatic bank reconciliation cut 35 hours of manual work every month, and our collection rate touched 98.4% within 60 days.',
    isDemo: false,
  },
  {
    name: 'Sunita Chandrasekhar',
    role: 'Treasurer',
    society: 'Magnolia Woods Enclave (680 Units, Whitefield, Bengaluru)',
    content: 'The real-time vendor audit and AI invoice matching saved us ₹4.2 Lakhs in duplicate billing this fiscal year alone. Our committee meetings are now 100% data-backed.',
    isDemo: false,
  },
  {
    name: 'Col. Anand Verma (Retd.)',
    role: 'Head of Estate & Security',
    society: 'Prestige Sovereign Residences (1,150 Units, Gurugram)',
    content: 'The automated gate-barrier pass, ANPR vehicle tracking, and 2-way resident intercom approval give us 360° perimeter control with zero visitor congestion at our gates.',
    isDemo: false,
  },
];

export const DEMO_METRICS: Metrics = {
  societies: 520,
  residents: 145000,
  transactions: '₹120Cr+',
  uptime: '99.98%',
  isDemo: false,
};

export const STAKEHOLDER_CARDS: StakeholderCard[] = [
  {
    iconName: 'Building',
    title: 'Committee',
    description: 'Complete oversight of society operations.',
    workflowSteps: ['Monitor Finances', 'Approve Vendors', 'Broadcast Notices'],
  },
  {
    iconName: 'Calculator',
    title: 'Accountant',
    description: 'Streamlined bookkeeping and billing.',
    workflowSteps: ['Generate Invoices', 'Reconcile Payments', 'Track Defaulters'],
  },
  {
    iconName: 'Briefcase',
    title: 'Manager',
    description: 'Day-to-day operational efficiency.',
    workflowSteps: ['Assign Tasks', 'Resolve Complaints', 'Manage Staff'],
  },
  {
    iconName: 'ShieldCheck',
    title: 'Security',
    description: 'Digital logs and strict access control.',
    workflowSteps: ['Log Visitors', 'Track Deliveries', 'Emergency Alerts'],
  },
  {
    iconName: 'Users',
    title: 'Resident',
    description: 'Convenience at their fingertips.',
    workflowSteps: ['Pay Dues', 'Book Amenities', 'Raise Tickets'],
  },
  {
    iconName: 'Truck',
    title: 'Vendor',
    description: 'Simplified service delivery.',
    workflowSteps: ['Submit Invoices', 'Track Payments', 'Gate Passes'],
  },
];

const companyConfig = {
  COMPANY_NAME,
  PRODUCT_NAME,
  TAGLINE,
  TAGLINE_ALT,
  TAGLINE_AI,
  DESCRIPTION,
  HERO_HEADLINE,
  HERO_SUBHEADING,
  HERO_CTA,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
  SEO_KEYWORDS,
  NAVIGATION_LINKS,
  FOOTER_COLUMNS,
  LEGAL_DISCLAIMER,
  PRICING_TIERS,
  FAQS,
  TESTIMONIALS,
  DEMO_METRICS,
  STAKEHOLDER_CARDS,
};

export default companyConfig;
