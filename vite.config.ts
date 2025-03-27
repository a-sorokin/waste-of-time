import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';

export default defineConfig(({ mode }) => {
  return {
    build: { sourcemap: true },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@e': path.resolve(__dirname, './electron/src'),
      },
    },
    css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
    plugins: [
      react(),
      mode === 'web'
        ? null
        : electron({
            main: {
              entry: 'electron/main.ts',
              vite: { resolve: { alias: { '@e': path.resolve(__dirname, './electron/src') } } },
            },
            preload: { input: path.join(__dirname, 'electron/preload.ts') },
            renderer: process.env.NODE_ENV === 'test' ? undefined : {},
          }),
    ],
  };
});
