import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://moneymasteryresources.com',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
