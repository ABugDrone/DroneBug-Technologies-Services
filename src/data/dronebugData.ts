import { ServiceCategory, PricingTier, StatItem, FAQItem, SocialLink, PaymentMeta } from '../types';

export const CANONICAL_URL = 'https://www.dronebugtech.shop';
export const SHARE_URL = CANONICAL_URL;

export const BRAND = {
  name: 'DroneBug Technologies & Services',
  shortName: 'DroneBug',
  email: 'dronebugtechnologies@gmail.com',
  gmailComposeUrl:
    'https://mail.google.com/mail/?view=cm&fs=1&to=dronebugtechnologies@gmail.com&su=DroneBug%20Technologies%20Consultation%20Inquiry',
  logoUrl: '/og-image.png',
  logoRemoteUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/0c4da263-4d37-4170-af3f-87521929e9a2/1787687568457_Dronebug_2026_rebranded_logo.png',
  smedanCertUrl: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/0c4da263-4d37-4170-af3f-87521929e9a2/1787687601669_DroneBug_SMEDAN_CERTIFICATE.pdf',
  shareUrl: SHARE_URL,
  canonicalUrl: CANONICAL_URL,
  domain: 'www.dronebugtech.shop',
};

export const WHATSAPP_URL =
  'https://wa.me/2347035716349?text=Hi%20DroneBug%2C%20I%20would%20like%20to%20book%20a%20consultation.';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'WhatsApp', url: WHATSAPP_URL, icon: 'WhatsApp' },
  { name: 'Email', url: BRAND.gmailComposeUrl, icon: 'Mail' },
  { name: 'GitHub', url: 'https://github.com/ABugDrone', icon: 'GithubLogo' },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100085447531492', icon: 'FacebookLogo' },
];

export const PAYMENT_CHANNELS = {
  selarUrl: 'https://selar.com/974809781i',
  opay: {
    label: 'OPay',
    accountNumber: '7035716349',
    accountName: 'Abdulazeez Yunusa',
    note: 'Consultancy Fee',
  },
  moniepoint: {
    label: 'Moniepoint',
    accountNumber: '7035716349',
    accountName: 'Abdulazeez Yunusa',
    note: 'Consultancy Fee',
  },
};

export const STATS: StatItem[] = [
  { value: '10+', label: 'Years Engineering Experience', icon: 'ClockCounterClockwise' },
  { value: '5,000+', label: 'Satisfied Clients Supported', icon: 'UsersThree' },
  { value: '99.99%', label: 'Resolved Tech Problems', icon: 'CheckCircle' },
  { value: '40%+', label: 'Avg Client Cost Reduction', icon: 'TrendUp' },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'desktop',
    name: 'Desktop Applications',
    icon: 'Monitor',
    description: 'Lightweight, cost-cutting desktop tools built for speed and reliability.',
    features: ['Rapid utility tools', 'Offline-first architecture', 'Minimal resource footprint', 'Cross-platform support'],
    color: 'from-sky-500 to-cyan-400',
  },
  {
    id: 'ai',
    name: 'AI & ML Solutions',
    icon: 'Brain',
    description: 'Custom AI models and smart automation — online and fully offline inference.',
    features: ['Local offline inference', 'Smart workflow automation', 'Custom model training', 'API integration'],
    color: 'from-violet-500 to-purple-400',
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    icon: 'DeviceMobileCamera',
    description: 'Native and cross-platform mobile apps designed for performance.',
    features: ['React Native / Flutter', 'Push notifications', 'Offline sync', 'App store deployment'],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'web',
    name: 'Fullstack Web',
    icon: 'GlobeHemisphereEastern',
    description: 'Modern web applications with responsive design and real-time capabilities.',
    features: ['React / Next.js', 'Real-time data', 'Responsive design', 'SEO optimized'],
    color: 'from-amber-500 to-orange-400',
  },
  {
    id: 'branding',
    name: 'Branding & Design',
    icon: 'PenNib',
    description: 'Complete brand identity, UI/UX design, and visual storytelling.',
    features: ['Logo & identity design', 'UI/UX prototyping', 'Brand guidelines', 'Marketing collateral'],
    color: 'from-rose-500 to-pink-400',
  },
  {
    id: 'education',
    name: 'Tech Education',
    icon: 'GraduationCap',
    description: 'Contract AI/ML and software engineering training programs.',
    features: ['Hands-on workshops', 'Corporate training', 'Curriculum design', 'Mentorship programs'],
    color: 'from-indigo-500 to-blue-400',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Discovery & Tech Triage',
    price: '₦5,000',
    duration: '30 minutes',
    description: 'One-on-one discovery call to diagnose your problem and scope the solution.',
    features: [
      'Problem diagnosis session',
      'Feasibility review',
      'Scope & cost projection',
      'Actionable recommendations',
    ],
    payment: {
      method: 'opay',
      label: 'OPay',
      sublabel: 'Accept OPay or bank transfer',
      cta: 'Pay with OPay',
      gradient: 'from-emerald-500 to-teal-600',
      badgeColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40',
    },
  },
  {
    id: 'growth',
    name: 'Growth Architecture & Blueprint',
    price: '₦10,000',
    duration: '60 minutes',
    description: 'Deep-dive architecture design with a tailored technical roadmap.',
    features: [
      'In-depth technical audit',
      'Architecture design (desktop/mobile/web)',
      'Cost-reduction analysis',
      'Technical roadmap deliverable',
    ],
    highlighted: true,
    payment: {
      method: 'moniepoint',
      label: 'Moniepoint',
      sublabel: 'Accept Moniepoint or bank transfer',
      cta: 'Pay with Moniepoint',
      gradient: 'from-blue-600 to-indigo-700',
      badgeColor: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40',
    },
  },
  {
    id: 'premium',
    name: 'Top Premium Executive Assessment',
    price: '₦20,000',
    duration: 'Full assessment',
    description: 'Comprehensive full-stack evaluation with priority turnaround quotation.',
    features: [
      'Full-stack system assessment',
      'Offline/online AI feasibility study',
      'Hardware/software stack audit',
      'Priority quotation turnaround',
      'Contract education plan included',
    ],
    payment: {
      method: 'selar',
      label: 'Selar',
      sublabel: 'Instant Selar online gateway',
      cta: 'Pay with Selar',
      gradient: 'from-violet-700 to-indigo-600',
      badgeColor: 'text-violet-700 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/40',
    },
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How does the consultation process work?',
    answer: 'Book a tier that matches your needs. Our engineers will conduct a thorough diagnosis during the session and provide a clear roadmap. Consultation fees cover the initial deep diagnosis and tailored blueprint before any custom build pricing is discussed.',
  },
  {
    question: 'Do you offer offline AI solutions?',
    answer: 'Yes. We specialize in lightweight desktop applications and AI models that run entirely offline — no cloud dependency required. Perfect for environments with limited connectivity.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve businesses across Nigeria and beyond — from SMEs needing digital transformation to enterprises requiring custom software, AI integration, and tech education programs.',
  },
  {
    question: 'Is DroneBug officially registered?',
    answer: 'Yes. DroneBug Technologies is a verified micro-enterprise registered with SMEDAN (Small and Medium Enterprises Development Agency of Nigeria). You can view our official certificate below.',
  },
  {
    question: 'How can I get started?',
    answer: 'Choose a consultation tier above, or reach out directly via WhatsApp, Telegram, or email. We typically respond within 2 hours during business hours.',
  },
];