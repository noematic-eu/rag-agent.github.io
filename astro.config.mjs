import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://noematic-eu.github.io',
  base: '/rag-agent/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  output: 'static',
});
