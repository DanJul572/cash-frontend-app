import type { SxProps, Theme } from '@mui/material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 1,
} satisfies SxProps<Theme>;

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    gap: 2,
    width: '400px',
    margin: '0 auto',
} satisfies SxProps<Theme>;

const alertStyle = {
    width: '400px',
    marginBottom: 2,
} satisfies SxProps<Theme>;

const boxesRowStyle = {
    display: 'flex',
    gap: 1,
    justifyContent: 'center',
} satisfies SxProps<Theme>;

const otpBoxStyle = {
    width: '48px',
    '& input': {
        textAlign: 'center',
        fontSize: '1.25rem',
        fontWeight: 600,
    },
} satisfies SxProps<Theme>;

export const validateOtpPageStyle = {
    alertStyle,
    cardStyle,
    containerStyle,
    boxesRowStyle,
    otpBoxStyle,
} satisfies Record<string, SxProps<Theme>>;
