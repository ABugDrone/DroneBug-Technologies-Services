// Post-build: duplicate dist/index.html to static route paths so cleanUrls
// serves the SPA shell for client-side routes even if rewrites are ignored.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const routes = ['products', 'products/dirms', 'products/dsms', 'partners'];

for (const route of routes) {
  const dest = join(dist, `${route}.html`);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(join(dist, 'index.html'), dest);
  console.log(`route copy: ${route}.html`);
}
