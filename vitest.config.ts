import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: [
      { find: '~/app', replacement: resolve(__dirname, './src/1-app') },
      { find: '~/pages', replacement: resolve(__dirname, './src/2-pages') },
      { find: '~/widgets', replacement: resolve(__dirname, './src/3-widgets') },
      {
        find: '~/features',
        replacement: resolve(__dirname, './src/4-features'),
      },
      {
        find: '~/entities',
        replacement: resolve(__dirname, './src/5-entities'),
      },
      { find: '~/shared', replacement: resolve(__dirname, './src/6-shared') },
    ],
  },
});
