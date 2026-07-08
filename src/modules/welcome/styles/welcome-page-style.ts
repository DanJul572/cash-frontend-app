import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
} as const satisfies SxProps<Theme>;

export const welcomePageStyle: Record<string, SxProps<Theme>> = {
    containerStyle,
} satisfies Record<string, SxProps<Theme>>;
