import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [
    react(),
    tailwind()
  ],
  site: 'https://linehero.tw',
  vite: {
    ssr: {
      external: ['node:buffer']
    },
    server: {
      allowedHosts: ['wsl.linehero.dev', '.linehero.dev', 'localhost', 'host.docker.internal']
    }
  }
});
