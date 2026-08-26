import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING_TIERS, BRAND } from '../data/dronebugData';

export default function PricingAndAssessment({
  onOpenBooking,
}: {
  onOpenBooking: (tier: (typeof PRICING_TIERS)[number]) => void;
}) {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-3">
            Consultation Tiers
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Start With a Diagnosis
          </h2>
          <p className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Every engagement begins with a focused consultation. Fees cover the initial deep diagnosis and tailored blueprint before any custom build pricing is discussed.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`relative backdrop-blur-xl border rounded-2xl p-6 shadow-lg flex flex-col ${
                tier.highlighted
                  ? 'bg-gradient-to-b from-sky-50/80 to-indigo-50/80 dark:from-sky-950/40 dark:to-indigo-950/40 border-sky-300 dark:border-sky-600 ring-2 ring-sky-400/20'
                  : 'bg-white/70 dark:bg-slate-900/70 border-white/30 dark:border-white/10'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  {tier.price}
                </span>
              </div>
              <span className="text-xs text-zinc-400 dark:text-zinc-500 mb-4">{tier.duration}</span>

              {/* Designated payment channel badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${tier.payment.badgeColor}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                {tier.payment.label} checkout
              </div>

              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 flex-grow">
                {tier.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-emerald-500">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenBooking(tier)}
                className={`w-full py-3 rounded-full text-sm font-semibold transition-all active:scale-[0.97] ${
                  tier.highlighted
                    ? 'text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:shadow-lg hover:shadow-sky-500/25'
                    : `text-white bg-gradient-to-r ${tier.payment.gradient} hover:shadow-lg hover:shadow-indigo-500/25`
                }`}
              >
                {tier.payment.cta} - {tier.price}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-zinc-400 dark:text-zinc-500 mt-8 max-w-lg mx-auto"
        >
          Consultation fees cover the initial one-on-one deep diagnosis and tailored blueprint. Custom build pricing is quoted separately after assessment.
        </motion.p>
      </div>
    </section>
  );
}