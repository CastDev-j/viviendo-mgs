// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://viviendo-mi-gran-sueno.vercel.app',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  experimental: {
    clientPrerender: true,
  },
});