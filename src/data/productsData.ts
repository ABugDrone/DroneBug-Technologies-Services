import dirms1 from '../assets/dirms/dirms-1.png';
import dirms2 from '../assets/dirms/dirms-2.png';
import dirms3 from '../assets/dirms/dirms-3.png';
import dirms4 from '../assets/dirms/dirms-4.png';
import dirms5 from '../assets/dirms/dirms-5.png';
import dirms6 from '../assets/dirms/dirms-6.png';
import dirms7 from '../assets/dirms/dirms-7.png';
import dirms8 from '../assets/dirms/dirms-8.png';
import dirms9 from '../assets/dirms/dirms-9.png';
import dirms10 from '../assets/dirms/dirms-10.png';
import dirmsIcon from '../assets/dirms-icon.png';
import dsmsIcon from '../assets/dsms-icon.png';
import dsmsPromo from '../assets/dsms-promo.png';

import partnerAmirable from '../assets/Partners/amirable.png';
import partnerAmoCakes from '../assets/Partners/amo-cakes-n-more.png';
import partnerBeti from '../assets/Partners/beti.png';
import partnerFakson from '../assets/Partners/fakson.png';
import partnerJoainas from '../assets/Partners/joainas-mart.png';
import partnerMaiKanti from '../assets/Partners/mai-kanti.png';
import partnerMajesty from '../assets/Partners/majesty.png';
import partnerMobgal from '../assets/Partners/mobgal-khairu.png';
import partnerNerrylinks from '../assets/Partners/nerrylinks.png';
import partnerSenior from '../assets/Partners/senior-citizen.png';
import partnerTeedal from '../assets/Partners/teedal-kahiru.png';
import partnerUrdi from '../assets/Partners/urdi-galore.png';

export interface DirmsFeature {
  id: number;
  module: string;
  shortcut: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
}

export const DIRMS_META = {
  name: 'DroneBug Inventory and Records Management System',
  shortName: 'DIRMS',
  version: 'v1.5.0',
  tagline: 'Offline-first POS, inventory & records for Nigerian SMEs.',
  icon: dirmsIcon,
  description:
    'DIRMS is an open-source, offline-first desktop app for shops, marts, pharmacies and small warehouses: point-of-sale checkout, inventory catalog, sales logs, customer credit ledgers, expense tracking, thermal receipt printing, barcode generation, and one-click SQLite backup — all running locally with no internet required.',
  downloadDrive:
    'https://drive.usercontent.google.com/download?id=1T00q-nzmqP0CpLf2ED9UOMWK-vg0TyLp&export=download&authuser=0',
  downloadGithub:
    'https://github.com/ABugDrone/DroneBug-Technologies-Services/releases',
  downloadLocal: '/downloads/DIRMS_1.5.0_x64-setup.exe',
  webview2Url: 'https://go.microsoft.com/fwlink/p/?LinkId=2124703',
  webview2OfflineUrl:
    'https://developer.microsoft.com/microsoft-edge/webview2/?form=MA13LH',
  webview2Note:
    'Requires the free Microsoft WebView2 Runtime (pre-installed on most Windows 10/11 PCs).',
  size: '~5 MB',
  platform: 'Windows x64',
  license: 'Open-Source',
  stack: 'SQLite • Offline-first • Thermal POS • Barcode',
};

export const DIRMS_FEATURES: DirmsFeature[] = [
  {
    id: 1,
    module: 'Sell Service',
    shortcut: 'F1',
    title: 'Lightning POS Checkout',
    body: 'The Sell Service screen is a full point-of-sale terminal: type a product name or scan a barcode, tap any item to add it to the bill, adjust quantities inline, and close the sale with Cash, Transfer, POS/Card, Cash + Transfer, or Debt/Credit. Unit prices auto-check against the preset max so cashiers can never oversell.',
    bullets: ['Barcode + text search', '5 payment methods incl. Debt/Credit', 'Auto price-guard rails', 'Live bill preview with receipt'],
    image: dirms1,
  },
  {
    id: 2,
    module: 'Customer Bill Preview',
    shortcut: 'F1',
    title: 'Bill Dataset Preview, Print & Save',
    body: 'Before money changes hands, DIRMS lays the whole bill out as a clean dataset: quantities with steppers, per-line rates, max-price guards, and a running total. One click saves the receipt to records and sends it to the thermal printer — no re-typing, no paper math.',
    bullets: ['Full-bill review grid', 'One-click Print & Save', 'Inline quantity steppers', 'Persistent bill while searching'],
    image: dirms2,
  },
  {
    id: 3,
    module: 'Inventory',
    shortcut: 'F2',
    title: 'Stock Catalog with Price Ranges',
    body: 'Every product lives in a searchable catalog with barcode, cost price, selling-price range, unit, and live stock level. The header shows total stock asset value (₦4.48M in the demo) so owners see tied-up capital at a glance. Checkout prices must stay within the preset max — the catalog is the single source of truth.',
    bullets: ['Barcode-indexed catalog', 'Min/max selling-price control', 'Live stock levels per unit', 'Total asset-value header'],
    image: dirms3,
  },
  {
    id: 4,
    module: 'Sales',
    shortcut: 'F3',
    title: 'Sales Reports & Daily Logs',
    body: 'Every checkout lands in the Sales Report: total revenue, cash/POS collected, transaction count, and outstanding credit — filterable by Today, a single date, a range, or all history. Each receipt expands to product breakdown, quantities, rates, customer, and one-click reprint.',
    bullets: ['Revenue / cash / credit cards', 'Today · Date · Range · All filters', 'Receipt-level drill-down', 'Preview + reprint actions'],
    image: dirms4,
  },
  {
    id: 5,
    module: 'Customers',
    shortcut: 'F4',
    title: 'Customer Profiles & Credit Ledger',
    body: 'Run "buy now, pay later" without a notebook: customer profiles carry balances, advance deposits, and full purchase history. Pay Due / Add Deposit settles accounts in one tap, and the total balance footer shows exactly what the street owes you.',
    bullets: ['Credit + advance-deposit ledger', 'Per-customer sales history', 'Pay-due in one tap', 'Total balance footer'],
    image: dirms5,
  },
  {
    id: 6,
    module: 'Expenses',
    shortcut: 'F5',
    title: 'Operational Expense Tracker',
    body: 'Profit is revenue minus reality — diesel for the generator, NEPA fixes, cold-room maintenance, thermal paper, logistics. DIRMS logs every overhead by category and date range, with a filtered total so month-end actually adds up.',
    bullets: ['Categorized overhead logging', 'Date-range expenditure reports', 'Naira-accurate totals', 'Built for Nigerian realities'],
    image: dirms6,
  },
  {
    id: 7,
    module: 'Hardware Config',
    shortcut: 'F7',
    title: 'Thermal Printer + Barcode Setup',
    body: 'DIRMS talks to real shop hardware: configure an 80mm thermal receipt printer (Xprinter M813 walkthrough included), set print density, brand the receipt header/footer with store name and return policy, and generate product barcode labels from the same screen.',
    bullets: ['Thermal receipt printer setup', 'Barcode label generator', 'Custom receipt branding', 'Paper + density controls'],
    image: dirms7,
  },
  {
    id: 8,
    module: 'Admin · Categories',
    shortcut: 'F9',
    title: 'Admin Control Center & Categories',
    body: 'Owners get a control center: staff user accounts, color-coded product vs service categories, a 57-event audit trail, and security/recovery tools. Categories created here flow straight into the POS grid, keeping tangible products and intangible services cleanly separated.',
    bullets: ['Staff accounts + roles', 'Color-coded categories', 'Full audit trail', 'Security & recovery'],
    image: dirms8,
  },
  {
    id: 9,
    module: 'Admin · Backups',
    shortcut: 'F9',
    title: 'One-Click Backup, Restore & Reset',
    body: 'Your records are permanent once added — there is no accidental delete. Export the whole system (products, sales, customers, expenses, users) as JSON, restore from any backup file, merge old receipts without duplicates, or factory-reset with a typed RESET confirmation. Printer config and logins always survive.',
    bullets: ['JSON export / restore', 'Duplicate-safe receipt merge', 'Guarded factory reset', 'SQLite local-first storage'],
    image: dirms9,
  },
  {
    id: 10,
    module: 'Display',
    shortcut: '—',
    title: 'Cashier-Friendly Display Settings',
    body: 'Built for real counters, not demos: switch colors, fonts, and text size from 100% up to 138% Extra Large so totals stay legible across the shop. Every naira figure re-renders instantly with a live ₦125,000 sample preview.',
    bullets: ['100%–138% text scaling', 'Color + font themes', 'Live sample preview', 'High-visibility cashier mode'],
    image: dirms10,
  },
];

export const DSMS_META = {
  name: 'DroneBug Sheets Management System',
  shortName: 'DSMS',
  status: 'In development — coming soon',
  tagline: 'Simplify Excel. Boost Productivity.',
  description:
    'DSMS (DroneBug Sheets Management System) is our upcoming desktop companion for anyone drowning in spreadsheets: organize messy workbooks, analyze with guided summaries and charts, simplify repetitive cleanup, and achieve audit-ready sheets — all offline.',
  pillars: ['Organize', 'Analyze', 'Simplify', 'Achieve'],
  icon: dsmsIcon,
  promo: dsmsPromo,
};

/** Partner logos — images only, intentionally no names/descriptions. */
export const PARTNER_LOGOS: string[] = [
  partnerAmirable,
  partnerAmoCakes,
  partnerBeti,
  partnerFakson,
  partnerJoainas,
  partnerMaiKanti,
  partnerMajesty,
  partnerMobgal,
  partnerNerrylinks,
  partnerSenior,
  partnerTeedal,
  partnerUrdi,
];
