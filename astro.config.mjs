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
      lastmod: new Date().toISOString(),
      filter: (page) => !page.includes('admin'),
      customPages: [
        'https://moneymasteryresources.com/',
        'https://moneymasteryresources.com/calculators',
      ],
      serialize(item) {
        // Ensure URLs don't have trailing slashes
        if (item.url.endsWith('/')) {
          item.url = item.url.slice(0, -1);
        }
        return item;
      }
    })
  ],
  output: 'static',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
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
