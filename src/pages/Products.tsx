import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DIRMS_META, DSMS_META } from '../data/productsData';

export default function Products() {
  useEffect(() => {
    document.title = 'Our Products — DIRMS & DSMS | DroneBug Technologies';
  }, []);

  return (
    <div className="pt-28 sm:pt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-3">
            Our Products
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Software That Pays for Itself
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400">
            Lightweight, offline-first desktop tools built for Nigerian businesses — no cloud bills, no internet dependency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DIRMS card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-7 shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-indigo-500" />
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 mb-4">
              AVAILABLE · {DIRMS_META.license} · {DIRMS_META.version}
            </span>
            <div className="flex items-start gap-4 mb-3">
              <img src={DIRMS_META.icon} alt="DIRMS logo" loading="lazy" className="h-16 w-16 rounded-2xl object-cover shadow-md" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  {DIRMS_META.shortName}
                </h2>
                <p className="text-sm font-medium text-sky-600 dark:text-sky-400">{DIRMS_META.name}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{DIRMS_META.tagline} {DIRMS_META.stack}.</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products/dirms"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-lg hover:shadow-sky-500/25 transition-all active:scale-[0.97]"
              >
                Read the Review
              </Link>
              <a
                href={DIRMS_META.downloadDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 transition-all active:scale-[0.97]"
              >
                Download .exe
              </a>
            </div>
          </motion.div>

          {/* DSMS card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-7 shadow-lg overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 mb-4">
              COMING SOON
            </span>
            <div className="flex items-start gap-4 mb-3">
              <img src={DSMS_META.icon} alt="DSMS logo" loading="lazy" className="h-16 w-16 rounded-2xl object-cover shadow-md" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">{DSMS_META.shortName}</h2>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{DSMS_META.name}</p>
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{DSMS_META.tagline} {DSMS_META.pillars.join(' · ')}.</p>
            <Link
              to="/products/dsms"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-[0.97]"
            >
              See What's Coming
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
