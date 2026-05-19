import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
    alignItems: 'center',
    backgroundColor: 'primary.main',
    display: 'flex',
    height: 64,
    left: 0,
    padding: '0 16px',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 999,
};

export const topbarComponentStyle = {
    container: containerStyle,
};
