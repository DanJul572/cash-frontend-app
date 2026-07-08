import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/__tests__/setup.ts'],
    },
    resolve: {
        alias: {
            'react-i18next': path.resolve(__dirname, 'src/__mocks__/react-i18next.ts'),
            'react-hook-form': path.resolve(__dirname, 'src/__mocks__/react-hook-form.ts'),
            '@hookform/resolvers/zod': path.resolve(
                __dirname,
                'src/__mocks__/@hookform/resolvers/zod.ts',
            ),
            '@mui/material/Alert': path.resolve(__dirname, 'src/__mocks__/@mui/material/Alert.tsx'),
            '@mui/material/Box': path.resolve(__dirname, 'src/__mocks__/@mui/material/Box.tsx'),
            '@mui/material/Button': path.resolve(
                __dirname,
                'src/__mocks__/@mui/material/Button.tsx',
            ),
            '@mui/material/Card': path.resolve(__dirname, 'src/__mocks__/@mui/material/Card.tsx'),
            '@mui/material/IconButton': path.resolve(
                __dirname,
                'src/__mocks__/@mui/material/IconButton.tsx',
            ),
            '@mui/material/InputAdornment': path.resolve(
                __dirname,
                'src/__mocks__/@mui/material/InputAdornment.tsx',
            ),
            '@mui/material/TextField': path.resolve(
                __dirname,
                'src/__mocks__/@mui/material/TextField.tsx',
            ),
        },
    },
});
