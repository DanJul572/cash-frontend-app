import { defineConfig } from 'vite';

import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';

import { federationRemotes, getFederationShared } from '../../module-federation.shared';
import packageJson from './package.json' with { type: 'json' };

const { port } = federationRemotes.validateOtp;

export default defineConfig({
  // Reuse the repo root .env while this remote lives in the monorepo
  envDir: '../..',
  plugins: [
    react(),
    federation({
      name: 'validateOtp',
      filename: 'remoteEntry.js',
      exposes: {
        './ValidateOtpPage': './src/exposes/validate-otp-page.tsx',
      },
      shared: getFederationShared(packageJson.dependencies),
      // The host declares this remote's types itself, so its typecheck never needs the remote running
      dts: false,
    }),
  ],
  server: {
    port,
    strictPort: true,
    origin: `http://localhost:${port}`,
  },
  preview: {
    port,
    strictPort: true,
  },
  build: {
    target: 'esnext',
  },
});
