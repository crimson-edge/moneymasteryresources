import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://moneymasteryresources.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    })
  ],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url),
    builders: true,
    imageCDN: true
  }),
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['sharp']
      }
    }
  }
});
