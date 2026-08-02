import path from 'path';
import { defineConfig } from 'vite';

import { tanstackRouter } from '@tanstack/router-plugin/vite';

import react from '@vitejs/plugin-react';

const dirname = import.meta.dirname;

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(dirname, './src'),
            '@assets': path.resolve(dirname, './src/assets'),
            '@components': path.resolve(dirname, './src/components'),
            '@configs': path.resolve(dirname, './src/configs'),
            '@constants': path.resolve(dirname, './src/constants'),
            '@contexts': path.resolve(dirname, './src/contexts'),
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
    ],
    build: {
        outDir: 'dist-app',
    },
});
