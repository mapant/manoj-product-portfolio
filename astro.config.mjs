import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://mapant.github.io',
  output: 'static',
  integrations: [mdx()],
  build: { format: 'directory' }
});
