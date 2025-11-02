import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://porky-pie-tales.pages.dev',
  build: {
    format: 'directory'
  }
});
