import { motion } from 'framer-motion';
import { BRAND, STATS } from '../data/dronebugData';

export default function Hero({ onOpenPayment }: { onOpenPayment: () => void }) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-500/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-400/25 to-teal-500/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-400/20 to-purple-500/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo + Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 mb-8"
        >
          <img src={BRAND.logoUrl} alt={BRAND.shortName} className="h-16 sm:h-20 w-auto drop-shadow-lg" />
          <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full px-5 py-2 shadow-lg">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              SMEDAN Verified Micro Enterprise
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6 text-zinc-900 dark:text-white"
        >
          Cutting Costs.{' '}
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
            Boosting Profits.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-10"
        >
          Lightweight desktop tools, AI-powered software, and expert tech consultancy — helping Nigerian businesses save money and grow faster.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              onOpenPayment();
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-xl hover:shadow-sky-500/25 transition-all active:scale-[0.97]"
          >
            Start Consultation
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all active:scale-[0.97]"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-2xl p-4 sm:p-5 shadow-lg"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}