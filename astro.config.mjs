import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://moneymasteryresources.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('admin'),
      customPages: [
        'https://moneymasteryresources.com/',
        'https://moneymasteryresources.com/calculators',
      ]
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
