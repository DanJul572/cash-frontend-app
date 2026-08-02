import path from 'path';
import { defineConfig } from 'vitest/config';

const dirname = import.meta.dirname;

export default defineConfig({
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/__tests__/setup.ts'],
    },
    resolve: {
        alias: {
            'react-i18next': path.resolve(dirname, 'src/__mocks__/react-i18next.ts'),
            'react-hook-form': path.resolve(dirname, 'src/__mocks__/react-hook-form.ts'),
            '@hookform/resolvers/zod': path.resolve(
                dirname,
                'src/__mocks__/@hookform/resolvers/zod.ts',
            ),
            '@mui/material/Alert': path.resolve(dirname, 'src/__mocks__/@mui/material/Alert.tsx'),
            '@mui/material/Box': path.resolve(dirname, 'src/__mocks__/@mui/material/Box.tsx'),
            '@mui/material/Button': path.resolve(dirname, 'src/__mocks__/@mui/material/Button.tsx'),
            '@mui/material/Card': path.resolve(dirname, 'src/__mocks__/@mui/material/Card.tsx'),
            '@mui/material/IconButton': path.resolve(
                dirname,
                'src/__mocks__/@mui/material/IconButton.tsx',
            ),
            '@mui/material/InputAdornment': path.resolve(
                dirname,
                'src/__mocks__/@mui/material/InputAdornment.tsx',
            ),
            '@mui/material/TextField': path.resolve(
                dirname,
                'src/__mocks__/@mui/material/TextField.tsx',
            ),
        },
    },
});
