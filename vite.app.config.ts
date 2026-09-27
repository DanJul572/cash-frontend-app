import path from 'path';
import { defineConfig, loadEnv } from 'vite';

import { tanstackRouter } from '@tanstack/router-plugin/vite';

import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';

import { getFederationRemotes, getFederationShared } from './module-federation.shared';
import packageJson from './package.json' with { type: 'json' };

const dirname = import.meta.dirname;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, dirname);

  return {
    resolve: {
      alias: {
        '@': path.resolve(dirname, './src'),
        '@assets': path.resolve(dirname, './src/assets'),
        '@components': path.resolve(dirname, './src/components'),
        '@configs': path.resolve(dirname, './src/configs'),
        '@constants': path.resolve(dirname, './src/constants'),
        '@endpoints': path.resolve(dirname, './src/endpoints'),
        '@hooks': path.resolve(dirname, './src/hooks'),
        '@instances': path.resolve(dirname, './src/instances'),
        '@layouts': path.resolve(dirname, './src/layouts'),
        '@locales': path.resolve(dirname, './src/locales'),
        '@mappers': path.resolve(dirname, './src/mappers'),
        '@mocks': path.resolve(dirname, './src/mocks'),
        '@modules': path.resolve(dirname, './src/modules'),
        '@queries': path.resolve(dirname, './src/queries'),
        '@requests': path.resolve(dirname, './src/requests'),
        '@schemas': path.resolve(dirname, './src/schemas'),
        '@styles': path.resolve(dirname, './src/styles'),
        '@themes': path.resolve(dirname, './src/themes'),
        '@types': path.resolve(dirname, './src/types'),
        '@utils': path.resolve(dirname, './src/utils'),
      },
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react(),
      federation({
        name: 'host',
        remotes: getFederationRemotes(env),
        shared: getFederationShared(packageJson.devDependencies),
        dts: false,
      }),
    ],
    build: {
      outDir: 'dist-app',
      target: 'esnext',
    },
  };
});
