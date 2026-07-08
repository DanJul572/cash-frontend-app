import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 1,
} as const satisfies SxProps<Theme>;

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    gap: 2,
    width: '400px',
    margin: '0 auto',
} as const satisfies SxProps<Theme>;

const alertStyle = {
    width: '400px',
    marginBottom: 2,
} as const satisfies SxProps<Theme>;

export const loginStyle = {
    alertStyle,
    cardStyle,
    containerStyle,
} satisfies Record<string, SxProps<Theme>>;
