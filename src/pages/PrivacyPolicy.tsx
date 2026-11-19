import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MYPETTYTRADING_META } from '../data/productsData';
import { BRAND } from '../data/dronebugData';

const SECTIONS = [
  {
    id: 'business-data',
    title: '1. Business & Financial Data (Stored Locally on Your Device)',
    paragraphs: [
      'MyPettyTrading is designed to work 100% offline for daily shop operations. Information you type into the App—including:',
    ],
    bullets: [
      'Shop profile details (business name, shop address, business phone number, currency, and language preferences)',
      'Income and expense ledger entries',
      'Sales records and digital receipts',
      'Inventory items, stock counts, and prices (Products, Services, Edibles)',
      'Market purchase lists',
      'Customer debtor names, phone numbers, addresses, and credit/repayment records',
    ],
    after: 'is stored exclusively on your local device inside the App’s private SQLite database and local preferences. DroneBug Technologies & Services does not operate cloud servers that collect, view, sell, or upload your shop records.',
  },
  {
    id: 'backups-sync',
    title: '2. User-Initiated Backups, Spreadsheets & Local Staff Sync',
    paragraphs: [
      'Certain optional features allow you to move your business records at your own direction:',
    ],
    bullets: [
      'Backup & Restore (JSON) / CSV & XLSX Export: When you choose to export data or back up to your device storage or personal Google Drive, Android\'s system file picker transfers your file directly between your device and the storage destination you select. We do not have access to your Google Drive account or backed-up files.',
      'Optional Multi-Staff Offline Sync (Local Wi-Fi / Hotspot): If activated and manually started by an organization administrator and staff on the same local Wi-Fi network or mobile hotspot, shop records synchronize directly peer-to-peer over the local network using a PIN-authenticated connection. This traffic stays within your local network and is never routed through DroneBug servers.',
    ],
  },
  {
    id: 'advertising',
    title: '3. Advertising (Google AdMob & Consent Management)',
    paragraphs: [
      'When your device is connected to the internet, MyPettyTrading uses Google AdMob (a service provided by Google LLC, via the play-services-ads Android SDK) to display advertisements (such as banner and interstitial ads), and Google UMP (User Messaging Platform) to request and manage your consent choices.',
      'To serve ads, measure ad performance, prevent fraud, and support personalized or non-personalized advertising based on your region and consent choices, Google AdMob and its certified ad technology partners may automatically collect and process:',
    ],
    bullets: [
      'Device & Ad Identifiers: Android Advertising ID (AAID) and app set ID.',
      'Network & Approximate Location Data: IP address (which may be used to estimate general/approximate location such as city or country).',
      'App Activity & Diagnostics: Ad impressions, ad clicks/interactions, crash logs, and SDK performance telemetry.',
    ],
    after: 'For details on how Google uses information from apps that use Google AdMob, please review the Google Privacy Policy and How Google uses data when you use our partners\' sites or apps.',
    links: [
      { label: 'Google Privacy Policy', url: 'https://policies.google.com/privacy' },
      { label: 'How Google uses data when you use our partners\' sites or apps', url: 'https://policies.google.com/technologies/partner-sites' },
    ],
    subSections: [
      {
        title: 'Managing Ad Consent & Opt-Out Choices',
        bullets: [
          'EEA, UK, and Switzerland Users (GDPR): When required by law, the App displays a Google UMP (User Messaging Platform) consent prompt before loading personalized ads, allowing you to Consent, Do not consent, or Manage options for advertising partners.',
          'Android System Controls: You can reset or delete your Advertising ID or opt out of personalized ads anytime in your Android device settings (Settings → Privacy / Google → Ads).',
        ],
      },
    ],
  },
  {
    id: 'permissions',
    title: '4. App Permissions Used',
    paragraphs: [
      'MyPettyTrading requests only permissions necessary for its features:',
    ],
    bullets: [
      'Internet & Network State (INTERNET, ACCESS_NETWORK_STATE): Used when online to load Google AdMob advertisements and retrieve regional privacy/consent requirements.',
      'Advertising ID (AD_ID): Used by Google Mobile Ads SDK for ad serving, frequency capping, and fraud prevention in accordance with your consent settings.',
      'Local Wi-Fi & Multicast (ACCESS_WIFI_STATE, CHANGE_WIFI_MULTICAST_STATE): Used solely when you enable and run offline local Hotspot/Wi-Fi multi-staff synchronization.',
      'Notifications (POST_NOTIFICATIONS): Used locally on your device to alert you when inventory drops to low or negative stock levels.',
      'No Location or Broad Storage Permissions: MyPettyTrading does not request device location access or broad external-storage read/write permissions. File backups and exports use the Android system file picker, which grants access only to the specific file you choose.',
    ],
  },
  {
    id: 'support',
    title: '5. Support & License Communications',
    paragraphs: [
      'License activation keys are verified locally on your device. If you tap a support link (such as WhatsApp or Email) to contact DroneBug Technologies & Services regarding license purchase or device reinstallation support, your device opens your chosen messaging or email app externally. Any contact information or payment receipts you share during support are used solely to verify and issue your license key.',
    ],
  },
  {
    id: 'children',
    title: '6. Children’s Privacy',
    paragraphs: [
      'MyPettyTrading is a commercial point-of-sale, inventory, and bookkeeping utility intended for merchants and business operators. It is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction), and we do not knowingly collect personal information from children.',
    ],
  },
  {
    id: 'retention',
    title: '7. Data Retention & Your Rights',
    bullets: [
      'Local Business Data: Your bookkeeping records remain on your device until you delete individual entries, restore/overwrite data, clear the App’s storage in Android Settings, or uninstall the App.',
      'Your Privacy Rights: Depending on your region (including GDPR, UK GDPR, Nigeria Data Protection Act, and applicable US state privacy laws), you have rights regarding access, deletion, portability, and consent withdrawal. Since your business records stay on your device, you maintain full control to export or erase them anytime, and you may withdraw ad consent via the device ad settings or regional consent options.',
    ],
  },
  {
    id: 'changes',
    title: '8. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time to reflect app improvements or legal/advertising requirements. Updates will be posted on this page with an updated "Last Updated" date.',
    ],
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy — MyPettyTrading | DroneBug Technologies';
  }, []);

  return (
    <article className="pt-28 sm:pt-32 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-zinc-400 dark:text-zinc-500 mb-6">
          <Link to="/" className="hover:text-sky-500">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-600 dark:text-zinc-300">Privacy Policy</span>
        </nav>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <div className="shrink-0">
              <img
                src={MYPETTYTRADING_META.icon}
                alt="MyPettyTrading app icon"
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 mb-3">
                MyPettyTrading
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
                This Privacy Policy explains how information is handled when you use MyPettyTrading on Android. Effective Date and Last Updated: November 17, 2026.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-xl p-4">
              <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Developer</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">{BRAND.name}</span>
            </div>
            <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-xl p-4">
              <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Contact</span>
              <a href={`mailto:${MYPETTYTRADING_META.supportEmail}`} className="font-medium text-sky-600 dark:text-sky-400 hover:underline">
                {MYPETTYTRADING_META.supportEmail}
              </a>
            </div>
            <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-xl p-4">
              <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Website</span>
              <a href={`https://${BRAND.domain}`} target="_blank" rel="noopener noreferrer" className="font-medium text-sky-600 dark:text-sky-400 hover:underline">
                {BRAND.domain}
              </a>
            </div>
            <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-xl p-4">
              <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">App Page</span>
              <Link to="/products/mypettytrading" className="font-medium text-sky-600 dark:text-sky-400 hover:underline">
                MyPettyTrading
              </Link>
            </div>
          </div>
        </motion.header>

        {/* Splash visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden border border-white/30 dark:border-white/10 shadow-2xl mb-14"
        >
          <img
            src={MYPETTYTRADING_META.splash}
            alt="MyPettyTrading splash screen"
            loading="lazy"
            className="w-full max-h-[320px] object-cover object-top"
          />
        </motion.div>

        {/* Policy body */}
        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">{section.title}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{p}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 mb-4">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {section.after && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{section.after}</p>
              )}
              {section.links && (
                <ul className="space-y-2 mb-4">
                  {section.links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-sky-600 dark:text-sky-400 hover:underline"
                      >
                        {l.label} →
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {section.subSections?.map((sub) => (
                <div key={sub.title} className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">{sub.title}</h3>
                  <ul className="space-y-3">
                    {sub.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.section>
          ))}

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-gradient-to-br from-sky-50/80 to-indigo-50/80 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-4">9. Contact Us</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              If you have questions or requests regarding this Privacy Policy or MyPettyTrading, contact us at:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-xl p-4">
                <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Company</span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{BRAND.name}</span>
              </div>
              <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-xl p-4">
                <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Email</span>
                <a href={`mailto:${MYPETTYTRADING_META.supportEmail}`} className="font-medium text-sky-600 dark:text-sky-400 hover:underline">
                  {MYPETTYTRADING_META.supportEmail}
                </a>
              </div>
              <div className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-white/30 dark:border-white/10 rounded-xl p-4">
                <span className="block text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-1">Website</span>
                <a href={`https://${BRAND.domain}`} target="_blank" rel="noopener noreferrer" className="font-medium text-sky-600 dark:text-sky-400 hover:underline">
                  {BRAND.domain}
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </article>
  );
}
