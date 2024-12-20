import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://moneymasteryresources.com',
  outDir: '/opt/build/repo/moneymasteryresources/dist',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  },
  image: {
    domains: ['unsplash.com'],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
    defaults: {
      quality: 85,
      format: ['webp', 'jpg'],
      formatOptions: {
        webp: { quality: 85 },
        jpg: { quality: 85 }
      }
    }
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/inter', '@fontsource/space-grotesk']
    }
  }
});
