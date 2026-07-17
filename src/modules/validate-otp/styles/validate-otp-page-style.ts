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

const boxesRowStyle = {
    display: 'flex',
    gap: 1,
    justifyContent: 'center',
} as const satisfies SxProps<Theme>;

const otpBoxStyle = {
    width: '48px',
    '& input': {
        textAlign: 'center',
        fontSize: '1.25rem',
        fontWeight: 600,
    },
} as const satisfies SxProps<Theme>;

export const validateOtpPageStyle = {
    alertStyle,
    boxesRowStyle,
    cardStyle,
    containerStyle,
    otpBoxStyle,
} satisfies Record<string, SxProps<Theme>>;
