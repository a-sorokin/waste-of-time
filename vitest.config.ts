import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@e': path.resolve(__dirname, './electron/src'),
      '@ast': path.resolve(__dirname, './src/apps/ast'),
    },
  },
});
