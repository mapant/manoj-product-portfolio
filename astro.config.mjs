import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const unwrapInlineMdxScripts = {
  name: 'unwrap-inline-mdx-scripts',
  enforce: 'pre',
  transform(code, id) {
    if (!id.endsWith('.mdx')) return null;

    const start = '<script is:inline>{`';
    const end = '`}</script>';

    if (!code.includes(start) || !code.includes(end)) return null;

    return {
      code: code.replaceAll(start, '<script is:inline>').replaceAll(end, '</script>'),
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
