import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

export const pageLoaderStyle = {
    container: containerStyle,
};
