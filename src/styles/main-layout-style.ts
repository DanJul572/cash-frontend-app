import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    display: 'flex',
};

const contentStyle: SxProps<Theme> = {
    bottom: 0,
    left: '350px',
    overflowY: 'auto',
    padding: '20px',
    position: 'fixed',
    right: 0,
    top: '64px',
};

export const mainLayoutStyle: Record<string, SxProps<Theme>> = {
    container: containerStyle,
    content: contentStyle,
};
