import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath } from 'url';

export default defineConfig(() => {
  return {
    plugins: [viteReact(), tsconfigPaths()],
    test: {
      watch: false,
      globals: true,
      clearMocks: true,
      environment: 'jsdom',
      setupFiles: fileURLToPath(new URL('./vitest.setup.mts', import.meta.url)),
    },
  };
});
