import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [
      {
        enforce: 'pre',
        ...mdx({
          providerImportSource: '@mdx-js/react',
        }),
      },
      react(),
      tailwindcss(),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});