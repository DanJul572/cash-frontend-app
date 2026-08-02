import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
            '@endpoints': path.resolve(dirname, './src/endpoints'),
            '@modules': path.resolve(dirname, './src/modules'),
            '@instances': path.resolve(dirname, './src/instances'),
            '@hooks': path.resolve(dirname, './src/hooks'),
            '@layouts': path.resolve(dirname, './src/layouts'),
            '@locales': path.resolve(dirname, './src/locales'),
            '@mappers': path.resolve(dirname, './src/mappers'),
            '@mocks': path.resolve(dirname, './src/mocks'),
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
            autoCodeSplitting: false,
        }),
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src'],
            entryRoot: 'src',
            tsconfigPath: './tsconfig.app.json',
        }),
    ],
    build: {
        // Prevent Vite from transpiling ESM syntax into CJS-compatible output
        target: 'esnext',
        lib: {
            entry: resolve(dirname, 'src/index.ts'),
            name: 'cashapp',
            formats: ['es'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            // Use a function to cover sub-path imports like:
            // 'react/jsx-runtime', '@mui/material/Button', '@tanstack/react-router/link'
            // A plain string array only matches exact IDs, leaving sub-paths bundled in
            // and causing duplicate React instances or require() calls at runtime.
            external: (id: string) => {
                const externalPackages = [
                    '@emotion/react',
                    '@emotion/styled',
                    '@fontsource/roboto',
                    '@hookform/resolvers',
                    '@mui/icons-material',
                    '@mui/material',
                    '@mui/x-charts',
                    '@mui/x-data-grid',
                    '@mui/x-date-pickers',
                    '@mui/x-tree-view',
                    '@tanstack/react-query',
                    '@tanstack/react-query-devtools',
                    '@tanstack/react-router',
                    '@tanstack/react-router-devtools',
                    'axios',
                    'dayjs',
                    'i18next',
                    'react',
                    'react-dom',
                    'react-hook-form',
                    'react-i18next',
                    'zod',
                    'zustand',
                ];
                return externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
            },
            output: {
                format: 'es',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
