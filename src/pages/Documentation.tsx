import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DIRMS_META } from '../data/productsData';
import {
  DOCS_META,
  QUICK_START,
  DOC_SECTIONS,
  DOC_SHORTCUTS,
  DOC_FAQS,
  VIDEO_TUTORIALS,
  FUTURE_GUIDES,
} from '../data/docsData';
import { WHATSAPP_URL } from '../data/dronebugData';

const NAV_ITEMS = [
  ...DOC_SECTIONS.map((s) => ({ id: s.id, title: s.title })),
  { id: 'videos', title: 'Video tutorials' },
  { id: 'more', title: 'More guides' },
];

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-1 text-emerald-500"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Documentation() {
  useEffect(() => {
    document.title = DOCS_META.title;
  }, []);

  return (
    <article className="pt-28 sm:pt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-400 dark:text-zinc-500 mb-6">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-600 dark:text-zinc-300">Documentation</span>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-3">
            {DOCS_META.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            {DOCS_META.heading}
          </h1>
          <p className="max-w-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
            {DOCS_META.intro}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs mb-6">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 font-semibold">
              {DOCS_META.version}
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 font-semibold">
              Works 100% offline
            </span>
            <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
              Updated {DOCS_META.updated} · {DOCS_META.readTime}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#setup"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-[0.97]"
            >
              Start with setup
            </a>
            <a
              href={DIRMS_META.downloadLatestGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all active:scale-[0.97]"
            >
              Download DIRMS {DIRMS_META.latestVersion}
            </a>
          </div>
        </motion.header>

        {/* Quick start */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-labelledby="quick-start-heading"
          className="mb-14"
        >
          <div className="flex flex-wrap items-end justify-between gap-2 mb-5">
            <h2 id="quick-start-heading" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Up and running in five steps
            </h2>
            <span className="text-xs text-zinc-400 dark:text-zinc-500">About 15 minutes, start to first receipt</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {QUICK_START.map((step, i) => (
              <div
                key={step.title}
                className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white text-sm font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Mobile section jump */}
        <nav aria-label="Documentation sections" className="lg:hidden -mx-6 px-6 mb-8 overflow-x-auto">
          <div className="flex gap-2 w-max">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap px-3 py-1.5 text-xs font-medium rounded-full bg-white/70 dark:bg-slate-900/70 border border-white/40 dark:border-white/10 text-zinc-600 dark:text-zinc-300"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 items-start">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
              On this page
            </p>
            <ul className="space-y-1 border-l border-zinc-200 dark:border-zinc-800">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="-ml-px block border-l border-transparent pl-4 py-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-400 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sky-50/90 to-indigo-50/90 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200 dark:border-sky-800 p-4">
              <p className="text-xs font-bold text-zinc-900 dark:text-white mb-1">Need a hand?</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3 leading-relaxed">
                We can set DIRMS up with you and train your cashiers.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </aside>

          {/* Guide */}
          <div className="min-w-0">
            <div className="space-y-10">
              {DOC_SECTIONS.map((section, i) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4 }}
                  className="scroll-mt-28 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-md"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {section.intro}
                  </p>

                  {section.id === 'shortcuts' ? (
                    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                      <table className="w-full text-sm">
                        <thead className="bg-zinc-50 dark:bg-slate-800/60 text-left text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                          <tr>
                            <th scope="col" className="px-4 py-2.5 font-semibold w-24">Key</th>
                            <th scope="col" className="px-4 py-2.5 font-semibold">Opens</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                          {DOC_SHORTCUTS.map((row) => (
                            <tr key={row.keys}>
                              <td className="px-4 py-2.5">
                                <kbd className="inline-block min-w-8 text-center px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-xs font-bold text-zinc-700 dark:text-zinc-200">
                                  {row.keys}
                                </kbd>
                              </td>
                              <td className="px-4 py-2.5 text-zinc-600 dark:text-zinc-300">{row.action}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : section.id === 'troubleshoot' ? (
                    <div className="space-y-2">
                      {DOC_FAQS.map((faq) => (
                        <details
                          key={faq.question}
                          className="group rounded-xl bg-zinc-50/80 dark:bg-slate-800/50 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                            {faq.question}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                              aria-hidden="true"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </summary>
                          <p className="px-4 pb-4 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </details>
                      ))}
                    </div>
                  ) : (
                    <ol className="space-y-2.5">
                      {section.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          <CheckIcon />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.callout && (
                    <div
                      className={`mt-4 rounded-xl p-4 text-sm leading-relaxed border ${
                        section.callout.tone === 'warning'
                          ? 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-zinc-600 dark:text-zinc-300'
                          : 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-zinc-600 dark:text-zinc-300'
                      }`}
                    >
                      <strong className="text-zinc-800 dark:text-zinc-100">
                        {section.callout.tone === 'warning' ? 'Important: ' : 'Tip: '}
                      </strong>
                      {section.callout.text}
                    </div>
                  )}
                </motion.section>
              ))}
            </div>

            {/* Video tutorials */}
            <motion.section
              id="videos"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              aria-labelledby="videos-heading"
              className="scroll-mt-28 mt-14"
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 id="videos-heading" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  Video tutorials
                </h2>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400">
                  Coming soon
                </span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 max-w-2xl">
                Short walkthroughs recorded on a real shop counter. They will be added here —
                the written guide above covers everything in the meantime.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VIDEO_TUTORIALS.map((video) => (
                  <div
                    key={video.title}
                    className="relative rounded-2xl overflow-hidden border border-white/30 dark:border-white/10 bg-zinc-100 dark:bg-slate-900 shadow-md"
                  >
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-slate-800 dark:to-slate-900">
                      <div className="h-12 w-12 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur flex items-center justify-center text-zinc-500 dark:text-zinc-300">
                        <PlayIcon />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-zinc-900 dark:text-white">{video.title}</h3>
                        <span className="shrink-0 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500">
                          {video.length}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{video.description}</p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        Coming soon
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Future guides */}
            <motion.section
              id="more"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4 }}
              aria-labelledby="more-heading"
              className="scroll-mt-28 mt-14"
            >
              <h2 id="more-heading" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                More guides are on the way
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 max-w-2xl">
                This documentation hub will grow with our products. Each new guide gets its own
                page under this section.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {FUTURE_GUIDES.map((guide) => (
                  <div
                    key={guide.title}
                    className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-white/40 dark:bg-slate-900/40 p-5"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                      {guide.status}
                    </span>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1">{guide.title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{guide.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-14 rounded-2xl bg-gradient-to-br from-sky-50/90 to-indigo-50/90 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200 dark:border-sky-800 p-6 sm:p-8 text-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Ready to put DIRMS to work?
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5">
                Free, open-source and offline — install it today or ask us to set it up with you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={DIRMS_META.downloadLatestGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-[0.97]"
                >
                  Download {DIRMS_META.shortName} {DIRMS_META.latestVersion}
                </a>
                <Link
                  to="/products/dirms"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/90 dark:hover:bg-slate-800 transition-all active:scale-[0.97]"
                >
                  See the full product tour
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all active:scale-[0.97]"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
}
