import federation from '@originjs/vite-plugin-federation';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@configs': path.resolve(__dirname, './src/configs'),
            '@features': path.resolve(__dirname, './src/features'),
            '@languages': path.resolve(__dirname, './src/languages'),
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
            name: 'zcore',
            remotes: {
                exampleApp: 'http://localhost:5001/assets/remoteEntry.js',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    build: {
        target: 'esnext',
    },
});
