/**
 * Documentation content.
 *
 * DIRMS is the only guide for now. The shapes below are intentionally generic
 * so future product guides (for example /documentation/dsms) can reuse them.
 */

export interface DocCallout {
  tone: 'tip' | 'warning';
  text: string;
}

export interface DocSection {
  id: string;
  title: string;
  intro: string;
  steps: string[];
  callout?: DocCallout;
}

export interface QuickStartStep {
  title: string;
  body: string;
}

export interface DocShortcut {
  keys: string;
  action: string;
}

export interface DocFaqItem {
  question: string;
  answer: string;
}

export interface VideoPlaceholder {
  title: string;
  description: string;
  length: string;
}

export interface FutureGuide {
  title: string;
  description: string;
  status: string;
}

export const DOCS_META = {
  title: 'Documentation — How to Use DIRMS | DroneBug Technologies',
  heading: 'How to use DIRMS',
  eyebrow: 'Documentation',
  intro:
    'A plain-language guide to DroneBug Inventory and Records Management System. Install it, add your stock, make a sale, and keep records you can trust — no internet needed.',
  version: 'DIRMS v1.6.0 Global',
  updated: 'November 2026',
  readTime: '10 min read',
};

export const QUICK_START: QuickStartStep[] = [
  {
    title: 'Download DIRMS',
    body: 'Get the latest .exe from our GitHub Releases page or use the direct mirror on this site. It is free and about 3–5 MB.',
  },
  {
    title: 'Install on Windows',
    body: 'Run the installer, accept the prompts, and open DIRMS from the Start menu. It runs on Windows 10/11 (64-bit) with the free WebView2 runtime.',
  },
  {
    title: 'Set up your shop',
    body: 'On first launch, enter your store name, choose your currency, then create product and service categories.',
  },
  {
    title: 'Add your products',
    body: 'Open Inventory (F2) and add each item with its barcode, cost price, selling price range, unit, and opening stock.',
  },
  {
    title: 'Make your first sale',
    body: 'Open Sell Service (F1), search or scan an item, take payment (Cash, Transfer, POS, Cash + Transfer or Debt), then Print & Save.',
  },
];

export const DOC_SECTIONS: DocSection[] = [
  {
    id: 'setup',
    title: 'First-time setup',
    intro:
      'Do this once before your first sale. It takes about ten minutes and makes every report accurate from day one.',
    steps: [
      'Open Admin (F9) and enter your store name, address and phone number for receipts.',
      'Choose your store currency. NGN is the default; each sale keeps the currency it was recorded in, even if you change it later.',
      'Create categories for your products and services. Colour-coded categories keep the POS grid tidy as you grow.',
      'Add staff accounts so each cashier signs in with their own name — the audit trail then shows who did what.',
      'Set your receipt header and footer, including your return policy.',
    ],
    callout: {
      tone: 'tip',
      text: 'Records are permanent once saved. There is no accidental delete — use backups, not deletion, to manage your data.',
    },
  },
  {
    id: 'inventory',
    title: 'Add your products',
    intro:
      'Inventory (F2) is the single source of truth for prices and stock. Everything you sell must exist here first.',
    steps: [
      'Press F2, then choose Add Product.',
      'Enter the product name, barcode, unit (piece, carton, kg, etc.) and category.',
      'Set the cost price and the minimum and maximum selling price. Cashiers can never sell above the maximum.',
      'Enter your opening stock quantity so the stock asset value is correct from the start.',
      'Save. The item now appears in Sell Service search and can be scanned at the counter.',
    ],
    callout: {
      tone: 'tip',
      text: 'No barcode on the pack? Generate printable barcode labels from Hardware Config (F7).',
    },
  },
  {
    id: 'sell',
    title: 'Record a sale',
    intro:
      'Sell Service (F1) is the checkout counter. It stays fast even with a long product list.',
    steps: [
      'Press F1 and search by product name, or scan a barcode with your scanner.',
      'Tap an item to add it to the bill. Use the quantity steppers to adjust before payment.',
      'Confirm the bill in the preview panel — quantities, unit prices and the running total.',
      'Choose the payment method: Cash, Transfer, POS/Card, Cash + Transfer, or Debt/Credit.',
      'For credit sales, pick the customer so the balance lands on their ledger.',
      'Click Print & Save to record the sale and send the receipt to your thermal printer.',
    ],
    callout: {
      tone: 'warning',
      text: 'Check the bill before saving. A saved sale cannot be casually deleted — that is what keeps your records trustworthy.',
    },
  },
  {
    id: 'receipts',
    title: 'Print receipts',
    intro:
      'DIRMS works with common 80mm thermal receipt printers. Set it up once and every sale prints with your branding.',
    steps: [
      'Connect the printer to the PC and install its Windows driver.',
      'Open Hardware Config (F7) and select your printer.',
      'Set paper width to 80mm, choose the print density, and save a test print.',
      'Edit the receipt header and footer in the same screen so every slip carries your store name and return policy.',
      'Print barcode labels from the same screen when you need shelf or product tags.',
    ],
  },
  {
    id: 'sales',
    title: 'Check sales and reports',
    intro:
      'Sales (F3) turns every checkout into a report you can act on at closing time or month end.',
    steps: [
      'Press F3 to see revenue, cash collected, POS/transfer collected and outstanding credit.',
      'Filter by Today, a single date, a custom range, or all history.',
      'Open any receipt to see the product breakdown, quantities, rates, customer and payment method.',
      'Use the reprint action when a customer asks for a copy.',
      'Check outstanding credit before you close so you know what is still owed.',
    ],
  },
  {
    id: 'customers',
    title: 'Manage customers and credit',
    intro:
      'Customers (F4) replaces the paper debt book with a ledger that adds up.',
    steps: [
      'Open Customers (F4) and add a customer with their name and phone number.',
      'Record sales on credit to that customer during checkout.',
      'Use Pay Due when they settle part or all of a balance.',
      'Use Add Deposit when a customer pays in advance.',
      'Open the customer profile to see purchase history and the running balance.',
    ],
    callout: {
      tone: 'tip',
      text: 'The total balance at the bottom of the screen is exactly what your customers owe you — no adding up notebooks at night.',
    },
  },
  {
    id: 'expenses',
    title: 'Track expenses',
    intro:
      'Expenses (F5) captures the real cost of running the shop, so profit is not guesswork.',
    steps: [
      'Press F5 and add an expense: amount, category and date.',
      'Use categories that match your business — diesel, power, repairs, transport, thermal paper, wages.',
      'Filter by date range to see what you spent in a day, week or month.',
      'Review the filtered total against your sales when doing month-end.',
    ],
  },
  {
    id: 'backup',
    title: 'Backup and restore',
    intro:
      'Your database lives on your PC. A weekly backup protects it from theft, damage or a failed hard drive.',
    steps: [
      'Open Admin (F9) and choose the backup option.',
      'Export a JSON backup file containing products, sales, customers, expenses and users.',
      'Copy that file to a second location — a USB drive, phone, or cloud folder.',
      'To recover, use Restore and select the backup file. Merging old receipts will not create duplicates.',
      'Printer settings and staff logins survive a restore. A factory reset requires typing RESET and is hard to undo.',
    ],
    callout: {
      tone: 'warning',
      text: 'Back up before upgrading to a new DIRMS version, and keep at least one copy off the shop computer.',
    },
  },
  {
    id: 'shortcuts',
    title: 'Keyboard shortcuts',
    intro:
      'DIRMS is built for speed at the counter. These keys jump straight to the screen you need.',
    steps: [],
  },
  {
    id: 'troubleshoot',
    title: 'Fix common issues',
    intro: 'Most first-day problems have a one-minute fix.',
    steps: [],
  },
];

export const DOC_SHORTCUTS: DocShortcut[] = [
  { keys: 'F1', action: 'Sell Service — checkout and bill preview' },
  { keys: 'F2', action: 'Inventory — products, stock and prices' },
  { keys: 'F3', action: 'Sales — receipts, reports and reprints' },
  { keys: 'F4', action: 'Customers — profiles, credit and deposits' },
  { keys: 'F5', action: 'Expenses — overheads by category and date' },
  { keys: 'F7', action: 'Hardware Config — printer and barcode labels' },
  { keys: 'F9', action: 'Admin — categories, staff, backup and settings' },
];

export const DOC_FAQS: DocFaqItem[] = [
  {
    question: 'DIRMS will not open, or shows a blank window.',
    answer:
      'Install the free Microsoft Edge WebView2 Runtime, then restart DIRMS. Most Windows 10/11 PCs already have it; older or freshly reinstalled systems often do not.',
  },
  {
    question: 'The receipt printer prints blank or cut-off slips.',
    answer:
      'Confirm the paper width is 80mm in Hardware Config (F7), check that the printer is selected, and use a test print. A printer driver reinstall fixes most USB connection issues.',
  },
  {
    question: 'A cashier cannot sell at the price I want.',
    answer:
      'The selling-price range on the product is the guard rail. Raise the maximum price in Inventory (F2) if the price legitimately changed.',
  },
  {
    question: 'Do I need internet to use DIRMS?',
    answer:
      'No. DIRMS runs fully offline. You only need internet to download it, download the WebView2 runtime, or fetch an update.',
  },
  {
    question: 'Can I move my records to another computer?',
    answer:
      'Yes. Export a backup on the old PC, copy the JSON file across, install DIRMS on the new PC, then use Restore.',
  },
  {
    question: 'I changed the currency and old receipts look different.',
    answer:
      'That is intended. New sales use the new currency while old records keep the currency they were saved in, so history stays accurate.',
  },
];

export const VIDEO_TUTORIALS: VideoPlaceholder[] = [
  {
    title: 'Installing DIRMS on Windows',
    description: 'Download, install WebView2 if needed, and open the app for the first time.',
    length: '~4 min',
  },
  {
    title: 'Your first sale at the POS',
    description: 'Scan, adjust quantities, take payment and print a receipt.',
    length: '~6 min',
  },
  {
    title: 'Products, barcodes and stock',
    description: 'Build your catalogue and print your own barcode labels.',
    length: '~8 min',
  },
  {
    title: 'Reports, credit and backups',
    description: 'Close the day, follow up on debts, and keep your data safe.',
    length: '~7 min',
  },
];

export const FUTURE_GUIDES: FutureGuide[] = [
  {
    title: 'DSMS',
    description: 'Sheets management, cleanup and guided analysis.',
    status: 'In development',
  },
  {
    title: 'Hardware setup',
    description: 'Thermal printers, scanners and barcode label sizing.',
    status: 'Planned',
  },
  {
    title: 'Troubleshooting & recovery',
    description: 'Restore a PC, recover a backup and move to new hardware.',
    status: 'Planned',
  },
];
