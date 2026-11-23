// @ts-check
import { defineConfig } from 'astro/config';

// Vercel serves the site at the domain root. GitHub Pages serves this
// repository under /ProductSNRU, so keep that prefix only for its workflow.
const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export default defineConfig({
  site: deploymentHost ? `https://${deploymentHost}` : 'https://AnakinNN.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/ProductSNRU' : '/',
});
