import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MYPETTYTRADING_META } from '../data/productsData';
import { BRAND, WHATSAPP_URL } from '../data/dronebugData';

const FEATURES = [
  {
    title: 'Works 100% Offline',
    body: 'Slow network or zero data at the market? MyPettyTrading stores all your business records privately on your device so you can record sales, issue receipts, update stock, and check balances anytime, anywhere.',
    bullets: ['No mobile data required to sell', 'All records stay on-device', 'Works in markets, stalls, and remote shops'],
  },
  {
    title: 'Straight-Notebook Market List & Expense Ledger',
    body: 'Write down market items just like a real paper notebook—item name and quantity first—then add or update unit prices whenever market prices change. The app automatically multiplies quantity by unit price to show exact subtotals and your grand market total, and lets you convert bought items straight into your Expense Ledger or Stock Inventory with one tap.',
    bullets: ['Notebook-style entry', 'Auto-calculated subtotals', 'One-tap ledger/inventory conversion'],
  },
  {
    title: 'Customer Credit & Debtor Book',
    body: 'Keep track of credit customers cleanly. Record new credit, add follow-up purchases, or deduct partial repayments on the spot. View each customer\'s full repayment history. Strike through settled debts instead of deleting them—so your historical records stay intact for future reference—while your total unpaid debt stays calculated at the bottom.',
    bullets: ['Record credit and repayments', 'Full per-customer history', 'Settled debts preserved with strikethrough'],
  },
  {
    title: 'Smart Inventory for Products, Services & Edibles',
    body: 'Unlike rigid retail apps, MyPettyTrading supports three distinct business models side by side. Need to update dozens of items from a laptop? Export or import ready-made CSV and Excel (.xlsx) templates anytime.',
    bullets: [
      'Products: countable stock with low-stock alerts and total value',
      'Services: time-based work with flexible pricing',
      'Edibles: perishable food items with cash-discount support',
      'Bulk CSV & XLSX import/export',
    ],
  },
  {
    title: 'Instant Sales & Searchable Shop Receipts',
    body: 'Create branded sales receipts customized with your shop name, address, and phone number in seconds. Need to check a transaction from earlier? Jump straight to the top search bar to find any past receipt, review what was sold, or save/share it with your customer.',
    bullets: ['Branded receipts', 'Instant search across history', 'Save and share receipts'],
  },
  {
    title: 'Built-In Business Insights',
    body: 'Watch your daily, weekly, and date-filtered shop performance come alive on your Dashboard—comparing total earnings, expenses, unpaid debts, active stock value, and sales revenue with offline Pie, Bar, and Line charts.',
    bullets: ['Daily & weekly dashboards', 'Offline charts', 'Debt, stock, and revenue snapshot'],
  },
  {
    title: 'Speaks Your Language & Local Currency',
    body: 'Every trader deserves tools in clear, plain everyday language. Switch seamlessly offline between English, French (Français), Arabic (العربية), Hausa, and Yorùbá. Supports multi-country currencies including Nigerian Naira (₦), Cameroon / Central & West African CFA Franc (FCFA), Ghanaian Cedi, US Dollar, British Pound, Euro, and more.',
    bullets: ['5 languages', 'Multiple African & global currencies', 'Language switching works offline'],
  },
  {
    title: 'Backup & Optional Multi-Staff Sync',
    body: 'Export a complete backup file to your device storage or personal Google Drive and restore cleanly whenever switching phones. For busy shops with assistants or cashiers, an administrator can unlock local Wi-Fi / Hotspot sync to pair up to 10 staff devices offline—keeping inventory, sales, and records aligned across every counter without mobile data.',
    bullets: ['JSON/CSV backup & restore', 'Google Drive exports via system picker', 'Local Wi-Fi / hotspot sync for up to 10 staff'],
  },
];

const GET_APP_URL = 'https://wa.me/p/29123150204001326/2347037716349';

export default function MyPettyTrading() {
  useEffect(() => {
    document.title = 'MyPettyTrading — Offline Pocket Bookkeeper | DroneBug';
  }, []);

  return (
    <article className="pt-28 sm:pt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-400 dark:text-zinc-500 mb-6">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-sky-500">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-600 dark:text-zinc-300">MyPettyTrading</span>
        </nav>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16"
        >
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
                {MYPETTYTRADING_META.status}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400">
                {MYPETTYTRADING_META.platform}
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400">
                100% OFFLINE
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
              MyPettyTrading
            </h1>
            <p className="text-base sm:text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4">
              The Offline Pocket Bookkeeper Built for Real Shops & Everyday Traders
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              Running a shop, provision store, restaurant, salon, or service stall moves fast. Paper notebooks tear, fade, or get lost—and complicated accounting software often requires constant mobile data, cloud subscriptions, and hours of training. MyPettyTrading bridges that gap. Designed specifically for petty traders, small merchants, and growing retail teams, it turns any Android phone into a fast, 100% offline notebook-style bookkeeping system that keeps your sales, expenses, market purchases, customer credits, receipts, and stock completely organized in your pocket.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={GET_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-[0.97]"
              >
                Get MyPettyTrading
              </a>
              <Link
                to={MYPETTYTRADING_META.privacyUrl}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 transition-all active:scale-[0.97]"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              Currently an offline Android-only version. Leave a message about the app and we'll get back to you.
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[260px] sm:w-[300px]">
              <div className="rounded-[2.5rem] border-[10px] border-zinc-900 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-800 shadow-2xl overflow-hidden">
                <img
                  src={MYPETTYTRADING_META.splash}
                  alt="MyPettyTrading splash screen"
                  loading="eager"
                  className="w-full aspect-[9/19] object-cover"
                />
              </div>
              <img
                src={MYPETTYTRADING_META.icon}
                alt="MyPettyTrading app icon"
                className="absolute -bottom-6 -left-6 h-24 w-24 sm:h-28 sm:w-28 rounded-[1.4rem] border-4 border-white dark:border-zinc-900 shadow-2xl object-cover"
              />
            </div>
          </div>
        </motion.header>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-xl bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 sm:p-8 shadow-lg mb-14"
        >
          <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">Why merchants choose MyPettyTrading</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Built for the realities of open markets, small shops, and mobile counters. No cloud bills, no training workshops, and no internet required to run your daily sales.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-3">{f.title}</h3>
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
            </motion.div>
          ))}
        </div>

        {/* Privacy & licensing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg flex gap-5 items-start"
          >
            <img
              src={MYPETTYTRADING_META.icon}
              alt="MyPettyTrading app icon"
              loading="lazy"
              className="h-20 w-20 rounded-2xl object-cover shadow-md shrink-0"
            />
            <div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Data Privacy & Security You Control</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                Your shop data belongs to you. MyPettyTrading keeps your bookkeeping records locally on your Android device rather than uploading your customer lists or private sales ledgers to third-party servers.
              </p>
              <Link
                to={MYPETTYTRADING_META.privacyUrl}
                className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline"
              >
                Read the Privacy Policy →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-gradient-to-br from-sky-50/80 to-indigo-50/80 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Need Licensing or Support?</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
              MyPettyTrading includes a full 7-day evaluation period before requiring a license activation key. For commercial licensing, multi-staff organization activation, or reinstallation assistance, reach out to {BRAND.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GET_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-lg hover:shadow-sky-500/25 transition-all active:scale-[0.97]"
              >
                Get MyPettyTrading
              </a>
              <a
                href={`mailto:${MYPETTYTRADING_META.supportEmail}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-full hover:bg-white/80 transition-all active:scale-[0.97]"
              >
                Email Support
              </a>
            </div>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              Currently an offline Android-only version. Leave a message about the app and we'll get back to you.
            </p>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
