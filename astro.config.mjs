import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
  ],
});
