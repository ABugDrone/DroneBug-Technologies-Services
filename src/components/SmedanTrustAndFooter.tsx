import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CopySimple } from '@phosphor-icons/react';
import { toast } from 'sonner';
import { BRAND, FAQS, SOCIAL_LINKS } from '../data/dronebugData';

export default function SmedanTrustAndFooter({ onOpenSMEDAN }: { onOpenSMEDAN: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: BRAND.name,
          text: `Check out ${BRAND.name} for tech solutions`,
          url: BRAND.shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(BRAND.shareUrl);
        toast.success('Link copied to clipboard!');
      }
    } catch {
      // User cancelled or share failed silently
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* SMEDAN Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-8 shadow-lg mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3 7h-6l3-7z" />
              <path d="M9 9l-1 13h8l-1-13" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Verified Micro Enterprise
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
            Registered with SMEDAN
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto mb-6 leading-relaxed">
            DroneBug Technologies is officially registered with the Small and Medium Enterprises Development Agency of Nigeria (SMEDAN). Click below to view our certificate.
          </p>
          <button
            onClick={onOpenSMEDAN}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-[0.97]"
          >
            View Certificate
          </button>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white pr-4">{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-zinc-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-xl p-5 shadow-md hover:shadow-lg transition-all active:scale-[0.97] text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/30 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-zinc-600 dark:text-zinc-300 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                  {link.icon === 'WhatsApp' && (
                    <path
                      fill="currentColor"
                      d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.043zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                    />
                  )}
                  {link.icon === 'Mail' && (
                    <>
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="2" fill="none" />
                    </>
                  )}
                  {link.icon === 'GithubLogo' && <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" fill="none" /></>}
                  {link.icon === 'FacebookLogo' && <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" fill="none" /></>}
                </svg>
              </div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{link.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 pt-10 pb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={BRAND.logoUrl} alt={BRAND.shortName} className="h-7 w-auto" />
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} {BRAND.shortName}. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                aria-label="Share"
              >
                <CopySimple size={16} />
                Share
              </button>
              <a
                href={BRAND.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {BRAND.email}
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}