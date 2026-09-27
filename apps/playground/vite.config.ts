import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

const port = 5190;

// Standalone sandbox for @zapplib/ui components; the host never loads it
export default defineConfig({
  envDir: '../..',
  plugins: [react()],
  server: {
    port,
    strictPort: true,
  },
  preview: {
    port,
    strictPort: true,
  },
});
