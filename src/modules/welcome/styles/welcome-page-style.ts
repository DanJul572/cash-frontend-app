import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 1,
} as const satisfies SxProps<Theme>;

const dividerStyle = { width: 50, height: 5, borderRadius: 5 } as const satisfies SxProps<Theme>;

export const welcomePageStyle = {
    containerStyle,
    dividerStyle,
} satisfies Record<string, SxProps<Theme>>;
