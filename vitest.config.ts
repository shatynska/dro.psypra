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
      { find: '~/app', replacement: resolve(__dirname, './src/app') },
      { find: '~/pages', replacement: resolve(__dirname, './src/pages') },
      { find: '~/widgets', replacement: resolve(__dirname, './src/widgets') },
      {
        find: '~/features',
        replacement: resolve(__dirname, './src/features'),
      },
      {
        find: '~/entities',
        replacement: resolve(__dirname, './src/entities'),
      },
      { find: '~/shared', replacement: resolve(__dirname, './src/shared') },
    ],
  },
});
