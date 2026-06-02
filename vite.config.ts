import path from 'path';
import { defineConfig } from 'vite';

import federation from '@originjs/vite-plugin-federation';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';

import remotesConfig from './remotes.config.json';

const remotes = Object.fromEntries(remotesConfig.remotes.map(({ name, url }) => [name, url]));

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@configs': path.resolve(__dirname, './src/configs'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@endpoints': path.resolve(__dirname, './src/endpoints'),
            '@features': path.resolve(__dirname, './src/features'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@mappers': path.resolve(__dirname, './src/mappers'),
            '@queries': path.resolve(__dirname, './src/queries'),
            '@requests': path.resolve(__dirname, './src/requests'),
            '@schemas': path.resolve(__dirname, './src/schemas'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@types': path.resolve(__dirname, './src/types'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
        }),
        react(),
        federation({
            name: 'cash-app',
            remotes: remotes,
            shared: ['react', 'react-dom'],
        }),
    ],
    build: {
        target: 'esnext',
    },
});
