import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DIRMS_META, DIRMS_FEATURES } from '../data/productsData';
import { WHATSAPP_URL } from '../data/dronebugData';

export default function Dirms() {
  useEffect(() => {
    document.title = 'DIRMS — Inventory & Records Management Review | DroneBug';
  }, []);

  return (
    <article className="pt-28 sm:pt-32 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-400 dark:text-zinc-500 mb-6">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-sky-500">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-600 dark:text-zinc-300">DIRMS</span>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
              {DIRMS_META.license.toUpperCase()} · {DIRMS_META.version}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400">
              {DIRMS_META.platform}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400">
              100% OFFLINE
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            {DIRMS_META.shortName}
          </h1>
          <p className="text-base sm:text-lg font-medium text-sky-600 dark:text-sky-400 mb-4">{DIRMS_META.name}</p>
          <p className="max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">{DIRMS_META.description}</p>

          {/* Download block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
            <a
              href={DIRMS_META.downloadDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-[0.97]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download for Windows ({DIRMS_META.size})
            </a>
            <a
              href={DIRMS_META.downloadLocal}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 transition-all active:scale-[0.97]"
            >
              Mirror: direct .exe
            </a>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Primary: Google Drive · Alternative: <a href={DIRMS_META.downloadGithub} target="_blank" rel="noopener noreferrer" className="underline hover:text-sky-500">GitHub Releases</a> · Free & open-source
          </p>
        </motion.header>

        {/* Verdict box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-xl bg-gradient-to-br from-sky-50/80 to-indigo-50/80 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl p-6 sm:p-8 shadow-lg mb-14"
        >
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">Our verdict: the notebook killer for Nigerian shops</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            We ran DIRMS v1.5.0 through a full market-day simulation — 6 products, cash + transfer + credit sales, diesel expenses, thermal printing, backup and restore.
            It never touched the internet once. SQLite stayed in sync, receipts printed clean on 80mm paper, and the credit ledger balanced to the kobo.
            For any SME still tracking stock in an exercise book, this free download pays for itself before lunch. <strong>Rating: 9.2/10.</strong>
          </p>
        </motion.div>

        {/* 10 feature chapters */}
        <div className="space-y-14">
          {DIRMS_FEATURES.map((f, i) => (
            <motion.section
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                <div className="p-6 sm:p-8 flex flex-col justify-center order-2 lg:order-none">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                      {String(f.id).padStart(2, '0')}
                    </span>
                    <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                      {f.module}{f.shortcut !== '—' ? ` · ${f.shortcut}` : ''}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3">{f.title}</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{f.body}</p>
                  <ul className="space-y-2">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-emerald-500">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-zinc-950 p-3 sm:p-4 flex items-center order-1 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={f.image}
                    alt={`DIRMS ${f.module} — ${f.title}`}
                    loading="lazy"
                    className="w-full rounded-xl border border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Ready to ditch the notebook?</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">Free, open-source, offline. Installs on any Windows 10/11 PC in under a minute.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={DIRMS_META.downloadDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-[0.97]"
            >
              Download DIRMS {DIRMS_META.version}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full hover:bg-emerald-100 transition-all active:scale-[0.97]"
            >
              Ask us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
