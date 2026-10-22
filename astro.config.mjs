import { defineConfig } from 'astro/config';

// Replace with the live domain before launch; it drives canonical URLs and the sitemap.
export default defineConfig({
  site: 'https://coastalbamacabinets.com',
  // Inline the (small) stylesheet into every page: one less request, and the
  // page renders styled even when a crawler or speed tester skips CSS files.
  build: { inlineStylesheets: 'always' },
});
