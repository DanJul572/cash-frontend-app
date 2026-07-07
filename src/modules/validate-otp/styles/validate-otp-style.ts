import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 1,
};

const cardStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    gap: 2,
    width: '400px',
    margin: '0 auto',
};

const alertStyle: SxProps<Theme> = {
    width: '400px',
    marginBottom: 2,
};

const boxesRowStyle: SxProps<Theme> = {
    display: 'flex',
    gap: 1,
    justifyContent: 'center',
};

const otpBoxStyle: SxProps<Theme> = {
    width: '48px',
    '& input': {
        textAlign: 'center',
        fontSize: '1.25rem',
        fontWeight: 600,
    },
};

export const validateOtpStyle: Record<string, SxProps<Theme>> = {
    alert: alertStyle,
    card: cardStyle,
    container: containerStyle,
    boxesRow: boxesRowStyle,
    otpBox: otpBoxStyle,
};
