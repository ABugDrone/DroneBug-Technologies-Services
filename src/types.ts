export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
}

export type PaymentMethod = 'selar' | 'moniepoint' | 'opay';

export interface PaymentMeta {
  method: PaymentMethod;
  label: string;
  sublabel: string;
  cta: string;
  gradient: string;
  badgeColor: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  payment: PaymentMeta;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AssessmentForm {
  problemType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}