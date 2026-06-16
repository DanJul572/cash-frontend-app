import path from 'path';
import { defineConfig } from 'vite';

import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';

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
            '@instances': path.resolve(__dirname, './src/instances'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@layouts': path.resolve(__dirname, './src/layouts'),
            '@locales': path.resolve(__dirname, './src/locales'),
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
    ],
    build: {
        outDir: 'dist-app',
    },
});
