import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

export const pageLoaderComponentStyle: Record<string, SxProps<Theme>> = {
    container: containerStyle,
};
