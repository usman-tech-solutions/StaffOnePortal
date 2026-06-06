import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://staffoneportal.pages.dev',
  output: 'static',
  adapter: cloudflare({
    prerenderEnvironment: 'node',
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true
    }
  }),
  session: {
    driver: {
      entrypoint: 'unstorage/drivers/null'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {}
    }
  }
});
