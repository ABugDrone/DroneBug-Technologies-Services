import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, List, X, ShieldCheck } from '@phosphor-icons/react';
import { BRAND } from '../data/dronebugData';

export default function Navbar({
  onOpenSMEDAN,
  onOpenBooking,
  darkMode,
  toggleDark,
  onOpenPayment,
}: {
  onOpenSMEDAN: () => void;
  onOpenBooking: () => void;
  darkMode: boolean;
  toggleDark: () => void;
  onOpenPayment: () => void;
}) {
    const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const openPricing = () => {
    setMobileOpen(false);
    onOpenPayment();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
      >
        <div className="backdrop-blur-2xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-full shadow-2xl px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={BRAND.logoUrl} alt={BRAND.shortName} className="h-8 w-auto" />
            <span className="hidden sm:inline text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              {BRAND.shortName}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenSMEDAN}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
              title="SMEDAN Verified"
            >
              <ShieldCheck size={14} weight="fill" />
              SMEDAN
            </button>

            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={openPricing}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-lg hover:shadow-sky-500/25 transition-all active:scale-[0.97]"
            >
              Book Consultation
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-24 px-6 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-zinc-800 dark:text-zinc-200 py-3 border-b border-zinc-200 dark:border-zinc-800"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={openPricing}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
              >
                Book Consultation
              </button>
              <button
                onClick={() => { setMobileOpen(false); onOpenSMEDAN(); }}
                className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full"
              >
                <ShieldCheck size={18} weight="fill" />
                SMEDAN Certificate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}