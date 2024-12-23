import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://moneymasteryresources.com',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('admin') && !page.includes('private') && !page.includes('api'),
      customPages: [
        'https://moneymasteryresources.com/',
        'https://moneymasteryresources.com/about',
        'https://moneymasteryresources.com/blog',
        'https://moneymasteryresources.com/calculators',
        'https://moneymasteryresources.com/contact',
        'https://moneymasteryresources.com/faq',
        'https://moneymasteryresources.com/privacy',
        'https://moneymasteryresources.com/terms'
      ],
      changefreq: 'weekly',
      priority: 0.7
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
