import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://moneymasteryresources.com',
  integrations: [tailwind()],
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
