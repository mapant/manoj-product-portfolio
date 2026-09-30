import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import fs from 'node:fs';

const unwrapInlineMdxScripts = {
  name: 'unwrap-inline-mdx-scripts',
  enforce: 'pre',
  load(id) {
    const file = id.split('?')[0];
    if (!file.endsWith('.mdx')) return null;

    const code = fs.readFileSync(file, 'utf8');
    const start = '<script is:inline>{`';
    const end = '`}</script>';

    if (!code.includes(start) || !code.includes(end)) return null;

    return {
      code: code.replaceAll(start, '<script>').replaceAll(end, '</script>'),
      map: null,
    };
  },
};

export default defineConfig({
  output: 'static',
  integrations: [mdx()],
  vite: {
    plugins: [unwrapInlineMdxScripts],
  },
  build: { format: 'directory' },
});
