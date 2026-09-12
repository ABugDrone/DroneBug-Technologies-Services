import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DSMS_META } from '../data/productsData';
import { WHATSAPP_URL, BRAND } from '../data/dronebugData';

export default function Dsms() {
  useEffect(() => {
    document.title = 'DSMS — Coming Soon | DroneBug Technologies';
  }, []);

  return (
    <article className="pt-28 sm:pt-32 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <nav className="text-xs text-zinc-400 dark:text-zinc-500 mb-6">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-sky-500">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-600 dark:text-zinc-300">DSMS</span>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 mb-4 animate-pulse">
            IN DEVELOPMENT · COMING SOON
          </span>
          <img
            src={DSMS_META.icon}
            alt="DSMS — DroneBug Sheets Management System logo"
            className="h-36 w-36 sm:h-44 sm:w-44 mx-auto rounded-3xl shadow-2xl mb-6 object-cover"
          />
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            {DSMS_META.shortName}
          </h1>
          <p className="text-base sm:text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4">{DSMS_META.name}</p>
          <p className="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400 leading-relaxed">{DSMS_META.description}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-white/30 dark:border-white/10 shadow-2xl mb-12"
        >
          <img src={DSMS_META.promo} alt="DSMS promotional poster — Organize, Analyze, Simplify, Achieve" loading="lazy" className="w-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {DSMS_META.pillars.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-5 text-center shadow-lg"
            >
              <div className="text-2xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-1">
                0{i + 1}
              </div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">{p}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">Why we're building DSMS</h2>
          <div className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              DIRMS taught us something: Nigerian businesses don't hate software — they hate software that assumes stable internet, monthly dollar subscriptions,
              and a computer-science degree. The second-biggest pain we hear after stock control is <strong className="text-zinc-700 dark:text-zinc-200">spreadsheets</strong>:
              supplier price lists in five conflicting workbooks, sales tallies copied by hand, formulas that break silently.
            </p>
            <p>
              DSMS attacks exactly that. Point it at a messy folder of Excel files and it will <strong className="text-zinc-700 dark:text-zinc-200">organize</strong> them
              into clean tables, <strong className="text-zinc-700 dark:text-zinc-200">analyze</strong> with guided summaries and charts,
              <strong className="text-zinc-700 dark:text-zinc-200"> simplify</strong> repetitive cleanup into one-click flows,
              and leave you with <strong className="text-zinc-700 dark:text-zinc-200">audit-ready sheets</strong> you can trust.
              Like DIRMS, it will run fully offline on everyday Windows PCs.
            </p>
            <p>
              We're currently in active development — data engine first, then the guided UI. No release date yet, but DIRMS users will get first access to the beta.
              Want in early? Message us and we'll put you on the waitlist.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-[0.97]"
            >
              Join the DSMS waitlist
            </a>
            <a
              href={BRAND.gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 transition-all active:scale-[0.97]"
            >
              Email us about DSMS
            </a>
          </div>
        </motion.div>

        <p className="text-center text-sm text-zinc-400 dark:text-zinc-500">
          Meanwhile, <Link to="/products/dirms" className="underline hover:text-sky-500">DIRMS is available now</Link> — free and open-source.
        </p>
      </div>
    </article>
  );
}
