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
            '@mui/material/Alert': path.resolve(__dirname, 'src/__mocks__/mui/Alert.tsx'),
            '@mui/material/Box': path.resolve(__dirname, 'src/__mocks__/mui/Box.tsx'),
            '@mui/material/Button': path.resolve(__dirname, 'src/__mocks__/mui/Button.tsx'),
            '@mui/material/Card': path.resolve(__dirname, 'src/__mocks__/mui/Card.tsx'),
            '@mui/material/IconButton': path.resolve(__dirname, 'src/__mocks__/mui/IconButton.tsx'),
            '@mui/material/InputAdornment': path.resolve(
                __dirname,
                'src/__mocks__/mui/InputAdornment.tsx',
            ),
            '@mui/material/TextField': path.resolve(__dirname, 'src/__mocks__/mui/TextField.tsx'),
        },
    },
});
