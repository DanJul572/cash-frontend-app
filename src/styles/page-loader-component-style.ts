import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
} as const satisfies SxProps<Theme>;

export const pageLoaderComponentStyle = {
    containerStyle,
} satisfies Record<string, SxProps<Theme>>;
