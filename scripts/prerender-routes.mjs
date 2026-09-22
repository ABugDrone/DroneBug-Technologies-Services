// Post-build: duplicate dist/index.html to static route paths so cleanUrls
// serves the SPA shell for client-side routes even if rewrites are ignored.
// Each route copy gets its own OG/Twitter meta (title, description, image)
// so link previews show the respective product logo.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const site = 'https://www.dronebugtech.shop';

const routes = {
  products: {
    title: 'Our Products — DIRMS & DSMS | DroneBug Technologies',
    description:
      'DIRMS inventory & POS software (v1.6.0 Global) and the upcoming DSMS sheets companion — free, offline-first desktop tools from DroneBug.',
    image: `${site}/og-image.png`,
    imageWidth: '1254',
    imageHeight: '1254',
    imageAlt: 'DroneBug Technologies — SMEDAN 2026 Rebranded Logo',
  },
  'products/dirms': {
    title: 'DIRMS v1.6.0 Global — Inventory & Records Management | DroneBug',
    description:
      'DIRMS v1.6.0 Global: offline-first POS, inventory & records with global currency selection and clock-tamper guard. Free download for Windows.',
    image: `${site}/og-dirms.png`,
    imageWidth: '1600',
    imageHeight: '1600',
    imageAlt: 'DIRMS — DroneBug Inventory and Records Management System logo',
  },
  'products/dsms': {
    title: 'DSMS — Coming Soon | DroneBug Technologies',
    description:
      'DSMS (DroneBug Sheets Management System) — upcoming offline desktop companion: Organize, Analyze, Simplify, Achieve.',
    image: `${site}/og-dsms.png`,
    imageWidth: '1254',
    imageHeight: '1254',
    imageAlt: 'DSMS — DroneBug Sheets Management System logo',
  },
  partners: {
    title: 'Our Partners | DroneBug Technologies',
    description:
      'Businesses running on DroneBug — from marts to mobile stores, our tools power daily sales across Nigeria.',
    image: `${site}/og-image.png`,
    imageWidth: '1254',
    imageHeight: '1254',
    imageAlt: 'DroneBug Technologies — SMEDAN 2026 Rebranded Logo',
  },
};

/** Replace one tag's content / attribute safely (replacer fn avoids `$` pitfalls). */
function swap(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`pattern not found: ${pattern}`);
  return html.replace(pattern, () => replacement);
}

const base = readFileSync(join(dist, 'index.html'), 'utf8');

for (const [route, meta] of Object.entries(routes)) {
  const url = `${site}/${route}`;
  let html = base;
  html = swap(html, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${url}" />`);
  html = swap(html, /<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = swap(
    html,
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${meta.description}" />`,
  );
  html = swap(
    html,
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = swap(html, /<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = swap(
    html,
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${meta.description}" />`,
  );
  html = swap(
    html,
    /<meta property="og:image" content=".*?" \/>/,
    `<meta property="og:image" content="${meta.image}" />`,
  );
  html = swap(
    html,
    /<meta property="og:image:secure_url" content=".*?" \/>/,
    `<meta property="og:image:secure_url" content="${meta.image}" />`,
  );
  html = swap(
    html,
    /<meta property="og:image:width" content=".*?" \/>/,
    `<meta property="og:image:width" content="${meta.imageWidth}" />`,
  );
  html = swap(
    html,
    /<meta property="og:image:height" content=".*?" \/>/,
    `<meta property="og:image:height" content="${meta.imageHeight}" />`,
  );
  html = swap(
    html,
    /<meta property="og:image:alt" content=".*?" \/>/,
    `<meta property="og:image:alt" content="${meta.imageAlt}" />`,
  );
  html = swap(html, /<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${url}" />`);
  html = swap(html, /<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${meta.title}" />`);
  html = swap(
    html,
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${meta.description}" />`,
  );
  html = swap(
    html,
    /<meta name="twitter:image" content=".*?" \/>/,
    `<meta name="twitter:image" content="${meta.image}" />`,
  );

  const dest = join(dist, `${route}.html`);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
  console.log(`route OG: ${route}.html → ${meta.image}`);
}
